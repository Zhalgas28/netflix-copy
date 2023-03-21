import { netflixApi } from './../src/services/netflixService';
import { combineReducers, configureStore } from "@reduxjs/toolkit"

const reducers = combineReducers({
  [netflixApi.reducerPath]: netflixApi.reducer
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