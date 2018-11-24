import {
  APIGatewayProxyEvent,
  APIGatewayProxyCallback
  // @ts-ignore
} from '@types/aws-lambda'

exports.handler = async (
  event: APIGatewayProxyEvent,
  context: any,
  callback: APIGatewayProxyCallback
) => {
  callback(null, {
    statusCode: 200,
    body: ''
  })
}
