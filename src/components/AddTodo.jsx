import React from "react";

class AddTodo extends React.Component {
  state = {
    currentValue: ""
  };
  showTod = event => {
    event.preventDefault();
    this.props.onSubmit(this.listName.value);
    console.log("addddd", this.props, event.target.value);
  };
  render() {
    return (
      <form onSubmit={this.showTod}>
        <input ref={input => (this.listName = input)} type="text" />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}
export default AddTodo;
