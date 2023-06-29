
import React, { Component } from 'react'
import spinner from '../Spin-1s-200px.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className="flex justify-center pt-10">
        <img src={spinner} alt="" srcSet="" />
      </div>
    )
  }
}
