import React, { Component } from 'react'
import Newscontainer from './Newscontainer';
import Spinner from './Spinner'

export default class Appbody extends Component {
    constructor() {
        super();
        this.state = {
            article: ['Something went wrong'],
            totalResults: 0,
            totalVisited: -1,
            page: 0,
            loading: true,
            q: '',
            disableNext: false
        }
    }
    componentDidMount() {
        this.setState({ loading: true });
        let apiKey = '1f35691ec1b4432f92035ed56e55e1bf';
        let url = `https://newsapi.org/v2/top-headlines?country=in&q=${this.state.q}&language=en&category=${this.props.category}&sortBy=publishedAt&apiKey=${apiKey}&page=${this.state.page + 1}`
        let fetchUrl = async () => {
            try {
                let unprocessedResponse = await (fetch(url));
                if (!unprocessedResponse.ok) {
                    throw new Error("Maximum limit for the day reached");
                }
                let response = await (unprocessedResponse.json());
                this.setState({
                    article: response.articles,
                    totalResults: response.totalResults,
                    totalVisited: response.articles.length,
                    page: 1,
                    loading: false
                });
                if (this.state.totalResults <= this.state.totalVisited)
                    this.setState({ disableNext: true });
            } catch (error) {
                console.log(error);
                this.setState({
                    loading: false
                });
            }
        }
        fetchUrl();
    }
    fetchnext = () => {
        this.setState({ loading: true });
        let apiKey = '1f35691ec1b4432f92035ed56e55e1bf';
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&q=${this.state.q}&language=en&sortBy=publishedAt&apiKey=${apiKey}&page=${this.state.page + 1}`
        let fetchUrl = async () => {
            try {
                let unprocessedResponse = await (fetch(url));
                this.setState({ loading: true });
                if (!unprocessedResponse.ok) {
                    throw new Error("Maximum limit for the day reached");
                }
                let response = await (unprocessedResponse.json());
                this.setState({
                    article: response.articles,
                    totalResults: response.totalResults,
                    totalVisited: this.state.totalVisited + response.articles.length,
                    page: this.state.page + 1,
                    loading: false
                })
                if (this.state.totalResults <= this.state.totalVisited)
                    this.setState({ disableNext: true });
            } catch (error) {
                console.log(error);
                this.setState({
                    loading: false
                });
            }
        }
        fetchUrl();
    }
    fetchprev = () => {
        this.setState({ loading: true });
        let apiKey = '1f35691ec1b4432f92035ed56e55e1bf';
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&q=${this.state.q}&language=en&sortBy=publishedAt&apiKey=${apiKey}&page=${this.state.page - 1}`
        let fetchUrl = async () => {
            try {
                let unprocessedResponse = await (fetch(url));
                this.setState({ loading: true });
                if (!unprocessedResponse.ok) {
                    throw new Error("Maximum limit for the day reached");
                }
                let response = await (unprocessedResponse.json());
                this.setState({
                    article: response.articles,
                    totalResults: response.totalResults,
                    totalVisited: this.state.totalVisited - response.articles.length,
                    page: this.state.page - 1,
                    loading: false
                })
                this.setState({ disableNext: false });
            } catch (error) {
                console.log(error);
                this.setState({
                    loading: false
                });
            }
        }
        fetchUrl();
    }
    render() {
        return (
            <section className="w-full bg-gray-300 rounded-3xl rounded-b-none min-h-[90vh]">
                <section className=' font-myFont font-bold text-2xl mx-auto py-10 w-max'>{this.props.heading}</section>
                {this.state.loading && <Spinner />}
                {!this.state.loading && <Newscontainer state={this.state} />}
                {!this.state.loading && <div className='flex justify-between'>
                    <button className="bg-indigo-700 text-white px-5 py-2 ml-40 my-10 rounded-md disabled:opacity-50 transition-all hover:bg-indigo-900" onClick={this.fetchprev} disabled={this.state.page === 1}>&larr;Prev</button>
                    <button className="bg-indigo-700 text-white px-5 py-2 mr-40 my-10 rounded-md disabled:opacity-50 transition-all  hover:bg-indigo-900" onClick={this.fetchnext} disabled={this.state.disableNext}>Next&rarr;</button>
                </div>}
            </section>
        )
    }
}
