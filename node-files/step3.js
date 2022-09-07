const fs = require("fs");
const axios = require("axios");

function writeOutput(text, outputTxt) {
  if (outputTxt) {
    fs.writeFile(outputTxt, text, "utf-8", (err) => {
      if (err) {
        console.error(`Coudn't write ${outputTxt}: ${err}`);
        process.exit(1);
      }
    });
  } else {
    console.log(text);
  }
}

function cat(path, outputTxt) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    } else {
      writeOutput(data, outputTxt);
      console.log(path);
    }
  });
}

async function webCat(url, outputTxt) {
  try {
    const response = await axios.get(url);
    writeOutput(response.data, outputTxt);
  } catch (error) {
    console.error(`Error fetching ${url}: ${error}`);
    process.exit(1);
  }
}

let path;
let outputTxt;

if (process.argv[2] === "--out") {
  outputTxt = process.argv[3];
  path = process.argv[4];
} else {
  path = process.argv[2];
}

if (path.slice(0, 4) === "http") {
  webCat(path, outputTxt);
} else {
  cat(path, outputTxt);
}
