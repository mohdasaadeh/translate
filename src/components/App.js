import React, { useState } from "react";

import LanguageSelector from "./LanguageSelector";
import CreateUser from "./CreateUser";
import LanguageContext from "../contexts/LanguageContext";

const App = () => {
  const [state, setState] = useState({ language: "english" });

  return (
    <div>
      <LanguageSelector setLanguage={setState} />
      <LanguageContext.Provider value={state.language}>
        <CreateUser />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
