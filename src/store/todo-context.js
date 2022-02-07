import React, { useState } from "react";

const ToDoContext = React.createContext({
  darkState: true,
  toDoItems: [],
  toggleDarkStateHandler: () => {},
  toggleCompleteTaskHandler: () => {},
});

export const ToDoContextProvider = (props) => {
  const [darkState, setDarkState] = useState(true);
  const [toDoItems, setToDoItems] = useState([
    { id: "1", task: "Read for 1 hour", completed: false },
    { id: "2", task: "Study", completed: true },
  ]);

  const toggleDarkStateHandler = () => {
    setDarkState(!darkState);
  };

  const toggleCompleteTaskHandler = (id) => {
    // Find index of the task to update
    const index = toDoItems.findIndex((item) => {
      return item.id === id;
    });

    // 1. Make a shallow copy of the items
    let items = [...toDoItems];
    // 2. Make a shallow copy of the item you want to mutate
    let item = { ...items[index] };
    // 3. Replace the property you're intested in
    //item.completed = true;
    item.completed = !item.completed;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[index] = item;
    // 5. Set the state to our new copy
    setToDoItems(items);
  };

  return (
    <ToDoContext.Provider
      value={{
        darkState,
        toDoItems,
        toggleDarkStateHandler,
        toggleCompleteTaskHandler,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDoContext;
