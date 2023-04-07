import { netflixApi } from './../src/services/netflixService';
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import filterReducer from "./reducers/filterSlice"
import paginatorReducer from "./reducers/paginatorSlice"


const reducers = combineReducers({
  [netflixApi.reducerPath]: netflixApi.reducer,
  filter: filterReducer,
  paginator: paginatorReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: reducers,
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware().concat(netflixApi.middleware)
    },
  })
}

export type AppStateType = ReturnType<typeof reducers>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType["dispatch"]