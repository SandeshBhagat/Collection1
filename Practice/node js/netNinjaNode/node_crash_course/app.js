const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// const Blog = require("./models/blog");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

// mongo db connection url
const dbURI =
  "mongodb+srv://sb887:sb887@clusternodeninja.btxu9mt.mongodb.net/node-js?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then((result) => app.listen(4000))
  .catch((err) => {
    console.log(err);
  });

// view engine

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

// next

// app.use((req, res, next) => {
//   console.log("new request made!");
//   console.log("host", req.hostname);
//   console.log("path", req.path);
//   console.log("method", req.method);

//   next();
// });

// app.use((req, res, next) => {
//   console.log("In the next middleware!");
//   next();
// });

// mongoose and  mongo sandbox routes

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "this is blog title 2",
    snippet: "this is blog snippet",
    body: "this is blog body",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// get all blogs

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// get single blog

app.get("/single-blog", (req, res) => {
  Blog.findById("649d49e22c127fbec24b497a")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
  // const blogs = [
  //   {
  //     title: "Yoshi finds eggs",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "Mario finds stars",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "How to defeat bowser",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  // ];
  //   res.send("<p>Home</p>");

  //   res.sendFile("./views/index.html", { root: __dirname });
  // res.render("index", { title: "Home", blogs });
});
app.get("/about", (req, res) => {
  //   res.send("<p>About</p>");
  //   res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

// app.get("/blogs", (req, res) => {
//   Blog.find()
//     .sort({ createdAt: -1 })
//     .then((result) => {
//       res.render("index", { title: "All Blogs", blogs: result });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// // post request

// app.post("/blogs", (req, res) => {
//   const blog = new Blog(req.body);

//   blog
//     .save()
//     .then((result) => {
//       res.redirect("/blogs");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// // delete blog

// app.delete("/blogs/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(id);

//   Blog.findByIdAndDelete(id)
//     .then((result) => {
//       res.json({ redirect: "/blogs" });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// // get single blog

// app.get("/blogs/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(id);

//   Blog.findById(id)
//     .then((result) => {
//       res.render("details", { blog: result, title: "Blog details" });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// app.get("/blogs/create", (req, res) => {
//   //   res.send("<p>About</p>");
//   //   res.sendFile("./views/about.html", { root: __dirname });
//   res.render("create", { title: "Create a new blog" });
// });

// redirect

// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

// blog routes

app.use('/blogs',blogRoutes);

// 404 page

app.use((req, res) => {
  //   res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
