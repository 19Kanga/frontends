import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductsImageService from '../../services/productsImage';

const initialState = {
    productsImage: [],
    productsImageId: [],
    isError: false,
    isSuccess: false,
    isSucces: false,
    isLoading: false,
    message: '',
};

// Create new products
export const createProductsImage = createAsyncThunk(
    'ProductsImage/create',
    async (ProductsImageData, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await ProductsImageService.createProductsImage(ProductsImageData);
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

// Get user ProductsImages
export const getAllProductsImage = createAsyncThunk(
    'ProductsImage/getAll',
    async (_, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await ProductsImageService.getAllProductsImage();
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


// Get user ProductsImages
export const getProductsImageById = createAsyncThunk(
    'ProductsImage/id',
    async (id, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await ProductsImageService.getProductsImageById(id);
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

// Delete user ProductsImage
export const deleteProductsImage = createAsyncThunk(
    'ProductsImage/delete',
    async (id, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await ProductsImageService.DeleteProductsImage(id);
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

export const productsImageSlice = createSlice({
    name: 'productsImage',
    initialState,
    reducers: {
        reset: state => initialState,
    },
    extraReducers: builder => {
        builder
            .addCase(createProductsImage.pending, state => {
                state.isLoading = true;
            })
            .addCase(createProductsImage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isSucces = action.payload.success;
                state.message = action.payload.message;
                state.productsImage.push(action.payload.result);
            })
            .addCase(createProductsImage.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getAllProductsImage.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAllProductsImage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isSucces = action.payload.success;
                state.productsImage = action.payload.result;
            })
            .addCase(getAllProductsImage.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getProductsImageById.pending, state => {
                state.isLoading = true;
            })
            .addCase(getProductsImageById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.productsImageId = action.payload.result;
            })
            .addCase(getProductsImageById.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteProductsImage.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteProductsImage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isSucces = action.payload.success;
                state.productsImage = state.productsImage.filter(
                    x => x.id !== action.payload.result.id
                );
            })
            .addCase(deleteProductsImage.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { reset } = productsImageSlice.actions;
export default productsImageSlice.reducer;
