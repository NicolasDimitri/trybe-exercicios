import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "200px",
        flexDirection: "column",
        marginLeft: "130px",
      }}
      className="App"
    >
      <Button />
      <Button />
      <Button />
    </div>
  );
}

export default App;
