import express, { Application, Router, Request, Response } from "express"
import serverless from "serverless-http"
import { projects } from "./fakeData/fakeProjects"
import { user } from "./fakeData/fakeUser"

const
   swaggerUi = require('swagger-ui-express'),
   swaggerFile = require('./swagger_output.json')


const
   app: Application = express(),
   router = Router()

require("./swagger")

app.use(express.json())
// app.use(require("cors")())
app.use(express.urlencoded({ extended: false }))


router.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

router.all("/test", (req: Request, res: Response) => {
   res.send("success")
})

router.get("/user", (req: Request, res: Response) => res.send(user))

router.get("/all-projects", (req: Request, res: Response) => res.send(projects))

router.get("/project/:id", (req: Request, res: Response) => {
   const { id } = req.params
   console.log("get project by id ", id);
   const found = projects.find((p: any) => p._id === id)
   res.send(found)
})

router.post("/project", (req: Request, res: Response) => {
   const { body } = req
   console.log("add new project", body);
   body._id = `${Math.random()}`
   projects.push(body)
   res.send(projects)
})

router.put("/project/:id", (req: Request, res: Response) => {
   const { body, params: { id } } = req
   console.log("update project by id", id, body);
   const found = projects.find((p: any) => p._id === id)

   if (!found)
      return res.status(404).send("not Found")

   Object.keys(body).forEach((key: any) => {
      found[key] = body[key]
   })

   res.send(found)
})


app.use("/.netlify/functions/api", router)

module.exports.handler = serverless(app)



