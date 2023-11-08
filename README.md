# Momentblog
**Экспериментальное домашнее задание**

Проект «Моменты жизни», где можно выкладывать воспоминания в формате фотографий с подписями

[Задания](./tasks/README.md)

## Для запуска react
```bash
cd frontend
npm install
npm start
```
## Для запуска django
```bash
cd django
python -m venv venv
. ./venv/bin/activate
pip install -r requirements.txt
cd momentblog
python manage.py migrate
python manage.py runserver
```