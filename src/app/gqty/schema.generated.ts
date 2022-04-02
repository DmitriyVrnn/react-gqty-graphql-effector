/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}

export interface AddressInput {
  city?: InputMaybe<Scalars["String"]>;
  geo?: InputMaybe<GeoInput>;
  street?: InputMaybe<Scalars["String"]>;
  suite?: InputMaybe<Scalars["String"]>;
  zipcode?: InputMaybe<Scalars["String"]>;
}

export enum CacheControlScope {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
}

export interface CompanyInput {
  bs?: InputMaybe<Scalars["String"]>;
  catchPhrase?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
}

export interface CreateAlbumInput {
  title: Scalars["String"];
  userId: Scalars["ID"];
}

export interface CreateCommentInput {
  body: Scalars["String"];
  email: Scalars["String"];
  name: Scalars["String"];
}

export interface CreatePhotoInput {
  thumbnailUrl: Scalars["String"];
  title: Scalars["String"];
  url: Scalars["String"];
}

export interface CreatePostInput {
  body: Scalars["String"];
  title: Scalars["String"];
}

export interface CreateTodoInput {
  completed: Scalars["Boolean"];
  title: Scalars["String"];
}

export interface CreateUserInput {
  address?: InputMaybe<AddressInput>;
  company?: InputMaybe<CompanyInput>;
  email: Scalars["String"];
  name: Scalars["String"];
  phone?: InputMaybe<Scalars["String"]>;
  username: Scalars["String"];
  website?: InputMaybe<Scalars["String"]>;
}

export interface GeoInput {
  lat?: InputMaybe<Scalars["Float"]>;
  lng?: InputMaybe<Scalars["Float"]>;
}

export enum OperatorKindEnum {
  GTE = "GTE",
  LIKE = "LIKE",
  LTE = "LTE",
  NE = "NE",
}

export interface OperatorOptions {
  field?: InputMaybe<Scalars["String"]>;
  kind?: InputMaybe<OperatorKindEnum>;
  value?: InputMaybe<Scalars["String"]>;
}

export interface PageQueryOptions {
  operators?: InputMaybe<Array<InputMaybe<OperatorOptions>>>;
  paginate?: InputMaybe<PaginateOptions>;
  search?: InputMaybe<SearchOptions>;
  slice?: InputMaybe<SliceOptions>;
  sort?: InputMaybe<Array<InputMaybe<SortOptions>>>;
}

export interface PaginateOptions {
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
}

export interface SearchOptions {
  q?: InputMaybe<Scalars["String"]>;
}

export interface SliceOptions {
  end?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  start?: InputMaybe<Scalars["Int"]>;
}

export interface SortOptions {
  field?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<SortOrderEnum>;
}

export enum SortOrderEnum {
  ASC = "ASC",
  DESC = "DESC",
}

export interface UpdateAlbumInput {
  title?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["ID"]>;
}

export interface UpdateCommentInput {
  body?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
}

export interface UpdatePhotoInput {
  thumbnailUrl?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
}

export interface UpdatePostInput {
  body?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
}

export interface UpdateTodoInput {
  completed?: InputMaybe<Scalars["Boolean"]>;
  title?: InputMaybe<Scalars["String"]>;
}

export interface UpdateUserInput {
  address?: InputMaybe<AddressInput>;
  company?: InputMaybe<CompanyInput>;
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  username?: InputMaybe<Scalars["String"]>;
  website?: InputMaybe<Scalars["String"]>;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  CacheControlScope: true,
  Float: true,
  ID: true,
  Int: true,
  OperatorKindEnum: true,
  SortOrderEnum: true,
  String: true,
  Upload: true,
};
export const generatedSchema = {
  Address: {
    __typename: { __type: "String!" },
    city: { __type: "String" },
    geo: { __type: "Geo" },
    street: { __type: "String" },
    suite: { __type: "String" },
    zipcode: { __type: "String" },
  },
  AddressInput: {
    city: { __type: "String" },
    geo: { __type: "GeoInput" },
    street: { __type: "String" },
    suite: { __type: "String" },
    zipcode: { __type: "String" },
  },
  Album: {
    __typename: { __type: "String!" },
    id: { __type: "ID" },
    photos: { __type: "PhotosPage", __args: { options: "PageQueryOptions" } },
    title: { __type: "String" },
    user: { __type: "User" },
  },
  AlbumsPage: {
    __typename: { __type: "String!" },
    data: { __type: "[Album]" },
    links: { __type: "PaginationLinks" },
    meta: { __type: "PageMetadata" },
  },
  Comment: {
    __typename: { __type: "String!" },
    body: { __type: "String" },
    email: { __type: "String" },
    id: { __type: "ID" },
    name: { __type: "String" },
    post: { __type: "Post" },
  },
  CommentsPage: {
    __typename: { __type: "String!" },
    data: { __type: "[Comment]" },
    links: { __type: "PaginationLinks" },
    meta: { __type: "PageMetadata" },
  },
  Company: {
    __typename: { __type: "String!" },
    bs: { __type: "String" },
    catchPhrase: { __type: "String" },
    name: { __type: "String" },
  },
  CompanyInput: {
    bs: { __type: "String" },
    catchPhrase: { __type: "String" },
    name: { __type: "String" },
  },
  CreateAlbumInput: { title: { __type: "String!" }, userId: { __type: "ID!" } },
  CreateCommentInput: {
    body: { __type: "String!" },
    email: { __type: "String!" },
    name: { __type: "String!" },
  },
  CreatePhotoInput: {
    thumbnailUrl: { __type: "String!" },
    title: { __type: "String!" },
    url: { __type: "String!" },
  },
  CreatePostInput: {
    body: { __type: "String!" },
    title: { __type: "String!" },
  },
  CreateTodoInput: {
    completed: { __type: "Boolean!" },
    title: { __type: "String!" },
  },
  CreateUserInput: {
    address: { __type: "AddressInput" },
    company: { __type: "CompanyInput" },
    email: { __type: "String!" },
    name: { __type: "String!" },
    phone: { __type: "String" },
    username: { __type: "String!" },
    website: { __type: "String" },
  },
  Geo: {
    __typename: { __type: "String!" },
    lat: { __type: "Float" },
    lng: { __type: "Float" },
  },
  GeoInput: { lat: { __type: "Float" }, lng: { __type: "Float" } },
  OperatorOptions: {
    field: { __type: "String" },
    kind: { __type: "OperatorKindEnum" },
    value: { __type: "String" },
  },
  PageLimitPair: {
    __typename: { __type: "String!" },
    limit: { __type: "Int" },
    page: { __type: "Int" },
  },
  PageMetadata: {
    __typename: { __type: "String!" },
    totalCount: { __type: "Int" },
  },
  PageQueryOptions: {
    operators: { __type: "[OperatorOptions]" },
    paginate: { __type: "PaginateOptions" },
    search: { __type: "SearchOptions" },
    slice: { __type: "SliceOptions" },
    sort: { __type: "[SortOptions]" },
  },
  PaginateOptions: { limit: { __type: "Int" }, page: { __type: "Int" } },
  PaginationLinks: {
    __typename: { __type: "String!" },
    first: { __type: "PageLimitPair" },
    last: { __type: "PageLimitPair" },
    next: { __type: "PageLimitPair" },
    prev: { __type: "PageLimitPair" },
  },
  Photo: {
    __typename: { __type: "String!" },
    album: { __type: "Album" },
    id: { __type: "ID" },
    thumbnailUrl: { __type: "String" },
    title: { __type: "String" },
    url: { __type: "String" },
  },
  PhotosPage: {
    __typename: { __type: "String!" },
    data: { __type: "[Photo]" },
    links: { __type: "PaginationLinks" },
    meta: { __type: "PageMetadata" },
  },
  Post: {
    __typename: { __type: "String!" },
    body: { __type: "String" },
    comments: {
      __type: "CommentsPage",
      __args: { options: "PageQueryOptions" },
    },
    id: { __type: "ID" },
    title: { __type: "String" },
    user: { __type: "User" },
  },
  PostsPage: {
    __typename: { __type: "String!" },
    data: { __type: "[Post]" },
    links: { __type: "PaginationLinks" },
    meta: { __type: "PageMetadata" },
  },
  SearchOptions: { q: { __type: "String" } },
  SliceOptions: {
    end: { __type: "Int" },
    limit: { __type: "Int" },
    start: { __type: "Int" },
  },
  SortOptions: {
    field: { __type: "String" },
    order: { __type: "SortOrderEnum" },
  },
  Todo: {
    __typename: { __type: "String!" },
    completed: { __type: "Boolean" },
    id: { __type: "ID" },
    title: { __type: "String" },
    user: { __type: "User" },
  },
  TodosPage: {
    __typename: { __type: "String!" },
    data: { __type: "[Todo]" },
    links: { __type: "PaginationLinks" },
    meta: { __type: "PageMetadata" },
  },
  UpdateAlbumInput: { title: { __type: "String" }, userId: { __type: "ID" } },
  UpdateCommentInput: {
    body: { __type: "String" },
    email: { __type: "String" },
    name: { __type: "String" },
  },
  UpdatePhotoInput: {
    thumbnailUrl: { __type: "String" },
    title: { __type: "String" },
    url: { __type: "String" },
  },
  UpdatePostInput: { body: { __type: "String" }, title: { __type: "String" } },
  UpdateTodoInput: {
    completed: { __type: "Boolean" },
    title: { __type: "String" },
  },
  UpdateUserInput: {
    address: { __type: "AddressInput" },
    company: { __type: "CompanyInput" },
    email: { __type: "String" },
    name: { __type: "String" },
    phone: { __type: "String" },
    username: { __type: "String" },
    website: { __type: "String" },
  },
  User: {
    __typename: { __type: "String!" },
    address: { __type: "Address" },
    albums: { __type: "AlbumsPage", __args: { options: "PageQueryOptions" } },
    company: { __type: "Company" },
    email: { __type: "String" },
    id: { __type: "ID" },
    name: { __type: "String" },
    phone: { __type: "String" },
    posts: { __type: "PostsPage", __args: { options: "PageQueryOptions" } },
    todos: { __type: "TodosPage", __args: { options: "PageQueryOptions" } },
    username: { __type: "String" },
    website: { __type: "String" },
  },
  UsersPage: {
    __typename: { __type: "String!" },
    data: { __type: "[User]" },
    links: { __type: "PaginationLinks" },
    meta: { __type: "PageMetadata" },
  },
  mutation: {
    __typename: { __type: "String!" },
    _: { __type: "Int" },
    createAlbum: { __type: "Album", __args: { input: "CreateAlbumInput!" } },
    createComment: {
      __type: "Comment",
      __args: { input: "CreateCommentInput!" },
    },
    createPhoto: { __type: "Photo", __args: { input: "CreatePhotoInput!" } },
    createPost: { __type: "Post", __args: { input: "CreatePostInput!" } },
    createTodo: { __type: "Todo", __args: { input: "CreateTodoInput!" } },
    createUser: { __type: "User", __args: { input: "CreateUserInput!" } },
    deleteAlbum: { __type: "Boolean", __args: { id: "ID!" } },
    deleteComment: { __type: "Boolean", __args: { id: "ID!" } },
    deletePhoto: { __type: "Boolean", __args: { id: "ID!" } },
    deletePost: { __type: "Boolean", __args: { id: "ID!" } },
    deleteTodo: { __type: "Boolean", __args: { id: "ID!" } },
    deleteUser: { __type: "Boolean", __args: { id: "ID!" } },
    updateAlbum: {
      __type: "Album",
      __args: { id: "ID!", input: "UpdateAlbumInput!" },
    },
    updateComment: {
      __type: "Comment",
      __args: { id: "ID!", input: "UpdateCommentInput!" },
    },
    updatePhoto: {
      __type: "Photo",
      __args: { id: "ID!", input: "UpdatePhotoInput!" },
    },
    updatePost: {
      __type: "Post",
      __args: { id: "ID!", input: "UpdatePostInput!" },
    },
    updateTodo: {
      __type: "Todo",
      __args: { id: "ID!", input: "UpdateTodoInput!" },
    },
    updateUser: {
      __type: "User",
      __args: { id: "ID!", input: "UpdateUserInput!" },
    },
  },
  query: {
    __typename: { __type: "String!" },
    _: { __type: "Int" },
    album: { __type: "Album", __args: { id: "ID!" } },
    albums: { __type: "AlbumsPage", __args: { options: "PageQueryOptions" } },
    comment: { __type: "Comment", __args: { id: "ID!" } },
    comments: {
      __type: "CommentsPage",
      __args: { options: "PageQueryOptions" },
    },
    photo: { __type: "Photo", __args: { id: "ID!" } },
    photos: { __type: "PhotosPage", __args: { options: "PageQueryOptions" } },
    post: { __type: "Post", __args: { id: "ID!" } },
    posts: { __type: "PostsPage", __args: { options: "PageQueryOptions" } },
    todo: { __type: "Todo", __args: { id: "ID!" } },
    todos: { __type: "TodosPage", __args: { options: "PageQueryOptions" } },
    user: { __type: "User", __args: { id: "ID!" } },
    users: { __type: "UsersPage", __args: { options: "PageQueryOptions" } },
  },
  subscription: {},
} as const;

export interface Address {
  __typename?: "Address";
  city?: Maybe<ScalarsEnums["String"]>;
  geo?: Maybe<Geo>;
  street?: Maybe<ScalarsEnums["String"]>;
  suite?: Maybe<ScalarsEnums["String"]>;
  zipcode?: Maybe<ScalarsEnums["String"]>;
}

export interface Album {
  __typename?: "Album";
  id?: Maybe<ScalarsEnums["ID"]>;
  photos: (args?: { options?: Maybe<PageQueryOptions> }) => Maybe<PhotosPage>;
  title?: Maybe<ScalarsEnums["String"]>;
  user?: Maybe<User>;
}

export interface AlbumsPage {
  __typename?: "AlbumsPage";
  data?: Maybe<Array<Maybe<Album>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
}

export interface Comment {
  __typename?: "Comment";
  body?: Maybe<ScalarsEnums["String"]>;
  email?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["ID"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  post?: Maybe<Post>;
}

export interface CommentsPage {
  __typename?: "CommentsPage";
  data?: Maybe<Array<Maybe<Comment>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
}

export interface Company {
  __typename?: "Company";
  bs?: Maybe<ScalarsEnums["String"]>;
  catchPhrase?: Maybe<ScalarsEnums["String"]>;
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface Geo {
  __typename?: "Geo";
  lat?: Maybe<ScalarsEnums["Float"]>;
  lng?: Maybe<ScalarsEnums["Float"]>;
}

export interface PageLimitPair {
  __typename?: "PageLimitPair";
  limit?: Maybe<ScalarsEnums["Int"]>;
  page?: Maybe<ScalarsEnums["Int"]>;
}

export interface PageMetadata {
  __typename?: "PageMetadata";
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

export interface PaginationLinks {
  __typename?: "PaginationLinks";
  first?: Maybe<PageLimitPair>;
  last?: Maybe<PageLimitPair>;
  next?: Maybe<PageLimitPair>;
  prev?: Maybe<PageLimitPair>;
}

export interface Photo {
  __typename?: "Photo";
  album?: Maybe<Album>;
  id?: Maybe<ScalarsEnums["ID"]>;
  thumbnailUrl?: Maybe<ScalarsEnums["String"]>;
  title?: Maybe<ScalarsEnums["String"]>;
  url?: Maybe<ScalarsEnums["String"]>;
}

export interface PhotosPage {
  __typename?: "PhotosPage";
  data?: Maybe<Array<Maybe<Photo>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
}

export interface Post {
  __typename?: "Post";
  body?: Maybe<ScalarsEnums["String"]>;
  comments: (args?: {
    options?: Maybe<PageQueryOptions>;
  }) => Maybe<CommentsPage>;
  id?: Maybe<ScalarsEnums["ID"]>;
  title?: Maybe<ScalarsEnums["String"]>;
  user?: Maybe<User>;
}

export interface PostsPage {
  __typename?: "PostsPage";
  data?: Maybe<Array<Maybe<Post>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
}

export interface Todo {
  __typename?: "Todo";
  completed?: Maybe<ScalarsEnums["Boolean"]>;
  id?: Maybe<ScalarsEnums["ID"]>;
  title?: Maybe<ScalarsEnums["String"]>;
  user?: Maybe<User>;
}

export interface TodosPage {
  __typename?: "TodosPage";
  data?: Maybe<Array<Maybe<Todo>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
}

export interface User {
  __typename?: "User";
  address?: Maybe<Address>;
  albums: (args?: { options?: Maybe<PageQueryOptions> }) => Maybe<AlbumsPage>;
  company?: Maybe<Company>;
  email?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["ID"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  phone?: Maybe<ScalarsEnums["String"]>;
  posts: (args?: { options?: Maybe<PageQueryOptions> }) => Maybe<PostsPage>;
  todos: (args?: { options?: Maybe<PageQueryOptions> }) => Maybe<TodosPage>;
  username?: Maybe<ScalarsEnums["String"]>;
  website?: Maybe<ScalarsEnums["String"]>;
}

export interface UsersPage {
  __typename?: "UsersPage";
  data?: Maybe<Array<Maybe<User>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
}

export interface Mutation {
  __typename?: "Mutation";
  _?: Maybe<ScalarsEnums["Int"]>;
  createAlbum: (args: { input: CreateAlbumInput }) => Maybe<Album>;
  createComment: (args: { input: CreateCommentInput }) => Maybe<Comment>;
  createPhoto: (args: { input: CreatePhotoInput }) => Maybe<Photo>;
  createPost: (args: { input: CreatePostInput }) => Maybe<Post>;
  createTodo: (args: { input: CreateTodoInput }) => Maybe<Todo>;
  createUser: (args: { input: CreateUserInput }) => Maybe<User>;
  deleteAlbum: (args: { id: Scalars["ID"] }) => Maybe<ScalarsEnums["Boolean"]>;
  deleteComment: (args: {
    id: Scalars["ID"];
  }) => Maybe<ScalarsEnums["Boolean"]>;
  deletePhoto: (args: { id: Scalars["ID"] }) => Maybe<ScalarsEnums["Boolean"]>;
  deletePost: (args: { id: Scalars["ID"] }) => Maybe<ScalarsEnums["Boolean"]>;
  deleteTodo: (args: { id: Scalars["ID"] }) => Maybe<ScalarsEnums["Boolean"]>;
  deleteUser: (args: { id: Scalars["ID"] }) => Maybe<ScalarsEnums["Boolean"]>;
  updateAlbum: (args: {
    id: Scalars["ID"];
    input: UpdateAlbumInput;
  }) => Maybe<Album>;
  updateComment: (args: {
    id: Scalars["ID"];
    input: UpdateCommentInput;
  }) => Maybe<Comment>;
  updatePhoto: (args: {
    id: Scalars["ID"];
    input: UpdatePhotoInput;
  }) => Maybe<Photo>;
  updatePost: (args: {
    id: Scalars["ID"];
    input: UpdatePostInput;
  }) => Maybe<Post>;
  updateTodo: (args: {
    id: Scalars["ID"];
    input: UpdateTodoInput;
  }) => Maybe<Todo>;
  updateUser: (args: {
    id: Scalars["ID"];
    input: UpdateUserInput;
  }) => Maybe<User>;
}

export interface Query {
  __typename?: "Query";
  _?: Maybe<ScalarsEnums["Int"]>;
  album: (args: { id: Scalars["ID"] }) => Maybe<Album>;
  albums: (args?: { options?: Maybe<PageQueryOptions> }) => Maybe<AlbumsPage>;
  comment: (args: { id: Scalars["ID"] }) => Maybe<Comment>;
  comments: (args?: {
    options?: Maybe<PageQueryOptions>;
  }) => Maybe<CommentsPage>;
  photo: (args: { id: Scalars["ID"] }) => Maybe<Photo>;
  photos: (args?: { options?: Maybe<PageQueryOptions> }) => Maybe<PhotosPage>;
  post: (args: { id: Scalars["ID"] }) => Maybe<Post>;
  posts: (args?: { options?: Maybe<PageQueryOptions> }) => Maybe<PostsPage>;
  todo: (args: { id: Scalars["ID"] }) => Maybe<Todo>;
  todos: (args?: { options?: Maybe<PageQueryOptions> }) => Maybe<TodosPage>;
  user: (args: { id: Scalars["ID"] }) => Maybe<User>;
  users: (args?: { options?: Maybe<PageQueryOptions> }) => Maybe<UsersPage>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  Address: Address;
  Album: Album;
  AlbumsPage: AlbumsPage;
  Comment: Comment;
  CommentsPage: CommentsPage;
  Company: Company;
  Geo: Geo;
  Mutation: Mutation;
  PageLimitPair: PageLimitPair;
  PageMetadata: PageMetadata;
  PaginationLinks: PaginationLinks;
  Photo: Photo;
  PhotosPage: PhotosPage;
  Post: Post;
  PostsPage: PostsPage;
  Query: Query;
  Subscription: Subscription;
  Todo: Todo;
  TodosPage: TodosPage;
  User: User;
  UsersPage: UsersPage;
}
export type SchemaObjectTypesNames =
  | "Address"
  | "Album"
  | "AlbumsPage"
  | "Comment"
  | "CommentsPage"
  | "Company"
  | "Geo"
  | "Mutation"
  | "PageLimitPair"
  | "PageMetadata"
  | "PaginationLinks"
  | "Photo"
  | "PhotosPage"
  | "Post"
  | "PostsPage"
  | "Query"
  | "Subscription"
  | "Todo"
  | "TodosPage"
  | "User"
  | "UsersPage";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  CacheControlScope: CacheControlScope | undefined;
  OperatorKindEnum: OperatorKindEnum | undefined;
  SortOrderEnum: SortOrderEnum | undefined;
}
