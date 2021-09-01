import { config } from "config";
import React, { useState, useRef, useCallback } from "react";
import { AvatarState } from "types";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import "App.css";
import { Slider } from "Slider";
import { Avatar } from "Avatar";
import { PartsKeys } from "Parts";
import { AccessoryButtons } from "AccessoryButtons";
import { randomizedAvatar } from "utils/randomized";
import { RandomizeButton } from "Avatar/RandomizeButton";
import axios from "axios";
import { toBlob } from "html-to-image";
import { NameInput } from "NameInput";
import { LeadModal } from "LeadModal";

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
  const [state, setState] = useState<AvatarState>(() => avatar);
  const [fileName, setFileName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [leadName, setLeadName] = useState("");

  const aviRef = useRef<HTMLDivElement>(null);
  const accessories = state[PartsKeys.ACCESSORY];

  const handleSavePhoto = useCallback(() => {
    if (aviRef.current === null) {
      return;
    }

    toBlob(aviRef.current, {
      cacheBust: true,
      // canvasWidth: 189.12,
      // canvasHeight: 218.67,
      // width: 192,
      // height: 192,
      pixelRatio: 2,
    })
      .then((blob) => {
        if (!blob) return;
        // const link = document.createElement("a");
        const _fileName = Object.entries(state).reduce(
          (prev, cur) =>
            `${prev}${Array.isArray(cur[1]) ? cur[1].join("") : cur[1]}`,
          ""
        );

        //if file name has already been set
        if (fileName === _fileName) {
          return;
        }

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append("myFile", blob, `${_fileName}.png`);

        // Details of the uploaded file
        // console.log(blob);

        // Request made to the backend api
        // Send formData object to my php file for save in folder
        axios
          .post(
            process.env.NODE_ENV === "development"
              ? "http://localhost:8888/upload.php"
              : process.env.PUBLIC_URL + "/upload.php",
            formData
          )
          .then(() => {
            setFileName(`${_fileName}.png`);
            setModalOpen(true);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [aviRef, state, fileName]);

  return (
    <div id="appRoot" className="App">
      <LeadModal
        isOpen={modalOpen}
        leadName="Placeholder"
        fileName={fileName}
        onClose={() => setModalOpen(false)}
      />
      <div className="header">
        <div className="header-inner">
          <Logo className="logo" />
          <div className="buttons">
            <button className="save-button" onClick={handleSavePhoto}>
              {copy.buttons.saveAndEmail}
            </button>
            <button className="print-button" onClick={handleSavePhoto}>
              {copy.buttons.printNow}
            </button>
          </div>
        </div>
      </div>
      <div className="copy">
        <h1>{copy.title}</h1>
        {copy.body.map((graph, index) => (
          <p key={`graph-${index}`}>{graph}</p>
        ))}
      </div>
      <div className="app-inner">
        <div className="avatar-wrapper">
          <RandomizeButton onClick={() => setState(randomizedAvatar())} />
          <Avatar ref={aviRef} {...state} />
          <NameInput />
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
        <div className="buttons">
          <button className="save-button blu" onClick={handleSavePhoto}>
            {copy.buttons.saveAndEmail}
          </button>
          <button className="print-button" onClick={handleSavePhoto}>
            {copy.buttons.printNow}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
