const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const destinationsSchema = new Schema({
  airport: {
    type: String,
  },
  arrival: {
    type: Date
  }
})

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Alaska", "Hawaiian", "Southwest", "United"]
  },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "LAX",
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true
  },
  departs: {
    type: Date,
    default: function () {
      const today = new Date();
      const inOneYear = today.getFullYear() + 1
      today.setFullYear(inOneYear)
      return today;
    },
    destinations: [destinationsSchema]
  }
},

);







module.exports = mongoose.model("Flight", flightSchema);