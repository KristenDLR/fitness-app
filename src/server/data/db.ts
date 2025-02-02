// const sessions = [
//     {
//       id: "1",
//       user_id: "1",
//       name: "Getting wet",
//       routine_id: "1",
//       status: "completed",
//       start_time: "2025-02-10T10:00:00Z",
//       duration: 60, // in minutes
//       reminders: [
//         { id: "1", session_id: "1", time: "2025-02-10T09:00:00Z", type: "relative" },
//       ],
//       recurrence: { frequency: "weekly", days_of_week: ["Monday"] },
//       notes: "Bring a towel!",
//     },
//     {
//       id: "2",
//       user_id: "1",
//       name: "meeting trolls",
//       routine_id: "1",
//       status: "upcoming",
//       start_time: "2025-02-12T14:00:00Z",
//       duration: 30,
//       reminders: [{ id: "2", session_id: "2", time: "2025-02-12T13:45:00Z", type: "relative" }],
//       recurrence: null,
//       notes: "",
//     },
//   ];

//   export default sessions;

import { Session } from "../../types";

const sessionsData: Session[] = [
  {
    id: "1",
    user_id: "1",
    name: "Getting wet",
    start_time: "2025-02-10T10:00:00Z",
    duration: 60,
    status: "completed",
    routine_id: "1",
    reminders: [{ id: "1", session_id: "1", time: "2025-02-10T09:00:00Z", type: "relative" }],
    recurrence: { frequency: "weekly", days_of_week: ["Monday"] },
    notes: "Bring a towel!",
  },
  {
          id: "2",
          user_id: "1",
          name: "meeting trolls",
          routine_id: "1",
          status: "upcoming",
          start_time: "2025-02-12T14:00:00Z",
          duration: 30,
          reminders: [{ id: "2", session_id: "2", time: "2025-02-12T13:45:00Z", type: "relative" }],
          recurrence: null,
          notes: "",
        },
];

export default sessionsData;

  