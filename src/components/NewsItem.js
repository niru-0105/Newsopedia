import React from 'react'

const NewsItem =(props)=> {
        let { urlToImage, title, description, url, author, date, source } = props
        return (
            <>
                <div className="card my-3" >
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left: '89%!important',zIndex:'1'}}> {source} </span>
                        <img src={urlToImage} style={{ width: "100%" }} className="card-img-top " alt="..." />
                        <div className="card-body">

                            <h5 className="card-title">{!title ? "" : title.slice(0, 45)}..</h5>
                            <p className="card-text">{!description ? "" : description.slice(0, 88)}...</p>
                            <a href={url} className="btn btn-primary">Read more</a>
                        </div>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                </div>
            </>
        )
    }

export default NewsItem