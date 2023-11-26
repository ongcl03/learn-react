import "./App.css";
import { Person } from "./components/Person";

function App() {
  const name = "cl";

  return (
    <div className="App">
      <Person
        name="hi"
        email="hi@gmail.com"
        age={21}
        isMarried={true}
        friends={["jessica", "jake", "jerry", "jasmine"]}
      />
    </div>
  );
}

export default App;
