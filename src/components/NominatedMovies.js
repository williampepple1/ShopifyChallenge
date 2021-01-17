import React from 'react';

const NominatedMovies = (props) => {
	
	return (
		<div>
			{props.movies.map((movie,index) => (
				<div className="movies">
					<div className="movies-poster-crop">
					<img 
						src = {movie.Poster} 
						alt={movie.Title} 
						className="movies-poster"
						/>
					</div>
					<div className="movies-desc">
						<h4 class="movies-title"> 
							{movie.Title} 
						</h4>
						<p>
							{movie.Year}
						</p>
						<button
						className = "btn-remove"
						onClick={() => props.handleNominateClick(movie)}
						>Remove</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default NominatedMovies;
