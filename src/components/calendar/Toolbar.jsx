import React from 'react';
import cn from 'classnames';
import message from './utils/messages';
import { navigate } from './utils/constants';

import CalendarIcon from '../../assets/calendar.svg'
import Arrow from '../../assets/planner-arrow.svg'

let Toolbar = React.createClass({

  render() {
    let { messages, label } = this.props;

    messages = message(messages)

    return (
      <div className='rbc-toolbar'>
        <span className='rbc-btn-group'>
          <button
            type='button'
            onClick={this.navigate.bind(null, navigate.PREVIOUS)}
          >
            <img src={Arrow} role='presentation' />
          </button>
          <button
            type='button'
            onClick={this.navigate.bind(null, navigate.TODAY)}
          >
            <img src={CalendarIcon} role='presentation' />
          </button>
          <button
            type='button'
            onClick={this.navigate.bind(null, navigate.NEXT)}
          >
            <img src={Arrow} role='presentation' style={{ transform: 'rotate(180deg)' }}/>
          </button>
        </span>

        <span className='rbc-toolbar-label'>
          { label }
        </span>

        <span className='rbc-btn-group'>
        {
          this.viewNamesGroup(messages)
        }
        </span>
      </div>
    );
  },

  navigate(action){
    this.props.onNavigate(action)
  },

  view(view){
    this.props.onViewChange(view)
  },

  viewNamesGroup(messages) {
    let viewNames = this.props.views
    const view = this.props.view

    if (viewNames.length > 1) {
      return (
        viewNames.map(name =>
          <button type='button' key={name}
            className={cn({'rbc-active': view === name})}
            onClick={this.view.bind(null, name)}
          >
            {messages[name]}
          </button>
        )
      )
    }
  }
});

export default Toolbar;
