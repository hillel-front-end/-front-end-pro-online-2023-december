const express = require("express");
const { readFile, writeFile } = require("./helpers/index");
const bodyParser = require("body-parser");

require("dotenv").config();

// console.log(process.env);

const app = express();
const port = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${port}`);
});

/*
 CRUD HTTP Methods

 create: POST
 update: PUT
 delete: Delete
 read: GET

 //------
 OPTION --- CORS
 HEAD

*/

app.use((req, res, next) => {
  console.log("---middle----");

  console.log(req.path, "path");

  if (req.headers.authorization) {
    // ...valid

    req.foo = "valera";
    next();
    return;
  }

  res.status(401).json({ status: 401, message: "UNAuth" });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.get("/", (req, res) => {
  res.json("Hello");
});

app.get("/products", (req, res) => {
  readFile({
    url: "./model/products.json",
    callback: (error, data) => {
      if (error) {
        res.status(500).json({ ...error, messame: "Something happend" });
        return;
      }

      console.log(req.query, "query");

      const { maxPrice = null } = req.query;
      let products = JSON.parse(data);

      if (maxPrice) {
        products = products.filter((product) => product.price <= maxPrice);
      }

      res.json(products);
    },
  });
});

// http::/localhost:6000/products/1

app.get("/products/:id/", (req, res) => {
  console.log(req.params, "/products/:id/"); // {id: '1'}
  res.send("ok");
});

// http::/localhost:6000/products/1/2

app.get("/products/:product/:uniq", (req, res) => {
  console.log(req.params, "/products/:product/:uniq"); // {product: '...', uniq: '...' }
  res.send("ok");
});

const PATH_TO_PRODUCTS = `${process.env.DB_PATH}.json`;

app.post("/add-product", (req, res) => {
  const newProduct = req.body;

  if (!newProduct) {
    res.status(500).send({ message: "Not Found new product" });
    return;
  }

  readFile({
    url: PATH_TO_PRODUCTS,
    callback: (error, data) => {
      let products = JSON.parse(data);

      products = [...products, { id: products.length + 1, ...newProduct }];

      writeFile({
        url: PATH_TO_PRODUCTS,
        data: products,
        error: (e) => {
          console.log(e, "e");
        },
      });
    },
  });

  res.send("ok");
});

app.delete("/remove-product/:id", (req, res) => {
  const id = req.params.id;

  readFile({
    url: PATH_TO_PRODUCTS,
    callback: (error, data) => {
      let products = JSON.parse(data);

      products = products.filter((product) => product.id != id);

      writeFile({
        url: PATH_TO_PRODUCTS,
        data: products,
        error: (e) => {
          console.log(e, "e");
        },
      });
    },
  });

  res.send("ok");
});

app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

/*
STATUS

Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)

*/

// app.post();
