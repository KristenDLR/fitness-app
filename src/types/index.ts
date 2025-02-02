export interface Session {
    id: string;
    user_id: string;
    name: string;
    start_time: string;
    duration: number;
    status: string;
    routine_id: string;
    reminders?: Reminder[];
    recurrence?: Recurrence | null;
    notes:string;
  }
  
  export interface Reminder {
    id: string;
    session_id: string;
    time: string;
    type: string;
  }
  
  export interface Recurrence {
    frequency: string;
    days_of_week?: string[];
    custom_dates?: string[];
  }
  