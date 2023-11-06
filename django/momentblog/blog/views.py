from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def test(request):
    data = {
        "test": "test text"
    }
    return Response(data)
