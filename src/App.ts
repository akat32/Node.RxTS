import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'

import { fromEvent } from 'rxjs'

const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));








export default app