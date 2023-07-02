import React, { Component } from 'react'
import Newscontainer from './Newscontainer';
import Spinner from './Spinner';

export default class Appbody extends Component {
    constructor() {
        super();
        this.state = {
            article: ['Something went wrong'],
            totalResults: 0,
            totalVisited: -1,
            page: 0,
            loading: true,
            q: ''
        }
    }

    componentDidMount() {
        this.props.setProgress(10);
        this.setState({ loading: true });
        let apiKey = '1f35691ec1b4432f92035ed56e55e1bf';
        let url = `https://newsapi.org/v2/top-headlines?country=in&q=${this.state.q}&language=en&category=${this.props.category}&sortBy=publishedAt&apiKey=${apiKey}&page=${this.state.page + 1}`
        let fetchUrl = async () => {
            try {
                let unprocessedResponse = await (fetch(url));
                this.props.setProgress(30);
                if (!unprocessedResponse.ok) {
                    throw new Error(unprocessedResponse.response);
                }
                let response = await (unprocessedResponse.json());
                this.props.setProgress(70);
                this.setState({
                    article: response.articles,
                    totalResults: response.totalResults,
                    totalVisited: response.articles.length,
                    page: 1,
                    loading: false
                });
            } catch (error) {
                this.setState({
                    loading: false
                });
                console.log(error);
            }
            this.props.setProgress(100);
        }
        fetchUrl();
    }
    fetchnext = () => {
        this.props.setProgress(10);
        let apiKey = '1f35691ec1b4432f92035ed56e55e1bf';
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&q=${this.state.q}&language=en&sortBy=publishedAt&apiKey=${apiKey}&page=${this.state.page + 1}`
        let fetchUrl = async () => {
            try {
                let unprocessedResponse = await (fetch(url));
                this.props.setProgress(30);
                if (!unprocessedResponse.ok) {
                    throw new Error(unprocessedResponse.response);
                }
                let response = await (unprocessedResponse.json());
                this.props.setProgress(70);
                this.setState({
                    article: this.state.article.concat(response.articles),
                    totalResults: response.totalResults,
                    totalVisited: this.state.totalVisited + response.articles.length,
                    page: this.state.page + 1
                })
            } catch (error) {
                this.setState({
                    loading: false
                });
                console.log(error);
            }
            this.props.setProgress(100);
        }
        fetchUrl();
    }
    render() {
        return (
            <section className="w-full bg-gray-300 rounded-3xl rounded-b-none min-h-[90vh]">
                <section className=' font-myFont font-bold text-2xl mx-auto py-10 w-max'>{this.props.heading}</section>
                {this.state.loading && <Spinner/>}
                {!this.state.loading && <Newscontainer state={this.state} fetchnext={this.fetchnext}/>}
            </section>
        )
    }
}
