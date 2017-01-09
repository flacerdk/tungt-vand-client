import React from 'react'

export default function ExampleList(props) {
  let exampleList = null
  if (typeof props.content !== 'undefined' && props.content.length > 0) {
    const exampleItems = props.content.map(props.elementCb)
    exampleList = (
      <div className="examples">
        <div className="example-header">
          {props.title}
        </div>
        <div className="example-list">
          {exampleItems}
        </div>
      </div>
    )
  }
  return exampleList
}
