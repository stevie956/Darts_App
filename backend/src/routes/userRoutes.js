const express = require('express');
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const router = express.Router();




router.post("/login", (request, response) => {
    userModel.findOne({username: request.body.username}).then((userData) =>{
      if(userData){
        const checkHashPassword = bcrypt.compareSync(request.body.password, userData.password);
        if(checkHashPassword){
          console.log("request.session", request.session);
          request.session.user = {
            id: userData._id,
          }
          console.log("request.session", request.session);
          response.json("logged in");
          
        }else{
          response.status(401).json("password is wrong");
        }
      }else{
        response.status(404).json("Please try again")
      }
    })
  
  });

  router.get("/logout", (request, response) => {
    
    request.session.loggedIn = false;
    response.send("User has logged out");
});

router.post("/register", (req, res) => {
    const body = req.body;
    console.log("req body: " ,body);
    const passwordHash = bcrypt.hashSync(body.password, 10);
    console.log("password hash : ", passwordHash);

    const user = { username: body.username , password: passwordHash };
    console.log("user: ", user)
    userModel.create(user).then((data) => {
        console.log("getting data ", data);
    })
    res.json("New user has been created")
})



module.exports = router;