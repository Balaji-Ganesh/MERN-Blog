const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
// Importing routes//
const authenticationRoute = require("./routes/authentication")

/** Few configurations.. */
const app = express();  /// Make the application to use express..
app.use(express.json());  // For handling JSON by type..




/** ----------------------------------- Connection to database -------------------------------- **/
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true, -- getting error if included. But, Tutorial mentions, presence of this line.
  })
  .then(console.log("[SUCCESS] Database connection successful"))
  .catch((error) => console.log("[ERROR] Database connection failed. Error: \n"+error));
/** --------------------------------------------------------------------------------------------- */

/** --------------------------------------------- Routes forwarding-------------------------------- */
// Authentication route..
app.use("/api/authentication", authenticationRoute);
/* ------------------------------------------------------------------------------------------------ */


/** -------------------------------- Start listening the server. -----------------------------.**/
const PORT="4000"
app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
  /* ---------------------------------------------------------------------------------------------*/
});
