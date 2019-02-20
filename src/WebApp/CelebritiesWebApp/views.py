from django.shortcuts import render
from django.http.response import HttpResponse
import urllib
import requests, json

# Create your views here.

def celebrity(request):
    return render(request, "CelebritiesWebApp/Celebrity.html")

def GetCelebrityId(request):
    name = request.GET['CelebrityName']
    CelebrityImageUrl = GetImageUrl(name)
    return HttpResponse(CelebrityImageUrl)

def GetCelebrityImages(request):
    name = request.GET['CelebrityName']
    print(request)
    print(name)
    CelebrityImageUrl = GetImageUrl(name)
    return HttpResponse(CelebrityImageUrl)

def GetImageUrl(celebrityName):
    imageUrls = [];
    subscriptionKey = "b1cc9c07091c4ee5801af2d3ca847a8c";
    uriBase = "https://api.cognitive.microsoft.com/bing/v7.0/images/search";
    uriQuery = uriBase + "?q=" + urllib.parse.quote(celebrityName);
    headers = {"Ocp-Apim-Subscription-Key": subscriptionKey}
    responseJson = json.loads(requests.get(uriQuery, headers = headers).text)    
    for celebrity in responseJson["value"]:
        imageUrls.append(celebrity["contentUrl"])
    return imageUrls
    