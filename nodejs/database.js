const mongoose = require('mongoose')

function connection () {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  mongoose.connect(process.env.MONGODB || 'mongodb://localhost:27017/haro', options).then(
    () => { console.log('Mongoose connected') },
    (err) => { console.log(err) },
  )
}

module.exports = {
  connection,
}
