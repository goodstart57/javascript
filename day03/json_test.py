import requests

url = "https://jsonplaceholder.typicode.com/"

response = requests.get(url + 'posts')
result = response.json()
print(result[0].title)