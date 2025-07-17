# Redux Toolkit
## Create React App
```js
npm create vite@latest
```
## Installation
```js
npm install @reduxjs/toolkit
npm install react-redux
```
### configureStore
```js
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {},
})
```
#### wrap your app with a Provider
```js
import { Provider } from 'react-redux'

<Provider store={store}>
    <App>
<Provider>
```
### createSlice
```js
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: '',
    initialState: {},
    reducers: {}
})
export const { } = slice.actions
export default slice.reducer
```
#### create reducer in store
```js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from ""

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})
```