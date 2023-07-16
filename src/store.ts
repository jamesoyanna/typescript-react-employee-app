import { configureStore,  ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { useDispatch as useReduxDispatch } from "react-redux";
import employeeSlice from './features/employee/employeeSlice'

export const store = configureStore({
  reducer: {
    employee: employeeSlice
  },
});

// Obtain the Dispatch type from the store
export type AppDispatch = typeof store.dispatch;

// Define the Thunk type for your application
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  null,
  Action<string>
>;

// Create a hook that provides the AppDispatch type
export const useAppDispatch = () => useReduxDispatch<AppDispatch>();

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;
