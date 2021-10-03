import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type ComponentSpecificationSpecification = {
  __typename?: 'ComponentSpecificationSpecification';
  id: Scalars['ID'];
  header: Scalars['String'];
  description: Scalars['String'];
};

export type ComponentSpecificationSpecificationInput = {
  header: Scalars['String'];
  description: Scalars['String'];
};



export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type InputId = {
  id: Scalars['ID'];
};


export type LocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type MarketingCardInput = {
  header: Scalars['String'];
  description: Scalars['String'];
  image?: Maybe<Scalars['ID']>;
  headerColor?: Maybe<Scalars['String']>;
  descriptionColor?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type MarketingCards = {
  __typename?: 'MarketingCards';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  header: Scalars['String'];
  description: Scalars['String'];
  image?: Maybe<UploadFile>;
  headerColor?: Maybe<Scalars['String']>;
  descriptionColor?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type MarketingCardsAggregator = {
  __typename?: 'MarketingCardsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MarketingCardsConnection = {
  __typename?: 'MarketingCardsConnection';
  values?: Maybe<Array<Maybe<MarketingCards>>>;
  groupBy?: Maybe<MarketingCardsGroupBy>;
  aggregate?: Maybe<MarketingCardsAggregator>;
};

export type MarketingCardsConnectionCreated_At = {
  __typename?: 'MarketingCardsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MarketingCardsConnection>;
};

export type MarketingCardsConnectionDescription = {
  __typename?: 'MarketingCardsConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MarketingCardsConnection>;
};

export type MarketingCardsConnectionDescriptionColor = {
  __typename?: 'MarketingCardsConnectionDescriptionColor';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MarketingCardsConnection>;
};

export type MarketingCardsConnectionHeader = {
  __typename?: 'MarketingCardsConnectionHeader';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MarketingCardsConnection>;
};

export type MarketingCardsConnectionHeaderColor = {
  __typename?: 'MarketingCardsConnectionHeaderColor';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MarketingCardsConnection>;
};

export type MarketingCardsConnectionId = {
  __typename?: 'MarketingCardsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MarketingCardsConnection>;
};

export type MarketingCardsConnectionImage = {
  __typename?: 'MarketingCardsConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MarketingCardsConnection>;
};

export type MarketingCardsConnectionPublished_At = {
  __typename?: 'MarketingCardsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MarketingCardsConnection>;
};

export type MarketingCardsConnectionUpdated_At = {
  __typename?: 'MarketingCardsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MarketingCardsConnection>;
};

export type MarketingCardsGroupBy = {
  __typename?: 'MarketingCardsGroupBy';
  id?: Maybe<Array<Maybe<MarketingCardsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<MarketingCardsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<MarketingCardsConnectionUpdated_At>>>;
  header?: Maybe<Array<Maybe<MarketingCardsConnectionHeader>>>;
  description?: Maybe<Array<Maybe<MarketingCardsConnectionDescription>>>;
  image?: Maybe<Array<Maybe<MarketingCardsConnectionImage>>>;
  headerColor?: Maybe<Array<Maybe<MarketingCardsConnectionHeaderColor>>>;
  descriptionColor?: Maybe<Array<Maybe<MarketingCardsConnectionDescriptionColor>>>;
  published_at?: Maybe<Array<Maybe<MarketingCardsConnectionPublished_At>>>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | MarketingCards | MarketingCardsConnection | MarketingCardsAggregator | MarketingCardsGroupBy | MarketingCardsConnectionId | MarketingCardsConnectionCreated_At | MarketingCardsConnectionUpdated_At | MarketingCardsConnectionHeader | MarketingCardsConnectionDescription | MarketingCardsConnectionImage | MarketingCardsConnectionHeaderColor | MarketingCardsConnectionDescriptionColor | MarketingCardsConnectionPublished_At | CreateMarketingCardPayload | UpdateMarketingCardPayload | DeleteMarketingCardPayload | Products | ProductsConnection | ProductsAggregator | ProductsGroupBy | ProductsConnectionId | ProductsConnectionCreated_At | ProductsConnectionUpdated_At | ProductsConnectionName | ProductsConnectionDescription | ProductsConnectionImage | ProductsConnectionButtonColor | ProductsConnectionPublished_At | CreateProductPayload | UpdateProductPayload | DeleteProductPayload | SellingPoints | UpdateSellingPointPayload | DeleteSellingPointPayload | Testimonials | TestimonialsConnection | TestimonialsAggregator | TestimonialsGroupBy | TestimonialsConnectionId | TestimonialsConnectionCreated_At | TestimonialsConnectionUpdated_At | TestimonialsConnectionTestimonial | TestimonialsConnectionName | TestimonialsConnectionTitle | TestimonialsConnectionImage | TestimonialsConnectionPublished_At | CreateTestimonialPayload | UpdateTestimonialPayload | DeleteTestimonialPayload | I18NLocale | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentSpecificationSpecification;

export type Mutation = {
  __typename?: 'Mutation';
  createMarketingCard?: Maybe<CreateMarketingCardPayload>;
  updateMarketingCard?: Maybe<UpdateMarketingCardPayload>;
  deleteMarketingCard?: Maybe<DeleteMarketingCardPayload>;
  createProduct?: Maybe<CreateProductPayload>;
  updateProduct?: Maybe<UpdateProductPayload>;
  deleteProduct?: Maybe<DeleteProductPayload>;
  updateSellingPoint?: Maybe<UpdateSellingPointPayload>;
  deleteSellingPoint?: Maybe<DeleteSellingPointPayload>;
  createTestimonial?: Maybe<CreateTestimonialPayload>;
  updateTestimonial?: Maybe<UpdateTestimonialPayload>;
  deleteTestimonial?: Maybe<DeleteTestimonialPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateMarketingCardArgs = {
  input?: Maybe<CreateMarketingCardInput>;
};


export type MutationUpdateMarketingCardArgs = {
  input?: Maybe<UpdateMarketingCardInput>;
};


export type MutationDeleteMarketingCardArgs = {
  input?: Maybe<DeleteMarketingCardInput>;
};


export type MutationCreateProductArgs = {
  input?: Maybe<CreateProductInput>;
};


export type MutationUpdateProductArgs = {
  input?: Maybe<UpdateProductInput>;
};


export type MutationDeleteProductArgs = {
  input?: Maybe<DeleteProductInput>;
};


export type MutationUpdateSellingPointArgs = {
  input?: Maybe<UpdateSellingPointInput>;
};


export type MutationCreateTestimonialArgs = {
  input?: Maybe<CreateTestimonialInput>;
};


export type MutationUpdateTestimonialArgs = {
  input?: Maybe<UpdateTestimonialInput>;
};


export type MutationDeleteTestimonialArgs = {
  input?: Maybe<DeleteTestimonialInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type ProductInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  image?: Maybe<Scalars['ID']>;
  buttonColor?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Products = {
  __typename?: 'Products';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  description: Scalars['String'];
  image?: Maybe<UploadFile>;
  buttonColor?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ProductsAggregator = {
  __typename?: 'ProductsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  values?: Maybe<Array<Maybe<Products>>>;
  groupBy?: Maybe<ProductsGroupBy>;
  aggregate?: Maybe<ProductsAggregator>;
};

export type ProductsConnectionButtonColor = {
  __typename?: 'ProductsConnectionButtonColor';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionCreated_At = {
  __typename?: 'ProductsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionDescription = {
  __typename?: 'ProductsConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionId = {
  __typename?: 'ProductsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionImage = {
  __typename?: 'ProductsConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionName = {
  __typename?: 'ProductsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionPublished_At = {
  __typename?: 'ProductsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionUpdated_At = {
  __typename?: 'ProductsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsGroupBy = {
  __typename?: 'ProductsGroupBy';
  id?: Maybe<Array<Maybe<ProductsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ProductsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ProductsConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<ProductsConnectionName>>>;
  description?: Maybe<Array<Maybe<ProductsConnectionDescription>>>;
  image?: Maybe<Array<Maybe<ProductsConnectionImage>>>;
  buttonColor?: Maybe<Array<Maybe<ProductsConnectionButtonColor>>>;
  published_at?: Maybe<Array<Maybe<ProductsConnectionPublished_At>>>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  marketingCard?: Maybe<MarketingCards>;
  marketingCards?: Maybe<Array<Maybe<MarketingCards>>>;
  marketingCardsConnection?: Maybe<MarketingCardsConnection>;
  product?: Maybe<Products>;
  products?: Maybe<Array<Maybe<Products>>>;
  productsConnection?: Maybe<ProductsConnection>;
  sellingPoint?: Maybe<SellingPoints>;
  testimonial?: Maybe<Testimonials>;
  testimonials?: Maybe<Array<Maybe<Testimonials>>>;
  testimonialsConnection?: Maybe<TestimonialsConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryMarketingCardArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryMarketingCardsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryMarketingCardsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryProductsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryProductsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySellingPointArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryTestimonialArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryTestimonialsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryTestimonialsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type SellingPointInput = {
  header: Scalars['String'];
  description: Scalars['String'];
  specifications?: Maybe<Array<Maybe<ComponentSpecificationSpecificationInput>>>;
  image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type SellingPoints = {
  __typename?: 'SellingPoints';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  header: Scalars['String'];
  description: Scalars['String'];
  specifications?: Maybe<Array<Maybe<ComponentSpecificationSpecification>>>;
  image?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type TestimonialInput = {
  testimonial: Scalars['String'];
  name: Scalars['String'];
  title: Scalars['String'];
  image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Testimonials = {
  __typename?: 'Testimonials';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  testimonial: Scalars['String'];
  name: Scalars['String'];
  title: Scalars['String'];
  image?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type TestimonialsAggregator = {
  __typename?: 'TestimonialsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TestimonialsConnection = {
  __typename?: 'TestimonialsConnection';
  values?: Maybe<Array<Maybe<Testimonials>>>;
  groupBy?: Maybe<TestimonialsGroupBy>;
  aggregate?: Maybe<TestimonialsAggregator>;
};

export type TestimonialsConnectionCreated_At = {
  __typename?: 'TestimonialsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TestimonialsConnection>;
};

export type TestimonialsConnectionId = {
  __typename?: 'TestimonialsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TestimonialsConnection>;
};

export type TestimonialsConnectionImage = {
  __typename?: 'TestimonialsConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TestimonialsConnection>;
};

export type TestimonialsConnectionName = {
  __typename?: 'TestimonialsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TestimonialsConnection>;
};

export type TestimonialsConnectionPublished_At = {
  __typename?: 'TestimonialsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TestimonialsConnection>;
};

export type TestimonialsConnectionTestimonial = {
  __typename?: 'TestimonialsConnectionTestimonial';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TestimonialsConnection>;
};

export type TestimonialsConnectionTitle = {
  __typename?: 'TestimonialsConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TestimonialsConnection>;
};

export type TestimonialsConnectionUpdated_At = {
  __typename?: 'TestimonialsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TestimonialsConnection>;
};

export type TestimonialsGroupBy = {
  __typename?: 'TestimonialsGroupBy';
  id?: Maybe<Array<Maybe<TestimonialsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<TestimonialsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<TestimonialsConnectionUpdated_At>>>;
  testimonial?: Maybe<Array<Maybe<TestimonialsConnectionTestimonial>>>;
  name?: Maybe<Array<Maybe<TestimonialsConnectionName>>>;
  title?: Maybe<Array<Maybe<TestimonialsConnectionTitle>>>;
  image?: Maybe<Array<Maybe<TestimonialsConnectionImage>>>;
  published_at?: Maybe<Array<Maybe<TestimonialsConnectionPublished_At>>>;
};



export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type CreateMarketingCardInput = {
  data?: Maybe<MarketingCardInput>;
};

export type CreateMarketingCardPayload = {
  __typename?: 'createMarketingCardPayload';
  marketingCard?: Maybe<MarketingCards>;
};

export type CreateProductInput = {
  data?: Maybe<ProductInput>;
};

export type CreateProductPayload = {
  __typename?: 'createProductPayload';
  product?: Maybe<Products>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateTestimonialInput = {
  data?: Maybe<TestimonialInput>;
};

export type CreateTestimonialPayload = {
  __typename?: 'createTestimonialPayload';
  testimonial?: Maybe<Testimonials>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteMarketingCardInput = {
  where?: Maybe<InputId>;
};

export type DeleteMarketingCardPayload = {
  __typename?: 'deleteMarketingCardPayload';
  marketingCard?: Maybe<MarketingCards>;
};

export type DeleteProductInput = {
  where?: Maybe<InputId>;
};

export type DeleteProductPayload = {
  __typename?: 'deleteProductPayload';
  product?: Maybe<Products>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteSellingPointPayload = {
  __typename?: 'deleteSellingPointPayload';
  sellingPoint?: Maybe<SellingPoints>;
};

export type DeleteTestimonialInput = {
  where?: Maybe<InputId>;
};

export type DeleteTestimonialPayload = {
  __typename?: 'deleteTestimonialPayload';
  testimonial?: Maybe<Testimonials>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditComponentSpecificationSpecificationInput = {
  id?: Maybe<Scalars['ID']>;
  header?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMarketingCardInput = {
  header?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  headerColor?: Maybe<Scalars['String']>;
  descriptionColor?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProductInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  buttonColor?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSellingPointInput = {
  header?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  specifications?: Maybe<Array<Maybe<EditComponentSpecificationSpecificationInput>>>;
  image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTestimonialInput = {
  testimonial?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateMarketingCardInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMarketingCardInput>;
};

export type UpdateMarketingCardPayload = {
  __typename?: 'updateMarketingCardPayload';
  marketingCard?: Maybe<MarketingCards>;
};

export type UpdateProductInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProductInput>;
};

export type UpdateProductPayload = {
  __typename?: 'updateProductPayload';
  product?: Maybe<Products>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateSellingPointInput = {
  data?: Maybe<EditSellingPointInput>;
};

export type UpdateSellingPointPayload = {
  __typename?: 'updateSellingPointPayload';
  sellingPoint?: Maybe<SellingPoints>;
};

export type UpdateTestimonialInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTestimonialInput>;
};

export type UpdateTestimonialPayload = {
  __typename?: 'updateTestimonialPayload';
  testimonial?: Maybe<Testimonials>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type Marketing_Cards_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type Marketing_Cards_QueryQuery = (
  { __typename?: 'Query' }
  & { marketingCards?: Maybe<Array<Maybe<(
    { __typename: 'MarketingCards' }
    & Pick<MarketingCards, 'id' | 'created_at' | 'updated_at' | 'header' | 'headerColor' | 'description' | 'descriptionColor' | 'published_at'>
    & { image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'url'>
    )> }
  )>>> }
);

export type Products_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type Products_QueryQuery = (
  { __typename?: 'Query' }
  & { products?: Maybe<Array<Maybe<(
    { __typename: 'Products' }
    & Pick<Products, 'id' | 'created_at' | 'updated_at' | 'name' | 'buttonColor' | 'description' | 'published_at'>
    & { image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'id'>
    )> }
  )>>> }
);

export type Selling_Point_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type Selling_Point_QueryQuery = (
  { __typename?: 'Query' }
  & { sellingPoint?: Maybe<(
    { __typename: 'SellingPoints' }
    & Pick<SellingPoints, 'id' | 'created_at' | 'updated_at' | 'header' | 'description' | 'published_at'>
    & { specifications?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentSpecificationSpecification' }
      & Pick<ComponentSpecificationSpecification, 'id' | 'header' | 'description'>
    )>>>, image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'id'>
    )> }
  )> }
);

export type Testimonials_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type Testimonials_QueryQuery = (
  { __typename?: 'Query' }
  & { testimonials?: Maybe<Array<Maybe<(
    { __typename: 'Testimonials' }
    & Pick<Testimonials, 'id' | 'created_at' | 'updated_at' | 'testimonial' | 'name' | 'title' | 'published_at'>
    & { image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'id'>
    )> }
  )>>> }
);


export const Marketing_Cards_QueryDocument = gql`
    query MARKETING_CARDS_QUERY {
  marketingCards {
    __typename
    id
    created_at
    updated_at
    header
    headerColor
    description
    descriptionColor
    image {
      id
      url
    }
    published_at
  }
}
    `;

/**
 * __useMarketing_Cards_QueryQuery__
 *
 * To run a query within a React component, call `useMarketing_Cards_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketing_Cards_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketing_Cards_QueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMarketing_Cards_QueryQuery(baseOptions?: Apollo.QueryHookOptions<Marketing_Cards_QueryQuery, Marketing_Cards_QueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Marketing_Cards_QueryQuery, Marketing_Cards_QueryQueryVariables>(Marketing_Cards_QueryDocument, options);
      }
export function useMarketing_Cards_QueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Marketing_Cards_QueryQuery, Marketing_Cards_QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Marketing_Cards_QueryQuery, Marketing_Cards_QueryQueryVariables>(Marketing_Cards_QueryDocument, options);
        }
export type Marketing_Cards_QueryQueryHookResult = ReturnType<typeof useMarketing_Cards_QueryQuery>;
export type Marketing_Cards_QueryLazyQueryHookResult = ReturnType<typeof useMarketing_Cards_QueryLazyQuery>;
export type Marketing_Cards_QueryQueryResult = Apollo.QueryResult<Marketing_Cards_QueryQuery, Marketing_Cards_QueryQueryVariables>;
export const Products_QueryDocument = gql`
    query PRODUCTS_QUERY {
  products {
    __typename
    id
    created_at
    updated_at
    name
    buttonColor
    description
    image {
      url
      id
    }
    published_at
  }
}
    `;

/**
 * __useProducts_QueryQuery__
 *
 * To run a query within a React component, call `useProducts_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useProducts_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProducts_QueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useProducts_QueryQuery(baseOptions?: Apollo.QueryHookOptions<Products_QueryQuery, Products_QueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Products_QueryQuery, Products_QueryQueryVariables>(Products_QueryDocument, options);
      }
export function useProducts_QueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Products_QueryQuery, Products_QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Products_QueryQuery, Products_QueryQueryVariables>(Products_QueryDocument, options);
        }
export type Products_QueryQueryHookResult = ReturnType<typeof useProducts_QueryQuery>;
export type Products_QueryLazyQueryHookResult = ReturnType<typeof useProducts_QueryLazyQuery>;
export type Products_QueryQueryResult = Apollo.QueryResult<Products_QueryQuery, Products_QueryQueryVariables>;
export const Selling_Point_QueryDocument = gql`
    query SELLING_POINT_QUERY {
  sellingPoint {
    __typename
    id
    created_at
    updated_at
    header
    description
    specifications {
      id
      header
      description
    }
    image {
      url
      id
    }
    published_at
  }
}
    `;

/**
 * __useSelling_Point_QueryQuery__
 *
 * To run a query within a React component, call `useSelling_Point_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelling_Point_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelling_Point_QueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useSelling_Point_QueryQuery(baseOptions?: Apollo.QueryHookOptions<Selling_Point_QueryQuery, Selling_Point_QueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Selling_Point_QueryQuery, Selling_Point_QueryQueryVariables>(Selling_Point_QueryDocument, options);
      }
export function useSelling_Point_QueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Selling_Point_QueryQuery, Selling_Point_QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Selling_Point_QueryQuery, Selling_Point_QueryQueryVariables>(Selling_Point_QueryDocument, options);
        }
export type Selling_Point_QueryQueryHookResult = ReturnType<typeof useSelling_Point_QueryQuery>;
export type Selling_Point_QueryLazyQueryHookResult = ReturnType<typeof useSelling_Point_QueryLazyQuery>;
export type Selling_Point_QueryQueryResult = Apollo.QueryResult<Selling_Point_QueryQuery, Selling_Point_QueryQueryVariables>;
export const Testimonials_QueryDocument = gql`
    query TESTIMONIALS_QUERY {
  testimonials {
    __typename
    id
    created_at
    updated_at
    testimonial
    name
    title
    image {
      url
      id
    }
    published_at
  }
}
    `;

/**
 * __useTestimonials_QueryQuery__
 *
 * To run a query within a React component, call `useTestimonials_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestimonials_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestimonials_QueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useTestimonials_QueryQuery(baseOptions?: Apollo.QueryHookOptions<Testimonials_QueryQuery, Testimonials_QueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Testimonials_QueryQuery, Testimonials_QueryQueryVariables>(Testimonials_QueryDocument, options);
      }
export function useTestimonials_QueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Testimonials_QueryQuery, Testimonials_QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Testimonials_QueryQuery, Testimonials_QueryQueryVariables>(Testimonials_QueryDocument, options);
        }
export type Testimonials_QueryQueryHookResult = ReturnType<typeof useTestimonials_QueryQuery>;
export type Testimonials_QueryLazyQueryHookResult = ReturnType<typeof useTestimonials_QueryLazyQuery>;
export type Testimonials_QueryQueryResult = Apollo.QueryResult<Testimonials_QueryQuery, Testimonials_QueryQueryVariables>;