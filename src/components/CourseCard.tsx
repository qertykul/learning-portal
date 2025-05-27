import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  LinearProgress,
  Button,
} from '@mui/material';
import { Star as StarIcon, Lock as LockIcon } from '@mui/icons-material';
import type { Course } from '../features/coursesSlice';

interface CourseCardProps {
  course: Course;
  progress: number;
  isLocked: boolean;
  requiredLevel?: number;
  onCourseClick: (courseId: string) => void;
}

const difficultyColors = {
  beginner: '#4CAF50',
  intermediate: '#FF9800',
  advanced: '#F44336',
};

const CourseCard: React.FC<CourseCardProps> = ({
  course,
  progress,
  isLocked,
  requiredLevel,
  onCourseClick,
}) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 345,
        position: 'relative',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Typography gutterBottom variant="h6" component="div" sx={{ mb: 0 }}>
            {course.title}
          </Typography>
          <Chip
            label={`+${course.rewards.experience} XP`}
            size="small"
            icon={<StarIcon sx={{ fontSize: 16 }} />}
            sx={{ backgroundColor: '#FFD700', color: '#000' }}
          />
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {course.description}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Chip
            label={course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
            size="small"
            sx={{ backgroundColor: difficultyColors[course.difficulty], color: '#fff' }}
          />
          {progress > 0 && (
            <Typography variant="body2" color="text.secondary">
              {progress}% завершено
            </Typography>
          )}
        </Box>

        {progress > 0 && (
          <Box sx={{ width: '100%', mb: 2 }}>
            <LinearProgress 
              variant="determinate" 
              value={progress} 
              sx={{ 
                height: 8, 
                borderRadius: 4,
                backgroundColor: '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#4CAF50',
                },
              }} 
            />
          </Box>
        )}

        <Button
          variant="contained"
          fullWidth
          disabled={isLocked}
          onClick={() => onCourseClick(course.id)}
          startIcon={isLocked ? <LockIcon /> : null}
          sx={{ mt: 1 }}
        >
          {isLocked ? `Требуется уровень ${requiredLevel}` : 'Начать обучение'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard; 