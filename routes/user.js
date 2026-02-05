const express= require('express');
const router= express.Router();
const wrapAsync= require('../utils/wrapAsync.js');
const passport= require('passport');
const { saveRedirectUrl } = require('../middleware.js');
const userController= require('../controllers/users.js')

//SignUp Routes
router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));

//LogIn Routes
router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl,
    passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }),
    wrapAsync(userController.login));

//LogOut Route
router.get("/logout", userController.logout);

module.exports= router;
