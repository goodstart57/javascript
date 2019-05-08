from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Memo
from .serializers import MemoSerializer, MemoAllSerializer


@api_view(('GET', 'POST', 'DELETE'))
def memos(request):
    if request.method == 'POST':
        memo_serializer = MemoSerializer(data=request.data, many=False)
        if memo_serializer.is_valid(raise_exception=True):
            memo_serializer.save()
            return Response(memo_serializer.data)
        return Response({'message': '잘못된 입력입니다.'})
    elif request.method == 'GET':
        memos = Memo.objects.all()
        memo_all_serializer = MemoAllSerializer(memos, many=True)
        print(memo_all_serializer.data)
        return Response(memo_all_serializer.data)
    elif request.method == 'DELETE':
        print(request)
        print(request.data)
        print(request.POST)
