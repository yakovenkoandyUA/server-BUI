import express from 'express'
import MovieController from '../controller/movie.controller.js'

const MoviesRouter = express.Router()

MoviesRouter.get('/homepage', MovieController.getHomepage)
MoviesRouter.get('/', MovieController.getMovie)
MoviesRouter.post('/', MovieController.addMovie)
MoviesRouter.delete('/:id', MovieController.deleteMovie)
MoviesRouter.patch('/:id', MovieController.likeMovie)
MoviesRouter.get('/trending', MovieController.getMovieTrending)
MoviesRouter.get('/continue', MovieController.getMovieContinue)
// MovieRouter.delet]e('/twits/:id', MovieController.removeTwits)

export default MoviesRouter
