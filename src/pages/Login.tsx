import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from '@mui/material';
import { setUser } from '../features/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNavigate = (path: string) => {
    const trimmedPath = path.replace(/^\//, '');
    navigate(trimmedPath ? `/${trimmedPath}` : '/');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь был бы запрос к API
    dispatch(setUser({
      id: '1',
      username: 'Студент',
      email: email,
      level: 1,
      experience: 0,
      achievements: []
    }));
    handleNavigate('/courses');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Вход в систему
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Войти
            </Button>
            <Button
              fullWidth
              variant="text"
              onClick={() => handleNavigate('/register')}
            >
              Нет аккаунта? Зарегистрируйтесь
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login; 