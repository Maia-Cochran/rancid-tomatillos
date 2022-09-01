describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/modal/597398')
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

  it('should be able to visit the page and find the header', () => {
    cy.get('h1')
    .contains('Rancid Tomatillos')
  })

  it('should be able to find the logo', () => {
    cy.get('img[class="logo-header"]')
    .should('be.visible')
  })
  
  it('should return home when the X button is clicked', () => {
    cy.get('button')
    .click()
    .get('div[class="movie-container"]')
    .should('be.visible')
  })
  
  it('should find the Modal with the single movie details', () =>{
    cy.get('section[class="movie-info"]')
    .should('be.visible')
    .children()
    .should('be.visible')
    .get('[class*=movie-details-container]')
    .get('[class*=modal-mini-poster]')
    .should('be.visible')
    .get('[class*=modal-title]')
    .contains('Away')
    .get('[class*=modal-release-date]')
    .contains('Nov. 15, 2019')
    .get('[class*=genres]')
    .contains('Animation, Adventure, Fantasy')
    .get('[class*=runtime]')
    .contains('75 minutes')
    .get('[class*=modal-overview]')
    .contains('Overview: After suffering a plane crash on a mysterious island, a young man embarks on an epic journey through forests, deserts and mountains trying to escape the shadow of a huge dark spirit.')
    .get('[class*=modal-rating]')
    .contains('4.2')
    .get('[class*=modal-back-drop]')
    .should('be.visible')
  })
})