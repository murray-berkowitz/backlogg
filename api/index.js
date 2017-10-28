const router = require('express').Router()

router.use('/game', require('./singlegame'))
router.use('/games', require('./allgames'))

module.exports = router
