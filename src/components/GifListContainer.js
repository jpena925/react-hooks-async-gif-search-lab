import React, { useState } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer() {
    const [search, setSearch] = useState('')
    const [gifs, setGifs] = useState([])


    let URL = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=IZUaICzHaVTVurORM7JJ0x5CFdQial3S&rating=g`
    function handleSubmitSearch(e, search){
        e.preventDefault()
        
        fetch(URL)
        .then(res => res.json())
        .then(api => setGifs((gifs) => api.data.slice(0,3)))
    }

    

    console.log(gifs)
  return (
    <div>
        <GifSearch onSubmitSearch={handleSubmitSearch} search={search} setSearch={setSearch}/>
        {gifs.length > 0 ? <GifList gifs={gifs}/> : null}
    </div>
  )
}

export default GifListContainer