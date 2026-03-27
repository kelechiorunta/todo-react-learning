import "./App.css";
import Counter from "./components/Counter/Counter";
import CounterI from "./components/Counter/CounterI";
import Profile from "./components/Profile/Profile";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <>
      <CounterI />
      <Counter />
      <Todo />
      <Profile />
    </>
  );
}

export default App;
