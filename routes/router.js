const app = require("express")();

//import controller
const blogController = require('../controllers/blogging.controller');

app.get("/", blogController.MainPage);
app.get("/about", blogController.aboutPage);
app.get("/contact", blogController.contactPage);
app.get("/compose", blogController.composePage);
app.post("/compose", blogController.composeActionPage);
app.get("/posts/:postName", blogController.dynamicRoutes);

module.exports = app;