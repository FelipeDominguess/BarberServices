import "reflect-metadata"
import express from "express"
// import { userRoutes } from "./routers/users.routes"
// import { handleAppError } from "./middlewares/haldleAppError.middleware"
// import { sessionRoutes } from "./routers/login.routes"
import cors from "cors"

const app = express()

app.use(cors());

app.use(express.json())



export default app