from rest_framework import routers
from .views import NoteViewSet

router = routers.DefaultRouter()
router.register('', NoteViewSet)

urlpatterns = router.urls

