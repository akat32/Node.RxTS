import { Response, Request, NextFunction } from 'express'

const auth = {
    signin: async (req: Request, res: Response, next: NextFunction) => {
        res.send('Hello, World!')
    }
}

export { auth }