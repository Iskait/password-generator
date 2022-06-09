import { createSlice } from "@reduxjs/toolkit";

const generateSlice = createSlice({
    name: 'generate',
    initialState: {
        length: 4, 
        pass: 'CLICK GENERATE',
        numbers: {
            characters: [...Array(10)].map((x,i) => String.fromCharCode(48+i)),
            checked: true
        },
        uppercase: {
            characters: [...Array(26)].map((x,i) => String.fromCharCode(65+i)),
            checked: true
        },
        lowercase: {
            characters: [...Array(26)].map((x,i) => String.fromCharCode(97+i)),
            checked: true
        },
        symbols: {
            characters: '~!@#$%^&*()_+{}":?><;.,'.split``,
            checked: false
        },
    },
    reducers: {
        setLength: (state, action) => {
            state.length = action.payload.value
        },
        toggleSettings: (state, action) => {
            const { set, checked } = action.payload;
            state[set].checked = checked;
        },
        generatePass: (state) => {
            const allSymbols = [state.numbers, state.uppercase, state.lowercase, state.symbols]
            // eslint-disable-next-line
            .reduce((acc,val) => (val.checked ? acc.push(...val.characters) : '', acc), []).join``
            if (!allSymbols.length) return;
            state.pass = ' '.repeat(state.length).replace(/./g, x => {
                return allSymbols[~~(Math.random() * (allSymbols.length))]
            })
        }
    }
})

export const { setLength, toggleSettings, generatePass } = generateSlice.actions;

export default generateSlice.reducer;