import express, { Request, Response } from 'express'
const router = express.Router()

router.route('/').get((req: Request, res: Response) =>
  res.status(200).json([
    {
      id: 0,
      image: 'https://salt.tikicdn.com/cache/w100/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png.webp',
      name: 'For you',
      products: [
        {
          id: 1,
          slug: 'iphone-15-pro-max-12345',
          image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
          name: 'Iphone 15 Pro Max',
          averageRating: 4,
          price: 29650000
        },
        {
          id: 11,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-gold-thumbnew-600x600.jpg',
          name: 'Iphone 15 Pro Max',
          averageRating: 4,
          price: 29990000
        },
        {
          id: 12,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg',
          name: 'Iphone 15 Pro Max',
          averageRating: 4,
          price: 29890000
        },
        {
          id: 2,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg',
          name: 'Iphone 15 Pro',
          averageRating: 5,
          price: 26990000
        },
        {
          id: 3,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg',
          name: 'Iphone 15 Plus',
          averageRating: 4,
          price: 23990000
        },
        {
          id: 4,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg',
          name: 'Iphone 15',
          averageRating: 4,
          price: 20690000
        },
        {
          id: 5,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-yellow-thumb-600x600.png',
          name: 'Samsung Galaxy S24 5G',
          averageRating: 4,
          price: 20690000
        },
        {
          id: 6,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/307172/samsung-galaxy-s24-plus-violet-thumb-600x600.jpg',
          name: 'Samsung Galaxy S24+ 5G',
          averageRating: 4,
          price: 23490000
        },
        {
          id: 7,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-thumb-600x600.jpg',
          name: 'Samsung Galaxy S24 Ultra 5G',
          averageRating: 3,
          price: 29690000
        },
        {
          id: 8,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/322526/xiaomi-14-white-thumbnew-600x600.jpg',
          name: 'Xiaomi 14 5G',
          averageRating: 5,
          price: 19990000
        },
        {
          id: 9,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/314206/xiaomi-redmi-note-13-green-thumb-600x600.jpg',
          name: 'Xiaomi Redmi Note 13 Pro',
          averageRating: 4,
          price: 6790000
        },
        {
          id: 10,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/314209/oppo-reno-11-xanh-thumb-600x600.jpg',
          name: 'OPPO Reno11 5G',
          averageRating: 4,
          price: 10690000
        }
      ]
    },
    {
      id: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      name: 'Apple',
      products: [
        {
          id: 1,
          slug: 'iphone-15-pro-max-12345',
          image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
          name: 'Iphone 15 Pro Max',
          averageRating: 4,
          price: 29650000
        },
        {
          id: 11,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-gold-thumbnew-600x600.jpg',
          name: 'Iphone 15 Pro Max',
          averageRating: 4,
          price: 29990000
        },
        {
          id: 12,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg',
          name: 'Iphone 15 Pro Max',
          averageRating: 4,
          price: 29890000
        },
        {
          id: 2,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg',
          name: 'Iphone 15 Pro',
          averageRating: 5,
          price: 26990000
        },
        {
          id: 3,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg',
          name: 'Iphone 15 Plus',
          averageRating: 4,
          price: 23990000
        },
        {
          id: 4,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg',
          name: 'Iphone 15',
          averageRating: 4,
          price: 20690000
        }
      ]
    },
    {
      id: 2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png',
      name: 'Samsung',
      products: [
        {
          id: 5,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-yellow-thumb-600x600.png',
          name: 'Samsung Galaxy S24 5G',
          averageRating: 4,
          price: 20690000
        },
        {
          id: 6,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/307172/samsung-galaxy-s24-plus-violet-thumb-600x600.jpg',
          name: 'Samsung Galaxy S24+ 5G',
          averageRating: 4,
          price: 23490000
        },
        {
          id: 7,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-thumb-600x600.jpg',
          name: 'Samsung Galaxy S24 Ultra 5G',
          averageRating: 3,
          price: 29690000
        }
      ]
    },
    {
      id: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/2048px-Xiaomi_logo.svg.png',
      name: 'Xiaomi',
      products: [
        {
          id: 8,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/322526/xiaomi-14-white-thumbnew-600x600.jpg',
          name: 'Xiaomi 14 5G',
          averageRating: 5,
          price: 19990000
        },
        {
          id: 9,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/314206/xiaomi-redmi-note-13-green-thumb-600x600.jpg',
          name: 'Xiaomi Redmi Note 13 Pro',
          averageRating: 4,
          price: 6790000
        }
      ]
    },
    {
      id: 4,
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/OPPO_LOGO_2019.png',
      name: 'OPPO',
      products: [
        {
          id: 10,
          slug: '',
          image: 'https://cdn.tgdd.vn/Products/Images/42/314209/oppo-reno-11-xanh-thumb-600x600.jpg',
          name: 'OPPO Reno11 5G',
          averageRating: 4,
          price: 10690000
        }
      ]
    }
  ])
)

export default router
