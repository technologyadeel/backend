const path = require("path")

console.log(path.sep);

// console.log(process.env.PATH);

console.log(path.delimiter);

const filePath1 = '\public_html\home\index.html'

const currentFilePath = __filename;
console.log(currentFilePath);

const basename = path.basename(currentFilePath)
console.log('basename > ',basename);

const basenameWithoutExt = path.basename(currentFilePath, '.js')
console.log('basenameWithoutExt > ',basenameWithoutExt);

const dirname = path.dirname(currentFilePath)
console.log('basenameWithoutExt > ', dirname);
console.log('ext > ', path.extname(currentFilePath));

const pathTofile = path.format({
    dir: '\public_html\home',
    base: 'index.html'
})

console.log(pathTofile);

console.log('isAbsolute', path.isAbsolute(currentFilePath));
console.log('isAbsolute', path.isAbsolute('./index.js'));

const pathToDir = path.join('/home', 'js', 'dist', 'index.js')
console.log(pathToDir);

console.log(path.parse(pathToDir));

console.log('relative :', path.relative('home/user/config', 'home/user/js'));

console.log('resolve :',path.resolve());

console.log(path.normalize('//home//user//js'));