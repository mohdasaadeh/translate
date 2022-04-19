import React from "react";

const LanguageSelector = ({ setLanguage }) => {
  return (
    <div>
      Select a language:
      <i
        onClick={() => setLanguage({ language: "english" })}
        className="flag us"
      ></i>
      <i
        onClick={() => setLanguage({ language: "german" })}
        className="flag de"
      ></i>
    </div>
  );
};

export default LanguageSelector;
