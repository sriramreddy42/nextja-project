from django.urls import path
from . import views

urlpatterns = [
    path('charts/candlestick/', views.candlestick_data, name='candlestick_data'),
    path('charts/line/', views.line_chart_data, name='line_chart_data'),
    path('charts/bar/', views.bar_chart_data, name='bar_chart_data'),
    path('charts/pie/', views.pie_chart_data, name='pie_chart_data'),
]
