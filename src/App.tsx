import { config } from "config";
import React, { useState } from "react";
import { AvatarState } from "types";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import "App.css";
import { Slider } from "Slider";
import { Avatar } from "Avatar";

const { copy, inputs } = config;

const avatar: AvatarState = {
  bg: 0,
  body: 0,
  face: 0,
  hair: 0,
  eyes: 0,
  nose: 0,
  mouth: 0,
  accessory: 0,
  skinTone: 0,
};

function App() {
  const [state, setState] = useState<AvatarState>(avatar);

  return (
    <div className="App">
      <div className="header">
        <Logo className="logo" />
      </div>
      <div className="app-inner">
        <div className="avatar-wrapper">
          <div>
            <h1>{copy.title}</h1>
            {copy.body.map((graph, index) => (
              <p key={`graph-${index}`}>{graph}</p>
            ))}
          </div>
          <Avatar {...state} />
        </div>
        <div className="sliders-wrapper">
          {inputs.map(({ key, ...input }, index) => (
            <Slider
              {...input}
              key={`${key}-${index}`}
              value={state[key]}
              onChange={(value) => setState({ ...state, [key]: value })}
            />
          ))}
        </div>
      </div>
      <div className="footer">
        <div className="footer-inner">
          <a className="save-button" href="#">
            {copy.buttons.saveAndEmail}
          </a>
          <a className="print-button" href="#">
            {copy.buttons.printNow}
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
