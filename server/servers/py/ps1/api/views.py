from django.shortcuts import render
# 
from django.conf import settings
# 
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status

# from .models import ()

from .serializers import (getPricingSerializer as gps,
                          getTestimonialSerializer as gts,
                          getFAQSerializer as gfs,
                          getBlogSerializer as gbs,
                          calculatorSerializer as cs,
                          recentActivitiesSerializer as ras,
                          )

# Create your views here.
# data = request.query_params
# permission_classes = [permissions.IsAuthenticated]


class getPricingView(APIView):
    def get(self, request):
        res = gps.getPricingHome()
        return Response(res.data, status=status.HTTP_200_OK)


class getSubPlanView(APIView):
    def post(self, request):
        data = request.data
        res = gps.getSubPlanHome(data)
        return Response(res.data, status=status.HTTP_200_OK)


class getTestimonialView(APIView):
    def get(self, request):
        res = gts.getTestimonialHome(request)
        return Response(res.data, status=status.HTTP_200_OK)


class getFAQView(APIView):
    def post(self, request):
        size = request.data['len']
        res = gfs.getFAQHome(size)
        return Response(res.data, status=status.HTTP_200_OK)


class getBlogView(APIView):
    def post(self, request):
        size = int(request.data['len'])
        res = gbs.getBlogHome(request, size)
        return Response(res.data, status=status.HTTP_200_OK)


class getAllBlogView(APIView):
    def post(self, request):
        page = int(request.data['len'])
        res = gbs.getAllBlogHome(request, page)
        return Response(res.data, status=status.HTTP_200_OK)


class calculatorView(APIView):
    def post(self, request):
        data = request.data
        res = cs.calculatorHome(data)
        return Response(res.data, status=status.HTTP_200_OK)


class recentActivitiesView(APIView):
    def post(self, request):
        data = request.data
        res = ras.create(data)
        return Response(res.data, status=status.HTTP_200_OK)