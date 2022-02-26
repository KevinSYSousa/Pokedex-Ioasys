import {createSlice} from '@reduxjs/toolkit';

const user = createSlice({
	name: 'handleUserChoices',
	initialState: {
		nightMode: false,
		loading: false,
		search: false,
	},
	reducers: {
		changeTheme: (state) => {
			state.nightMode = !state.nightMode;
		},
		startLoading: (state, {payload}) => {
			state.loading = payload;
		},
		searchAction: (state, {payload}) => {
			state.search = payload;
		},
	},
});

export const {changeTheme, startLoading, searchAction} = user.actions;
export default user.reducer;
