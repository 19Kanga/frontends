import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productsService from '../../services/products';

const initialState = {
    products: [],
    productsId: {},
    isError: false,
    isSuccess: false,
    isSucces: false,
    isLoading: false,
    message: '',
};

// Create new products
export const createProducts = createAsyncThunk(
    'products/create',
    async (productsData, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await productsService.createProducts(productsData);
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

// Get user productss
export const getAllProducts = createAsyncThunk(
    'products/getAll',
    async (_, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await productsService.getAllProducts();
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


// Get user productss
export const getProductsById = createAsyncThunk(
    'products/id',
    async (id, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await productsService.getProductsById(id);
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

// Delete user products
export const deleteProducts = createAsyncThunk(
    'products/delete',
    async (id, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await productsService.DeleteProducts(id);
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

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        reset: state => initialState,
    },
    extraReducers: builder => {
        builder
            .addCase(createProducts.pending, state => {
                state.isLoading = true;
            })
            .addCase(createProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isSucces = action.payload.success;
                state.message = action.payload.message;
                state.products.push(action.payload.result);
            })
            .addCase(createProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getAllProducts.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isSucces = action.payload.success;
                state.products = action.payload.result;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getProductsById.pending, state => {
                state.isLoading = true;
            })
            .addCase(getProductsById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.productsId = action.payload.result;
            })
            .addCase(getProductsById.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteProducts.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isSucces = action.payload.success;
                state.products = state.products.filter(
                    x => x.id !== action.payload.result.id
                );
            })
            .addCase(deleteProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { reset } = productsSlice.actions;
export default productsSlice.reducer;
