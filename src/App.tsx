import API from "./components/API";
import ComponentProps, { LowerComponent } from "./components/ComponentProps";
import ThemeToggleButton from "./components/context/ThemeToggleButton";
import EventProps from "./components/EventProps";
import PersonList from "./components/PersonList";
import Props from "./components/Props";
import PropsTs from "./components/PropsTs";

function App() {
  const personAddress = {
    town: "Kathmandu",
    country: "Nepal",
  };
  const showMessage = () => {
    alert("Hello User This is message");
  };
  const showEventType = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert(event.type); // Showing event type
  };
  const personList = [
    {
      name: "Manish",
      class: "Bachelor",
    },
    {
      name: "Manish",
      class: "Bachelor",
    },
    {
      name: "Manish",
      class: "Bachelor",
    },
  ];
  return (
    <div>
      <Props name="Ram" age={15} obj={personAddress} />
      <PersonList list={personList} />
      <br />

      <EventProps handleClick={showMessage} handleClick2={showEventType} />

      <ThemeToggleButton />
      <ComponentProps component={LowerComponent} />
      <API />
      <PropsTs name="Ram" classes="Bachelor"/>
    </div>
  );
}

export default App;
