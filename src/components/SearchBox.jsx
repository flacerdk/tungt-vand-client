import React from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap/lib'
import styles from '../stylesheets/entry.css'

export default function SearchBox(props) {
  return (
    <div className={styles.searchBox}>
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
