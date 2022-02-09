import React from 'react'

function GifList({gifs}) {
    

    const gifsMap = gifs.map(gif => <li><img src={gif.images.original.url} /></li>)

  return (
    <ul>{gifsMap}</ul>
  )
}

export default GifList