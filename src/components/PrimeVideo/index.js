// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const actionMovieType = 'ACTION'
const comedyMovies = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  return (
    <div className="prime-video-bg-contaner">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-img"
      />
      <div className="slider-bg-container">
        <h1 className="action-heading">Action Movies</h1>
        <div className="action-slider-container">
          <Slider {...settings}>
            {moviesList.map(eachMovie => (
              <MovieItem
                eachMovie={eachMovie}
                key={eachMovie.id}
                actionMovieType={actionMovieType}
              />
            ))}
          </Slider>
        </div>
        <h1 className="action-heading">Comedy Movies</h1>

        <div className="action-slider-container">
          <Slider {...settings}>
            {moviesList.map(eachMovie => (
              <MovieItem
                eachMovie={eachMovie}
                key={eachMovie.id}
                actionMovieType={comedyMovies}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
