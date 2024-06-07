import domGenerator from "dom-generator";
import "/styles/index.scss";

import createOptionsCarNames from "../../components/createOptionsName/optionsName";
import createOptionYear from "../../components/CreateOptionsYear/yearOptionsCar";
import formInsurance from "../../components/formGenerator/formInsurance";

function carInsurance() {
  let insurance = domGenerator({
    tag: "div",
    attributes: { id: "insuranceBackground" },
    children: [
      {
        tag: "section",
        attributes: { id: "insuranceSection" },
        children: [
          {
            tag: "h1",
            attributes: { id: "formInsuranceTitle" },
            properties: { textContent: "Insurance Form" },
          },
          {
            tag: formInsurance(),
          },
        ],
      },
    ],
  });
  document.addEventListener("DOMContentLoaded", renderCars);
  function renderCars() {
    createOptionYear();
    createOptionsCarNames();
  }
  document.body.append(insurance);
}
export default carInsurance;
