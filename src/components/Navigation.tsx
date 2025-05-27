import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Box,
  LinearProgress,
} from '@mui/material';
import {
  Menu as MenuIcon,
  School as SchoolIcon,
} from '@mui/icons-material';
import type { RootState } from '../features/store';

interface UserState {
  username: string;
  level: number;
  experience: number;
  isAuthenticated: boolean;
}

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const user = useSelector((state: RootState) => state.user as UserState);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    handleClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => handleNavigate('/')}
        >
          <SchoolIcon />
        </IconButton>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Учебный портал
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {user.isAuthenticated ? (
            <>
              <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  Уровень {user.level}
                </Typography>
                <Box sx={{ width: 100 }}>
                  <LinearProgress
                    variant="determinate"
                    value={(user.experience % 1000) / 10}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
              </Box>
              
              <Button
                color="inherit"
                onClick={() => handleNavigate('/courses')}
                sx={{ mr: 1 }}
              >
                Курсы
              </Button>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar sx={{ width: 32, height: 32 }}>
                  {user.username[0]?.toUpperCase()}
                </Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleNavigate('/profile')}>
                  Профиль
                </MenuItem>
                <MenuItem onClick={() => handleNavigate('/settings')}>
                  Настройки
                </MenuItem>
                <MenuItem onClick={() => handleNavigate('/logout')}>
                  Выйти
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                onClick={() => handleNavigate('/login')}
                sx={{ mr: 1 }}
              >
                Войти
              </Button>
              <Button
                color="inherit"
                variant="outlined"
                onClick={() => handleNavigate('/register')}
              >
                Регистрация
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation; 