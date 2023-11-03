const fs = require("fs");

// console.log('READ START');
// Asynchronous way to read file
// fs.readFile('input.txt', (err, data) => {
//     if(err){
//         console.log('Error', err);
//         return err
//     }
//     console.log('Data :', data.toString());
//     console.log('READ END');
//     return data;
// })

// console.log('OTHER STUFF');

// Synchronous way to read file

// const data = fs.readFileSync('input.txt')
// console.log('Data', data.toString());

// Read > open + read

// const buf = new Buffer(1024)

// fs.open('input.txt','r+', (err, fd) => {
//     if(err) {
//         console.log('Error in opening file', err);
//     }
//     console.log('file opening successfully');

//     fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
//         if(err){
//             console.log('Error in reading file');
//         }
//         console.log('Data', bytes);
//         console.log('Data', buf.slice(0, bytes).toString());
//         fs.close(fd, (err) => {
//             if(err){
//                 console.log('Error in closing file');
//             } else{
//                 console.log('Success in closing file');
//             }
//         })
//     })
// })

// write in file
// fs.writeFile('input.txt', 'Hii, This is Adeel', (err) => {
//     if(err) {
//         console.log('Error in writing file');
//     }
//     else {
//         console.log('Success in writing file');
//     }
// })

// Append file

// fs.appendFile("input.txt", " Ahmad", "utf-8", (err) => {
//   if (err) {
//     console.log("Error in appending file");
//   } else {
//     console.log("Success in appending file");
//   }
// });

// Deleting file

fs.unlink('input.txt', (err) => {
    if(err){
        console.log('Error in deleting file');
    } else {
        console.log('Success in deleting file');
    }
})