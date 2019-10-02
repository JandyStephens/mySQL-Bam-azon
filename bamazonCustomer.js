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
    products
  ) {
    console.table(products);
  });

  // inquirer
  //   .prompt([
  //     {
  //       name: "product id",
  //       message: "Please enter the ID of the item you wish to purchase:"
  //     },
  //     {
  //       name: "quantity",
  //       message: "How many would you like to purhase?"
  //     }
  //   ])
  //   .then(function(answers) {
  //     console.log(answers);
  //     var query = connection.query(
  //       "INSERT INTO auctions SET ?",
  //       {
  //         name: answers.tacocat,
  //         category: answers.category,
  //         price: parseFloat(postAnswers.price)
  //       },
  //       function(err, res) {
  //         if (err) throw err;
  //         console.log("You have purchased " + answers.quantity + "!");
  //         // Call updateProduct AFTER the INSERT completes
  //         askUserQuestions();
  //       }
  //     );
  //   });
}
