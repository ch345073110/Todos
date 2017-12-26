// Generated by CoffeeScript 2.1.0
var CFX, todosStore;

import {
  storiesOf
} from '@storybook/react';

import {
  prefixDom
} from 'cfx.dom';

import 'antd-mobile/dist/antd-mobile.css';

import Input from '../components';

import {
  Provider
} from 'cfx.react-redux';

import {
  store
} from 'ReduxServ';

todosStore = store.store;

CFX = prefixDom({Input, Provider});

export default function() {
  return storiesOf('Todos', module).addDecorator(function(story) {
    var c_Provider;
    ({c_Provider} = CFX);
    return c_Provider({
      store: todosStore
    }, story());
  }).add('Input', () => {
    var c_Input;
    ({c_Input} = CFX);
    return c_Input({});
  });
};
