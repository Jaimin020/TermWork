from django.conf.urls import url
from onlineshoppingapp import views
urlpatterns = [
	url(r'^onlineshoppingapp/$', views.HomePageView.as_view()),
	url(r'index',views.index),
	url(r'iphonex1.html', views.HomePageView1.as_view()),
	url(r'cart.html', views.HomePageView2.as_view()),
	url(r'^select', views.select),
]