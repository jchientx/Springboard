const fs = require("fs");

function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    } else {
      console.log(data);
      console.log(path);
    }
  });
}

cat(process.argv[2]);
