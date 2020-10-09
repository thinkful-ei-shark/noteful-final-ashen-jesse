import React from "react";
import ApiContext from "./ApiContext.js";

class AddNote extends React.Component {
  static contextType = ApiContext;
  state = { note: "", text: "" };
  handleNote = (evt) => {
    this.setState({ note: evt.currentTarget.value });
  };
  handleText = (evt) => {
    this.setState({ text: evt.currentTarget.value });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.context.addNote(this.state.name).then(() => {
      this.props.history.push("/");
    });
  };
  render() {
    return (
      <form className="add-note" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Name of note"
          value={this.state.note}
          onchange={this.handleNote}
        />
        <input
          type="textArea"
          placeholder="Description"
          value={this.state.text}
          onChange={this.handleText}
        />
        <select>
          {this.context.folders.map((folder) => {
            return <option value={folder.name}>{folder.name}</option>;
          })}
        </select>
      </form>
    );
  }
}

export default AddNote;
