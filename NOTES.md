# Serverless

Service Information

- service: notes-api
- stage: prod
- region: us-east-1
- stack: notes-api-prod
- api keys:
  - None
- endpoints:
  - POST - https://knzs5vrn96.execute-api.us-east-1.amazonaws.com/prod/notes
  - GET - https://knzs5vrn96.execute-api.us-east-1.amazonaws.com/prod/notes/{id}
  - GET - https://knzs5vrn96.execute-api.us-east-1.amazonaws.com/prod/notes
  - POST - https://knzs5vrn96.execute-api.us-east-1.amazonaws.com/prod/notes/{id}
  - DELETE - https://knzs5vrn96.execute-api.us-east-1.amazonaws.com/prod/notes/{id}
  - POST - https://knzs5vrn96.execute-api.us-east-1.amazonaws.com/prod/billing
- functions:
  - create: notes-api-prod-create
  - get: notes-api-prod-get
  - query: notes-api-prod-query
  - update: notes-api-prod-update
  - delete: notes-api-prod-delete
  - billing: notes-api-prod-billing
