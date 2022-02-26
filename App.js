import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {StatusBar, useColorScheme} from 'react-native';

import Routes from './src/routes/routes';
import store from './src/store';
import theme from './src/styles/theme';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<StatusBar
					barStyle={isDarkMode ? 'light-content' : 'dark-content'}
					backgroundColor={theme.colors.secondary_color}
				/>
				<Routes />
			</ThemeProvider>
		</Provider>
	);
};

export default App;
