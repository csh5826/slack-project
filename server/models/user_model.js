// const Pool = require('pg').Pool
// const pool = new Pool({
//       port: 5432,

// });

// const getUser = () => {
//     return new Promise(function(resolve, reject) {
//       pool.query('SELECT * FROM user ORDER BY id ASC', (error, results) => {
//         if (error) {
//           reject(error)
//         }
//         resolve(results.rows);
//       })
//     }) 
//   }

//   const createUser = (body) => {
//     return new Promise(function(resolve, reject) {
//       const { name } = body
//       pool.query('INSERT INTO user (name) RETURNING *', [name], (error, results) => {
//         if (error) {
//           reject(error)
//         }
//         resolve(`A new user has been added: ${results.rows[0]}`)
//       })
//     })
//   }