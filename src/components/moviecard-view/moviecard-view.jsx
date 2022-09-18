import React from 'react';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return <MovieCard key={movie._id} movie={movie} 
    onMovieClick={newSelectedMovie => { this.setState({ selectedMovie: newSelectedMovie }); }} />;
  }
}