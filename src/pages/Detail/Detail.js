import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Config from 'react-native-config';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Detail = ({route}) => {
  const {idMeal} = route.params;
  const {error, loading, data} = useFetch(
    `${Config.API_URL}/lookup.php?i=${idMeal}`,
  );
  console.log(Config.API_URL + '/lookup.php?i=' + idMeal);

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{uri: data.meals[0].strMealThumb}}
          style={styles.image}
        />
        <View style={styles.body_container}>
          <Text style={styles.title}>{data.meals[0].strMeal}</Text>
          <Text style={styles.area}>{data.meals[0].strArea}</Text>
        </View>
        <View style={styles.seperator} />
        <View style={styles.body_container}>
          <Text style={styles.instruct}>{data.meals[0].strInstructions}</Text>

          {data.meals[0].strYoutube ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                Linking.openURL(data.meals[0].strYoutube);
              }}>
              <Text style={styles.button_text}>Watch on Youtube Here</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;
