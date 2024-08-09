import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './Meals.style';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Config from 'react-native-config';
import MealCard from '../../components/MealCard';

const Meals = ({route, navigation}) => {
  const {strCategory} = route.params;
  const {error, loading, data} = useFetch(
    `${Config.API_URL}/filter.php?c=${strCategory}`,
  );

  console.log(Config.API_URL + '/filter.php?c=' + strCategory);

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }

  const handleMealSelect = idMeal => {
    navigation.navigate('DetailPage', {idMeal});
  };

  const renderMeal = ({item}) => (
    <MealCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />
  );
  return (
    <View>
      <FlatList data={data.meals} renderItem={renderMeal} />
    </View>
  );
};

export default Meals;
