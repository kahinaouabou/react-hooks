import React from 'react'

export default function MovieCard(props) {
  return (
                <div className='image-container d-flex justify-content-start m-3 movie-card'>
					<img src={props.movie.posterURL} alt='movie'></img>
                    <p className='title'>{props.movie.title}</p>
				</div>
  )
}
