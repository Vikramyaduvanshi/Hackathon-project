import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export let fetchpost = createAsyncThunk("post/fetchpost", async (_, thunkAPI) => {
  try {
    let post = await axios.get("https://myfirstproject-f8855-default-rtdb.firebaseio.com/post.json")
    let res = Object.entries(post.data);
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

let initialstate = {
  post: [],
  loading: false,
  error: ""
}

let fetchslice = createSlice({
  name: "fetchslice",
  initialState: initialstate,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchpost.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchpost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload
      })
      .addCase(fetchpost.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
  }
})

export default fetchslice.reducer
