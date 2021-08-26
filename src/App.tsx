import { config } from "config";
import React, { useState, useRef, useCallback } from "react";
import { AvatarState } from "types";
import { ReactComponent as Logo } from "assets/svg/logo-dark.svg";
import "App.css";
import { Slider } from "Slider";
import { Avatar } from "Avatar";
import { PartsKeys } from "Parts";
import { AccessoryButtons } from "AccessoryButtons";
import { randomizedAvatar } from "utils/randomized";
import { RandomizeButton } from "Avatar/RandomizeButton";
import axios from "axios";
import { toBlob } from "html-to-image";

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
  const aviRef = useRef<HTMLDivElement>(null);
  const accessories = state[PartsKeys.ACCESSORY];

  const onClickSaveOrPrint = useCallback(() => {
    if (aviRef.current === null) {
      return;
    }

    const fileName = Object.entries(state).reduce(
      (prev, cur) =>
        `${prev}${Array.isArray(cur[1]) ? cur[1].join("") : cur[1]}`,
      ""
    );

    toBlob(aviRef.current, { cacheBust: true })
      .then((blob) => {
        if (!blob) return;
        // const link = document.createElement("a");
        console.log(fileName);
        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append("myFile", blob, fileName);

        // Details of the uploaded file
        console.log(blob);

        // Request made to the backend api
        // Send formData object to my php file for save in folder
        axios.post(process.env.PUBLIC_URL + "/upload.php", formData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [aviRef, state]);

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
          <Avatar ref={aviRef} {...state} />
          <RandomizeButton onClick={() => setState(randomizedAvatar())} />
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
          <button className="save-button" onClick={onClickSaveOrPrint}>
            {copy.buttons.saveAndEmail}
          </button>
          <a className="print-button" href="#">
            {copy.buttons.printNow}
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
