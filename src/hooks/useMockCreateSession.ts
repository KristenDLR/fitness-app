import { useState } from "react";
import { Session } from "../types";
import sessionsData from "../server/data/db";

const useMockCreateSession = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const createSession = (newSession: Omit<Session, "id">) => {
    setLoading(true);
    try {
      setTimeout(() => {
        const newId = (sessionsData.length + 1).toString();
        const sessionWithId: Session = { id: newId, ...newSession };
        sessionsData.push(sessionWithId);
        setLoading(false);
        console.log("Session created successfully", sessionWithId);
      }, 500);
    } catch (err) {
      setError(err as Error);
      setLoading(false);
    }
  };

  return { createSession, loading, error };
};

export default useMockCreateSession;
