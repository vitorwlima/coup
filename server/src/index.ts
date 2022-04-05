import 'dotenv/config'
import express from 'express'
import http from 'http'
import { runSocket } from './socket'

const app = express()
const server = http.createServer(app)

server.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`)
})

app.get('/', (req, res) => {
  res.send({ message: 'Hello world' })
})

runSocket(server)
