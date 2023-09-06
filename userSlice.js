import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
    },
    reducers:{
        login:(state,action) =>{// state for what action performing and action for upadating
            state.user=action.payload;
             //to upadte the values

        },
        logout:(state) =>{// here action not required once logout all the details should be errased
            state.user = null;
        },
    },
    
});
export const  { login, logout } =userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;