import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type UserInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  imageUrl: Scalars['String'];
};

export type InputQuestion = {
  question: Scalars['String'];
  options: Array<Scalars['String']>;
  answer: Scalars['String'];
  time: Scalars['Int'];
};

export type QuizInput = {
  name?: Maybe<Scalars['String']>;
  questions?: Maybe<Array<Maybe<InputQuestion>>>;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  imageUrl: Scalars['String'];
  email: Scalars['String'];
  token: Scalars['String'];
};

export type Question = {
   __typename?: 'Question';
  question: Scalars['String'];
  options: Array<Scalars['String']>;
  answer: Scalars['String'];
  time: Scalars['Int'];
};

export type Quiz = {
   __typename?: 'Quiz';
  id: Scalars['ID'];
  name: Scalars['String'];
  questions: Array<Question>;
  createdBy: User;
};

export type Query = {
   __typename?: 'Query';
  quizzes: Array<Maybe<Quiz>>;
};

export type Mutation = {
   __typename?: 'Mutation';
  createUser: User;
  createQuiz: Quiz;
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  imageUrl: Scalars['String'];
};


export type MutationCreateQuizArgs = {
  input: QuizInput;
};

export type CreateUserMutationVariables = {
  email: Scalars['String'];
  name: Scalars['String'];
  imageUrl: Scalars['String'];
};


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'name' | 'email' | 'imageUrl'>
  ) }
);

export type QuizzesQueryVariables = {};


export type QuizzesQuery = (
  { __typename?: 'Query' }
  & { quizzes: Array<Maybe<(
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'name'>
    & { questions: Array<(
      { __typename?: 'Question' }
      & Pick<Question, 'question' | 'answer' | 'options'>
    )> }
  )>> }
);


export const CreateUserDocument = gql`
    mutation CreateUser($email: String!, $name: String!, $imageUrl: String!) {
  createUser(name: $name, email: $email, imageUrl: $imageUrl) {
    name
    email
    imageUrl
  }
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      imageUrl: // value for 'imageUrl'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const QuizzesDocument = gql`
    query Quizzes {
  quizzes {
    name
    questions {
      question
      answer
      options
    }
  }
}
    `;

/**
 * __useQuizzesQuery__
 *
 * To run a query within a React component, call `useQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuizzesQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuizzesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<QuizzesQuery, QuizzesQueryVariables>) {
        return ApolloReactHooks.useQuery<QuizzesQuery, QuizzesQueryVariables>(QuizzesDocument, baseOptions);
      }
export function useQuizzesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<QuizzesQuery, QuizzesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<QuizzesQuery, QuizzesQueryVariables>(QuizzesDocument, baseOptions);
        }
export type QuizzesQueryHookResult = ReturnType<typeof useQuizzesQuery>;
export type QuizzesLazyQueryHookResult = ReturnType<typeof useQuizzesLazyQuery>;
export type QuizzesQueryResult = ApolloReactCommon.QueryResult<QuizzesQuery, QuizzesQueryVariables>;