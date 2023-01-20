var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Hello Content!\n', function(err) {
    if(err) throw err;
    console.log('Saved!');

// var fs = require('fs');
fs.open('mynewfile2.txt', 'w', function(err, file){
    if(err) throw err;
    console.log('Saved!! Saved!!');
})

fs.writeFile('mynewfile3.txt', 'Hi Content!!!\n', function(err) {
    if(err) throw err;
    console.log('Saved!!! Saved!!! Saved!!!');
})

fs.appendFile('mynewfile1.txt', ' This is my text. ', function (err) {
    if (err) throw err;
    console.log('Updated!');
})

fs.writeFile('mynewfile3.txt', 'This is our text!!', function (err) {
    if (err) throw err;
    console.log('Replaced!');
})

fs.unlink('mynewfile2.txt', function(err) {
    if(err) throw err;
    console.log('File Deleted!');
})

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
})

});