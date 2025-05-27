import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Container,
  Grid as MuiGrid,
  Typography,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  LinearProgress,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  PlayCircleOutline as PlayIcon,
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon,
  Lock as LockIcon,
  EmojiEvents as TrophyIcon,
} from '@mui/icons-material';
import type { RootState } from '../features/store';
import type { Course, Module, Lesson } from '../features/coursesSlice';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = useSelector((state: RootState) =>
    state.courses.courses.find((c) => c.id === id)
  );
  const progress = useSelector((state: RootState) =>
    state.progress.coursesProgress[id || '']
  );

  if (!course) {
    return (
      <Container>
        <Typography variant="h4">Курс не найден</Typography>
      </Container>
    );
  }

  const calculateModuleProgress = (module: Module) => {
    const completedLessons = module.lessons.filter(
      (lesson) => progress?.completedLessons?.includes(lesson.id)
    ).length;
    return (completedLessons / module.lessons.length) * 100;
  };

  const isLessonAvailable = (moduleIndex: number, lessonIndex: number) => {
    if (moduleIndex === 0 && lessonIndex === 0) return true;
    
    const previousLesson = lessonIndex > 0
      ? course.modules[moduleIndex].lessons[lessonIndex - 1]
      : moduleIndex > 0
        ? course.modules[moduleIndex - 1].lessons[
            course.modules[moduleIndex - 1].lessons.length - 1
          ]
        : null;

    return previousLesson
      ? progress?.completedLessons?.includes(previousLesson.id)
      : false;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <MuiGrid container spacing={4}>
        {/* Заголовок курса */}
        <MuiGrid item xs={12}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              {course.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {course.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <Chip
                label={`${course.difficulty.charAt(0).toUpperCase()}${course.difficulty.slice(
                  1
                )}`}
                color={
                  course.difficulty === 'beginner'
                    ? 'success'
                    : course.difficulty === 'intermediate'
                    ? 'warning'
                    : 'error'
                }
              />
              <Chip
                icon={<TrophyIcon />}
                label={`${course.rewards.experience} XP`}
                color="primary"
              />
            </Box>
          </Box>
        </MuiGrid>

        {/* Содержание курса */}
        <MuiGrid item xs={12} md={8}>
          {course.modules.map((module, moduleIndex) => (
            <Accordion key={module.id} defaultExpanded={moduleIndex === 0}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box sx={{ width: '100%' }}>
                  <Typography variant="h6">{module.title}</Typography>
                  <Box sx={{ mt: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={calculateModuleProgress(module)}
                      sx={{ height: 6, borderRadius: 3 }}
                    />
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {module.lessons.map((lesson, lessonIndex) => {
                    const isAvailable = isLessonAvailable(moduleIndex, lessonIndex);
                    const isCompleted = progress?.completedLessons?.includes(
                      lesson.id
                    );

                    return (
                      <ListItem
                        key={lesson.id}
                        sx={{
                          opacity: isAvailable ? 1 : 0.5,
                          transition: 'opacity 0.2s',
                        }}
                      >
                        <ListItemIcon>
                          {isCompleted ? (
                            <CheckCircleIcon color="success" />
                          ) : isAvailable ? (
                            <PlayIcon color="primary" />
                          ) : (
                            <LockIcon />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={lesson.title}
                          secondary={`Длительность: ${lesson.duration}`}
                        />
                        <Button
                          variant="contained"
                          size="small"
                          disabled={!isAvailable}
                        >
                          {isCompleted ? 'Повторить' : 'Начать'}
                        </Button>
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </MuiGrid>

        {/* Боковая панель */}
        <MuiGrid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Прогресс курса
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Общий прогресс
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={
                    (progress?.completedLessons?.length || 0) /
                    course.modules.reduce(
                      (acc, module) => acc + module.lessons.length,
                      0
                    ) *
                    100
                  }
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Box>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PlayIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${course.modules.reduce(
                      (acc, module) => acc + module.lessons.length,
                      0
                    )} уроков`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${
                      progress?.completedLessons?.length || 0
                    } завершено`}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Достижения
              </Typography>
              <List>
                {course.rewards.achievements.map((achievement) => (
                  <ListItem key={achievement}>
                    <ListItemIcon>
                      <TrophyIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={achievement} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </MuiGrid>
      </MuiGrid>
    </Container>
  );
};

export default CourseDetail; 