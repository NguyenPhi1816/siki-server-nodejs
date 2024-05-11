import express, { Request, Response } from 'express'
const router = express.Router()

router.route('/').get((req: Request, res: Response) =>
  res.status(200).json({
    data: [
      {
        id: 1,
        image: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/d6/ea/f2/e0ec419d9908b4f0e25a5d62393b97d8.jpg.webp'
      },
      {
        id: 2,
        image: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/8b/76/a1/b161a72d2b4e01254e6d3725707a5efb.jpg.webp'
      },
      {
        id: 3,
        image: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/f3/63/8d/592e45412d02ecddde985912e10b3fc0.jpg.webp'
      },
      {
        id: 4,
        image: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/23/f7/27/2f0f4fb7f1751a00317c312f14c68622.jpg.webp'
      },
      {
        id: 5,
        image: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/11/b9/7b/e619b948bf6435ff61fe074e1b076099.jpg.webp'
      },
      {
        id: 6,
        image: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/25/13/98/19445ff303aa2d2207786f474d50e7d9.jpg.webp'
      }
    ]
  })
)

export default router
