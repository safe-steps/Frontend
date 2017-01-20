import React, {Component} from 'react';

import s from 'components/styles/index.scss';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className={s.someClass}>This is a sample Home Page.</h1>
      </div>
    );
  }
}
