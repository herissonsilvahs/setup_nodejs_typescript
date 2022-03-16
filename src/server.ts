import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config({
  debug: !process.env.PRODUCTION
})

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => console.log(`Server up at port: ${PORT}`))
