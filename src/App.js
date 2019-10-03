import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import ShowTodos from "./components/ShowTodos";
import FilterTodo from "./components/FilterTodo";

class App extends React.Component {
  state = {
    list: [{ name: "play", id: 1 }, { name: "sleep", id: 2 }]
  };
  addList = todo => {
    // event.preventDefault();
    console.log("addList");
    this.setState(({ list }) => ({
      list: [...list, { name: "wake up", id: 3 }]
      // list: list.push({ name: "wakeewewewe up", id: 3 })
    }));
  };
  render() {
    console.log("rendered");
    return (
      <div className="App">
        <AddTodo onSubmit={this.addList} />
        <ShowTodos list={this.state.list} />
        <FilterTodo />
      </div>
    );
  }
}

export default App;
