import React, { Component } from "react";
import "./SingleMovie.css";
import dayjs from "dayjs";
import { NavLink } from "react-router-dom";
import { getAllData } from "../../api-calls";

let movie;
let videos;
let index = 0;

class SingleMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      video: [],
    };
  }

  componentDidMount = () => {
    getAllData(`/movies/${this.props.id}`).then((data) => {
      this.setState({ movie: [data[0].movie] });
      movie = data[0].movie;
    });
    getAllData(`/movies/${this.props.id}/videos`).then((data) => {
      this.setState({ video: data[0].videos[0] });
      videos = data[0].videos;
    });
  };

  nextVideo = () => {
    if (index < videos.length - 1) {
      index++;
      this.setState({ video: videos[index] });
    }
  };

  previousVideo = () => {
    if (index > 0) {
      index--;
      this.setState({ video: videos[index] });
    }
  };

  render = () => {
    if (movie === undefined || videos === undefined) {
      return <p className="loading">Loading...</p>;
    } else {
      return (
        <section className="movie-info">
          <NavLink to="/">
            <button className="back-to-home-btn" alt="homeBtn">
              &#128473;
            </button>
          </NavLink>
          <section className="movie-details-container">
            <div className="movie-details">
              <div className="content-container">
                <img
                  className="single-movie-mini-poster"
                  id={movie.id}
                  src={movie.poster_path}
                  alt="poster"
                />
                <div className="content">
                  <h2 className="single-movie-title">{movie.title}</h2>
                  <p className="single-movie-release-date">
                    <b>Release Date:</b>{" "}
                    {dayjs(movie.release_date).format("MMM. D, YYYY")}
                  </p>
                  <p className="genres">
                    <b>Related Genres:</b> {movie.genres.join(", ")}
                  </p>
                  <p className="runtime">
                    <b>Runtime:</b> {movie.runtime} minutes
                  </p>
                  {movie.budget > 0 && (
                    <p className="budget">
                      <b>Budget:</b> ${movie.budget.toLocaleString("en-US")}
                    </p>
                  )}
                  {movie.revenue > 0 && (
                    <p className="revenue">
                      <b>Box Office Revenue:</b> $
                      {movie.revenue.toLocaleString("en-US")}
                    </p>
                  )}
                </div>
              </div>
              <div className="overview">
                <p className="single-movie-overview">
                  <b>Overview:</b> {movie.overview}
                </p>
              </div>
            </div>
          </section>
          <section className="movie-video-trailer-container">
            <div className="single-movie-back-drop">
            <img
              id={movie.id}
              src={movie.backdrop_path}
              alt="poster"
            />
            </div>
            <p className="single-movie-rating">
              <i>
                <b>Rating: </b>
                {movie.average_rating.toFixed(1)}
              </i>
            </p>
            {movie.tagline.length > 0 && (
              <p className="tagline">
                <i>"{movie.tagline}"</i>
              </p>
            )}
           
            {videos.length > 0 && (
              <div className="video-box">
                <div className="previous-btn-container">
                  {videos.length > 1 && index > 0 && (
                    <button
                      className="previous-video"
                      onClick={this.previousVideo}
                    >
                      Previous
                    </button>
                  )}
                </div>
                <iframe
                  className="movie-trailer"
                  src={`https://www.youtube.com/embed/${this.state.video.key}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
                <div className="next-btn-container">
                  {videos.length > 1 && index < videos.length - 1 && (
                    <button className="next-video" onClick={this.nextVideo}>
                      Next
                    </button>
                  )}
                </div>
              </div>
            )}
          </section>
        </section>
      );
    }
  };
}

export default SingleMovie;
