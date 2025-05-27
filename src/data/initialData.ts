import type { Course } from '../features/coursesSlice';

export const initialCourses: Course[] = [
  {
    id: '1',
    title: 'Основы программирования',
    description: 'Изучите базовые концепции программирования и алгоритмы. Этот курс поможет вам заложить прочный фундамент для дальнейшего развития в программировании.',
    imageUrl: '/course-images/programming-basics.jpg',
    difficulty: 'beginner',
    duration: '6 часов',
    modules: [
      {
        id: 'module-1',
        title: 'Введение в программирование',
        content: 'Узнайте, что такое программирование и как работают компьютерные программы.',
        lessons: [
          {
            id: 'lesson-1',
            title: 'Что такое программирование?',
            duration: '30 минут',
            completed: false,
            locked: false,
          },
          {
            id: 'lesson-2',
            title: 'Основные концепции',
            duration: '45 минут',
            completed: false,
            locked: true,
          },
        ],
        quizzes: [
          {
            id: 'quiz-1',
            questions: [
              {
                id: 'q1',
                text: 'Что такое алгоритм?',
                options: [
                  'Набор случайных команд',
                  'Последовательность шагов для решения задачи',
                  'Компьютерная программа',
                  'Математическая формула',
                ],
                correctAnswer: 1,
              },
            ],
          },
        ],
      },
    ],
    rewards: {
      experience: 1000,
      achievements: [
        'Первые шаги в программировании',
        'Мастер алгоритмов',
        'Решатель задач',
      ],
    },
  },
  {
    id: '2',
    title: 'Web-разработка',
    description: 'HTML, CSS и JavaScript для создания современных веб-приложений. Научитесь создавать красивые и интерактивные веб-сайты.',
    imageUrl: '/course-images/web-dev.jpg',
    difficulty: 'intermediate',
    duration: '8 часов',
    modules: [
      {
        id: 'module-1',
        title: 'Основы HTML',
        content: 'Изучите структуру HTML-документа и основные теги.',
        lessons: [
          {
            id: 'lesson-1',
            title: 'Введение в HTML',
            duration: '40 минут',
            completed: false,
            locked: false,
          },
          {
            id: 'lesson-2',
            title: 'Работа с текстом и ссылками',
            duration: '35 минут',
            completed: false,
            locked: true,
          },
        ],
        quizzes: [
          {
            id: 'quiz-1',
            questions: [
              {
                id: 'q1',
                text: 'Какой тег используется для создания заголовка первого уровня?',
                options: ['<header>', '<h1>', '<title>', '<main>'],
                correctAnswer: 1,
              },
            ],
          },
        ],
      },
    ],
    rewards: {
      experience: 1500,
      achievements: [
        'Верстальщик',
        'CSS-мастер',
        'JavaScript-гуру',
      ],
    },
  },
  {
    id: '3',
    title: 'Продвинутые алгоритмы',
    description: 'Изучите сложные алгоритмы и структуры данных. Подготовьтесь к техническим собеседованиям в ведущие компании.',
    imageUrl: '/course-images/algorithms.jpg',
    difficulty: 'advanced',
    duration: '10 часов',
    modules: [
      {
        id: 'module-1',
        title: 'Сложность алгоритмов',
        content: 'Изучите O-нотацию и научитесь анализировать эффективность алгоритмов.',
        lessons: [
          {
            id: 'lesson-1',
            title: 'Введение в анализ сложности',
            duration: '45 минут',
            completed: false,
            locked: false,
          },
          {
            id: 'lesson-2',
            title: 'O-нотация на практике',
            duration: '50 минут',
            completed: false,
            locked: true,
          },
        ],
        quizzes: [
          {
            id: 'quiz-1',
            questions: [
              {
                id: 'q1',
                text: 'Какая сложность у бинарного поиска?',
                options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
                correctAnswer: 2,
              },
            ],
          },
        ],
      },
    ],
    rewards: {
      experience: 2000,
      achievements: [
        'Алгоритмический гений',
        'Мастер оптимизации',
        'Покоритель Big O',
      ],
    },
  },
];

export const initialUser = {
  id: '1',
  username: 'student',
  email: 'student@example.com',
  experience: 0,
  level: 1,
  achievements: [],
  isAuthenticated: true
};

export const initialProgress = {
  coursesProgress: {},
  totalTimeSpent: 0,
  streakDays: 0,
  lastLoginDate: null
}; 