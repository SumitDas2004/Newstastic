import React, { useState, useEffect } from 'react'
import Newscontainer from './Newscontainer';
import Spinner from './Spinner';

const Appbody = (props) => {
    const [article, setarticle] = useState(['Something went wrong'])
    const [totalResults, settotalResults] = useState(0)
    const [totalVisited, settotalVisited] = useState(-1)
    const [page, setpage] = useState(0)
    const [loading, setloading] = useState(true)
    const [q, setq] = useState('')

    useEffect(() => {
        props.setProgress(10);
        setloading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=in&q=${q}&language=en&category=${props.category}&sortBy=publishedAt&apiKey=${props.apiKey}&page=${page + 1}`
        let fetchUrl = async () => {
            try {
                let unprocessedResponse = await (fetch(url));
                props.setProgress(30);
                if (!unprocessedResponse.ok) {
                    throw new Error(unprocessedResponse.response);
                }
                let response = await (unprocessedResponse.json());
                props.setProgress(70);
                setarticle(response.articles)
                settotalResults(response.totalResults)
                settotalVisited(response.articles.length)
                setpage(1)
                setloading(false)
            } catch (error) {
                setloading(false);
                console.log(error);
            }
            props.setProgress(100);
        }
        fetchUrl();
    }, [])
    const fetchnext = () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&q=${q}&language=en&sortBy=publishedAt&apiKey=${props.apiKey}&page=${page + 1}`
        let fetchUrl = async () => {
            try {
                let unprocessedResponse = await (fetch(url));
                props.setProgress(30);
                if (!unprocessedResponse.ok) {
                    throw new Error(unprocessedResponse.response);
                }
                let response = await (unprocessedResponse.json());
                props.setProgress(70);
                setarticle(article.concat(response.articles))
                settotalResults(response.totalResults)
                settotalVisited(totalVisited + response.articles.length)
                setpage(page + 1)
            } catch (error) {
                setloading(false);
                console.log(error);
            }
            props.setProgress(100);
        }
        fetchUrl();
    }
    return (
        <section className="w-full bg-gray-300 rounded-3xl rounded-b-none min-h-[90vh]">
            <section className=' font-myFont font-bold text-2xl mx-auto py-10 w-max'>{"Newstastic: "+props.heading}</section>
            {loading && <Spinner />}
            {!loading && <Newscontainer article={article} totalResults={totalResults} totalVisited={totalVisited} page={page} loading={loading} q={q} fetchnext={fetchnext} />}
        </section>
    )
}
export default Appbody;