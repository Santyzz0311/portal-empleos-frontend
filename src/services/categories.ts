import { Category } from '../types'

export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch('https://localhost:7267/categories')
    if (response.ok) {
      const categories = await response.json()
      return categories?.map((categorie: Category) => ({
        id: categorie.id,
        name: categorie.name
      }))
    } else {
      console.error('Error obteniendo los datos')
      return []
    }
  } catch (error) {
    console.error('Error al hacer fetching de los datos', error)
    return []
  }
}
