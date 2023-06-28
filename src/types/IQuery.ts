type filmsType = "movie" | "cartoon" | "anime"

export interface IBaseQuery {
  limit?: number
  page?: number
  type?: filmsType
  search?: string
  id?: string | string[] | undefined
}

export interface IFilters {
  genre: string | string[]
  year: string
  rating: string
}

export interface IQuery extends IBaseQuery {
  filters: IFilters
}