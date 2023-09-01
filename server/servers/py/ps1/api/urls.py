from django.urls import path
from .views import (getPricingView,
                    getTestimonialView,
                    getFAQView, getBlogView,
                    calculatorView, getSubPlanView,
                    getAllBlogView,
                    )

urlpatterns = [
    path('get-pricing', getPricingView.as_view()),
    path('get-testimonial', getTestimonialView.as_view()),
    path('get-faqs', getFAQView.as_view()),
    path('get-blog', getBlogView.as_view()),
    path('get-all-blog', getAllBlogView.as_view()),
    path('get-subplans', getSubPlanView.as_view()),
    path('calculator', calculatorView.as_view()),
]
