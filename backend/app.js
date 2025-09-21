const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const stuffRoutes = require("./routes/stuff");

// Connect to MongoDB using Mongoose
mongoose
  .connect(
    "mongodb+srv://dominhcat:minhcat05@cluster1.1fpon5j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.error("Connexion à MongoDB échouée :", err));

const app = express();
app.use(express.json());

// Implement CORS (Cross Origins Sharing Security)
app.use((req, res, next) => {
  // All origin can access the API (frontend and backend in this case)
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Allow using certain headers in requests
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );

  // Allow using request methods
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.use("/api/stuff", stuffRoutes);

module.exports = app;
