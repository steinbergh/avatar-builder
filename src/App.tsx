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
import classnames from "classnames";
import { RoleDropDown } from "RoleDropDown";
import { LandingPageContent } from "LandingPageContent";
import { openPopupWidget } from "react-calendly";
import { ThankYouModal } from "./ThankYouModal";

const { copy, sliders, buttons } = config;

// const avatar: AvatarState = {
//   bg: 0,
//   body: 0,
//   face: 0,
//   hair: 0,
//   eyes: 0,
//   nose: 0,
//   mouth: 0,
//   accessory: [],
//   skinTone: 0,
//   shirtColor: 0,
//   hairColor: 0,
// };

const initialState = randomizedAvatar();

function App() {
  const [state, setState] = useState<AvatarState>(initialState);
  const [fileName, setFileName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [tyModalOpen, setTyModalOpen] = useState(false);
  const [shouldPrint, setShouldPrint] = useState(false);
  const [leadName, setLeadName] = useState<string | null>("");

  const aviRef = useRef<HTMLDivElement>(null);
  const activeAccessories = state[PartsKeys.ACCESSORY];

  const handleSavePhoto = useCallback(
    (_shouldPrint: boolean) => {
      if (aviRef.current === null) {
        return;
      }

      toBlob(aviRef.current, {
        cacheBust: true,
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
              setShouldPrint(_shouldPrint);
              setModalOpen(true);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [aviRef, state, fileName]
  );

  const handleResetExperience = () => {
    setFileName("");
    setLeadName("");
    setState(randomizedAvatar());
    setModalOpen(false);
    setTyModalOpen(false);
    setShouldPrint(false);
  };

  return (
    <div id="appRoot" className="App">
      <LeadModal
        isOpen={modalOpen}
        shouldPrint={shouldPrint}
        leadName={leadName || "there"}
        fileName={fileName}
        onClose={() => {
          setTyModalOpen(true);
          setModalOpen(false);
        }}
      />
      <ThankYouModal
        isOpen={tyModalOpen}
        onAfterColse={handleResetExperience}
        onClose={() => {
          setTyModalOpen(false);
        }}
      />
      <div className="header">
        <div className="header-inner">
          <Logo className="logo" />
          <div className="buttons">
            <button
              className="save-button"
              onClick={() => handleSavePhoto(false)}
            >
              {copy.buttons.saveAndEmail}
            </button>
            <button
              className="print-button"
              onClick={() => handleSavePhoto(true)}
            >
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
        <div
          className={classnames("avatar-wrapper", {
            "accessory-active-1": activeAccessories.includes(0),
            "accessory-active-2": activeAccessories.includes(1),
            "accessory-active-3": activeAccessories.includes(2),
          })}
        >
          <NameInput
            setLeadName={(value) => {
              setLeadName(value);
            }}
            leadName={leadName || ""}
          />
          <Avatar ref={aviRef} {...state} />
          <RandomizeButton onClick={() => setState(randomizedAvatar())} />
        </div>
        {buttons.map(
          ({ key, values }) =>
            key === PartsKeys.ACCESSORY && (
              <AccessoryButtons
                key={PartsKeys.ACCESSORY}
                values={values}
                activeValues={activeAccessories}
                onClick={(accValue) => {
                  setState({
                    ...state,
                    accessory:
                      activeAccessories.indexOf(accValue) > -1
                        ? activeAccessories.filter((acc) => acc !== accValue)
                        : [...activeAccessories, accValue],
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
          <RoleDropDown
            role={state.badge}
            setRole={(badgeNumber) =>
              setState({ ...state, [PartsKeys.BADGE]: badgeNumber })
            }
          />
        </div>
        <div className="buttons">
          <button
            className="save-button blue save-button--mobile"
            onClick={() => handleSavePhoto(false)}
          >
            {copy.buttons.saveAndSend}
          </button>
          <button
            className="save-button blue save-button--desktop"
            onClick={() => handleSavePhoto(false)}
          >
            {copy.buttons.saveAndEmail}
          </button>
          <button
            className="print-button"
            onClick={() => handleSavePhoto(true)}
          >
            {copy.buttons.printNow}
          </button>
        </div>
      </div>
      <LandingPageContent
        onClick={() => {
          openPopupWidget({
            url: "https://calendly.com/quotapathdemo/quotapath-demo-saastr",
          });
        }}
      />
    </div>
  );
}

export default App;
