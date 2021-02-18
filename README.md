![Juliano Costa](https://raw.githubusercontent.com/julianojcs/julianojcs.github.io/master/apfjuliano.dev.png)

# API GraphQL, Apollo Server, NodeJS, MongoDB and Mongoose

A simple GraphQL end-point API made with NodeJS (Apollo-server, Express) and MongoDB (Mongoose)

## Config

* Clone the project:

```
1. git clone https://github.com/julianojcs/GraphQL-NodeJS-MongoDB.git
2. cd GraphQL-NodeJS-MongoDB
```

* Install the dependencies:

```
3. npm install
```

* Seting the server up:

```
4. npm start
```

Open the url [http://localhost:4000/](http://localhost:4000/) to make the tests requests:

Test Queries at GraphQL's playground:

Query examples:

# Create a new Cat
```
mutation {
    createCat(name: "Lili") {
        id
        name
    }
}
mutation {
    createCat(name: "Marypop") {
        id
        name
    }
}
```
# Find a especific Cat by his name
```
Query {
    cat(name: "Lili"){
        name id
    }
}
```
# Find all Cats
```
Query {
    cats{
        name id
    }
}
```