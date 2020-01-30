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

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://workoutTracker: Ktbuh165!@ds315359.mlab.com:15359/heroku_lh61l3h6",
  {
    useMongoClient: true
  }
);



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