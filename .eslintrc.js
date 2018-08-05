module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "parserOptions": {
      "ecmaVersion": 9,
      "sourceType": "module"
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-console": "error",
    "no-alert": "error",
    "indent": [
      "error",
      2
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
  }
};
