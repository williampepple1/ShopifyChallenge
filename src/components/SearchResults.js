import React from 'react';

const SearchResults = (props) => {
	const nominations = props.nominations;

	function NominateButton (props){
		let isInNominations= nominations.filter(nomination => nomination.imdbID===props.movie.imdbID).length!==0;

		if(!isInNominations){
			return(
				<button
					className="btn-nominate"
					onClick={() => props.handleNominateClick(props.movie)}
				>Nominate</button>
			)
		}else{
			return (
				<button disabled
				className="btn-nominate-disabled"
				>Nominated</button>
			)
		}
	}

	return (
		<>
			{props.movies.map((movie,index) => (
				<div className="movies">
					<div className="movies-poster-crop">
						<img 
						src = {movie.Poster} 
						alt={movie.Title} 
						id={`${movie.imdbID}img`}
						className="movies-poster" 
						onError={console.log('not this one')}
						/>
					</div>
					<div className="movies-desc">
						<h4 class="movies-title"> 
							{movie.Title} 
						</h4>
						<p>
							{movie.Year}
						</p>
						<NominateButton nominations={nominations} movie={movie} handleNominateClick={props.handleNominateClick}/>
					</div>
				</div>
			))}
		</>
	);
};

export default SearchResults;
