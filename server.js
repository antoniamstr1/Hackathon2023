const express = require('express');
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.get("/api/contacts", (req,res) => {
   //res.send("Get all contacts");
   //ovako šaljem JSON format
   res.json({message: "Get all contacts!"})
   //pass status code
   //[ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
   res.status(200).json({message: "Get all contacts"});
});

app.listen(port, () => {
   console.log(`Server running on port ${port}`);
});
