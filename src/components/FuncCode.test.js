// Copyright 2004-present Facebook. All Rights Reserved.

/* eslint-disable no-unused-vars */

import React from 'react';
import {shallow, mount} from 'enzyme';
import FuncCode from './FuncCode';

describe('<FuncCode>', () => {
  it('should render without crashing', () => {
    const funcCode = shallow(<FuncCode />);
  });

  it('should be <pre> tag', () => {
    const funcCode = shallow(<FuncCode code=""/>);
    expect(funcCode.is('pre')).toBe(true);
  });

  it('should have <code> tag', () => {
    const funcCode = shallow(<FuncCode  code=""/>);
    expect(funcCode.find('code').length).toEqual(1);
  });

  it('should have prop.code defined', () => {
    const funcCode = mount(<FuncCode code="" />);
    expect(funcCode.props().code).toBeDefined();
  });

  it('should contain code in prop.code', () => {
    const funcCode = mount(<FuncCode code="return;" />);
    expect(funcCode.text()).toEqual('return;');
  });
});
