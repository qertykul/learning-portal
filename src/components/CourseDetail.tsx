import { Box, Typography, Container, Paper, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../features/store';

const CourseDetail = () => {
  const { id } = useParams();
  const course = useSelector((state: RootState) => 
    state.courses.courses.find(course => course.id === id)
  );

  if (!course) {
    return (
      <Container>
        <Typography variant="h4">Курс не найден</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h4" gutterBottom>
          {course.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {course.description}
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
              Модули курса
            </Typography>
            {course.modules?.map((module, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="h6">{module.title}</Typography>
                <Typography variant="body2">{module.content}</Typography>
              </Box>
            ))}
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Информация о курсе
              </Typography>
              <Typography>Сложность: {course.difficulty}</Typography>
              <Typography>Опыт: {course.rewards.experience} XP</Typography>
              {course.rewards.achievements.length > 0 && (
                <Box mt={1}>
                  <Typography variant="subtitle2">Достижения:</Typography>
                  {course.rewards.achievements.map((achievement, index) => (
                    <Typography key={index} variant="body2">
                      • {achievement}
                    </Typography>
                  ))}
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CourseDetail; 