import 'reflect-metadata'
import express, { Application } from 'express'
import cors from "cors"
import { userRoutes } from './routers/user.routers';

const app: Application = express()

app.use(cors());

app.use(express.json())

app.use("/users", userRoutes)

export default app