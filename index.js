// module.exports = () => {
//   console.log('Adios!!');
// };

const fs = require('fs');
const links = [];

const readFiles = () => {
    fs.readFile(docname, 'utf-8', (err, data) => {
        if (err) {
            console.log('error: ', err);
        } else {
            // const regExplink =  /\[((.+?))\]\((http|https|ftp|ftps).+?\)/g;
            const regExp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
            const result = data.match(regExp);
            links.push(result);
            console.log(links)
            return result
        }
    });
}
const grab = (flag) => {
  let index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index + 1];
}
const docname = grab('--doc');

if (!docname) {
  console.log("Especifica el nombre del archivo usando --doc")
} else {
  readFiles()
}

 
 
 
 