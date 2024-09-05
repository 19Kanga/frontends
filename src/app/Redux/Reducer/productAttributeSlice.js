import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import attributeService from '../../services/productAttribute';

const initialState = {
    attribute: [],
    attributeId: {},
    isError: false,
    isSuccess: false,
    isSucces: false,
    isLoading: false,
    message: '',
};

// Create new attribute
export const createAttribute = createAsyncThunk(
    'attribute/create',
    async (attributeData, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await attributeService.createAttribute(attributeData);
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

// Get user attributes
export const getAllAttribute = createAsyncThunk(
    'attributes/getAll',
    async (_, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await attributeService.getAllAttribute();
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


// Get user attributes
export const getAttributeById = createAsyncThunk(
    'attribute/id',
    async (id, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await attributeService.getAttributeById(id);
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

// Delete user attribute
export const deleteAttribute = createAsyncThunk(
    'attribute/delete',
    async (id, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await attributeService.DeleteAttribute(id);
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

export const attributeSlice = createSlice({
    name: 'attribute',
    initialState,
    reducers: {
        reset: state => initialState,
    },
    extraReducers: builder => {
        builder
            .addCase(createAttribute.pending, state => {
                state.isLoading = true;
            })
            .addCase(createAttribute.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isSucces = action.payload.success;
                state.message = action.payload.message;
                state.attribute.push(action.payload.result);
            })
            .addCase(createAttribute.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getAllAttribute.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAllAttribute.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isSucces = action.payload.success;
                state.attribute = action.payload.result;
            })
            .addCase(getAllAttribute.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getAttributeById.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAttributeById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.attributeId = action.payload.result;
            })
            .addCase(getAttributeById.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteAttribute.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteAttribute.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isSucces = action.payload.success;
                state.attribute = state.attribute.filter(
                    x => x.id !== action.payload.result.id
                );
            })
            .addCase(deleteAttribute.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { reset } = attributeSlice.actions;
export default attributeSlice.reducer;
