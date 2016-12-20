import React from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap/lib'

export default function SearchBox(props) {
  return (
    <div className="search-box">
      <Form action="" onSubmit={props.handleSubmit}>
        <FormGroup>
          <FormControl
            type="text"
            value={props.query}
            onChange={props.handleChange}
            placeholder="Begreb..."
          />
        </FormGroup>
        <Button type="submit">Slå op</Button>
      </Form>
    </div>
  )
}

SearchBox.propTypes = {
  handleSubmit: React.PropTypes.func,
  handleChange: React.PropTypes.func,
  query: React.PropTypes.string,
}
