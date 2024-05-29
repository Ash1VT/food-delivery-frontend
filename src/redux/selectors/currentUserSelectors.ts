import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getCurrentUser = (state: RootState) => state.currentUserReducer.currentUser