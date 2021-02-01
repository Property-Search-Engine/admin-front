// Make working and valid absolute path for svg files in the client
// @param -> filename 
export const svgPath = filename => `/assets/icons/${filename}.svg`;

//---------------------
//    FADES-IN-OUT
//---------------------
//* Element needs to have transition: opacity 0.3s <timeFunc> in its styles; 

//Fade Out one element
export function fadeOut(element, time = 300){
    element.style.opacity = 0;
    setTimeout(() => {
      element.style.opacity = 1;
    }, time);
  }

//Fade In one element
export function fadeIn(element, time = 300){
    element.style.opacity = 1;
    setTimeout(() => {
      element.style.opacity = 0;
    }, time);
  }