const FlightModel = require("../models/flight")

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

async function show(req, res) {
    try {
        const flightDocsFromDB = await FlightModel.findById(req.params.id);

        console.log(flightDocsFromDB)

        res.render("flights/show", { flight: flightDocsFromDB });
    } catch (err) {
        res.send(err)
    }
}

function newFlight(req, res) {
    const newFlight = new FlightModel()
    const defaultDate = newFlight.departs.toISOString().slice(0, 16)
    res.render("flights/new", { defaultDate: defaultDate })
}

async function index(req, res) {
    try {
        const flightDocsFromDB = await FlightModel.find({})

        res.render("flights/index", { flightDocs: flightDocsFromDB })
    } catch (err) {
        console.log(err)
        res.redirect("/")
    }
}

async function create(req, res) {
    try {
        const createdFlightDoc = await FlightModel.create(req.body)
        res.redirect("/flights/new")
    } catch (err) {
        console.log(err)
        res.redirect("flights/new")
    }
}