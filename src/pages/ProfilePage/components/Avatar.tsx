import React from 'react';
import Avatar from '@mui/material/Avatar';

// Функция для генерации цвета на основе строки
function stringToColor(string: string): string {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

// Функция для создания аватара
function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

// Определяем интерфейс для пропсов
interface CustomAvatarProps {
  name: string;
  size: number;
}

// Компонент для аватарки
export const CustomAvatar: React.FC<CustomAvatarProps> = ({ name, size }) => {
  return (
    <Avatar
      {...stringAvatar(name)}
      sx={{ width: size, height: size }} // Задаем размер аватарки
    />
  );
};

// Компонент для профиля
const Profile: React.FC = () => {
  return (
    <main>
      <CustomAvatar name="Иванов Иван" size={78} /> {/* 78x78 пикселей для профиля */}
    </main>
  );
};


export default Profile;