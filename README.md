 graphql-fastify-service1
Intial level setup for graphql using the fastify server

## Run application using following comment
```
npm install 
```
```
npm run start
```
Current running port is 3005

Using the path will render the graphql-playground
``
http://localhost:3005/graphiql
``

## sample query 
```
{
  course(id: 3){
    id
    title
    author
    description
    topic
    url
  }
}
```
### expected output
```
{
  "data": {
    "course": {
      "id": 3,
      "title": "JavaScript: Understanding The Weird Parts",
      "author": "Anthony Alicea",
      "description": "An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.",
      "topic": "JavaScript",
      "url": "https://codingthesmartway.com/courses/understand-javascript/"
    }
}   
```
