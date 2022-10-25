import { globalStyles } from 'lib/styles';
import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useGetCategoriesQuery, useUpdateUserMutation } from 'services/api';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from 'navigation/types';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import Button from 'components/UI/Button';
import { setRegistering } from 'redux/slices/authSlice';
import styles from './styles';

function CategoriesItem(
  { category, onPress, isPressed }:
  {category: string, onPress?: (category: string) => void, isPressed: boolean},
): JSX.Element {
  return (
    <Pressable style={[styles.categoryItem, isPressed ? styles.categoryPressed : {}]} onPress={() => onPress(category)}>
      <Text style={styles.categoryText}>{category}</Text>
    </Pressable>
  );
}

function Categories(): JSX.Element {
  const { interests } = useAppSelector((state) => state.auth);
  const { data: allCategories } = useGetCategoriesQuery();
  const [updateUser] = useUpdateUserMutation();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useAppDispatch();

  const onPress = () => {
    updateUser({ interests: selectedCategories });
    navigation.navigate('TabNavigator');
    dispatch(setRegistering(false));
  };

  const onPressCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((c) => c.filter((cat) => cat !== category));
    } else {
      setSelectedCategories((c) => [...c, category]);
    }
  };

  useEffect(() => {
    setSelectedCategories(interests);
  }, [interests]);

  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        <Text style={globalStyles.headingThree}>Choose areas of interest</Text>
        <Text style={globalStyles.bodyLarge}>These will help cater your profile.</Text>
        <View style={styles.categoriesGroup}>
          {allCategories?.map((category) => (
            <CategoriesItem category={category} key={category} onPress={onPressCategory} isPressed={selectedCategories.includes(category)} />
          ))}
        </View>
        <Text style={globalStyles.bodyLarge}>Categories can be adjusted later.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={onPress} text="Continue" />
      </View>
    </View>
  );
}

export default Categories;
