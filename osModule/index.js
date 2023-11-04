const os = require('os');

console.log("CPU Architecture", os.arch());

console.log("Free Memory", os.freemem());

console.log("Totle Memory", os.totalmem());

console.log("Network Interfaces", JSON.stringify(os.networkInterfaces()));

console.log("OS default temprory dir", os.tmpdir());

console.log("Endianess", os.endianness());

console.log("Hostname", os.hostname());

console.log("OS type", os.type());

console.log("OS plateform", os.platform());

console.log("OS release", os.release());