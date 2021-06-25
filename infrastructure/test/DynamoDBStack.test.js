import { expect, haveResource } from '@aws-cdk/assert';
import * as sst from '@serverless-stack/resources';
import DynamoDBStack from '../lib/DynamoDBStack';

test('Test Stack', () => {
  const app = new sst.App();

  const stack = new DynamoDBStack(app, 'test-stack');

  expect(stack).to(
    haveResource('AWS::DynamoDB::Table', {
      BillingMode: 'PAY_PER_REQUEST',
    }),
  );
  expect(stack).to(
    haveResource('AWS::DynamoDB::Table', {
      KeySchema: [
        {
          AttributeName: 'userId',
          KeyType: 'HASH',
        },
        {
          AttributeName: 'noteId',
          KeyType: 'RANGE',
        },
      ],
    }),
  );
  expect(stack).to(
    haveResource('AWS::DynamoDB::Table', {
      AttributeDefinitions: [
        {
          AttributeName: 'userId',
          AttributeType: 'S',
        },
        {
          AttributeName: 'noteId',
          AttributeType: 'S',
        },
      ],
    }),
  );
});
