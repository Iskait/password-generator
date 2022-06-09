import { createSlice } from "@reduxjs/toolkit";

const copySlice = createSlice({
    name: 'copy',
    initialState: {
        showButtons: false,
        copied: false,
    },
    reducers: {
        toggleButtons: (state) => {
            state.showButtons = true
        },
        toggleCopied: (state, action) => {
            state.copied = action.payload.visible;
        }
    }
})

export const { toggleButtons, toggleCopied } = copySlice.actions;

export default copySlice.reducer;