import { React, useState } from "react";
import "./ButtonToggler.scss";

export default function HomeOfficeToggle({ texts, toggled, onClick }) {
  return (
    <>
      <div onClick={onClick} className={`toggle ${toggled ? "office" : ""}`}>
        <div className="notch"></div>
        <span className={`spanEmp ${toggled ? "notToggled" : ""}`}>
          {texts.false}
        </span>
        <span className={`spanNew ${toggled ? "" : "notToggled"}`}>
          {texts.true}
        </span>
      </div>
    </>
  );
}
