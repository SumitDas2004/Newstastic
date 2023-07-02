import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

export default class Newscontainer extends Component {
  render() {
    let i=0;
    if(this.props.state.article.length>0){
    return (
      <InfiniteScroll
      dataLength={this.props.state.article.length}
      next={this.props.fetchnext}
      hasMore={this.props.state.totalResults > this.props.state.totalVisited}
      loader={<Spinner/>}
    >
      <section className="newsItemWrap pt-5">
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
      </InfiniteScroll>
    )
        }else return <section className='flex justify-center pt-20 font-myFont font-bold'>No more articles found :(</section>
  }
}
