import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './MealCard.style';

const MealCard = ({meal, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          <Image style={styles.image} source={{uri: meal.strMealThumb}} />
          <View style={styles.name_container}>
            <Text style={styles.name}>{meal.strMeal}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
