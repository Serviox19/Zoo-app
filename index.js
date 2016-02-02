var mysql = require('mysql');
var prompt = require('prompt');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Dopekidx19',
  database: 'zoo_db'
});

prompt.start();

var zoo = {
  welcome: function(){
    console.log("Welcome to the Zoo And Friends App~!");
  },
  menu: function(){
    console.log('Enter (A): -----> to Add a new animal to the Zoo!');
    console.log('Enter (U): -----> to Update info on an animal in the Zoo!');
    console.log('Enter (V): -----> to Visit the animals in the Zoo!');
    console.log('Enter (D): -----> to Adopt an animal from the Zoo!');
    console.log('Enter (Q): -----> to Quit and exit the Zoo!');
  },
  add: function(input_scope){
    
  }
}