// Generated by CoffeeScript 2.1.1
var CFX, StoryTodos, actions, mapActionToProps, mapStateToProps, reducers;

import {
  ddbs as dd
} from 'ddeyes';

import React, {
  Component
} from 'react';

import Input from '../../../StoryView/src/components/input';

import List from '../../../StoryView/src/components/list';

import Title from '../../../StoryView/src/components/title';

import {
  prefixDom
} from 'cfx.dom';

import {
  connect
} from 'cfx.react-redux';

import {
  store
} from 'ReduxServ';

({actions, reducers} = store);

console.log(actions);

import {
  getState
} from './components';

CFX = prefixDom({Title, Input, List, 'div': 'div'});

StoryTodos = class StoryTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: props.state.filter
    };
    this;
  }

  componentWillReceiveProps(nextProps) {
    var filter;
    ({filter} = nextProps.state);
    this.setState({filter});
    return this;
  }

  render() {
    var c_Input, c_List, c_Title, c_div;
    ({c_div, c_Title, c_Input, c_List} = CFX);
    return c_div({}, c_Title({}), c_Input({
      filter: this.props.state.filter,
      selector: (function(filter) {
        return this.props.actions.filterSave({
          filter: filter
        });
      }).bind(this),
      blur: (function(v) {
        return this.props.actions.create({
          todo: v
        });
      }).bind(this)
    }), c_List({
      data: store.store.getState().todosRedux.todos,
      isClick: true,
      str: ' ',
      Delete: (function(key) {
        return this.props.actions.removeOne({
          id: key
        });
      }).bind(this),
      Patch: (function(key, value) {
        console.log(key, value, '111111');
        return this.props.actions.patch({
          id: key,
          todo: value
        });
      }).bind(this),
      hasClick: function(str) {
        console.log('key:');
        return console.log(str);
      }
    }));
  }

};

mapStateToProps = function(state) {
  return getState(state.todosRedux);
};

mapActionToProps = {
  filterSave: actions.filterSave,
  create: actions.todosCreate,
  removeOne: actions.todosRemoveOne,
  patch: actions.todosPatch
};

export default connect(mapStateToProps, mapActionToProps, StoryTodos);
