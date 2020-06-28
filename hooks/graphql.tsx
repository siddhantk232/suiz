import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  getQuiz: QuizSchema;
  getQuestions: Array<QuestionSchema>;
  hello: Scalars['String'];
};


export type QueryGetQuizArgs = {
  id: Scalars['String'];
};


export type QueryGetQuestionsArgs = {
  quizId: Scalars['String'];
};

export type QuizSchema = {
  __typename?: 'QuizSchema';
  id: Scalars['ID'];
  name: Scalars['String'];
  createdBy?: Maybe<UserSchema>;
  clicks: Scalars['Int'];
  attempt: Scalars['Int'];
};

export type UserSchema = {
  __typename?: 'UserSchema';
  name: Scalars['String'];
  id: Scalars['ID'];
  email: Scalars['String'];
  imageUrl: Scalars['String'];
};

export type QuestionSchema = {
  __typename?: 'QuestionSchema';
  id: Scalars['ID'];
  quizId: Scalars['String'];
  question: Scalars['String'];
  type: QuestionType;
  options?: Maybe<Array<IOption>>;
  answer?: Maybe<Scalars['String']>;
};

/** Available question types */
export enum QuestionType {
  Multiplechoice = 'MULTIPLECHOICE',
  Plain = 'PLAIN',
  Oneword = 'ONEWORD',
  Truefalse = 'TRUEFALSE'
}

export type IOption = {
  __typename?: 'IOption';
  title: Scalars['String'];
  isCorrect?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createQuiz: CreateQuizOutput;
  createQuestion: QuestionSchema;
  deleteQuiz: Scalars['Boolean'];
  deleteQuestion: Scalars['Boolean'];
};


export type MutationCreateQuizArgs = {
  name: Scalars['String'];
};


export type MutationCreateQuestionArgs = {
  options?: Maybe<Array<OptionInput>>;
  answer?: Maybe<Scalars['String']>;
  quizId: Scalars['String'];
  type: QuestionType;
  question: Scalars['String'];
};


export type MutationDeleteQuizArgs = {
  id: Scalars['String'];
};


export type MutationDeleteQuestionArgs = {
  id: Scalars['String'];
};

export type CreateQuizOutput = {
  __typename?: 'CreateQuizOutput';
  id: Scalars['ID'];
  name: Scalars['String'];
  clicks: Scalars['Int'];
  attempt: Scalars['Int'];
};

export type OptionInput = {
  title: Scalars['String'];
  isCorrect?: Maybe<Scalars['Boolean']>;
};

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);


export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        return ApolloReactHooks.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
      }
export function useHelloLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = ApolloReactCommon.QueryResult<HelloQuery, HelloQueryVariables>;