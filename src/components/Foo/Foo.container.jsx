import React, {useCallback} from 'react';

import {Foo} from './Foo';

export const FooContainer = props => {
  const {value} = props;

  const func = useCallback(() => {
    if (!value) return;

    console.log(value);
  }, [value]);

  return <Foo func={func}/>;
};
