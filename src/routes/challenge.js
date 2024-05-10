const express = require('express');
const ChallengeController = require("../controller/challengeController");
const router = express.Router();

router
    .get('/', ChallengeController.get)
    .post('/', ChallengeController.post)
    .post('/begin', ChallengeController.begin)
    .post('/end', ChallengeController.end)

module.exports = router;