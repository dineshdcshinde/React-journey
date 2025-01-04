import {configureStore} from 'react-redux/toolkit'

export const store = configureStore({
    reducer:{
        products: productSlice
    }
})