from django.http import HttpResponse


def test(request):
    return HttpResponse('Hello, welcome to the index page.')
