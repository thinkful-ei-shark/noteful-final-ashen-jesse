import React from "react";
import ApiContext from "./ApiContext.js";

class AddNote extends React.Component {
  static contextType = ApiContext;

  state = {
    name: "",
    content: "",
    folderId: "",
  };

  handleName = (evt) => {
    this.setState({ name: evt.currentTarget.value });
  };

  handleContent = (evt) => {
    this.setState({ content: evt.currentTarget.value });
  };

  handleFolderChoice = (evt) => {
    this.setState({ folderId: evt.currentTarget.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.context
      .addNote(this.state.name, this.state.content, this.state.folderId)
      .then(() => {
        this.props.history.push("/");
      });
  };
  validateName = () => {
    const name = this.state.name.value.trim();
    if (!name)
        return 'Name cannot be empty.'
    return;
}

  render() {
    console.log(this.state, "this is working");
    return (
      <form className="add-note" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleName}
          required
        />
        <input
          type="textArea"
          placeholder="Content"
          value={this.state.content}
          onChange={this.handleContent}
          required
        />
        <select onChange={this.handleFolderChoice} required>
          <option value="">Please Select</option>
          {this.context.folders.map((folder) => {
            return <option value={folder.id}>{folder.name}</option>;
          })}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddNote;
