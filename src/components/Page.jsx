import React from 'react'

import fetchAndParse from '../utils/parse-dict-entry'
import MainPage from './MainPage'
import PronunciationBox from './PronunciationBox'
import DefinitionBox from './DefinitionBox'
import SearchBox from './SearchBox'
import SuggestionBar from './SuggestionBar'
import Title from './Title'
import ErrorPage from './ErrorPage'

require('../stylesheets/Page.scss')

function renderEntry(entry) {
  const title = (
    <Title
      title={entry.title.title}
      inflection={entry.inflection}
    />)
  const pronunciationBox = (
    <PronunciationBox
      inflection={entry.inflection}
      pronunciations={entry.pronunciations}
    />)
  const definitions = (
    <DefinitionBox
      definitions={entry.definitions}
      header="Betydninger"
    />)
  const fasteUdtryk = (
    <DefinitionBox
      definitions={entry.fasteUdtryk}
      header="Faste udtryk"
    />
  )
  return (
    <div>
      {title}
      <div className="entry-column">
        {pronunciationBox}
        {definitions}
        {fasteUdtryk}
      </div>
    </div>
  )
}

export default class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      query: '',
      error: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChooseItem = this.handleChooseItem.bind(this)
  }

  handleChange(event) {
    this.setState({ query: event.target.value })
  }

  handleChooseItem(link) {
    fetchAndParse(link)
      .then(r => this.setState({ data: JSON.parse(r), query: '', error: false }))
      .catch(() => {
        this.setState({ query: '', error: true })
      })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.handleChooseItem({ query: this.state.query })
  }

  render() {
    let leftColumn
    let suggestions = ''
    if (this.state.error) {
      leftColumn = (<ErrorPage />)
    } else if (Object.keys(this.state.data).length > 0) {
      leftColumn = renderEntry(this.state.data)
      suggestions = (
        <SuggestionBar
          suggestions={this.state.data.suggestions}
          onClick={this.handleChooseItem}
        />)
    } else {
      leftColumn = (<MainPage />)
    }
    return (
      <div className="row">
        <div className="column">
          {leftColumn}
        </div>
        <div className="column">
          <SearchBox
            handleChange={this.handleChange}
            query={this.state.query}
            handleSubmit={this.handleSubmit}
          />
          {suggestions}
        </div>
      </div>
    )
  }
}
