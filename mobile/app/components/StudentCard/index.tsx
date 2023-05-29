import React from 'react';
import {Pressable} from 'react-native';
import Animated from 'react-native-reanimated';

import {styles} from './styles';

interface StudentCardProps {
  title: string;
  rm: string;
  description: string;
  image: string;
  onPress: any;
}

export const StudentCard = ({
  image,
  title,
  rm,
  description,
  onPress,
}: StudentCardProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Animated.Image
        style={styles.image}
        source={image as any}
        resizeMode="cover"
        sharedTransitionTag={`image_${rm}`}
      />
      <Animated.View style={styles.body}>
        <Animated.Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.title}
          sharedTransitionTag={`title_${rm}`}>
          {title} - {rm}
        </Animated.Text>
        <Animated.Text
          numberOfLines={7}
          ellipsizeMode="tail"
          style={styles.description}
          sharedTransitionTag={`description_${rm}`}>
          {description}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
};
