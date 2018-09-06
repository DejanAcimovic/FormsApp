const express = require('express')
const router = express.Router()


const forms_controller = require('../Controllers/Forms')
const verify = require('../Controllers/verifyToken')

router.post('/createForm', verify.verify_token,forms_controller.create_form)
router.get('/:id', forms_controller.get_form)
router.post('/addAnswer', forms_controller.add_answer)
router.get('/getForms/:creator_id', verify.verify_token,forms_controller.get_forms)
router.get('/result/:id', verify.verify_token, forms_controller.get_individual_results)

module.exports = router