const express = require("express");
const controller = require("../controllers/userController");
const catchFunc = require("../controllers/errorController").catchFunc;
const protectedRoute = require("../utils/auth").protectedRoute;
const permission = require("../utils/auth").permission;
const router = express.Router();

router
  .post("/signIn", catchFunc(controller.signIn))
  .post(
    "/signUp",
    protectedRoute,
    permission(["Administrator"]),
    catchFunc(controller.addUser)
  )
  .delete("/:id", protectedRoute, catchFunc(controller.delete))
  .get(
    "/",
    protectedRoute,
    permission(["Administrator", "Regular"]),
    catchFunc(controller.getAll)
  );

module.exports = router;
