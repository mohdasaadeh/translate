import React from "react";

import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;

  renderField() {
    return this.context === "english" ? "First Name" : "Vorname";
  }

  render() {
    return (
      <div className="ui content">
        <div>{this.renderField()}</div>
        <input />
      </div>
    );
  }
}

export default Field;
