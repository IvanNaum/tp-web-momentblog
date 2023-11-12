from rest_framework.pagination import PageNumberPagination

MOMENT_LIST_SIZE = 45


class MomentPagination(PageNumberPagination):
    page_size = MOMENT_LIST_SIZE
    page_size_query_param = "page_size"
