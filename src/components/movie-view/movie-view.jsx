import React from 'react';

export class MovieView extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: [
  {
    _id: 1,
    Title: 'Silence of the Lambs',
    Description: 'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
    Genre: {
      Name: 'Thriller',
      Description: 'Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.'
    },
    Director: {
      Name: 'Jonathan Demme',
      Bio: 'Robert Jonathan Demme was an American director, producer, and screenwriter.',
      Birth: '1944',
      Death: '2017'
    },
    ImagePath: 'https://www.imdb.com/title/tt0102926/mediaviewer/rm803658241/?ref_=tt_md_3',
    Featured: true
  },
  {
    _id: 2,
    Title: 'Lord of the Ring',
    Description: ' A  fellowship of hobbits , elves,dwarfs and men is formed to destroy the ring by casting it into the volcanic firew of the crack of doom .',
    Genre: {
      Name: 'High fantasy',
      Description: 'high fantasy is set in an alternative , fictional world , rather than real world.'
    },
    Director: {
      Name: 'Peter Jackson',
      Bio: '.He is best know as the director , writer and producer of Lord of the Rings and the Hobbit trilogy . both of which are adapted from the novels .',
      Birth: '1961',
      Death: 'NULL'
    },
    ImagePath: 'https://www.imdb.com/title/tt0120737/mediaviewer/rm3592958976/?ref_=tt_ov_i',
    Featured: true
  },
  {
    _id: 3,
    Title: 'Coco',
    Description: 'The story follows a 12-zears-old boy named Miguel who is accidentally transported to the Land of Dead.',
    Genre: {
      Name: 'Animated',
      Description: 'Animation is a method in which pictures are manipulated to appear as moving images.'
    },
    Director: {
      Name: 'Lee Unkrich',
      Bio: ' He is an American retired film director , film editor , screenwriter , and animator.',
      Birth: '1967',
      Death: 'NULL'
    },
    ImagePath: 'https://www.imdb.com/title/tt2380307/mediaviewer/rm585455872/?ref_=tt_ov_i',
    Featured: true
  },
  {
    _id: 4,
    Title: 'Braveheart',
    Description: 'Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.',
    Genre: {
      Name: 'Drama',
      Description: 'Drama is a genre of narrative fiction intended to be more serious than humorous in tune.'
    },
    Director: {
      Name: 'Mel Gibson',
      Bio: 'He was the sixth of 11 childeren of Hutton and Ann Gibson, Roman Catholics of Irish descent.',
      Birth: '1956',
      Death: 'NULL'
    },
    ImagePath: 'https://www.imdb.com/title/tt0112573/mediaviewer/rm3170786816/?ref_=tt_ov_i',
    Featured: true
  },
  
  {
    _id: 5,
    Title: 'Hangover',
    Description: 'The story was about three friends who lose the groom at his Las Vegas bachelor party.',
    Genre: {
      Name: 'Comedy',
      Description: 'Comedy is a genre of film in which the main emphasis is on humor.'
    },
    Director: {
      Name: 'Todd Phillips',
      Bio: 'He is an American filmmaker and actor .',
      Birth: '1970',
      Death: 'NULL'
    },
     ImagePath: 'https://www.imdb.com/title/tt1119646/mediaviewer/rm401570304/?ref_=tt_ov_i',
    Featured: true
},
{
    _id: 6,
    Title: 'Batman The Dark Knight',
    Description: '',
    Genre: {
      Name: 'Action',
      Description: 'It is  a film genre in which the protagonist is thrust into a series ofd events that typically involve violence and physical feats.'
    },
    Director: {
      Name: 'Christopher Nolan',
      Bio: 'British film director and writer and his family spent time in both Chicago and London.',
      Birth: '1970',
      Death: 'NULL'
    },
    ImagePath: 'https://upload.wikimedia.org/wikipedia/en/e/e9/Batman_The_Dark_Knight_Returns_%28film%29.jpg',
    Featured: true
},

  {
    _id: 7,
    Title: 'The Shawshank Redemption',
    Description: '',
    Genre: {
      Name: 'Drama',
      Description: 'It is a genre of narrative fiction intended to be more serious than humorous in tune.'
    },
    Director: {
      Name: 'Frank Darabont',
      Bio: 'He is a Hungarian-American director, producer and screenwriter.',
      Birth: '1959',
      Death: 'NULL'
    },
    ImagePath: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm10105600/?ref_=tt_ov_i',
    Featured: true
},
{
    _id: 8,
    Title: 'The Hobbit',
    Description: '',
    Genre: {
      Name: 'High fantasy',
      Description: 'It is set in an alternative , fictional world , rather than real world.'
    },
    Director: {
      Name: 'Peter Jackson',
      Bio: 'Newzealand film director , screenwriter and producer.',
      Birth: '1961',
      Death: 'NULL'
    },
    ImagePath: 'https://www.imdb.com/title/tt1170358/mediaviewer/rm2431898112/?ref_=tt_ov_i',
    Featured: true
  },
  {
    _id: 9,
    Title: 'Forrest Gump',
    Description: 'Its story about an innocent and kind-hearted Alabama boy , has been dealing with other peoples unkindness nearly all his life.',
    Genre: {
      Name: 'Drama',
      Description: 'It is a genre of narrative fiction intended to be more serious than humorous in tone.'
    },
    Director: {
      Name: 'Robert Zemeckis',
      Bio: 'He is an American director and screenwriter.',
      Birth: '1952',
      Death: 'NULL'
    },
    ImagePath: 'https://www.imdb.com/title/tt0109830/mediaviewer/rm1954748672/?ref_=tt_ov_i',
    Featured: true
  },
  {
    _id: 10,
    Title: 'Midway',
    Description: 'It tells the story of the leader and soldiers who used thier instincts,fortitude and bravery to overcome the odds.',
    Genre: {
      Name: 'Comedy',
      Description: 'It is a genre of film  in which the main emphasis is on humor.'
    },
    Director: {
      Name: 'Todd Philltips',
      BIO: 'He is an American  fILmmaker and actor.',
      Birth: '1970',
      Death: 'NULL'
    },
    ImagePath: 'https://upload.wikimedia.org/wikipedia/en/5/55/Midway_Movie_HD_Poster.jpeg',
    Featured: true
  }
]
    }
}

setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movie } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <button>Back</button>

      </div>
    );
  }
}