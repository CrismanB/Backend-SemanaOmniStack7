const express = require("express");
const multer = require("multer");
const postController = require("./controller/PostController");
const uploadConfig = require("./config/upload");
const routes = new express.Router();
const LikeController = require("./controller/LikeController");
const upload = multer(uploadConfig);

routes.get("/posts", postController.index);
routes.post("/posts", upload.single("image"), postController.store);

routes.post("/posts/:id/like", LikeController.store);

module.exports = routes;
