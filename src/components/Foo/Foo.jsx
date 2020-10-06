import React from 'react';

import {ClickOutside} from '../ClickOutside';

import './foo.css';

export const Foo = props => {
  const { func } = props;

  return (
    <ClickOutside callback={ func }>
      <div className={'container'}/>
    </ClickOutside>
  );
};
