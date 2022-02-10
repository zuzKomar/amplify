// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Author, Article } = initSchema(schema);

export {
  Author,
  Article
};