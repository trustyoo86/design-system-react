const { configure, shallow, render, mount } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

global.shallow = shallow;
global.render = render;
global.mount = mount;

configure({
  adapter: new Adapter(),
});
