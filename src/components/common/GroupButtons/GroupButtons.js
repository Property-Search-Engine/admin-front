import React from "react";
import Button from "react-bootstrap/Button";

export default function GroupOfButtons(props) {
  const { handleChange, clicked, buttons, filterKey } = props;
  const handleClick = (e) => {
    //@param -> clicked is an array comming from parent state [0]
    if (!clicked.some((click) => click === e.target.value)) {
      e.target.classList.add("btn-clicked");
      handleChange(filterKey, [...clicked, e.target.value]);
    } else {
      e.target.classList.remove("btn-clicked");
      handleChange(
        filterKey,
        clicked.filter((item) => item !== e.target.value)
      ); // [0,1,3] --> [0,3]
    }
  };

  return (
    <div onClick={handleClick}>
      {Object.keys(buttons).map((button, i) => (
        <Button
          key={`button-group-${i}`}
          variant="outline-secondary"
          value={button}
          onClick={handleClick}
          className={
            clicked.some((click) => click === button)
              ? "mr-2 btn-clicked"
              : "mr-2"
          }
        >
          {buttons[button]}
        </Button>
      ))}
    </div>
  );
}
