const express = require('express')
const router = express.Router()


const forms_controller = require('../Controllers/Forms')

router.post('/createForm', forms_controller.create_form)
router.get('/:id', forms_controller.get_form)

module.exports = router