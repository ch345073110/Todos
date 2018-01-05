import { ddbs as dd } from 'ddeyes'
import React, { Component } from 'react'
import { HotKeys } from 'react-hotkeys'
import { Input } from 'StoryView'
import { prefixDom } from 'cfx.dom'
import { connect } from 'cfx.react-redux'
import { store } from 'ReduxServ'
{
  actions 
  reducers
} = store
import { getState } from './components'

CFX = prefixDom {
  Input
  HotKeys
}

class StoryTodos extends Component
  constructor: (props) ->
    super props
    @state =
      todo: ''
      filter: props.state.filter
    @

  componentWillReceiveProps: (nextProps) ->
    {
      filter
    } = nextProps.state
    @setState {
      filter
    }
    @

  render: ->

    {
      c_Input
      c_HotKeys
    } = CFX

    c_HotKeys
      keyMap:
        submit: 'enter'
      handlers:
        submit: ( ->
          @props.actions.create todo: @state.todo
          # @setState Input: getInput
        ).bind @
    ,
      c_Input
        filter: @state.filter
        selector: (
          (filter) ->
            @props.actions.filterSave
              filter: filter
        ).bind @
        onChange: (
          (v) ->
            @setState todo: v
        ).bind @
        value: @state.todo


mapStateToProps = (state) ->
  getState state.todosRedux

mapActionToProps =
  filterSave: actions.filterSave
  create: actions.todosCreate

export default connect(
  mapStateToProps
  mapActionToProps
  StoryTodos
)  
   