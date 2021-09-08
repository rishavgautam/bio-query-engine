module.exports = {
  friendlyName: "Query",

  description: "Query something.",

  inputs: {
    data: {
      description: "Gets input data as material ID or material name",
      type: "string",
    },
  },

  exits: {
    success: {
      description: "Material data found",
      viewTemplatePath: "pages/details",
    },
    failure: {
      description: "Something went wrong",
      viewTemplatePath: "pages/homepage",
    },
  },
  
fn: async function (inputs, exits) { 
    const axios = require("axios");
    axios
    .get(
        "https://www.materialsproject.org/rest/v2/materials/" +
          inputs.data +
          "/vasp?API_KEY=2GE5VwTgbTpFS5cTHh"
      )
      .then((list) => {
        material = list.data
       // console.log(material);
        return exits.success(material)
      })
      .catch((error) => {
        return exits.failure(error)
      });
    return;
  },
 

};
