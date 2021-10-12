const firebase = require('./firebase_initialize')

module.exports = {

    saveData: function(req, callback){
       
        let username = req.username;

        firebase.database().ref('users/'+username).set({

            name: req.username,
            email: req.email
        })
        callback(null, {'statuscode':200, 'message':'has been sent successfully'})
    }
}