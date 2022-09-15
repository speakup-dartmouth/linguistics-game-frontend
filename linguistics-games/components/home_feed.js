/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState, useContext } from 'react';

import {
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles';
import { getAllHomePosts } from '../actions';

// refactored code
import FeedPost from './feed_post';
import { AuthContext } from '../context/AuthContext';

function HomeFeed(props) {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const postData = useSelector((reduxState) => reduxState.posts.all);
  const context = useContext(AuthContext);
  const shouldGet = useSelector((reduxState) => reduxState.posts.shouldGet);
  const { id } = context.userInfo;

  useEffect(() => {
    if (!shouldGet) return;
    dispatch(getAllHomePosts(id));
    setIsLoading(false);
  }, [shouldGet]);

  // console.log(postData);

  const showPostDetail = (post) => {
    // pass in profile into this.props.navigation.state.params.profile in navigated view
    navigation.navigate('Post Detail', { post, tab: "home", postID: post._id });
  };

  const renderLoadingView = () => (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );

  const displayCaption = (post) => {
    const displayLength = 10;
    if (post.description.length >= displayLength) {
      return (
        <>
          <Text style={styles.sameParagraph}>
            {
                `${post.description.slice(0, post.description.slice(0, displayLength).lastIndexOf(' '))}...`
            }
          </Text>
          <TouchableOpacity onPress={() => { showPostDetail(post); }}>
            <Text style={[styles.baseText, { fontWeight: '500' }]}>See More</Text>
          </TouchableOpacity>
        </>
      );
    }
    return <Text style={styles.baseText}>{post.description}</Text>;
  };

  if (isLoading) {
    return renderLoadingView();
  }
  return (

    <View>
      <FlatList
        data={postData}
        renderItem={({ item }) => <FeedPost key={item._id} post={item} navigation={navigation} />}
        keyExtractor={(item) => item._id}
        style={styles.listView}
      />
    </View>
  );
}

export default HomeFeed;