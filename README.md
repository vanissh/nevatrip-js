# Тестовое задание
## 1. Время из A в B
### ТЗ: 

+ Известно расписание отправления теплохода по московскому времени (GMT+3)
+ "из A в B" и "из B в A" стоимость одного билета 700р.
+ "из A в B и обратно в А" стоимость составного билета 1200р
+ Время пути в одну сторону 50 минут.

### Задача. 

+ Сделать страницу (дизайн не имеет значения) на которой пользователь выбрав направление, 
  время и количество билетов сможет посчитать итоговые значения: 
  + общую стоимость 
  + время в пути

+ Время показываем в часовом поясе пользователя
+ Если выбрано время "из A в B и обратно в А", то должен показаться дополнительный селект, 
  в котором можно будет выбрать обратное время. Обратите внимание, что время не должно пересекаться. 
+ При клике на кнопку "Посчитать" показать результат с направлением, временем в пути, временем отправления 
  и временем прибытия в часовом поясе пользователя. 
  
### Стек технологий 
+ webpack, webpack-dev-server
+ html, css
+ tailwind

### Инструкция по запуску

Установка зависимостей
```
npm i
```

Запуск приложения
```
npx webpack serve
```
