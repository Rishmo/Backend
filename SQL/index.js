const { faker } = require('@faker-js/faker'); // for requiring faker

const mysql = require('mysql2'); // requiring mysql2

// create the connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sql_conn',
    password: 'Nov@38MySQL24',
  });

  try{
    conn.query("SHOW TABLES", (err, result) => {
      if(err)
        throw err;
      console.log(result);
    });
  } catch(err){
    console.log(err);
  }

  // to close the connection

  conn.end();

// for generating random data in faker

// let createRandomUser = ()  => {
//     return {
//       userId: faker.string.uuid(),
//       username: faker.internet.username(), // before version 9.1.0, use userName()
//       email: faker.internet.email(),
//       avatar: faker.image.avatar(),
//       password: faker.internet.password(),
//       birthdate: faker.date.birthdate(),
//       registeredAt: faker.date.past(),
//     };
//   };

// console.log(createRandomUser()); // printing randomUser input


// for using database
let getRandomUser = ()  => {
    return {
      id: faker.string.uuid(),
      username: faker.internet.username(), 
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  };

// console.log(getRandomUser());