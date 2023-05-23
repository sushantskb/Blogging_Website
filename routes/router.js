const app = require("express")();

//import controller
const blogController = require('../controllers/blogging.controller');

app.get("/", blogController.MainPage);
app.get("/about", blogController.aboutPage);
app.get("/contact", blogController.contactPage);

module.exports = app;