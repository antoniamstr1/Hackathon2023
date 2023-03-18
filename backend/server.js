const express = require('express');
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config();
const cors = require("cors");

connectDb();
const app = express();

const port = process.env.PORT || 5000;

//middleware 
app.use(cors());
app.use(express.json());
app.use("/api/users",require("./routes/userRoutes"));
app.use("/api/devices",require("./routes/devicesRoutes"));
app.use("/api/documents",require("./routes/documentRoutes"));






app.use(errorHandler)
app.listen(port, () => {
   console.log(`Server running on port ${port}`);
});
