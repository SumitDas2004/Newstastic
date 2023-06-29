import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class Newscontainer extends Component {
  render() {
    let i=0;
    if(this.props.state.article.length>0){
    return (
      <section className="newsItemWrap">
          {
          this.props.state.article.map((e)=>{
            if(e.urlToImage!==null){
              let name="";
              if(e.source!==undefined)
              name=e.source.name;
            return <NewsItem imageurl={e.urlToImage} url={e.url} key={i++} description={e.description} title={e.title} name={name}/>
            }
          })
          }
      </section>
    )
        }else return <section className='flex justify-center pt-20 font-myFont font-bold'>No more articles found :(</section>
  }
}
