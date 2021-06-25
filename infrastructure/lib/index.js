import CognitoStack from './CognitoStack';
import DynamoDBStack from './DynamoDBStack';
import S3Stack from './S3Stack';

export default function main(app) {
  new DynamoDBStack(app, 'dynamodb');

  new S3Stack(app, 's3');

  new CognitoStack(app, 'cognito');
}
