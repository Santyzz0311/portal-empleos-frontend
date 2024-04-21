import { useEffect, useState } from 'react'
import { Category } from '../types'
import { getAllCategories } from '../services/categories'

export default function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getAllCategories()
      .then(categories => setCategories(categories))
      .catch(e => console.error(e))
  }, [])

  return {
    categories
  }
}
