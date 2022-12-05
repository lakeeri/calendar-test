import { createSlice } from '@reduxjs/toolkit';

const initialState = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
const yearsSlice = createSlice({
  name: 'yearsSlice',
  initialState,
});

export default yearsSlice.reducer;
