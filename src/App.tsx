import CreateSessionForm from "./components/CreateSessionForm/CreateSessionForm";
import SessionsList from "./components/SessionsList/SessionsList";

const App = () => {
  return (
    <div>
      <h1>Workout Sessions</h1>
      <CreateSessionForm />
      <SessionsList userId="1" />
    </div>
  );
};

export default App;
