const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.get("/", blogController.blog_index);

// post request

router.post("/", blogController.blog_create_post);

// delete blog

router.delete("/:id", blogController.blog_delete);

// create blog

router.get("/create", blogController.blog_create_get);
//   res.send("<p>About</p>");
//   res.sendFile("./views/about.html", { root: __dirname });

// get single blog

router.get("/:id", blogController.blog_details);

module.exports = router;
