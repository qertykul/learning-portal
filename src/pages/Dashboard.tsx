import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Grid,
} from '@mui/material';
import {
  School as SchoolIcon,
  EmojiEvents as TrophyIcon,
  Timeline as ProgressIcon,
} from '@mui/icons-material';

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: 'Интерактивные курсы',
      description: 'Изучайте программирование с помощью практических заданий и проектов',
    },
    {
      icon: <TrophyIcon sx={{ fontSize: 40 }} />,
      title: 'Система достижений',
      description: 'Получайте награды за успехи в обучении и выполнение заданий',
    },
    {
      icon: <ProgressIcon sx={{ fontSize: 40 }} />,
      title: 'Отслеживание прогресса',
      description: 'Следите за своим прогрессом и развивайтесь в своем темпе',
    },
  ];

  return (
    <Container>
      <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Добро пожаловать в Учебный портал
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Начните свой путь в программировании с нашей интерактивной платформой
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/courses')}
          sx={{ mt: 4 }}
        >
          Начать обучение
        </Button>
      </Box>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Box sx={{ color: 'primary.main', mb: 2 }}>
                {feature.icon}
              </Box>
              <Typography variant="h5" component="h2" gutterBottom>
                {feature.title}
              </Typography>
              <Typography color="text.secondary">
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard; 