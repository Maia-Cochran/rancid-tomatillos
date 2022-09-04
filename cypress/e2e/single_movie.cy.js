describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/singlemovie/597398')
  })
  
  it('makes a call to the API to access data of single movie details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/597398', {
      movie: {
        id: 597398,
        title: "Away",
        poster_path: "https://image.tmdb.org/t/p/original//c59eplVELdwrUfGBUAZVin3HfaL.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//ccwPF5jN09S4Cz7u6qs3T2yKOpO.jpg",
        release_date: "2019-11-15",
        overview: "After suffering a plane crash on a mysterious island, a young man embarks on an epic journey through forests, deserts and mountains trying to escape the shadow of a huge dark spirit.",
        genres: [
        "Animation",
        "Adventure",
        "Fantasy"
        ],
        budget: 0,
        revenue: 0,
        runtime: 75,
        tagline: "",
        average_rating: 4.2
        }
    })
  })

  it('makes a call to the API to access the movie trailer video', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/597398/videos', {
      videos: [
      {
      id: 313, 
      movie_id: 597398,
      key: "cSI85iGoH_s",
      site: "YouTube",
      type: "Trailer"
    },
    {
      id: 312,
      movie_id: 597398,
      key: "334196246",
      site: "Vimeo",
      type: "Trailer"
    },
    {
      id: 314,
      movie_id: 597398,
      key: "J885t4B3PmI",
      site: "YouTube",
      type: "Trailer"
    },
    {
      id: 311,
      movie_id: 597398,
      key: "255250498",
      site: "Vimeo",
      type: "Trailer"
    }
    ]})
  })

  it('should be able to visit the page and find the X button to return to the main page', () => {
    cy.get('[class*=back-to-home-btn')
    .contains('X')
  })

  it('should return home when the X button is clicked', () => {
    cy.get('[class=back-to-home-btn')
    .click()
    .get('div[class="movie-container"]')
    .should('be.visible')
  })
  
  it('should find the SingleMovie with the single movie details', () =>{
    cy.get('[class*="movie-info"]')
    .should('be.visible')
    .get('[class*=movie-details-container]')
    .get('[class*=single-movie-mini-poster]')
    .should('be.visible')
    .get('[class*=single-movie-title]')
    .contains('Away')
    .get('[class*=single-movie-release-date]')
    .contains('Nov. 15, 2019')
    .get('[class*=genres]')
    .contains('Animation, Adventure, Fantasy')
    .get('[class*=runtime]')
    .contains('75 minutes')
    .get('[class*=single-movie-overview]')
    .contains('Overview: After suffering a plane crash on a mysterious island, a young man embarks on an epic journey through forests, deserts and mountains trying to escape the shadow of a huge dark spirit.')
    .get('[class*=single-movie-rating]')
    .contains('4.2')
    .get('[class*=single-movie-back-drop]')
    .should('be.visible')
  })

  // it('should find the trailer videos for single movie selected', () => {
  //   cy.get('[class*= "video-container"]')
  //   .
  // })
})