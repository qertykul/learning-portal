import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ModuleProgress {
  moduleId: string;
  completed: boolean;
  lastAccessedAt: string;
}

export interface CourseProgress {
  courseId: string;
  moduleProgress: ModuleProgress[];
  startedAt: string;
  completedAt: string | null;
  percentComplete: number;
}

interface ProgressState {
  courseProgress: CourseProgress[];
}

const initialState: ProgressState = {
  courseProgress: [],
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    initializeCourseProgress: (state, action: PayloadAction<string>) => {
      if (!state.courseProgress.find(progress => progress.courseId === action.payload)) {
        state.courseProgress.push({
          courseId: action.payload,
          moduleProgress: [],
          startedAt: new Date().toISOString(),
          completedAt: null,
          percentComplete: 0,
        });
      }
    },
    updateModuleProgress: (
      state,
      action: PayloadAction<{ courseId: string; moduleId: string; completed: boolean }>
    ) => {
      const courseProgress = state.courseProgress.find(
        progress => progress.courseId === action.payload.courseId
      );
      
      if (courseProgress) {
        const moduleProgress = courseProgress.moduleProgress.find(
          mp => mp.moduleId === action.payload.moduleId
        );
        
        if (moduleProgress) {
          moduleProgress.completed = action.payload.completed;
          moduleProgress.lastAccessedAt = new Date().toISOString();
        } else {
          courseProgress.moduleProgress.push({
            moduleId: action.payload.moduleId,
            completed: action.payload.completed,
            lastAccessedAt: new Date().toISOString(),
          });
        }

        // Обновляем процент выполнения
        const completedModules = courseProgress.moduleProgress.filter(mp => mp.completed).length;
        courseProgress.percentComplete = (completedModules / courseProgress.moduleProgress.length) * 100;

        // Если все модули завершены, обновляем дату завершения курса
        if (courseProgress.percentComplete === 100) {
          courseProgress.completedAt = new Date().toISOString();
        }
      }
    },
  },
});

export const { initializeCourseProgress, updateModuleProgress } = progressSlice.actions;
export default progressSlice.reducer; 