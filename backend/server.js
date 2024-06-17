const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mysql = require("mysql");

require("dotenv").config();

const app = express();
const port = 3000;

const dbConnect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "spms",
});

dbConnect.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected...");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = "INSERT INTO users (username, password) VALUES (?, ?)";
  db.query(query, [username, hashedPassword], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Registration failed" });
    }
    res.status(201).json({ message: "User registered" });
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [username], async (err, results) => {
    if (err || results.length === 0) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      secretKey,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, { httpOnly: true });
    res.json({ message: "Login successful", token });
  });
});

app.get("/verify-token", (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Failed to authenticate token" });
    }
    res.json({ message: "Token is valid", user: decoded });
  });
});

app.listen(3000, () => {
  console.log(`Server running on port ${port}`);
});
