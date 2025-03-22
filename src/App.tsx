import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <h1>My first App</h1>
      <div className="card">
        {"Profile "}
        <Button title="Profile" onClick={() => alert("Profile clicked")} />
      </div>
      <div className="card">
        {"Settings "}
        <Button title="Settings" onClick={() => alert("Settings clicked")} />
      </div>
    </>
  );
}

export default App;
