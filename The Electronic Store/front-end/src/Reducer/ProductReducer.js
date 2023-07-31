import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getProducts = createAsyncThunk("getproducts", async (id, { rejectWithValue }) => {
  const response = await axios.get(`http://localhost:8091/products/${id}`);
  try {
    return response.data;
  } catch (error) {
    rejectWithValue(error);
  }
})


const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
    searchDataState: "",
  },

  reducers: {
    searchProduct: (state, action) => {
      state.searchDataState = action.payload
    }
  },

  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

  }

});

export default productSlice.reducer;

export const { searchProduct } = productSlice.actions