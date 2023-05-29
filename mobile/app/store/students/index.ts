import {StateCreator, create} from 'zustand';
import {persist, createJSONStorage, PersistOptions} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {students} from './students';

export interface IStudent {
  name: string;
  rm: string;
  image: string;
  description: string;
}

interface IListStore {
  students: IStudent[];
  student: IStudent;
  setStudent: (student: IStudent) => void;
}

const initialStateStudents = {
  students: students as IStudent[],
  student: {} as IStudent,
};

type MyPersist = (
  config: StateCreator<IListStore>,
  options: PersistOptions<IListStore>,
) => StateCreator<IListStore>;

export const useStudentsStore = create<IListStore>(
  (persist as MyPersist)(
    set => ({
      ...initialStateStudents,
      setStudent: student => set(() => ({student})),
    }),
    {name: 'students_store', storage: createJSONStorage(() => AsyncStorage)},
  ),
);
