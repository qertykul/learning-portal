import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Module {
  id: string;
  title: string;
  content: string;
  order: number;
}

export interface CourseRewards {
  experience: number;
  achievements: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  modules: Module[];
  rewards: CourseRewards;
}

interface CoursesState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

const initialState: CoursesState = {
  courses: [
    {
      id: '1',
      title: 'Основы React',
      description: 'Изучите основы React и создайте свое первое приложение',
      difficulty: 'beginner',
      modules: [
        {
          id: 'm1',
          title: 'Введение в React',
          content: 'Что такое React и почему его стоит изучать',
          order: 1,
        },
        {
          id: 'm2',
          title: 'Компоненты',
          content: 'Создание и использование компонентов',
          order: 2,
        },
      ],
      rewards: {
        experience: 100,
        achievements: ['Первые шаги в React', 'Мастер компонентов'],
      },
    },
    {
      id: '2',
      title: 'TypeScript для React разработчиков',
      description: 'Продвинутый курс по использованию TypeScript в React проектах',
      difficulty: 'intermediate',
      modules: [
        {
          id: 'm1',
          title: 'Типы в React',
          content: 'Использование типов в React компонентах',
          order: 1,
        },
      ],
      rewards: {
        experience: 150,
        achievements: ['TypeScript Guru'],
      },
    },
  ],
  loading: false,
  error: null,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setCourses, setLoading, setError } = coursesSlice.actions;
export default coursesSlice.reducer; 