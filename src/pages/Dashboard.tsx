import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Grid as MuiGrid,
  Paper,
  Typography,
  Box,
  LinearProgress,
  Card,
  CardContent,
} from '@mui/material';
import type { RootState } from '../features/store';

const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const progress = useSelector((state: RootState) => state.progress);
  const courses = useSelector((state: RootState) => state.courses.courses);

  const activeCourses = courses.filter(
    (course) => progress.coursesProgress[course.id]?.completed === false
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <MuiGrid container spacing={3}>
        {/* Приветствие и прогресс */}
        <MuiGrid item xs={12}>
          <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h4" gutterBottom>
              Добро пожаловать, {user.username}!
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <Typography variant="body1" sx={{ mr: 2 }}>
                Уровень {user.level}
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={(user.experience % 1000) / 10}
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>
              <Typography variant="body2" sx={{ ml: 2 }}>
                {user.experience} XP
              </Typography>
            </Box>
          </Paper>
        </MuiGrid>

        {/* Статистика */}
        <MuiGrid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Статистика обучения
              </Typography>
              <Typography variant="body1">
                Время обучения: {Math.floor(progress.totalTimeSpent / 60)} ч{' '}
                {progress.totalTimeSpent % 60} мин
              </Typography>
              <Typography variant="body1">
                Серия дней: {progress.streakDays} дней
              </Typography>
            </CardContent>
          </Card>
        </MuiGrid>

        {/* Активные курсы */}
        <MuiGrid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Активные курсы
              </Typography>
              {activeCourses.length > 0 ? (
                activeCourses.map((course) => (
                  <Box key={course.id} sx={{ mb: 2 }}>
                    <Typography variant="subtitle1">{course.title}</Typography>
                    <LinearProgress
                      variant="determinate"
                      value={
                        ((progress.coursesProgress[course.id]?.completedLessons
                          ?.length || 0) /
                          course.modules.reduce(
                            (acc, module) => acc + module.lessons.length,
                            0
                          )) *
                        100
                      }
                      sx={{ height: 8, borderRadius: 4, mt: 1 }}
                    />
                  </Box>
                ))
              ) : (
                <Typography variant="body1">
                  У вас пока нет активных курсов
                </Typography>
              )}
            </CardContent>
          </Card>
        </MuiGrid>
      </MuiGrid>
    </Container>
  );
};

export default Dashboard; 