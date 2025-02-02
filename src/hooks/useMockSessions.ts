import { useState, useEffect } from "react";
import { Session } from "../types";  // Import TypeScript types
import sessionsData from "../server/data/db";

const useMockSessions = (userId: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Session[]>([]);

  useEffect(() => {
    setLoading(true);
    try {
      setTimeout(() => {
        const userSessions = sessionsData.filter((session) => session.user_id === userId);
        
        // Explicitly tell TypeScript that this is a Session array
        setData(userSessions as Session[]);
        setLoading(false);
      }, 500);
    } catch (err) {
      setError(err as Error);
      setLoading(false);
    }
  }, [userId]);

  return { loading, error, data };
};

export default useMockSessions;
