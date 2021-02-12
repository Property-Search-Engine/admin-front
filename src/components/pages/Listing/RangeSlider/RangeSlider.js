import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 280,
  },
});

function valuetext(value) {
  return `${value}$`;
}

export default function RangeSlider({ setFilters }) {
  const classes = useStyles();
  const [value, setValue] = useState([0, 900000]);
  const handleChange = (event, [min, max]) => {
    setValue([min, max]);
    setFilters("range", { min, max });
  };
  const handleinputChange = (e) => {
    if (e.target.id === "min") {
      setValue([e.target.value, value[1]]);
      setFilters("range", { min: e.target.value, max: value[1] });
    } else {
      setValue([value[0], e.target.value]);
      setFilters("range", { min: value[0], max: e.target.value });
    }
  };

  return (
    <div className={classes.root}>
      <div className="inputSlideRange">
        <input
          id="min"
          type="text"
          value={value[0]}
          onChange={handleinputChange}
        />
        <span className="rS-separator">-</span>
        <input
          id="max"
          type="text"
          value={value[1]}
          onChange={handleinputChange}
        />
      </div>
      <Slider
        value={value}
        onChange={handleChange}
        //valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={0}
        max={900000}
        getAriaValueText={valuetext}
      />
    </div>
  );
}
