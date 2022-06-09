import { createSlice } from "@reduxjs/toolkit";

const generateSlice = createSlice({
    name: 'generate',
    initialState: {
        length: 4, 
        pass: 'CLICK GENERATE',
        numbers: {
            characters: [...Array(10)].map((_,i) => String.fromCharCode(48+i)),
            checked: true,
            disabled: false,
        },
        uppercase: {
            characters: [...Array(26)].map((_,i) => String.fromCharCode(65+i)),
            checked: true,
            disabled: false,
        },
        lowercase: {
            characters: [...Array(26)].map((_,i) => String.fromCharCode(97+i)),
            checked: true,
            disabled: false,
        },
        symbols: {
            characters: '~!@#$%^&*()_+{}":?><;.,'.split``,
            checked: false,
            disabled: false,
        },
    },
    reducers: {
        setLength: (state, action) => {
            state.length = action.payload.value
        },
        toggleSettings: (state, action) => {
            const { set, checked } = action.payload;
            state[set].checked = checked;
            const signs = signsSelector(state);
            const checkedSigns = signs.filter(x=>x.checked);
            if (checkedSigns.length === 1) {
                checkedSigns[0].disabled = true;
            } else {
                signs.forEach(x=> {
                    x.disabled = false;
                })
            }
        },
        generatePass: (state) => {
            const allSymbols = [state.numbers, state.uppercase, state.lowercase, state.symbols]
            // eslint-disable-next-line
            .reduce((acc,val) => (val.checked ? acc.push(...val.characters) : '', acc), []).join``
            state.pass = ' '.repeat(state.length).replace(/./g, x => {
                return allSymbols[~~(Math.random() * (allSymbols.length))]
            })
        }
    }
})

const signsSelector = (state) => {
    return ['numbers', 'uppercase', 'lowercase', 'symbols'].map((item => state[item]));
}

export const { setLength, toggleSettings, generatePass } = generateSlice.actions;

export default generateSlice.reducer;