import React from "react";

import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  static contextType = LanguageContext;

  renderButton() {
    return this.context === "english" ? "Submit" : "Vorlegen";
  }

  render() {
    return <button className="ui button primary">{this.renderButton()}</button>;
  }
}

export default Button;
