import {
  CreateUserInformationInterface,
  UserInterface,
} from "@/interface/user";
import { GenerateSlice } from "./../generateSice";

import { PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";

const slice = GenerateSlice<UserInterface, SliceCaseReducers<UserInterface>>({
  initialState: {
    id: null,
    address: "",
    created_at: "",
    date_of_birth: "",
    full_name: "",
    national_id: "",
    phone_number: "",
    token: null,
    updated_at: "",
  },
  name: "user",
  reducers: {
    loginUser: (state, { payload }: PayloadAction<UserInterface>) => {
      state.token = payload.token ?? null;
      state.id = payload.id ?? null;
      state.full_name = payload.full_name ?? null;
      state.address = payload.address ?? null;
      state.national_id = payload.national_id ?? null;
      state.phone_number = payload.phone_number ?? null;
      state.date_of_birth = payload.date_of_birth ?? null;
      state.created_at = payload.created_at ?? null;
      state.updated_at = payload.updated_at ?? null;
    },
    updateUSer: (
      state,
      { payload }: PayloadAction<CreateUserInformationInterface>
    ) => {
      state.address = payload.address ?? state.address ?? null;
      state.date_of_birth =
        payload.date_of_birth ?? state.date_of_birth ?? null;
      state.full_name = payload.full_name ?? state.full_name ?? null;
      state.national_id = payload.national_id ?? state.national_id ?? null;
      state.phone_number = payload.phone_number ?? state.phone_number ?? null;
    },
    logoutUser: (state) => {
      state.token = null;
      state.id = null;
      state.full_name = null;
      state.address = null;
      state.national_id = null;
      state.phone_number = null;
      state.date_of_birth = null;
      state.created_at = null;
      state.updated_at = null;
    },
  },
});

export const { loginUser, logoutUser, updateUSer } = slice.actions;
export default slice.reducer;
