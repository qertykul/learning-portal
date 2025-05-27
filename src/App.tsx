import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme';
import Navigation from './components/Navigation';

// Lazy loading для страниц
import React, { Suspense } from 'react';
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Courses = React.lazy(() => import('./pages/Courses'));
const Profile = React.lazy(() => import('./pages/Profile'));
const CourseDetail = React.lazy(() => import('./pages/CourseDetail'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Suspense fallback={
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh' 
        }}>
          Загрузка...
        </div>
      }>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
