interface IFooterData {
   socials: {
      id: number
      href: string
      label: string
   }[]
   links: {
      id: number
      href: string
      label: string
   }[]
}

export const footerData: IFooterData = {
   socials: [
      {
         id: 1,
         href: '/',
         label: 'Facebook'
      },
      {
         id: 2,
         href: '/',
         label: 'Instagram'
      },
      {
         id: 3,
         href: '/',
         label: 'Linkedin'
      }
   ],
   links: [
      {
         id: 1,
         href: '/',
         label: 'Get help'
      },
      {
         id: 2,
         href: '/',
         label: 'Partner with us'
      },
      {
         id: 3,
         href: '/',
         label: 'Add your bookshop'
      },
      {
         id: 4,
         href: '/',
         label: 'Sign up to sell books'
      },
      {
         id: 5,
         href: '/',
         label: 'Read out blog'
      },
      {
         id: 6,
         href: '/',
         label: 'Buy gift card'
      },
      {
         id: 7,
         href: '/',
         label: 'Bookshop nearby'
      },
      {
         id: 8,
         href: '/',
         label: 'Save on first order'
      }
   ]
}

export const picsumImages = [
   {
      id: 1,
      src: 'https://picsum.photos/seed/sunrice/100/100',
      alt: 'image',
      width: 100,
      height: 100
   },
   {
      id: 2,
      src: 'https://picsum.photos/seed/dark/100/100',
      alt: 'image',
      width: 100,
      height: 100
   },
   {
      id: 3,
      src: 'https://picsum.photos/seed/dog/100/100',
      alt: 'image',
      width: 100,
      height: 100
   }
]

export const tags: string[] = ['tag1', 'tag2', 'tag3']
