import React from 'react';
import Attachment from './Attachment';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders default Attachment', () => {
  const wrapper = shallow(<Attachment />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
