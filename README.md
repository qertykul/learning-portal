# Learning Portal

[![Deploy to GitHub Pages](https://github.com/qertykul/learning-portal/actions/workflows/deploy.yml/badge.svg)](https://github.com/qertykul/learning-portal/actions/workflows/deploy.yml)

Геймифицированная образовательная платформа, разработанная с использованием React, TypeScript и Material-UI.

## Особенности

- 🎮 Система геймификации с уровнями и достижениями
- 📚 Интерактивные курсы с прогрессом обучения
- 🎨 Современный Material Design интерфейс
- 📱 Адаптивный дизайн для всех устройств
- 🔄 Автоматическое отслеживание прогресса
- 🏆 Система наград и достижений

## Технологии

- React 18
- TypeScript
- Redux Toolkit
- Material-UI
- Vite
- React Router

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/qertykul/learning-portal.git
cd learning-portal
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите проект:
```bash
npm run dev
```

## Структура проекта

```
src/
├── components/       # Переиспользуемые компоненты
├── features/         # Redux слайсы и store
├── pages/           # Страницы приложения
├── styles/          # Глобальные стили и тема
└── App.tsx          # Корневой компонент
```

## Доступные скрипты

- `npm run dev` - Запуск в режиме разработки
- `npm run build` - Сборка проекта
- `npm run preview` - Предпросмотр собранного проекта
- `npm run lint` - Проверка кода линтером

## Деплой

Проект автоматически деплоится на GitHub Pages при пуше в ветку `main`. Вы можете посмотреть живую версию здесь:
https://qertykul.github.io/learning-portal/

## Лицензия

MIT
