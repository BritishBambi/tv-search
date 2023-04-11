import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import GalleryImage from '../GalleryImage'

export default function ShowGallery() {
    const [shows, setShows] = useState([])

    useEffect(() => {
        async function displayShows() {
            const response = await fetch('https://api.tvmaze.com/shows')
            const data = await response.json()
            setShows(data)
        }
        displayShows()
    }, [])
    
  return (
    <div className='shows'>
        {shows.map(show => (
            <div key={show.id} className='show'>
                <Link to={`/shows/${show.id}`}>
                <GalleryImage show={show}/>
                <h3>{show.name}</h3>
                </Link>
        </div>
        ))}
    </div>
  )
}
