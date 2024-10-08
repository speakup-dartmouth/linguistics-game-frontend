import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type TabParamList = {
  Landing: undefined,
  Upvote: undefined,
  //Search: undefined,
  Suggest: undefined,
  Profile: undefined,
};

export type StackParamList = {
  Registration: undefined,
  TabNavigator: undefined,
  ResearchConsent: undefined,
  Registration: undefined,
  ResearchConsentModal: undefined,
  Demographics: undefined,
  DemographicsModal: undefined,
  Categories: undefined,
  CategoriesModal: undefined,
  QuestionDetail: undefined,
  SuggestionDetail: undefined,
  CreateSuggestion: undefined,
}

export type NavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<StackParamList>,
  BottomTabNavigationProp<TabParamList>
>;

export const useAppNavigation = useNavigation<NavigationProp>;
