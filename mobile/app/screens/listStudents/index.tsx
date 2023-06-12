import React from 'react';
import { ListRenderItem } from 'react-native';

import {StudentCard} from '@components/StudentCard';
import {useStudentsStore, IStudent} from '@store/students';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@router/index.routes';
import Animated from 'react-native-reanimated';
import { styles } from './styles';

type ScreenProps = NativeStackScreenProps<RootStackParamList>;

const ListStudents = ({ navigation }: ScreenProps) => {
  const students = useStudentsStore(state => state.students);
  const setStudent = useStudentsStore(state => state.setStudent);

  const onPressCard = (student: IStudent) => {
    setStudent(student);
    navigation.push('StudentDetails');
  };

  const renderItem: ListRenderItem<IStudent> = ({ item, index }) => {
    return (
      <StudentCard
        key={index}
        title={item.name}
        rm={item.rm}
        description={item.description}
        image={item.image}
        onPress={() => onPressCard(item)}
      />
    );
  };

  return (
    <Animated.FlatList
      data={students}
      renderItem={renderItem}
      keyExtractor={item => item.name}
      style={[styles.container]}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ListStudents;
