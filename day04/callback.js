// javascript/day04/callback.js
// FILE I/O
const fs = require('fs') // file system

// fs.readFile(<path>, <callback function>)
// callback function : (error, content) {console.log(error, content)}
fs.readFile(__dirname+'/test.md', 'utf8', (error, content) => {
    if (error === null) {
        console.log(content)
        // This is a test file.
    } else {
        console.log(error)
        // null
    }
})