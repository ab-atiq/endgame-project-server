const express = require("express");
module.export = app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();
const ConnectDB = require("./config/ConnectDB");

//middleware
app.use(cors());
app.use(express.json());

// routes
const authRouter = require("./router/authRoute");
const courseRoute = require("./router/courseRoute");
const carRoute = require("./router/carRoute");
const searchingdRoute = require("./router/searchedCarRoute");
const findcars = require("./router/searchedCarRoute");
const singleCar = require("./router/singleCarRoute");
const userDetail = require("./router/userDetailsRoute");
const findBasisBrandRoute = require("./router/findBasisBrandRoute");
const findDataBrandRoute = require("./router/findDataBrandRoute");
const addReviewRoute = require("./router/addReviewRouter");
const findCarReviewRoute = require("./router/findCarReviewRoute");
const findSingleCarRentRoute = require("./router/findSingleCarRentRoute");
const sliderSingleBrandCarRoute = require("./router/sliderSingleBrandCarRoute");

// use routes
app.use("/api/auth", authRouter);
app.use("/api/course", courseRoute);
app.use("/api/find", carRoute);
app.use("/api/find", findBasisBrandRoute);
app.use("/api/find", findDataBrandRoute);
app.use("/api", searchingdRoute);
app.use("/api/find", findCarReviewRoute);
app.use("/api", findcars);
app.use("/api", singleCar);
app.use("/api", userDetail);
app.use("/api", addReviewRoute);
app.use("/api/find", findSingleCarRentRoute);
app.use("/api/find", sliderSingleBrandCarRoute);


app.get("/", (req, res) => {
  res.send("hello database");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
