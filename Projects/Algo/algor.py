import requests
key = 'aedf6b1fb173d688b84cb5a333925eab9507907b614f1fd06e46371da0f89ba6'
url = 'https://min-api.cryptocompare.com/data/exchange/symbol/histoday?fsym=BTC&tsym=USD&limit=10&e=Coinbase'
headers = {
    'authorization': f'Apikey {key}',
}
try:
    response = requests.get(url,headers=headers)
    response.raise_for_status()  # Raise an exception for HTTP errors

    data = response.json()
    print(data)

except requests.exceptions.RequestException as err:
    print(f"Error: {err}")
