 graphql-apollo-service2
Intial level setup for graphql using the fastify server

## Run application using following comment
```
npm install 
```
```
npm run start
```
Current running port is 3004

Using the path will render the graphql-playground
``
http://localhost:3004
``

## sample query 
paste inside  Operation area on playground 
```
query ($place: String!) {
  location(place: $place) {
    city
    country
    latitude
    longitude
    place
  }
}

```
## Inside Variables 
set place param value inside Variables
```
{
  "place": "Selaiyur"
}
```
### expected output
```
{
  "data": {
    "location": [
      {
        "city": "Chennai",
        "country": "india",
        "latitude": "3.0988732298",
        "longitude": "0.328724",
        "place": "Selaiyur"
      }
    ]
  }
}  
```
