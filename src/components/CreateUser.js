import React from "react";

import Field from "./Field";
import Button from "./Button";

class CreateUser extends React.Component {
  render() {
    return (
      <div className="ui form">
        <Field />
        <Button />
      </div>
    );
  }
}

export default CreateUser;
