const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// IMPORTANT: Kubernetes service name
const BACKEND_URL = "http://flask-service:5000";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/data`);

    res.send(`
      <h1>🚀 Express Frontend</h1>
      <p>Message from Backend:</p>
      <pre>${JSON.stringify(response.data, null, 2)}</pre>
    `);
  } catch (error) {
    res.send("❌ Error connecting to backend");
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Frontend running on port ${PORT}`);
});