const express = require("express");
const Match = require("../models/matchModel.js");


// Create a route to handle score routes
const router = express.Router();

// Add a health check for score routes
router.get("/_health", (request, response) => {
    console.log("session:", request.session);
    response.send("routes work ok");
});
//create a game
router.post("/create", async (req, res) => {
  try {
    const createdMatch = await Match.create(req.body);
    console.log("response?");
    res.json({
      status: {
        code: 201,
        message: "Game created",
      },
      data: createdMatch,
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

  //update a match route
 //edit route
router.put("/edit/:id", async (req, res) => {
  try {
    console.log("request alert!")
    console.log(req.body)
    console.log(req.params.id)
    const updatedMatch = await Match.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    console.log("match was updated!!")
    res.json({
      status: {
        code: 201,
        message: "Game successfully updated",
      },
      data: updatedMatch,
    });
  } catch (err) {
    console.log("error happened!", err)
    res.send(err);
  }
});

  // delete route
  router.delete("/delete/:id", async (req, res) => {
    try {
      console.log("this request happens!")
      console.log(req.body)
      console.log(req.params.id)
      const deletedGame = await Match.findByIdAndRemove(req.params.id);
      console.log("Match was deleted")
    res.json({
      status: {
        code: 200,
        message: "Game successfully deleted",
      },
      data: deletedGame,
    });
  } catch (err) {
    console.log("error Happening")
    res.send(err);
  }
});

module.exports = router;