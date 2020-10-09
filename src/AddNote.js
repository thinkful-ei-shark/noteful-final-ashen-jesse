import React from "react";
import ApiContext from "./ApiContext.js";

class AddNote extends React.Component {
  static contextType = ApiContext;
  state = { name: "", content: "" };
  handleName = (evt) => {
    this.setState({ name: evt.currentTarget.value });
  };
  handleContent = (evt) => {
    this.setState({ content: evt.currentTarget.value });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("this is working");
    this.context.addNote(this.state.note).then(() => {
      this.props.history.push("/");
    });
  };
  render() {
    console.log(this.state, "this is working");
    return (
      <form className="add-note" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleName}
        />
        <input
          type="textArea"
          placeholder="Content"
          value={this.state.content}
          onChange={this.handleContent}
        />
        <select>
          {this.context.folders.map((folder) => {
            return <option value={folder.name}>{folder.name}</option>;
          })}
        </select>
        <button>Submit</button>
      </form>
    );
  }
}

export default AddNote;
