import logging
import os

from django.conf import settings
from django.http import Http404, HttpResponse
from django.shortcuts import render
import requests
from django.views.generic import View

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


class ReactFrontendView(View):
    """
    Serves the compiled frontend entry point (only works if you have run `yarn
    build`).
    """
    index_file_path = os.path.join(settings.REACT_APP_PATH, 'build', 'index.html')

    def get(self, request):
        try:
            with open(self.index_file_path) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(
                """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead after
                running `yarn start` on the frontend/ directory
                """,
                status=501,
            )