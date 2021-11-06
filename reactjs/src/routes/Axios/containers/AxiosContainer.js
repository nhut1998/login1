import React, { Component } from 'react'
import api from 'helpers/api'
import Axios from '../components/Axios'

export default class AxiosContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
    this.fetchQuestions = this.fetchQuestions.bind(this)
  }

  fetchQuestions() {
    api.get('questions')
      .then(res => {
        this.setState({
          questions: res.data
        })
      })
  }

  componentDidMount() {
    this.fetchQuestions()
  }

  render() {
    const { questions } = this.state
    
    return (
      <>
        <Axios questions={questions} />
      </>
    )
  }
}
