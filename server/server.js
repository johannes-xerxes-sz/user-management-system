const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/error");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
// const usersession = require("express-session");
/**
 * For future refence - use user cookie as session not config
 */
// Main Endpoints
const user = require("./routes/user");

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.use(
//   usersession({
//     secret: "secret key",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true },
//   })
// );

app.use(bodyParser.json());

app.use(cookieParser());

app.use(mongoSanitize());

app.use(xss());

app.use(hpp());

app.use(helmet());

const corsOptions = {
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Total-Count"],
  exposedHeaders: ["X-Total-Count"],
};

app.use(cors(corsOptions));

app.use(limiter);

//! read/parse json data
app.use(bodyParser.json());

// use our logger
app.use(logger);

app.use(errorHandler);

const PORT = process.env.PORT || 5001;

// endpoints
app.use("/api/v1/user", user);

const server = app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});

// process our error and close off our server
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
});
