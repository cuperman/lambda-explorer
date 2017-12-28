# lambda-explorer

## Installing Dependencies

```bash
npm install
```

## Building & Deploying

```bash
npm run build
npm run deploy
```

Log on to AWS, and add the authorizer to the API:

1. Authorizers > Create New Authorizer
2. Fill in the form:
	* Name: ApiGatewayAuthorizer
	* Type: Lambda
	* Lambda Function: lambda-explorer-ExploreApiGatewayAuthorizer-WHATEVER
	* Lambda Event Payload: Token
	* Token Source: Authorization
	* Authorization Caching: Disabled
	* TTL: 0
3. Resources > GET > Method Request
	* Set Authorization to ApiGatewayAuthorizer
4. Deploy the API

## Testing

```bash
curl -H "Authorization: foo" -X GET https://whatever.execute-api.us-west-1.amazonaws.com/Prod
```

## TODO

* Update the template.yml to automate the deployment of the authorizer

