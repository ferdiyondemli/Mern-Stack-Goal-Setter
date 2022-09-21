const colors = require("colors");
const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errrorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is ok on ${port}`);
});
