import { create } from 'zustand'

export interface IinputStore {
   inputValue: string
   setInputValue: (value: string) => void
}

const useInputStore = create<IinputStore>((set) => ({
   inputValue: '',
   setInputValue: (value: string) => set({ inputValue: value })
}))

export default useInputStore
