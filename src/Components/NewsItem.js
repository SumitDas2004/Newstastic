import React from 'react'
import defaultImg from '../Newstastic-logos.jpeg'
const NewsItem = (props) => {
  const defaultImage = (e) => {
    e.target.src = defaultImg;
  }
  return (
    <a href={props.url} target='_blank' rel='noreferrer'>
      <section className='card hoverUnderline flex flex-col justify-between h-96 w-96 rounded-tl-none bg-white rounded-3xl hover:scale-110 transition-transform hover:text-black hover:shadow-xl hover:cursor-pointer overflow-hidden'>
        <div className="h-52 w-full overflow-hidden flex items-center justify-center"><img src={props.imageurl} onError={defaultImage} alt="Something went wrong :(" srcSet="" className='object-cover' /></div>
        <span className="mx-4 font-myFont text-xs font-medium text-gray-700">{props.name}</span>
        <span className="newsItemText mx-4 font-myFont text-base font-bold text-black">{props.title}</span>
        <span className="newsItemText mx-4 font-myFont text-sm font-medium text-gray-500 mb-6">{props.description}</span>
      </section>
    </a>
  )
}
export default NewsItem;
