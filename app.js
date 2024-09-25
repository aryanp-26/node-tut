// // console.log('Welcome to Node Tutorial')

// // // console.log(__filename)
// // // console.log(__dirname)
// // // console.log(process)

// // console.log(module)
// // console.log(`The path for the module is ${module.path}`)

// const os = require('os')

// const user = os.userInfo()
// console.log(user)
// console.log(`The System has been running for ${os.uptime() / (60*60)} hours`)
// console.log(os.type())

// const { readFileSync, writeFileSync } = require('fs')
// const first = readFileSync('./content/first.txt','utf-8')
// const second = readFileSync('./content/second.txt','utf-8')

// console.log(first)
// console.log(second)

// writeFileSync('./content/resultfile.txt' , `Here is the result: ${first} & ${second}`)

// const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return " ";
//   }

//   const first = result;

//   readFile("./content/second.txt", "utf-8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return " ";
//     }

//     const second = result;

//     writeFile(
//       "./content/resultasynccc",
//       `Here is the data for async method: ${first} & ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return " ";
//         }

//         console.log(result);
//       }
//     );
//   });
// });




// const http = require('http')

const i = require('lodash')

const a = [1,[2,[2,[4,[6,6,[2,4]]]]]]

const b = i.flattenDeep(a)

console.log(b)