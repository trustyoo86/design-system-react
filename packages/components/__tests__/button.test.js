import React from 'react';
import { Button } from '_src/buttons';

const shallow = global.shallow;

describe('[Button] 컴포넌트 테스트', () => {
  it('Button 컴포넌트가 정상적으로 렌더링 되어야 한다.', () => {
    const wrapper = shallow(
      <Button>Test Button!</Button>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
