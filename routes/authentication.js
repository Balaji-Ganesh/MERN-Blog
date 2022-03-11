const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require("bcrypt");
const { route } = require("express/lib/application");
// Registration..
router.post("/registration", async (request, response) => {
    try {
        /*---------------------------------- Registering a new user--------------------------------- */
        // Generate the hashed password -- Security concern..
        const saltRounds = 10;                                  // Tune it according, as per requirement.
        const hashedPwd = await bcrypt.hash(request.body.password, saltRounds)
        // Go for creation of the new user..
        const newUser = new User({
            username: request.body.username,
            email : request.body.email,
            password : hashedPwd,
        })

        // Save the new user..
        const user = await newUser.save();
        // After successful save..!!
        response.status(200).json(user);
        console.log("[SUCCESS] New user has successfully REGISTERED.");
    }
    catch (error) {
        response.status(500).json(error);
        console.log("[ERROR] New user Registration failed.")
    }
})

// Login..
router.post("/login", async (request, response) => {
    try{
        //Fetch the credentials from the database..
        const userCredentials = await User.findOne({'username':request.body.username});
        !userCredentials && response.status(400).json("Incorrect Credentials, Please try again..!")

        // validate the password -- on successful user found..
        const validationStatus = bcrypt.compare(request.body.password, userCredentials.password);
        !validationStatus && response.status(400).json("Incorrect credentials, Please try again.!")

        // On successful password validation..
        // Pullout the password (Preventing the password to be leaked outside..)
        const {password, ...otherDetails} = userCredentials._doc
        response.status(200).json(otherDetails)
    }
    catch (error) {
        console.log("[ERROR] Login failed. Error: " + error);
        response.send(500).json()
    }
})











module.exports = router;