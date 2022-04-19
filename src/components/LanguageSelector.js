import React from "react";

import LanguageContext from "../contexts/LanguageContext";

const LanguageSelector = () => {
  return (
    <LanguageContext.Consumer>
      {({ onLanguageChange }) => {
        return (
          <div>
            Select a language:
            <i
              onClick={() => onLanguageChange("english")}
              className="flag us"
            ></i>
            <i
              onClick={() => onLanguageChange("german")}
              className="flag de"
            ></i>
          </div>
        );
      }}
    </LanguageContext.Consumer>
  );
};

export default LanguageSelector;
