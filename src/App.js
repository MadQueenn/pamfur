import "./App.css";
import background from "./assets/calendarBackground.svg";
import TemporaryDrawer from "./components/TemporaryDrawer";


function App() {
  return (
    <div className="App">
      <h1>Calendar 2018</h1>
      <img className="backgroundImg" alt="calendarlogo" src={background} />

      <TemporaryDrawer />

    </div>
  );
}

export default App;
