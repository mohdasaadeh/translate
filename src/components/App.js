import React from "react";

import LanguageSelector from "./LanguageSelector";
import CreateUser from "./CreateUser";
import { LanguageStore } from "../contexts/LanguageContext";

const App = () => {
  return (
    <div className="ui container">
      <LanguageStore>
        <LanguageSelector />
        <CreateUser />
      </LanguageStore>
    </div>
  );
};

export default App;
