from django.http import Http404
from django.shortcuts import render
import requests


rest_api_url = 'https://jsonplaceholder.typicode.com'

# POSTS VIEW ENDPOINT
def posts(request):
    context = {}
    response = requests.get(rest_api_url + '/posts')
    if response.ok:
        data = response.json()
        context['object_list'] = data
    return render(request, 'blog-listing.html', context)


# POST DETAILS VIEW ENDPOINT
def post_details(request, post_id):
    context = {}
    response = requests.get(rest_api_url + f'/posts/{post_id}')
    if response.status_code == 404:
        raise Http404
    if response.ok:
        data = response.json()
        context['object'] = data
        comment_res = requests.get(rest_api_url + f'/posts/{post_id}/comments')
        if comment_res.ok:
            context['comments'] = comment_res.json()

    return render(request, 'blog-post.html', context)