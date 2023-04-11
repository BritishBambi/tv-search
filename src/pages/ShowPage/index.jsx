import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import GalleryImage from '../../components/GalleryImage'

function Show() {
  const [show, setShow] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetchShow();
  }, [])

  const fetchShow = async () => {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const data = await response.json()
    setShow(data)
  }

 if (!show.id) {
    return <div>Loading...</div>
  } else{
    return (
      <>
        <h1>{show.name}</h1>
        <h2>Rating: {show.rating.average}</h2>
        <GalleryImage show={show} />
        <ul>
          {show.genres.map((genre) => <li>{genre}</li>)}
        </ul>
        <div
      dangerouslySetInnerHTML={{__html: show.summary}}
    />
      </>
    )
  }
}



export default Show;
