import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { completionId, tripType } = await req.json();

    if (!completionId || !tripType) {
      return new Response(
        JSON.stringify({ error: "Missing completionId or tripType" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Get completion data from database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const { createClient } = await import("npm:@supabase/supabase-js@2");
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    let completionData: any;
    let tableName: string;

    // Fetch completion data based on trip type
    if (tripType === "regular") {
      tableName = "trip_completions";
    } else if (tripType === "rental") {
      tableName = "rental_trip_completions";
    } else if (tripType === "outstation") {
      tableName = "outstation_trip_completions";
    } else if (tripType === "airport") {
      tableName = "airport_trip_completions";
    } else {
      return new Response(
        JSON.stringify({ error: "Invalid trip type" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { data, error } = await supabase
      .from(tableName)
      .select("*")
      .eq("id", completionId)
      .single();

    if (error || !data) {
      return new Response(
        JSON.stringify({ error: "Completion not found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    completionData = data;

    // Generate PDF using jsPDF library
    const { jsPDF } = await import("npm:jspdf@2.5.2");
    const doc = new jsPDF();

    // Company logo (using base64 encoded image)
    // This is a placeholder - replace with your actual logo
    const logoBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

    try {
      // Add logo at top left (30x30 size)
      doc.addImage(logoBase64, "PNG", 15, 10, 30, 30);
    } catch (e) {
      console.log("Logo not added:", e);
    }

    // Company details
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("A1 TAXI SERVICE", 50, 20);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Hosur, Tamil Nadu", 50, 27);
    doc.text("Phone: +91 XXXXXXXXXX", 50, 32);

    // Invoice header
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("TRIP INVOICE", 15, 50);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Invoice ID: ${completionId.substring(0, 8)}`, 15, 58);
    doc.text(`Date: ${new Date(completionData.completed_at).toLocaleDateString()}`, 15, 64);
    doc.text(`Trip Type: ${tripType.toUpperCase()}`, 15, 70);

    // Trip details
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Trip Details", 15, 85);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    let yPos = 93;

    doc.text(`Pickup: ${completionData.pickup_address || "N/A"}`, 15, yPos);
    yPos += 7;
    doc.text(`Drop-off: ${completionData.dropoff_address || "N/A"}`, 15, yPos);
    yPos += 7;
    doc.text(`Distance: ${completionData.actual_distance_km?.toFixed(2)} km`, 15, yPos);
    yPos += 7;
    doc.text(`Duration: ${completionData.actual_duration_minutes} minutes`, 15, yPos);
    yPos += 7;

    // Driver details
    if (completionData.driver_name) {
      doc.text(`Driver: ${completionData.driver_name}`, 15, yPos);
      yPos += 7;
    }
    if (completionData.vehicle_details) {
      doc.text(`Vehicle: ${completionData.vehicle_details}`, 15, yPos);
      yPos += 7;
    }

    yPos += 5;

    // Route screenshot (using Google Maps Static API)
    const googleMapsApiKey = Deno.env.get("EXPO_PUBLIC_GOOGLE_MAPS_API_KEY");

    if (googleMapsApiKey && completionData.pickup_lat && completionData.pickup_lng &&
        completionData.dropoff_lat && completionData.dropoff_lng) {

      // Google Maps Static API URL with route
      const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?` +
        `size=600x300&` +
        `markers=color:green|label:A|${completionData.pickup_lat},${completionData.pickup_lng}&` +
        `markers=color:red|label:B|${completionData.dropoff_lat},${completionData.dropoff_lng}&` +
        `path=color:0x0000ff|weight:3|${completionData.pickup_lat},${completionData.pickup_lng}|${completionData.dropoff_lat},${completionData.dropoff_lng}&` +
        `key=${googleMapsApiKey}`;

      try {
        const mapResponse = await fetch(mapUrl);
        if (mapResponse.ok) {
          const mapBlob = await mapResponse.arrayBuffer();
          const base64Map = btoa(String.fromCharCode(...new Uint8Array(mapBlob)));
          const mapDataUrl = `data:image/png;base64,${base64Map}`;

          // Add map image - full width
          doc.addImage(mapDataUrl, "PNG", 15, yPos, 180, 90);
          yPos += 95;
        }
      } catch (e) {
        console.log("Map screenshot not added:", e);
      }
    }

    // Fare breakdown
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Fare Breakdown", 15, yPos);
    yPos += 8;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    const fareDetails = completionData.fare_details || {};

    const fareItems = [
      { label: "Base Fare", value: fareDetails.base_fare },
      { label: "Distance Fare", value: fareDetails.distance_fare },
      { label: "Time Fare", value: fareDetails.time_fare },
      { label: "Extra KM Charges", value: fareDetails.extra_km_charges },
      { label: "Deadhead Charges", value: fareDetails.deadhead_charges },
      { label: "Driver Allowance", value: fareDetails.driver_allowance },
      { label: "Surge Charges", value: fareDetails.surge_charges },
      { label: "Platform Fee", value: fareDetails.platform_fee },
      { label: "GST on Charges", value: fareDetails.gst_on_charges },
      { label: "GST on Platform Fee", value: fareDetails.gst_on_platform_fee },
    ];

    fareItems.forEach((item) => {
      if (item.value && item.value > 0) {
        doc.text(item.label, 15, yPos);
        doc.text(`₹${item.value.toFixed(2)}`, 180, yPos, { align: "right" });
        yPos += 6;
      }
    });

    // Subtotal line if promo exists
    if (completionData.promo_code && completionData.promo_discount && completionData.original_fare) {
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.line(15, yPos, 195, yPos);
      yPos += 7;
      doc.text("Subtotal (Before Promo)", 15, yPos);
      doc.text(`₹${parseFloat(completionData.original_fare).toFixed(2)}`, 180, yPos, { align: "right" });
      yPos += 7;

      // Promo discount
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(0, 150, 0); // Green color for discount
      doc.text(`Promo Discount (${completionData.promo_code})`, 15, yPos);
      doc.text(`-₹${parseFloat(completionData.promo_discount).toFixed(2)}`, 180, yPos, { align: "right" });
      yPos += 7;
      doc.setTextColor(0, 0, 0); // Reset to black
    }

    // Total
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.line(15, yPos, 195, yPos);
    yPos += 7;
    doc.text("Total Fare", 15, yPos);
    doc.text(`₹${completionData.total_fare?.toFixed(2) || "0.00"}`, 180, yPos, { align: "right" });

    // Footer
    yPos += 15;
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.text("Thank you for choosing A1 Taxi Service!", 105, yPos, { align: "center" });

    // Generate PDF as base64
    const pdfBase64 = doc.output("datauristring");

    return new Response(
      JSON.stringify({
        success: true,
        pdf: pdfBase64,
        filename: `Trip_Invoice_${completionId.substring(0, 8)}.pdf`
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );

  } catch (error) {
    console.error("Error generating PDF:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});