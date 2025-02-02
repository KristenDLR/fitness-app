import React, { useState } from "react";
import useMockCreateSession from "../../hooks/useMockCreateSession";

const CreateSessionForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [duration, setDuration] = useState<number>(30);

  const { createSession, loading, error } = useMockCreateSession();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createSession({
        user_id: "1",
        name,
        start_time: startTime,
        duration,
        status: "upcoming",
        routine_id: "",
        notes: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Session Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Duration (minutes)"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create Session"}
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default CreateSessionForm;
