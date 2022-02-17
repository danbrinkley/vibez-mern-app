import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import Player from './index';

describe('Player', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Player />);
  })

  it('Player should render', () => {
    expect(wrapper).to.have.length(1);
  });

  it('Player should render both SongControls and VolumeControls', () => {
    const wrapper = shallow(<Player />);
    expect(wrapper.children()).to.have.length(2);
  });

});
