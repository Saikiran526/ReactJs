import React, { useEffect, useState } from 'react'
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import NewsItem from './NewsItem'
import './NewsArea.css'

export default function NewsArea(props) {

    const [articles, setArticles] = useState([]);
    const [pageNo, setPageNo] = useState(1);


    const nextPage = () => {
        setPageNo(pageNo + 1)
        console.log("pageNo:" + pageNo)
    }

    const prePage = () => {
        setPageNo(pageNo - 1)
        console.log("pageNo:" + pageNo)
    }

    useEffect(() => {
        const fetchingData = async () => {
            let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=ee4270806ec74c82a014d5c4c41e0ff5&size=6&page=${pageNo}`);
            var fetchedData = await data.json();
            setArticles(fetchedData.articles || []);
        }
        fetchingData();
    }, [pageNo,props.category]);

    return (
        <div className='container'>
            <div><h1>Top {props.category} Headlines here ...</h1></div>
            <div className='NewsArea'>
                {
                    articles.length > 0  ? articles.filter(articles => articles.title && articles.title!='').map((article) => {
                        return <NewsItem title={article.title || 'No title available'}
                            description={article.description || 'No Desctiption available'}
                            key={article.title}
                            url={article.url}
                            urlToImg={article.urlToImage ? article.urlToImage : '/NoImg.jpg'} />
                    })
                        : <p>Loading...</p>
                }
            </div>
            <div className='btn-FBArrows'>
                <GrLinkPrevious className={pageNo>=1 ? 'btn-FBArrow' : 'btn-FBArrow-disable'}  onClick={prePage} />
                <GrLinkNext className='btn-FBArrow' onClick={nextPage} />
            </div>
        </div>
    )
}

// NewsItem.defaultProps={title:'Evidence of Life on Mars? NASA’s Bold Strategy to Recover the Proof - SciTechDaily',
//     description:'NASA unveils a groundbreaking approach to bring Martian rock samples back to Earth by 2026, introducing competition between two strategic plans to enhance cost-efficiency and spark innovation. These Martian samples could revolutionize our understanding of Mar…'
// }
