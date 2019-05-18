import { Response, Request, NextFunction } from 'express'

import { Users } from '../../DB'

const auth = {
    signin: async (req: Request, res: Response, next: NextFunction) => {
        let result = await Users.find()
        return res.status(200).json(result)
    },
    signup: async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export { auth }