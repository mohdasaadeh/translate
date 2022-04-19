import React from "react";

import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  renderField(language) {
    return language === "english" ? "First Name" : "Vorname";
  }

  render() {
    return (
      <LanguageContext.Consumer>
        {(language) => {
          return (
            <div className="ui content">
              <div>{this.renderField(language)}</div>
              <input />
            </div>
          );
        }}
      </LanguageContext.Consumer>
    );
  }
}

export default Field;
