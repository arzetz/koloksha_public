# Используем официальное изображение Node.js
FROM node:21.1.0

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем все зависимости из package.json
RUN npm install