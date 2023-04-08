import { hello as helloHandler } from "../src/handler";
import lambda from "aws-lambda";

describe("Test /hello", () => {
  test("Basic handler working", async () => {
    let event = {};
    let response = helloHandler(event as lambda.APIGatewayEvent);

    expect(response).toMatchSnapshot();
  });
});
