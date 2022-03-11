const router = require("express").Router();
const User = require("../models/User")

// Registration..
router.post("/registration", async (request, response) => {
    try {
        // Create a new user..
        const newUser = new User({
            username: request.body.username,
            email : request.body.email,
            password : request.body.password,
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

module.exports = router;