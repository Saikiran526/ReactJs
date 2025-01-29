import React, { useEffect, useState } from 'react'
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import ClipLoader from "react-spinners/ClipLoader";
import NewsItem from './NewsItem'
import './NewsArea.css'

export default function NewsArea(props) {

    const [articles, setArticles] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [myUrl,setMyUrl]=useState('');


    const nextPage = () => {
        setPageNo(pageNo + 1)
    }

    const prePage = () => {
        setPageNo(pageNo - 1)
    }

    useEffect(() => {
        const fetchingData = async () => {
            setMyUrl(props.keyWord && props.keyWord.trim()!=='' ? `https://newsapi.org/v2/everything?q="${props.keyWord}"&apiKey=ee4270806ec74c82a014d5c4c41e0ff5`
            : `https://newsapi.org/v2/top-headlines?country=${props.countryName}&category=${props.category}&apiKey=ee4270806ec74c82a014d5c4c41e0ff5&size=6&page=${pageNo}`); 
            let data = await fetch(myUrl);
            var fetchedData = await data.json(myUrl);
            setArticles(fetchedData.articles || []);
        }
        fetchingData();
    }, [pageNo, props.category,props.countryName,props.keyWord,myUrl]);

    return (
        <div className={props.darkMode ? 'container-darkmode':'container'}>
            <div><h1 style={{margin:'0px'}}>Top  Headlines on - {!props.keyWord ?props.category:props.keyWord}</h1></div>
            <div className='NewsArea'>
                {
                    articles.length > 0 ? articles.filter(articles => articles.title && articles.title !== '[Removed]').map((article) => {
                        return <NewsItem darkMode={props.darkMode}
                            title={article.title || 'No title available'}
                            description={article.description || 'No Desctiption available'}
                            key={article.title}
                            url={article.url}
                            urlToImg={article.urlToImage ? article.urlToImage : '/NoImg.jpg'} />
                    })
                        : <div className='Spinner'>
                        <ClipLoader
                            color='aqua'
                            loading={true}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                        </div>
                }
            </div>
            <div className='btn-FBArrows'>
                <GrLinkPrevious className={pageNo > 1 ? 'btn-FBArrow' : 'btn-FBArrow-disable'} onClick={prePage} />
                <GrLinkNext className={pageNo<=2 ? 'btn-FBArrow' : 'btn-FBArrow-disable'} onClick={nextPage} />
            </div>
        </div>
    )
}

// NewsItem.defaultProps={title:'Evidence of Life on Mars? NASA’s Bold Strategy to Recover the Proof - SciTechDaily',
//     description:'NASA unveils a groundbreaking approach to bring Martian rock samples back to Earth by 2026, introducing competition between two strategic plans to enhance cost-efficiency and spark innovation. These Martian samples could revolutionize our understanding of Mar…'
// }
// 
// 