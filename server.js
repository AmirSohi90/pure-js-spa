const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000

// whenever the path has /static serve the static directory as per usual
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log(`Server running on ${PORT}`));