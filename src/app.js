const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
// init DB

// init routes
app.get("/", (req, res, next) => {
  const strCompress = "Hello TipJS";
  return res.status(500).json({
    massage: "Hello World",
    metadata: strCompress.repeat(10000),
  });
});
// handling error

module.exports = app;
