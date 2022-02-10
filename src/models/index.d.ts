import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AuthorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ArticleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Author {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly Articles?: (Article | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Author, AuthorMetaData>);
  static copyOf(source: Author, mutator: (draft: MutableModel<Author, AuthorMetaData>) => MutableModel<Author, AuthorMetaData> | void): Author;
}

export declare class Article {
  readonly id: string;
  readonly title: string;
  readonly teaser: string;
  readonly tags?: string;
  readonly content: string;
  readonly authorID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Article, ArticleMetaData>);
  static copyOf(source: Article, mutator: (draft: MutableModel<Article, ArticleMetaData>) => MutableModel<Article, ArticleMetaData> | void): Article;
}