import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom';


import { Container, Col, Row } from 'react-bootstrap';
import LoginView  from '../login-view/login-view';
import RegistrationView from '../registration-view/registration-view';
import {MovieCard} from '../moviecard-view/moviecard-view';
import MovieView from '../movie-view/movie-view';
import DirectorView from "../director-view/director-view";
import GenreView from "../genre-view/genre-view";
import ProfileView from '../profile-view/profile-view';

import './main-view.scss';

export class MainView extends React.Component {
setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

 render() {
    const { movies, selectedMovie } = this.state;

    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }

};


