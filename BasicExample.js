import React, {useEffect, useState, useRef} from 'react';
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';

const BasicExample = ({play}) => {
  const animationRef = useRef(null);
  const [progress, setProgress] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
    }).start();
  };

  // useEffect(() => {
  //   if (animationRef !== null) {
  //     play ? animationRef.current.play(0, 10) : animationRef.current.pause();
  //   }
  // }, [animationRef, play]);

  useEffect(() => {
    if (animationRef !== null) {
      play ? startAnimation() : setProgress(new Animated.Value(0.5));
    }
  }, [animationRef, play]);

  return (
    <LottieView
      ref={animationRef}
      source={require('./assets/data.json')}
      // autoPlay
      progress={progress}
      loop={false}
    />
  );
};

export default BasicExample;
