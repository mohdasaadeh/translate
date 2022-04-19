import React from "react";

import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderButton(language) {
    return language === "english" ? "Submit" : "Vorlegen";
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => {
          return (
            <LanguageContext.Consumer>
              {(language) => (
                <button className={`ui button ${color}`}>
                  {this.renderButton(language)}
                </button>
              )}
            </LanguageContext.Consumer>
          );
        }}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
