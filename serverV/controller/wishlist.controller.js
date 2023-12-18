import MovieModel from '../models/movie.model.js'


const getWishlist = async (request, response) => {
	const allList = await MovieModel.find({ ['like']: true })

	if (allList) {
		response.send(allList)
	} else {
		response.status(404)
		response.send({ message: 'movies is not created' })
	}
}

const WishlistController = {
	getWishlist,
}

export default WishlistController
