var tmp = require('tmp');


/**
 * 异步文件创建
创建简单的临时文件，该文件将在进程退出时关闭和取消链接。
 */
tmp.file(function _tempFileCreated(err, path, fd, cleanupCallback) {
  if (err) throw err;

  console.log("File: ", path);
  console.log("Filedescriptor: ", fd);

  // If we don't need the file anymore we could manually call the cleanupCallback
  // But that is not necessary if we didn't pass the keep option because the library
  // will clean after itself.
  //如果我们不再需要该文件，我们可以手动调用cleanupCallback

//但是如果我们没有传递keep选项，那么就没有必要这样做，因为库是

//会自动清洗
  cleanupCallback();
});