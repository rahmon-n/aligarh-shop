import { createSlice } from '@reduxjs/toolkit';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

const initialState = {
  categories: [],
  isLoading: false,
  error: null
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    fetchCategoriesStart: (state) => {
      state.isLoading = true;
    },
    fetchCategoriesSuccess: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    fetchCategoriesFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } =
  categoriesSlice.actions;

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};

export default categoriesSlice.reducer;
