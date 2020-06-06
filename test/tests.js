let tests = require.context('../src', true, /\.test\.ts$/);
tests.keys().forEach(tests);
module.exports = tests;