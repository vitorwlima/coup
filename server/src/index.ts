import 'dotenv/config'
import express from 'express'
import http from 'http'

import { runSocket } from './socket'

const app = express()
const server = http.createServer(app)

if (process.env.NODE_ENV !== 'test') {
  server.listen(process.env.PORT, () => {
    console.info(`SERVER IS RUNNING ON PORT ${process.env.PORT}`)
  })
}

const { io } = runSocket(server)

export { io }
