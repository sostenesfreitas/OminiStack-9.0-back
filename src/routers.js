const express = require('express')
const multer = require('multer')

const SessionController = require('./Controllers/SessionController')
const SpotController = require('./Controllers/SpotController')
const DashBoardController = require('./Controllers/DashBoardController')
const BookingController = require('./Controllers/BookingController')

const uploadConfig = require('./Config/upload')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/spots', upload.single('thumbnail'), SpotController.store)
routes.post('/spots/:spot_id/bookings', BookingController.store)
routes.post('/sessions', SessionController.store)

routes.get('/spots', SpotController.index)
routes.get('/dashboard', DashBoardController.show)

module.exports = routes
