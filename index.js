require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes.js");

const PORT = 3000;
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/usuario", userRoutes);

mongoose
  .connect(process.env.DB_CONECTION)
  .then(() => console.log("MONGO CONECTADO"));
app.listen(PORT, (req, res) => {
  console.log(`SERVIDOR CONECTADO NA PORTA: ${PORT}`);
});
