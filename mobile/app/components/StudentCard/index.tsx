import React from 'react';
import {Pressable} from 'react-native';
import Animated from 'react-native-reanimated';

// styles
import {styles} from './styles';

interface StudentCardProps {
  title: string;
  age: string;
  description: string;
  image: string;
  onPress: any;
}

export const StudentCard = ({
  image,
  title,
  age,
  description,
  onPress,
}: StudentCardProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Animated.Image
        style={styles.image}
        source={{
          uri: image,
        }}
        resizeMode="cover"
        sharedTransitionTag={`image_${image}_${title}`}
      />
      <Animated.View style={styles.body}>
        <Animated.Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.title}
          sharedTransitionTag={`title_${title}_${age}`}>
          {title} - {age}
        </Animated.Text>
        <Animated.Text
          numberOfLines={7}
          ellipsizeMode="tail"
          style={styles.description}
          sharedTransitionTag={`description_${description}`}>
          {description}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
};
