const express = require('express')
const router = express.Router()


const forms_controller = require('../Controllers/Forms')

router.post('/createForm', forms_controller.create_form)
router.get('/:id', forms_controller.get_form)
router.post('/addAnswer', forms_controller.add_answer)
router.get('/getForms/:creator_id', forms_controller.get_forms)

module.exports = router