const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { route } = require("express/lib/application");
const Post = require("../models/Post");

// Updation..
router.put("/:id", async (request, response) => {
  // When one tried to update with different userId..
  if (request.body.userId === request.params.id) {
    // Later with JWT..
    // If also contains password.. (for updation).. Regenerate the hash..
    if (request.body.password)
      request.body.password = await bcrypt.hash(request.body.password, 10); // 10: saltRounds -- better have it in .env file.
    console.log("[INFO] Password hashing done");
    // Update the details..
    try {
      const updatedUser = await User.findByIdAndUpdate(
        request.params.id,
        {
          $set: request.body,
        },
        { new: true } // Return the updated user.. not the before-update one.
      );
      console.log("[INFO] User details updated");
      response.status(200).json(updatedUser);
    } catch (error) {
      console.log("[ERROR] User updation failed");
      response.status(500).json(error);
    }
  } else {
    console.log("[WARNING] Received UPDATION request from invalid userId");
    response
      .status(401)
      .json(
        "Updating another user's details is forbidden. Insufficient rights."
      );
  }
});

// Deletion....
router.delete("/:id", async (request, response) => {
  // When one tried to delete with different userId..
  console.log("{INFO] request.params.id: ", request.params.id);
  // if such user exists..  this is a very loose authentication, need somewhat stronger.. a simple DELETE request with this address, deletes a user..
  const user = await User.findById(request.params.id);

  //console.log(user._id.toString())
  if (user._id.toString() === request.params.id) {
    try {
      // First, remove the respective posts of the user..
      // Get the user name (from userId)..
      //const user = User.findById(request.body.userId);
      Post.deleteMany({ username: user.username });
      console.info("[INFO] posts of user deleted.")
      // Then, delete the user..
      try {
        await User.findByIdAndDelete(request.params.id);
        console.log("[SUCCESS] User Deleted ");
        response.status(200).json("User deletion successful");
      } catch (error) {
        console.log("[ERROR] User deletion failed");
        response.status(500).json(error);
      }
    } catch (error) {
      console.log("[ERROR] No user found");
      response.send(404).json("No such user exists");
    }
  } else {
    console.log("[WARNING] Received DELETION request from invalid userId");
    response
      .status(401)
      .json("Deleting another user is forbidden. Insufficient rights.");
  }
});

// GET..
router.get("/:id", async (request, response) => {
    try {
        console.log("[INFO] userId: " + request.params.id);
        // Get the user details by userId..(from params)
        const userCredentials = await User.findById(request.params.id);
        // Pullout the password (while sending) -- security concern..
        const { password, ...otherDetails } = userCredentials._doc;
        console.error("[INFO] User details found")
        response.status(200).json(otherDetails);
    } catch (error) {
        console.error("[ERROR] Invalid \"userId\" received. Please try logging in once more. \nError: "+error)
    }
})
module.exports = router;
