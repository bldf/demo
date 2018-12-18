var tmp = require('tmp');

/**
 * 生成同步文件名
 */
var name = tmp.tmpNameSync();
console.log("Created temporary filename: ", name);