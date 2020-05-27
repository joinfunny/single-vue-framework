module.exports = {
  testRegex: `./(packages)/[^/]+/test/.+\\.[jt]s$`,
  testPathIgnorePatterns: ["/node_modules/"],
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/test/testSetupFile.js"]
};
