const path = require('path');
// console.log(path.dirname('C:/Users/SAURABH KUMAR YADAV/project/NodeJScode/PathModule/path.js'));
// console.log(path.extname('C:/Users/SAURABH KUMAR YADAV/project/NodeJScode/PathModule/path.js'));
// console.log(path.basename('C:/Users/SAURABH KUMAR YADAV/project/NodeJScode/PathModule/path.js'));

// console.log(path.parse('C:/Users/SAURABH KUMAR YADAV/project/NodeJScode/PathModule/path.js'));

const myPath = path.parse('C:/Users/SAURABH KUMAR YADAV/project/NodeJScode/PathModule/path.js');
console.log(myPath.name);
console.log(myPath.root);