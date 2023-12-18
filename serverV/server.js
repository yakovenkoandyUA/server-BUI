import express, { json, urlencoded } from 'express'
import mongoose from 'mongoose'
import config from './config.js'
import MoviesRouter from './routes/movie.route.js'
import WishlistRouter from './routes/wishlist.route.js'
import authRoutes from './routes/auth.route.js'

const app = express()

app.use(json())
app.use(urlencoded({ extended: false }))


/* PORT */
// 8000 is the default port, so if you don't specify a port
// 8080 will be used instead.
// 5000 is the port used by the ExpressJS web server.
/* PORT */
app.use('/api/auth', authRoutes)
app.use('/api/movies', MoviesRouter)
app.use('/api/wishlist', WishlistRouter)


mongoose.set('strictQuery', false);
mongoose
	.connect(config.MONGO_URL || '', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('MongoDb connected'))
	.catch(err => console.error(err))


app.listen(config.PORT, () => {
	console.log(`Port is start = ${config.PORT}`)
})


