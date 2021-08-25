import { config } from "config";
import React, { useState } from "react";
import { AvatarState } from "types";
import { ReactComponent as Logo } from "assets/svg/logo-dark.svg";
import "App.css";
import { Slider } from "Slider";
import { Avatar } from "Avatar";
import { PartsKeys } from "Parts";
import { AccessoryButtons } from "AccessoryButtons";
import { randomizedAvatar } from "utils/randomized";

const { copy, sliders, buttons } = config;

const avatar: AvatarState = {
  bg: 0,
  body: 0,
  face: 0,
  hair: 0,
  eyes: 0,
  nose: 0,
  mouth: 0,
  accessory: [],
  skinTone: 0,
  shirtColor: 0,
  hairColor: 0,
};

function App() {
  const [state, setState] = useState<AvatarState>(avatar);
  const accessories = state[PartsKeys.ACCESSORY];
  return (
    <div className="App">
      <div className="header">
        <Logo className="logo" />
        <div>
          <h1>{copy.title}</h1>
          {copy.body.map((graph, index) => (
            <p key={`graph-${index}`}>{graph}</p>
          ))}
        </div>
      </div>
      <div className="app-inner">
        <div className="avatar-wrapper">
          <Avatar onClick={() => setState(randomizedAvatar())} {...state} />
        </div>
        {buttons.map(
          ({ key, values }) =>
            key === PartsKeys.ACCESSORY && (
              <AccessoryButtons
                key={PartsKeys.ACCESSORY}
                values={values}
                activeValues={accessories}
                onClick={(accValue) => {
                  setState({
                    ...state,
                    accessory:
                      accessories.indexOf(accValue) > -1
                        ? accessories.filter((acc) => acc !== accValue)
                        : [...accessories, accValue],
                  });
                }}
              />
            )
        )}
        <div className="sliders-wrapper">
          {sliders.map(
            ({ key, ...input }, index) =>
              key !== PartsKeys.ACCESSORY && (
                <Slider
                  {...input}
                  key={`${key}-${index}`}
                  value={state[key]}
                  onChange={(value) => setState({ ...state, [key]: value })}
                />
              )
          )}
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
