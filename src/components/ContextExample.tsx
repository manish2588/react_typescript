import { useContext } from "react";
import ValueContext from "./contextPractice/ValueContext";

function ContextExample() {
  const context = useContext(ValueContext);
  if (!context) {
    throw new Error("ContextExample must be used within a ValueProvider");
  }

  const { value, changeTheme } = context; // Now it's safe to destructure

  return (
    <div>
      <h1>Context API Example</h1>
      {value ? "Hello, This is light mode" : "Hello, This is dark mode"}
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
}

export default ContextExample;
