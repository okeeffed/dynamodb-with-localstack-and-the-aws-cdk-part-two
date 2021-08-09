# DynamoDB With LocalStack and the AWS CDK

This is the companion repo for the blog post ["DynamoDB With LocalStack and the AWS CDK Part Two"](https://blog.dennisokeeffe.com/blog/2021-08-10-dynamodb-with-localstack-and-the-aws-cdk-part-two)

It follows from the ["DynamoDB With LocalStack and the AWS CDK Part One"](https://blog.dennisokeeffe.com/blog/2021-08-09-dynamodb-with-localstack-and-the-aws-cdk).

It will create a DynamoDB table and tear that table down when destroyed.

## Useful commands

| Command         | Description                                          |
| --------------- | ---------------------------------------------------- |
| `npm run build` | Compile TypeScript to JavaScript                     |
| `npm run watch` | Watch for changes and compile                        |
| `npm run test`  | Perform the Jest unit tests                          |
| `cdk deploy`    | Deploy this stack to your default AWS account/region |
| `cdk diff`      | Compare deployed stack with current state            |
| `cdk synth`     | Emits the synthesized CloudFormation template        |
| `cdk destroy`   | Tear down your deployed stack                        |
