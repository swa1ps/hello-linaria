import React from 'react';

import Button from './Button';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Button isFoo>button text</Button>
        <Button>button text</Button>
      </>
    );
  }
}
