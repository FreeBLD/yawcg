var context = require.context('../src', true, /\.test\.ts$/);
context.keys().forEach(context);
module.exports = context;