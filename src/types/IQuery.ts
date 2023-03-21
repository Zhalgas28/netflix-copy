export interface IBaseQuery {
  limit?: number
  page?: number
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