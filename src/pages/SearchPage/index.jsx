import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import GalleryImage from '../../components/GalleryImage'

export default function Search() {
  const [shows, setShows] = useState([])
  const [userInput, setUserInput] = useState("")

  const handleInput = e => {
    setUserInput(e.target.value)
  }
  
  const displayShows = async () => {
        console.log("in useEffect" + userInput)
          const response = await fetch(`https://api.tvmaze.com/search/shows?q=${userInput}`)
          const data = await response.json()
          setShows(data.map(show => show.show))
      }
      
    return (
        <div className='shows'>
            <h1>Search</h1>
            <form>
              <input type="text" onChange={handleInput}/>
              {console.log(userInput)}
              <button id='search-btn' type='submit' onSubmit={displayShows}>Search</button>
            </form>
            {shows.map(show => 
                <div key={show.id} className='show'>
                  <h3>{show.name}</h3>
            </div>
            )
            }
        </div>
      )
}
