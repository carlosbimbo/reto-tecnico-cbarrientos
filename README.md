
API de prueba SWAPI 2021:

https://swapi.py4e.com/documentation


# DEV 
aplicar derehos de ejcucion de script maquina local en windows :
Set-ExecutionPolicy -Scope CurrentUser unrestricted
npm install -g serverless@latest
serverless
serverless config credentials --provider provider --key key --secret secret
serverless deploy

Service Information
service: reto-tecnico2021
stage: dev
region: us-east-1
stack: reto-tecnico2021-dev
resources: 18
api keys:
  None
endpoints:
  POST - https://hh799191vh.execute-api.us-east-1.amazonaws.com/dev/sw/create
  GET - https://hh799191vh.execute-api.us-east-1.amazonaws.com/dev/sw/read
functions:
  sw_create: reto-tecnico2021-dev-sw_create
  sw_read: reto-tecnico2021-dev-sw_read
layers:
  None
  
cd .\reto-tecnico2021\
serverless invoke local --function sw_read --path samples/sw_read.json