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
Приложение откроется по ссылке http://localhost:3001/


## 2. Таблица билетов на событие

При решении этой задачи я рассуждала с той точки зрения, что база данных должна масштабироваться, поэтому имеет смысл хранить данные в нескольких связанных таблицах. 

### Вопрос 1. 

Я обратила внимание на строку "Имеется информация, что вероятно, будут другие типы билетов, которые нужно будет добавить" и сделала вывод, что хранить большое количество типов билетов в исходной таблице будет неудобно. Поэтому можно создать отдельную таблицу для типов: 

<img width="289" alt="изображение" src="https://user-images.githubusercontent.com/74718352/194723434-3c1fb319-d1aa-419d-9fae-f7cd1a721d4d.png">

Информация о билетах будет храниться в таблице ticket_info, где type_id - это id из первой таблицы

<img width="471" alt="изображение" src="https://user-images.githubusercontent.com/74718352/194723523-7a4c3467-98d1-4441-84ff-87720bd4c5ba.png">

### Вопрос 2. 

Создаем отдельную таблицу для билетов, где у каждого билета есть свой баркод. ticket_id берем из таблицы ticket_info, там же хранится информация о цене и типе билета

<img width="617" alt="изображение" src="https://user-images.githubusercontent.com/74718352/194723589-f70ce983-3abe-49aa-b12c-6beb8ad09d71.png">

В итоге конечный вид исходной таблицы будет таким. По id из поля user_id можно получить информацию о всех билетах пользователя, в том числе все баркоды, из таблицы user_order. 

<img width="694" alt="изображение" src="https://user-images.githubusercontent.com/74718352/194723697-dae6986c-f5b3-470e-b582-fe0996a3068e.png">




