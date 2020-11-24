import React from 'react';
import {StyleSheet, Image, Text, View, Button} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => {
  return <Button title="Skip" color="#000" />;
};
const Next = ({...props}) => {
  return <Button title="Next" color="red" {...props} />;
};

const Done = ({...props}) => {
  return <Button title="Done" color="brown" {...props} />;
};

const Dots = ({selected}) => {
  let bg;
  bg = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
  return (
    <View
      style={{width: 6, height: 6, marginHorizontal: 3, backgroundColor: bg}}
    />
  );
};
const OnBoarding = ({navigation}) => {
  return (
    <Onboarding
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      SkipButtonComponent={Skip}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Home')}
      onDone={() => navigation.navigate('Home')}
      titleStyles={{fontWeight: 'bold'}}
      pages={[
        {
          backgroundColor: '#f4e8ab',
          image: <Image source={require('./../images/circleIcon.png')} />,
          title: 'Sun',
          subtitle: 'Your description about Sun.',
        },
        {
          backgroundColor: '#efcece',
          image: <Image source={require('./../images/heartIcon.png')} />,
          title: 'Heart',
          subtitle: 'Your description about Heart.',
        },
        {
          backgroundColor: '#326d5b',
          image: <Image source={require('./../images/roundIcon.png')} />,
          title: 'Round',
          subtitle: 'Your description about Round.',
        },
      ]}
    />
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});
