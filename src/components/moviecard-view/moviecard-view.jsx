import React from 'react';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
  }
}
