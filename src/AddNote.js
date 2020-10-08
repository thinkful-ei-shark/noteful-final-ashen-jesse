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
}
