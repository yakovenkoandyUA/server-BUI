import path from 'path'
import MovieModel from '../models/movie.model.js'
import e from 'express'

const __dirname = path.resolve()

const getHomepage = (req, res) => {
	res.sendFile(path.join(__dirname + '../../client/index.html'))
}

const getMovie = async (request, response) => {
	const allList = await MovieModel.find()

	if (allList) {
		response.send(allList)
	} else {
		response.status(404)
		response.send({ message: 'movies is not created' })
	}
}

const addMovie = async (request, response) => {
	const newTwit = await MovieModel.create({ ...request.body })

	return response.send({ newTwit, message: 'movies added' })
}

const deleteMovie = (request, response) => {
	const id = request.params.id

	const deletedTwit = MovieModel.findByIdAndDelete(id)

	response.send({ message: 'movies deleted', deletedTwit })
}

const getMovieTrending = async (request, response) => {
	const key = 'trending'
	const listTrending = await MovieModel.find({ [key]: true })
	// const filterTrending = listTrending.filter(i => i.trending)
	if (listTrending) {
		response.send(listTrending)
	} else {
		response.status(404)
		response.send({ message: 'movies is not created' })
	}
}

const getMovieContinue = (request, response) => {
	const key = 'continue'
	const listContinue = MovieModel.find({ [key]: true })
	// const filterContinue = listContinue.filter(i => i.continue)
	if (listContinue) {
		response.send(listContinue)
	} else {
		response.status(404)
		response.send({ message: 'movies is not created' })
	}
}

const likeMovie = async (req, res) => {
	const itemId = req.params.id
	const updatedData = req.body
	
	try {
		const updatedItem = await MovieModel.findByIdAndUpdate(itemId, updatedData)
		res.json({ message: 'Item updated successfully'})
	} catch (error) {
		res.status(500).json({ message: 'Error updating item in MongoDB' })
	}
}

const MovieController = {
	getHomepage,
	getMovie,
	addMovie,
	deleteMovie,
	getMovieTrending,
	getMovieContinue,
	likeMovie,
}

export default MovieController
