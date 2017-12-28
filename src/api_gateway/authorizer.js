'use strict';

exports.handler = (event, context, callback) => {
  callback(null, {
    principalId: 'principalId',
    policyDocument: {
      Version: '2012-10-17',
      Statement: [{
        Action: 'execute-api:Invoke',
        Effect: 'Allow',
        Resource: event.methodArn
      }]
    },
    context: {
      event: JSON.stringify(event),
      context: JSON.stringify(context)
    }
  });
};
