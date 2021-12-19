require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const usersRouter = require("./routers/userRouter");
const programsRouter = require("./routers/programRouter");

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.DB_URI,(err)=>{
  console.log("Database is connected")
})

app.use("/users", usersRouter);
app.use("/programs", programsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on: ${PORT} `);
});