### Для запуска:

```shell
python manage.py runserver
```

### Для первого запуска:

Создать файл .env с переменными:

```
SECRET_KEY="..."
```

Выполнить:

```shell
python manage.py collectstatic
python manage.py migrate 
python manage.py runserver
```