import { configure, shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// Setup enzyme to use adapter
configure({ adapter: new Adapter() });

// Make functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.shallowToJson = shallowToJson;
global.renderer = renderer;