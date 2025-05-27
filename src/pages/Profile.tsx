import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  EmojiEvents as TrophyIcon,
  Timeline as TimelineIcon,
  School as SchoolIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import type { RootState } from '../features/store';

interface UserState {
  username: string;
  email: string;
  level: number;
  experience: number;
  achievements: string[];
}

interface ProgressState {
  streakDays: number;
  totalTimeSpent: number;
  coursesProgress: Record<string, { completedModules: string[] }>;
}

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user as UserState);
  const progress = useSelector((state: RootState) => state.progress as ProgressState);

  const totalCompletedModules = Object.values(progress.coursesProgress).reduce(
    (acc, courseProgress) => acc + courseProgress.completedModules.length,
    0
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Основная информация */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  margin: '0 auto 16px',
                  bgcolor: 'primary.main',
                  fontSize: '3rem',
                }}
              >
                {user.username?.[0]?.toUpperCase() || 'U'}
              </Avatar>
              <Typography variant="h5" gutterBottom>
                {user.username}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {user.email}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body1" gutterBottom>
                  Уровень {user.level}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={(user.experience % 1000) / 10}
                  sx={{ mb: 1 }}
                />
                <Typography variant="body2" color="text.secondary">
                  {user.experience} / {user.level * 1000} XP
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Статистика */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Статистика обучения
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <TimelineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Серия входов"
                    secondary={`${progress.streakDays} дней подряд`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SchoolIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Пройдено модулей"
                    secondary={totalCompletedModules}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TrophyIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Время обучения"
                    secondary={`${Math.round(progress.totalTimeSpent / 60)} часов`}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Достижения */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Достижения ({user.achievements.length})
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={2}>
                {user.achievements.map((achievement, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card variant="outlined">
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <StarIcon color="primary" sx={{ mr: 1 }} />
                          <Typography variant="body1">
                            {achievement}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile; 