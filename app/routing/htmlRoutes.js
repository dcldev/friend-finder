//Boiler plate html routing using express pulled from assignments / example website

// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ROUTING

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content

  // loading public files
  app.get("/public/:type/:file", function(req, res) {
    let type = req.params.type;
    let file = req.params.file;
    res.sendFile(path.join(__dirname, "../public/"+type+"/"+file));
  });

  // route for survey
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../pages/survey.html"));
  });

  // catch all routes and default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../pages/home.html"));
  });
};
