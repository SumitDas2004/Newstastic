import React, { Component } from 'react'
export default class NewsItem extends Component {
  render() {
    return (
      <a href={this.props.url} target='_blank' rel='noreferrer'>
        <section className='hoverUnderline flex flex-col justify-between h-96 w-96 rounded-tl-none bg-white rounded-3xl hover:scale-110 transition-transform hover:text-black hover:shadow-xl hover:cursor-pointer overflow-hidden'>
          <div className="h-52 w-full overflow-hidden flex items-center justify-center"><img src={this.props.imageurl} alt="Something went wrong :(" srcSet="" className='object-cover'/></div>
          <span className="mx-4 font-myFont text-xs font-medium text-gray-700">{this.props.name}</span>
          <span className="newsItemText mx-4 font-myFont text-base font-bold text-black">{this.props.title}</span>
          <span className="newsItemText mx-4 font-myFont text-sm font-medium text-gray-500 mb-6">{this.props.description}</span>
        </section>
      </a>
    )
  }
}