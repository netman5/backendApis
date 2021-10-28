const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Dish name is required"],
    unique: true,
  },
  desc: {
    type: String,
    required: [true, "Pls give description of the dish"],
    maxlength: [2000, "desc should not be more than 2000 characters"],
  },

  region: {
    type: String,
    enum: {
      values: [
        "Nothern Africa",
        "Eastern Africa",
        "Middle Africa, 'Southern Africa",
        "Western Africa",
      ],
      message: "{VALUE} is not supported",
    },
    required: true,
    match: /[a-z]/,
  },

  country: {
    type: String,
    enum: {
      values: [
        "Algeria",
        "Canary Islands",
        "Ceuta",
        "Egypt",
        "Libya",
        "Madeira",
        "Melilla",
        " Morocco",
        "Sudan",
        "Tunisia",
        "Western Sahara",
        "Burundi",
        "Comoros",
        "Djibouti",
        "Eritrea",
        "Ethiopia",
        "French Southern Territories",
        "Kenya",
        "Madagascar",
        "Malawi",
        "Mauritius",
        "Mayotte",
        "Mozambique",
        "Reunion",
        "Rwanda",
        "Seychelles",
        "Somalia",
        "South Sudan",
        "Tanzania",
        "Uganda",
        "Zambia",
        "Zimbabwe",
        "Angola",
        "Cameroon",
        "Central African Republic",
        "Chad",
        "DRC Congo",
        "Congo Republic",
        "Equatorial Guinea",
        "Gabon",
        "São Tomé and Príncipe",
        "Botswana",
        "Swaziland",
        "Lesotho",
        "Namibia",
        "South Africa",
        "Republic of Benin",
        "Burkina Faso",
        "Cape Verde",
        "Ivory Coast",
        "Gambia",
        "Ghana",
        "Guinea",
        "Guinea-Bisau",
        "Liberia",
        "Mali",
        "Mauritania",
        "Niger",
        "Nigeria",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Senegal",
        "Sierra Leone",
        "Togo",
      ],
      message: "{VALUE} is not supported",
    },
    required: [true, "pls provide a country associated with the dish"],
  },
  ingredients: {
    type: String,
    enum: [],
  },
  category: {
    type: String,
    enum: [],
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
