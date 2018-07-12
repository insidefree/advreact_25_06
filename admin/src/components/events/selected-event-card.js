import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'

class SelectedEventCard extends Component {
  render() {
    const { event, connectDropTarget, canDrop, hovered } = this.props

    const borderColor = canDrop ? (hovered ? 'red' : 'green') : 'black'

    return connectDropTarget(
      <div style={{ border: `1px solid ${borderColor}`, height: 200 }}>
        <h3>{event.title}</h3>
        <h3>{event.where}</h3>
      </div>
    )
  }
}

const spec = {
  drop(props, monitor) {
    console.log(
      '---',
      'person',
      monitor.getItem().uid,
      'event',
      props.event.uid
    )
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  canDrop: monitor.canDrop(),
  hovered: monitor.isOver()
})

export default DropTarget(['person'], spec, collect)(SelectedEventCard)
