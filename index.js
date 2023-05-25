const express = require("express");
const app = express();
const { Op } = require("sequelize");
const { Users, Posts, Customers, Transactions } = require("./models/index");
const PORT = 3001;

//GET ALL CUSTOMERS
app.get("/get_all_customers", async (req, res) => {
  const customers = await Customers.findAll();
  res.send(customers);
});

app.get("/get_customer/:id", async (req, res) => {
  const { id } = req.params;
  const customer = await Customers.findAll({
    where: {
      id: id,
    },
  });
  res.send(customer);
});

app.delete("/delete_customer/:id", async (req, res) => {
  const { id } = req.params;
  const customer = await Customers.destroy({
    where: {
      id: id,
    },
  });
  res.send("customer deleted");
});

app.get("/get_all_transactions", async (req, res) => {
  const transactions = await Transactions.findAll();
  res.send(transactions);
});

app.get("/get_all_customers_with_j", async (req, res) => {
  const customers = await Customers.findAll({
    where: {
      name: {
        [Op.startsWith]: "J",
      },
    },
  });
  res.send(customers);
});

app.get("/get_posts", async (req, res) => {
  let posts = await Posts.findAll();
  let users = await Users.findAll();
  let postArray = [];

  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    let user = users.find((user) => user.id === post.userId);

    let postObject = {
      ...post.dataValues,
      username: user.name,
      email: user.email,
    };
    postArray.push(postObject);
  }

  res.send(postArray);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// first attempt
//app.get("/get_posts", async (req, res) => {
//  let posts = await Posts.findAll();
//  let users = await Users.findAll();
//  let postArray = [];
//
//  for (let i = 0; i < posts.length; i++) {
//    for (let x = 0; x < users.length; x++) {
//      if (posts[i].userId == users[x].id) {
//        let postObject = posts[i];
//        (postObject.username = users[x].name), console.log(users[x].name);
//        (postObject.email = users[x].email), console.log(users[x].email);
//        postArray.push(postObject);
//      }
//    }
//  }
//  res.send(postArray);
//});

// chatgpt's attempt, but I don't really understand mapping
// app.get("/get_posts", async (req, res) => {
//   let posts = await Posts.findAll();
//   let users = await Users.findAll();
//
//   let userIdToUserMap = new Map(); // Create a map to store user information based on user ID
//
//   // Populate the map with user information
//   for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     userIdToUserMap.set(user.id, { username: user.name, email: user.email });
//   }
//
//   let postArray = [];
//
//   // Iterate over each post and retrieve the corresponding user information from the map
//   for (let i = 0; i < posts.length; i++) {
//     let post = posts[i];
//     let user = userIdToUserMap.get(post.userId);
//
//     if (user) {
//       let postObject = {
//         ...post.dataValues,
//         username: user.username,
//         email: user.email,
//       };
//       postArray.push(postObject);
//     }
//   }
//
//   res.send(postArray);
// });
