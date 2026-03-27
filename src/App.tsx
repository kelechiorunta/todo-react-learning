import "./App.css";
// import Counter from "./components/Counter/Counter";
// import CounterI from "./components/Counter/CounterI";
import Task2 from "./components/Counter/Task2";
import Profile from "./components/Profile/Profile";
import Todo from "./components/Todo/Todo";
import TaskComponent from "./components/Counter/TaskComponent";

function App() {
  return (
    <>
      <TaskComponent />
      <Task2 />
      <Todo />
      <Profile />
    </>
  );
}

export default App;
