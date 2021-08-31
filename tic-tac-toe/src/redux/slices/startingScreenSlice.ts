/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface StartingState {
  value: string
}

// Define the initial state using that type
const initialState: StartingState = {
  value: 'Joe',
}

export const startScreenSlice = createSlice({
  name: 'names',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    firstName: (state) => {
      state.value
    },
    secondName: (state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      state.value
    },
  },
})

export const { firstName, secondName } = startScreenSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const select = (state: RootState) => state.name.value

export default startScreenSlice.reducer
