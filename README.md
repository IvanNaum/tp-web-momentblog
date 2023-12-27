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

## Для Postgres
```bash
psql postgres
CREATE USER user_pg WITH 'pass_pg';
CREATE DATABASE momentblog;
GRANT ALL PRIVILEGES ON DATABASE momentblog to user_pg;
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

## Для dump
1. [Скачать данные](https://drive.google.com/drive/folders/1Hvc9s-vg2BO0BIPbrFGcQZJktJSmEmTn?usp=sharing)
1. ```psql -U user_pg momentblog < dbexport.pgsql```
