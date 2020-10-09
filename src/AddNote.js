import React from "react";
import ApiContext from "./ApiContext.js";
import {getNotesForFolder} from './notes-helpers'

class AddNote extends React.Component {
  static contextType = ApiContext;

  state = { 
    name: "",
    content: "", 
  };

  handleName = (evt) => {
    this.setState({ name: evt.currentTarget.value });
  };

  handleContent = (evt) => {
    this.setState({ content: evt.currentTarget.value });
  };

  handleFolderChoice = (evt) => {
    this.setState({ folderChoice: evt.curre})
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("this is working");
    console.log(`/folder/${this.context.folders.name}`)
    this.context.addNote(this.state.name, this.state.content).then(() => {
      this.props.history.push("/");
      if (this.state.name === this.context.folders.name){
        return this.props.history.push(`/folder/${this.context.folders.name}`)
      }
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
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default AddNote;
