const fs = require("fs");

module.exports.file = async (path) => {
  return await fs.readFileSync(path, "utf8");
};

module.exports.array = async (path) => {
  return (await this.file(path)).split("\n").filter((v) => v !== "");
};

module.exports.ints = async (path) => {
  return (await this.array(path)).map((v) => parseInt(v));
};
