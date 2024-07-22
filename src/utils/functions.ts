import axios from 'axios'

export const getBooks = async () => {
   const token = localStorage.getItem('token')
   if (!token) return
   try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/explore`, {
         headers: {
            Authorization: `Bearer ${token}`
         }
      })
      const data = await res.data.result.products
      return data
   } catch (error) {
      console.log(error)
   }

   throw new Error('Books not found')
}

export const searchBooks = async (query: string) => {
   const token = localStorage.getItem('token')

   if (!query || !token) return
   try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/search?q=${query}`, {
         headers: {
            Authorization: `Bearer ${token}`
         },
         params: {
            search: query
         }
      })
      const data = await res.data.result.products

      return data
   } catch (error) {
      console.log('404 =))', 'Book not found')
   }

   throw new Error('Books not found')
}

export const getBookById = async (id: string) => {
   const token = localStorage.getItem('token')
   if (!id || !token) return

   try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/details?productId=${id}`, {
         headers: {
            Authorization: `Bearer ${token}`
         }
      })
      const data = await res.data.result

      return data
   } catch (error) {
      console.log(error)
   }
}

export const postProducts = async (data: any) => {
   const token = localStorage.getItem('token')
   if (!token || !data) return

   const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/shop/checkout`, data, {
      headers: {
         Authorization: `Bearer ${token}`
      }
   })
   console.log(res.data)
   return res.data
}
