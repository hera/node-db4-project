const express = require('express');
const recipesRouter = require("./recipes/recipesRouter");
const ingredientsRouter = require("./ingredients/ingredientsRouter");

const server = express();

server.use(express.json());

server.use("/api/recipes", recipesRouter);
server.use("/api/ingredients", ingredientsRouter);

module.exports = server;