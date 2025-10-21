import { supabase } from './supabase';

export class DebugLogger {
  static async log(
    rideId: string,
    logType: string,
    message: string,
    data?: any
  ): Promise<void> {
    try {
      console.log(`[DEBUG ${logType}] ${message}`, data);

      await supabase.from('debug_logs').insert({
        ride_id: rideId,
        log_type: logType,
        message,
        data: data || null,
      });
    } catch (error) {
      console.error('Failed to save debug log:', error);
    }
  }
}
