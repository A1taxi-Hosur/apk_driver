import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface PushNotificationPayload {
  pushTokens: string[];
  rideId: string;
  rideCode: string;
  pickupAddress: string;
  destinationAddress: string;
  customerName: string;
  fareAmount: number;
  distance?: number;
  bookingType: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    console.log('📱 Send Push Notification Edge Function called');

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const payload: PushNotificationPayload = await req.json();
    console.log('📋 Payload:', JSON.stringify(payload, null, 2));

    const { pushTokens, rideId, rideCode, pickupAddress, customerName, fareAmount, bookingType } = payload;

    if (!pushTokens || pushTokens.length === 0) {
      console.log('⚠️ No push tokens provided');
      return new Response(
        JSON.stringify({ error: "No push tokens provided" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const messages = pushTokens
      .filter(token => token && token.startsWith('ExponentPushToken['))
      .map(token => ({
        to: token,
        sound: 'default',
        title: '🚗 New Ride Request!',
        body: `${customerName}\n📍 ${pickupAddress}\n💰 ₹${fareAmount}`,
        data: {
          rideId,
          rideCode,
          type: 'ride_request',
          screen: 'rides',
          pickupAddress,
          customerName,
          fareAmount,
          bookingType,
        },
        priority: 'high',
        channelId: 'ride-requests-urgent',
        _displayInForeground: true,
        badge: 1,
      }));

    console.log(`📤 Sending ${messages.length} push notifications...`);

    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messages),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Expo Push API error:', errorText);
      throw new Error(`Expo Push API error: ${errorText}`);
    }

    const result = await response.json();
    console.log('✅ Push notifications sent:', JSON.stringify(result, null, 2));

    const hasErrors = result.data?.some((item: any) => item.status === 'error');
    if (hasErrors) {
      console.warn('⚠️ Some notifications failed:', result.data);
    }

    return new Response(
      JSON.stringify({
        success: true,
        sentCount: messages.length,
        results: result.data,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error('❌ Error in send-ride-push-notification:', error);

    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});