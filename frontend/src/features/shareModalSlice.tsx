import {createSlice} from "@reduxjs/toolkit"

const shareModalSlice = createSlice({
    name: "shareModal",
    initialState: {
        open: false
    },
    reducers: {
        toggleShareModal: (state, action) => {
            state.open = action.payload
        }
    }
})

export const {toggleShareModal} = shareModalSlice.actions
export default shareModalSlice.reducer