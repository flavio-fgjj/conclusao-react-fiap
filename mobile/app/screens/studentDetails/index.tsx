import React, {useEffect} from 'react';
import Animated from 'react-native-reanimated';

// styles
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@router/index.routes';
import {useStudentsStore} from '@store/students';
import {styles} from './styles';

type ScreenProps = NativeStackScreenProps<RootStackParamList>;

const StudentDetails = ({navigation}: ScreenProps) => {
  const student = useStudentsStore(state => state.student);

  useEffect(() => {
    navigation.setOptions({title: `${student.name} - ${student.age}`});
  }, []);

  return (
    <Animated.View style={styles.container}>
      <Animated.ScrollView>
        <Animated.Image
          style={styles.image}
          source={{
            uri: student.image,
          }}
          resizeMode="cover"
          sharedTransitionTag={`image_${student.image}_${student.name}`}
        />
        <Animated.View style={styles.body}>
          <Animated.Text
            style={styles.title}
            sharedTransitionTag={`title_${student.name}_${student.age}`}>
            {student.name} - {student.age}
          </Animated.Text>
          <Animated.Text
            style={styles.description}
            sharedTransitionTag={`description_${student.description}`}>
            {student.description}
          </Animated.Text>
        </Animated.View>
      </Animated.ScrollView>
    </Animated.View>
  );
};

export default StudentDetails;
