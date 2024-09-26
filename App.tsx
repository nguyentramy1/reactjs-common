import React, { useState } from "react";
import "./App.scss";
import Button from "./common/Button/Button.tsx";
import Input from "./common/Input/Input.tsx";
import DropDownField from "./common/Input/DropDown/DropDownField.tsx";

function App() {
  const [showForm, setShowForm] = useState(true);
  const [name, setName] = useState("tra my");

  const handleFormSubmit = (name: string) => {
    console.log(`Name submitted: ${name}`);
    setShowForm(false);
  };

  const changeName = () => {
    setName("my");
  };
  const fakeOptions = [
    {
      value: "opt1",
      label: "option 1",
    },
    {
      value: "opt2",
      label: "option 2",
    },

    {
      value: "opt3",
      label: "option 3",
    },
    {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    },
  ];


  return (
    <div className="App">
      {/* <header className="App-header">
        <Button
          content="Show Me"
          onClick={() => setShowForm(true)}
          disabled={showForm}
        />
        <Button
          content="Show Me 2"
          onClick={() => setShowForm(true)}
          disabled={showForm}
          className="show-me-2"
        />
        <Button
          content="Hide Me"
          onClick={() => setShowForm(false)}
          disabled={!showForm}
        />
        <Button content="Set my name" onClick={changeName} />
        {showForm && <Input onChange={setName} value={name} />}
      </header> */}
      <DropDownField options={fakeOptions} />
    </div>
    
  );
}

export default App;
