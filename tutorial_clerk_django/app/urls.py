from rest_framework import routers
from .api import PostViewset

router = routers.SimpleRouter()
router.register(r'posts', PostViewset, basename="posts")

urlpatterns = router.urls
