import {StateCreator, create} from 'zustand';
import {persist, PersistOptions} from 'zustand/middleware';
import {students} from './students';

export interface IStudent {
  name: string;
  rm: string;
  image: string;
  description: string;
}

interface IListStore {
  students: IStudent[];
}

const initialStateStudents = {
  students: students as IStudent[],
};

type MyPersist = (
  config: StateCreator<IListStore>,
  options: PersistOptions<IListStore>,
) => StateCreator<IListStore>;

export const useStudentsStore = create<IListStore>(
  (persist as MyPersist)(
    () => ({
      ...initialStateStudents,
    }),
    {name: 'students_store'},
  ),
);
