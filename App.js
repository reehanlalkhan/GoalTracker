import React, { useState } from 'react';
import { StyleSheet, Button, FlatList, View } from 'react-native';
import GoalItem from './components/GaolItem';
import GoalInput from './components/GoalInput'

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);


	const addGoalHandler = enteredGoal => {
		if (enteredGoal.length > 0) {
			setCourseGoals(currentGoals =>
				[...currentGoals, { key: Math.random().toString(), value: enteredGoal }]
			);
			setIsAddMode(false);
		}
	};

	const removeGoalHandler = goalId => {
		setCourseGoals(currentGoals => {
			return currentGoals.filter((goal) => goal.key !== goalId);
		});
	};

	const cancelGoalHandler = () => {
		setIsAddMode(false);
	};

	return (
		<View style={styles.container}>
			<Button title='Add Goal' onPress={() => setIsAddMode(true)} />
			<GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler} />
			<FlatList
				data={courseGoals}
				renderItem={itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} item={itemData.item.value} />} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		padding: 50,
		backgroundColor: '#fff',
		// alignItems: 'flex-start',
		justifyContent: 'center',
	}
});
