import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container, CircularProgress } from '@mui/material';
import theme from './styles/theme';
import Navigation from './components/Navigation';

// Lazy loading для страниц
import React, { Suspense } from 'react';
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Courses = React.lazy(() => import('./pages/Courses'));
const Profile = React.lazy(() => import('./pages/Profile'));
const CourseDetail = React.lazy(() => import('./pages/CourseDetail'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Suspense fallback={
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
          <CircularProgress />
        </Container>
      }>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
