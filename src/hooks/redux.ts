import { AppStateType, AppDispatchType } from './../../store/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
export const useAppDispatch: () => AppDispatchType = useDispatch