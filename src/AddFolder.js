import { faFolder } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ApiContext from './ApiContext.js';

class AddFolder extends React.Component {
  static contextType = ApiContext;
  state = { name: '' };
  handleNameChange = (evt) => {
    this.setState({ name: evt.currentTarget.value });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.context.addFolder(this.state.name).then(() => {
      this.props.history.push('/');
    });
  };
  render() {
    return (
      <form className="add-folder" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="folder name here"
          value={this.state.name}
          onChange={this.handleNameChange}
          required
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default AddFolder;
