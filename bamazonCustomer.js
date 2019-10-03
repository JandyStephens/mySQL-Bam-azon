var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazonDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  chooseItem();
});

function chooseItem() {
  var productsDisplay = connection.query("SELECT * FROM products", function(
    err,
    products
  ) {
    // if (err) throw err;
    console.table(products);
    function askQuestions() {
      return inquirer
        .prompt([
          {
            name: "productId",
            message: "Please enter the ID of the item you wish to purchase:"
          },
          {
            name: "quantity",
            message: "How many would you like to purchase?"
          }
        ])
        .then(function(answers) {
          // console.log("User answers:", answers);
          // console.log(products);
          // console.log(products.stock_quantity);S
          var selectedItem = connection.query(
            "SELECT * FROM bamazondb.products WHERE item_id = ?",
            [answers.productId],
            function(req, res) {
              // console.log("Currently in stock:", res[0].stock_quantity);
              // console.table(res);

              // for (let i = 0; i < products.length; i++) {
              // if (parseInt(answers.productId) === products[i].item_id) {
              //   selectedItem = products[i];
              // console.log(selectedItem);
              // if (err) throw err;
              if (res.length === 0 || answers.quantity == false) {
                console.log("Please enter an item ID and quantity to start");
                askQuestions();
              } else if (res[0].stock_quantity === 0) {
                console.log(
                  `We are currently out of ${res[0].product_name}. Please choose another item.`
                );
                askQuestions();
              } else if (answers.quantity > res[0].stock_quantity) {
                console.log(
                  "Insufficient quantity in stock. Please enter another amount."
                );
                askQuestions();
              } else {
                reduceStock(answers, res);
                // console.log(res[0].product_name);
                // chooseItem();
              }
            }
            // }
            // }
          );
        });
    }
    askQuestions();
  });
}
//       }
//  ,
//       function(err, res) {
//         if (err) throw err;
//         console.log("You have purchased " + answers.quantity + "!");
//         // Call updateProduct AFTER the INSERT completes
//         askUserQuestions();
//       }
//     );
//   });
// }

function reduceStock(answers, res) {
  connection.query(
    "UPDATE products SET stock_quantity= stock_quantity - ? WHERE item_id = ?",
    [answers.quantity, answers.productId],
    function(err, products) {
      var totalCost = res[0].price * answers.quantity;
      // console.log(totalCost);
      console.log(
        `Success! You have purchased ${answers.quantity} ${res[0].product_name}. Your total comes to ${totalCost} dollars.`
      );
    }
  );
  // console.log(answers.quantity);
  // console.log(answers.productId);
}
