Seperate your routes from the main Server location here. An example is given below.
The route will follow the naming convention of the file. I.E - localhost:8080/myroute/find-all

const express = require('express);
const router = express.Router();

require('../models/Users');
const Users = mongoose.model('users');

router.get('/find-all', (req, res) => {
    Users.find()
        .then(user => {
            res.send(user)
        })
})

// Export the router file to be used else where in the application.
module.exports = router;