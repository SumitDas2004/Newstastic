import React from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

const Newscontainer = (props) => {
  let i = 0;
  if (props.article.length > 0) {
    return (
      <InfiniteScroll
        dataLength={props.article.length}
        next={props.fetchnext}
        hasMore={props.totalResults > props.totalVisited}
        loader={<Spinner />}
      >
        <section className="newsItemWrap pt-5">
          {
            props.article.map((e) => {
              if (e.urlToImage !== null) {
                let name = "";
                if (e.source !== undefined)
                  name = e.source.name;
                return <NewsItem imageurl={e.urlToImage} url={e.url} key={i++} description={e.description} title={e.title} name={name} />
              }
            })
          }
        </section>
      </InfiniteScroll>
    )
  } else return <section className='flex justify-center pt-20 font-myFont font-bold'>No more articles found :(</section>
}
export default Newscontainer;
