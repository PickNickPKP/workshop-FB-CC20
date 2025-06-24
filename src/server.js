import dotenv from 'dotenv'
import app from './app.js'

dotenv.config()
// console.log(process.env.PORT)

// console.log(app)

const PORT = process.env.PORT || 8800

app.listen(PORT ,()=>console.log('Server on :', PORT))
