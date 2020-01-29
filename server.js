const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();
const htmlRoute = require("./routes/htmlroutes");
const userApiRoute = require("./routes/apiroutes");

app.use(logger("dev"));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(htmlRoute);
app.use(userApiRoute);


var MONGODB_URI = process.env.MONGODB_URL || "mongodb://localhost/workout";
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4 // Use IPv4, skip trying IPv6
  };

mongoose.connect(MONGODB_URI,options)



db.Workout.create({ name: "Workout" })
  .then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({message}) => {
    console.log(message);
  });


// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});