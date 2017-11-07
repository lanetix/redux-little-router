require('babel-register')();

var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
var jsdom = require('jsdom').jsdom;
var sinon = require('sinon');

Enzyme.configure({ adapter: new Adapter() });

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;

beforeEach(function() {
  global.sandbox = sinon.sandbox.create();
});

afterEach(function() {
  global.sandbox.restore();
});
