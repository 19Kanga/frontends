import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import MenusService from '../../services/menu';

const initialState = {
    menus: [],
    menusId: {},
    isError: false,
    isSuccess: false,
    isSucces: false,
    isLoading: false,
    message: '',
};

// Create new Menus
export const createMenus = createAsyncThunk(
    'Menus/create',
    async (MenusData, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await MenusService.createMenus(MenusData);
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

// Get user Menuss
export const getAllMenus = createAsyncThunk(
    'Menuss/getAll',
    async (_, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await MenusService.getAllMenus();
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


// Get user Menuss
export const getMenusById = createAsyncThunk(
    'Menus/id',
    async (id, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await MenusService.getMenusById(id);
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

// Delete user Menus
export const deleteMenus = createAsyncThunk(
    'Menus/delete',
    async (id, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.user.token;
            return await MenusService.DeleteMenus(id);
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

export const MenusSlice = createSlice({
    name: 'menus',
    initialState,
    reducers: {
        reset: state => initialState,
    },
    extraReducers: builder => {
        builder
            .addCase(createMenus.pending, state => {
                state.isLoading = true;
            })
            .addCase(createMenus.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isSucces = action.payload.success;
                state.message = action.payload.message;
                state.menus.push(action.payload.result);
            })
            .addCase(createMenus.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getAllMenus.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAllMenus.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isSucces = action.payload.success;
                state.menus = action.payload.result;
            })
            .addCase(getAllMenus.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getMenusById.pending, state => {
                state.isLoading = true;
            })
            .addCase(getMenusById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.menusId = action.payload.result;
            })
            .addCase(getMenusById.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteMenus.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteMenus.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isSucces = action.payload.success;
                state.menus = state.menus.filter(
                    x => x.id !== action.payload.result.id
                );
            })
            .addCase(deleteMenus.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { reset } = MenusSlice.actions;
export default MenusSlice.reducer;
