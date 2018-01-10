import { ddbs as dd } from 'ddeyes'
import React, { Component } from 'react'
import { List } from 'StoryView'
import { prefixDom } from 'cfx.dom'
import { connect } from 'cfx.react-redux'
import { store } from 'ReduxServ'
{ 
  actions 
  reducers
} = store
import { getState } from './components'

CFX = prefixDom {
  List
  'div'
}

class StoryTodos extends Component
  constructor: (props) ->
    super props
    @state = 
      todos: props.state.todos
      filter: props.state.filter
    @

  componentWillReceiveProps: (nextProps) ->
    {
      todos
      filter
    } = nextProps.state
    @setState {
      todos
      filter
    }
    @

  render: ->
    {
      c_div
      c_List
    } = CFX

    Packet = (bool, data) ->
      data.reduce (r, c) =>
        [
          r...
          (
            if c.isCompleted is bool
            then [ c ]
            else []
          )...
        ]
      , []

    c_div {}
    ,
      c_List
        data:
          if @state.filter is 'active'
          then Packet false, @state.todos
          else if @state.filter is 'completed'
          then Packet true , @state.todos
          else @state.todos
        styleChange: (
          (objectId, isCompleted) ->
            if isCompleted is true
              textDecorationLine: 'line-through'
              opacity: 0.4

        ).bind @

        Delete: (
          (key) ->
            @props.actions.removeOne
              objectId: key
        ).bind @

        hasClick: (
          (key, todo, isCompleted) ->
            console.log key, todo, isCompleted
            @props.actions.patch
              objectId: key
              todo: todo
              isCompleted: !isCompleted
        ).bind @

        Patch: (
          (key, value, isCompleted) ->
            console.log '2', isCompleted
            @props.actions.patch
              objectId: key
              todo: value
              isCompleted: isCompleted
        ).bind @

mapStateToProps = (state) ->
  getState state.todosRedux

mapActionToProps =
  # removeOne: actions.todoRemove
  removeOne: actions.todoDelete
  patch: actions.todoPatch

export default connect(
  mapStateToProps
  mapActionToProps
  StoryTodos
)