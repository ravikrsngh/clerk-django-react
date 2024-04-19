from rest_framework import viewsets
from rest_framework.response import Response
from permissions.clerk import ClerkAuthenticated

post_data = [
    {
        "id": 1,
        "title": "Travelling to Dubai",
        "description": "It was an amazing trip"
    }
]

class PostViewset(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """
    permission_classes = [ClerkAuthenticated]
    def list(self, request):
        return Response(post_data)