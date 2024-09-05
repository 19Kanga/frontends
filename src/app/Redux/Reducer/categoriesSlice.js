import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import categoriesService from '../../services/categories';

const initialState = {
    categories: [],
    categoriesId: {},
    isError: false,
    isSuccess: false,
    isSucces: false,
    isLoading: false,
    message: '',
};

// Create new categories
export const createCategories = createAsyncThunk(
    'categories/create',
    async (categoriesData, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await CategoriesService.createCategories(CategoriesData);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get user Categoriess
export const getAllCategories = createAsyncThunk(
    'categories/getAll',
    async (_, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await categoriesService.getAllCategories();
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);


// Get user Categoriess
export const getCategoriesById = createAsyncThunk(
    'categories/id',
    async (id, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await categoriesService.getCategoriesById(id);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(error);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Delete user Categories
export const deleteCategories = createAsyncThunk(
    'categories/delete',
    async (id, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await categoriesService.DeleteCategories(id);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        reset: state => initialState,
    },
    extraReducers: builder => {
        builder
            .addCase(createCategories.pending, state => {
                state.isLoading = true;
            })
            .addCase(createCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isSucces = action.payload.success;
                state.message = action.payload.message;
                state.categories.push(action.payload.result);
            })
            .addCase(createCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getAllCategories.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAllCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isSucces = action.payload.success;
                state.categories = action.payload.result;
            })
            .addCase(getAllCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getCategoriesById.pending, state => {
                state.isLoading = true;
            })
            .addCase(getCategoriesById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.categoriesId = action.payload.result;
            })
            .addCase(getCategoriesById.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteCategories.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isSucces = action.payload.success;
                state.categories = state.categories.filter(
                    x => x.id !== action.payload.result.id
                );
            })
            .addCase(deleteCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { reset } = categoriesSlice.actions;
export default categoriesSlice.reducer;
