import logo from "./logo.svg";
import "./App.css";
import Background from "./components/Background";
import {ToDoContextProvider} from "./store/todo-context";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  return (
    <ToDoContextProvider>
      <div className="App">
        <Background>
          <ToDoContainer/>
        </Background>
      </div>
      </ToDoContextProvider>
  );
}

export default App;
