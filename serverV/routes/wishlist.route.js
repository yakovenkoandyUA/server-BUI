import express  from "express";
import WishlistController from '../controller/wishlist.controller.js'

const WishlistRouter = express.Router()


WishlistRouter.get('/', WishlistController.getWishlist)

// MovieRouter.delet]e('/twits/:id', MovieController.removeTwits)


export default WishlistRouter



