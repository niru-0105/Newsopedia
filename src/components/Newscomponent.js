import React, { useState, useEffect } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

const Newscomponent = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    // document.title = `${this.props.category}:- News Monkey`
    const updateNews = async ()=> {
        props.setProgress(20)
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(50)
        let parsedData = await data.json()
        props.setProgress(80)


        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }

    // async componentDidMount() {
    //     this.updateNews();
    // }
    useEffect(() => {
        updateNews();
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    };



    return (
        <>
            <h2 className='text-center '>News Monkey :- {`${props.category}`}</h2>
            <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Loading />}>
                <div className="container">

                    <div className="row">

                        {!loading && articles && articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem urlToImage={element.urlToImage} title={element.title} description={element.description} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>


        </>
    )
}

Newscomponent.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
}
Newscomponent.defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 8,
}

export default Newscomponent









