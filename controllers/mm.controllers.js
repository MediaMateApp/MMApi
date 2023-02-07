const db = require('../db/db')

const dummySelect = async (req, res) => {

    db.query('SELECT * FROM mm_user', (error, result) => {
        if(error) throw error;
        res.send(result)


        console.log(result)
    })

} 



module.exports = {
    dummySelect
}