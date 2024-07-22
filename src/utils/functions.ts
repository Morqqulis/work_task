import axios from 'axios'

export const getBooks = async () => {
   try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/explore`, {
         headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
         }
      })
      const data = await res.data.result.products
      return data
   } catch (error) {
      return 'We have some problems'
   }
}

export const searchBooks = async (query: string) => {
   if (!query) return

   try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/search?q=${query}`, {
         headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
         },
         params: {
            search: query
         }
      })
      const data = await res.data.result.products

      return data || []
   } catch (error) {
      return 'Book not found'
   }
}

export const getBookById = async (id: string) => {
   if (!id) return

   try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/details?productId=${id}`, {
         headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
         }
      })
      const data = await res.data.result

      return data
   } catch (error) {
      return 'Book not found'
   }
}

interface Product {
   id: string
   count: number
}

interface ProductsData {
   products: Product[]
}
export const postProducts = async (data: ProductsData) => {
   const token = localStorage.getItem('token')
   if (!token || !data) return

   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/shop/checkout`, {
      method: 'POST',
      headers: {
         Authorization: `Bearer ${token}`,
         'Content-Type': 'application/json'
      },

      body: JSON.stringify(data)
   })
   console.log(res.status)
   return res.status
}
