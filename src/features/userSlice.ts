import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  dateEarned: string;
}

export interface UserState {
  id: string;
  username: string;
  email: string;
  level: number;
  experience: number;
  achievements: Achievement[];
}

const initialState: UserState = {
  id: '1',
  username: 'Студент',
  email: 'student@example.com',
  level: 1,
  experience: 0,
  achievements: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    addExperience: (state, action: PayloadAction<number>) => {
      state.experience += action.payload;
      // Простая система уровней: каждые 100 XP = новый уровень
      state.level = Math.floor(state.experience / 100) + 1;
    },
    addAchievement: (state, action: PayloadAction<Achievement>) => {
      state.achievements.push(action.payload);
    },
  },
});

export const { setUser, addExperience, addAchievement } = userSlice.actions;
export default userSlice.reducer; 