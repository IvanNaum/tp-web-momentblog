from django.contrib import admin

from blog.models import (
    Moment, Comment, Subscription, CommentLike, MomentLike, Tag
)

admin.site.register(Moment)
admin.site.register(Comment)
admin.site.register(Subscription)
admin.site.register(CommentLike)
admin.site.register(MomentLike)
admin.site.register(Tag)
