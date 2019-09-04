const express = require("express");
const routes = express.Router();
const bcrypt = require("bcrypt");
const { db } = require("../database/db");
const register = require("../controllers/register");
const signIn = require("../controllers/signin");
const image = require("../controllers/image");
const profile = require("../controllers/profile");

routes.get("/", (req, res) => {
  db.select("*")
    .from("users")
    .then(users => res.json(users));
});

routes.post("/signin", (req, res) => {
  signIn.handleSignIn(req, res, db, bcrypt);
});

routes.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

routes.put("/image", (req, res) => {
  image.handleImage(req, res, db);
});

routes.get("/profile/:id", (req, res) => {
  profile.handleProfileGet(req, res, db);
});
routes.post("/imageurl", (req, res) => {
  image.handleApiCall(req, res);
});

module.exports = {
  routes
};
