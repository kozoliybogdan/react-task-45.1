import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [
        { id: 1, name: "Анна", email: "anna@example.com" },
        { id: 2, name: "Богдан", email: "bogdan@example.com" },
        { id: 3, name: "Олександр", email: "olex@example.com" },
    ],
    selectedUserId: 1,
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        selectUser(state, action) {
            state.selectedUserId = action.payload
        },
    },
})

export const { selectUser } = usersSlice.actions
export const selectUsers = (state) => state.users.users
export const selectSelectedUserId = (state) => state.users.selectedUserId
export const selectSelectedUser = (state) =>
    state.users.users.find((u) => u.id === state.users.selectedUserId) || null

export default usersSlice.reducer