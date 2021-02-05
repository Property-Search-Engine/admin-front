// Make working and valid absolute path for svg files in the client
// @param -> filename
export const svgPath = (filename) => `/assets/icons/${filename}.svg`;

//---------------------
//    FADES-IN-OUT
//---------------------
//* Element needs to have transition: opacity 0.3s <timeFunc> in its styles;

//Fade Out one element
export function fadeOut(element, time = 300) {
  element.style.opacity = 0;
  setTimeout(() => {
    element.style.opacity = 1;
  }, time);
}

//Fade In one element
export function fadeIn(element, time = 300) {
  element.style.opacity = 1;
  setTimeout(() => {
    element.style.opacity = 0;
  }, time);
}

//Convert string in camel case.
//Useful to send data in standar format to API

export function toCamelCase(str) {
  return str
    .split(" ")
    .map(function (word, index) {
      // If it is the first word make sure to lowercase all the chars.
      if (index === 0) {
        return word.toLowerCase();
      }
      // If it is not the first word only upper case the first char and lowercase the rest.
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

export function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function camelCaseStringToCapitalizeString(str) {
  const capitaliseString = capitalise(str);
  return capitaliseString.replace(/([A-Z])/g, " $1");
}
