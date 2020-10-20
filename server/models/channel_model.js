// const Pool = require('pg').Pool
// const pool = new Pool({
//       port: 5000,
// });

// const getChannel = () => {
//     return new Promise(function(resolve, reject) {
//       pool.query('SELECT * FROM channel ORDER BY id ASC', (error, results) => {
//         if (error) {
//           reject(error)
//         }
//         resolve(results.rows);
//       })
//     }) 
//   }

//   const createChannel = (body) => {
//     return new Promise(function(resolve, reject) {
//       const { name, email } = body
//       pool.query('INSERT INTO channels (channel) RETURNING *', [channel], (error, results) => {
//         if (error) {
//           reject(error)
//         }
//         resolve(`A new channel has been added: ${results.rows[0]}`)
//       })
//     })
//   }