import React, { useState } from "react";

import LanguageSelector from "./LanguageSelector";
import CreateUser from "./CreateUser";
import LanguageContext, { LanguageStore } from "../contexts/LanguageContext";

const App = () => {
  const [state, setState] = useState({ language: "english" });

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
