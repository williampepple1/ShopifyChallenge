import React from 'react';
import NominatedMovies from '../components/NominatedMovies';
import gif from '../img/movies.gif'


const NominatedMoviesPage = (props) => {

  return(
    <div>
      	<section className="search-results">
					<h3 className="section-title">Your Nominations ({props.nominations.length})</h3>

          {props.nominations.length===0?<div><img src={gif} alt ="movie gif" className="movies-gif"/></div>:
          <NominatedMovies
          movies={props.nominations}
          handleNominateClick={props.removeNomination}
           />
          }

					
				</section>
    </div>
  );

}

export default NominatedMoviesPage;