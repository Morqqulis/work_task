// import { create } from 'zustand'

// export interface IBasketItem {
//    id: string
//    count: number
//    title: string
//    text: string
//    price: number
//    img: string
// }

// export interface IBasketStore {
//    basket: IBasketItem[]
//    addToBasket: (obj: IBasketItem) => void
//    removeFromBasket: (id: string) => void
//    clearBasket: () => void
//    setIncrement: (id: string) => void
//    setDecrement: (id: string) => void
// }

// const useBasketStore = create<IBasketStore>((set) => ({
//    basket: [],
//    addToBasket: (obj) =>
//       set((state) => {
//          if (state.basket.find((item) => item.id === obj.id)) {
//             return { basket: state.basket.map((item) => (item.id === obj.id ? { ...item, count: obj.count } : item)) }
//          }
//          localStorage.setItem('basket', JSON.stringify([...state.basket, obj]))
//          return { basket: [...state.basket, obj] }
//       }),

//    removeFromBasket: (id) =>
//       set((state) => {
//          localStorage.setItem('basket', JSON.stringify(state.basket.filter((item) => item.id !== id)))
//          return { basket: state.basket.filter((item) => item.id !== id) }
//       }),

//    setIncrement: (id) =>
//       set((state) => ({
//          basket: state.basket.filter((item) => (item.id === id && item.count > 1 ? item.count-- : 1))
//       })),

//    setDecrement: (id) =>
//       set((state) => ({ basket: state.basket.filter((item) => (item.id === id ? item.count++ : item.count)) })),

//    clearBasket: () => set({ basket: [] })
// }))

// export default useBasketStore
