import React, { useState } from "react";

const ToDoContext = React.createContext({
  darkState: true, // Sets the light or dark screen mode
  toDoItems: [], // Array to store the To Do items which consist of an id, task text, and completed indicator
  toggleDarkStateHandler: () => {}, // Function to change light or dark screen mode
  toggleCompleteTaskHandler: () => {}, // Function to change the complete state of a To Do item
  addToDoItem: () => {}, // Function to add an item to the toDoItems array
  clearCompleted: () => {}, // Function to remove all items marked completed in the toDoItems array
  removeToDoItem: () => {}, // Function to remove a specific item (given by the items ID)
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
    // 2. Make a shallow copy of the item to update
    let item = { ...items[index] };
    // 3. Update the completed property
    item.completed = !item.completed;
    // 4. Put it back into the array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[index] = item;
    // 5. Set the state to the new copy
    setToDoItems(items);
  };

  const addToDoItem = (newTask) => {
    const d = new Date();
    // Add the new item to the start of the list
    setToDoItems(prevState => ([{ id: d.getTime(), task: newTask, completed: false }, ...prevState]));
  }

  const removeToDoItem = (id) => {
    const updatedList = toDoItems.filter (item => item.id !== id);
    setToDoItems(updatedList);
  }

  const clearCompleted = () => {
      const clearedList = toDoItems.filter(item =>
         (item.completed !== true)
      );
      setToDoItems(clearedList);
  }

  return (
    <ToDoContext.Provider
      value={{
        darkState,
        toDoItems,
        toggleDarkStateHandler,
        toggleCompleteTaskHandler,
        addToDoItem,
        clearCompleted,
        removeToDoItem
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDoContext;
