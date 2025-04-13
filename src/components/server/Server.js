import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import fs from "fs";
import path from "path";
import App from "./src/App"; 

const app = express();

import compression from "compression";
app.use(compression());

import cors from "cors";
app.use(cors());

app.use(express.static(path.resolve(__dirname, "build")));

app.get("*", (req, res) => {
  const appHTML = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve(__dirname, "build", "index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading index.html", err);
      return res.status(500).send("Something went wrong.");
    }

    return res.send(data.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`));
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
