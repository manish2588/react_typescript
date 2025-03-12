import API from "./components/API";
import BasicTs from "./components/BasicTs";
import ComponentProps, { LowerComponent } from "./components/ComponentProps";
import ThemeToggleButton from "./components/context/ThemeToggleButton";
import DataFetching from "./components/DataFetching";
import EventProps from "./components/EventProps";
import './App.css'
import PropsTs from "./components/PropsTs";

function App() {
  const showMessage = () => {
    alert("Hello User This is message");
  };
  const showEventType = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert(event.type); // Showing event type
  };

  return (
    <div>
      <EventProps handleClick={showMessage} handleClick2={showEventType} />

      <ThemeToggleButton />
      <ComponentProps component={LowerComponent} />
      <API />
      <PropsTs name="Ram" classes="Bachelor" />
      <BasicTs />
      <DataFetching/>
    </div>
  );
}

export default App;
