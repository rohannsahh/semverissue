const semver = require("semver");


const version = "1.2.alpha.1";
const specialTilde = "*";

const version2 = "4.2.beta.3";
const specialTilde2 = "*";

const version3 = "3.2.3";
const specialTilde3 = "*";

console.log(
  "semver package special tilde: ",
  semver.satisfies(version, specialTilde)
);

console.log(
    "semver package special tilde: ",
    semver.satisfies(version2, specialTilde2)
  );
  console.log(
    "semver package special tilde: ",
    semver.satisfies(version3, specialTilde3)
  );