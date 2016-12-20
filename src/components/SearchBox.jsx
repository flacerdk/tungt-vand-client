import React from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap/lib'

export default function SearchBox(props) {
  return (
    <div className="search-box">
      <Form inline action="" onSubmit={props.handleSubmit}>
        <FormGroup>
          <FormControl
            type="text"
            value={props.query}
            onChange={props.handleChange}
            placeholder="Slå op"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

SearchBox.propTypes = {
  handleSubmit: React.PropTypes.func,
  handleChange: React.PropTypes.func,
  query: React.PropTypes.string,
}
