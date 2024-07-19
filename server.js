const express = require("express");
const app = express();
const port = 3000;

app.get("/api/data", (req, res) => {
  res.send({
    message: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
    ],
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
