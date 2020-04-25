import React from 'react';
import { Button } from '_src/buttons';

const shallow = global.shallow;

describe('[Button] 컴포넌트 테스트', () => {
  const wrapper = shallow(
    <Button>Test Button!</Button>
  );

  it('Button 컴포넌트가 정상적으로 렌더링 되어야 한다.', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Button 컴포넌트 스타일 테스트', () => {
    console.log(wrapper.find('button').get(0).props);
    expect(wrapper.get(0).prop('style').width).equal('100%');
  });
});
