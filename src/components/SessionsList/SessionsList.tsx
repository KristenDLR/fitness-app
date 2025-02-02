import React from "react";
import useMockSessions from "../../hooks/useMockSessions";
import { Session } from "../../types";

interface Props {
  userId: string;
}

const SessionsList: React.FC<Props> = ({ userId }) => {
  const { loading, error, data: sessions } = useMockSessions(userId);

  if (loading) return <p>Loading sessions...</p>;
  if (error) return <p>Error loading sessions: {error.message}</p>;

  return (
    <div>
      <h2>Your Sessions</h2>
      <ul>
        {sessions.map((session: Session) => (
          <li key={session.id}>
            <strong>{session.name}</strong> - {session.status} <br />
            Starts at: {new Date(session.start_time).toLocaleString()} <br />
            Duration: {session.duration} mins
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionsList;
