import { Handler, Context, Callback } from 'aws-lambda';

interface HelloResponse {
  statusCode: number;
  body: string;
  event: any;
}

const hello: Handler = (event: any, context: Context, callback: Callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  console.log('hello user: event', event);
  console.log('hello user: context', context);

  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: Math.floor(Math.random() * 10)
    }),
    event
  };
  
  console.log('hello user: response', response);
  
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
  callback(undefined, response);
};

export { hello }