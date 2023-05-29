import {StudentCard} from '../../components/StudentCard';
import {useStudentsStore, IStudent} from '../../store/students';
import {styles} from './styles';

const ListStudents = () => {
  const students = useStudentsStore(state => state.students);

  const renderItem = (item: IStudent, index: number) => {
    return (
      <StudentCard
        key={index}
        title={item.name}
        rm={item.rm}
        description={item.description}
        image={item.image}
      />
    );
  };

  return <div style={styles.container}>{students.map(renderItem)}</div>;
};

export default ListStudents;
