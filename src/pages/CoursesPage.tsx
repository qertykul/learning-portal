import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Container,
  Grid,
  Typography,
  Box,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import CourseCard from '../components/CourseCard';
import type { RootState } from '../features/store';

interface UserState {
  level: number;
}

// Временные данные для демонстрации
const MOCK_COURSES = [
  {
    id: '1',
    title: 'Основы программирования',
    description: 'Изучите базовые концепции программирования и алгоритмы',
    imageUrl: '/course-images/programming-basics.jpg',
    progress: 0,
    difficulty: 'beginner',
    xpReward: 1000,
    isLocked: false,
  },
  {
    id: '2',
    title: 'Web-разработка',
    description: 'HTML, CSS и JavaScript для создания современных веб-приложений',
    imageUrl: '/course-images/web-dev.jpg',
    progress: 35,
    difficulty: 'intermediate',
    xpReward: 1500,
    isLocked: false,
  },
  {
    id: '3',
    title: 'Продвинутые алгоритмы',
    description: 'Сложные алгоритмы и структуры данных',
    imageUrl: '/course-images/algorithms.jpg',
    progress: 0,
    difficulty: 'advanced',
    xpReward: 2000,
    isLocked: true,
    requiredLevel: 5,
  },
] as const;

const CoursesPage: React.FC = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);
  const [searchQuery, setSearchQuery] = React.useState('');
  const userLevel = useSelector((state: RootState) => (state.user as UserState).level);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleCourseClick = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };

  const filteredCourses = MOCK_COURSES.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Доступные курсы
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Выберите курс и начните свое обучение. Получайте опыт и открывайте новые возможности!
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Поиск курсов..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Все курсы" />
          <Tab label="В процессе" />
          <Tab label="Завершенные" />
        </Tabs>
      </Box>

      <Grid container spacing={3}>
        {filteredCourses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <CourseCard
              {...course}
              onCourseClick={handleCourseClick}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CoursesPage; 