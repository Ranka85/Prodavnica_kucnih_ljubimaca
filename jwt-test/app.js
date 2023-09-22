const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

// Secret key for JWT signing (replace with a strong, secret key)
const JWT_SECRET = "your-secret-key";

// Sample user data (for testing)
const users = [{ id: 1, username: "testuser", password: "password" }];

// Register route to add a new user and generate a JWT token
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  // Validate if the user already exists by email
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }

  // Create new user object
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password,
  };

  // Add user to "database" (our users array)
  users.push(newUser);

  // Generate a JWT token
  const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: "1h" });

  // Send back the token
  res.status(201).json({ token });
});

// Login route to generate a JWT token
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  // Create a JWT token
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Protected route that requires JWT token
app.get("/protected", (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Authentication token is missing" });
  }

  try {
    // Verify the JWT token
    const decodedToken = jwt.verify(token, JWT_SECRET);
    res.json({ message: "Access granted", userId: decodedToken.userId });
  } catch (err) {
    res.status(401).json({ message: "Authentication failed" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
