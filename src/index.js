require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const middlewareLogRequest = require("./middleware/logs");
const usersRoutes = require("./routes/users");
const upload = require("./middleware/multer");

// Middleware
app.use(middlewareLogRequest);
app.use(express.json());
app.use("/assets", express.static("public/images"));

// Users routes
app.use("/users", usersRoutes);

// Upload file route test
app.post("/upload", upload.single("photo"), (req, res) => {
  res.status(200).json({
    message: "Upload file successfully",
  });
});

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

// Listening port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
