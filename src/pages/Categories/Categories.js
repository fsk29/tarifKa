import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './Categories.style';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import CategoriesCard from '../../components/CategoriesCard';

const Categories = ({navigation}) => {
  const {error, loading, data} = useFetch(`${Config.API_URL}/categories.php`);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const handleCategorySelect = strCategory => {
    navigation.navigate('MealsPage', {strCategory});
  };

  const renderCategory = ({item}) => (
    <CategoriesCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );
  return (
    <View>
      <FlatList data={data.categories} renderItem={renderCategory} />
    </View>
  );
};

export default Categories;
