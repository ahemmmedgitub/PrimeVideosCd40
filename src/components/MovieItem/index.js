// Write your code here
import {Component} from 'react'
import Popup from 'reactjs-popup'

import './index.css'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

class MovieItem extends Component {
  state = {popupStatues: true}

  onClickedCloseBtn = () => {
    this.setState({popupStatues: false})
  }

  render() {
    const {eachMovie, actionMovieType} = this.props
    const {thumbnailUrl, videoUrl, categoryId} = eachMovie

    const {popupStatues} = this.state
    console.log(popupStatues)

    if (actionMovieType === categoryId) {
      return (
        <div className="movie-cart">
          <Popup
            modal={popupStatues}
            position="center center"
            trigger={
              <button type="button" className="img-btn">
                <img
                  src={thumbnailUrl}
                  alt="thumbnail"
                  className="thumbnail-img"
                />
              </button>
            }
          >
            <div className="video-player-container">
              <div className="btn-container">
                <button
                  type="button"
                  onClick={this.onClickedCloseBtn}
                  className="close-btn"
                  data-testid="closeButton"
                >
                  <IoMdClose />
                </button>
              </div>
              <ReactPlayer url={videoUrl} />
            </div>
          </Popup>
        </div>
      )
    }
    return ''
  }
}
export default MovieItem
