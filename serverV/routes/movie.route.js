import express  from "express";
import MovieController from '../controller/movie.controller.js'

const MoviesRouter = express.Router()

MovieRouter.get('/homepage', MovieController.getHomepage)
MovieRouter.get('/', MovieController.getMovie)
MovieRouter.post('/', MovieController.addMovie)
MovieRouter.get('/:id', MovieController.deleteMovie)
MovieRouter.get('/trending', MovieController.getMovieTrending)
MovieRouter.get('/continue', MovieController.getMovieContinue)
// MovieRouter.delete('/twits/:id', MovieController.removeTwits)


export default MoviesRouter



