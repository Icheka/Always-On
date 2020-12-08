import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, SafeAreaView } from "react-native";
import { globalStyle } from "./assets/global.style";

import Player from "./views/player";

export default function App() {
	return (
		<View style={globalStyle.appContainer}>
			<SafeAreaView style={{ alignSelf: 'stretch' }}>
				<Player />
			</SafeAreaView>
		</View>
	);
}
