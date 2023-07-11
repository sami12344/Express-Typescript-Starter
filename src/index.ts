import express, { Request, Response } from 'express'

// Create Express app
const app = express()

// Define a route handler for the root path
app.get('/', (req: Request, res: Response):void => {
  res.send('Hello, World!')
})

// Start the server
app.listen(3000, ():void => {
  console.log('Server is listening on port 3000')
})
