"use strict";
import lambda from "aws-lambda";

function lambdaResponse(statusCode: number, body: any) {
  return { statusCode, body: JSON.stringify(body) };
}

export async function hello(event: lambda.APIGatewayEvent) {
  return lambdaResponse(200, { result: "OK", event });
}
