export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BigInt: any
  Bytes: any
  DateTime: any
  JSONObject: any
}

export type AmendConstitutionProposalDetails = {
  __typename: 'AmendConstitutionProposalDetails'
  text: Scalars['String']
}

export type AmendConstitutionProposalDetailsCreateInput = {
  text: Scalars['String']
}

export type AmendConstitutionProposalDetailsUpdateInput = {
  text?: Maybe<Scalars['String']>
}

export type AmendConstitutionProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  text_eq?: Maybe<Scalars['String']>
  text_contains?: Maybe<Scalars['String']>
  text_startsWith?: Maybe<Scalars['String']>
  text_endsWith?: Maybe<Scalars['String']>
  text_in?: Maybe<Array<Scalars['String']>>
  AND?: Maybe<Array<AmendConstitutionProposalDetailsWhereInput>>
  OR?: Maybe<Array<AmendConstitutionProposalDetailsWhereInput>>
}

export type AmendConstitutionProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type ApplicationFormQuestion = BaseGraphQlObject & {
  __typename: 'ApplicationFormQuestion'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  openingMetadata: WorkingGroupOpeningMetadata
  openingMetadataId: Scalars['String']
  question?: Maybe<Scalars['String']>
  type: ApplicationFormQuestionType
  index: Scalars['Int']
  applicationformquestionanswerquestion?: Maybe<Array<ApplicationFormQuestionAnswer>>
}

export type ApplicationFormQuestionAnswer = BaseGraphQlObject & {
  __typename: 'ApplicationFormQuestionAnswer'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  application: WorkingGroupApplication
  applicationId: Scalars['String']
  question: ApplicationFormQuestion
  questionId: Scalars['String']
  answer: Scalars['String']
}

export type ApplicationFormQuestionAnswerConnection = {
  __typename: 'ApplicationFormQuestionAnswerConnection'
  totalCount: Scalars['Int']
  edges: Array<ApplicationFormQuestionAnswerEdge>
  pageInfo: PageInfo
}

export type ApplicationFormQuestionAnswerCreateInput = {
  application: Scalars['ID']
  question: Scalars['ID']
  answer: Scalars['String']
}

export type ApplicationFormQuestionAnswerEdge = {
  __typename: 'ApplicationFormQuestionAnswerEdge'
  node: ApplicationFormQuestionAnswer
  cursor: Scalars['String']
}

export enum ApplicationFormQuestionAnswerOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  ApplicationAsc = 'application_ASC',
  ApplicationDesc = 'application_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  AnswerAsc = 'answer_ASC',
  AnswerDesc = 'answer_DESC',
}

export type ApplicationFormQuestionAnswerUpdateInput = {
  application?: Maybe<Scalars['ID']>
  question?: Maybe<Scalars['ID']>
  answer?: Maybe<Scalars['String']>
}

export type ApplicationFormQuestionAnswerWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  application_eq?: Maybe<Scalars['ID']>
  application_in?: Maybe<Array<Scalars['ID']>>
  question_eq?: Maybe<Scalars['ID']>
  question_in?: Maybe<Array<Scalars['ID']>>
  answer_eq?: Maybe<Scalars['String']>
  answer_contains?: Maybe<Scalars['String']>
  answer_startsWith?: Maybe<Scalars['String']>
  answer_endsWith?: Maybe<Scalars['String']>
  answer_in?: Maybe<Array<Scalars['String']>>
  application?: Maybe<WorkingGroupApplicationWhereInput>
  question?: Maybe<ApplicationFormQuestionWhereInput>
  AND?: Maybe<Array<ApplicationFormQuestionAnswerWhereInput>>
  OR?: Maybe<Array<ApplicationFormQuestionAnswerWhereInput>>
}

export type ApplicationFormQuestionAnswerWhereUniqueInput = {
  id: Scalars['ID']
}

export type ApplicationFormQuestionConnection = {
  __typename: 'ApplicationFormQuestionConnection'
  totalCount: Scalars['Int']
  edges: Array<ApplicationFormQuestionEdge>
  pageInfo: PageInfo
}

export type ApplicationFormQuestionCreateInput = {
  openingMetadata: Scalars['ID']
  question?: Maybe<Scalars['String']>
  type: ApplicationFormQuestionType
  index: Scalars['Float']
}

export type ApplicationFormQuestionEdge = {
  __typename: 'ApplicationFormQuestionEdge'
  node: ApplicationFormQuestion
  cursor: Scalars['String']
}

export enum ApplicationFormQuestionOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  OpeningMetadataAsc = 'openingMetadata_ASC',
  OpeningMetadataDesc = 'openingMetadata_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC',
}

export enum ApplicationFormQuestionType {
  Text = 'TEXT',
  Textarea = 'TEXTAREA',
}

export type ApplicationFormQuestionUpdateInput = {
  openingMetadata?: Maybe<Scalars['ID']>
  question?: Maybe<Scalars['String']>
  type?: Maybe<ApplicationFormQuestionType>
  index?: Maybe<Scalars['Float']>
}

export type ApplicationFormQuestionWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  openingMetadata_eq?: Maybe<Scalars['ID']>
  openingMetadata_in?: Maybe<Array<Scalars['ID']>>
  question_eq?: Maybe<Scalars['String']>
  question_contains?: Maybe<Scalars['String']>
  question_startsWith?: Maybe<Scalars['String']>
  question_endsWith?: Maybe<Scalars['String']>
  question_in?: Maybe<Array<Scalars['String']>>
  type_eq?: Maybe<ApplicationFormQuestionType>
  type_in?: Maybe<Array<ApplicationFormQuestionType>>
  index_eq?: Maybe<Scalars['Int']>
  index_gt?: Maybe<Scalars['Int']>
  index_gte?: Maybe<Scalars['Int']>
  index_lt?: Maybe<Scalars['Int']>
  index_lte?: Maybe<Scalars['Int']>
  index_in?: Maybe<Array<Scalars['Int']>>
  openingMetadata?: Maybe<WorkingGroupOpeningMetadataWhereInput>
  applicationformquestionanswerquestion_none?: Maybe<ApplicationFormQuestionAnswerWhereInput>
  applicationformquestionanswerquestion_some?: Maybe<ApplicationFormQuestionAnswerWhereInput>
  applicationformquestionanswerquestion_every?: Maybe<ApplicationFormQuestionAnswerWhereInput>
  AND?: Maybe<Array<ApplicationFormQuestionWhereInput>>
  OR?: Maybe<Array<ApplicationFormQuestionWhereInput>>
}

export type ApplicationFormQuestionWhereUniqueInput = {
  id: Scalars['ID']
}

export type ApplicationStatusAccepted = {
  __typename: 'ApplicationStatusAccepted'
  openingFilledEvent?: Maybe<OpeningFilledEvent>
}

export type ApplicationStatusCancelled = {
  __typename: 'ApplicationStatusCancelled'
  openingCanceledEvent?: Maybe<OpeningCanceledEvent>
}

export type ApplicationStatusPending = {
  __typename: 'ApplicationStatusPending'
  phantom?: Maybe<Scalars['Int']>
}

export type ApplicationStatusPendingCreateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type ApplicationStatusPendingUpdateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type ApplicationStatusPendingWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  phantom_eq?: Maybe<Scalars['Int']>
  phantom_gt?: Maybe<Scalars['Int']>
  phantom_gte?: Maybe<Scalars['Int']>
  phantom_lt?: Maybe<Scalars['Int']>
  phantom_lte?: Maybe<Scalars['Int']>
  phantom_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<ApplicationStatusPendingWhereInput>>
  OR?: Maybe<Array<ApplicationStatusPendingWhereInput>>
}

export type ApplicationStatusPendingWhereUniqueInput = {
  id: Scalars['ID']
}

export type ApplicationStatusRejected = {
  __typename: 'ApplicationStatusRejected'
  openingFilledEvent?: Maybe<OpeningFilledEvent>
}

export type ApplicationStatusWithdrawn = {
  __typename: 'ApplicationStatusWithdrawn'
  applicationWithdrawnEvent?: Maybe<ApplicationWithdrawnEvent>
}

export type ApplicationWithdrawnEvent = Event &
  BaseGraphQlObject & {
    __typename: 'ApplicationWithdrawnEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    application: WorkingGroupApplication
    applicationId: Scalars['String']
  }

export type ApplicationWithdrawnEventConnection = {
  __typename: 'ApplicationWithdrawnEventConnection'
  totalCount: Scalars['Int']
  edges: Array<ApplicationWithdrawnEventEdge>
  pageInfo: PageInfo
}

export type ApplicationWithdrawnEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  application: Scalars['ID']
}

export type ApplicationWithdrawnEventEdge = {
  __typename: 'ApplicationWithdrawnEventEdge'
  node: ApplicationWithdrawnEvent
  cursor: Scalars['String']
}

export enum ApplicationWithdrawnEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  ApplicationAsc = 'application_ASC',
  ApplicationDesc = 'application_DESC',
}

export type ApplicationWithdrawnEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  application?: Maybe<Scalars['ID']>
}

export type ApplicationWithdrawnEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  application_eq?: Maybe<Scalars['ID']>
  application_in?: Maybe<Array<Scalars['ID']>>
  group?: Maybe<WorkingGroupWhereInput>
  application?: Maybe<WorkingGroupApplicationWhereInput>
  AND?: Maybe<Array<ApplicationWithdrawnEventWhereInput>>
  OR?: Maybe<Array<ApplicationWithdrawnEventWhereInput>>
}

export type ApplicationWithdrawnEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type AppliedOnOpeningEvent = Event &
  BaseGraphQlObject & {
    __typename: 'AppliedOnOpeningEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    opening: WorkingGroupOpening
    openingId: Scalars['String']
    application: WorkingGroupApplication
    applicationId: Scalars['String']
  }

export type AppliedOnOpeningEventConnection = {
  __typename: 'AppliedOnOpeningEventConnection'
  totalCount: Scalars['Int']
  edges: Array<AppliedOnOpeningEventEdge>
  pageInfo: PageInfo
}

export type AppliedOnOpeningEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  opening: Scalars['ID']
  application: Scalars['ID']
}

export type AppliedOnOpeningEventEdge = {
  __typename: 'AppliedOnOpeningEventEdge'
  node: AppliedOnOpeningEvent
  cursor: Scalars['String']
}

export enum AppliedOnOpeningEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  OpeningAsc = 'opening_ASC',
  OpeningDesc = 'opening_DESC',
  ApplicationAsc = 'application_ASC',
  ApplicationDesc = 'application_DESC',
}

export type AppliedOnOpeningEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  opening?: Maybe<Scalars['ID']>
  application?: Maybe<Scalars['ID']>
}

export type AppliedOnOpeningEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  opening_eq?: Maybe<Scalars['ID']>
  opening_in?: Maybe<Array<Scalars['ID']>>
  application_eq?: Maybe<Scalars['ID']>
  application_in?: Maybe<Array<Scalars['ID']>>
  group?: Maybe<WorkingGroupWhereInput>
  opening?: Maybe<WorkingGroupOpeningWhereInput>
  application?: Maybe<WorkingGroupApplicationWhereInput>
  AND?: Maybe<Array<AppliedOnOpeningEventWhereInput>>
  OR?: Maybe<Array<AppliedOnOpeningEventWhereInput>>
}

export type AppliedOnOpeningEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type BaseGraphQlObject = {
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type BaseModel = BaseGraphQlObject & {
  __typename: 'BaseModel'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type BaseModelUuid = BaseGraphQlObject & {
  __typename: 'BaseModelUUID'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type BaseWhereInput = {
  id_eq?: Maybe<Scalars['String']>
  id_in?: Maybe<Array<Scalars['String']>>
  createdAt_eq?: Maybe<Scalars['String']>
  createdAt_lt?: Maybe<Scalars['String']>
  createdAt_lte?: Maybe<Scalars['String']>
  createdAt_gt?: Maybe<Scalars['String']>
  createdAt_gte?: Maybe<Scalars['String']>
  createdById_eq?: Maybe<Scalars['String']>
  updatedAt_eq?: Maybe<Scalars['String']>
  updatedAt_lt?: Maybe<Scalars['String']>
  updatedAt_lte?: Maybe<Scalars['String']>
  updatedAt_gt?: Maybe<Scalars['String']>
  updatedAt_gte?: Maybe<Scalars['String']>
  updatedById_eq?: Maybe<Scalars['String']>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['String']>
  deletedAt_lt?: Maybe<Scalars['String']>
  deletedAt_lte?: Maybe<Scalars['String']>
  deletedAt_gt?: Maybe<Scalars['String']>
  deletedAt_gte?: Maybe<Scalars['String']>
  deletedById_eq?: Maybe<Scalars['String']>
}

export type BudgetSetEvent = Event &
  BaseGraphQlObject & {
    __typename: 'BudgetSetEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    newBudget: Scalars['BigInt']
  }

export type BudgetSetEventConnection = {
  __typename: 'BudgetSetEventConnection'
  totalCount: Scalars['Int']
  edges: Array<BudgetSetEventEdge>
  pageInfo: PageInfo
}

export type BudgetSetEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  newBudget: Scalars['BigInt']
}

export type BudgetSetEventEdge = {
  __typename: 'BudgetSetEventEdge'
  node: BudgetSetEvent
  cursor: Scalars['String']
}

export enum BudgetSetEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  NewBudgetAsc = 'newBudget_ASC',
  NewBudgetDesc = 'newBudget_DESC',
}

export type BudgetSetEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  newBudget?: Maybe<Scalars['BigInt']>
}

export type BudgetSetEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  newBudget_eq?: Maybe<Scalars['BigInt']>
  newBudget_gt?: Maybe<Scalars['BigInt']>
  newBudget_gte?: Maybe<Scalars['BigInt']>
  newBudget_lt?: Maybe<Scalars['BigInt']>
  newBudget_lte?: Maybe<Scalars['BigInt']>
  newBudget_in?: Maybe<Array<Scalars['BigInt']>>
  group?: Maybe<WorkingGroupWhereInput>
  AND?: Maybe<Array<BudgetSetEventWhereInput>>
  OR?: Maybe<Array<BudgetSetEventWhereInput>>
}

export type BudgetSetEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type BudgetSpendingEvent = Event &
  BaseGraphQlObject & {
    __typename: 'BudgetSpendingEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    reciever: Scalars['String']
    amount: Scalars['BigInt']
    rationale?: Maybe<Scalars['String']>
  }

export type BudgetSpendingEventConnection = {
  __typename: 'BudgetSpendingEventConnection'
  totalCount: Scalars['Int']
  edges: Array<BudgetSpendingEventEdge>
  pageInfo: PageInfo
}

export type BudgetSpendingEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  reciever: Scalars['String']
  amount: Scalars['BigInt']
  rationale?: Maybe<Scalars['String']>
}

export type BudgetSpendingEventEdge = {
  __typename: 'BudgetSpendingEventEdge'
  node: BudgetSpendingEvent
  cursor: Scalars['String']
}

export enum BudgetSpendingEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  RecieverAsc = 'reciever_ASC',
  RecieverDesc = 'reciever_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
}

export type BudgetSpendingEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  reciever?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['BigInt']>
  rationale?: Maybe<Scalars['String']>
}

export type BudgetSpendingEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  reciever_eq?: Maybe<Scalars['String']>
  reciever_contains?: Maybe<Scalars['String']>
  reciever_startsWith?: Maybe<Scalars['String']>
  reciever_endsWith?: Maybe<Scalars['String']>
  reciever_in?: Maybe<Array<Scalars['String']>>
  amount_eq?: Maybe<Scalars['BigInt']>
  amount_gt?: Maybe<Scalars['BigInt']>
  amount_gte?: Maybe<Scalars['BigInt']>
  amount_lt?: Maybe<Scalars['BigInt']>
  amount_lte?: Maybe<Scalars['BigInt']>
  amount_in?: Maybe<Array<Scalars['BigInt']>>
  rationale_eq?: Maybe<Scalars['String']>
  rationale_contains?: Maybe<Scalars['String']>
  rationale_startsWith?: Maybe<Scalars['String']>
  rationale_endsWith?: Maybe<Scalars['String']>
  rationale_in?: Maybe<Array<Scalars['String']>>
  group?: Maybe<WorkingGroupWhereInput>
  AND?: Maybe<Array<BudgetSpendingEventWhereInput>>
  OR?: Maybe<Array<BudgetSpendingEventWhereInput>>
}

export type BudgetSpendingEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type CancelWorkingGroupLeadOpeningProposalDetails = {
  __typename: 'CancelWorkingGroupLeadOpeningProposalDetails'
  opening?: Maybe<WorkingGroupOpening>
}

export type CategoryCreatedEvent = BaseGraphQlObject & {
  __typename: 'CategoryCreatedEvent'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Int']
  network: Network
  indexInBlock: Scalars['Int']
  category: ForumCategory
  categoryId: Scalars['String']
}

export type CategoryCreatedEventConnection = {
  __typename: 'CategoryCreatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<CategoryCreatedEventEdge>
  pageInfo: PageInfo
}

export type CategoryCreatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  category: Scalars['ID']
}

export type CategoryCreatedEventEdge = {
  __typename: 'CategoryCreatedEventEdge'
  node: CategoryCreatedEvent
  cursor: Scalars['String']
}

export enum CategoryCreatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
}

export type CategoryCreatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  category?: Maybe<Scalars['ID']>
}

export type CategoryCreatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  category_eq?: Maybe<Scalars['ID']>
  category_in?: Maybe<Array<Scalars['ID']>>
  category?: Maybe<ForumCategoryWhereInput>
  AND?: Maybe<Array<CategoryCreatedEventWhereInput>>
  OR?: Maybe<Array<CategoryCreatedEventWhereInput>>
}

export type CategoryCreatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type CategoryDeletedEvent = BaseGraphQlObject & {
  __typename: 'CategoryDeletedEvent'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Int']
  network: Network
  indexInBlock: Scalars['Int']
  category: ForumCategory
  categoryId: Scalars['String']
  actor: Worker
  actorId: Scalars['String']
}

export type CategoryDeletedEventConnection = {
  __typename: 'CategoryDeletedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<CategoryDeletedEventEdge>
  pageInfo: PageInfo
}

export type CategoryDeletedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  category: Scalars['ID']
  actor: Scalars['ID']
}

export type CategoryDeletedEventEdge = {
  __typename: 'CategoryDeletedEventEdge'
  node: CategoryDeletedEvent
  cursor: Scalars['String']
}

export enum CategoryDeletedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  ActorAsc = 'actor_ASC',
  ActorDesc = 'actor_DESC',
}

export type CategoryDeletedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  category?: Maybe<Scalars['ID']>
  actor?: Maybe<Scalars['ID']>
}

export type CategoryDeletedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  category_eq?: Maybe<Scalars['ID']>
  category_in?: Maybe<Array<Scalars['ID']>>
  actor_eq?: Maybe<Scalars['ID']>
  actor_in?: Maybe<Array<Scalars['ID']>>
  category?: Maybe<ForumCategoryWhereInput>
  actor?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<CategoryDeletedEventWhereInput>>
  OR?: Maybe<Array<CategoryDeletedEventWhereInput>>
}

export type CategoryDeletedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type CategoryMembershipOfModeratorUpdatedEvent = BaseGraphQlObject & {
  __typename: 'CategoryMembershipOfModeratorUpdatedEvent'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Int']
  network: Network
  indexInBlock: Scalars['Int']
  moderator: Worker
  moderatorId: Scalars['String']
  category: ForumCategory
  categoryId: Scalars['String']
  newCanModerateValue: Scalars['Boolean']
}

export type CategoryMembershipOfModeratorUpdatedEventConnection = {
  __typename: 'CategoryMembershipOfModeratorUpdatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<CategoryMembershipOfModeratorUpdatedEventEdge>
  pageInfo: PageInfo
}

export type CategoryMembershipOfModeratorUpdatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  moderator: Scalars['ID']
  category: Scalars['ID']
  newCanModerateValue: Scalars['Boolean']
}

export type CategoryMembershipOfModeratorUpdatedEventEdge = {
  __typename: 'CategoryMembershipOfModeratorUpdatedEventEdge'
  node: CategoryMembershipOfModeratorUpdatedEvent
  cursor: Scalars['String']
}

export enum CategoryMembershipOfModeratorUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  ModeratorAsc = 'moderator_ASC',
  ModeratorDesc = 'moderator_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  NewCanModerateValueAsc = 'newCanModerateValue_ASC',
  NewCanModerateValueDesc = 'newCanModerateValue_DESC',
}

export type CategoryMembershipOfModeratorUpdatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  moderator?: Maybe<Scalars['ID']>
  category?: Maybe<Scalars['ID']>
  newCanModerateValue?: Maybe<Scalars['Boolean']>
}

export type CategoryMembershipOfModeratorUpdatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  moderator_eq?: Maybe<Scalars['ID']>
  moderator_in?: Maybe<Array<Scalars['ID']>>
  category_eq?: Maybe<Scalars['ID']>
  category_in?: Maybe<Array<Scalars['ID']>>
  newCanModerateValue_eq?: Maybe<Scalars['Boolean']>
  newCanModerateValue_in?: Maybe<Array<Scalars['Boolean']>>
  moderator?: Maybe<WorkerWhereInput>
  category?: Maybe<ForumCategoryWhereInput>
  AND?: Maybe<Array<CategoryMembershipOfModeratorUpdatedEventWhereInput>>
  OR?: Maybe<Array<CategoryMembershipOfModeratorUpdatedEventWhereInput>>
}

export type CategoryMembershipOfModeratorUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type CategoryStatus = CategoryStatusActive | CategoryStatusArchived | CategoryStatusRemoved

export type CategoryStatusActive = {
  __typename: 'CategoryStatusActive'
  phantom?: Maybe<Scalars['Int']>
}

export type CategoryStatusActiveCreateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type CategoryStatusActiveUpdateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type CategoryStatusActiveWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  phantom_eq?: Maybe<Scalars['Int']>
  phantom_gt?: Maybe<Scalars['Int']>
  phantom_gte?: Maybe<Scalars['Int']>
  phantom_lt?: Maybe<Scalars['Int']>
  phantom_lte?: Maybe<Scalars['Int']>
  phantom_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<CategoryStatusActiveWhereInput>>
  OR?: Maybe<Array<CategoryStatusActiveWhereInput>>
}

export type CategoryStatusActiveWhereUniqueInput = {
  id: Scalars['ID']
}

export type CategoryStatusArchived = {
  __typename: 'CategoryStatusArchived'
  categoryUpdatedEvent?: Maybe<CategoryUpdatedEvent>
}

export type CategoryStatusRemoved = {
  __typename: 'CategoryStatusRemoved'
  categoryDeletedEvent?: Maybe<CategoryDeletedEvent>
}

export type CategoryStickyThreadUpdateEvent = BaseGraphQlObject & {
  __typename: 'CategoryStickyThreadUpdateEvent'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Int']
  network: Network
  indexInBlock: Scalars['Int']
  category: ForumCategory
  categoryId: Scalars['String']
  newStickyThreads: Array<ForumThread>
  actor: Worker
  actorId: Scalars['String']
}

export type CategoryStickyThreadUpdateEventConnection = {
  __typename: 'CategoryStickyThreadUpdateEventConnection'
  totalCount: Scalars['Int']
  edges: Array<CategoryStickyThreadUpdateEventEdge>
  pageInfo: PageInfo
}

export type CategoryStickyThreadUpdateEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  category: Scalars['ID']
  actor: Scalars['ID']
}

export type CategoryStickyThreadUpdateEventEdge = {
  __typename: 'CategoryStickyThreadUpdateEventEdge'
  node: CategoryStickyThreadUpdateEvent
  cursor: Scalars['String']
}

export enum CategoryStickyThreadUpdateEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  ActorAsc = 'actor_ASC',
  ActorDesc = 'actor_DESC',
}

export type CategoryStickyThreadUpdateEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  category?: Maybe<Scalars['ID']>
  actor?: Maybe<Scalars['ID']>
}

export type CategoryStickyThreadUpdateEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  category_eq?: Maybe<Scalars['ID']>
  category_in?: Maybe<Array<Scalars['ID']>>
  actor_eq?: Maybe<Scalars['ID']>
  actor_in?: Maybe<Array<Scalars['ID']>>
  category?: Maybe<ForumCategoryWhereInput>
  newStickyThreads_none?: Maybe<ForumThreadWhereInput>
  newStickyThreads_some?: Maybe<ForumThreadWhereInput>
  newStickyThreads_every?: Maybe<ForumThreadWhereInput>
  actor?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<CategoryStickyThreadUpdateEventWhereInput>>
  OR?: Maybe<Array<CategoryStickyThreadUpdateEventWhereInput>>
}

export type CategoryStickyThreadUpdateEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type CategoryUpdatedEvent = BaseGraphQlObject & {
  __typename: 'CategoryUpdatedEvent'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Int']
  network: Network
  indexInBlock: Scalars['Int']
  category: ForumCategory
  categoryId: Scalars['String']
  newArchivalStatus: Scalars['Boolean']
  actor: Worker
  actorId: Scalars['String']
}

export type CategoryUpdatedEventConnection = {
  __typename: 'CategoryUpdatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<CategoryUpdatedEventEdge>
  pageInfo: PageInfo
}

export type CategoryUpdatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  category: Scalars['ID']
  newArchivalStatus: Scalars['Boolean']
  actor: Scalars['ID']
}

export type CategoryUpdatedEventEdge = {
  __typename: 'CategoryUpdatedEventEdge'
  node: CategoryUpdatedEvent
  cursor: Scalars['String']
}

export enum CategoryUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  NewArchivalStatusAsc = 'newArchivalStatus_ASC',
  NewArchivalStatusDesc = 'newArchivalStatus_DESC',
  ActorAsc = 'actor_ASC',
  ActorDesc = 'actor_DESC',
}

export type CategoryUpdatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  category?: Maybe<Scalars['ID']>
  newArchivalStatus?: Maybe<Scalars['Boolean']>
  actor?: Maybe<Scalars['ID']>
}

export type CategoryUpdatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  category_eq?: Maybe<Scalars['ID']>
  category_in?: Maybe<Array<Scalars['ID']>>
  newArchivalStatus_eq?: Maybe<Scalars['Boolean']>
  newArchivalStatus_in?: Maybe<Array<Scalars['Boolean']>>
  actor_eq?: Maybe<Scalars['ID']>
  actor_in?: Maybe<Array<Scalars['ID']>>
  category?: Maybe<ForumCategoryWhereInput>
  actor?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<CategoryUpdatedEventWhereInput>>
  OR?: Maybe<Array<CategoryUpdatedEventWhereInput>>
}

export type CategoryUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type CreateBlogPostProposalDetails = {
  __typename: 'CreateBlogPostProposalDetails'
  title: Scalars['String']
  body: Scalars['String']
}

export type CreateBlogPostProposalDetailsCreateInput = {
  title: Scalars['String']
  body: Scalars['String']
}

export type CreateBlogPostProposalDetailsUpdateInput = {
  title?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
}

export type CreateBlogPostProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  title_eq?: Maybe<Scalars['String']>
  title_contains?: Maybe<Scalars['String']>
  title_startsWith?: Maybe<Scalars['String']>
  title_endsWith?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Scalars['String']>>
  body_eq?: Maybe<Scalars['String']>
  body_contains?: Maybe<Scalars['String']>
  body_startsWith?: Maybe<Scalars['String']>
  body_endsWith?: Maybe<Scalars['String']>
  body_in?: Maybe<Array<Scalars['String']>>
  AND?: Maybe<Array<CreateBlogPostProposalDetailsWhereInput>>
  OR?: Maybe<Array<CreateBlogPostProposalDetailsWhereInput>>
}

export type CreateBlogPostProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type CreateWorkingGroupLeadOpeningProposalDetails = {
  __typename: 'CreateWorkingGroupLeadOpeningProposalDetails'
  metadata?: Maybe<WorkingGroupOpeningMetadata>
  stakeAmount: Scalars['BigInt']
  unstakingPeriod: Scalars['Int']
  rewardPerBlock: Scalars['BigInt']
  group?: Maybe<WorkingGroup>
}

export type CreateWorkingGroupLeadOpeningProposalDetailsCreateInput = {
  stakeAmount: Scalars['BigInt']
  unstakingPeriod: Scalars['Float']
  rewardPerBlock: Scalars['BigInt']
}

export type CreateWorkingGroupLeadOpeningProposalDetailsUpdateInput = {
  stakeAmount?: Maybe<Scalars['BigInt']>
  unstakingPeriod?: Maybe<Scalars['Float']>
  rewardPerBlock?: Maybe<Scalars['BigInt']>
}

export type CreateWorkingGroupLeadOpeningProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  stakeAmount_eq?: Maybe<Scalars['BigInt']>
  stakeAmount_gt?: Maybe<Scalars['BigInt']>
  stakeAmount_gte?: Maybe<Scalars['BigInt']>
  stakeAmount_lt?: Maybe<Scalars['BigInt']>
  stakeAmount_lte?: Maybe<Scalars['BigInt']>
  stakeAmount_in?: Maybe<Array<Scalars['BigInt']>>
  unstakingPeriod_eq?: Maybe<Scalars['Int']>
  unstakingPeriod_gt?: Maybe<Scalars['Int']>
  unstakingPeriod_gte?: Maybe<Scalars['Int']>
  unstakingPeriod_lt?: Maybe<Scalars['Int']>
  unstakingPeriod_lte?: Maybe<Scalars['Int']>
  unstakingPeriod_in?: Maybe<Array<Scalars['Int']>>
  rewardPerBlock_eq?: Maybe<Scalars['BigInt']>
  rewardPerBlock_gt?: Maybe<Scalars['BigInt']>
  rewardPerBlock_gte?: Maybe<Scalars['BigInt']>
  rewardPerBlock_lt?: Maybe<Scalars['BigInt']>
  rewardPerBlock_lte?: Maybe<Scalars['BigInt']>
  rewardPerBlock_in?: Maybe<Array<Scalars['BigInt']>>
  AND?: Maybe<Array<CreateWorkingGroupLeadOpeningProposalDetailsWhereInput>>
  OR?: Maybe<Array<CreateWorkingGroupLeadOpeningProposalDetailsWhereInput>>
}

export type CreateWorkingGroupLeadOpeningProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type DataObject = BaseGraphQlObject & {
  __typename: 'DataObject'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  owner: DataObjectOwner
  addedAt: Scalars['Int']
  typeId: Scalars['Int']
  size: Scalars['BigInt']
  liaisonId: Scalars['BigInt']
  liaisonJudgement: LiaisonJudgement
  ipfsContentId: Scalars['String']
  joystreamContentId: Scalars['String']
  membermetadataavatar?: Maybe<Array<MemberMetadata>>
}

export type DataObjectConnection = {
  __typename: 'DataObjectConnection'
  totalCount: Scalars['Int']
  edges: Array<DataObjectEdge>
  pageInfo: PageInfo
}

export type DataObjectCreateInput = {
  owner: Scalars['JSONObject']
  addedAt: Scalars['Float']
  typeId: Scalars['Float']
  size: Scalars['BigInt']
  liaisonId: Scalars['BigInt']
  liaisonJudgement: LiaisonJudgement
  ipfsContentId: Scalars['String']
  joystreamContentId: Scalars['String']
}

export type DataObjectEdge = {
  __typename: 'DataObjectEdge'
  node: DataObject
  cursor: Scalars['String']
}

export enum DataObjectOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  AddedAtAsc = 'addedAt_ASC',
  AddedAtDesc = 'addedAt_DESC',
  TypeIdAsc = 'typeId_ASC',
  TypeIdDesc = 'typeId_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  LiaisonIdAsc = 'liaisonId_ASC',
  LiaisonIdDesc = 'liaisonId_DESC',
  LiaisonJudgementAsc = 'liaisonJudgement_ASC',
  LiaisonJudgementDesc = 'liaisonJudgement_DESC',
  IpfsContentIdAsc = 'ipfsContentId_ASC',
  IpfsContentIdDesc = 'ipfsContentId_DESC',
  JoystreamContentIdAsc = 'joystreamContentId_ASC',
  JoystreamContentIdDesc = 'joystreamContentId_DESC',
}

export type DataObjectOwner =
  | DataObjectOwnerMember
  | DataObjectOwnerChannel
  | DataObjectOwnerDao
  | DataObjectOwnerCouncil
  | DataObjectOwnerWorkingGroup

export type DataObjectOwnerChannel = {
  __typename: 'DataObjectOwnerChannel'
  channel: Scalars['BigInt']
  dummy?: Maybe<Scalars['Int']>
}

export type DataObjectOwnerChannelCreateInput = {
  channel: Scalars['BigInt']
  dummy?: Maybe<Scalars['Float']>
}

export type DataObjectOwnerChannelUpdateInput = {
  channel?: Maybe<Scalars['BigInt']>
  dummy?: Maybe<Scalars['Float']>
}

export type DataObjectOwnerChannelWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  channel_eq?: Maybe<Scalars['BigInt']>
  channel_gt?: Maybe<Scalars['BigInt']>
  channel_gte?: Maybe<Scalars['BigInt']>
  channel_lt?: Maybe<Scalars['BigInt']>
  channel_lte?: Maybe<Scalars['BigInt']>
  channel_in?: Maybe<Array<Scalars['BigInt']>>
  dummy_eq?: Maybe<Scalars['Int']>
  dummy_gt?: Maybe<Scalars['Int']>
  dummy_gte?: Maybe<Scalars['Int']>
  dummy_lt?: Maybe<Scalars['Int']>
  dummy_lte?: Maybe<Scalars['Int']>
  dummy_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<DataObjectOwnerChannelWhereInput>>
  OR?: Maybe<Array<DataObjectOwnerChannelWhereInput>>
}

export type DataObjectOwnerChannelWhereUniqueInput = {
  id: Scalars['ID']
}

export type DataObjectOwnerCouncil = {
  __typename: 'DataObjectOwnerCouncil'
  dummy?: Maybe<Scalars['Int']>
}

export type DataObjectOwnerCouncilCreateInput = {
  dummy?: Maybe<Scalars['Float']>
}

export type DataObjectOwnerCouncilUpdateInput = {
  dummy?: Maybe<Scalars['Float']>
}

export type DataObjectOwnerCouncilWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  dummy_eq?: Maybe<Scalars['Int']>
  dummy_gt?: Maybe<Scalars['Int']>
  dummy_gte?: Maybe<Scalars['Int']>
  dummy_lt?: Maybe<Scalars['Int']>
  dummy_lte?: Maybe<Scalars['Int']>
  dummy_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<DataObjectOwnerCouncilWhereInput>>
  OR?: Maybe<Array<DataObjectOwnerCouncilWhereInput>>
}

export type DataObjectOwnerCouncilWhereUniqueInput = {
  id: Scalars['ID']
}

export type DataObjectOwnerDao = {
  __typename: 'DataObjectOwnerDao'
  dao: Scalars['BigInt']
}

export type DataObjectOwnerDaoCreateInput = {
  dao: Scalars['BigInt']
}

export type DataObjectOwnerDaoUpdateInput = {
  dao?: Maybe<Scalars['BigInt']>
}

export type DataObjectOwnerDaoWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  dao_eq?: Maybe<Scalars['BigInt']>
  dao_gt?: Maybe<Scalars['BigInt']>
  dao_gte?: Maybe<Scalars['BigInt']>
  dao_lt?: Maybe<Scalars['BigInt']>
  dao_lte?: Maybe<Scalars['BigInt']>
  dao_in?: Maybe<Array<Scalars['BigInt']>>
  AND?: Maybe<Array<DataObjectOwnerDaoWhereInput>>
  OR?: Maybe<Array<DataObjectOwnerDaoWhereInput>>
}

export type DataObjectOwnerDaoWhereUniqueInput = {
  id: Scalars['ID']
}

export type DataObjectOwnerMember = {
  __typename: 'DataObjectOwnerMember'
  member: Scalars['BigInt']
  dummy?: Maybe<Scalars['Int']>
}

export type DataObjectOwnerMemberCreateInput = {
  member: Scalars['BigInt']
  dummy?: Maybe<Scalars['Float']>
}

export type DataObjectOwnerMemberUpdateInput = {
  member?: Maybe<Scalars['BigInt']>
  dummy?: Maybe<Scalars['Float']>
}

export type DataObjectOwnerMemberWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  member_eq?: Maybe<Scalars['BigInt']>
  member_gt?: Maybe<Scalars['BigInt']>
  member_gte?: Maybe<Scalars['BigInt']>
  member_lt?: Maybe<Scalars['BigInt']>
  member_lte?: Maybe<Scalars['BigInt']>
  member_in?: Maybe<Array<Scalars['BigInt']>>
  dummy_eq?: Maybe<Scalars['Int']>
  dummy_gt?: Maybe<Scalars['Int']>
  dummy_gte?: Maybe<Scalars['Int']>
  dummy_lt?: Maybe<Scalars['Int']>
  dummy_lte?: Maybe<Scalars['Int']>
  dummy_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<DataObjectOwnerMemberWhereInput>>
  OR?: Maybe<Array<DataObjectOwnerMemberWhereInput>>
}

export type DataObjectOwnerMemberWhereUniqueInput = {
  id: Scalars['ID']
}

export type DataObjectOwnerWorkingGroup = {
  __typename: 'DataObjectOwnerWorkingGroup'
  dummy?: Maybe<Scalars['Int']>
}

export type DataObjectOwnerWorkingGroupCreateInput = {
  dummy?: Maybe<Scalars['Float']>
}

export type DataObjectOwnerWorkingGroupUpdateInput = {
  dummy?: Maybe<Scalars['Float']>
}

export type DataObjectOwnerWorkingGroupWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  dummy_eq?: Maybe<Scalars['Int']>
  dummy_gt?: Maybe<Scalars['Int']>
  dummy_gte?: Maybe<Scalars['Int']>
  dummy_lt?: Maybe<Scalars['Int']>
  dummy_lte?: Maybe<Scalars['Int']>
  dummy_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<DataObjectOwnerWorkingGroupWhereInput>>
  OR?: Maybe<Array<DataObjectOwnerWorkingGroupWhereInput>>
}

export type DataObjectOwnerWorkingGroupWhereUniqueInput = {
  id: Scalars['ID']
}

export type DataObjectUpdateInput = {
  owner?: Maybe<Scalars['JSONObject']>
  addedAt?: Maybe<Scalars['Float']>
  typeId?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['BigInt']>
  liaisonId?: Maybe<Scalars['BigInt']>
  liaisonJudgement?: Maybe<LiaisonJudgement>
  ipfsContentId?: Maybe<Scalars['String']>
  joystreamContentId?: Maybe<Scalars['String']>
}

export type DataObjectWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  owner_json?: Maybe<Scalars['JSONObject']>
  addedAt_eq?: Maybe<Scalars['Int']>
  addedAt_gt?: Maybe<Scalars['Int']>
  addedAt_gte?: Maybe<Scalars['Int']>
  addedAt_lt?: Maybe<Scalars['Int']>
  addedAt_lte?: Maybe<Scalars['Int']>
  addedAt_in?: Maybe<Array<Scalars['Int']>>
  typeId_eq?: Maybe<Scalars['Int']>
  typeId_gt?: Maybe<Scalars['Int']>
  typeId_gte?: Maybe<Scalars['Int']>
  typeId_lt?: Maybe<Scalars['Int']>
  typeId_lte?: Maybe<Scalars['Int']>
  typeId_in?: Maybe<Array<Scalars['Int']>>
  size_eq?: Maybe<Scalars['BigInt']>
  size_gt?: Maybe<Scalars['BigInt']>
  size_gte?: Maybe<Scalars['BigInt']>
  size_lt?: Maybe<Scalars['BigInt']>
  size_lte?: Maybe<Scalars['BigInt']>
  size_in?: Maybe<Array<Scalars['BigInt']>>
  liaisonId_eq?: Maybe<Scalars['BigInt']>
  liaisonId_gt?: Maybe<Scalars['BigInt']>
  liaisonId_gte?: Maybe<Scalars['BigInt']>
  liaisonId_lt?: Maybe<Scalars['BigInt']>
  liaisonId_lte?: Maybe<Scalars['BigInt']>
  liaisonId_in?: Maybe<Array<Scalars['BigInt']>>
  liaisonJudgement_eq?: Maybe<LiaisonJudgement>
  liaisonJudgement_in?: Maybe<Array<LiaisonJudgement>>
  ipfsContentId_eq?: Maybe<Scalars['String']>
  ipfsContentId_contains?: Maybe<Scalars['String']>
  ipfsContentId_startsWith?: Maybe<Scalars['String']>
  ipfsContentId_endsWith?: Maybe<Scalars['String']>
  ipfsContentId_in?: Maybe<Array<Scalars['String']>>
  joystreamContentId_eq?: Maybe<Scalars['String']>
  joystreamContentId_contains?: Maybe<Scalars['String']>
  joystreamContentId_startsWith?: Maybe<Scalars['String']>
  joystreamContentId_endsWith?: Maybe<Scalars['String']>
  joystreamContentId_in?: Maybe<Array<Scalars['String']>>
  membermetadataavatar_none?: Maybe<MemberMetadataWhereInput>
  membermetadataavatar_some?: Maybe<MemberMetadataWhereInput>
  membermetadataavatar_every?: Maybe<MemberMetadataWhereInput>
  AND?: Maybe<Array<DataObjectWhereInput>>
  OR?: Maybe<Array<DataObjectWhereInput>>
}

export type DataObjectWhereUniqueInput = {
  id: Scalars['ID']
}

export type DecreaseWorkingGroupLeadStakeProposalDetails = {
  __typename: 'DecreaseWorkingGroupLeadStakeProposalDetails'
  lead?: Maybe<Worker>
  amount: Scalars['BigInt']
}

export type DecreaseWorkingGroupLeadStakeProposalDetailsCreateInput = {
  amount: Scalars['BigInt']
}

export type DecreaseWorkingGroupLeadStakeProposalDetailsUpdateInput = {
  amount?: Maybe<Scalars['BigInt']>
}

export type DecreaseWorkingGroupLeadStakeProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  amount_eq?: Maybe<Scalars['BigInt']>
  amount_gt?: Maybe<Scalars['BigInt']>
  amount_gte?: Maybe<Scalars['BigInt']>
  amount_lt?: Maybe<Scalars['BigInt']>
  amount_lte?: Maybe<Scalars['BigInt']>
  amount_in?: Maybe<Array<Scalars['BigInt']>>
  AND?: Maybe<Array<DecreaseWorkingGroupLeadStakeProposalDetailsWhereInput>>
  OR?: Maybe<Array<DecreaseWorkingGroupLeadStakeProposalDetailsWhereInput>>
}

export type DecreaseWorkingGroupLeadStakeProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type DeleteResponse = {
  id: Scalars['ID']
}

export type EditBlogPostProposalDetails = {
  __typename: 'EditBlogPostProposalDetails'
  blogPost: Scalars['String']
  newTitle?: Maybe<Scalars['String']>
  newBody?: Maybe<Scalars['String']>
}

export type EditBlogPostProposalDetailsCreateInput = {
  blogPost: Scalars['String']
  newTitle?: Maybe<Scalars['String']>
  newBody?: Maybe<Scalars['String']>
}

export type EditBlogPostProposalDetailsUpdateInput = {
  blogPost?: Maybe<Scalars['String']>
  newTitle?: Maybe<Scalars['String']>
  newBody?: Maybe<Scalars['String']>
}

export type EditBlogPostProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  blogPost_eq?: Maybe<Scalars['String']>
  blogPost_contains?: Maybe<Scalars['String']>
  blogPost_startsWith?: Maybe<Scalars['String']>
  blogPost_endsWith?: Maybe<Scalars['String']>
  blogPost_in?: Maybe<Array<Scalars['String']>>
  newTitle_eq?: Maybe<Scalars['String']>
  newTitle_contains?: Maybe<Scalars['String']>
  newTitle_startsWith?: Maybe<Scalars['String']>
  newTitle_endsWith?: Maybe<Scalars['String']>
  newTitle_in?: Maybe<Array<Scalars['String']>>
  newBody_eq?: Maybe<Scalars['String']>
  newBody_contains?: Maybe<Scalars['String']>
  newBody_startsWith?: Maybe<Scalars['String']>
  newBody_endsWith?: Maybe<Scalars['String']>
  newBody_in?: Maybe<Array<Scalars['String']>>
  AND?: Maybe<Array<EditBlogPostProposalDetailsWhereInput>>
  OR?: Maybe<Array<EditBlogPostProposalDetailsWhereInput>>
}

export type EditBlogPostProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type Event = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Int']
  network: Network
  indexInBlock: Scalars['Int']
  type?: Maybe<EventTypeOptions>
}

export type EventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  type?: Maybe<EventTypeOptions>
}

export enum EventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
}

export enum EventTypeOptions {
  ApplicationWithdrawnEvent = 'ApplicationWithdrawnEvent',
  AppliedOnOpeningEvent = 'AppliedOnOpeningEvent',
  BudgetSetEvent = 'BudgetSetEvent',
  BudgetSpendingEvent = 'BudgetSpendingEvent',
  InitialInvitationBalanceUpdatedEvent = 'InitialInvitationBalanceUpdatedEvent',
  InitialInvitationCountUpdatedEvent = 'InitialInvitationCountUpdatedEvent',
  InvitesTransferredEvent = 'InvitesTransferredEvent',
  LeaderInvitationQuotaUpdatedEvent = 'LeaderInvitationQuotaUpdatedEvent',
  LeaderSetEvent = 'LeaderSetEvent',
  LeaderUnsetEvent = 'LeaderUnsetEvent',
  MemberAccountsUpdatedEvent = 'MemberAccountsUpdatedEvent',
  MemberInvitedEvent = 'MemberInvitedEvent',
  MemberProfileUpdatedEvent = 'MemberProfileUpdatedEvent',
  MemberVerificationStatusUpdatedEvent = 'MemberVerificationStatusUpdatedEvent',
  MembershipBoughtEvent = 'MembershipBoughtEvent',
  MembershipPriceUpdatedEvent = 'MembershipPriceUpdatedEvent',
  NewMissedRewardLevelReachedEvent = 'NewMissedRewardLevelReachedEvent',
  OpeningAddedEvent = 'OpeningAddedEvent',
  OpeningCanceledEvent = 'OpeningCanceledEvent',
  OpeningFilledEvent = 'OpeningFilledEvent',
  ProposalCancelledEvent = 'ProposalCancelledEvent',
  ProposalCreatedEvent = 'ProposalCreatedEvent',
  ProposalDecisionMadeEvent = 'ProposalDecisionMadeEvent',
  ProposalDiscussionPostCreatedEvent = 'ProposalDiscussionPostCreatedEvent',
  ProposalDiscussionPostDeletedEvent = 'ProposalDiscussionPostDeletedEvent',
  ProposalDiscussionPostUpdatedEvent = 'ProposalDiscussionPostUpdatedEvent',
  ProposalDiscussionThreadCreatedEvent = 'ProposalDiscussionThreadCreatedEvent',
  ProposalDiscussionThreadModeChangedEvent = 'ProposalDiscussionThreadModeChangedEvent',
  ProposalExecutedEvent = 'ProposalExecutedEvent',
  ProposalStatusUpdatedEvent = 'ProposalStatusUpdatedEvent',
  ProposalVotedEvent = 'ProposalVotedEvent',
  ReferralCutUpdatedEvent = 'ReferralCutUpdatedEvent',
  RewardPaidEvent = 'RewardPaidEvent',
  StakeDecreasedEvent = 'StakeDecreasedEvent',
  StakeIncreasedEvent = 'StakeIncreasedEvent',
  StakeSlashedEvent = 'StakeSlashedEvent',
  StakingAccountAddedEvent = 'StakingAccountAddedEvent',
  StakingAccountConfirmedEvent = 'StakingAccountConfirmedEvent',
  StakingAccountRemovedEvent = 'StakingAccountRemovedEvent',
  StatusTextChangedEvent = 'StatusTextChangedEvent',
  TerminatedLeaderEvent = 'TerminatedLeaderEvent',
  TerminatedWorkerEvent = 'TerminatedWorkerEvent',
  WorkerExitedEvent = 'WorkerExitedEvent',
  WorkerRewardAccountUpdatedEvent = 'WorkerRewardAccountUpdatedEvent',
  WorkerRewardAmountUpdatedEvent = 'WorkerRewardAmountUpdatedEvent',
  WorkerRoleAccountUpdatedEvent = 'WorkerRoleAccountUpdatedEvent',
  WorkerStartedLeavingEvent = 'WorkerStartedLeavingEvent',
}

export type EventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  type?: Maybe<EventTypeOptions>
}

export type EventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  type_eq?: Maybe<EventTypeOptions>
  type_in?: Maybe<Array<EventTypeOptions>>
  AND?: Maybe<Array<EventWhereInput>>
  OR?: Maybe<Array<EventWhereInput>>
}

export type EventWhereUniqueInput = {
  id: Scalars['ID']
}

export type FillWorkingGroupLeadOpeningProposalDetails = {
  __typename: 'FillWorkingGroupLeadOpeningProposalDetails'
  opening?: Maybe<WorkingGroupOpening>
  application?: Maybe<WorkingGroupApplication>
}

export type ForumCategory = BaseGraphQlObject & {
  __typename: 'ForumCategory'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  parent?: Maybe<ForumCategory>
  parentId?: Maybe<Scalars['String']>
  title: Scalars['String']
  description: Scalars['String']
  threads: Array<ForumThread>
  moderators: Array<Worker>
  createdInEvent: CategoryCreatedEvent
  status: CategoryStatus
  categorydeletedeventcategory?: Maybe<Array<CategoryDeletedEvent>>
  categorymembershipofmoderatorupdatedeventcategory?: Maybe<Array<CategoryMembershipOfModeratorUpdatedEvent>>
  categorystickythreadupdateeventcategory?: Maybe<Array<CategoryStickyThreadUpdateEvent>>
  categoryupdatedeventcategory?: Maybe<Array<CategoryUpdatedEvent>>
  forumcategoryparent?: Maybe<Array<ForumCategory>>
  threadmovedeventoldCategory?: Maybe<Array<ThreadMovedEvent>>
  threadmovedeventnewCategory?: Maybe<Array<ThreadMovedEvent>>
}

export type ForumCategoryConnection = {
  __typename: 'ForumCategoryConnection'
  totalCount: Scalars['Int']
  edges: Array<ForumCategoryEdge>
  pageInfo: PageInfo
}

export type ForumCategoryCreateInput = {
  parent?: Maybe<Scalars['ID']>
  title: Scalars['String']
  description: Scalars['String']
  status: Scalars['JSONObject']
}

export type ForumCategoryEdge = {
  __typename: 'ForumCategoryEdge'
  node: ForumCategory
  cursor: Scalars['String']
}

export enum ForumCategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  ParentAsc = 'parent_ASC',
  ParentDesc = 'parent_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
}

export type ForumCategoryUpdateInput = {
  parent?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['JSONObject']>
}

export type ForumCategoryWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  parent_eq?: Maybe<Scalars['ID']>
  parent_in?: Maybe<Array<Scalars['ID']>>
  title_eq?: Maybe<Scalars['String']>
  title_contains?: Maybe<Scalars['String']>
  title_startsWith?: Maybe<Scalars['String']>
  title_endsWith?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Scalars['String']>>
  description_eq?: Maybe<Scalars['String']>
  description_contains?: Maybe<Scalars['String']>
  description_startsWith?: Maybe<Scalars['String']>
  description_endsWith?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Scalars['String']>>
  status_json?: Maybe<Scalars['JSONObject']>
  parent?: Maybe<ForumCategoryWhereInput>
  threads_none?: Maybe<ForumThreadWhereInput>
  threads_some?: Maybe<ForumThreadWhereInput>
  threads_every?: Maybe<ForumThreadWhereInput>
  moderators_none?: Maybe<WorkerWhereInput>
  moderators_some?: Maybe<WorkerWhereInput>
  moderators_every?: Maybe<WorkerWhereInput>
  createdInEvent?: Maybe<CategoryCreatedEventWhereInput>
  categorydeletedeventcategory_none?: Maybe<CategoryDeletedEventWhereInput>
  categorydeletedeventcategory_some?: Maybe<CategoryDeletedEventWhereInput>
  categorydeletedeventcategory_every?: Maybe<CategoryDeletedEventWhereInput>
  categorymembershipofmoderatorupdatedeventcategory_none?: Maybe<CategoryMembershipOfModeratorUpdatedEventWhereInput>
  categorymembershipofmoderatorupdatedeventcategory_some?: Maybe<CategoryMembershipOfModeratorUpdatedEventWhereInput>
  categorymembershipofmoderatorupdatedeventcategory_every?: Maybe<CategoryMembershipOfModeratorUpdatedEventWhereInput>
  categorystickythreadupdateeventcategory_none?: Maybe<CategoryStickyThreadUpdateEventWhereInput>
  categorystickythreadupdateeventcategory_some?: Maybe<CategoryStickyThreadUpdateEventWhereInput>
  categorystickythreadupdateeventcategory_every?: Maybe<CategoryStickyThreadUpdateEventWhereInput>
  categoryupdatedeventcategory_none?: Maybe<CategoryUpdatedEventWhereInput>
  categoryupdatedeventcategory_some?: Maybe<CategoryUpdatedEventWhereInput>
  categoryupdatedeventcategory_every?: Maybe<CategoryUpdatedEventWhereInput>
  forumcategoryparent_none?: Maybe<ForumCategoryWhereInput>
  forumcategoryparent_some?: Maybe<ForumCategoryWhereInput>
  forumcategoryparent_every?: Maybe<ForumCategoryWhereInput>
  threadmovedeventoldCategory_none?: Maybe<ThreadMovedEventWhereInput>
  threadmovedeventoldCategory_some?: Maybe<ThreadMovedEventWhereInput>
  threadmovedeventoldCategory_every?: Maybe<ThreadMovedEventWhereInput>
  threadmovedeventnewCategory_none?: Maybe<ThreadMovedEventWhereInput>
  threadmovedeventnewCategory_some?: Maybe<ThreadMovedEventWhereInput>
  threadmovedeventnewCategory_every?: Maybe<ThreadMovedEventWhereInput>
  AND?: Maybe<Array<ForumCategoryWhereInput>>
  OR?: Maybe<Array<ForumCategoryWhereInput>>
}

export type ForumCategoryWhereUniqueInput = {
  id: Scalars['ID']
}

export type ForumPoll = BaseGraphQlObject & {
  __typename: 'ForumPoll'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  thread: ForumThread
  threadId: Scalars['String']
  description: Scalars['String']
  endTime: Scalars['DateTime']
  pollAlternatives: Array<ForumPollAlternative>
}

export type ForumPollAlternative = BaseGraphQlObject & {
  __typename: 'ForumPollAlternative'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  index: Scalars['Int']
  poll: ForumPoll
  pollId: Scalars['String']
  text: Scalars['String']
  votes: Array<VoteOnPollEvent>
}

export type ForumPollAlternativeConnection = {
  __typename: 'ForumPollAlternativeConnection'
  totalCount: Scalars['Int']
  edges: Array<ForumPollAlternativeEdge>
  pageInfo: PageInfo
}

export type ForumPollAlternativeCreateInput = {
  index: Scalars['Float']
  poll: Scalars['ID']
  text: Scalars['String']
}

export type ForumPollAlternativeEdge = {
  __typename: 'ForumPollAlternativeEdge'
  node: ForumPollAlternative
  cursor: Scalars['String']
}

export enum ForumPollAlternativeOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC',
  PollAsc = 'poll_ASC',
  PollDesc = 'poll_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
}

export type ForumPollAlternativeUpdateInput = {
  index?: Maybe<Scalars['Float']>
  poll?: Maybe<Scalars['ID']>
  text?: Maybe<Scalars['String']>
}

export type ForumPollAlternativeWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  index_eq?: Maybe<Scalars['Int']>
  index_gt?: Maybe<Scalars['Int']>
  index_gte?: Maybe<Scalars['Int']>
  index_lt?: Maybe<Scalars['Int']>
  index_lte?: Maybe<Scalars['Int']>
  index_in?: Maybe<Array<Scalars['Int']>>
  poll_eq?: Maybe<Scalars['ID']>
  poll_in?: Maybe<Array<Scalars['ID']>>
  text_eq?: Maybe<Scalars['String']>
  text_contains?: Maybe<Scalars['String']>
  text_startsWith?: Maybe<Scalars['String']>
  text_endsWith?: Maybe<Scalars['String']>
  text_in?: Maybe<Array<Scalars['String']>>
  poll?: Maybe<ForumPollWhereInput>
  votes_none?: Maybe<VoteOnPollEventWhereInput>
  votes_some?: Maybe<VoteOnPollEventWhereInput>
  votes_every?: Maybe<VoteOnPollEventWhereInput>
  AND?: Maybe<Array<ForumPollAlternativeWhereInput>>
  OR?: Maybe<Array<ForumPollAlternativeWhereInput>>
}

export type ForumPollAlternativeWhereUniqueInput = {
  id: Scalars['ID']
}

export type ForumPollConnection = {
  __typename: 'ForumPollConnection'
  totalCount: Scalars['Int']
  edges: Array<ForumPollEdge>
  pageInfo: PageInfo
}

export type ForumPollCreateInput = {
  thread: Scalars['ID']
  description: Scalars['String']
  endTime: Scalars['DateTime']
}

export type ForumPollEdge = {
  __typename: 'ForumPollEdge'
  node: ForumPoll
  cursor: Scalars['String']
}

export enum ForumPollOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  ThreadAsc = 'thread_ASC',
  ThreadDesc = 'thread_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EndTimeAsc = 'endTime_ASC',
  EndTimeDesc = 'endTime_DESC',
}

export type ForumPollUpdateInput = {
  thread?: Maybe<Scalars['ID']>
  description?: Maybe<Scalars['String']>
  endTime?: Maybe<Scalars['DateTime']>
}

export type ForumPollWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  thread_eq?: Maybe<Scalars['ID']>
  thread_in?: Maybe<Array<Scalars['ID']>>
  description_eq?: Maybe<Scalars['String']>
  description_contains?: Maybe<Scalars['String']>
  description_startsWith?: Maybe<Scalars['String']>
  description_endsWith?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Scalars['String']>>
  endTime_eq?: Maybe<Scalars['DateTime']>
  endTime_lt?: Maybe<Scalars['DateTime']>
  endTime_lte?: Maybe<Scalars['DateTime']>
  endTime_gt?: Maybe<Scalars['DateTime']>
  endTime_gte?: Maybe<Scalars['DateTime']>
  thread?: Maybe<ForumThreadWhereInput>
  pollAlternatives_none?: Maybe<ForumPollAlternativeWhereInput>
  pollAlternatives_some?: Maybe<ForumPollAlternativeWhereInput>
  pollAlternatives_every?: Maybe<ForumPollAlternativeWhereInput>
  AND?: Maybe<Array<ForumPollWhereInput>>
  OR?: Maybe<Array<ForumPollWhereInput>>
}

export type ForumPollWhereUniqueInput = {
  id: Scalars['ID']
}

export type ForumPost = BaseGraphQlObject & {
  __typename: 'ForumPost'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  author: Membership
  authorId: Scalars['String']
  thread: ForumThread
  threadId: Scalars['String']
  text: Scalars['String']
  repliesTo?: Maybe<ForumPost>
  repliesToId?: Maybe<Scalars['String']>
  status: PostStatus
  origin: PostOrigin
  edits: Array<PostTextUpdatedEvent>
  reactions: Array<ForumPostReaction>
  deletedInEvent?: Maybe<PostDeletedEvent>
  deletedInEventId?: Maybe<Scalars['String']>
  forumpostrepliesTo?: Maybe<Array<ForumPost>>
  postaddedeventpost?: Maybe<Array<PostAddedEvent>>
  postmoderatedeventpost?: Maybe<Array<PostModeratedEvent>>
  postreactedeventpost?: Maybe<Array<PostReactedEvent>>
}

export type ForumPostConnection = {
  __typename: 'ForumPostConnection'
  totalCount: Scalars['Int']
  edges: Array<ForumPostEdge>
  pageInfo: PageInfo
}

export type ForumPostCreateInput = {
  author: Scalars['ID']
  thread: Scalars['ID']
  text: Scalars['String']
  repliesTo?: Maybe<Scalars['ID']>
  status: Scalars['JSONObject']
  origin: Scalars['JSONObject']
  deletedInEvent?: Maybe<Scalars['ID']>
}

export type ForumPostEdge = {
  __typename: 'ForumPostEdge'
  node: ForumPost
  cursor: Scalars['String']
}

export enum ForumPostOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  ThreadAsc = 'thread_ASC',
  ThreadDesc = 'thread_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  RepliesToAsc = 'repliesTo_ASC',
  RepliesToDesc = 'repliesTo_DESC',
  DeletedInEventAsc = 'deletedInEvent_ASC',
  DeletedInEventDesc = 'deletedInEvent_DESC',
}

export type ForumPostReaction = BaseGraphQlObject & {
  __typename: 'ForumPostReaction'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  member: Membership
  memberId: Scalars['String']
  post: ForumPost
  postId: Scalars['String']
  reaction: PostReaction
}

export type ForumPostReactionConnection = {
  __typename: 'ForumPostReactionConnection'
  totalCount: Scalars['Int']
  edges: Array<ForumPostReactionEdge>
  pageInfo: PageInfo
}

export type ForumPostReactionCreateInput = {
  member: Scalars['ID']
  post: Scalars['ID']
  reaction: PostReaction
}

export type ForumPostReactionEdge = {
  __typename: 'ForumPostReactionEdge'
  node: ForumPostReaction
  cursor: Scalars['String']
}

export enum ForumPostReactionOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  MemberAsc = 'member_ASC',
  MemberDesc = 'member_DESC',
  PostAsc = 'post_ASC',
  PostDesc = 'post_DESC',
  ReactionAsc = 'reaction_ASC',
  ReactionDesc = 'reaction_DESC',
}

export type ForumPostReactionUpdateInput = {
  member?: Maybe<Scalars['ID']>
  post?: Maybe<Scalars['ID']>
  reaction?: Maybe<PostReaction>
}

export type ForumPostReactionWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  member_eq?: Maybe<Scalars['ID']>
  member_in?: Maybe<Array<Scalars['ID']>>
  post_eq?: Maybe<Scalars['ID']>
  post_in?: Maybe<Array<Scalars['ID']>>
  reaction_eq?: Maybe<PostReaction>
  reaction_in?: Maybe<Array<PostReaction>>
  member?: Maybe<MembershipWhereInput>
  post?: Maybe<ForumPostWhereInput>
  AND?: Maybe<Array<ForumPostReactionWhereInput>>
  OR?: Maybe<Array<ForumPostReactionWhereInput>>
}

export type ForumPostReactionWhereUniqueInput = {
  id: Scalars['ID']
}

export type ForumPostUpdateInput = {
  author?: Maybe<Scalars['ID']>
  thread?: Maybe<Scalars['ID']>
  text?: Maybe<Scalars['String']>
  repliesTo?: Maybe<Scalars['ID']>
  status?: Maybe<Scalars['JSONObject']>
  origin?: Maybe<Scalars['JSONObject']>
  deletedInEvent?: Maybe<Scalars['ID']>
}

export type ForumPostWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  author_eq?: Maybe<Scalars['ID']>
  author_in?: Maybe<Array<Scalars['ID']>>
  thread_eq?: Maybe<Scalars['ID']>
  thread_in?: Maybe<Array<Scalars['ID']>>
  text_eq?: Maybe<Scalars['String']>
  text_contains?: Maybe<Scalars['String']>
  text_startsWith?: Maybe<Scalars['String']>
  text_endsWith?: Maybe<Scalars['String']>
  text_in?: Maybe<Array<Scalars['String']>>
  repliesTo_eq?: Maybe<Scalars['ID']>
  repliesTo_in?: Maybe<Array<Scalars['ID']>>
  status_json?: Maybe<Scalars['JSONObject']>
  origin_json?: Maybe<Scalars['JSONObject']>
  deletedInEvent_eq?: Maybe<Scalars['ID']>
  deletedInEvent_in?: Maybe<Array<Scalars['ID']>>
  author?: Maybe<MembershipWhereInput>
  thread?: Maybe<ForumThreadWhereInput>
  repliesTo?: Maybe<ForumPostWhereInput>
  edits_none?: Maybe<PostTextUpdatedEventWhereInput>
  edits_some?: Maybe<PostTextUpdatedEventWhereInput>
  edits_every?: Maybe<PostTextUpdatedEventWhereInput>
  reactions_none?: Maybe<ForumPostReactionWhereInput>
  reactions_some?: Maybe<ForumPostReactionWhereInput>
  reactions_every?: Maybe<ForumPostReactionWhereInput>
  deletedInEvent?: Maybe<PostDeletedEventWhereInput>
  forumpostrepliesTo_none?: Maybe<ForumPostWhereInput>
  forumpostrepliesTo_some?: Maybe<ForumPostWhereInput>
  forumpostrepliesTo_every?: Maybe<ForumPostWhereInput>
  postaddedeventpost_none?: Maybe<PostAddedEventWhereInput>
  postaddedeventpost_some?: Maybe<PostAddedEventWhereInput>
  postaddedeventpost_every?: Maybe<PostAddedEventWhereInput>
  postmoderatedeventpost_none?: Maybe<PostModeratedEventWhereInput>
  postmoderatedeventpost_some?: Maybe<PostModeratedEventWhereInput>
  postmoderatedeventpost_every?: Maybe<PostModeratedEventWhereInput>
  postreactedeventpost_none?: Maybe<PostReactedEventWhereInput>
  postreactedeventpost_some?: Maybe<PostReactedEventWhereInput>
  postreactedeventpost_every?: Maybe<PostReactedEventWhereInput>
  AND?: Maybe<Array<ForumPostWhereInput>>
  OR?: Maybe<Array<ForumPostWhereInput>>
}

export type ForumPostWhereUniqueInput = {
  id: Scalars['ID']
}

export type ForumThread = BaseGraphQlObject & {
  __typename: 'ForumThread'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  author: Membership
  authorId: Scalars['String']
  category: ForumCategory
  categoryId: Scalars['String']
  title: Scalars['String']
  posts: Array<ForumPost>
  poll?: Maybe<ForumPoll>
  isSticky: Scalars['Boolean']
  createdInEvent: ThreadCreatedEvent
  status: ThreadStatus
  titleUpdates: Array<ThreadTitleUpdatedEvent>
  madeStickyInEvents: Array<CategoryStickyThreadUpdateEvent>
  movedInEvents: Array<ThreadMovedEvent>
  threaddeletedeventthread?: Maybe<Array<ThreadDeletedEvent>>
  threadmoderatedeventthread?: Maybe<Array<ThreadModeratedEvent>>
}

export type ForumThreadConnection = {
  __typename: 'ForumThreadConnection'
  totalCount: Scalars['Int']
  edges: Array<ForumThreadEdge>
  pageInfo: PageInfo
}

export type ForumThreadCreateInput = {
  author: Scalars['ID']
  category: Scalars['ID']
  title: Scalars['String']
  isSticky: Scalars['Boolean']
  status: Scalars['JSONObject']
}

export type ForumThreadEdge = {
  __typename: 'ForumThreadEdge'
  node: ForumThread
  cursor: Scalars['String']
}

export enum ForumThreadOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  IsStickyAsc = 'isSticky_ASC',
  IsStickyDesc = 'isSticky_DESC',
}

export type ForumThreadUpdateInput = {
  author?: Maybe<Scalars['ID']>
  category?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  isSticky?: Maybe<Scalars['Boolean']>
  status?: Maybe<Scalars['JSONObject']>
}

export type ForumThreadWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  author_eq?: Maybe<Scalars['ID']>
  author_in?: Maybe<Array<Scalars['ID']>>
  category_eq?: Maybe<Scalars['ID']>
  category_in?: Maybe<Array<Scalars['ID']>>
  title_eq?: Maybe<Scalars['String']>
  title_contains?: Maybe<Scalars['String']>
  title_startsWith?: Maybe<Scalars['String']>
  title_endsWith?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Scalars['String']>>
  isSticky_eq?: Maybe<Scalars['Boolean']>
  isSticky_in?: Maybe<Array<Scalars['Boolean']>>
  status_json?: Maybe<Scalars['JSONObject']>
  author?: Maybe<MembershipWhereInput>
  category?: Maybe<ForumCategoryWhereInput>
  posts_none?: Maybe<ForumPostWhereInput>
  posts_some?: Maybe<ForumPostWhereInput>
  posts_every?: Maybe<ForumPostWhereInput>
  poll?: Maybe<ForumPollWhereInput>
  createdInEvent?: Maybe<ThreadCreatedEventWhereInput>
  titleUpdates_none?: Maybe<ThreadTitleUpdatedEventWhereInput>
  titleUpdates_some?: Maybe<ThreadTitleUpdatedEventWhereInput>
  titleUpdates_every?: Maybe<ThreadTitleUpdatedEventWhereInput>
  madeStickyInEvents_none?: Maybe<CategoryStickyThreadUpdateEventWhereInput>
  madeStickyInEvents_some?: Maybe<CategoryStickyThreadUpdateEventWhereInput>
  madeStickyInEvents_every?: Maybe<CategoryStickyThreadUpdateEventWhereInput>
  movedInEvents_none?: Maybe<ThreadMovedEventWhereInput>
  movedInEvents_some?: Maybe<ThreadMovedEventWhereInput>
  movedInEvents_every?: Maybe<ThreadMovedEventWhereInput>
  threaddeletedeventthread_none?: Maybe<ThreadDeletedEventWhereInput>
  threaddeletedeventthread_some?: Maybe<ThreadDeletedEventWhereInput>
  threaddeletedeventthread_every?: Maybe<ThreadDeletedEventWhereInput>
  threadmoderatedeventthread_none?: Maybe<ThreadModeratedEventWhereInput>
  threadmoderatedeventthread_some?: Maybe<ThreadModeratedEventWhereInput>
  threadmoderatedeventthread_every?: Maybe<ThreadModeratedEventWhereInput>
  AND?: Maybe<Array<ForumThreadWhereInput>>
  OR?: Maybe<Array<ForumThreadWhereInput>>
}

export type ForumThreadWhereUniqueInput = {
  id: Scalars['ID']
}

export type FundingRequestDestination = BaseGraphQlObject & {
  __typename: 'FundingRequestDestination'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  amount: Scalars['BigInt']
  account: Scalars['String']
  list: FundingRequestDestinationsList
  listId: Scalars['String']
}

export type FundingRequestDestinationConnection = {
  __typename: 'FundingRequestDestinationConnection'
  totalCount: Scalars['Int']
  edges: Array<FundingRequestDestinationEdge>
  pageInfo: PageInfo
}

export type FundingRequestDestinationCreateInput = {
  amount: Scalars['BigInt']
  account: Scalars['String']
  list: Scalars['ID']
}

export type FundingRequestDestinationEdge = {
  __typename: 'FundingRequestDestinationEdge'
  node: FundingRequestDestination
  cursor: Scalars['String']
}

export enum FundingRequestDestinationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  AccountAsc = 'account_ASC',
  AccountDesc = 'account_DESC',
  ListAsc = 'list_ASC',
  ListDesc = 'list_DESC',
}

export type FundingRequestDestinationUpdateInput = {
  amount?: Maybe<Scalars['BigInt']>
  account?: Maybe<Scalars['String']>
  list?: Maybe<Scalars['ID']>
}

export type FundingRequestDestinationWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  amount_eq?: Maybe<Scalars['BigInt']>
  amount_gt?: Maybe<Scalars['BigInt']>
  amount_gte?: Maybe<Scalars['BigInt']>
  amount_lt?: Maybe<Scalars['BigInt']>
  amount_lte?: Maybe<Scalars['BigInt']>
  amount_in?: Maybe<Array<Scalars['BigInt']>>
  account_eq?: Maybe<Scalars['String']>
  account_contains?: Maybe<Scalars['String']>
  account_startsWith?: Maybe<Scalars['String']>
  account_endsWith?: Maybe<Scalars['String']>
  account_in?: Maybe<Array<Scalars['String']>>
  list_eq?: Maybe<Scalars['ID']>
  list_in?: Maybe<Array<Scalars['ID']>>
  list?: Maybe<FundingRequestDestinationsListWhereInput>
  AND?: Maybe<Array<FundingRequestDestinationWhereInput>>
  OR?: Maybe<Array<FundingRequestDestinationWhereInput>>
}

export type FundingRequestDestinationWhereUniqueInput = {
  id: Scalars['ID']
}

export type FundingRequestDestinationsList = BaseGraphQlObject & {
  __typename: 'FundingRequestDestinationsList'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  phantom?: Maybe<Scalars['Int']>
  destinations: Array<FundingRequestDestination>
}

export type FundingRequestDestinationsListConnection = {
  __typename: 'FundingRequestDestinationsListConnection'
  totalCount: Scalars['Int']
  edges: Array<FundingRequestDestinationsListEdge>
  pageInfo: PageInfo
}

export type FundingRequestDestinationsListCreateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type FundingRequestDestinationsListEdge = {
  __typename: 'FundingRequestDestinationsListEdge'
  node: FundingRequestDestinationsList
  cursor: Scalars['String']
}

export enum FundingRequestDestinationsListOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  PhantomAsc = 'phantom_ASC',
  PhantomDesc = 'phantom_DESC',
}

export type FundingRequestDestinationsListUpdateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type FundingRequestDestinationsListWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  phantom_eq?: Maybe<Scalars['Int']>
  phantom_gt?: Maybe<Scalars['Int']>
  phantom_gte?: Maybe<Scalars['Int']>
  phantom_lt?: Maybe<Scalars['Int']>
  phantom_lte?: Maybe<Scalars['Int']>
  phantom_in?: Maybe<Array<Scalars['Int']>>
  destinations_none?: Maybe<FundingRequestDestinationWhereInput>
  destinations_some?: Maybe<FundingRequestDestinationWhereInput>
  destinations_every?: Maybe<FundingRequestDestinationWhereInput>
  AND?: Maybe<Array<FundingRequestDestinationsListWhereInput>>
  OR?: Maybe<Array<FundingRequestDestinationsListWhereInput>>
}

export type FundingRequestDestinationsListWhereUniqueInput = {
  id: Scalars['ID']
}

export type FundingRequestProposalDetails = {
  __typename: 'FundingRequestProposalDetails'
  destinationsList?: Maybe<FundingRequestDestinationsList>
}

export type InitialInvitationBalanceUpdatedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'InitialInvitationBalanceUpdatedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    newInitialBalance: Scalars['BigInt']
  }

export type InitialInvitationBalanceUpdatedEventConnection = {
  __typename: 'InitialInvitationBalanceUpdatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<InitialInvitationBalanceUpdatedEventEdge>
  pageInfo: PageInfo
}

export type InitialInvitationBalanceUpdatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  newInitialBalance: Scalars['BigInt']
}

export type InitialInvitationBalanceUpdatedEventEdge = {
  __typename: 'InitialInvitationBalanceUpdatedEventEdge'
  node: InitialInvitationBalanceUpdatedEvent
  cursor: Scalars['String']
}

export enum InitialInvitationBalanceUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NewInitialBalanceAsc = 'newInitialBalance_ASC',
  NewInitialBalanceDesc = 'newInitialBalance_DESC',
}

export type InitialInvitationBalanceUpdatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  newInitialBalance?: Maybe<Scalars['BigInt']>
}

export type InitialInvitationBalanceUpdatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  newInitialBalance_eq?: Maybe<Scalars['BigInt']>
  newInitialBalance_gt?: Maybe<Scalars['BigInt']>
  newInitialBalance_gte?: Maybe<Scalars['BigInt']>
  newInitialBalance_lt?: Maybe<Scalars['BigInt']>
  newInitialBalance_lte?: Maybe<Scalars['BigInt']>
  newInitialBalance_in?: Maybe<Array<Scalars['BigInt']>>
  AND?: Maybe<Array<InitialInvitationBalanceUpdatedEventWhereInput>>
  OR?: Maybe<Array<InitialInvitationBalanceUpdatedEventWhereInput>>
}

export type InitialInvitationBalanceUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type InitialInvitationCountUpdatedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'InitialInvitationCountUpdatedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    newInitialInvitationCount: Scalars['Int']
  }

export type InitialInvitationCountUpdatedEventConnection = {
  __typename: 'InitialInvitationCountUpdatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<InitialInvitationCountUpdatedEventEdge>
  pageInfo: PageInfo
}

export type InitialInvitationCountUpdatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  newInitialInvitationCount: Scalars['Float']
}

export type InitialInvitationCountUpdatedEventEdge = {
  __typename: 'InitialInvitationCountUpdatedEventEdge'
  node: InitialInvitationCountUpdatedEvent
  cursor: Scalars['String']
}

export enum InitialInvitationCountUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NewInitialInvitationCountAsc = 'newInitialInvitationCount_ASC',
  NewInitialInvitationCountDesc = 'newInitialInvitationCount_DESC',
}

export type InitialInvitationCountUpdatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  newInitialInvitationCount?: Maybe<Scalars['Float']>
}

export type InitialInvitationCountUpdatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  newInitialInvitationCount_eq?: Maybe<Scalars['Int']>
  newInitialInvitationCount_gt?: Maybe<Scalars['Int']>
  newInitialInvitationCount_gte?: Maybe<Scalars['Int']>
  newInitialInvitationCount_lt?: Maybe<Scalars['Int']>
  newInitialInvitationCount_lte?: Maybe<Scalars['Int']>
  newInitialInvitationCount_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<InitialInvitationCountUpdatedEventWhereInput>>
  OR?: Maybe<Array<InitialInvitationCountUpdatedEventWhereInput>>
}

export type InitialInvitationCountUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type InvalidActionMetadata = {
  __typename: 'InvalidActionMetadata'
  reason: Scalars['String']
}

export type InvalidActionMetadataCreateInput = {
  reason: Scalars['String']
}

export type InvalidActionMetadataUpdateInput = {
  reason?: Maybe<Scalars['String']>
}

export type InvalidActionMetadataWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  reason_eq?: Maybe<Scalars['String']>
  reason_contains?: Maybe<Scalars['String']>
  reason_startsWith?: Maybe<Scalars['String']>
  reason_endsWith?: Maybe<Scalars['String']>
  reason_in?: Maybe<Array<Scalars['String']>>
  AND?: Maybe<Array<InvalidActionMetadataWhereInput>>
  OR?: Maybe<Array<InvalidActionMetadataWhereInput>>
}

export type InvalidActionMetadataWhereUniqueInput = {
  id: Scalars['ID']
}

export type InvitesTransferredEvent = Event &
  BaseGraphQlObject & {
    __typename: 'InvitesTransferredEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    sourceMember: Membership
    sourceMemberId: Scalars['String']
    targetMember: Membership
    targetMemberId: Scalars['String']
    numberOfInvites: Scalars['Int']
  }

export type InvitesTransferredEventConnection = {
  __typename: 'InvitesTransferredEventConnection'
  totalCount: Scalars['Int']
  edges: Array<InvitesTransferredEventEdge>
  pageInfo: PageInfo
}

export type InvitesTransferredEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  sourceMember: Scalars['ID']
  targetMember: Scalars['ID']
  numberOfInvites: Scalars['Float']
}

export type InvitesTransferredEventEdge = {
  __typename: 'InvitesTransferredEventEdge'
  node: InvitesTransferredEvent
  cursor: Scalars['String']
}

export enum InvitesTransferredEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  SourceMemberAsc = 'sourceMember_ASC',
  SourceMemberDesc = 'sourceMember_DESC',
  TargetMemberAsc = 'targetMember_ASC',
  TargetMemberDesc = 'targetMember_DESC',
  NumberOfInvitesAsc = 'numberOfInvites_ASC',
  NumberOfInvitesDesc = 'numberOfInvites_DESC',
}

export type InvitesTransferredEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  sourceMember?: Maybe<Scalars['ID']>
  targetMember?: Maybe<Scalars['ID']>
  numberOfInvites?: Maybe<Scalars['Float']>
}

export type InvitesTransferredEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  sourceMember_eq?: Maybe<Scalars['ID']>
  sourceMember_in?: Maybe<Array<Scalars['ID']>>
  targetMember_eq?: Maybe<Scalars['ID']>
  targetMember_in?: Maybe<Array<Scalars['ID']>>
  numberOfInvites_eq?: Maybe<Scalars['Int']>
  numberOfInvites_gt?: Maybe<Scalars['Int']>
  numberOfInvites_gte?: Maybe<Scalars['Int']>
  numberOfInvites_lt?: Maybe<Scalars['Int']>
  numberOfInvites_lte?: Maybe<Scalars['Int']>
  numberOfInvites_in?: Maybe<Array<Scalars['Int']>>
  sourceMember?: Maybe<MembershipWhereInput>
  targetMember?: Maybe<MembershipWhereInput>
  AND?: Maybe<Array<InvitesTransferredEventWhereInput>>
  OR?: Maybe<Array<InvitesTransferredEventWhereInput>>
}

export type InvitesTransferredEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type LeaderInvitationQuotaUpdatedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'LeaderInvitationQuotaUpdatedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    newInvitationQuota: Scalars['Int']
  }

export type LeaderInvitationQuotaUpdatedEventConnection = {
  __typename: 'LeaderInvitationQuotaUpdatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<LeaderInvitationQuotaUpdatedEventEdge>
  pageInfo: PageInfo
}

export type LeaderInvitationQuotaUpdatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  newInvitationQuota: Scalars['Float']
}

export type LeaderInvitationQuotaUpdatedEventEdge = {
  __typename: 'LeaderInvitationQuotaUpdatedEventEdge'
  node: LeaderInvitationQuotaUpdatedEvent
  cursor: Scalars['String']
}

export enum LeaderInvitationQuotaUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NewInvitationQuotaAsc = 'newInvitationQuota_ASC',
  NewInvitationQuotaDesc = 'newInvitationQuota_DESC',
}

export type LeaderInvitationQuotaUpdatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  newInvitationQuota?: Maybe<Scalars['Float']>
}

export type LeaderInvitationQuotaUpdatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  newInvitationQuota_eq?: Maybe<Scalars['Int']>
  newInvitationQuota_gt?: Maybe<Scalars['Int']>
  newInvitationQuota_gte?: Maybe<Scalars['Int']>
  newInvitationQuota_lt?: Maybe<Scalars['Int']>
  newInvitationQuota_lte?: Maybe<Scalars['Int']>
  newInvitationQuota_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<LeaderInvitationQuotaUpdatedEventWhereInput>>
  OR?: Maybe<Array<LeaderInvitationQuotaUpdatedEventWhereInput>>
}

export type LeaderInvitationQuotaUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type LeaderSetEvent = Event &
  BaseGraphQlObject & {
    __typename: 'LeaderSetEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    worker?: Maybe<Worker>
    workerId?: Maybe<Scalars['String']>
  }

export type LeaderSetEventConnection = {
  __typename: 'LeaderSetEventConnection'
  totalCount: Scalars['Int']
  edges: Array<LeaderSetEventEdge>
  pageInfo: PageInfo
}

export type LeaderSetEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  worker?: Maybe<Scalars['ID']>
}

export type LeaderSetEventEdge = {
  __typename: 'LeaderSetEventEdge'
  node: LeaderSetEvent
  cursor: Scalars['String']
}

export enum LeaderSetEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
}

export type LeaderSetEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  worker?: Maybe<Scalars['ID']>
}

export type LeaderSetEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  worker_eq?: Maybe<Scalars['ID']>
  worker_in?: Maybe<Array<Scalars['ID']>>
  group?: Maybe<WorkingGroupWhereInput>
  worker?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<LeaderSetEventWhereInput>>
  OR?: Maybe<Array<LeaderSetEventWhereInput>>
}

export type LeaderSetEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type LeaderUnsetEvent = Event &
  BaseGraphQlObject & {
    __typename: 'LeaderUnsetEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    leader: Worker
    leaderId: Scalars['String']
  }

export type LeaderUnsetEventConnection = {
  __typename: 'LeaderUnsetEventConnection'
  totalCount: Scalars['Int']
  edges: Array<LeaderUnsetEventEdge>
  pageInfo: PageInfo
}

export type LeaderUnsetEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  leader: Scalars['ID']
}

export type LeaderUnsetEventEdge = {
  __typename: 'LeaderUnsetEventEdge'
  node: LeaderUnsetEvent
  cursor: Scalars['String']
}

export enum LeaderUnsetEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  LeaderAsc = 'leader_ASC',
  LeaderDesc = 'leader_DESC',
}

export type LeaderUnsetEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  leader?: Maybe<Scalars['ID']>
}

export type LeaderUnsetEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  leader_eq?: Maybe<Scalars['ID']>
  leader_in?: Maybe<Array<Scalars['ID']>>
  group?: Maybe<WorkingGroupWhereInput>
  leader?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<LeaderUnsetEventWhereInput>>
  OR?: Maybe<Array<LeaderUnsetEventWhereInput>>
}

export type LeaderUnsetEventWhereUniqueInput = {
  id: Scalars['ID']
}

export enum LiaisonJudgement {
  Pending = 'PENDING',
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED',
}

export type LockBlogPostProposalDetails = {
  __typename: 'LockBlogPostProposalDetails'
  blogPost: Scalars['String']
}

export type LockBlogPostProposalDetailsCreateInput = {
  blogPost: Scalars['String']
}

export type LockBlogPostProposalDetailsUpdateInput = {
  blogPost?: Maybe<Scalars['String']>
}

export type LockBlogPostProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  blogPost_eq?: Maybe<Scalars['String']>
  blogPost_contains?: Maybe<Scalars['String']>
  blogPost_startsWith?: Maybe<Scalars['String']>
  blogPost_endsWith?: Maybe<Scalars['String']>
  blogPost_in?: Maybe<Array<Scalars['String']>>
  AND?: Maybe<Array<LockBlogPostProposalDetailsWhereInput>>
  OR?: Maybe<Array<LockBlogPostProposalDetailsWhereInput>>
}

export type LockBlogPostProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type MemberAccountsUpdatedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'MemberAccountsUpdatedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    member: Membership
    memberId: Scalars['String']
    newRootAccount?: Maybe<Scalars['String']>
    newControllerAccount?: Maybe<Scalars['String']>
  }

export type MemberAccountsUpdatedEventConnection = {
  __typename: 'MemberAccountsUpdatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<MemberAccountsUpdatedEventEdge>
  pageInfo: PageInfo
}

export type MemberAccountsUpdatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  member: Scalars['ID']
  newRootAccount?: Maybe<Scalars['String']>
  newControllerAccount?: Maybe<Scalars['String']>
}

export type MemberAccountsUpdatedEventEdge = {
  __typename: 'MemberAccountsUpdatedEventEdge'
  node: MemberAccountsUpdatedEvent
  cursor: Scalars['String']
}

export enum MemberAccountsUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  MemberAsc = 'member_ASC',
  MemberDesc = 'member_DESC',
  NewRootAccountAsc = 'newRootAccount_ASC',
  NewRootAccountDesc = 'newRootAccount_DESC',
  NewControllerAccountAsc = 'newControllerAccount_ASC',
  NewControllerAccountDesc = 'newControllerAccount_DESC',
}

export type MemberAccountsUpdatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  member?: Maybe<Scalars['ID']>
  newRootAccount?: Maybe<Scalars['String']>
  newControllerAccount?: Maybe<Scalars['String']>
}

export type MemberAccountsUpdatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  member_eq?: Maybe<Scalars['ID']>
  member_in?: Maybe<Array<Scalars['ID']>>
  newRootAccount_eq?: Maybe<Scalars['String']>
  newRootAccount_contains?: Maybe<Scalars['String']>
  newRootAccount_startsWith?: Maybe<Scalars['String']>
  newRootAccount_endsWith?: Maybe<Scalars['String']>
  newRootAccount_in?: Maybe<Array<Scalars['String']>>
  newControllerAccount_eq?: Maybe<Scalars['String']>
  newControllerAccount_contains?: Maybe<Scalars['String']>
  newControllerAccount_startsWith?: Maybe<Scalars['String']>
  newControllerAccount_endsWith?: Maybe<Scalars['String']>
  newControllerAccount_in?: Maybe<Array<Scalars['String']>>
  member?: Maybe<MembershipWhereInput>
  AND?: Maybe<Array<MemberAccountsUpdatedEventWhereInput>>
  OR?: Maybe<Array<MemberAccountsUpdatedEventWhereInput>>
}

export type MemberAccountsUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type MemberInvitedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'MemberInvitedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    invitingMember: Membership
    invitingMemberId: Scalars['String']
    newMember: Membership
    newMemberId: Scalars['String']
    rootAccount: Scalars['String']
    controllerAccount: Scalars['String']
    handle: Scalars['String']
    metadata: MemberMetadata
    metadataId: Scalars['String']
  }

export type MemberInvitedEventConnection = {
  __typename: 'MemberInvitedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<MemberInvitedEventEdge>
  pageInfo: PageInfo
}

export type MemberInvitedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  invitingMember: Scalars['ID']
  newMember: Scalars['ID']
  rootAccount: Scalars['String']
  controllerAccount: Scalars['String']
  handle: Scalars['String']
  metadata: Scalars['ID']
}

export type MemberInvitedEventEdge = {
  __typename: 'MemberInvitedEventEdge'
  node: MemberInvitedEvent
  cursor: Scalars['String']
}

export enum MemberInvitedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  InvitingMemberAsc = 'invitingMember_ASC',
  InvitingMemberDesc = 'invitingMember_DESC',
  NewMemberAsc = 'newMember_ASC',
  NewMemberDesc = 'newMember_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
  ControllerAccountAsc = 'controllerAccount_ASC',
  ControllerAccountDesc = 'controllerAccount_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
}

export type MemberInvitedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  invitingMember?: Maybe<Scalars['ID']>
  newMember?: Maybe<Scalars['ID']>
  rootAccount?: Maybe<Scalars['String']>
  controllerAccount?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  metadata?: Maybe<Scalars['ID']>
}

export type MemberInvitedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  invitingMember_eq?: Maybe<Scalars['ID']>
  invitingMember_in?: Maybe<Array<Scalars['ID']>>
  newMember_eq?: Maybe<Scalars['ID']>
  newMember_in?: Maybe<Array<Scalars['ID']>>
  rootAccount_eq?: Maybe<Scalars['String']>
  rootAccount_contains?: Maybe<Scalars['String']>
  rootAccount_startsWith?: Maybe<Scalars['String']>
  rootAccount_endsWith?: Maybe<Scalars['String']>
  rootAccount_in?: Maybe<Array<Scalars['String']>>
  controllerAccount_eq?: Maybe<Scalars['String']>
  controllerAccount_contains?: Maybe<Scalars['String']>
  controllerAccount_startsWith?: Maybe<Scalars['String']>
  controllerAccount_endsWith?: Maybe<Scalars['String']>
  controllerAccount_in?: Maybe<Array<Scalars['String']>>
  handle_eq?: Maybe<Scalars['String']>
  handle_contains?: Maybe<Scalars['String']>
  handle_startsWith?: Maybe<Scalars['String']>
  handle_endsWith?: Maybe<Scalars['String']>
  handle_in?: Maybe<Array<Scalars['String']>>
  metadata_eq?: Maybe<Scalars['ID']>
  metadata_in?: Maybe<Array<Scalars['ID']>>
  invitingMember?: Maybe<MembershipWhereInput>
  newMember?: Maybe<MembershipWhereInput>
  metadata?: Maybe<MemberMetadataWhereInput>
  AND?: Maybe<Array<MemberInvitedEventWhereInput>>
  OR?: Maybe<Array<MemberInvitedEventWhereInput>>
}

export type MemberInvitedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type MemberMetadata = BaseGraphQlObject & {
  __typename: 'MemberMetadata'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  name?: Maybe<Scalars['String']>
  avatar?: Maybe<DataObject>
  avatarId?: Maybe<Scalars['String']>
  about?: Maybe<Scalars['String']>
  memberinvitedeventmetadata?: Maybe<Array<MemberInvitedEvent>>
  memberprofileupdatedeventnewMetadata?: Maybe<Array<MemberProfileUpdatedEvent>>
  membershipmetadata?: Maybe<Array<Membership>>
  membershipboughteventmetadata?: Maybe<Array<MembershipBoughtEvent>>
}

export type MemberMetadataConnection = {
  __typename: 'MemberMetadataConnection'
  totalCount: Scalars['Int']
  edges: Array<MemberMetadataEdge>
  pageInfo: PageInfo
}

export type MemberMetadataCreateInput = {
  name?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['ID']>
  about?: Maybe<Scalars['String']>
}

export type MemberMetadataEdge = {
  __typename: 'MemberMetadataEdge'
  node: MemberMetadata
  cursor: Scalars['String']
}

export enum MemberMetadataOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  AvatarAsc = 'avatar_ASC',
  AvatarDesc = 'avatar_DESC',
  AboutAsc = 'about_ASC',
  AboutDesc = 'about_DESC',
}

export type MemberMetadataUpdateInput = {
  name?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['ID']>
  about?: Maybe<Scalars['String']>
}

export type MemberMetadataWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  name_eq?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_startsWith?: Maybe<Scalars['String']>
  name_endsWith?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  avatar_eq?: Maybe<Scalars['ID']>
  avatar_in?: Maybe<Array<Scalars['ID']>>
  about_eq?: Maybe<Scalars['String']>
  about_contains?: Maybe<Scalars['String']>
  about_startsWith?: Maybe<Scalars['String']>
  about_endsWith?: Maybe<Scalars['String']>
  about_in?: Maybe<Array<Scalars['String']>>
  avatar?: Maybe<DataObjectWhereInput>
  memberinvitedeventmetadata_none?: Maybe<MemberInvitedEventWhereInput>
  memberinvitedeventmetadata_some?: Maybe<MemberInvitedEventWhereInput>
  memberinvitedeventmetadata_every?: Maybe<MemberInvitedEventWhereInput>
  memberprofileupdatedeventnewMetadata_none?: Maybe<MemberProfileUpdatedEventWhereInput>
  memberprofileupdatedeventnewMetadata_some?: Maybe<MemberProfileUpdatedEventWhereInput>
  memberprofileupdatedeventnewMetadata_every?: Maybe<MemberProfileUpdatedEventWhereInput>
  membershipmetadata_none?: Maybe<MembershipWhereInput>
  membershipmetadata_some?: Maybe<MembershipWhereInput>
  membershipmetadata_every?: Maybe<MembershipWhereInput>
  membershipboughteventmetadata_none?: Maybe<MembershipBoughtEventWhereInput>
  membershipboughteventmetadata_some?: Maybe<MembershipBoughtEventWhereInput>
  membershipboughteventmetadata_every?: Maybe<MembershipBoughtEventWhereInput>
  AND?: Maybe<Array<MemberMetadataWhereInput>>
  OR?: Maybe<Array<MemberMetadataWhereInput>>
}

export type MemberMetadataWhereUniqueInput = {
  id: Scalars['ID']
}

export type MemberProfileUpdatedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'MemberProfileUpdatedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    member: Membership
    memberId: Scalars['String']
    newHandle?: Maybe<Scalars['String']>
    newMetadata: MemberMetadata
    newMetadataId: Scalars['String']
  }

export type MemberProfileUpdatedEventConnection = {
  __typename: 'MemberProfileUpdatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<MemberProfileUpdatedEventEdge>
  pageInfo: PageInfo
}

export type MemberProfileUpdatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  member: Scalars['ID']
  newHandle?: Maybe<Scalars['String']>
  newMetadata: Scalars['ID']
}

export type MemberProfileUpdatedEventEdge = {
  __typename: 'MemberProfileUpdatedEventEdge'
  node: MemberProfileUpdatedEvent
  cursor: Scalars['String']
}

export enum MemberProfileUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  MemberAsc = 'member_ASC',
  MemberDesc = 'member_DESC',
  NewHandleAsc = 'newHandle_ASC',
  NewHandleDesc = 'newHandle_DESC',
  NewMetadataAsc = 'newMetadata_ASC',
  NewMetadataDesc = 'newMetadata_DESC',
}

export type MemberProfileUpdatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  member?: Maybe<Scalars['ID']>
  newHandle?: Maybe<Scalars['String']>
  newMetadata?: Maybe<Scalars['ID']>
}

export type MemberProfileUpdatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  member_eq?: Maybe<Scalars['ID']>
  member_in?: Maybe<Array<Scalars['ID']>>
  newHandle_eq?: Maybe<Scalars['String']>
  newHandle_contains?: Maybe<Scalars['String']>
  newHandle_startsWith?: Maybe<Scalars['String']>
  newHandle_endsWith?: Maybe<Scalars['String']>
  newHandle_in?: Maybe<Array<Scalars['String']>>
  newMetadata_eq?: Maybe<Scalars['ID']>
  newMetadata_in?: Maybe<Array<Scalars['ID']>>
  member?: Maybe<MembershipWhereInput>
  newMetadata?: Maybe<MemberMetadataWhereInput>
  AND?: Maybe<Array<MemberProfileUpdatedEventWhereInput>>
  OR?: Maybe<Array<MemberProfileUpdatedEventWhereInput>>
}

export type MemberProfileUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type MemberVerificationStatusUpdatedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'MemberVerificationStatusUpdatedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    member: Membership
    memberId: Scalars['String']
    worker: Worker
    workerId: Scalars['String']
    isVerified: Scalars['Boolean']
  }

export type MemberVerificationStatusUpdatedEventConnection = {
  __typename: 'MemberVerificationStatusUpdatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<MemberVerificationStatusUpdatedEventEdge>
  pageInfo: PageInfo
}

export type MemberVerificationStatusUpdatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  member: Scalars['ID']
  worker: Scalars['ID']
  isVerified: Scalars['Boolean']
}

export type MemberVerificationStatusUpdatedEventEdge = {
  __typename: 'MemberVerificationStatusUpdatedEventEdge'
  node: MemberVerificationStatusUpdatedEvent
  cursor: Scalars['String']
}

export enum MemberVerificationStatusUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  MemberAsc = 'member_ASC',
  MemberDesc = 'member_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
  IsVerifiedAsc = 'isVerified_ASC',
  IsVerifiedDesc = 'isVerified_DESC',
}

export type MemberVerificationStatusUpdatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  member?: Maybe<Scalars['ID']>
  worker?: Maybe<Scalars['ID']>
  isVerified?: Maybe<Scalars['Boolean']>
}

export type MemberVerificationStatusUpdatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  member_eq?: Maybe<Scalars['ID']>
  member_in?: Maybe<Array<Scalars['ID']>>
  worker_eq?: Maybe<Scalars['ID']>
  worker_in?: Maybe<Array<Scalars['ID']>>
  isVerified_eq?: Maybe<Scalars['Boolean']>
  isVerified_in?: Maybe<Array<Scalars['Boolean']>>
  member?: Maybe<MembershipWhereInput>
  worker?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<MemberVerificationStatusUpdatedEventWhereInput>>
  OR?: Maybe<Array<MemberVerificationStatusUpdatedEventWhereInput>>
}

export type MemberVerificationStatusUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type MembersByHandleFtsOutput = {
  __typename: 'MembersByHandleFTSOutput'
  item: MembersByHandleSearchResult
  rank: Scalars['Float']
  isTypeOf: Scalars['String']
  highlight: Scalars['String']
}

export type MembersByHandleSearchResult = Membership

export type Membership = BaseGraphQlObject & {
  __typename: 'Membership'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  handle: Scalars['String']
  metadata: MemberMetadata
  metadataId: Scalars['String']
  controllerAccount: Scalars['String']
  rootAccount: Scalars['String']
  entry: MembershipEntryMethod
  isVerified: Scalars['Boolean']
  boundAccounts: Array<Scalars['String']>
  inviteCount: Scalars['Int']
  invitees: Array<Membership>
  invitedBy?: Maybe<Membership>
  invitedById?: Maybe<Scalars['String']>
  referredMembers: Array<Membership>
  referredBy?: Maybe<Membership>
  referredById?: Maybe<Scalars['String']>
  isFoundingMember: Scalars['Boolean']
  roles: Array<Worker>
  whitelistedIn: Array<ProposalDiscussionWhitelist>
  forumpostauthor?: Maybe<Array<ForumPost>>
  forumpostreactionmember?: Maybe<Array<ForumPostReaction>>
  forumthreadauthor?: Maybe<Array<ForumThread>>
  invitestransferredeventsourceMember?: Maybe<Array<InvitesTransferredEvent>>
  invitestransferredeventtargetMember?: Maybe<Array<InvitesTransferredEvent>>
  memberaccountsupdatedeventmember?: Maybe<Array<MemberAccountsUpdatedEvent>>
  memberinvitedeventinvitingMember?: Maybe<Array<MemberInvitedEvent>>
  memberinvitedeventnewMember?: Maybe<Array<MemberInvitedEvent>>
  memberprofileupdatedeventmember?: Maybe<Array<MemberProfileUpdatedEvent>>
  memberverificationstatusupdatedeventmember?: Maybe<Array<MemberVerificationStatusUpdatedEvent>>
  membershipboughteventnewMember?: Maybe<Array<MembershipBoughtEvent>>
  membershipboughteventreferrer?: Maybe<Array<MembershipBoughtEvent>>
  postdeletedeventactor?: Maybe<Array<PostDeletedEvent>>
  postreactedeventreactingMember?: Maybe<Array<PostReactedEvent>>
  proposalcreator?: Maybe<Array<Proposal>>
  proposaldiscussionpostauthor?: Maybe<Array<ProposalDiscussionPost>>
  proposaldiscussionpostdeletedeventactor?: Maybe<Array<ProposalDiscussionPostDeletedEvent>>
  proposaldiscussionthreadmodechangedeventactor?: Maybe<Array<ProposalDiscussionThreadModeChangedEvent>>
  proposalvotedeventvoter?: Maybe<Array<ProposalVotedEvent>>
  stakingaccountaddedeventmember?: Maybe<Array<StakingAccountAddedEvent>>
  stakingaccountconfirmedeventmember?: Maybe<Array<StakingAccountConfirmedEvent>>
  stakingaccountremovedeventmember?: Maybe<Array<StakingAccountRemovedEvent>>
  voteonpolleventvotingMember?: Maybe<Array<VoteOnPollEvent>>
  workinggroupapplicationapplicant?: Maybe<Array<WorkingGroupApplication>>
}

export type MembershipBoughtEvent = Event &
  BaseGraphQlObject & {
    __typename: 'MembershipBoughtEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    newMember: Membership
    newMemberId: Scalars['String']
    rootAccount: Scalars['String']
    controllerAccount: Scalars['String']
    handle: Scalars['String']
    metadata: MemberMetadata
    metadataId: Scalars['String']
    referrer?: Maybe<Membership>
    referrerId?: Maybe<Scalars['String']>
  }

export type MembershipBoughtEventConnection = {
  __typename: 'MembershipBoughtEventConnection'
  totalCount: Scalars['Int']
  edges: Array<MembershipBoughtEventEdge>
  pageInfo: PageInfo
}

export type MembershipBoughtEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  newMember: Scalars['ID']
  rootAccount: Scalars['String']
  controllerAccount: Scalars['String']
  handle: Scalars['String']
  metadata: Scalars['ID']
  referrer?: Maybe<Scalars['ID']>
}

export type MembershipBoughtEventEdge = {
  __typename: 'MembershipBoughtEventEdge'
  node: MembershipBoughtEvent
  cursor: Scalars['String']
}

export enum MembershipBoughtEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NewMemberAsc = 'newMember_ASC',
  NewMemberDesc = 'newMember_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
  ControllerAccountAsc = 'controllerAccount_ASC',
  ControllerAccountDesc = 'controllerAccount_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
  ReferrerAsc = 'referrer_ASC',
  ReferrerDesc = 'referrer_DESC',
}

export type MembershipBoughtEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  newMember?: Maybe<Scalars['ID']>
  rootAccount?: Maybe<Scalars['String']>
  controllerAccount?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  metadata?: Maybe<Scalars['ID']>
  referrer?: Maybe<Scalars['ID']>
}

export type MembershipBoughtEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  newMember_eq?: Maybe<Scalars['ID']>
  newMember_in?: Maybe<Array<Scalars['ID']>>
  rootAccount_eq?: Maybe<Scalars['String']>
  rootAccount_contains?: Maybe<Scalars['String']>
  rootAccount_startsWith?: Maybe<Scalars['String']>
  rootAccount_endsWith?: Maybe<Scalars['String']>
  rootAccount_in?: Maybe<Array<Scalars['String']>>
  controllerAccount_eq?: Maybe<Scalars['String']>
  controllerAccount_contains?: Maybe<Scalars['String']>
  controllerAccount_startsWith?: Maybe<Scalars['String']>
  controllerAccount_endsWith?: Maybe<Scalars['String']>
  controllerAccount_in?: Maybe<Array<Scalars['String']>>
  handle_eq?: Maybe<Scalars['String']>
  handle_contains?: Maybe<Scalars['String']>
  handle_startsWith?: Maybe<Scalars['String']>
  handle_endsWith?: Maybe<Scalars['String']>
  handle_in?: Maybe<Array<Scalars['String']>>
  metadata_eq?: Maybe<Scalars['ID']>
  metadata_in?: Maybe<Array<Scalars['ID']>>
  referrer_eq?: Maybe<Scalars['ID']>
  referrer_in?: Maybe<Array<Scalars['ID']>>
  newMember?: Maybe<MembershipWhereInput>
  metadata?: Maybe<MemberMetadataWhereInput>
  referrer?: Maybe<MembershipWhereInput>
  AND?: Maybe<Array<MembershipBoughtEventWhereInput>>
  OR?: Maybe<Array<MembershipBoughtEventWhereInput>>
}

export type MembershipBoughtEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type MembershipConnection = {
  __typename: 'MembershipConnection'
  totalCount: Scalars['Int']
  edges: Array<MembershipEdge>
  pageInfo: PageInfo
}

export type MembershipCreateInput = {
  handle: Scalars['String']
  metadata: Scalars['ID']
  controllerAccount: Scalars['String']
  rootAccount: Scalars['String']
  entry: Scalars['JSONObject']
  isVerified: Scalars['Boolean']
  boundAccounts: Array<Scalars['String']>
  inviteCount: Scalars['Float']
  invitedBy?: Maybe<Scalars['ID']>
  referredBy?: Maybe<Scalars['ID']>
  isFoundingMember: Scalars['Boolean']
}

export type MembershipEdge = {
  __typename: 'MembershipEdge'
  node: Membership
  cursor: Scalars['String']
}

export type MembershipEntryGenesis = {
  __typename: 'MembershipEntryGenesis'
  phantom?: Maybe<Scalars['Int']>
}

export type MembershipEntryGenesisCreateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type MembershipEntryGenesisUpdateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type MembershipEntryGenesisWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  phantom_eq?: Maybe<Scalars['Int']>
  phantom_gt?: Maybe<Scalars['Int']>
  phantom_gte?: Maybe<Scalars['Int']>
  phantom_lt?: Maybe<Scalars['Int']>
  phantom_lte?: Maybe<Scalars['Int']>
  phantom_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<MembershipEntryGenesisWhereInput>>
  OR?: Maybe<Array<MembershipEntryGenesisWhereInput>>
}

export type MembershipEntryGenesisWhereUniqueInput = {
  id: Scalars['ID']
}

export type MembershipEntryInvited = {
  __typename: 'MembershipEntryInvited'
  memberInvitedEvent?: Maybe<MemberInvitedEvent>
}

export type MembershipEntryMethod = MembershipEntryPaid | MembershipEntryInvited | MembershipEntryGenesis

export type MembershipEntryPaid = {
  __typename: 'MembershipEntryPaid'
  membershipBoughtEvent?: Maybe<MembershipBoughtEvent>
}

export enum MembershipOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
  ControllerAccountAsc = 'controllerAccount_ASC',
  ControllerAccountDesc = 'controllerAccount_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
  IsVerifiedAsc = 'isVerified_ASC',
  IsVerifiedDesc = 'isVerified_DESC',
  InviteCountAsc = 'inviteCount_ASC',
  InviteCountDesc = 'inviteCount_DESC',
  InvitedByAsc = 'invitedBy_ASC',
  InvitedByDesc = 'invitedBy_DESC',
  ReferredByAsc = 'referredBy_ASC',
  ReferredByDesc = 'referredBy_DESC',
  IsFoundingMemberAsc = 'isFoundingMember_ASC',
  IsFoundingMemberDesc = 'isFoundingMember_DESC',
}

export type MembershipPriceUpdatedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'MembershipPriceUpdatedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    newPrice: Scalars['BigInt']
  }

export type MembershipPriceUpdatedEventConnection = {
  __typename: 'MembershipPriceUpdatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<MembershipPriceUpdatedEventEdge>
  pageInfo: PageInfo
}

export type MembershipPriceUpdatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  newPrice: Scalars['BigInt']
}

export type MembershipPriceUpdatedEventEdge = {
  __typename: 'MembershipPriceUpdatedEventEdge'
  node: MembershipPriceUpdatedEvent
  cursor: Scalars['String']
}

export enum MembershipPriceUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NewPriceAsc = 'newPrice_ASC',
  NewPriceDesc = 'newPrice_DESC',
}

export type MembershipPriceUpdatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  newPrice?: Maybe<Scalars['BigInt']>
}

export type MembershipPriceUpdatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  newPrice_eq?: Maybe<Scalars['BigInt']>
  newPrice_gt?: Maybe<Scalars['BigInt']>
  newPrice_gte?: Maybe<Scalars['BigInt']>
  newPrice_lt?: Maybe<Scalars['BigInt']>
  newPrice_lte?: Maybe<Scalars['BigInt']>
  newPrice_in?: Maybe<Array<Scalars['BigInt']>>
  AND?: Maybe<Array<MembershipPriceUpdatedEventWhereInput>>
  OR?: Maybe<Array<MembershipPriceUpdatedEventWhereInput>>
}

export type MembershipPriceUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type MembershipSystemSnapshot = BaseGraphQlObject & {
  __typename: 'MembershipSystemSnapshot'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  snapshotBlock: Scalars['Int']
  defaultInviteCount: Scalars['Int']
  membershipPrice: Scalars['BigInt']
  referralCut: Scalars['Int']
  invitedInitialBalance: Scalars['BigInt']
}

export type MembershipSystemSnapshotConnection = {
  __typename: 'MembershipSystemSnapshotConnection'
  totalCount: Scalars['Int']
  edges: Array<MembershipSystemSnapshotEdge>
  pageInfo: PageInfo
}

export type MembershipSystemSnapshotCreateInput = {
  snapshotBlock: Scalars['Float']
  defaultInviteCount: Scalars['Float']
  membershipPrice: Scalars['BigInt']
  referralCut: Scalars['Float']
  invitedInitialBalance: Scalars['BigInt']
}

export type MembershipSystemSnapshotEdge = {
  __typename: 'MembershipSystemSnapshotEdge'
  node: MembershipSystemSnapshot
  cursor: Scalars['String']
}

export enum MembershipSystemSnapshotOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  SnapshotBlockAsc = 'snapshotBlock_ASC',
  SnapshotBlockDesc = 'snapshotBlock_DESC',
  DefaultInviteCountAsc = 'defaultInviteCount_ASC',
  DefaultInviteCountDesc = 'defaultInviteCount_DESC',
  MembershipPriceAsc = 'membershipPrice_ASC',
  MembershipPriceDesc = 'membershipPrice_DESC',
  ReferralCutAsc = 'referralCut_ASC',
  ReferralCutDesc = 'referralCut_DESC',
  InvitedInitialBalanceAsc = 'invitedInitialBalance_ASC',
  InvitedInitialBalanceDesc = 'invitedInitialBalance_DESC',
}

export type MembershipSystemSnapshotUpdateInput = {
  snapshotBlock?: Maybe<Scalars['Float']>
  defaultInviteCount?: Maybe<Scalars['Float']>
  membershipPrice?: Maybe<Scalars['BigInt']>
  referralCut?: Maybe<Scalars['Float']>
  invitedInitialBalance?: Maybe<Scalars['BigInt']>
}

export type MembershipSystemSnapshotWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  snapshotBlock_eq?: Maybe<Scalars['Int']>
  snapshotBlock_gt?: Maybe<Scalars['Int']>
  snapshotBlock_gte?: Maybe<Scalars['Int']>
  snapshotBlock_lt?: Maybe<Scalars['Int']>
  snapshotBlock_lte?: Maybe<Scalars['Int']>
  snapshotBlock_in?: Maybe<Array<Scalars['Int']>>
  defaultInviteCount_eq?: Maybe<Scalars['Int']>
  defaultInviteCount_gt?: Maybe<Scalars['Int']>
  defaultInviteCount_gte?: Maybe<Scalars['Int']>
  defaultInviteCount_lt?: Maybe<Scalars['Int']>
  defaultInviteCount_lte?: Maybe<Scalars['Int']>
  defaultInviteCount_in?: Maybe<Array<Scalars['Int']>>
  membershipPrice_eq?: Maybe<Scalars['BigInt']>
  membershipPrice_gt?: Maybe<Scalars['BigInt']>
  membershipPrice_gte?: Maybe<Scalars['BigInt']>
  membershipPrice_lt?: Maybe<Scalars['BigInt']>
  membershipPrice_lte?: Maybe<Scalars['BigInt']>
  membershipPrice_in?: Maybe<Array<Scalars['BigInt']>>
  referralCut_eq?: Maybe<Scalars['Int']>
  referralCut_gt?: Maybe<Scalars['Int']>
  referralCut_gte?: Maybe<Scalars['Int']>
  referralCut_lt?: Maybe<Scalars['Int']>
  referralCut_lte?: Maybe<Scalars['Int']>
  referralCut_in?: Maybe<Array<Scalars['Int']>>
  invitedInitialBalance_eq?: Maybe<Scalars['BigInt']>
  invitedInitialBalance_gt?: Maybe<Scalars['BigInt']>
  invitedInitialBalance_gte?: Maybe<Scalars['BigInt']>
  invitedInitialBalance_lt?: Maybe<Scalars['BigInt']>
  invitedInitialBalance_lte?: Maybe<Scalars['BigInt']>
  invitedInitialBalance_in?: Maybe<Array<Scalars['BigInt']>>
  AND?: Maybe<Array<MembershipSystemSnapshotWhereInput>>
  OR?: Maybe<Array<MembershipSystemSnapshotWhereInput>>
}

export type MembershipSystemSnapshotWhereUniqueInput = {
  id: Scalars['ID']
}

export type MembershipUpdateInput = {
  handle?: Maybe<Scalars['String']>
  metadata?: Maybe<Scalars['ID']>
  controllerAccount?: Maybe<Scalars['String']>
  rootAccount?: Maybe<Scalars['String']>
  entry?: Maybe<Scalars['JSONObject']>
  isVerified?: Maybe<Scalars['Boolean']>
  boundAccounts?: Maybe<Array<Scalars['String']>>
  inviteCount?: Maybe<Scalars['Float']>
  invitedBy?: Maybe<Scalars['ID']>
  referredBy?: Maybe<Scalars['ID']>
  isFoundingMember?: Maybe<Scalars['Boolean']>
}

export type MembershipWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  handle_eq?: Maybe<Scalars['String']>
  handle_contains?: Maybe<Scalars['String']>
  handle_startsWith?: Maybe<Scalars['String']>
  handle_endsWith?: Maybe<Scalars['String']>
  handle_in?: Maybe<Array<Scalars['String']>>
  metadata_eq?: Maybe<Scalars['ID']>
  metadata_in?: Maybe<Array<Scalars['ID']>>
  controllerAccount_eq?: Maybe<Scalars['String']>
  controllerAccount_contains?: Maybe<Scalars['String']>
  controllerAccount_startsWith?: Maybe<Scalars['String']>
  controllerAccount_endsWith?: Maybe<Scalars['String']>
  controllerAccount_in?: Maybe<Array<Scalars['String']>>
  rootAccount_eq?: Maybe<Scalars['String']>
  rootAccount_contains?: Maybe<Scalars['String']>
  rootAccount_startsWith?: Maybe<Scalars['String']>
  rootAccount_endsWith?: Maybe<Scalars['String']>
  rootAccount_in?: Maybe<Array<Scalars['String']>>
  entry_json?: Maybe<Scalars['JSONObject']>
  isVerified_eq?: Maybe<Scalars['Boolean']>
  isVerified_in?: Maybe<Array<Scalars['Boolean']>>
  inviteCount_eq?: Maybe<Scalars['Int']>
  inviteCount_gt?: Maybe<Scalars['Int']>
  inviteCount_gte?: Maybe<Scalars['Int']>
  inviteCount_lt?: Maybe<Scalars['Int']>
  inviteCount_lte?: Maybe<Scalars['Int']>
  inviteCount_in?: Maybe<Array<Scalars['Int']>>
  invitedBy_eq?: Maybe<Scalars['ID']>
  invitedBy_in?: Maybe<Array<Scalars['ID']>>
  referredBy_eq?: Maybe<Scalars['ID']>
  referredBy_in?: Maybe<Array<Scalars['ID']>>
  isFoundingMember_eq?: Maybe<Scalars['Boolean']>
  isFoundingMember_in?: Maybe<Array<Scalars['Boolean']>>
  metadata?: Maybe<MemberMetadataWhereInput>
  invitees_none?: Maybe<MembershipWhereInput>
  invitees_some?: Maybe<MembershipWhereInput>
  invitees_every?: Maybe<MembershipWhereInput>
  invitedBy?: Maybe<MembershipWhereInput>
  referredMembers_none?: Maybe<MembershipWhereInput>
  referredMembers_some?: Maybe<MembershipWhereInput>
  referredMembers_every?: Maybe<MembershipWhereInput>
  referredBy?: Maybe<MembershipWhereInput>
  roles_none?: Maybe<WorkerWhereInput>
  roles_some?: Maybe<WorkerWhereInput>
  roles_every?: Maybe<WorkerWhereInput>
  whitelistedIn_none?: Maybe<ProposalDiscussionWhitelistWhereInput>
  whitelistedIn_some?: Maybe<ProposalDiscussionWhitelistWhereInput>
  whitelistedIn_every?: Maybe<ProposalDiscussionWhitelistWhereInput>
  forumpostauthor_none?: Maybe<ForumPostWhereInput>
  forumpostauthor_some?: Maybe<ForumPostWhereInput>
  forumpostauthor_every?: Maybe<ForumPostWhereInput>
  forumpostreactionmember_none?: Maybe<ForumPostReactionWhereInput>
  forumpostreactionmember_some?: Maybe<ForumPostReactionWhereInput>
  forumpostreactionmember_every?: Maybe<ForumPostReactionWhereInput>
  forumthreadauthor_none?: Maybe<ForumThreadWhereInput>
  forumthreadauthor_some?: Maybe<ForumThreadWhereInput>
  forumthreadauthor_every?: Maybe<ForumThreadWhereInput>
  invitestransferredeventsourceMember_none?: Maybe<InvitesTransferredEventWhereInput>
  invitestransferredeventsourceMember_some?: Maybe<InvitesTransferredEventWhereInput>
  invitestransferredeventsourceMember_every?: Maybe<InvitesTransferredEventWhereInput>
  invitestransferredeventtargetMember_none?: Maybe<InvitesTransferredEventWhereInput>
  invitestransferredeventtargetMember_some?: Maybe<InvitesTransferredEventWhereInput>
  invitestransferredeventtargetMember_every?: Maybe<InvitesTransferredEventWhereInput>
  memberaccountsupdatedeventmember_none?: Maybe<MemberAccountsUpdatedEventWhereInput>
  memberaccountsupdatedeventmember_some?: Maybe<MemberAccountsUpdatedEventWhereInput>
  memberaccountsupdatedeventmember_every?: Maybe<MemberAccountsUpdatedEventWhereInput>
  memberinvitedeventinvitingMember_none?: Maybe<MemberInvitedEventWhereInput>
  memberinvitedeventinvitingMember_some?: Maybe<MemberInvitedEventWhereInput>
  memberinvitedeventinvitingMember_every?: Maybe<MemberInvitedEventWhereInput>
  memberinvitedeventnewMember_none?: Maybe<MemberInvitedEventWhereInput>
  memberinvitedeventnewMember_some?: Maybe<MemberInvitedEventWhereInput>
  memberinvitedeventnewMember_every?: Maybe<MemberInvitedEventWhereInput>
  memberprofileupdatedeventmember_none?: Maybe<MemberProfileUpdatedEventWhereInput>
  memberprofileupdatedeventmember_some?: Maybe<MemberProfileUpdatedEventWhereInput>
  memberprofileupdatedeventmember_every?: Maybe<MemberProfileUpdatedEventWhereInput>
  memberverificationstatusupdatedeventmember_none?: Maybe<MemberVerificationStatusUpdatedEventWhereInput>
  memberverificationstatusupdatedeventmember_some?: Maybe<MemberVerificationStatusUpdatedEventWhereInput>
  memberverificationstatusupdatedeventmember_every?: Maybe<MemberVerificationStatusUpdatedEventWhereInput>
  membershipboughteventnewMember_none?: Maybe<MembershipBoughtEventWhereInput>
  membershipboughteventnewMember_some?: Maybe<MembershipBoughtEventWhereInput>
  membershipboughteventnewMember_every?: Maybe<MembershipBoughtEventWhereInput>
  membershipboughteventreferrer_none?: Maybe<MembershipBoughtEventWhereInput>
  membershipboughteventreferrer_some?: Maybe<MembershipBoughtEventWhereInput>
  membershipboughteventreferrer_every?: Maybe<MembershipBoughtEventWhereInput>
  postdeletedeventactor_none?: Maybe<PostDeletedEventWhereInput>
  postdeletedeventactor_some?: Maybe<PostDeletedEventWhereInput>
  postdeletedeventactor_every?: Maybe<PostDeletedEventWhereInput>
  postreactedeventreactingMember_none?: Maybe<PostReactedEventWhereInput>
  postreactedeventreactingMember_some?: Maybe<PostReactedEventWhereInput>
  postreactedeventreactingMember_every?: Maybe<PostReactedEventWhereInput>
  proposalcreator_none?: Maybe<ProposalWhereInput>
  proposalcreator_some?: Maybe<ProposalWhereInput>
  proposalcreator_every?: Maybe<ProposalWhereInput>
  proposaldiscussionpostauthor_none?: Maybe<ProposalDiscussionPostWhereInput>
  proposaldiscussionpostauthor_some?: Maybe<ProposalDiscussionPostWhereInput>
  proposaldiscussionpostauthor_every?: Maybe<ProposalDiscussionPostWhereInput>
  proposaldiscussionpostdeletedeventactor_none?: Maybe<ProposalDiscussionPostDeletedEventWhereInput>
  proposaldiscussionpostdeletedeventactor_some?: Maybe<ProposalDiscussionPostDeletedEventWhereInput>
  proposaldiscussionpostdeletedeventactor_every?: Maybe<ProposalDiscussionPostDeletedEventWhereInput>
  proposaldiscussionthreadmodechangedeventactor_none?: Maybe<ProposalDiscussionThreadModeChangedEventWhereInput>
  proposaldiscussionthreadmodechangedeventactor_some?: Maybe<ProposalDiscussionThreadModeChangedEventWhereInput>
  proposaldiscussionthreadmodechangedeventactor_every?: Maybe<ProposalDiscussionThreadModeChangedEventWhereInput>
  proposalvotedeventvoter_none?: Maybe<ProposalVotedEventWhereInput>
  proposalvotedeventvoter_some?: Maybe<ProposalVotedEventWhereInput>
  proposalvotedeventvoter_every?: Maybe<ProposalVotedEventWhereInput>
  stakingaccountaddedeventmember_none?: Maybe<StakingAccountAddedEventWhereInput>
  stakingaccountaddedeventmember_some?: Maybe<StakingAccountAddedEventWhereInput>
  stakingaccountaddedeventmember_every?: Maybe<StakingAccountAddedEventWhereInput>
  stakingaccountconfirmedeventmember_none?: Maybe<StakingAccountConfirmedEventWhereInput>
  stakingaccountconfirmedeventmember_some?: Maybe<StakingAccountConfirmedEventWhereInput>
  stakingaccountconfirmedeventmember_every?: Maybe<StakingAccountConfirmedEventWhereInput>
  stakingaccountremovedeventmember_none?: Maybe<StakingAccountRemovedEventWhereInput>
  stakingaccountremovedeventmember_some?: Maybe<StakingAccountRemovedEventWhereInput>
  stakingaccountremovedeventmember_every?: Maybe<StakingAccountRemovedEventWhereInput>
  voteonpolleventvotingMember_none?: Maybe<VoteOnPollEventWhereInput>
  voteonpolleventvotingMember_some?: Maybe<VoteOnPollEventWhereInput>
  voteonpolleventvotingMember_every?: Maybe<VoteOnPollEventWhereInput>
  workinggroupapplicationapplicant_none?: Maybe<WorkingGroupApplicationWhereInput>
  workinggroupapplicationapplicant_some?: Maybe<WorkingGroupApplicationWhereInput>
  workinggroupapplicationapplicant_every?: Maybe<WorkingGroupApplicationWhereInput>
  AND?: Maybe<Array<MembershipWhereInput>>
  OR?: Maybe<Array<MembershipWhereInput>>
}

export type MembershipWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
  handle?: Maybe<Scalars['String']>
}

export enum Network {
  Babylon = 'BABYLON',
  Alexandria = 'ALEXANDRIA',
  Rome = 'ROME',
  Olympia = 'OLYMPIA',
}

export type NewMissedRewardLevelReachedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'NewMissedRewardLevelReachedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    worker: Worker
    workerId: Scalars['String']
    newMissedRewardAmount: Scalars['BigInt']
  }

export type NewMissedRewardLevelReachedEventConnection = {
  __typename: 'NewMissedRewardLevelReachedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<NewMissedRewardLevelReachedEventEdge>
  pageInfo: PageInfo
}

export type NewMissedRewardLevelReachedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  worker: Scalars['ID']
  newMissedRewardAmount: Scalars['BigInt']
}

export type NewMissedRewardLevelReachedEventEdge = {
  __typename: 'NewMissedRewardLevelReachedEventEdge'
  node: NewMissedRewardLevelReachedEvent
  cursor: Scalars['String']
}

export enum NewMissedRewardLevelReachedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
  NewMissedRewardAmountAsc = 'newMissedRewardAmount_ASC',
  NewMissedRewardAmountDesc = 'newMissedRewardAmount_DESC',
}

export type NewMissedRewardLevelReachedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  worker?: Maybe<Scalars['ID']>
  newMissedRewardAmount?: Maybe<Scalars['BigInt']>
}

export type NewMissedRewardLevelReachedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  worker_eq?: Maybe<Scalars['ID']>
  worker_in?: Maybe<Array<Scalars['ID']>>
  newMissedRewardAmount_eq?: Maybe<Scalars['BigInt']>
  newMissedRewardAmount_gt?: Maybe<Scalars['BigInt']>
  newMissedRewardAmount_gte?: Maybe<Scalars['BigInt']>
  newMissedRewardAmount_lt?: Maybe<Scalars['BigInt']>
  newMissedRewardAmount_lte?: Maybe<Scalars['BigInt']>
  newMissedRewardAmount_in?: Maybe<Array<Scalars['BigInt']>>
  group?: Maybe<WorkingGroupWhereInput>
  worker?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<NewMissedRewardLevelReachedEventWhereInput>>
  OR?: Maybe<Array<NewMissedRewardLevelReachedEventWhereInput>>
}

export type NewMissedRewardLevelReachedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type OpeningAddedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'OpeningAddedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    opening: WorkingGroupOpening
    openingId: Scalars['String']
  }

export type OpeningAddedEventConnection = {
  __typename: 'OpeningAddedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<OpeningAddedEventEdge>
  pageInfo: PageInfo
}

export type OpeningAddedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  opening: Scalars['ID']
}

export type OpeningAddedEventEdge = {
  __typename: 'OpeningAddedEventEdge'
  node: OpeningAddedEvent
  cursor: Scalars['String']
}

export enum OpeningAddedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  OpeningAsc = 'opening_ASC',
  OpeningDesc = 'opening_DESC',
}

export type OpeningAddedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  opening?: Maybe<Scalars['ID']>
}

export type OpeningAddedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  opening_eq?: Maybe<Scalars['ID']>
  opening_in?: Maybe<Array<Scalars['ID']>>
  group?: Maybe<WorkingGroupWhereInput>
  opening?: Maybe<WorkingGroupOpeningWhereInput>
  AND?: Maybe<Array<OpeningAddedEventWhereInput>>
  OR?: Maybe<Array<OpeningAddedEventWhereInput>>
}

export type OpeningAddedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type OpeningCanceledEvent = Event &
  BaseGraphQlObject & {
    __typename: 'OpeningCanceledEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    opening: WorkingGroupOpening
    openingId: Scalars['String']
  }

export type OpeningCanceledEventConnection = {
  __typename: 'OpeningCanceledEventConnection'
  totalCount: Scalars['Int']
  edges: Array<OpeningCanceledEventEdge>
  pageInfo: PageInfo
}

export type OpeningCanceledEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  opening: Scalars['ID']
}

export type OpeningCanceledEventEdge = {
  __typename: 'OpeningCanceledEventEdge'
  node: OpeningCanceledEvent
  cursor: Scalars['String']
}

export enum OpeningCanceledEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  OpeningAsc = 'opening_ASC',
  OpeningDesc = 'opening_DESC',
}

export type OpeningCanceledEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  opening?: Maybe<Scalars['ID']>
}

export type OpeningCanceledEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  opening_eq?: Maybe<Scalars['ID']>
  opening_in?: Maybe<Array<Scalars['ID']>>
  group?: Maybe<WorkingGroupWhereInput>
  opening?: Maybe<WorkingGroupOpeningWhereInput>
  AND?: Maybe<Array<OpeningCanceledEventWhereInput>>
  OR?: Maybe<Array<OpeningCanceledEventWhereInput>>
}

export type OpeningCanceledEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type OpeningFilledEvent = Event &
  BaseGraphQlObject & {
    __typename: 'OpeningFilledEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    opening: WorkingGroupOpening
    openingId: Scalars['String']
    workersHired: Array<Worker>
  }

export type OpeningFilledEventConnection = {
  __typename: 'OpeningFilledEventConnection'
  totalCount: Scalars['Int']
  edges: Array<OpeningFilledEventEdge>
  pageInfo: PageInfo
}

export type OpeningFilledEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  opening: Scalars['ID']
}

export type OpeningFilledEventEdge = {
  __typename: 'OpeningFilledEventEdge'
  node: OpeningFilledEvent
  cursor: Scalars['String']
}

export enum OpeningFilledEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  OpeningAsc = 'opening_ASC',
  OpeningDesc = 'opening_DESC',
}

export type OpeningFilledEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  opening?: Maybe<Scalars['ID']>
}

export type OpeningFilledEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  opening_eq?: Maybe<Scalars['ID']>
  opening_in?: Maybe<Array<Scalars['ID']>>
  group?: Maybe<WorkingGroupWhereInput>
  opening?: Maybe<WorkingGroupOpeningWhereInput>
  workersHired_none?: Maybe<WorkerWhereInput>
  workersHired_some?: Maybe<WorkerWhereInput>
  workersHired_every?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<OpeningFilledEventWhereInput>>
  OR?: Maybe<Array<OpeningFilledEventWhereInput>>
}

export type OpeningFilledEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type OpeningStatusCancelled = {
  __typename: 'OpeningStatusCancelled'
  openingCanceledEvent?: Maybe<OpeningCanceledEvent>
}

export type OpeningStatusFilled = {
  __typename: 'OpeningStatusFilled'
  openingFilledEvent?: Maybe<OpeningFilledEvent>
}

export type OpeningStatusOpen = {
  __typename: 'OpeningStatusOpen'
  phantom?: Maybe<Scalars['Int']>
}

export type OpeningStatusOpenCreateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type OpeningStatusOpenUpdateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type OpeningStatusOpenWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  phantom_eq?: Maybe<Scalars['Int']>
  phantom_gt?: Maybe<Scalars['Int']>
  phantom_gte?: Maybe<Scalars['Int']>
  phantom_lt?: Maybe<Scalars['Int']>
  phantom_lte?: Maybe<Scalars['Int']>
  phantom_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<OpeningStatusOpenWhereInput>>
  OR?: Maybe<Array<OpeningStatusOpenWhereInput>>
}

export type OpeningStatusOpenWhereUniqueInput = {
  id: Scalars['ID']
}

export type PageInfo = {
  __typename: 'PageInfo'
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
  endCursor?: Maybe<Scalars['String']>
}

export type PostAddedEvent = BaseGraphQlObject & {
  __typename: 'PostAddedEvent'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Int']
  network: Network
  indexInBlock: Scalars['Int']
  post: ForumPost
  postId: Scalars['String']
  isEditable?: Maybe<Scalars['Boolean']>
  text: Scalars['String']
}

export type PostAddedEventConnection = {
  __typename: 'PostAddedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<PostAddedEventEdge>
  pageInfo: PageInfo
}

export type PostAddedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  post: Scalars['ID']
  isEditable?: Maybe<Scalars['Boolean']>
  text: Scalars['String']
}

export type PostAddedEventEdge = {
  __typename: 'PostAddedEventEdge'
  node: PostAddedEvent
  cursor: Scalars['String']
}

export enum PostAddedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  PostAsc = 'post_ASC',
  PostDesc = 'post_DESC',
  IsEditableAsc = 'isEditable_ASC',
  IsEditableDesc = 'isEditable_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
}

export type PostAddedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  post?: Maybe<Scalars['ID']>
  isEditable?: Maybe<Scalars['Boolean']>
  text?: Maybe<Scalars['String']>
}

export type PostAddedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  post_eq?: Maybe<Scalars['ID']>
  post_in?: Maybe<Array<Scalars['ID']>>
  isEditable_eq?: Maybe<Scalars['Boolean']>
  isEditable_in?: Maybe<Array<Scalars['Boolean']>>
  text_eq?: Maybe<Scalars['String']>
  text_contains?: Maybe<Scalars['String']>
  text_startsWith?: Maybe<Scalars['String']>
  text_endsWith?: Maybe<Scalars['String']>
  text_in?: Maybe<Array<Scalars['String']>>
  post?: Maybe<ForumPostWhereInput>
  AND?: Maybe<Array<PostAddedEventWhereInput>>
  OR?: Maybe<Array<PostAddedEventWhereInput>>
}

export type PostAddedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type PostDeletedEvent = BaseGraphQlObject & {
  __typename: 'PostDeletedEvent'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Int']
  network: Network
  indexInBlock: Scalars['Int']
  posts: Array<ForumPost>
  actor: Membership
  actorId: Scalars['String']
  rationale: Scalars['String']
}

export type PostDeletedEventConnection = {
  __typename: 'PostDeletedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<PostDeletedEventEdge>
  pageInfo: PageInfo
}

export type PostDeletedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  actor: Scalars['ID']
  rationale: Scalars['String']
}

export type PostDeletedEventEdge = {
  __typename: 'PostDeletedEventEdge'
  node: PostDeletedEvent
  cursor: Scalars['String']
}

export enum PostDeletedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  ActorAsc = 'actor_ASC',
  ActorDesc = 'actor_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
}

export type PostDeletedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  actor?: Maybe<Scalars['ID']>
  rationale?: Maybe<Scalars['String']>
}

export type PostDeletedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  actor_eq?: Maybe<Scalars['ID']>
  actor_in?: Maybe<Array<Scalars['ID']>>
  rationale_eq?: Maybe<Scalars['String']>
  rationale_contains?: Maybe<Scalars['String']>
  rationale_startsWith?: Maybe<Scalars['String']>
  rationale_endsWith?: Maybe<Scalars['String']>
  rationale_in?: Maybe<Array<Scalars['String']>>
  posts_none?: Maybe<ForumPostWhereInput>
  posts_some?: Maybe<ForumPostWhereInput>
  posts_every?: Maybe<ForumPostWhereInput>
  actor?: Maybe<MembershipWhereInput>
  AND?: Maybe<Array<PostDeletedEventWhereInput>>
  OR?: Maybe<Array<PostDeletedEventWhereInput>>
}

export type PostDeletedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type PostModeratedEvent = BaseGraphQlObject & {
  __typename: 'PostModeratedEvent'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Int']
  network: Network
  indexInBlock: Scalars['Int']
  post: ForumPost
  postId: Scalars['String']
  rationale: Scalars['String']
  actor: Worker
  actorId: Scalars['String']
}

export type PostModeratedEventConnection = {
  __typename: 'PostModeratedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<PostModeratedEventEdge>
  pageInfo: PageInfo
}

export type PostModeratedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  post: Scalars['ID']
  rationale: Scalars['String']
  actor: Scalars['ID']
}

export type PostModeratedEventEdge = {
  __typename: 'PostModeratedEventEdge'
  node: PostModeratedEvent
  cursor: Scalars['String']
}

export enum PostModeratedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  PostAsc = 'post_ASC',
  PostDesc = 'post_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
  ActorAsc = 'actor_ASC',
  ActorDesc = 'actor_DESC',
}

export type PostModeratedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  post?: Maybe<Scalars['ID']>
  rationale?: Maybe<Scalars['String']>
  actor?: Maybe<Scalars['ID']>
}

export type PostModeratedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  post_eq?: Maybe<Scalars['ID']>
  post_in?: Maybe<Array<Scalars['ID']>>
  rationale_eq?: Maybe<Scalars['String']>
  rationale_contains?: Maybe<Scalars['String']>
  rationale_startsWith?: Maybe<Scalars['String']>
  rationale_endsWith?: Maybe<Scalars['String']>
  rationale_in?: Maybe<Array<Scalars['String']>>
  actor_eq?: Maybe<Scalars['ID']>
  actor_in?: Maybe<Array<Scalars['ID']>>
  post?: Maybe<ForumPostWhereInput>
  actor?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<PostModeratedEventWhereInput>>
  OR?: Maybe<Array<PostModeratedEventWhereInput>>
}

export type PostModeratedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type PostOrigin = PostOriginThreadInitial | PostOriginThreadReply

export type PostOriginThreadInitial = {
  __typename: 'PostOriginThreadInitial'
  threadCreatedEvent?: Maybe<ThreadCreatedEvent>
}

export type PostOriginThreadReply = {
  __typename: 'PostOriginThreadReply'
  postAddedEvent?: Maybe<PostAddedEvent>
}

export type PostReactedEvent = BaseGraphQlObject & {
  __typename: 'PostReactedEvent'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Int']
  network: Network
  indexInBlock: Scalars['Int']
  post: ForumPost
  postId: Scalars['String']
  reactionResult: PostReactionResult
  reactingMember: Membership
  reactingMemberId: Scalars['String']
}

export type PostReactedEventConnection = {
  __typename: 'PostReactedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<PostReactedEventEdge>
  pageInfo: PageInfo
}

export type PostReactedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  post: Scalars['ID']
  reactionResult: Scalars['JSONObject']
  reactingMember: Scalars['ID']
}

export type PostReactedEventEdge = {
  __typename: 'PostReactedEventEdge'
  node: PostReactedEvent
  cursor: Scalars['String']
}

export enum PostReactedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  PostAsc = 'post_ASC',
  PostDesc = 'post_DESC',
  ReactingMemberAsc = 'reactingMember_ASC',
  ReactingMemberDesc = 'reactingMember_DESC',
}

export type PostReactedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  post?: Maybe<Scalars['ID']>
  reactionResult?: Maybe<Scalars['JSONObject']>
  reactingMember?: Maybe<Scalars['ID']>
}

export type PostReactedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  post_eq?: Maybe<Scalars['ID']>
  post_in?: Maybe<Array<Scalars['ID']>>
  reactionResult_json?: Maybe<Scalars['JSONObject']>
  reactingMember_eq?: Maybe<Scalars['ID']>
  reactingMember_in?: Maybe<Array<Scalars['ID']>>
  post?: Maybe<ForumPostWhereInput>
  reactingMember?: Maybe<MembershipWhereInput>
  AND?: Maybe<Array<PostReactedEventWhereInput>>
  OR?: Maybe<Array<PostReactedEventWhereInput>>
}

export type PostReactedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export enum PostReaction {
  Like = 'LIKE',
}

export type PostReactionResult = PostReactionResultCancel | PostReactionResultValid | PostReactionResultInvalid

export type PostReactionResultCancel = {
  __typename: 'PostReactionResultCancel'
  phantom?: Maybe<Scalars['Int']>
}

export type PostReactionResultCancelCreateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type PostReactionResultCancelUpdateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type PostReactionResultCancelWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  phantom_eq?: Maybe<Scalars['Int']>
  phantom_gt?: Maybe<Scalars['Int']>
  phantom_gte?: Maybe<Scalars['Int']>
  phantom_lt?: Maybe<Scalars['Int']>
  phantom_lte?: Maybe<Scalars['Int']>
  phantom_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<PostReactionResultCancelWhereInput>>
  OR?: Maybe<Array<PostReactionResultCancelWhereInput>>
}

export type PostReactionResultCancelWhereUniqueInput = {
  id: Scalars['ID']
}

export type PostReactionResultInvalid = {
  __typename: 'PostReactionResultInvalid'
  reactionId: Scalars['Int']
}

export type PostReactionResultInvalidCreateInput = {
  reactionId: Scalars['Float']
}

export type PostReactionResultInvalidUpdateInput = {
  reactionId?: Maybe<Scalars['Float']>
}

export type PostReactionResultInvalidWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  reactionId_eq?: Maybe<Scalars['Int']>
  reactionId_gt?: Maybe<Scalars['Int']>
  reactionId_gte?: Maybe<Scalars['Int']>
  reactionId_lt?: Maybe<Scalars['Int']>
  reactionId_lte?: Maybe<Scalars['Int']>
  reactionId_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<PostReactionResultInvalidWhereInput>>
  OR?: Maybe<Array<PostReactionResultInvalidWhereInput>>
}

export type PostReactionResultInvalidWhereUniqueInput = {
  id: Scalars['ID']
}

export type PostReactionResultValid = {
  __typename: 'PostReactionResultValid'
  reaction: PostReaction
  reactionId: Scalars['Int']
}

export type PostReactionResultValidCreateInput = {
  reaction: PostReaction
  reactionId: Scalars['Float']
}

export type PostReactionResultValidUpdateInput = {
  reaction?: Maybe<PostReaction>
  reactionId?: Maybe<Scalars['Float']>
}

export type PostReactionResultValidWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  reaction_eq?: Maybe<PostReaction>
  reaction_in?: Maybe<Array<PostReaction>>
  reactionId_eq?: Maybe<Scalars['Int']>
  reactionId_gt?: Maybe<Scalars['Int']>
  reactionId_gte?: Maybe<Scalars['Int']>
  reactionId_lt?: Maybe<Scalars['Int']>
  reactionId_lte?: Maybe<Scalars['Int']>
  reactionId_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<PostReactionResultValidWhereInput>>
  OR?: Maybe<Array<PostReactionResultValidWhereInput>>
}

export type PostReactionResultValidWhereUniqueInput = {
  id: Scalars['ID']
}

export type PostStatus = PostStatusActive | PostStatusLocked | PostStatusModerated | PostStatusRemoved

export type PostStatusActive = {
  __typename: 'PostStatusActive'
  phantom?: Maybe<Scalars['Int']>
}

export type PostStatusActiveCreateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type PostStatusActiveUpdateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type PostStatusActiveWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  phantom_eq?: Maybe<Scalars['Int']>
  phantom_gt?: Maybe<Scalars['Int']>
  phantom_gte?: Maybe<Scalars['Int']>
  phantom_lt?: Maybe<Scalars['Int']>
  phantom_lte?: Maybe<Scalars['Int']>
  phantom_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<PostStatusActiveWhereInput>>
  OR?: Maybe<Array<PostStatusActiveWhereInput>>
}

export type PostStatusActiveWhereUniqueInput = {
  id: Scalars['ID']
}

export type PostStatusLocked = {
  __typename: 'PostStatusLocked'
  postDeletedEvent?: Maybe<PostDeletedEvent>
}

export type PostStatusModerated = {
  __typename: 'PostStatusModerated'
  postModeratedEvent?: Maybe<PostModeratedEvent>
}

export type PostStatusRemoved = {
  __typename: 'PostStatusRemoved'
  postDeletedEvent?: Maybe<PostDeletedEvent>
}

export type PostTextUpdatedEvent = BaseGraphQlObject & {
  __typename: 'PostTextUpdatedEvent'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Int']
  network: Network
  indexInBlock: Scalars['Int']
  post: ForumPost
  postId: Scalars['String']
  newText: Scalars['String']
}

export type PostTextUpdatedEventConnection = {
  __typename: 'PostTextUpdatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<PostTextUpdatedEventEdge>
  pageInfo: PageInfo
}

export type PostTextUpdatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  post: Scalars['ID']
  newText: Scalars['String']
}

export type PostTextUpdatedEventEdge = {
  __typename: 'PostTextUpdatedEventEdge'
  node: PostTextUpdatedEvent
  cursor: Scalars['String']
}

export enum PostTextUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  PostAsc = 'post_ASC',
  PostDesc = 'post_DESC',
  NewTextAsc = 'newText_ASC',
  NewTextDesc = 'newText_DESC',
}

export type PostTextUpdatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  post?: Maybe<Scalars['ID']>
  newText?: Maybe<Scalars['String']>
}

export type PostTextUpdatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  post_eq?: Maybe<Scalars['ID']>
  post_in?: Maybe<Array<Scalars['ID']>>
  newText_eq?: Maybe<Scalars['String']>
  newText_contains?: Maybe<Scalars['String']>
  newText_startsWith?: Maybe<Scalars['String']>
  newText_endsWith?: Maybe<Scalars['String']>
  newText_in?: Maybe<Array<Scalars['String']>>
  post?: Maybe<ForumPostWhereInput>
  AND?: Maybe<Array<PostTextUpdatedEventWhereInput>>
  OR?: Maybe<Array<PostTextUpdatedEventWhereInput>>
}

export type PostTextUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type PostsByTextFtsOutput = {
  __typename: 'PostsByTextFTSOutput'
  item: PostsByTextSearchResult
  rank: Scalars['Float']
  isTypeOf: Scalars['String']
  highlight: Scalars['String']
}

export type PostsByTextSearchResult = ForumPost

export type ProcessorState = {
  __typename: 'ProcessorState'
  lastCompleteBlock: Scalars['Float']
  lastProcessedEvent: Scalars['String']
  indexerHead: Scalars['Float']
  chainHead: Scalars['Float']
}

export type Proposal = BaseGraphQlObject & {
  __typename: 'Proposal'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  title: Scalars['String']
  description: Scalars['String']
  details: ProposalDetails
  stakingAccount?: Maybe<Scalars['String']>
  creator: Membership
  creatorId: Scalars['String']
  createdInEvent: ProposalCreatedEvent
  exactExecutionBlock?: Maybe<Scalars['Int']>
  discussionThread: ProposalDiscussionThread
  councilApprovals: Scalars['Int']
  proposalStatusUpdates: Array<ProposalStatusUpdatedEvent>
  votes: Array<ProposalVotedEvent>
  status: ProposalStatus
  statusSetAtBlock: Scalars['Int']
  statusSetAtTime: Scalars['DateTime']
  proposalcancelledeventproposal?: Maybe<Array<ProposalCancelledEvent>>
  proposaldecisionmadeeventproposal?: Maybe<Array<ProposalDecisionMadeEvent>>
  proposalexecutedeventproposal?: Maybe<Array<ProposalExecutedEvent>>
}

export type ProposalCancelledEvent = Event &
  BaseGraphQlObject & {
    __typename: 'ProposalCancelledEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    proposal: Proposal
    proposalId: Scalars['String']
  }

export type ProposalCancelledEventConnection = {
  __typename: 'ProposalCancelledEventConnection'
  totalCount: Scalars['Int']
  edges: Array<ProposalCancelledEventEdge>
  pageInfo: PageInfo
}

export type ProposalCancelledEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  proposal: Scalars['ID']
}

export type ProposalCancelledEventEdge = {
  __typename: 'ProposalCancelledEventEdge'
  node: ProposalCancelledEvent
  cursor: Scalars['String']
}

export enum ProposalCancelledEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  ProposalAsc = 'proposal_ASC',
  ProposalDesc = 'proposal_DESC',
}

export type ProposalCancelledEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  proposal?: Maybe<Scalars['ID']>
}

export type ProposalCancelledEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  proposal_eq?: Maybe<Scalars['ID']>
  proposal_in?: Maybe<Array<Scalars['ID']>>
  proposal?: Maybe<ProposalWhereInput>
  AND?: Maybe<Array<ProposalCancelledEventWhereInput>>
  OR?: Maybe<Array<ProposalCancelledEventWhereInput>>
}

export type ProposalCancelledEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalConnection = {
  __typename: 'ProposalConnection'
  totalCount: Scalars['Int']
  edges: Array<ProposalEdge>
  pageInfo: PageInfo
}

export type ProposalCreateInput = {
  title: Scalars['String']
  description: Scalars['String']
  details: Scalars['JSONObject']
  stakingAccount?: Maybe<Scalars['String']>
  creator: Scalars['ID']
  exactExecutionBlock?: Maybe<Scalars['Float']>
  councilApprovals: Scalars['Float']
  status: Scalars['JSONObject']
  statusSetAtBlock: Scalars['Float']
  statusSetAtTime: Scalars['DateTime']
}

export type ProposalCreatedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'ProposalCreatedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    proposal: Proposal
    proposalId: Scalars['String']
  }

export type ProposalCreatedEventConnection = {
  __typename: 'ProposalCreatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<ProposalCreatedEventEdge>
  pageInfo: PageInfo
}

export type ProposalCreatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  proposal: Scalars['ID']
}

export type ProposalCreatedEventEdge = {
  __typename: 'ProposalCreatedEventEdge'
  node: ProposalCreatedEvent
  cursor: Scalars['String']
}

export enum ProposalCreatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  ProposalAsc = 'proposal_ASC',
  ProposalDesc = 'proposal_DESC',
}

export type ProposalCreatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  proposal?: Maybe<Scalars['ID']>
}

export type ProposalCreatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  proposal_eq?: Maybe<Scalars['ID']>
  proposal_in?: Maybe<Array<Scalars['ID']>>
  proposal?: Maybe<ProposalWhereInput>
  AND?: Maybe<Array<ProposalCreatedEventWhereInput>>
  OR?: Maybe<Array<ProposalCreatedEventWhereInput>>
}

export type ProposalCreatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalDecisionMadeEvent = Event &
  BaseGraphQlObject & {
    __typename: 'ProposalDecisionMadeEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    proposal: Proposal
    proposalId: Scalars['String']
    decisionStatus: ProposalDecisionStatus
  }

export type ProposalDecisionMadeEventConnection = {
  __typename: 'ProposalDecisionMadeEventConnection'
  totalCount: Scalars['Int']
  edges: Array<ProposalDecisionMadeEventEdge>
  pageInfo: PageInfo
}

export type ProposalDecisionMadeEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  proposal: Scalars['ID']
  decisionStatus: Scalars['JSONObject']
}

export type ProposalDecisionMadeEventEdge = {
  __typename: 'ProposalDecisionMadeEventEdge'
  node: ProposalDecisionMadeEvent
  cursor: Scalars['String']
}

export enum ProposalDecisionMadeEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  ProposalAsc = 'proposal_ASC',
  ProposalDesc = 'proposal_DESC',
}

export type ProposalDecisionMadeEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  proposal?: Maybe<Scalars['ID']>
  decisionStatus?: Maybe<Scalars['JSONObject']>
}

export type ProposalDecisionMadeEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  proposal_eq?: Maybe<Scalars['ID']>
  proposal_in?: Maybe<Array<Scalars['ID']>>
  decisionStatus_json?: Maybe<Scalars['JSONObject']>
  proposal?: Maybe<ProposalWhereInput>
  AND?: Maybe<Array<ProposalDecisionMadeEventWhereInput>>
  OR?: Maybe<Array<ProposalDecisionMadeEventWhereInput>>
}

export type ProposalDecisionMadeEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalDecisionStatus =
  | ProposalStatusDormant
  | ProposalStatusGracing
  | ProposalStatusVetoed
  | ProposalStatusSlashed
  | ProposalStatusRejected
  | ProposalStatusExpired
  | ProposalStatusCancelled
  | ProposalStatusCanceledByRuntime

export type ProposalDetails =
  | SignalProposalDetails
  | RuntimeUpgradeProposalDetails
  | FundingRequestProposalDetails
  | SetMaxValidatorCountProposalDetails
  | CreateWorkingGroupLeadOpeningProposalDetails
  | FillWorkingGroupLeadOpeningProposalDetails
  | UpdateWorkingGroupBudgetProposalDetails
  | DecreaseWorkingGroupLeadStakeProposalDetails
  | SlashWorkingGroupLeadProposalDetails
  | SetWorkingGroupLeadRewardProposalDetails
  | TerminateWorkingGroupLeadProposalDetails
  | AmendConstitutionProposalDetails
  | CancelWorkingGroupLeadOpeningProposalDetails
  | SetMembershipPriceProposalDetails
  | SetCouncilBudgetIncrementProposalDetails
  | SetCouncilorRewardProposalDetails
  | SetInitialInvitationBalanceProposalDetails
  | SetInitialInvitationCountProposalDetails
  | SetMembershipLeadInvitationQuotaProposalDetails
  | SetReferralCutProposalDetails
  | CreateBlogPostProposalDetails
  | EditBlogPostProposalDetails
  | LockBlogPostProposalDetails
  | UnlockBlogPostProposalDetails
  | VetoProposalDetails

export type ProposalDiscussionPost = BaseGraphQlObject & {
  __typename: 'ProposalDiscussionPost'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  author: Membership
  authorId: Scalars['String']
  status: ProposalDiscussionPostStatus
  text: Scalars['String']
  repliesTo?: Maybe<ProposalDiscussionPost>
  repliesToId?: Maybe<Scalars['String']>
  updates: Array<ProposalDiscussionPostUpdatedEvent>
  createdInEvent: ProposalDiscussionPostCreatedEvent
  proposaldiscussionpostrepliesTo?: Maybe<Array<ProposalDiscussionPost>>
  proposaldiscussionpostdeletedeventpost?: Maybe<Array<ProposalDiscussionPostDeletedEvent>>
}

export type ProposalDiscussionPostConnection = {
  __typename: 'ProposalDiscussionPostConnection'
  totalCount: Scalars['Int']
  edges: Array<ProposalDiscussionPostEdge>
  pageInfo: PageInfo
}

export type ProposalDiscussionPostCreateInput = {
  author: Scalars['ID']
  status: Scalars['JSONObject']
  text: Scalars['String']
  repliesTo?: Maybe<Scalars['ID']>
}

export type ProposalDiscussionPostCreatedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'ProposalDiscussionPostCreatedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    post: ProposalDiscussionPost
    postId: Scalars['String']
    text: Scalars['String']
  }

export type ProposalDiscussionPostCreatedEventConnection = {
  __typename: 'ProposalDiscussionPostCreatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<ProposalDiscussionPostCreatedEventEdge>
  pageInfo: PageInfo
}

export type ProposalDiscussionPostCreatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  post: Scalars['ID']
  text: Scalars['String']
}

export type ProposalDiscussionPostCreatedEventEdge = {
  __typename: 'ProposalDiscussionPostCreatedEventEdge'
  node: ProposalDiscussionPostCreatedEvent
  cursor: Scalars['String']
}

export enum ProposalDiscussionPostCreatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  PostAsc = 'post_ASC',
  PostDesc = 'post_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
}

export type ProposalDiscussionPostCreatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  post?: Maybe<Scalars['ID']>
  text?: Maybe<Scalars['String']>
}

export type ProposalDiscussionPostCreatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  post_eq?: Maybe<Scalars['ID']>
  post_in?: Maybe<Array<Scalars['ID']>>
  text_eq?: Maybe<Scalars['String']>
  text_contains?: Maybe<Scalars['String']>
  text_startsWith?: Maybe<Scalars['String']>
  text_endsWith?: Maybe<Scalars['String']>
  text_in?: Maybe<Array<Scalars['String']>>
  post?: Maybe<ProposalDiscussionPostWhereInput>
  AND?: Maybe<Array<ProposalDiscussionPostCreatedEventWhereInput>>
  OR?: Maybe<Array<ProposalDiscussionPostCreatedEventWhereInput>>
}

export type ProposalDiscussionPostCreatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalDiscussionPostDeletedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'ProposalDiscussionPostDeletedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    post: ProposalDiscussionPost
    postId: Scalars['String']
    actor: Membership
    actorId: Scalars['String']
  }

export type ProposalDiscussionPostDeletedEventConnection = {
  __typename: 'ProposalDiscussionPostDeletedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<ProposalDiscussionPostDeletedEventEdge>
  pageInfo: PageInfo
}

export type ProposalDiscussionPostDeletedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  post: Scalars['ID']
  actor: Scalars['ID']
}

export type ProposalDiscussionPostDeletedEventEdge = {
  __typename: 'ProposalDiscussionPostDeletedEventEdge'
  node: ProposalDiscussionPostDeletedEvent
  cursor: Scalars['String']
}

export enum ProposalDiscussionPostDeletedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  PostAsc = 'post_ASC',
  PostDesc = 'post_DESC',
  ActorAsc = 'actor_ASC',
  ActorDesc = 'actor_DESC',
}

export type ProposalDiscussionPostDeletedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  post?: Maybe<Scalars['ID']>
  actor?: Maybe<Scalars['ID']>
}

export type ProposalDiscussionPostDeletedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  post_eq?: Maybe<Scalars['ID']>
  post_in?: Maybe<Array<Scalars['ID']>>
  actor_eq?: Maybe<Scalars['ID']>
  actor_in?: Maybe<Array<Scalars['ID']>>
  post?: Maybe<ProposalDiscussionPostWhereInput>
  actor?: Maybe<MembershipWhereInput>
  AND?: Maybe<Array<ProposalDiscussionPostDeletedEventWhereInput>>
  OR?: Maybe<Array<ProposalDiscussionPostDeletedEventWhereInput>>
}

export type ProposalDiscussionPostDeletedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalDiscussionPostEdge = {
  __typename: 'ProposalDiscussionPostEdge'
  node: ProposalDiscussionPost
  cursor: Scalars['String']
}

export enum ProposalDiscussionPostOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  RepliesToAsc = 'repliesTo_ASC',
  RepliesToDesc = 'repliesTo_DESC',
}

export type ProposalDiscussionPostStatus =
  | ProposalDiscussionPostStatusActive
  | ProposalDiscussionPostStatusLocked
  | ProposalDiscussionPostStatusRemoved

export type ProposalDiscussionPostStatusActive = {
  __typename: 'ProposalDiscussionPostStatusActive'
  phantom?: Maybe<Scalars['Int']>
}

export type ProposalDiscussionPostStatusActiveCreateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type ProposalDiscussionPostStatusActiveUpdateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type ProposalDiscussionPostStatusActiveWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  phantom_eq?: Maybe<Scalars['Int']>
  phantom_gt?: Maybe<Scalars['Int']>
  phantom_gte?: Maybe<Scalars['Int']>
  phantom_lt?: Maybe<Scalars['Int']>
  phantom_lte?: Maybe<Scalars['Int']>
  phantom_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<ProposalDiscussionPostStatusActiveWhereInput>>
  OR?: Maybe<Array<ProposalDiscussionPostStatusActiveWhereInput>>
}

export type ProposalDiscussionPostStatusActiveWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalDiscussionPostStatusLocked = {
  __typename: 'ProposalDiscussionPostStatusLocked'
  deletedInEvent?: Maybe<ProposalDiscussionPostDeletedEvent>
}

export type ProposalDiscussionPostStatusRemoved = {
  __typename: 'ProposalDiscussionPostStatusRemoved'
  deletedInEvent?: Maybe<ProposalDiscussionPostDeletedEvent>
}

export type ProposalDiscussionPostUpdateInput = {
  author?: Maybe<Scalars['ID']>
  status?: Maybe<Scalars['JSONObject']>
  text?: Maybe<Scalars['String']>
  repliesTo?: Maybe<Scalars['ID']>
}

export type ProposalDiscussionPostUpdatedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'ProposalDiscussionPostUpdatedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    post: ProposalDiscussionPost
    postId: Scalars['String']
    text: Scalars['String']
  }

export type ProposalDiscussionPostUpdatedEventConnection = {
  __typename: 'ProposalDiscussionPostUpdatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<ProposalDiscussionPostUpdatedEventEdge>
  pageInfo: PageInfo
}

export type ProposalDiscussionPostUpdatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  post: Scalars['ID']
  text: Scalars['String']
}

export type ProposalDiscussionPostUpdatedEventEdge = {
  __typename: 'ProposalDiscussionPostUpdatedEventEdge'
  node: ProposalDiscussionPostUpdatedEvent
  cursor: Scalars['String']
}

export enum ProposalDiscussionPostUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  PostAsc = 'post_ASC',
  PostDesc = 'post_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
}

export type ProposalDiscussionPostUpdatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  post?: Maybe<Scalars['ID']>
  text?: Maybe<Scalars['String']>
}

export type ProposalDiscussionPostUpdatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  post_eq?: Maybe<Scalars['ID']>
  post_in?: Maybe<Array<Scalars['ID']>>
  text_eq?: Maybe<Scalars['String']>
  text_contains?: Maybe<Scalars['String']>
  text_startsWith?: Maybe<Scalars['String']>
  text_endsWith?: Maybe<Scalars['String']>
  text_in?: Maybe<Array<Scalars['String']>>
  post?: Maybe<ProposalDiscussionPostWhereInput>
  AND?: Maybe<Array<ProposalDiscussionPostUpdatedEventWhereInput>>
  OR?: Maybe<Array<ProposalDiscussionPostUpdatedEventWhereInput>>
}

export type ProposalDiscussionPostUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalDiscussionPostWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  author_eq?: Maybe<Scalars['ID']>
  author_in?: Maybe<Array<Scalars['ID']>>
  status_json?: Maybe<Scalars['JSONObject']>
  text_eq?: Maybe<Scalars['String']>
  text_contains?: Maybe<Scalars['String']>
  text_startsWith?: Maybe<Scalars['String']>
  text_endsWith?: Maybe<Scalars['String']>
  text_in?: Maybe<Array<Scalars['String']>>
  repliesTo_eq?: Maybe<Scalars['ID']>
  repliesTo_in?: Maybe<Array<Scalars['ID']>>
  author?: Maybe<MembershipWhereInput>
  repliesTo?: Maybe<ProposalDiscussionPostWhereInput>
  updates_none?: Maybe<ProposalDiscussionPostUpdatedEventWhereInput>
  updates_some?: Maybe<ProposalDiscussionPostUpdatedEventWhereInput>
  updates_every?: Maybe<ProposalDiscussionPostUpdatedEventWhereInput>
  createdInEvent?: Maybe<ProposalDiscussionPostCreatedEventWhereInput>
  proposaldiscussionpostrepliesTo_none?: Maybe<ProposalDiscussionPostWhereInput>
  proposaldiscussionpostrepliesTo_some?: Maybe<ProposalDiscussionPostWhereInput>
  proposaldiscussionpostrepliesTo_every?: Maybe<ProposalDiscussionPostWhereInput>
  proposaldiscussionpostdeletedeventpost_none?: Maybe<ProposalDiscussionPostDeletedEventWhereInput>
  proposaldiscussionpostdeletedeventpost_some?: Maybe<ProposalDiscussionPostDeletedEventWhereInput>
  proposaldiscussionpostdeletedeventpost_every?: Maybe<ProposalDiscussionPostDeletedEventWhereInput>
  AND?: Maybe<Array<ProposalDiscussionPostWhereInput>>
  OR?: Maybe<Array<ProposalDiscussionPostWhereInput>>
}

export type ProposalDiscussionPostWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalDiscussionThread = BaseGraphQlObject & {
  __typename: 'ProposalDiscussionThread'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  proposal: Proposal
  proposalId: Scalars['String']
  mode: ProposalDiscussionThreadMode
  proposaldiscussionthreadcreatedeventthread?: Maybe<Array<ProposalDiscussionThreadCreatedEvent>>
  proposaldiscussionthreadmodechangedeventthread?: Maybe<Array<ProposalDiscussionThreadModeChangedEvent>>
}

export type ProposalDiscussionThreadConnection = {
  __typename: 'ProposalDiscussionThreadConnection'
  totalCount: Scalars['Int']
  edges: Array<ProposalDiscussionThreadEdge>
  pageInfo: PageInfo
}

export type ProposalDiscussionThreadCreateInput = {
  proposal: Scalars['ID']
  mode: Scalars['JSONObject']
}

export type ProposalDiscussionThreadCreatedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'ProposalDiscussionThreadCreatedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    thread: ProposalDiscussionThread
    threadId: Scalars['String']
  }

export type ProposalDiscussionThreadCreatedEventConnection = {
  __typename: 'ProposalDiscussionThreadCreatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<ProposalDiscussionThreadCreatedEventEdge>
  pageInfo: PageInfo
}

export type ProposalDiscussionThreadCreatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  thread: Scalars['ID']
}

export type ProposalDiscussionThreadCreatedEventEdge = {
  __typename: 'ProposalDiscussionThreadCreatedEventEdge'
  node: ProposalDiscussionThreadCreatedEvent
  cursor: Scalars['String']
}

export enum ProposalDiscussionThreadCreatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  ThreadAsc = 'thread_ASC',
  ThreadDesc = 'thread_DESC',
}

export type ProposalDiscussionThreadCreatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  thread?: Maybe<Scalars['ID']>
}

export type ProposalDiscussionThreadCreatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  thread_eq?: Maybe<Scalars['ID']>
  thread_in?: Maybe<Array<Scalars['ID']>>
  thread?: Maybe<ProposalDiscussionThreadWhereInput>
  AND?: Maybe<Array<ProposalDiscussionThreadCreatedEventWhereInput>>
  OR?: Maybe<Array<ProposalDiscussionThreadCreatedEventWhereInput>>
}

export type ProposalDiscussionThreadCreatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalDiscussionThreadEdge = {
  __typename: 'ProposalDiscussionThreadEdge'
  node: ProposalDiscussionThread
  cursor: Scalars['String']
}

export type ProposalDiscussionThreadMode = ProposalDiscussionThreadModeOpen | ProposalDiscussionThreadModeClosed

export type ProposalDiscussionThreadModeChangedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'ProposalDiscussionThreadModeChangedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    thread: ProposalDiscussionThread
    threadId: Scalars['String']
    newMode: ProposalDiscussionThreadMode
    actor: Membership
    actorId: Scalars['String']
  }

export type ProposalDiscussionThreadModeChangedEventConnection = {
  __typename: 'ProposalDiscussionThreadModeChangedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<ProposalDiscussionThreadModeChangedEventEdge>
  pageInfo: PageInfo
}

export type ProposalDiscussionThreadModeChangedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  thread: Scalars['ID']
  newMode: Scalars['JSONObject']
  actor: Scalars['ID']
}

export type ProposalDiscussionThreadModeChangedEventEdge = {
  __typename: 'ProposalDiscussionThreadModeChangedEventEdge'
  node: ProposalDiscussionThreadModeChangedEvent
  cursor: Scalars['String']
}

export enum ProposalDiscussionThreadModeChangedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  ThreadAsc = 'thread_ASC',
  ThreadDesc = 'thread_DESC',
  ActorAsc = 'actor_ASC',
  ActorDesc = 'actor_DESC',
}

export type ProposalDiscussionThreadModeChangedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  thread?: Maybe<Scalars['ID']>
  newMode?: Maybe<Scalars['JSONObject']>
  actor?: Maybe<Scalars['ID']>
}

export type ProposalDiscussionThreadModeChangedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  thread_eq?: Maybe<Scalars['ID']>
  thread_in?: Maybe<Array<Scalars['ID']>>
  newMode_json?: Maybe<Scalars['JSONObject']>
  actor_eq?: Maybe<Scalars['ID']>
  actor_in?: Maybe<Array<Scalars['ID']>>
  thread?: Maybe<ProposalDiscussionThreadWhereInput>
  actor?: Maybe<MembershipWhereInput>
  AND?: Maybe<Array<ProposalDiscussionThreadModeChangedEventWhereInput>>
  OR?: Maybe<Array<ProposalDiscussionThreadModeChangedEventWhereInput>>
}

export type ProposalDiscussionThreadModeChangedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalDiscussionThreadModeClosed = {
  __typename: 'ProposalDiscussionThreadModeClosed'
  whitelist?: Maybe<ProposalDiscussionWhitelist>
}

export type ProposalDiscussionThreadModeOpen = {
  __typename: 'ProposalDiscussionThreadModeOpen'
  phantom?: Maybe<Scalars['Int']>
}

export type ProposalDiscussionThreadModeOpenCreateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type ProposalDiscussionThreadModeOpenUpdateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type ProposalDiscussionThreadModeOpenWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  phantom_eq?: Maybe<Scalars['Int']>
  phantom_gt?: Maybe<Scalars['Int']>
  phantom_gte?: Maybe<Scalars['Int']>
  phantom_lt?: Maybe<Scalars['Int']>
  phantom_lte?: Maybe<Scalars['Int']>
  phantom_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<ProposalDiscussionThreadModeOpenWhereInput>>
  OR?: Maybe<Array<ProposalDiscussionThreadModeOpenWhereInput>>
}

export type ProposalDiscussionThreadModeOpenWhereUniqueInput = {
  id: Scalars['ID']
}

export enum ProposalDiscussionThreadOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  ProposalAsc = 'proposal_ASC',
  ProposalDesc = 'proposal_DESC',
}

export type ProposalDiscussionThreadUpdateInput = {
  proposal?: Maybe<Scalars['ID']>
  mode?: Maybe<Scalars['JSONObject']>
}

export type ProposalDiscussionThreadWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  proposal_eq?: Maybe<Scalars['ID']>
  proposal_in?: Maybe<Array<Scalars['ID']>>
  mode_json?: Maybe<Scalars['JSONObject']>
  proposal?: Maybe<ProposalWhereInput>
  proposaldiscussionthreadcreatedeventthread_none?: Maybe<ProposalDiscussionThreadCreatedEventWhereInput>
  proposaldiscussionthreadcreatedeventthread_some?: Maybe<ProposalDiscussionThreadCreatedEventWhereInput>
  proposaldiscussionthreadcreatedeventthread_every?: Maybe<ProposalDiscussionThreadCreatedEventWhereInput>
  proposaldiscussionthreadmodechangedeventthread_none?: Maybe<ProposalDiscussionThreadModeChangedEventWhereInput>
  proposaldiscussionthreadmodechangedeventthread_some?: Maybe<ProposalDiscussionThreadModeChangedEventWhereInput>
  proposaldiscussionthreadmodechangedeventthread_every?: Maybe<ProposalDiscussionThreadModeChangedEventWhereInput>
  AND?: Maybe<Array<ProposalDiscussionThreadWhereInput>>
  OR?: Maybe<Array<ProposalDiscussionThreadWhereInput>>
}

export type ProposalDiscussionThreadWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalDiscussionWhitelist = BaseGraphQlObject & {
  __typename: 'ProposalDiscussionWhitelist'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  phantom?: Maybe<Scalars['Int']>
  members: Array<Membership>
}

export type ProposalDiscussionWhitelistConnection = {
  __typename: 'ProposalDiscussionWhitelistConnection'
  totalCount: Scalars['Int']
  edges: Array<ProposalDiscussionWhitelistEdge>
  pageInfo: PageInfo
}

export type ProposalDiscussionWhitelistCreateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type ProposalDiscussionWhitelistEdge = {
  __typename: 'ProposalDiscussionWhitelistEdge'
  node: ProposalDiscussionWhitelist
  cursor: Scalars['String']
}

export enum ProposalDiscussionWhitelistOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  PhantomAsc = 'phantom_ASC',
  PhantomDesc = 'phantom_DESC',
}

export type ProposalDiscussionWhitelistUpdateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type ProposalDiscussionWhitelistWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  phantom_eq?: Maybe<Scalars['Int']>
  phantom_gt?: Maybe<Scalars['Int']>
  phantom_gte?: Maybe<Scalars['Int']>
  phantom_lt?: Maybe<Scalars['Int']>
  phantom_lte?: Maybe<Scalars['Int']>
  phantom_in?: Maybe<Array<Scalars['Int']>>
  members_none?: Maybe<MembershipWhereInput>
  members_some?: Maybe<MembershipWhereInput>
  members_every?: Maybe<MembershipWhereInput>
  AND?: Maybe<Array<ProposalDiscussionWhitelistWhereInput>>
  OR?: Maybe<Array<ProposalDiscussionWhitelistWhereInput>>
}

export type ProposalDiscussionWhitelistWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalEdge = {
  __typename: 'ProposalEdge'
  node: Proposal
  cursor: Scalars['String']
}

export type ProposalExecutedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'ProposalExecutedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    proposal: Proposal
    proposalId: Scalars['String']
    executionStatus: ProposalExecutionStatus
  }

export type ProposalExecutedEventConnection = {
  __typename: 'ProposalExecutedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<ProposalExecutedEventEdge>
  pageInfo: PageInfo
}

export type ProposalExecutedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  proposal: Scalars['ID']
  executionStatus: Scalars['JSONObject']
}

export type ProposalExecutedEventEdge = {
  __typename: 'ProposalExecutedEventEdge'
  node: ProposalExecutedEvent
  cursor: Scalars['String']
}

export enum ProposalExecutedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  ProposalAsc = 'proposal_ASC',
  ProposalDesc = 'proposal_DESC',
}

export type ProposalExecutedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  proposal?: Maybe<Scalars['ID']>
  executionStatus?: Maybe<Scalars['JSONObject']>
}

export type ProposalExecutedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  proposal_eq?: Maybe<Scalars['ID']>
  proposal_in?: Maybe<Array<Scalars['ID']>>
  executionStatus_json?: Maybe<Scalars['JSONObject']>
  proposal?: Maybe<ProposalWhereInput>
  AND?: Maybe<Array<ProposalExecutedEventWhereInput>>
  OR?: Maybe<Array<ProposalExecutedEventWhereInput>>
}

export type ProposalExecutedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalExecutionStatus = ProposalStatusExecuted | ProposalStatusExecutionFailed

export type ProposalIntermediateStatus = ProposalStatusDeciding | ProposalStatusGracing | ProposalStatusDormant

export enum ProposalOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  StakingAccountAsc = 'stakingAccount_ASC',
  StakingAccountDesc = 'stakingAccount_DESC',
  CreatorAsc = 'creator_ASC',
  CreatorDesc = 'creator_DESC',
  ExactExecutionBlockAsc = 'exactExecutionBlock_ASC',
  ExactExecutionBlockDesc = 'exactExecutionBlock_DESC',
  CouncilApprovalsAsc = 'councilApprovals_ASC',
  CouncilApprovalsDesc = 'councilApprovals_DESC',
  StatusSetAtBlockAsc = 'statusSetAtBlock_ASC',
  StatusSetAtBlockDesc = 'statusSetAtBlock_DESC',
  StatusSetAtTimeAsc = 'statusSetAtTime_ASC',
  StatusSetAtTimeDesc = 'statusSetAtTime_DESC',
}

export type ProposalStatus =
  | ProposalStatusDeciding
  | ProposalStatusGracing
  | ProposalStatusDormant
  | ProposalStatusVetoed
  | ProposalStatusExecuted
  | ProposalStatusExecutionFailed
  | ProposalStatusSlashed
  | ProposalStatusRejected
  | ProposalStatusExpired
  | ProposalStatusCancelled
  | ProposalStatusCanceledByRuntime

export type ProposalStatusCanceledByRuntime = {
  __typename: 'ProposalStatusCanceledByRuntime'
  proposalDecisionMadeEvent?: Maybe<ProposalDecisionMadeEvent>
}

export type ProposalStatusCancelled = {
  __typename: 'ProposalStatusCancelled'
  cancelledInEvent?: Maybe<ProposalCancelledEvent>
}

export type ProposalStatusDeciding = {
  __typename: 'ProposalStatusDeciding'
  proposalStatusUpdatedEvent?: Maybe<ProposalStatusUpdatedEvent>
}

export type ProposalStatusDormant = {
  __typename: 'ProposalStatusDormant'
  proposalStatusUpdatedEvent?: Maybe<ProposalStatusUpdatedEvent>
}

export type ProposalStatusExecuted = {
  __typename: 'ProposalStatusExecuted'
  proposalExecutedEvent?: Maybe<ProposalExecutedEvent>
}

export type ProposalStatusExecutionFailed = {
  __typename: 'ProposalStatusExecutionFailed'
  proposalExecutedEvent?: Maybe<ProposalExecutedEvent>
  errorMessage: Scalars['String']
}

export type ProposalStatusExecutionFailedCreateInput = {
  errorMessage: Scalars['String']
}

export type ProposalStatusExecutionFailedUpdateInput = {
  errorMessage?: Maybe<Scalars['String']>
}

export type ProposalStatusExecutionFailedWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  errorMessage_eq?: Maybe<Scalars['String']>
  errorMessage_contains?: Maybe<Scalars['String']>
  errorMessage_startsWith?: Maybe<Scalars['String']>
  errorMessage_endsWith?: Maybe<Scalars['String']>
  errorMessage_in?: Maybe<Array<Scalars['String']>>
  AND?: Maybe<Array<ProposalStatusExecutionFailedWhereInput>>
  OR?: Maybe<Array<ProposalStatusExecutionFailedWhereInput>>
}

export type ProposalStatusExecutionFailedWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalStatusExpired = {
  __typename: 'ProposalStatusExpired'
  proposalDecisionMadeEvent?: Maybe<ProposalDecisionMadeEvent>
}

export type ProposalStatusGracing = {
  __typename: 'ProposalStatusGracing'
  proposalStatusUpdatedEvent?: Maybe<ProposalStatusUpdatedEvent>
}

export type ProposalStatusRejected = {
  __typename: 'ProposalStatusRejected'
  proposalDecisionMadeEvent?: Maybe<ProposalDecisionMadeEvent>
}

export type ProposalStatusSlashed = {
  __typename: 'ProposalStatusSlashed'
  proposalDecisionMadeEvent?: Maybe<ProposalDecisionMadeEvent>
}

export type ProposalStatusUpdatedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'ProposalStatusUpdatedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    proposal: Proposal
    proposalId: Scalars['String']
    newStatus: ProposalIntermediateStatus
  }

export type ProposalStatusUpdatedEventConnection = {
  __typename: 'ProposalStatusUpdatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<ProposalStatusUpdatedEventEdge>
  pageInfo: PageInfo
}

export type ProposalStatusUpdatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  proposal: Scalars['ID']
  newStatus: Scalars['JSONObject']
}

export type ProposalStatusUpdatedEventEdge = {
  __typename: 'ProposalStatusUpdatedEventEdge'
  node: ProposalStatusUpdatedEvent
  cursor: Scalars['String']
}

export enum ProposalStatusUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  ProposalAsc = 'proposal_ASC',
  ProposalDesc = 'proposal_DESC',
}

export type ProposalStatusUpdatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  proposal?: Maybe<Scalars['ID']>
  newStatus?: Maybe<Scalars['JSONObject']>
}

export type ProposalStatusUpdatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  proposal_eq?: Maybe<Scalars['ID']>
  proposal_in?: Maybe<Array<Scalars['ID']>>
  newStatus_json?: Maybe<Scalars['JSONObject']>
  proposal?: Maybe<ProposalWhereInput>
  AND?: Maybe<Array<ProposalStatusUpdatedEventWhereInput>>
  OR?: Maybe<Array<ProposalStatusUpdatedEventWhereInput>>
}

export type ProposalStatusUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalStatusVetoed = {
  __typename: 'ProposalStatusVetoed'
  proposalDecisionMadeEvent?: Maybe<ProposalDecisionMadeEvent>
}

export type ProposalUpdateInput = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  details?: Maybe<Scalars['JSONObject']>
  stakingAccount?: Maybe<Scalars['String']>
  creator?: Maybe<Scalars['ID']>
  exactExecutionBlock?: Maybe<Scalars['Float']>
  councilApprovals?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['JSONObject']>
  statusSetAtBlock?: Maybe<Scalars['Float']>
  statusSetAtTime?: Maybe<Scalars['DateTime']>
}

export enum ProposalVoteKind {
  Approve = 'APPROVE',
  Reject = 'REJECT',
  Slash = 'SLASH',
  Abstain = 'ABSTAIN',
}

export type ProposalVotedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'ProposalVotedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    voter: Membership
    voterId: Scalars['String']
    voteKind: ProposalVoteKind
    proposal: Proposal
    proposalId: Scalars['String']
    rationale: Scalars['String']
    votingRound: Scalars['Int']
  }

export type ProposalVotedEventConnection = {
  __typename: 'ProposalVotedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<ProposalVotedEventEdge>
  pageInfo: PageInfo
}

export type ProposalVotedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  voter: Scalars['ID']
  voteKind: ProposalVoteKind
  proposal: Scalars['ID']
  rationale: Scalars['String']
  votingRound: Scalars['Float']
}

export type ProposalVotedEventEdge = {
  __typename: 'ProposalVotedEventEdge'
  node: ProposalVotedEvent
  cursor: Scalars['String']
}

export enum ProposalVotedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  VoterAsc = 'voter_ASC',
  VoterDesc = 'voter_DESC',
  VoteKindAsc = 'voteKind_ASC',
  VoteKindDesc = 'voteKind_DESC',
  ProposalAsc = 'proposal_ASC',
  ProposalDesc = 'proposal_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
  VotingRoundAsc = 'votingRound_ASC',
  VotingRoundDesc = 'votingRound_DESC',
}

export type ProposalVotedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  voter?: Maybe<Scalars['ID']>
  voteKind?: Maybe<ProposalVoteKind>
  proposal?: Maybe<Scalars['ID']>
  rationale?: Maybe<Scalars['String']>
  votingRound?: Maybe<Scalars['Float']>
}

export type ProposalVotedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  voter_eq?: Maybe<Scalars['ID']>
  voter_in?: Maybe<Array<Scalars['ID']>>
  voteKind_eq?: Maybe<ProposalVoteKind>
  voteKind_in?: Maybe<Array<ProposalVoteKind>>
  proposal_eq?: Maybe<Scalars['ID']>
  proposal_in?: Maybe<Array<Scalars['ID']>>
  rationale_eq?: Maybe<Scalars['String']>
  rationale_contains?: Maybe<Scalars['String']>
  rationale_startsWith?: Maybe<Scalars['String']>
  rationale_endsWith?: Maybe<Scalars['String']>
  rationale_in?: Maybe<Array<Scalars['String']>>
  votingRound_eq?: Maybe<Scalars['Int']>
  votingRound_gt?: Maybe<Scalars['Int']>
  votingRound_gte?: Maybe<Scalars['Int']>
  votingRound_lt?: Maybe<Scalars['Int']>
  votingRound_lte?: Maybe<Scalars['Int']>
  votingRound_in?: Maybe<Array<Scalars['Int']>>
  voter?: Maybe<MembershipWhereInput>
  proposal?: Maybe<ProposalWhereInput>
  AND?: Maybe<Array<ProposalVotedEventWhereInput>>
  OR?: Maybe<Array<ProposalVotedEventWhereInput>>
}

export type ProposalVotedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  title_eq?: Maybe<Scalars['String']>
  title_contains?: Maybe<Scalars['String']>
  title_startsWith?: Maybe<Scalars['String']>
  title_endsWith?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Scalars['String']>>
  description_eq?: Maybe<Scalars['String']>
  description_contains?: Maybe<Scalars['String']>
  description_startsWith?: Maybe<Scalars['String']>
  description_endsWith?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Scalars['String']>>
  details_json?: Maybe<Scalars['JSONObject']>
  stakingAccount_eq?: Maybe<Scalars['String']>
  stakingAccount_contains?: Maybe<Scalars['String']>
  stakingAccount_startsWith?: Maybe<Scalars['String']>
  stakingAccount_endsWith?: Maybe<Scalars['String']>
  stakingAccount_in?: Maybe<Array<Scalars['String']>>
  creator_eq?: Maybe<Scalars['ID']>
  creator_in?: Maybe<Array<Scalars['ID']>>
  exactExecutionBlock_eq?: Maybe<Scalars['Int']>
  exactExecutionBlock_gt?: Maybe<Scalars['Int']>
  exactExecutionBlock_gte?: Maybe<Scalars['Int']>
  exactExecutionBlock_lt?: Maybe<Scalars['Int']>
  exactExecutionBlock_lte?: Maybe<Scalars['Int']>
  exactExecutionBlock_in?: Maybe<Array<Scalars['Int']>>
  councilApprovals_eq?: Maybe<Scalars['Int']>
  councilApprovals_gt?: Maybe<Scalars['Int']>
  councilApprovals_gte?: Maybe<Scalars['Int']>
  councilApprovals_lt?: Maybe<Scalars['Int']>
  councilApprovals_lte?: Maybe<Scalars['Int']>
  councilApprovals_in?: Maybe<Array<Scalars['Int']>>
  status_json?: Maybe<Scalars['JSONObject']>
  statusSetAtBlock_eq?: Maybe<Scalars['Int']>
  statusSetAtBlock_gt?: Maybe<Scalars['Int']>
  statusSetAtBlock_gte?: Maybe<Scalars['Int']>
  statusSetAtBlock_lt?: Maybe<Scalars['Int']>
  statusSetAtBlock_lte?: Maybe<Scalars['Int']>
  statusSetAtBlock_in?: Maybe<Array<Scalars['Int']>>
  statusSetAtTime_eq?: Maybe<Scalars['DateTime']>
  statusSetAtTime_lt?: Maybe<Scalars['DateTime']>
  statusSetAtTime_lte?: Maybe<Scalars['DateTime']>
  statusSetAtTime_gt?: Maybe<Scalars['DateTime']>
  statusSetAtTime_gte?: Maybe<Scalars['DateTime']>
  creator?: Maybe<MembershipWhereInput>
  createdInEvent?: Maybe<ProposalCreatedEventWhereInput>
  discussionThread?: Maybe<ProposalDiscussionThreadWhereInput>
  proposalStatusUpdates_none?: Maybe<ProposalStatusUpdatedEventWhereInput>
  proposalStatusUpdates_some?: Maybe<ProposalStatusUpdatedEventWhereInput>
  proposalStatusUpdates_every?: Maybe<ProposalStatusUpdatedEventWhereInput>
  votes_none?: Maybe<ProposalVotedEventWhereInput>
  votes_some?: Maybe<ProposalVotedEventWhereInput>
  votes_every?: Maybe<ProposalVotedEventWhereInput>
  proposalcancelledeventproposal_none?: Maybe<ProposalCancelledEventWhereInput>
  proposalcancelledeventproposal_some?: Maybe<ProposalCancelledEventWhereInput>
  proposalcancelledeventproposal_every?: Maybe<ProposalCancelledEventWhereInput>
  proposaldecisionmadeeventproposal_none?: Maybe<ProposalDecisionMadeEventWhereInput>
  proposaldecisionmadeeventproposal_some?: Maybe<ProposalDecisionMadeEventWhereInput>
  proposaldecisionmadeeventproposal_every?: Maybe<ProposalDecisionMadeEventWhereInput>
  proposalexecutedeventproposal_none?: Maybe<ProposalExecutedEventWhereInput>
  proposalexecutedeventproposal_some?: Maybe<ProposalExecutedEventWhereInput>
  proposalexecutedeventproposal_every?: Maybe<ProposalExecutedEventWhereInput>
  AND?: Maybe<Array<ProposalWhereInput>>
  OR?: Maybe<Array<ProposalWhereInput>>
}

export type ProposalWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalsByDescriptionFtsOutput = {
  __typename: 'ProposalsByDescriptionFTSOutput'
  item: ProposalsByDescriptionSearchResult
  rank: Scalars['Float']
  isTypeOf: Scalars['String']
  highlight: Scalars['String']
}

export type ProposalsByDescriptionSearchResult = Proposal

export type ProposalsByTitleFtsOutput = {
  __typename: 'ProposalsByTitleFTSOutput'
  item: ProposalsByTitleSearchResult
  rank: Scalars['Float']
  isTypeOf: Scalars['String']
  highlight: Scalars['String']
}

export type ProposalsByTitleSearchResult = Proposal

export type Query = {
  __typename: 'Query'
  applicationFormQuestionAnswers: Array<ApplicationFormQuestionAnswer>
  applicationFormQuestionAnswerByUniqueInput?: Maybe<ApplicationFormQuestionAnswer>
  applicationFormQuestionAnswersConnection: ApplicationFormQuestionAnswerConnection
  applicationFormQuestions: Array<ApplicationFormQuestion>
  applicationFormQuestionByUniqueInput?: Maybe<ApplicationFormQuestion>
  applicationFormQuestionsConnection: ApplicationFormQuestionConnection
  applicationWithdrawnEvents: Array<ApplicationWithdrawnEvent>
  applicationWithdrawnEventByUniqueInput?: Maybe<ApplicationWithdrawnEvent>
  applicationWithdrawnEventsConnection: ApplicationWithdrawnEventConnection
  appliedOnOpeningEvents: Array<AppliedOnOpeningEvent>
  appliedOnOpeningEventByUniqueInput?: Maybe<AppliedOnOpeningEvent>
  appliedOnOpeningEventsConnection: AppliedOnOpeningEventConnection
  budgetSetEvents: Array<BudgetSetEvent>
  budgetSetEventByUniqueInput?: Maybe<BudgetSetEvent>
  budgetSetEventsConnection: BudgetSetEventConnection
  budgetSpendingEvents: Array<BudgetSpendingEvent>
  budgetSpendingEventByUniqueInput?: Maybe<BudgetSpendingEvent>
  budgetSpendingEventsConnection: BudgetSpendingEventConnection
  categoryCreatedEvents: Array<CategoryCreatedEvent>
  categoryCreatedEventByUniqueInput?: Maybe<CategoryCreatedEvent>
  categoryCreatedEventsConnection: CategoryCreatedEventConnection
  categoryDeletedEvents: Array<CategoryDeletedEvent>
  categoryDeletedEventByUniqueInput?: Maybe<CategoryDeletedEvent>
  categoryDeletedEventsConnection: CategoryDeletedEventConnection
  categoryMembershipOfModeratorUpdatedEvents: Array<CategoryMembershipOfModeratorUpdatedEvent>
  categoryMembershipOfModeratorUpdatedEventByUniqueInput?: Maybe<CategoryMembershipOfModeratorUpdatedEvent>
  categoryMembershipOfModeratorUpdatedEventsConnection: CategoryMembershipOfModeratorUpdatedEventConnection
  categoryStickyThreadUpdateEvents: Array<CategoryStickyThreadUpdateEvent>
  categoryStickyThreadUpdateEventByUniqueInput?: Maybe<CategoryStickyThreadUpdateEvent>
  categoryStickyThreadUpdateEventsConnection: CategoryStickyThreadUpdateEventConnection
  categoryUpdatedEvents: Array<CategoryUpdatedEvent>
  categoryUpdatedEventByUniqueInput?: Maybe<CategoryUpdatedEvent>
  categoryUpdatedEventsConnection: CategoryUpdatedEventConnection
  dataObjects: Array<DataObject>
  dataObjectByUniqueInput?: Maybe<DataObject>
  dataObjectsConnection: DataObjectConnection
  events: Array<Event>
  forumCategories: Array<ForumCategory>
  forumCategoryByUniqueInput?: Maybe<ForumCategory>
  forumCategoriesConnection: ForumCategoryConnection
  forumPollAlternatives: Array<ForumPollAlternative>
  forumPollAlternativeByUniqueInput?: Maybe<ForumPollAlternative>
  forumPollAlternativesConnection: ForumPollAlternativeConnection
  forumPolls: Array<ForumPoll>
  forumPollByUniqueInput?: Maybe<ForumPoll>
  forumPollsConnection: ForumPollConnection
  forumPostReactions: Array<ForumPostReaction>
  forumPostReactionByUniqueInput?: Maybe<ForumPostReaction>
  forumPostReactionsConnection: ForumPostReactionConnection
  forumPosts: Array<ForumPost>
  forumPostByUniqueInput?: Maybe<ForumPost>
  forumPostsConnection: ForumPostConnection
  forumThreads: Array<ForumThread>
  forumThreadByUniqueInput?: Maybe<ForumThread>
  forumThreadsConnection: ForumThreadConnection
  fundingRequestDestinations: Array<FundingRequestDestination>
  fundingRequestDestinationByUniqueInput?: Maybe<FundingRequestDestination>
  fundingRequestDestinationsConnection: FundingRequestDestinationConnection
  fundingRequestDestinationsLists: Array<FundingRequestDestinationsList>
  fundingRequestDestinationsListByUniqueInput?: Maybe<FundingRequestDestinationsList>
  fundingRequestDestinationsListsConnection: FundingRequestDestinationsListConnection
  initialInvitationBalanceUpdatedEvents: Array<InitialInvitationBalanceUpdatedEvent>
  initialInvitationBalanceUpdatedEventByUniqueInput?: Maybe<InitialInvitationBalanceUpdatedEvent>
  initialInvitationBalanceUpdatedEventsConnection: InitialInvitationBalanceUpdatedEventConnection
  initialInvitationCountUpdatedEvents: Array<InitialInvitationCountUpdatedEvent>
  initialInvitationCountUpdatedEventByUniqueInput?: Maybe<InitialInvitationCountUpdatedEvent>
  initialInvitationCountUpdatedEventsConnection: InitialInvitationCountUpdatedEventConnection
  invitesTransferredEvents: Array<InvitesTransferredEvent>
  invitesTransferredEventByUniqueInput?: Maybe<InvitesTransferredEvent>
  invitesTransferredEventsConnection: InvitesTransferredEventConnection
  leaderInvitationQuotaUpdatedEvents: Array<LeaderInvitationQuotaUpdatedEvent>
  leaderInvitationQuotaUpdatedEventByUniqueInput?: Maybe<LeaderInvitationQuotaUpdatedEvent>
  leaderInvitationQuotaUpdatedEventsConnection: LeaderInvitationQuotaUpdatedEventConnection
  leaderSetEvents: Array<LeaderSetEvent>
  leaderSetEventByUniqueInput?: Maybe<LeaderSetEvent>
  leaderSetEventsConnection: LeaderSetEventConnection
  leaderUnsetEvents: Array<LeaderUnsetEvent>
  leaderUnsetEventByUniqueInput?: Maybe<LeaderUnsetEvent>
  leaderUnsetEventsConnection: LeaderUnsetEventConnection
  memberAccountsUpdatedEvents: Array<MemberAccountsUpdatedEvent>
  memberAccountsUpdatedEventByUniqueInput?: Maybe<MemberAccountsUpdatedEvent>
  memberAccountsUpdatedEventsConnection: MemberAccountsUpdatedEventConnection
  memberInvitedEvents: Array<MemberInvitedEvent>
  memberInvitedEventByUniqueInput?: Maybe<MemberInvitedEvent>
  memberInvitedEventsConnection: MemberInvitedEventConnection
  memberMetadata: Array<MemberMetadata>
  memberMetadataByUniqueInput?: Maybe<MemberMetadata>
  memberMetadataConnection: MemberMetadataConnection
  memberProfileUpdatedEvents: Array<MemberProfileUpdatedEvent>
  memberProfileUpdatedEventByUniqueInput?: Maybe<MemberProfileUpdatedEvent>
  memberProfileUpdatedEventsConnection: MemberProfileUpdatedEventConnection
  memberVerificationStatusUpdatedEvents: Array<MemberVerificationStatusUpdatedEvent>
  memberVerificationStatusUpdatedEventByUniqueInput?: Maybe<MemberVerificationStatusUpdatedEvent>
  memberVerificationStatusUpdatedEventsConnection: MemberVerificationStatusUpdatedEventConnection
  membershipBoughtEvents: Array<MembershipBoughtEvent>
  membershipBoughtEventByUniqueInput?: Maybe<MembershipBoughtEvent>
  membershipBoughtEventsConnection: MembershipBoughtEventConnection
  membershipPriceUpdatedEvents: Array<MembershipPriceUpdatedEvent>
  membershipPriceUpdatedEventByUniqueInput?: Maybe<MembershipPriceUpdatedEvent>
  membershipPriceUpdatedEventsConnection: MembershipPriceUpdatedEventConnection
  membershipSystemSnapshots: Array<MembershipSystemSnapshot>
  membershipSystemSnapshotByUniqueInput?: Maybe<MembershipSystemSnapshot>
  membershipSystemSnapshotsConnection: MembershipSystemSnapshotConnection
  memberships: Array<Membership>
  membershipByUniqueInput?: Maybe<Membership>
  membershipsConnection: MembershipConnection
  newMissedRewardLevelReachedEvents: Array<NewMissedRewardLevelReachedEvent>
  newMissedRewardLevelReachedEventByUniqueInput?: Maybe<NewMissedRewardLevelReachedEvent>
  newMissedRewardLevelReachedEventsConnection: NewMissedRewardLevelReachedEventConnection
  openingAddedEvents: Array<OpeningAddedEvent>
  openingAddedEventByUniqueInput?: Maybe<OpeningAddedEvent>
  openingAddedEventsConnection: OpeningAddedEventConnection
  openingCanceledEvents: Array<OpeningCanceledEvent>
  openingCanceledEventByUniqueInput?: Maybe<OpeningCanceledEvent>
  openingCanceledEventsConnection: OpeningCanceledEventConnection
  openingFilledEvents: Array<OpeningFilledEvent>
  openingFilledEventByUniqueInput?: Maybe<OpeningFilledEvent>
  openingFilledEventsConnection: OpeningFilledEventConnection
  postAddedEvents: Array<PostAddedEvent>
  postAddedEventByUniqueInput?: Maybe<PostAddedEvent>
  postAddedEventsConnection: PostAddedEventConnection
  postDeletedEvents: Array<PostDeletedEvent>
  postDeletedEventByUniqueInput?: Maybe<PostDeletedEvent>
  postDeletedEventsConnection: PostDeletedEventConnection
  postModeratedEvents: Array<PostModeratedEvent>
  postModeratedEventByUniqueInput?: Maybe<PostModeratedEvent>
  postModeratedEventsConnection: PostModeratedEventConnection
  postReactedEvents: Array<PostReactedEvent>
  postReactedEventByUniqueInput?: Maybe<PostReactedEvent>
  postReactedEventsConnection: PostReactedEventConnection
  postTextUpdatedEvents: Array<PostTextUpdatedEvent>
  postTextUpdatedEventByUniqueInput?: Maybe<PostTextUpdatedEvent>
  postTextUpdatedEventsConnection: PostTextUpdatedEventConnection
  proposalCancelledEvents: Array<ProposalCancelledEvent>
  proposalCancelledEventByUniqueInput?: Maybe<ProposalCancelledEvent>
  proposalCancelledEventsConnection: ProposalCancelledEventConnection
  proposalCreatedEvents: Array<ProposalCreatedEvent>
  proposalCreatedEventByUniqueInput?: Maybe<ProposalCreatedEvent>
  proposalCreatedEventsConnection: ProposalCreatedEventConnection
  proposalDecisionMadeEvents: Array<ProposalDecisionMadeEvent>
  proposalDecisionMadeEventByUniqueInput?: Maybe<ProposalDecisionMadeEvent>
  proposalDecisionMadeEventsConnection: ProposalDecisionMadeEventConnection
  proposalDiscussionPostCreatedEvents: Array<ProposalDiscussionPostCreatedEvent>
  proposalDiscussionPostCreatedEventByUniqueInput?: Maybe<ProposalDiscussionPostCreatedEvent>
  proposalDiscussionPostCreatedEventsConnection: ProposalDiscussionPostCreatedEventConnection
  proposalDiscussionPostDeletedEvents: Array<ProposalDiscussionPostDeletedEvent>
  proposalDiscussionPostDeletedEventByUniqueInput?: Maybe<ProposalDiscussionPostDeletedEvent>
  proposalDiscussionPostDeletedEventsConnection: ProposalDiscussionPostDeletedEventConnection
  proposalDiscussionPostUpdatedEvents: Array<ProposalDiscussionPostUpdatedEvent>
  proposalDiscussionPostUpdatedEventByUniqueInput?: Maybe<ProposalDiscussionPostUpdatedEvent>
  proposalDiscussionPostUpdatedEventsConnection: ProposalDiscussionPostUpdatedEventConnection
  proposalDiscussionPosts: Array<ProposalDiscussionPost>
  proposalDiscussionPostByUniqueInput?: Maybe<ProposalDiscussionPost>
  proposalDiscussionPostsConnection: ProposalDiscussionPostConnection
  proposalDiscussionThreadCreatedEvents: Array<ProposalDiscussionThreadCreatedEvent>
  proposalDiscussionThreadCreatedEventByUniqueInput?: Maybe<ProposalDiscussionThreadCreatedEvent>
  proposalDiscussionThreadCreatedEventsConnection: ProposalDiscussionThreadCreatedEventConnection
  proposalDiscussionThreadModeChangedEvents: Array<ProposalDiscussionThreadModeChangedEvent>
  proposalDiscussionThreadModeChangedEventByUniqueInput?: Maybe<ProposalDiscussionThreadModeChangedEvent>
  proposalDiscussionThreadModeChangedEventsConnection: ProposalDiscussionThreadModeChangedEventConnection
  proposalDiscussionThreads: Array<ProposalDiscussionThread>
  proposalDiscussionThreadByUniqueInput?: Maybe<ProposalDiscussionThread>
  proposalDiscussionThreadsConnection: ProposalDiscussionThreadConnection
  proposalDiscussionWhitelists: Array<ProposalDiscussionWhitelist>
  proposalDiscussionWhitelistByUniqueInput?: Maybe<ProposalDiscussionWhitelist>
  proposalDiscussionWhitelistsConnection: ProposalDiscussionWhitelistConnection
  proposalExecutedEvents: Array<ProposalExecutedEvent>
  proposalExecutedEventByUniqueInput?: Maybe<ProposalExecutedEvent>
  proposalExecutedEventsConnection: ProposalExecutedEventConnection
  proposalStatusUpdatedEvents: Array<ProposalStatusUpdatedEvent>
  proposalStatusUpdatedEventByUniqueInput?: Maybe<ProposalStatusUpdatedEvent>
  proposalStatusUpdatedEventsConnection: ProposalStatusUpdatedEventConnection
  proposalVotedEvents: Array<ProposalVotedEvent>
  proposalVotedEventByUniqueInput?: Maybe<ProposalVotedEvent>
  proposalVotedEventsConnection: ProposalVotedEventConnection
  proposals: Array<Proposal>
  proposalByUniqueInput?: Maybe<Proposal>
  proposalsConnection: ProposalConnection
  membersByHandle: Array<MembersByHandleFtsOutput>
  postsByText: Array<PostsByTextFtsOutput>
  proposalsByDescription: Array<ProposalsByDescriptionFtsOutput>
  proposalsByTitle: Array<ProposalsByTitleFtsOutput>
  threadsByTitle: Array<ThreadsByTitleFtsOutput>
  referralCutUpdatedEvents: Array<ReferralCutUpdatedEvent>
  referralCutUpdatedEventByUniqueInput?: Maybe<ReferralCutUpdatedEvent>
  referralCutUpdatedEventsConnection: ReferralCutUpdatedEventConnection
  rewardPaidEvents: Array<RewardPaidEvent>
  rewardPaidEventByUniqueInput?: Maybe<RewardPaidEvent>
  rewardPaidEventsConnection: RewardPaidEventConnection
  stakeDecreasedEvents: Array<StakeDecreasedEvent>
  stakeDecreasedEventByUniqueInput?: Maybe<StakeDecreasedEvent>
  stakeDecreasedEventsConnection: StakeDecreasedEventConnection
  stakeIncreasedEvents: Array<StakeIncreasedEvent>
  stakeIncreasedEventByUniqueInput?: Maybe<StakeIncreasedEvent>
  stakeIncreasedEventsConnection: StakeIncreasedEventConnection
  stakeSlashedEvents: Array<StakeSlashedEvent>
  stakeSlashedEventByUniqueInput?: Maybe<StakeSlashedEvent>
  stakeSlashedEventsConnection: StakeSlashedEventConnection
  stakingAccountAddedEvents: Array<StakingAccountAddedEvent>
  stakingAccountAddedEventByUniqueInput?: Maybe<StakingAccountAddedEvent>
  stakingAccountAddedEventsConnection: StakingAccountAddedEventConnection
  stakingAccountConfirmedEvents: Array<StakingAccountConfirmedEvent>
  stakingAccountConfirmedEventByUniqueInput?: Maybe<StakingAccountConfirmedEvent>
  stakingAccountConfirmedEventsConnection: StakingAccountConfirmedEventConnection
  stakingAccountRemovedEvents: Array<StakingAccountRemovedEvent>
  stakingAccountRemovedEventByUniqueInput?: Maybe<StakingAccountRemovedEvent>
  stakingAccountRemovedEventsConnection: StakingAccountRemovedEventConnection
  statusTextChangedEvents: Array<StatusTextChangedEvent>
  statusTextChangedEventByUniqueInput?: Maybe<StatusTextChangedEvent>
  statusTextChangedEventsConnection: StatusTextChangedEventConnection
  terminatedLeaderEvents: Array<TerminatedLeaderEvent>
  terminatedLeaderEventByUniqueInput?: Maybe<TerminatedLeaderEvent>
  terminatedLeaderEventsConnection: TerminatedLeaderEventConnection
  terminatedWorkerEvents: Array<TerminatedWorkerEvent>
  terminatedWorkerEventByUniqueInput?: Maybe<TerminatedWorkerEvent>
  terminatedWorkerEventsConnection: TerminatedWorkerEventConnection
  threadCreatedEvents: Array<ThreadCreatedEvent>
  threadCreatedEventByUniqueInput?: Maybe<ThreadCreatedEvent>
  threadCreatedEventsConnection: ThreadCreatedEventConnection
  threadDeletedEvents: Array<ThreadDeletedEvent>
  threadDeletedEventByUniqueInput?: Maybe<ThreadDeletedEvent>
  threadDeletedEventsConnection: ThreadDeletedEventConnection
  threadModeratedEvents: Array<ThreadModeratedEvent>
  threadModeratedEventByUniqueInput?: Maybe<ThreadModeratedEvent>
  threadModeratedEventsConnection: ThreadModeratedEventConnection
  threadMovedEvents: Array<ThreadMovedEvent>
  threadMovedEventByUniqueInput?: Maybe<ThreadMovedEvent>
  threadMovedEventsConnection: ThreadMovedEventConnection
  threadTitleUpdatedEvents: Array<ThreadTitleUpdatedEvent>
  threadTitleUpdatedEventByUniqueInput?: Maybe<ThreadTitleUpdatedEvent>
  threadTitleUpdatedEventsConnection: ThreadTitleUpdatedEventConnection
  upcomingWorkingGroupOpenings: Array<UpcomingWorkingGroupOpening>
  upcomingWorkingGroupOpeningByUniqueInput?: Maybe<UpcomingWorkingGroupOpening>
  upcomingWorkingGroupOpeningsConnection: UpcomingWorkingGroupOpeningConnection
  voteOnPollEvents: Array<VoteOnPollEvent>
  voteOnPollEventByUniqueInput?: Maybe<VoteOnPollEvent>
  voteOnPollEventsConnection: VoteOnPollEventConnection
  workerExitedEvents: Array<WorkerExitedEvent>
  workerExitedEventByUniqueInput?: Maybe<WorkerExitedEvent>
  workerExitedEventsConnection: WorkerExitedEventConnection
  workerRewardAccountUpdatedEvents: Array<WorkerRewardAccountUpdatedEvent>
  workerRewardAccountUpdatedEventByUniqueInput?: Maybe<WorkerRewardAccountUpdatedEvent>
  workerRewardAccountUpdatedEventsConnection: WorkerRewardAccountUpdatedEventConnection
  workerRewardAmountUpdatedEvents: Array<WorkerRewardAmountUpdatedEvent>
  workerRewardAmountUpdatedEventByUniqueInput?: Maybe<WorkerRewardAmountUpdatedEvent>
  workerRewardAmountUpdatedEventsConnection: WorkerRewardAmountUpdatedEventConnection
  workerRoleAccountUpdatedEvents: Array<WorkerRoleAccountUpdatedEvent>
  workerRoleAccountUpdatedEventByUniqueInput?: Maybe<WorkerRoleAccountUpdatedEvent>
  workerRoleAccountUpdatedEventsConnection: WorkerRoleAccountUpdatedEventConnection
  workerStartedLeavingEvents: Array<WorkerStartedLeavingEvent>
  workerStartedLeavingEventByUniqueInput?: Maybe<WorkerStartedLeavingEvent>
  workerStartedLeavingEventsConnection: WorkerStartedLeavingEventConnection
  workers: Array<Worker>
  workerByUniqueInput?: Maybe<Worker>
  workersConnection: WorkerConnection
  workingGroupApplications: Array<WorkingGroupApplication>
  workingGroupApplicationByUniqueInput?: Maybe<WorkingGroupApplication>
  workingGroupApplicationsConnection: WorkingGroupApplicationConnection
  workingGroupMetadata: Array<WorkingGroupMetadata>
  workingGroupMetadataByUniqueInput?: Maybe<WorkingGroupMetadata>
  workingGroupMetadataConnection: WorkingGroupMetadataConnection
  workingGroupOpeningMetadata: Array<WorkingGroupOpeningMetadata>
  workingGroupOpeningMetadataByUniqueInput?: Maybe<WorkingGroupOpeningMetadata>
  workingGroupOpeningMetadataConnection: WorkingGroupOpeningMetadataConnection
  workingGroupOpenings: Array<WorkingGroupOpening>
  workingGroupOpeningByUniqueInput?: Maybe<WorkingGroupOpening>
  workingGroupOpeningsConnection: WorkingGroupOpeningConnection
  workingGroups: Array<WorkingGroup>
  workingGroupByUniqueInput?: Maybe<WorkingGroup>
  workingGroupsConnection: WorkingGroupConnection
}

export type QueryApplicationFormQuestionAnswersArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ApplicationFormQuestionAnswerWhereInput>
  orderBy?: Maybe<Array<ApplicationFormQuestionAnswerOrderByInput>>
}

export type QueryApplicationFormQuestionAnswerByUniqueInputArgs = {
  where: ApplicationFormQuestionAnswerWhereUniqueInput
}

export type QueryApplicationFormQuestionAnswersConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ApplicationFormQuestionAnswerWhereInput>
  orderBy?: Maybe<Array<ApplicationFormQuestionAnswerOrderByInput>>
}

export type QueryApplicationFormQuestionsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ApplicationFormQuestionWhereInput>
  orderBy?: Maybe<Array<ApplicationFormQuestionOrderByInput>>
}

export type QueryApplicationFormQuestionByUniqueInputArgs = {
  where: ApplicationFormQuestionWhereUniqueInput
}

export type QueryApplicationFormQuestionsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ApplicationFormQuestionWhereInput>
  orderBy?: Maybe<Array<ApplicationFormQuestionOrderByInput>>
}

export type QueryApplicationWithdrawnEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ApplicationWithdrawnEventWhereInput>
  orderBy?: Maybe<Array<ApplicationWithdrawnEventOrderByInput>>
}

export type QueryApplicationWithdrawnEventByUniqueInputArgs = {
  where: ApplicationWithdrawnEventWhereUniqueInput
}

export type QueryApplicationWithdrawnEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ApplicationWithdrawnEventWhereInput>
  orderBy?: Maybe<Array<ApplicationWithdrawnEventOrderByInput>>
}

export type QueryAppliedOnOpeningEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<AppliedOnOpeningEventWhereInput>
  orderBy?: Maybe<Array<AppliedOnOpeningEventOrderByInput>>
}

export type QueryAppliedOnOpeningEventByUniqueInputArgs = {
  where: AppliedOnOpeningEventWhereUniqueInput
}

export type QueryAppliedOnOpeningEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<AppliedOnOpeningEventWhereInput>
  orderBy?: Maybe<Array<AppliedOnOpeningEventOrderByInput>>
}

export type QueryBudgetSetEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<BudgetSetEventWhereInput>
  orderBy?: Maybe<Array<BudgetSetEventOrderByInput>>
}

export type QueryBudgetSetEventByUniqueInputArgs = {
  where: BudgetSetEventWhereUniqueInput
}

export type QueryBudgetSetEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<BudgetSetEventWhereInput>
  orderBy?: Maybe<Array<BudgetSetEventOrderByInput>>
}

export type QueryBudgetSpendingEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<BudgetSpendingEventWhereInput>
  orderBy?: Maybe<Array<BudgetSpendingEventOrderByInput>>
}

export type QueryBudgetSpendingEventByUniqueInputArgs = {
  where: BudgetSpendingEventWhereUniqueInput
}

export type QueryBudgetSpendingEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<BudgetSpendingEventWhereInput>
  orderBy?: Maybe<Array<BudgetSpendingEventOrderByInput>>
}

export type QueryCategoryCreatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<CategoryCreatedEventWhereInput>
  orderBy?: Maybe<Array<CategoryCreatedEventOrderByInput>>
}

export type QueryCategoryCreatedEventByUniqueInputArgs = {
  where: CategoryCreatedEventWhereUniqueInput
}

export type QueryCategoryCreatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<CategoryCreatedEventWhereInput>
  orderBy?: Maybe<Array<CategoryCreatedEventOrderByInput>>
}

export type QueryCategoryDeletedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<CategoryDeletedEventWhereInput>
  orderBy?: Maybe<Array<CategoryDeletedEventOrderByInput>>
}

export type QueryCategoryDeletedEventByUniqueInputArgs = {
  where: CategoryDeletedEventWhereUniqueInput
}

export type QueryCategoryDeletedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<CategoryDeletedEventWhereInput>
  orderBy?: Maybe<Array<CategoryDeletedEventOrderByInput>>
}

export type QueryCategoryMembershipOfModeratorUpdatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<CategoryMembershipOfModeratorUpdatedEventWhereInput>
  orderBy?: Maybe<Array<CategoryMembershipOfModeratorUpdatedEventOrderByInput>>
}

export type QueryCategoryMembershipOfModeratorUpdatedEventByUniqueInputArgs = {
  where: CategoryMembershipOfModeratorUpdatedEventWhereUniqueInput
}

export type QueryCategoryMembershipOfModeratorUpdatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<CategoryMembershipOfModeratorUpdatedEventWhereInput>
  orderBy?: Maybe<Array<CategoryMembershipOfModeratorUpdatedEventOrderByInput>>
}

export type QueryCategoryStickyThreadUpdateEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<CategoryStickyThreadUpdateEventWhereInput>
  orderBy?: Maybe<Array<CategoryStickyThreadUpdateEventOrderByInput>>
}

export type QueryCategoryStickyThreadUpdateEventByUniqueInputArgs = {
  where: CategoryStickyThreadUpdateEventWhereUniqueInput
}

export type QueryCategoryStickyThreadUpdateEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<CategoryStickyThreadUpdateEventWhereInput>
  orderBy?: Maybe<Array<CategoryStickyThreadUpdateEventOrderByInput>>
}

export type QueryCategoryUpdatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<CategoryUpdatedEventWhereInput>
  orderBy?: Maybe<Array<CategoryUpdatedEventOrderByInput>>
}

export type QueryCategoryUpdatedEventByUniqueInputArgs = {
  where: CategoryUpdatedEventWhereUniqueInput
}

export type QueryCategoryUpdatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<CategoryUpdatedEventWhereInput>
  orderBy?: Maybe<Array<CategoryUpdatedEventOrderByInput>>
}

export type QueryDataObjectsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<DataObjectWhereInput>
  orderBy?: Maybe<Array<DataObjectOrderByInput>>
}

export type QueryDataObjectByUniqueInputArgs = {
  where: DataObjectWhereUniqueInput
}

export type QueryDataObjectsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<DataObjectWhereInput>
  orderBy?: Maybe<Array<DataObjectOrderByInput>>
}

export type QueryEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<EventWhereInput>
  orderBy?: Maybe<Array<EventOrderByInput>>
}

export type QueryForumCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ForumCategoryWhereInput>
  orderBy?: Maybe<Array<ForumCategoryOrderByInput>>
}

export type QueryForumCategoryByUniqueInputArgs = {
  where: ForumCategoryWhereUniqueInput
}

export type QueryForumCategoriesConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ForumCategoryWhereInput>
  orderBy?: Maybe<Array<ForumCategoryOrderByInput>>
}

export type QueryForumPollAlternativesArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ForumPollAlternativeWhereInput>
  orderBy?: Maybe<Array<ForumPollAlternativeOrderByInput>>
}

export type QueryForumPollAlternativeByUniqueInputArgs = {
  where: ForumPollAlternativeWhereUniqueInput
}

export type QueryForumPollAlternativesConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ForumPollAlternativeWhereInput>
  orderBy?: Maybe<Array<ForumPollAlternativeOrderByInput>>
}

export type QueryForumPollsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ForumPollWhereInput>
  orderBy?: Maybe<Array<ForumPollOrderByInput>>
}

export type QueryForumPollByUniqueInputArgs = {
  where: ForumPollWhereUniqueInput
}

export type QueryForumPollsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ForumPollWhereInput>
  orderBy?: Maybe<Array<ForumPollOrderByInput>>
}

export type QueryForumPostReactionsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ForumPostReactionWhereInput>
  orderBy?: Maybe<Array<ForumPostReactionOrderByInput>>
}

export type QueryForumPostReactionByUniqueInputArgs = {
  where: ForumPostReactionWhereUniqueInput
}

export type QueryForumPostReactionsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ForumPostReactionWhereInput>
  orderBy?: Maybe<Array<ForumPostReactionOrderByInput>>
}

export type QueryForumPostsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ForumPostWhereInput>
  orderBy?: Maybe<Array<ForumPostOrderByInput>>
}

export type QueryForumPostByUniqueInputArgs = {
  where: ForumPostWhereUniqueInput
}

export type QueryForumPostsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ForumPostWhereInput>
  orderBy?: Maybe<Array<ForumPostOrderByInput>>
}

export type QueryForumThreadsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ForumThreadWhereInput>
  orderBy?: Maybe<Array<ForumThreadOrderByInput>>
}

export type QueryForumThreadByUniqueInputArgs = {
  where: ForumThreadWhereUniqueInput
}

export type QueryForumThreadsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ForumThreadWhereInput>
  orderBy?: Maybe<Array<ForumThreadOrderByInput>>
}

export type QueryFundingRequestDestinationsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<FundingRequestDestinationWhereInput>
  orderBy?: Maybe<Array<FundingRequestDestinationOrderByInput>>
}

export type QueryFundingRequestDestinationByUniqueInputArgs = {
  where: FundingRequestDestinationWhereUniqueInput
}

export type QueryFundingRequestDestinationsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<FundingRequestDestinationWhereInput>
  orderBy?: Maybe<Array<FundingRequestDestinationOrderByInput>>
}

export type QueryFundingRequestDestinationsListsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<FundingRequestDestinationsListWhereInput>
  orderBy?: Maybe<Array<FundingRequestDestinationsListOrderByInput>>
}

export type QueryFundingRequestDestinationsListByUniqueInputArgs = {
  where: FundingRequestDestinationsListWhereUniqueInput
}

export type QueryFundingRequestDestinationsListsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<FundingRequestDestinationsListWhereInput>
  orderBy?: Maybe<Array<FundingRequestDestinationsListOrderByInput>>
}

export type QueryInitialInvitationBalanceUpdatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<InitialInvitationBalanceUpdatedEventWhereInput>
  orderBy?: Maybe<Array<InitialInvitationBalanceUpdatedEventOrderByInput>>
}

export type QueryInitialInvitationBalanceUpdatedEventByUniqueInputArgs = {
  where: InitialInvitationBalanceUpdatedEventWhereUniqueInput
}

export type QueryInitialInvitationBalanceUpdatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<InitialInvitationBalanceUpdatedEventWhereInput>
  orderBy?: Maybe<Array<InitialInvitationBalanceUpdatedEventOrderByInput>>
}

export type QueryInitialInvitationCountUpdatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<InitialInvitationCountUpdatedEventWhereInput>
  orderBy?: Maybe<Array<InitialInvitationCountUpdatedEventOrderByInput>>
}

export type QueryInitialInvitationCountUpdatedEventByUniqueInputArgs = {
  where: InitialInvitationCountUpdatedEventWhereUniqueInput
}

export type QueryInitialInvitationCountUpdatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<InitialInvitationCountUpdatedEventWhereInput>
  orderBy?: Maybe<Array<InitialInvitationCountUpdatedEventOrderByInput>>
}

export type QueryInvitesTransferredEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<InvitesTransferredEventWhereInput>
  orderBy?: Maybe<Array<InvitesTransferredEventOrderByInput>>
}

export type QueryInvitesTransferredEventByUniqueInputArgs = {
  where: InvitesTransferredEventWhereUniqueInput
}

export type QueryInvitesTransferredEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<InvitesTransferredEventWhereInput>
  orderBy?: Maybe<Array<InvitesTransferredEventOrderByInput>>
}

export type QueryLeaderInvitationQuotaUpdatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<LeaderInvitationQuotaUpdatedEventWhereInput>
  orderBy?: Maybe<Array<LeaderInvitationQuotaUpdatedEventOrderByInput>>
}

export type QueryLeaderInvitationQuotaUpdatedEventByUniqueInputArgs = {
  where: LeaderInvitationQuotaUpdatedEventWhereUniqueInput
}

export type QueryLeaderInvitationQuotaUpdatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<LeaderInvitationQuotaUpdatedEventWhereInput>
  orderBy?: Maybe<Array<LeaderInvitationQuotaUpdatedEventOrderByInput>>
}

export type QueryLeaderSetEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<LeaderSetEventWhereInput>
  orderBy?: Maybe<Array<LeaderSetEventOrderByInput>>
}

export type QueryLeaderSetEventByUniqueInputArgs = {
  where: LeaderSetEventWhereUniqueInput
}

export type QueryLeaderSetEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<LeaderSetEventWhereInput>
  orderBy?: Maybe<Array<LeaderSetEventOrderByInput>>
}

export type QueryLeaderUnsetEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<LeaderUnsetEventWhereInput>
  orderBy?: Maybe<Array<LeaderUnsetEventOrderByInput>>
}

export type QueryLeaderUnsetEventByUniqueInputArgs = {
  where: LeaderUnsetEventWhereUniqueInput
}

export type QueryLeaderUnsetEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<LeaderUnsetEventWhereInput>
  orderBy?: Maybe<Array<LeaderUnsetEventOrderByInput>>
}

export type QueryMemberAccountsUpdatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<MemberAccountsUpdatedEventWhereInput>
  orderBy?: Maybe<Array<MemberAccountsUpdatedEventOrderByInput>>
}

export type QueryMemberAccountsUpdatedEventByUniqueInputArgs = {
  where: MemberAccountsUpdatedEventWhereUniqueInput
}

export type QueryMemberAccountsUpdatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<MemberAccountsUpdatedEventWhereInput>
  orderBy?: Maybe<Array<MemberAccountsUpdatedEventOrderByInput>>
}

export type QueryMemberInvitedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<MemberInvitedEventWhereInput>
  orderBy?: Maybe<Array<MemberInvitedEventOrderByInput>>
}

export type QueryMemberInvitedEventByUniqueInputArgs = {
  where: MemberInvitedEventWhereUniqueInput
}

export type QueryMemberInvitedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<MemberInvitedEventWhereInput>
  orderBy?: Maybe<Array<MemberInvitedEventOrderByInput>>
}

export type QueryMemberMetadataArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<MemberMetadataWhereInput>
  orderBy?: Maybe<Array<MemberMetadataOrderByInput>>
}

export type QueryMemberMetadataByUniqueInputArgs = {
  where: MemberMetadataWhereUniqueInput
}

export type QueryMemberMetadataConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<MemberMetadataWhereInput>
  orderBy?: Maybe<Array<MemberMetadataOrderByInput>>
}

export type QueryMemberProfileUpdatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<MemberProfileUpdatedEventWhereInput>
  orderBy?: Maybe<Array<MemberProfileUpdatedEventOrderByInput>>
}

export type QueryMemberProfileUpdatedEventByUniqueInputArgs = {
  where: MemberProfileUpdatedEventWhereUniqueInput
}

export type QueryMemberProfileUpdatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<MemberProfileUpdatedEventWhereInput>
  orderBy?: Maybe<Array<MemberProfileUpdatedEventOrderByInput>>
}

export type QueryMemberVerificationStatusUpdatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<MemberVerificationStatusUpdatedEventWhereInput>
  orderBy?: Maybe<Array<MemberVerificationStatusUpdatedEventOrderByInput>>
}

export type QueryMemberVerificationStatusUpdatedEventByUniqueInputArgs = {
  where: MemberVerificationStatusUpdatedEventWhereUniqueInput
}

export type QueryMemberVerificationStatusUpdatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<MemberVerificationStatusUpdatedEventWhereInput>
  orderBy?: Maybe<Array<MemberVerificationStatusUpdatedEventOrderByInput>>
}

export type QueryMembershipBoughtEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<MembershipBoughtEventWhereInput>
  orderBy?: Maybe<Array<MembershipBoughtEventOrderByInput>>
}

export type QueryMembershipBoughtEventByUniqueInputArgs = {
  where: MembershipBoughtEventWhereUniqueInput
}

export type QueryMembershipBoughtEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<MembershipBoughtEventWhereInput>
  orderBy?: Maybe<Array<MembershipBoughtEventOrderByInput>>
}

export type QueryMembershipPriceUpdatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<MembershipPriceUpdatedEventWhereInput>
  orderBy?: Maybe<Array<MembershipPriceUpdatedEventOrderByInput>>
}

export type QueryMembershipPriceUpdatedEventByUniqueInputArgs = {
  where: MembershipPriceUpdatedEventWhereUniqueInput
}

export type QueryMembershipPriceUpdatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<MembershipPriceUpdatedEventWhereInput>
  orderBy?: Maybe<Array<MembershipPriceUpdatedEventOrderByInput>>
}

export type QueryMembershipSystemSnapshotsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<MembershipSystemSnapshotWhereInput>
  orderBy?: Maybe<Array<MembershipSystemSnapshotOrderByInput>>
}

export type QueryMembershipSystemSnapshotByUniqueInputArgs = {
  where: MembershipSystemSnapshotWhereUniqueInput
}

export type QueryMembershipSystemSnapshotsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<MembershipSystemSnapshotWhereInput>
  orderBy?: Maybe<Array<MembershipSystemSnapshotOrderByInput>>
}

export type QueryMembershipsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<MembershipWhereInput>
  orderBy?: Maybe<Array<MembershipOrderByInput>>
}

export type QueryMembershipByUniqueInputArgs = {
  where: MembershipWhereUniqueInput
}

export type QueryMembershipsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<MembershipWhereInput>
  orderBy?: Maybe<Array<MembershipOrderByInput>>
}

export type QueryNewMissedRewardLevelReachedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<NewMissedRewardLevelReachedEventWhereInput>
  orderBy?: Maybe<Array<NewMissedRewardLevelReachedEventOrderByInput>>
}

export type QueryNewMissedRewardLevelReachedEventByUniqueInputArgs = {
  where: NewMissedRewardLevelReachedEventWhereUniqueInput
}

export type QueryNewMissedRewardLevelReachedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<NewMissedRewardLevelReachedEventWhereInput>
  orderBy?: Maybe<Array<NewMissedRewardLevelReachedEventOrderByInput>>
}

export type QueryOpeningAddedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<OpeningAddedEventWhereInput>
  orderBy?: Maybe<Array<OpeningAddedEventOrderByInput>>
}

export type QueryOpeningAddedEventByUniqueInputArgs = {
  where: OpeningAddedEventWhereUniqueInput
}

export type QueryOpeningAddedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<OpeningAddedEventWhereInput>
  orderBy?: Maybe<Array<OpeningAddedEventOrderByInput>>
}

export type QueryOpeningCanceledEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<OpeningCanceledEventWhereInput>
  orderBy?: Maybe<Array<OpeningCanceledEventOrderByInput>>
}

export type QueryOpeningCanceledEventByUniqueInputArgs = {
  where: OpeningCanceledEventWhereUniqueInput
}

export type QueryOpeningCanceledEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<OpeningCanceledEventWhereInput>
  orderBy?: Maybe<Array<OpeningCanceledEventOrderByInput>>
}

export type QueryOpeningFilledEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<OpeningFilledEventWhereInput>
  orderBy?: Maybe<Array<OpeningFilledEventOrderByInput>>
}

export type QueryOpeningFilledEventByUniqueInputArgs = {
  where: OpeningFilledEventWhereUniqueInput
}

export type QueryOpeningFilledEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<OpeningFilledEventWhereInput>
  orderBy?: Maybe<Array<OpeningFilledEventOrderByInput>>
}

export type QueryPostAddedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<PostAddedEventWhereInput>
  orderBy?: Maybe<Array<PostAddedEventOrderByInput>>
}

export type QueryPostAddedEventByUniqueInputArgs = {
  where: PostAddedEventWhereUniqueInput
}

export type QueryPostAddedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<PostAddedEventWhereInput>
  orderBy?: Maybe<Array<PostAddedEventOrderByInput>>
}

export type QueryPostDeletedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<PostDeletedEventWhereInput>
  orderBy?: Maybe<Array<PostDeletedEventOrderByInput>>
}

export type QueryPostDeletedEventByUniqueInputArgs = {
  where: PostDeletedEventWhereUniqueInput
}

export type QueryPostDeletedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<PostDeletedEventWhereInput>
  orderBy?: Maybe<Array<PostDeletedEventOrderByInput>>
}

export type QueryPostModeratedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<PostModeratedEventWhereInput>
  orderBy?: Maybe<Array<PostModeratedEventOrderByInput>>
}

export type QueryPostModeratedEventByUniqueInputArgs = {
  where: PostModeratedEventWhereUniqueInput
}

export type QueryPostModeratedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<PostModeratedEventWhereInput>
  orderBy?: Maybe<Array<PostModeratedEventOrderByInput>>
}

export type QueryPostReactedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<PostReactedEventWhereInput>
  orderBy?: Maybe<Array<PostReactedEventOrderByInput>>
}

export type QueryPostReactedEventByUniqueInputArgs = {
  where: PostReactedEventWhereUniqueInput
}

export type QueryPostReactedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<PostReactedEventWhereInput>
  orderBy?: Maybe<Array<PostReactedEventOrderByInput>>
}

export type QueryPostTextUpdatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<PostTextUpdatedEventWhereInput>
  orderBy?: Maybe<Array<PostTextUpdatedEventOrderByInput>>
}

export type QueryPostTextUpdatedEventByUniqueInputArgs = {
  where: PostTextUpdatedEventWhereUniqueInput
}

export type QueryPostTextUpdatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<PostTextUpdatedEventWhereInput>
  orderBy?: Maybe<Array<PostTextUpdatedEventOrderByInput>>
}

export type QueryProposalCancelledEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ProposalCancelledEventWhereInput>
  orderBy?: Maybe<Array<ProposalCancelledEventOrderByInput>>
}

export type QueryProposalCancelledEventByUniqueInputArgs = {
  where: ProposalCancelledEventWhereUniqueInput
}

export type QueryProposalCancelledEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ProposalCancelledEventWhereInput>
  orderBy?: Maybe<Array<ProposalCancelledEventOrderByInput>>
}

export type QueryProposalCreatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ProposalCreatedEventWhereInput>
  orderBy?: Maybe<Array<ProposalCreatedEventOrderByInput>>
}

export type QueryProposalCreatedEventByUniqueInputArgs = {
  where: ProposalCreatedEventWhereUniqueInput
}

export type QueryProposalCreatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ProposalCreatedEventWhereInput>
  orderBy?: Maybe<Array<ProposalCreatedEventOrderByInput>>
}

export type QueryProposalDecisionMadeEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ProposalDecisionMadeEventWhereInput>
  orderBy?: Maybe<Array<ProposalDecisionMadeEventOrderByInput>>
}

export type QueryProposalDecisionMadeEventByUniqueInputArgs = {
  where: ProposalDecisionMadeEventWhereUniqueInput
}

export type QueryProposalDecisionMadeEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ProposalDecisionMadeEventWhereInput>
  orderBy?: Maybe<Array<ProposalDecisionMadeEventOrderByInput>>
}

export type QueryProposalDiscussionPostCreatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ProposalDiscussionPostCreatedEventWhereInput>
  orderBy?: Maybe<Array<ProposalDiscussionPostCreatedEventOrderByInput>>
}

export type QueryProposalDiscussionPostCreatedEventByUniqueInputArgs = {
  where: ProposalDiscussionPostCreatedEventWhereUniqueInput
}

export type QueryProposalDiscussionPostCreatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ProposalDiscussionPostCreatedEventWhereInput>
  orderBy?: Maybe<Array<ProposalDiscussionPostCreatedEventOrderByInput>>
}

export type QueryProposalDiscussionPostDeletedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ProposalDiscussionPostDeletedEventWhereInput>
  orderBy?: Maybe<Array<ProposalDiscussionPostDeletedEventOrderByInput>>
}

export type QueryProposalDiscussionPostDeletedEventByUniqueInputArgs = {
  where: ProposalDiscussionPostDeletedEventWhereUniqueInput
}

export type QueryProposalDiscussionPostDeletedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ProposalDiscussionPostDeletedEventWhereInput>
  orderBy?: Maybe<Array<ProposalDiscussionPostDeletedEventOrderByInput>>
}

export type QueryProposalDiscussionPostUpdatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ProposalDiscussionPostUpdatedEventWhereInput>
  orderBy?: Maybe<Array<ProposalDiscussionPostUpdatedEventOrderByInput>>
}

export type QueryProposalDiscussionPostUpdatedEventByUniqueInputArgs = {
  where: ProposalDiscussionPostUpdatedEventWhereUniqueInput
}

export type QueryProposalDiscussionPostUpdatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ProposalDiscussionPostUpdatedEventWhereInput>
  orderBy?: Maybe<Array<ProposalDiscussionPostUpdatedEventOrderByInput>>
}

export type QueryProposalDiscussionPostsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ProposalDiscussionPostWhereInput>
  orderBy?: Maybe<Array<ProposalDiscussionPostOrderByInput>>
}

export type QueryProposalDiscussionPostByUniqueInputArgs = {
  where: ProposalDiscussionPostWhereUniqueInput
}

export type QueryProposalDiscussionPostsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ProposalDiscussionPostWhereInput>
  orderBy?: Maybe<Array<ProposalDiscussionPostOrderByInput>>
}

export type QueryProposalDiscussionThreadCreatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ProposalDiscussionThreadCreatedEventWhereInput>
  orderBy?: Maybe<Array<ProposalDiscussionThreadCreatedEventOrderByInput>>
}

export type QueryProposalDiscussionThreadCreatedEventByUniqueInputArgs = {
  where: ProposalDiscussionThreadCreatedEventWhereUniqueInput
}

export type QueryProposalDiscussionThreadCreatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ProposalDiscussionThreadCreatedEventWhereInput>
  orderBy?: Maybe<Array<ProposalDiscussionThreadCreatedEventOrderByInput>>
}

export type QueryProposalDiscussionThreadModeChangedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ProposalDiscussionThreadModeChangedEventWhereInput>
  orderBy?: Maybe<Array<ProposalDiscussionThreadModeChangedEventOrderByInput>>
}

export type QueryProposalDiscussionThreadModeChangedEventByUniqueInputArgs = {
  where: ProposalDiscussionThreadModeChangedEventWhereUniqueInput
}

export type QueryProposalDiscussionThreadModeChangedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ProposalDiscussionThreadModeChangedEventWhereInput>
  orderBy?: Maybe<Array<ProposalDiscussionThreadModeChangedEventOrderByInput>>
}

export type QueryProposalDiscussionThreadsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ProposalDiscussionThreadWhereInput>
  orderBy?: Maybe<Array<ProposalDiscussionThreadOrderByInput>>
}

export type QueryProposalDiscussionThreadByUniqueInputArgs = {
  where: ProposalDiscussionThreadWhereUniqueInput
}

export type QueryProposalDiscussionThreadsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ProposalDiscussionThreadWhereInput>
  orderBy?: Maybe<Array<ProposalDiscussionThreadOrderByInput>>
}

export type QueryProposalDiscussionWhitelistsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ProposalDiscussionWhitelistWhereInput>
  orderBy?: Maybe<Array<ProposalDiscussionWhitelistOrderByInput>>
}

export type QueryProposalDiscussionWhitelistByUniqueInputArgs = {
  where: ProposalDiscussionWhitelistWhereUniqueInput
}

export type QueryProposalDiscussionWhitelistsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ProposalDiscussionWhitelistWhereInput>
  orderBy?: Maybe<Array<ProposalDiscussionWhitelistOrderByInput>>
}

export type QueryProposalExecutedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ProposalExecutedEventWhereInput>
  orderBy?: Maybe<Array<ProposalExecutedEventOrderByInput>>
}

export type QueryProposalExecutedEventByUniqueInputArgs = {
  where: ProposalExecutedEventWhereUniqueInput
}

export type QueryProposalExecutedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ProposalExecutedEventWhereInput>
  orderBy?: Maybe<Array<ProposalExecutedEventOrderByInput>>
}

export type QueryProposalStatusUpdatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ProposalStatusUpdatedEventWhereInput>
  orderBy?: Maybe<Array<ProposalStatusUpdatedEventOrderByInput>>
}

export type QueryProposalStatusUpdatedEventByUniqueInputArgs = {
  where: ProposalStatusUpdatedEventWhereUniqueInput
}

export type QueryProposalStatusUpdatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ProposalStatusUpdatedEventWhereInput>
  orderBy?: Maybe<Array<ProposalStatusUpdatedEventOrderByInput>>
}

export type QueryProposalVotedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ProposalVotedEventWhereInput>
  orderBy?: Maybe<Array<ProposalVotedEventOrderByInput>>
}

export type QueryProposalVotedEventByUniqueInputArgs = {
  where: ProposalVotedEventWhereUniqueInput
}

export type QueryProposalVotedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ProposalVotedEventWhereInput>
  orderBy?: Maybe<Array<ProposalVotedEventOrderByInput>>
}

export type QueryProposalsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ProposalWhereInput>
  orderBy?: Maybe<Array<ProposalOrderByInput>>
}

export type QueryProposalByUniqueInputArgs = {
  where: ProposalWhereUniqueInput
}

export type QueryProposalsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ProposalWhereInput>
  orderBy?: Maybe<Array<ProposalOrderByInput>>
}

export type QueryMembersByHandleArgs = {
  whereMembership?: Maybe<MembershipWhereInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  text: Scalars['String']
}

export type QueryPostsByTextArgs = {
  whereForumPost?: Maybe<ForumPostWhereInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  text: Scalars['String']
}

export type QueryProposalsByDescriptionArgs = {
  whereProposal?: Maybe<ProposalWhereInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  text: Scalars['String']
}

export type QueryProposalsByTitleArgs = {
  whereProposal?: Maybe<ProposalWhereInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  text: Scalars['String']
}

export type QueryThreadsByTitleArgs = {
  whereForumThread?: Maybe<ForumThreadWhereInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  text: Scalars['String']
}

export type QueryReferralCutUpdatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ReferralCutUpdatedEventWhereInput>
  orderBy?: Maybe<Array<ReferralCutUpdatedEventOrderByInput>>
}

export type QueryReferralCutUpdatedEventByUniqueInputArgs = {
  where: ReferralCutUpdatedEventWhereUniqueInput
}

export type QueryReferralCutUpdatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ReferralCutUpdatedEventWhereInput>
  orderBy?: Maybe<Array<ReferralCutUpdatedEventOrderByInput>>
}

export type QueryRewardPaidEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<RewardPaidEventWhereInput>
  orderBy?: Maybe<Array<RewardPaidEventOrderByInput>>
}

export type QueryRewardPaidEventByUniqueInputArgs = {
  where: RewardPaidEventWhereUniqueInput
}

export type QueryRewardPaidEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<RewardPaidEventWhereInput>
  orderBy?: Maybe<Array<RewardPaidEventOrderByInput>>
}

export type QueryStakeDecreasedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<StakeDecreasedEventWhereInput>
  orderBy?: Maybe<Array<StakeDecreasedEventOrderByInput>>
}

export type QueryStakeDecreasedEventByUniqueInputArgs = {
  where: StakeDecreasedEventWhereUniqueInput
}

export type QueryStakeDecreasedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<StakeDecreasedEventWhereInput>
  orderBy?: Maybe<Array<StakeDecreasedEventOrderByInput>>
}

export type QueryStakeIncreasedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<StakeIncreasedEventWhereInput>
  orderBy?: Maybe<Array<StakeIncreasedEventOrderByInput>>
}

export type QueryStakeIncreasedEventByUniqueInputArgs = {
  where: StakeIncreasedEventWhereUniqueInput
}

export type QueryStakeIncreasedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<StakeIncreasedEventWhereInput>
  orderBy?: Maybe<Array<StakeIncreasedEventOrderByInput>>
}

export type QueryStakeSlashedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<StakeSlashedEventWhereInput>
  orderBy?: Maybe<Array<StakeSlashedEventOrderByInput>>
}

export type QueryStakeSlashedEventByUniqueInputArgs = {
  where: StakeSlashedEventWhereUniqueInput
}

export type QueryStakeSlashedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<StakeSlashedEventWhereInput>
  orderBy?: Maybe<Array<StakeSlashedEventOrderByInput>>
}

export type QueryStakingAccountAddedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<StakingAccountAddedEventWhereInput>
  orderBy?: Maybe<Array<StakingAccountAddedEventOrderByInput>>
}

export type QueryStakingAccountAddedEventByUniqueInputArgs = {
  where: StakingAccountAddedEventWhereUniqueInput
}

export type QueryStakingAccountAddedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<StakingAccountAddedEventWhereInput>
  orderBy?: Maybe<Array<StakingAccountAddedEventOrderByInput>>
}

export type QueryStakingAccountConfirmedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<StakingAccountConfirmedEventWhereInput>
  orderBy?: Maybe<Array<StakingAccountConfirmedEventOrderByInput>>
}

export type QueryStakingAccountConfirmedEventByUniqueInputArgs = {
  where: StakingAccountConfirmedEventWhereUniqueInput
}

export type QueryStakingAccountConfirmedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<StakingAccountConfirmedEventWhereInput>
  orderBy?: Maybe<Array<StakingAccountConfirmedEventOrderByInput>>
}

export type QueryStakingAccountRemovedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<StakingAccountRemovedEventWhereInput>
  orderBy?: Maybe<Array<StakingAccountRemovedEventOrderByInput>>
}

export type QueryStakingAccountRemovedEventByUniqueInputArgs = {
  where: StakingAccountRemovedEventWhereUniqueInput
}

export type QueryStakingAccountRemovedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<StakingAccountRemovedEventWhereInput>
  orderBy?: Maybe<Array<StakingAccountRemovedEventOrderByInput>>
}

export type QueryStatusTextChangedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<StatusTextChangedEventWhereInput>
  orderBy?: Maybe<Array<StatusTextChangedEventOrderByInput>>
}

export type QueryStatusTextChangedEventByUniqueInputArgs = {
  where: StatusTextChangedEventWhereUniqueInput
}

export type QueryStatusTextChangedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<StatusTextChangedEventWhereInput>
  orderBy?: Maybe<Array<StatusTextChangedEventOrderByInput>>
}

export type QueryTerminatedLeaderEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<TerminatedLeaderEventWhereInput>
  orderBy?: Maybe<Array<TerminatedLeaderEventOrderByInput>>
}

export type QueryTerminatedLeaderEventByUniqueInputArgs = {
  where: TerminatedLeaderEventWhereUniqueInput
}

export type QueryTerminatedLeaderEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<TerminatedLeaderEventWhereInput>
  orderBy?: Maybe<Array<TerminatedLeaderEventOrderByInput>>
}

export type QueryTerminatedWorkerEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<TerminatedWorkerEventWhereInput>
  orderBy?: Maybe<Array<TerminatedWorkerEventOrderByInput>>
}

export type QueryTerminatedWorkerEventByUniqueInputArgs = {
  where: TerminatedWorkerEventWhereUniqueInput
}

export type QueryTerminatedWorkerEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<TerminatedWorkerEventWhereInput>
  orderBy?: Maybe<Array<TerminatedWorkerEventOrderByInput>>
}

export type QueryThreadCreatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ThreadCreatedEventWhereInput>
  orderBy?: Maybe<Array<ThreadCreatedEventOrderByInput>>
}

export type QueryThreadCreatedEventByUniqueInputArgs = {
  where: ThreadCreatedEventWhereUniqueInput
}

export type QueryThreadCreatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ThreadCreatedEventWhereInput>
  orderBy?: Maybe<Array<ThreadCreatedEventOrderByInput>>
}

export type QueryThreadDeletedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ThreadDeletedEventWhereInput>
  orderBy?: Maybe<Array<ThreadDeletedEventOrderByInput>>
}

export type QueryThreadDeletedEventByUniqueInputArgs = {
  where: ThreadDeletedEventWhereUniqueInput
}

export type QueryThreadDeletedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ThreadDeletedEventWhereInput>
  orderBy?: Maybe<Array<ThreadDeletedEventOrderByInput>>
}

export type QueryThreadModeratedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ThreadModeratedEventWhereInput>
  orderBy?: Maybe<Array<ThreadModeratedEventOrderByInput>>
}

export type QueryThreadModeratedEventByUniqueInputArgs = {
  where: ThreadModeratedEventWhereUniqueInput
}

export type QueryThreadModeratedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ThreadModeratedEventWhereInput>
  orderBy?: Maybe<Array<ThreadModeratedEventOrderByInput>>
}

export type QueryThreadMovedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ThreadMovedEventWhereInput>
  orderBy?: Maybe<Array<ThreadMovedEventOrderByInput>>
}

export type QueryThreadMovedEventByUniqueInputArgs = {
  where: ThreadMovedEventWhereUniqueInput
}

export type QueryThreadMovedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ThreadMovedEventWhereInput>
  orderBy?: Maybe<Array<ThreadMovedEventOrderByInput>>
}

export type QueryThreadTitleUpdatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<ThreadTitleUpdatedEventWhereInput>
  orderBy?: Maybe<Array<ThreadTitleUpdatedEventOrderByInput>>
}

export type QueryThreadTitleUpdatedEventByUniqueInputArgs = {
  where: ThreadTitleUpdatedEventWhereUniqueInput
}

export type QueryThreadTitleUpdatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<ThreadTitleUpdatedEventWhereInput>
  orderBy?: Maybe<Array<ThreadTitleUpdatedEventOrderByInput>>
}

export type QueryUpcomingWorkingGroupOpeningsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<UpcomingWorkingGroupOpeningWhereInput>
  orderBy?: Maybe<Array<UpcomingWorkingGroupOpeningOrderByInput>>
}

export type QueryUpcomingWorkingGroupOpeningByUniqueInputArgs = {
  where: UpcomingWorkingGroupOpeningWhereUniqueInput
}

export type QueryUpcomingWorkingGroupOpeningsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<UpcomingWorkingGroupOpeningWhereInput>
  orderBy?: Maybe<Array<UpcomingWorkingGroupOpeningOrderByInput>>
}

export type QueryVoteOnPollEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<VoteOnPollEventWhereInput>
  orderBy?: Maybe<Array<VoteOnPollEventOrderByInput>>
}

export type QueryVoteOnPollEventByUniqueInputArgs = {
  where: VoteOnPollEventWhereUniqueInput
}

export type QueryVoteOnPollEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<VoteOnPollEventWhereInput>
  orderBy?: Maybe<Array<VoteOnPollEventOrderByInput>>
}

export type QueryWorkerExitedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<WorkerExitedEventWhereInput>
  orderBy?: Maybe<Array<WorkerExitedEventOrderByInput>>
}

export type QueryWorkerExitedEventByUniqueInputArgs = {
  where: WorkerExitedEventWhereUniqueInput
}

export type QueryWorkerExitedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<WorkerExitedEventWhereInput>
  orderBy?: Maybe<Array<WorkerExitedEventOrderByInput>>
}

export type QueryWorkerRewardAccountUpdatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<WorkerRewardAccountUpdatedEventWhereInput>
  orderBy?: Maybe<Array<WorkerRewardAccountUpdatedEventOrderByInput>>
}

export type QueryWorkerRewardAccountUpdatedEventByUniqueInputArgs = {
  where: WorkerRewardAccountUpdatedEventWhereUniqueInput
}

export type QueryWorkerRewardAccountUpdatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<WorkerRewardAccountUpdatedEventWhereInput>
  orderBy?: Maybe<Array<WorkerRewardAccountUpdatedEventOrderByInput>>
}

export type QueryWorkerRewardAmountUpdatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<WorkerRewardAmountUpdatedEventWhereInput>
  orderBy?: Maybe<Array<WorkerRewardAmountUpdatedEventOrderByInput>>
}

export type QueryWorkerRewardAmountUpdatedEventByUniqueInputArgs = {
  where: WorkerRewardAmountUpdatedEventWhereUniqueInput
}

export type QueryWorkerRewardAmountUpdatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<WorkerRewardAmountUpdatedEventWhereInput>
  orderBy?: Maybe<Array<WorkerRewardAmountUpdatedEventOrderByInput>>
}

export type QueryWorkerRoleAccountUpdatedEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<WorkerRoleAccountUpdatedEventWhereInput>
  orderBy?: Maybe<Array<WorkerRoleAccountUpdatedEventOrderByInput>>
}

export type QueryWorkerRoleAccountUpdatedEventByUniqueInputArgs = {
  where: WorkerRoleAccountUpdatedEventWhereUniqueInput
}

export type QueryWorkerRoleAccountUpdatedEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<WorkerRoleAccountUpdatedEventWhereInput>
  orderBy?: Maybe<Array<WorkerRoleAccountUpdatedEventOrderByInput>>
}

export type QueryWorkerStartedLeavingEventsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<WorkerStartedLeavingEventWhereInput>
  orderBy?: Maybe<Array<WorkerStartedLeavingEventOrderByInput>>
}

export type QueryWorkerStartedLeavingEventByUniqueInputArgs = {
  where: WorkerStartedLeavingEventWhereUniqueInput
}

export type QueryWorkerStartedLeavingEventsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<WorkerStartedLeavingEventWhereInput>
  orderBy?: Maybe<Array<WorkerStartedLeavingEventOrderByInput>>
}

export type QueryWorkersArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<WorkerWhereInput>
  orderBy?: Maybe<Array<WorkerOrderByInput>>
}

export type QueryWorkerByUniqueInputArgs = {
  where: WorkerWhereUniqueInput
}

export type QueryWorkersConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<WorkerWhereInput>
  orderBy?: Maybe<Array<WorkerOrderByInput>>
}

export type QueryWorkingGroupApplicationsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<WorkingGroupApplicationWhereInput>
  orderBy?: Maybe<Array<WorkingGroupApplicationOrderByInput>>
}

export type QueryWorkingGroupApplicationByUniqueInputArgs = {
  where: WorkingGroupApplicationWhereUniqueInput
}

export type QueryWorkingGroupApplicationsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<WorkingGroupApplicationWhereInput>
  orderBy?: Maybe<Array<WorkingGroupApplicationOrderByInput>>
}

export type QueryWorkingGroupMetadataArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<WorkingGroupMetadataWhereInput>
  orderBy?: Maybe<Array<WorkingGroupMetadataOrderByInput>>
}

export type QueryWorkingGroupMetadataByUniqueInputArgs = {
  where: WorkingGroupMetadataWhereUniqueInput
}

export type QueryWorkingGroupMetadataConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<WorkingGroupMetadataWhereInput>
  orderBy?: Maybe<Array<WorkingGroupMetadataOrderByInput>>
}

export type QueryWorkingGroupOpeningMetadataArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<WorkingGroupOpeningMetadataWhereInput>
  orderBy?: Maybe<Array<WorkingGroupOpeningMetadataOrderByInput>>
}

export type QueryWorkingGroupOpeningMetadataByUniqueInputArgs = {
  where: WorkingGroupOpeningMetadataWhereUniqueInput
}

export type QueryWorkingGroupOpeningMetadataConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<WorkingGroupOpeningMetadataWhereInput>
  orderBy?: Maybe<Array<WorkingGroupOpeningMetadataOrderByInput>>
}

export type QueryWorkingGroupOpeningsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<WorkingGroupOpeningWhereInput>
  orderBy?: Maybe<Array<WorkingGroupOpeningOrderByInput>>
}

export type QueryWorkingGroupOpeningByUniqueInputArgs = {
  where: WorkingGroupOpeningWhereUniqueInput
}

export type QueryWorkingGroupOpeningsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<WorkingGroupOpeningWhereInput>
  orderBy?: Maybe<Array<WorkingGroupOpeningOrderByInput>>
}

export type QueryWorkingGroupsArgs = {
  offset?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  where?: Maybe<WorkingGroupWhereInput>
  orderBy?: Maybe<Array<WorkingGroupOrderByInput>>
}

export type QueryWorkingGroupByUniqueInputArgs = {
  where: WorkingGroupWhereUniqueInput
}

export type QueryWorkingGroupsConnectionArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<WorkingGroupWhereInput>
  orderBy?: Maybe<Array<WorkingGroupOrderByInput>>
}

export type ReferralCutUpdatedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'ReferralCutUpdatedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    newValue: Scalars['Int']
  }

export type ReferralCutUpdatedEventConnection = {
  __typename: 'ReferralCutUpdatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<ReferralCutUpdatedEventEdge>
  pageInfo: PageInfo
}

export type ReferralCutUpdatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  newValue: Scalars['Float']
}

export type ReferralCutUpdatedEventEdge = {
  __typename: 'ReferralCutUpdatedEventEdge'
  node: ReferralCutUpdatedEvent
  cursor: Scalars['String']
}

export enum ReferralCutUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NewValueAsc = 'newValue_ASC',
  NewValueDesc = 'newValue_DESC',
}

export type ReferralCutUpdatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  newValue?: Maybe<Scalars['Float']>
}

export type ReferralCutUpdatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  newValue_eq?: Maybe<Scalars['Int']>
  newValue_gt?: Maybe<Scalars['Int']>
  newValue_gte?: Maybe<Scalars['Int']>
  newValue_lt?: Maybe<Scalars['Int']>
  newValue_lte?: Maybe<Scalars['Int']>
  newValue_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<ReferralCutUpdatedEventWhereInput>>
  OR?: Maybe<Array<ReferralCutUpdatedEventWhereInput>>
}

export type ReferralCutUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type RewardPaidEvent = Event &
  BaseGraphQlObject & {
    __typename: 'RewardPaidEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    worker: Worker
    workerId: Scalars['String']
    rewardAccount: Scalars['String']
    amount: Scalars['BigInt']
    paymentType: RewardPaymentType
  }

export type RewardPaidEventConnection = {
  __typename: 'RewardPaidEventConnection'
  totalCount: Scalars['Int']
  edges: Array<RewardPaidEventEdge>
  pageInfo: PageInfo
}

export type RewardPaidEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  worker: Scalars['ID']
  rewardAccount: Scalars['String']
  amount: Scalars['BigInt']
  paymentType: RewardPaymentType
}

export type RewardPaidEventEdge = {
  __typename: 'RewardPaidEventEdge'
  node: RewardPaidEvent
  cursor: Scalars['String']
}

export enum RewardPaidEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
  RewardAccountAsc = 'rewardAccount_ASC',
  RewardAccountDesc = 'rewardAccount_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  PaymentTypeAsc = 'paymentType_ASC',
  PaymentTypeDesc = 'paymentType_DESC',
}

export type RewardPaidEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  worker?: Maybe<Scalars['ID']>
  rewardAccount?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['BigInt']>
  paymentType?: Maybe<RewardPaymentType>
}

export type RewardPaidEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  worker_eq?: Maybe<Scalars['ID']>
  worker_in?: Maybe<Array<Scalars['ID']>>
  rewardAccount_eq?: Maybe<Scalars['String']>
  rewardAccount_contains?: Maybe<Scalars['String']>
  rewardAccount_startsWith?: Maybe<Scalars['String']>
  rewardAccount_endsWith?: Maybe<Scalars['String']>
  rewardAccount_in?: Maybe<Array<Scalars['String']>>
  amount_eq?: Maybe<Scalars['BigInt']>
  amount_gt?: Maybe<Scalars['BigInt']>
  amount_gte?: Maybe<Scalars['BigInt']>
  amount_lt?: Maybe<Scalars['BigInt']>
  amount_lte?: Maybe<Scalars['BigInt']>
  amount_in?: Maybe<Array<Scalars['BigInt']>>
  paymentType_eq?: Maybe<RewardPaymentType>
  paymentType_in?: Maybe<Array<RewardPaymentType>>
  group?: Maybe<WorkingGroupWhereInput>
  worker?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<RewardPaidEventWhereInput>>
  OR?: Maybe<Array<RewardPaidEventWhereInput>>
}

export type RewardPaidEventWhereUniqueInput = {
  id: Scalars['ID']
}

export enum RewardPaymentType {
  Regular = 'REGULAR',
  Missed = 'MISSED',
}

export type RuntimeUpgradeProposalDetails = {
  __typename: 'RuntimeUpgradeProposalDetails'
  wasmBytecode: Scalars['Bytes']
}

export type RuntimeUpgradeProposalDetailsCreateInput = {
  wasmBytecode: Scalars['Bytes']
}

export type RuntimeUpgradeProposalDetailsUpdateInput = {
  wasmBytecode?: Maybe<Scalars['Bytes']>
}

export type RuntimeUpgradeProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  wasmBytecode_eq?: Maybe<Scalars['Bytes']>
  wasmBytecode_in?: Maybe<Array<Scalars['Bytes']>>
  AND?: Maybe<Array<RuntimeUpgradeProposalDetailsWhereInput>>
  OR?: Maybe<Array<RuntimeUpgradeProposalDetailsWhereInput>>
}

export type RuntimeUpgradeProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type SetCouncilBudgetIncrementProposalDetails = {
  __typename: 'SetCouncilBudgetIncrementProposalDetails'
  newAmount: Scalars['BigInt']
}

export type SetCouncilBudgetIncrementProposalDetailsCreateInput = {
  newAmount: Scalars['BigInt']
}

export type SetCouncilBudgetIncrementProposalDetailsUpdateInput = {
  newAmount?: Maybe<Scalars['BigInt']>
}

export type SetCouncilBudgetIncrementProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  newAmount_eq?: Maybe<Scalars['BigInt']>
  newAmount_gt?: Maybe<Scalars['BigInt']>
  newAmount_gte?: Maybe<Scalars['BigInt']>
  newAmount_lt?: Maybe<Scalars['BigInt']>
  newAmount_lte?: Maybe<Scalars['BigInt']>
  newAmount_in?: Maybe<Array<Scalars['BigInt']>>
  AND?: Maybe<Array<SetCouncilBudgetIncrementProposalDetailsWhereInput>>
  OR?: Maybe<Array<SetCouncilBudgetIncrementProposalDetailsWhereInput>>
}

export type SetCouncilBudgetIncrementProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type SetCouncilorRewardProposalDetails = {
  __typename: 'SetCouncilorRewardProposalDetails'
  newRewardPerBlock: Scalars['BigInt']
}

export type SetCouncilorRewardProposalDetailsCreateInput = {
  newRewardPerBlock: Scalars['BigInt']
}

export type SetCouncilorRewardProposalDetailsUpdateInput = {
  newRewardPerBlock?: Maybe<Scalars['BigInt']>
}

export type SetCouncilorRewardProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  newRewardPerBlock_eq?: Maybe<Scalars['BigInt']>
  newRewardPerBlock_gt?: Maybe<Scalars['BigInt']>
  newRewardPerBlock_gte?: Maybe<Scalars['BigInt']>
  newRewardPerBlock_lt?: Maybe<Scalars['BigInt']>
  newRewardPerBlock_lte?: Maybe<Scalars['BigInt']>
  newRewardPerBlock_in?: Maybe<Array<Scalars['BigInt']>>
  AND?: Maybe<Array<SetCouncilorRewardProposalDetailsWhereInput>>
  OR?: Maybe<Array<SetCouncilorRewardProposalDetailsWhereInput>>
}

export type SetCouncilorRewardProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type SetInitialInvitationBalanceProposalDetails = {
  __typename: 'SetInitialInvitationBalanceProposalDetails'
  newInitialInvitationBalance: Scalars['BigInt']
}

export type SetInitialInvitationBalanceProposalDetailsCreateInput = {
  newInitialInvitationBalance: Scalars['BigInt']
}

export type SetInitialInvitationBalanceProposalDetailsUpdateInput = {
  newInitialInvitationBalance?: Maybe<Scalars['BigInt']>
}

export type SetInitialInvitationBalanceProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  newInitialInvitationBalance_eq?: Maybe<Scalars['BigInt']>
  newInitialInvitationBalance_gt?: Maybe<Scalars['BigInt']>
  newInitialInvitationBalance_gte?: Maybe<Scalars['BigInt']>
  newInitialInvitationBalance_lt?: Maybe<Scalars['BigInt']>
  newInitialInvitationBalance_lte?: Maybe<Scalars['BigInt']>
  newInitialInvitationBalance_in?: Maybe<Array<Scalars['BigInt']>>
  AND?: Maybe<Array<SetInitialInvitationBalanceProposalDetailsWhereInput>>
  OR?: Maybe<Array<SetInitialInvitationBalanceProposalDetailsWhereInput>>
}

export type SetInitialInvitationBalanceProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type SetInitialInvitationCountProposalDetails = {
  __typename: 'SetInitialInvitationCountProposalDetails'
  newInitialInvitationsCount: Scalars['Int']
}

export type SetInitialInvitationCountProposalDetailsCreateInput = {
  newInitialInvitationsCount: Scalars['Float']
}

export type SetInitialInvitationCountProposalDetailsUpdateInput = {
  newInitialInvitationsCount?: Maybe<Scalars['Float']>
}

export type SetInitialInvitationCountProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  newInitialInvitationsCount_eq?: Maybe<Scalars['Int']>
  newInitialInvitationsCount_gt?: Maybe<Scalars['Int']>
  newInitialInvitationsCount_gte?: Maybe<Scalars['Int']>
  newInitialInvitationsCount_lt?: Maybe<Scalars['Int']>
  newInitialInvitationsCount_lte?: Maybe<Scalars['Int']>
  newInitialInvitationsCount_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<SetInitialInvitationCountProposalDetailsWhereInput>>
  OR?: Maybe<Array<SetInitialInvitationCountProposalDetailsWhereInput>>
}

export type SetInitialInvitationCountProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type SetMaxValidatorCountProposalDetails = {
  __typename: 'SetMaxValidatorCountProposalDetails'
  newMaxValidatorCount: Scalars['Int']
}

export type SetMaxValidatorCountProposalDetailsCreateInput = {
  newMaxValidatorCount: Scalars['Float']
}

export type SetMaxValidatorCountProposalDetailsUpdateInput = {
  newMaxValidatorCount?: Maybe<Scalars['Float']>
}

export type SetMaxValidatorCountProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  newMaxValidatorCount_eq?: Maybe<Scalars['Int']>
  newMaxValidatorCount_gt?: Maybe<Scalars['Int']>
  newMaxValidatorCount_gte?: Maybe<Scalars['Int']>
  newMaxValidatorCount_lt?: Maybe<Scalars['Int']>
  newMaxValidatorCount_lte?: Maybe<Scalars['Int']>
  newMaxValidatorCount_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<SetMaxValidatorCountProposalDetailsWhereInput>>
  OR?: Maybe<Array<SetMaxValidatorCountProposalDetailsWhereInput>>
}

export type SetMaxValidatorCountProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type SetMembershipLeadInvitationQuotaProposalDetails = {
  __typename: 'SetMembershipLeadInvitationQuotaProposalDetails'
  newLeadInvitationQuota: Scalars['Int']
}

export type SetMembershipLeadInvitationQuotaProposalDetailsCreateInput = {
  newLeadInvitationQuota: Scalars['Float']
}

export type SetMembershipLeadInvitationQuotaProposalDetailsUpdateInput = {
  newLeadInvitationQuota?: Maybe<Scalars['Float']>
}

export type SetMembershipLeadInvitationQuotaProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  newLeadInvitationQuota_eq?: Maybe<Scalars['Int']>
  newLeadInvitationQuota_gt?: Maybe<Scalars['Int']>
  newLeadInvitationQuota_gte?: Maybe<Scalars['Int']>
  newLeadInvitationQuota_lt?: Maybe<Scalars['Int']>
  newLeadInvitationQuota_lte?: Maybe<Scalars['Int']>
  newLeadInvitationQuota_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<SetMembershipLeadInvitationQuotaProposalDetailsWhereInput>>
  OR?: Maybe<Array<SetMembershipLeadInvitationQuotaProposalDetailsWhereInput>>
}

export type SetMembershipLeadInvitationQuotaProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type SetMembershipPriceProposalDetails = {
  __typename: 'SetMembershipPriceProposalDetails'
  newPrice: Scalars['BigInt']
}

export type SetMembershipPriceProposalDetailsCreateInput = {
  newPrice: Scalars['BigInt']
}

export type SetMembershipPriceProposalDetailsUpdateInput = {
  newPrice?: Maybe<Scalars['BigInt']>
}

export type SetMembershipPriceProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  newPrice_eq?: Maybe<Scalars['BigInt']>
  newPrice_gt?: Maybe<Scalars['BigInt']>
  newPrice_gte?: Maybe<Scalars['BigInt']>
  newPrice_lt?: Maybe<Scalars['BigInt']>
  newPrice_lte?: Maybe<Scalars['BigInt']>
  newPrice_in?: Maybe<Array<Scalars['BigInt']>>
  AND?: Maybe<Array<SetMembershipPriceProposalDetailsWhereInput>>
  OR?: Maybe<Array<SetMembershipPriceProposalDetailsWhereInput>>
}

export type SetMembershipPriceProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type SetReferralCutProposalDetails = {
  __typename: 'SetReferralCutProposalDetails'
  newReferralCut: Scalars['Int']
}

export type SetReferralCutProposalDetailsCreateInput = {
  newReferralCut: Scalars['Float']
}

export type SetReferralCutProposalDetailsUpdateInput = {
  newReferralCut?: Maybe<Scalars['Float']>
}

export type SetReferralCutProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  newReferralCut_eq?: Maybe<Scalars['Int']>
  newReferralCut_gt?: Maybe<Scalars['Int']>
  newReferralCut_gte?: Maybe<Scalars['Int']>
  newReferralCut_lt?: Maybe<Scalars['Int']>
  newReferralCut_lte?: Maybe<Scalars['Int']>
  newReferralCut_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<SetReferralCutProposalDetailsWhereInput>>
  OR?: Maybe<Array<SetReferralCutProposalDetailsWhereInput>>
}

export type SetReferralCutProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type SetWorkingGroupLeadRewardProposalDetails = {
  __typename: 'SetWorkingGroupLeadRewardProposalDetails'
  lead?: Maybe<Worker>
  newRewardPerBlock: Scalars['BigInt']
}

export type SetWorkingGroupLeadRewardProposalDetailsCreateInput = {
  newRewardPerBlock: Scalars['BigInt']
}

export type SetWorkingGroupLeadRewardProposalDetailsUpdateInput = {
  newRewardPerBlock?: Maybe<Scalars['BigInt']>
}

export type SetWorkingGroupLeadRewardProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  newRewardPerBlock_eq?: Maybe<Scalars['BigInt']>
  newRewardPerBlock_gt?: Maybe<Scalars['BigInt']>
  newRewardPerBlock_gte?: Maybe<Scalars['BigInt']>
  newRewardPerBlock_lt?: Maybe<Scalars['BigInt']>
  newRewardPerBlock_lte?: Maybe<Scalars['BigInt']>
  newRewardPerBlock_in?: Maybe<Array<Scalars['BigInt']>>
  AND?: Maybe<Array<SetWorkingGroupLeadRewardProposalDetailsWhereInput>>
  OR?: Maybe<Array<SetWorkingGroupLeadRewardProposalDetailsWhereInput>>
}

export type SetWorkingGroupLeadRewardProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type SignalProposalDetails = {
  __typename: 'SignalProposalDetails'
  text: Scalars['String']
}

export type SignalProposalDetailsCreateInput = {
  text: Scalars['String']
}

export type SignalProposalDetailsUpdateInput = {
  text?: Maybe<Scalars['String']>
}

export type SignalProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  text_eq?: Maybe<Scalars['String']>
  text_contains?: Maybe<Scalars['String']>
  text_startsWith?: Maybe<Scalars['String']>
  text_endsWith?: Maybe<Scalars['String']>
  text_in?: Maybe<Array<Scalars['String']>>
  AND?: Maybe<Array<SignalProposalDetailsWhereInput>>
  OR?: Maybe<Array<SignalProposalDetailsWhereInput>>
}

export type SignalProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type SlashWorkingGroupLeadProposalDetails = {
  __typename: 'SlashWorkingGroupLeadProposalDetails'
  lead?: Maybe<Worker>
  amount: Scalars['BigInt']
}

export type SlashWorkingGroupLeadProposalDetailsCreateInput = {
  amount: Scalars['BigInt']
}

export type SlashWorkingGroupLeadProposalDetailsUpdateInput = {
  amount?: Maybe<Scalars['BigInt']>
}

export type SlashWorkingGroupLeadProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  amount_eq?: Maybe<Scalars['BigInt']>
  amount_gt?: Maybe<Scalars['BigInt']>
  amount_gte?: Maybe<Scalars['BigInt']>
  amount_lt?: Maybe<Scalars['BigInt']>
  amount_lte?: Maybe<Scalars['BigInt']>
  amount_in?: Maybe<Array<Scalars['BigInt']>>
  AND?: Maybe<Array<SlashWorkingGroupLeadProposalDetailsWhereInput>>
  OR?: Maybe<Array<SlashWorkingGroupLeadProposalDetailsWhereInput>>
}

export type SlashWorkingGroupLeadProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type StakeDecreasedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'StakeDecreasedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    worker: Worker
    workerId: Scalars['String']
    amount: Scalars['BigInt']
  }

export type StakeDecreasedEventConnection = {
  __typename: 'StakeDecreasedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<StakeDecreasedEventEdge>
  pageInfo: PageInfo
}

export type StakeDecreasedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  worker: Scalars['ID']
  amount: Scalars['BigInt']
}

export type StakeDecreasedEventEdge = {
  __typename: 'StakeDecreasedEventEdge'
  node: StakeDecreasedEvent
  cursor: Scalars['String']
}

export enum StakeDecreasedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
}

export type StakeDecreasedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  worker?: Maybe<Scalars['ID']>
  amount?: Maybe<Scalars['BigInt']>
}

export type StakeDecreasedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  worker_eq?: Maybe<Scalars['ID']>
  worker_in?: Maybe<Array<Scalars['ID']>>
  amount_eq?: Maybe<Scalars['BigInt']>
  amount_gt?: Maybe<Scalars['BigInt']>
  amount_gte?: Maybe<Scalars['BigInt']>
  amount_lt?: Maybe<Scalars['BigInt']>
  amount_lte?: Maybe<Scalars['BigInt']>
  amount_in?: Maybe<Array<Scalars['BigInt']>>
  group?: Maybe<WorkingGroupWhereInput>
  worker?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<StakeDecreasedEventWhereInput>>
  OR?: Maybe<Array<StakeDecreasedEventWhereInput>>
}

export type StakeDecreasedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type StakeIncreasedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'StakeIncreasedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    worker: Worker
    workerId: Scalars['String']
    amount: Scalars['BigInt']
  }

export type StakeIncreasedEventConnection = {
  __typename: 'StakeIncreasedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<StakeIncreasedEventEdge>
  pageInfo: PageInfo
}

export type StakeIncreasedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  worker: Scalars['ID']
  amount: Scalars['BigInt']
}

export type StakeIncreasedEventEdge = {
  __typename: 'StakeIncreasedEventEdge'
  node: StakeIncreasedEvent
  cursor: Scalars['String']
}

export enum StakeIncreasedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
}

export type StakeIncreasedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  worker?: Maybe<Scalars['ID']>
  amount?: Maybe<Scalars['BigInt']>
}

export type StakeIncreasedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  worker_eq?: Maybe<Scalars['ID']>
  worker_in?: Maybe<Array<Scalars['ID']>>
  amount_eq?: Maybe<Scalars['BigInt']>
  amount_gt?: Maybe<Scalars['BigInt']>
  amount_gte?: Maybe<Scalars['BigInt']>
  amount_lt?: Maybe<Scalars['BigInt']>
  amount_lte?: Maybe<Scalars['BigInt']>
  amount_in?: Maybe<Array<Scalars['BigInt']>>
  group?: Maybe<WorkingGroupWhereInput>
  worker?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<StakeIncreasedEventWhereInput>>
  OR?: Maybe<Array<StakeIncreasedEventWhereInput>>
}

export type StakeIncreasedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type StakeSlashedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'StakeSlashedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    worker: Worker
    workerId: Scalars['String']
    requestedAmount: Scalars['BigInt']
    slashedAmount: Scalars['BigInt']
    rationale?: Maybe<Scalars['String']>
  }

export type StakeSlashedEventConnection = {
  __typename: 'StakeSlashedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<StakeSlashedEventEdge>
  pageInfo: PageInfo
}

export type StakeSlashedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  worker: Scalars['ID']
  requestedAmount: Scalars['BigInt']
  slashedAmount: Scalars['BigInt']
  rationale?: Maybe<Scalars['String']>
}

export type StakeSlashedEventEdge = {
  __typename: 'StakeSlashedEventEdge'
  node: StakeSlashedEvent
  cursor: Scalars['String']
}

export enum StakeSlashedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
  RequestedAmountAsc = 'requestedAmount_ASC',
  RequestedAmountDesc = 'requestedAmount_DESC',
  SlashedAmountAsc = 'slashedAmount_ASC',
  SlashedAmountDesc = 'slashedAmount_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
}

export type StakeSlashedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  worker?: Maybe<Scalars['ID']>
  requestedAmount?: Maybe<Scalars['BigInt']>
  slashedAmount?: Maybe<Scalars['BigInt']>
  rationale?: Maybe<Scalars['String']>
}

export type StakeSlashedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  worker_eq?: Maybe<Scalars['ID']>
  worker_in?: Maybe<Array<Scalars['ID']>>
  requestedAmount_eq?: Maybe<Scalars['BigInt']>
  requestedAmount_gt?: Maybe<Scalars['BigInt']>
  requestedAmount_gte?: Maybe<Scalars['BigInt']>
  requestedAmount_lt?: Maybe<Scalars['BigInt']>
  requestedAmount_lte?: Maybe<Scalars['BigInt']>
  requestedAmount_in?: Maybe<Array<Scalars['BigInt']>>
  slashedAmount_eq?: Maybe<Scalars['BigInt']>
  slashedAmount_gt?: Maybe<Scalars['BigInt']>
  slashedAmount_gte?: Maybe<Scalars['BigInt']>
  slashedAmount_lt?: Maybe<Scalars['BigInt']>
  slashedAmount_lte?: Maybe<Scalars['BigInt']>
  slashedAmount_in?: Maybe<Array<Scalars['BigInt']>>
  rationale_eq?: Maybe<Scalars['String']>
  rationale_contains?: Maybe<Scalars['String']>
  rationale_startsWith?: Maybe<Scalars['String']>
  rationale_endsWith?: Maybe<Scalars['String']>
  rationale_in?: Maybe<Array<Scalars['String']>>
  group?: Maybe<WorkingGroupWhereInput>
  worker?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<StakeSlashedEventWhereInput>>
  OR?: Maybe<Array<StakeSlashedEventWhereInput>>
}

export type StakeSlashedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type StakingAccountAddedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'StakingAccountAddedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    member: Membership
    memberId: Scalars['String']
    account: Scalars['String']
  }

export type StakingAccountAddedEventConnection = {
  __typename: 'StakingAccountAddedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<StakingAccountAddedEventEdge>
  pageInfo: PageInfo
}

export type StakingAccountAddedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  member: Scalars['ID']
  account: Scalars['String']
}

export type StakingAccountAddedEventEdge = {
  __typename: 'StakingAccountAddedEventEdge'
  node: StakingAccountAddedEvent
  cursor: Scalars['String']
}

export enum StakingAccountAddedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  MemberAsc = 'member_ASC',
  MemberDesc = 'member_DESC',
  AccountAsc = 'account_ASC',
  AccountDesc = 'account_DESC',
}

export type StakingAccountAddedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  member?: Maybe<Scalars['ID']>
  account?: Maybe<Scalars['String']>
}

export type StakingAccountAddedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  member_eq?: Maybe<Scalars['ID']>
  member_in?: Maybe<Array<Scalars['ID']>>
  account_eq?: Maybe<Scalars['String']>
  account_contains?: Maybe<Scalars['String']>
  account_startsWith?: Maybe<Scalars['String']>
  account_endsWith?: Maybe<Scalars['String']>
  account_in?: Maybe<Array<Scalars['String']>>
  member?: Maybe<MembershipWhereInput>
  AND?: Maybe<Array<StakingAccountAddedEventWhereInput>>
  OR?: Maybe<Array<StakingAccountAddedEventWhereInput>>
}

export type StakingAccountAddedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type StakingAccountConfirmedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'StakingAccountConfirmedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    member: Membership
    memberId: Scalars['String']
    account: Scalars['String']
  }

export type StakingAccountConfirmedEventConnection = {
  __typename: 'StakingAccountConfirmedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<StakingAccountConfirmedEventEdge>
  pageInfo: PageInfo
}

export type StakingAccountConfirmedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  member: Scalars['ID']
  account: Scalars['String']
}

export type StakingAccountConfirmedEventEdge = {
  __typename: 'StakingAccountConfirmedEventEdge'
  node: StakingAccountConfirmedEvent
  cursor: Scalars['String']
}

export enum StakingAccountConfirmedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  MemberAsc = 'member_ASC',
  MemberDesc = 'member_DESC',
  AccountAsc = 'account_ASC',
  AccountDesc = 'account_DESC',
}

export type StakingAccountConfirmedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  member?: Maybe<Scalars['ID']>
  account?: Maybe<Scalars['String']>
}

export type StakingAccountConfirmedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  member_eq?: Maybe<Scalars['ID']>
  member_in?: Maybe<Array<Scalars['ID']>>
  account_eq?: Maybe<Scalars['String']>
  account_contains?: Maybe<Scalars['String']>
  account_startsWith?: Maybe<Scalars['String']>
  account_endsWith?: Maybe<Scalars['String']>
  account_in?: Maybe<Array<Scalars['String']>>
  member?: Maybe<MembershipWhereInput>
  AND?: Maybe<Array<StakingAccountConfirmedEventWhereInput>>
  OR?: Maybe<Array<StakingAccountConfirmedEventWhereInput>>
}

export type StakingAccountConfirmedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type StakingAccountRemovedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'StakingAccountRemovedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    member: Membership
    memberId: Scalars['String']
    account: Scalars['String']
  }

export type StakingAccountRemovedEventConnection = {
  __typename: 'StakingAccountRemovedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<StakingAccountRemovedEventEdge>
  pageInfo: PageInfo
}

export type StakingAccountRemovedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  member: Scalars['ID']
  account: Scalars['String']
}

export type StakingAccountRemovedEventEdge = {
  __typename: 'StakingAccountRemovedEventEdge'
  node: StakingAccountRemovedEvent
  cursor: Scalars['String']
}

export enum StakingAccountRemovedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  MemberAsc = 'member_ASC',
  MemberDesc = 'member_DESC',
  AccountAsc = 'account_ASC',
  AccountDesc = 'account_DESC',
}

export type StakingAccountRemovedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  member?: Maybe<Scalars['ID']>
  account?: Maybe<Scalars['String']>
}

export type StakingAccountRemovedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  member_eq?: Maybe<Scalars['ID']>
  member_in?: Maybe<Array<Scalars['ID']>>
  account_eq?: Maybe<Scalars['String']>
  account_contains?: Maybe<Scalars['String']>
  account_startsWith?: Maybe<Scalars['String']>
  account_endsWith?: Maybe<Scalars['String']>
  account_in?: Maybe<Array<Scalars['String']>>
  member?: Maybe<MembershipWhereInput>
  AND?: Maybe<Array<StakingAccountRemovedEventWhereInput>>
  OR?: Maybe<Array<StakingAccountRemovedEventWhereInput>>
}

export type StakingAccountRemovedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type StandardDeleteResponse = {
  __typename: 'StandardDeleteResponse'
  id: Scalars['ID']
}

export type StatusTextChangedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'StatusTextChangedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    metadata?: Maybe<Scalars['String']>
    result: WorkingGroupMetadataActionResult
    upcomingworkinggroupopeningcreatedInEvent?: Maybe<Array<UpcomingWorkingGroupOpening>>
    workinggroupmetadatasetInEvent?: Maybe<Array<WorkingGroupMetadata>>
  }

export type StatusTextChangedEventConnection = {
  __typename: 'StatusTextChangedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<StatusTextChangedEventEdge>
  pageInfo: PageInfo
}

export type StatusTextChangedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  metadata?: Maybe<Scalars['String']>
  result: Scalars['JSONObject']
}

export type StatusTextChangedEventEdge = {
  __typename: 'StatusTextChangedEventEdge'
  node: StatusTextChangedEvent
  cursor: Scalars['String']
}

export enum StatusTextChangedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
}

export type StatusTextChangedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  metadata?: Maybe<Scalars['String']>
  result?: Maybe<Scalars['JSONObject']>
}

export type StatusTextChangedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  metadata_eq?: Maybe<Scalars['String']>
  metadata_contains?: Maybe<Scalars['String']>
  metadata_startsWith?: Maybe<Scalars['String']>
  metadata_endsWith?: Maybe<Scalars['String']>
  metadata_in?: Maybe<Array<Scalars['String']>>
  result_json?: Maybe<Scalars['JSONObject']>
  group?: Maybe<WorkingGroupWhereInput>
  upcomingworkinggroupopeningcreatedInEvent_none?: Maybe<UpcomingWorkingGroupOpeningWhereInput>
  upcomingworkinggroupopeningcreatedInEvent_some?: Maybe<UpcomingWorkingGroupOpeningWhereInput>
  upcomingworkinggroupopeningcreatedInEvent_every?: Maybe<UpcomingWorkingGroupOpeningWhereInput>
  workinggroupmetadatasetInEvent_none?: Maybe<WorkingGroupMetadataWhereInput>
  workinggroupmetadatasetInEvent_some?: Maybe<WorkingGroupMetadataWhereInput>
  workinggroupmetadatasetInEvent_every?: Maybe<WorkingGroupMetadataWhereInput>
  AND?: Maybe<Array<StatusTextChangedEventWhereInput>>
  OR?: Maybe<Array<StatusTextChangedEventWhereInput>>
}

export type StatusTextChangedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type Subscription = {
  __typename: 'Subscription'
  stateSubscription: ProcessorState
}

export type TerminateWorkingGroupLeadProposalDetails = {
  __typename: 'TerminateWorkingGroupLeadProposalDetails'
  lead?: Maybe<Worker>
  slashingAmount?: Maybe<Scalars['BigInt']>
}

export type TerminateWorkingGroupLeadProposalDetailsCreateInput = {
  slashingAmount?: Maybe<Scalars['BigInt']>
}

export type TerminateWorkingGroupLeadProposalDetailsUpdateInput = {
  slashingAmount?: Maybe<Scalars['BigInt']>
}

export type TerminateWorkingGroupLeadProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  slashingAmount_eq?: Maybe<Scalars['BigInt']>
  slashingAmount_gt?: Maybe<Scalars['BigInt']>
  slashingAmount_gte?: Maybe<Scalars['BigInt']>
  slashingAmount_lt?: Maybe<Scalars['BigInt']>
  slashingAmount_lte?: Maybe<Scalars['BigInt']>
  slashingAmount_in?: Maybe<Array<Scalars['BigInt']>>
  AND?: Maybe<Array<TerminateWorkingGroupLeadProposalDetailsWhereInput>>
  OR?: Maybe<Array<TerminateWorkingGroupLeadProposalDetailsWhereInput>>
}

export type TerminateWorkingGroupLeadProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type TerminatedLeaderEvent = Event &
  BaseGraphQlObject & {
    __typename: 'TerminatedLeaderEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    worker: Worker
    workerId: Scalars['String']
    penalty?: Maybe<Scalars['BigInt']>
    rationale?: Maybe<Scalars['String']>
  }

export type TerminatedLeaderEventConnection = {
  __typename: 'TerminatedLeaderEventConnection'
  totalCount: Scalars['Int']
  edges: Array<TerminatedLeaderEventEdge>
  pageInfo: PageInfo
}

export type TerminatedLeaderEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  worker: Scalars['ID']
  penalty?: Maybe<Scalars['BigInt']>
  rationale?: Maybe<Scalars['String']>
}

export type TerminatedLeaderEventEdge = {
  __typename: 'TerminatedLeaderEventEdge'
  node: TerminatedLeaderEvent
  cursor: Scalars['String']
}

export enum TerminatedLeaderEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
  PenaltyAsc = 'penalty_ASC',
  PenaltyDesc = 'penalty_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
}

export type TerminatedLeaderEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  worker?: Maybe<Scalars['ID']>
  penalty?: Maybe<Scalars['BigInt']>
  rationale?: Maybe<Scalars['String']>
}

export type TerminatedLeaderEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  worker_eq?: Maybe<Scalars['ID']>
  worker_in?: Maybe<Array<Scalars['ID']>>
  penalty_eq?: Maybe<Scalars['BigInt']>
  penalty_gt?: Maybe<Scalars['BigInt']>
  penalty_gte?: Maybe<Scalars['BigInt']>
  penalty_lt?: Maybe<Scalars['BigInt']>
  penalty_lte?: Maybe<Scalars['BigInt']>
  penalty_in?: Maybe<Array<Scalars['BigInt']>>
  rationale_eq?: Maybe<Scalars['String']>
  rationale_contains?: Maybe<Scalars['String']>
  rationale_startsWith?: Maybe<Scalars['String']>
  rationale_endsWith?: Maybe<Scalars['String']>
  rationale_in?: Maybe<Array<Scalars['String']>>
  group?: Maybe<WorkingGroupWhereInput>
  worker?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<TerminatedLeaderEventWhereInput>>
  OR?: Maybe<Array<TerminatedLeaderEventWhereInput>>
}

export type TerminatedLeaderEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type TerminatedWorkerEvent = Event &
  BaseGraphQlObject & {
    __typename: 'TerminatedWorkerEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    worker: Worker
    workerId: Scalars['String']
    penalty?: Maybe<Scalars['BigInt']>
    rationale?: Maybe<Scalars['String']>
  }

export type TerminatedWorkerEventConnection = {
  __typename: 'TerminatedWorkerEventConnection'
  totalCount: Scalars['Int']
  edges: Array<TerminatedWorkerEventEdge>
  pageInfo: PageInfo
}

export type TerminatedWorkerEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  worker: Scalars['ID']
  penalty?: Maybe<Scalars['BigInt']>
  rationale?: Maybe<Scalars['String']>
}

export type TerminatedWorkerEventEdge = {
  __typename: 'TerminatedWorkerEventEdge'
  node: TerminatedWorkerEvent
  cursor: Scalars['String']
}

export enum TerminatedWorkerEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
  PenaltyAsc = 'penalty_ASC',
  PenaltyDesc = 'penalty_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
}

export type TerminatedWorkerEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  worker?: Maybe<Scalars['ID']>
  penalty?: Maybe<Scalars['BigInt']>
  rationale?: Maybe<Scalars['String']>
}

export type TerminatedWorkerEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  worker_eq?: Maybe<Scalars['ID']>
  worker_in?: Maybe<Array<Scalars['ID']>>
  penalty_eq?: Maybe<Scalars['BigInt']>
  penalty_gt?: Maybe<Scalars['BigInt']>
  penalty_gte?: Maybe<Scalars['BigInt']>
  penalty_lt?: Maybe<Scalars['BigInt']>
  penalty_lte?: Maybe<Scalars['BigInt']>
  penalty_in?: Maybe<Array<Scalars['BigInt']>>
  rationale_eq?: Maybe<Scalars['String']>
  rationale_contains?: Maybe<Scalars['String']>
  rationale_startsWith?: Maybe<Scalars['String']>
  rationale_endsWith?: Maybe<Scalars['String']>
  rationale_in?: Maybe<Array<Scalars['String']>>
  group?: Maybe<WorkingGroupWhereInput>
  worker?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<TerminatedWorkerEventWhereInput>>
  OR?: Maybe<Array<TerminatedWorkerEventWhereInput>>
}

export type TerminatedWorkerEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ThreadCreatedEvent = BaseGraphQlObject & {
  __typename: 'ThreadCreatedEvent'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Int']
  network: Network
  indexInBlock: Scalars['Int']
  thread: ForumThread
  threadId: Scalars['String']
  title: Scalars['String']
  text: Scalars['String']
}

export type ThreadCreatedEventConnection = {
  __typename: 'ThreadCreatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<ThreadCreatedEventEdge>
  pageInfo: PageInfo
}

export type ThreadCreatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  thread: Scalars['ID']
  title: Scalars['String']
  text: Scalars['String']
}

export type ThreadCreatedEventEdge = {
  __typename: 'ThreadCreatedEventEdge'
  node: ThreadCreatedEvent
  cursor: Scalars['String']
}

export enum ThreadCreatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  ThreadAsc = 'thread_ASC',
  ThreadDesc = 'thread_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
}

export type ThreadCreatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  thread?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
}

export type ThreadCreatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  thread_eq?: Maybe<Scalars['ID']>
  thread_in?: Maybe<Array<Scalars['ID']>>
  title_eq?: Maybe<Scalars['String']>
  title_contains?: Maybe<Scalars['String']>
  title_startsWith?: Maybe<Scalars['String']>
  title_endsWith?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Scalars['String']>>
  text_eq?: Maybe<Scalars['String']>
  text_contains?: Maybe<Scalars['String']>
  text_startsWith?: Maybe<Scalars['String']>
  text_endsWith?: Maybe<Scalars['String']>
  text_in?: Maybe<Array<Scalars['String']>>
  thread?: Maybe<ForumThreadWhereInput>
  AND?: Maybe<Array<ThreadCreatedEventWhereInput>>
  OR?: Maybe<Array<ThreadCreatedEventWhereInput>>
}

export type ThreadCreatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ThreadDeletedEvent = BaseGraphQlObject & {
  __typename: 'ThreadDeletedEvent'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Int']
  network: Network
  indexInBlock: Scalars['Int']
  thread: ForumThread
  threadId: Scalars['String']
}

export type ThreadDeletedEventConnection = {
  __typename: 'ThreadDeletedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<ThreadDeletedEventEdge>
  pageInfo: PageInfo
}

export type ThreadDeletedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  thread: Scalars['ID']
}

export type ThreadDeletedEventEdge = {
  __typename: 'ThreadDeletedEventEdge'
  node: ThreadDeletedEvent
  cursor: Scalars['String']
}

export enum ThreadDeletedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  ThreadAsc = 'thread_ASC',
  ThreadDesc = 'thread_DESC',
}

export type ThreadDeletedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  thread?: Maybe<Scalars['ID']>
}

export type ThreadDeletedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  thread_eq?: Maybe<Scalars['ID']>
  thread_in?: Maybe<Array<Scalars['ID']>>
  thread?: Maybe<ForumThreadWhereInput>
  AND?: Maybe<Array<ThreadDeletedEventWhereInput>>
  OR?: Maybe<Array<ThreadDeletedEventWhereInput>>
}

export type ThreadDeletedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ThreadModeratedEvent = BaseGraphQlObject & {
  __typename: 'ThreadModeratedEvent'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Int']
  network: Network
  indexInBlock: Scalars['Int']
  thread: ForumThread
  threadId: Scalars['String']
  rationale: Scalars['String']
  actor: Worker
  actorId: Scalars['String']
}

export type ThreadModeratedEventConnection = {
  __typename: 'ThreadModeratedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<ThreadModeratedEventEdge>
  pageInfo: PageInfo
}

export type ThreadModeratedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  thread: Scalars['ID']
  rationale: Scalars['String']
  actor: Scalars['ID']
}

export type ThreadModeratedEventEdge = {
  __typename: 'ThreadModeratedEventEdge'
  node: ThreadModeratedEvent
  cursor: Scalars['String']
}

export enum ThreadModeratedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  ThreadAsc = 'thread_ASC',
  ThreadDesc = 'thread_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
  ActorAsc = 'actor_ASC',
  ActorDesc = 'actor_DESC',
}

export type ThreadModeratedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  thread?: Maybe<Scalars['ID']>
  rationale?: Maybe<Scalars['String']>
  actor?: Maybe<Scalars['ID']>
}

export type ThreadModeratedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  thread_eq?: Maybe<Scalars['ID']>
  thread_in?: Maybe<Array<Scalars['ID']>>
  rationale_eq?: Maybe<Scalars['String']>
  rationale_contains?: Maybe<Scalars['String']>
  rationale_startsWith?: Maybe<Scalars['String']>
  rationale_endsWith?: Maybe<Scalars['String']>
  rationale_in?: Maybe<Array<Scalars['String']>>
  actor_eq?: Maybe<Scalars['ID']>
  actor_in?: Maybe<Array<Scalars['ID']>>
  thread?: Maybe<ForumThreadWhereInput>
  actor?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<ThreadModeratedEventWhereInput>>
  OR?: Maybe<Array<ThreadModeratedEventWhereInput>>
}

export type ThreadModeratedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ThreadMovedEvent = BaseGraphQlObject & {
  __typename: 'ThreadMovedEvent'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Int']
  network: Network
  indexInBlock: Scalars['Int']
  thread: ForumThread
  threadId: Scalars['String']
  oldCategory: ForumCategory
  oldCategoryId: Scalars['String']
  newCategory: ForumCategory
  newCategoryId: Scalars['String']
  actor: Worker
  actorId: Scalars['String']
}

export type ThreadMovedEventConnection = {
  __typename: 'ThreadMovedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<ThreadMovedEventEdge>
  pageInfo: PageInfo
}

export type ThreadMovedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  thread: Scalars['ID']
  oldCategory: Scalars['ID']
  newCategory: Scalars['ID']
  actor: Scalars['ID']
}

export type ThreadMovedEventEdge = {
  __typename: 'ThreadMovedEventEdge'
  node: ThreadMovedEvent
  cursor: Scalars['String']
}

export enum ThreadMovedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  ThreadAsc = 'thread_ASC',
  ThreadDesc = 'thread_DESC',
  OldCategoryAsc = 'oldCategory_ASC',
  OldCategoryDesc = 'oldCategory_DESC',
  NewCategoryAsc = 'newCategory_ASC',
  NewCategoryDesc = 'newCategory_DESC',
  ActorAsc = 'actor_ASC',
  ActorDesc = 'actor_DESC',
}

export type ThreadMovedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  thread?: Maybe<Scalars['ID']>
  oldCategory?: Maybe<Scalars['ID']>
  newCategory?: Maybe<Scalars['ID']>
  actor?: Maybe<Scalars['ID']>
}

export type ThreadMovedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  thread_eq?: Maybe<Scalars['ID']>
  thread_in?: Maybe<Array<Scalars['ID']>>
  oldCategory_eq?: Maybe<Scalars['ID']>
  oldCategory_in?: Maybe<Array<Scalars['ID']>>
  newCategory_eq?: Maybe<Scalars['ID']>
  newCategory_in?: Maybe<Array<Scalars['ID']>>
  actor_eq?: Maybe<Scalars['ID']>
  actor_in?: Maybe<Array<Scalars['ID']>>
  thread?: Maybe<ForumThreadWhereInput>
  oldCategory?: Maybe<ForumCategoryWhereInput>
  newCategory?: Maybe<ForumCategoryWhereInput>
  actor?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<ThreadMovedEventWhereInput>>
  OR?: Maybe<Array<ThreadMovedEventWhereInput>>
}

export type ThreadMovedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ThreadStatus = ThreadStatusActive | ThreadStatusLocked | ThreadStatusModerated | ThreadStatusRemoved

export type ThreadStatusActive = {
  __typename: 'ThreadStatusActive'
  phantom?: Maybe<Scalars['Int']>
}

export type ThreadStatusActiveCreateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type ThreadStatusActiveUpdateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type ThreadStatusActiveWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  phantom_eq?: Maybe<Scalars['Int']>
  phantom_gt?: Maybe<Scalars['Int']>
  phantom_gte?: Maybe<Scalars['Int']>
  phantom_lt?: Maybe<Scalars['Int']>
  phantom_lte?: Maybe<Scalars['Int']>
  phantom_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<ThreadStatusActiveWhereInput>>
  OR?: Maybe<Array<ThreadStatusActiveWhereInput>>
}

export type ThreadStatusActiveWhereUniqueInput = {
  id: Scalars['ID']
}

export type ThreadStatusLocked = {
  __typename: 'ThreadStatusLocked'
  threadDeletedEvent?: Maybe<ThreadDeletedEvent>
}

export type ThreadStatusModerated = {
  __typename: 'ThreadStatusModerated'
  threadModeratedEvent?: Maybe<ThreadModeratedEvent>
}

export type ThreadStatusRemoved = {
  __typename: 'ThreadStatusRemoved'
  threadDeletedEvent?: Maybe<ThreadDeletedEvent>
}

export type ThreadTitleUpdatedEvent = BaseGraphQlObject & {
  __typename: 'ThreadTitleUpdatedEvent'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Int']
  network: Network
  indexInBlock: Scalars['Int']
  thread: ForumThread
  threadId: Scalars['String']
  newTitle: Scalars['String']
}

export type ThreadTitleUpdatedEventConnection = {
  __typename: 'ThreadTitleUpdatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<ThreadTitleUpdatedEventEdge>
  pageInfo: PageInfo
}

export type ThreadTitleUpdatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  thread: Scalars['ID']
  newTitle: Scalars['String']
}

export type ThreadTitleUpdatedEventEdge = {
  __typename: 'ThreadTitleUpdatedEventEdge'
  node: ThreadTitleUpdatedEvent
  cursor: Scalars['String']
}

export enum ThreadTitleUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  ThreadAsc = 'thread_ASC',
  ThreadDesc = 'thread_DESC',
  NewTitleAsc = 'newTitle_ASC',
  NewTitleDesc = 'newTitle_DESC',
}

export type ThreadTitleUpdatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  thread?: Maybe<Scalars['ID']>
  newTitle?: Maybe<Scalars['String']>
}

export type ThreadTitleUpdatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  thread_eq?: Maybe<Scalars['ID']>
  thread_in?: Maybe<Array<Scalars['ID']>>
  newTitle_eq?: Maybe<Scalars['String']>
  newTitle_contains?: Maybe<Scalars['String']>
  newTitle_startsWith?: Maybe<Scalars['String']>
  newTitle_endsWith?: Maybe<Scalars['String']>
  newTitle_in?: Maybe<Array<Scalars['String']>>
  thread?: Maybe<ForumThreadWhereInput>
  AND?: Maybe<Array<ThreadTitleUpdatedEventWhereInput>>
  OR?: Maybe<Array<ThreadTitleUpdatedEventWhereInput>>
}

export type ThreadTitleUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ThreadsByTitleFtsOutput = {
  __typename: 'ThreadsByTitleFTSOutput'
  item: ThreadsByTitleSearchResult
  rank: Scalars['Float']
  isTypeOf: Scalars['String']
  highlight: Scalars['String']
}

export type ThreadsByTitleSearchResult = ForumThread

export type UnlockBlogPostProposalDetails = {
  __typename: 'UnlockBlogPostProposalDetails'
  blogPost: Scalars['String']
}

export type UnlockBlogPostProposalDetailsCreateInput = {
  blogPost: Scalars['String']
}

export type UnlockBlogPostProposalDetailsUpdateInput = {
  blogPost?: Maybe<Scalars['String']>
}

export type UnlockBlogPostProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  blogPost_eq?: Maybe<Scalars['String']>
  blogPost_contains?: Maybe<Scalars['String']>
  blogPost_startsWith?: Maybe<Scalars['String']>
  blogPost_endsWith?: Maybe<Scalars['String']>
  blogPost_in?: Maybe<Array<Scalars['String']>>
  AND?: Maybe<Array<UnlockBlogPostProposalDetailsWhereInput>>
  OR?: Maybe<Array<UnlockBlogPostProposalDetailsWhereInput>>
}

export type UnlockBlogPostProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type UpcomingOpeningAdded = {
  __typename: 'UpcomingOpeningAdded'
  upcomingOpeningId: Scalars['String']
}

export type UpcomingOpeningAddedCreateInput = {
  upcomingOpeningId: Scalars['String']
}

export type UpcomingOpeningAddedUpdateInput = {
  upcomingOpeningId?: Maybe<Scalars['String']>
}

export type UpcomingOpeningAddedWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  upcomingOpeningId_eq?: Maybe<Scalars['String']>
  upcomingOpeningId_contains?: Maybe<Scalars['String']>
  upcomingOpeningId_startsWith?: Maybe<Scalars['String']>
  upcomingOpeningId_endsWith?: Maybe<Scalars['String']>
  upcomingOpeningId_in?: Maybe<Array<Scalars['String']>>
  AND?: Maybe<Array<UpcomingOpeningAddedWhereInput>>
  OR?: Maybe<Array<UpcomingOpeningAddedWhereInput>>
}

export type UpcomingOpeningAddedWhereUniqueInput = {
  id: Scalars['ID']
}

export type UpcomingOpeningRemoved = {
  __typename: 'UpcomingOpeningRemoved'
  upcomingOpeningId: Scalars['String']
}

export type UpcomingOpeningRemovedCreateInput = {
  upcomingOpeningId: Scalars['String']
}

export type UpcomingOpeningRemovedUpdateInput = {
  upcomingOpeningId?: Maybe<Scalars['String']>
}

export type UpcomingOpeningRemovedWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  upcomingOpeningId_eq?: Maybe<Scalars['String']>
  upcomingOpeningId_contains?: Maybe<Scalars['String']>
  upcomingOpeningId_startsWith?: Maybe<Scalars['String']>
  upcomingOpeningId_endsWith?: Maybe<Scalars['String']>
  upcomingOpeningId_in?: Maybe<Array<Scalars['String']>>
  AND?: Maybe<Array<UpcomingOpeningRemovedWhereInput>>
  OR?: Maybe<Array<UpcomingOpeningRemovedWhereInput>>
}

export type UpcomingOpeningRemovedWhereUniqueInput = {
  id: Scalars['ID']
}

export type UpcomingWorkingGroupOpening = BaseGraphQlObject & {
  __typename: 'UpcomingWorkingGroupOpening'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  createdInEvent: StatusTextChangedEvent
  createdInEventId: Scalars['String']
  group: WorkingGroup
  groupId: Scalars['String']
  expectedStart?: Maybe<Scalars['DateTime']>
  stakeAmount?: Maybe<Scalars['BigInt']>
  rewardPerBlock?: Maybe<Scalars['BigInt']>
  metadata: WorkingGroupOpeningMetadata
  metadataId: Scalars['String']
}

export type UpcomingWorkingGroupOpeningConnection = {
  __typename: 'UpcomingWorkingGroupOpeningConnection'
  totalCount: Scalars['Int']
  edges: Array<UpcomingWorkingGroupOpeningEdge>
  pageInfo: PageInfo
}

export type UpcomingWorkingGroupOpeningCreateInput = {
  createdInEvent: Scalars['ID']
  group: Scalars['ID']
  expectedStart?: Maybe<Scalars['DateTime']>
  stakeAmount?: Maybe<Scalars['BigInt']>
  rewardPerBlock?: Maybe<Scalars['BigInt']>
  metadata: Scalars['ID']
}

export type UpcomingWorkingGroupOpeningEdge = {
  __typename: 'UpcomingWorkingGroupOpeningEdge'
  node: UpcomingWorkingGroupOpening
  cursor: Scalars['String']
}

export enum UpcomingWorkingGroupOpeningOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  CreatedInEventAsc = 'createdInEvent_ASC',
  CreatedInEventDesc = 'createdInEvent_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  ExpectedStartAsc = 'expectedStart_ASC',
  ExpectedStartDesc = 'expectedStart_DESC',
  StakeAmountAsc = 'stakeAmount_ASC',
  StakeAmountDesc = 'stakeAmount_DESC',
  RewardPerBlockAsc = 'rewardPerBlock_ASC',
  RewardPerBlockDesc = 'rewardPerBlock_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
}

export type UpcomingWorkingGroupOpeningUpdateInput = {
  createdInEvent?: Maybe<Scalars['ID']>
  group?: Maybe<Scalars['ID']>
  expectedStart?: Maybe<Scalars['DateTime']>
  stakeAmount?: Maybe<Scalars['BigInt']>
  rewardPerBlock?: Maybe<Scalars['BigInt']>
  metadata?: Maybe<Scalars['ID']>
}

export type UpcomingWorkingGroupOpeningWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  createdInEvent_eq?: Maybe<Scalars['ID']>
  createdInEvent_in?: Maybe<Array<Scalars['ID']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  expectedStart_eq?: Maybe<Scalars['DateTime']>
  expectedStart_lt?: Maybe<Scalars['DateTime']>
  expectedStart_lte?: Maybe<Scalars['DateTime']>
  expectedStart_gt?: Maybe<Scalars['DateTime']>
  expectedStart_gte?: Maybe<Scalars['DateTime']>
  stakeAmount_eq?: Maybe<Scalars['BigInt']>
  stakeAmount_gt?: Maybe<Scalars['BigInt']>
  stakeAmount_gte?: Maybe<Scalars['BigInt']>
  stakeAmount_lt?: Maybe<Scalars['BigInt']>
  stakeAmount_lte?: Maybe<Scalars['BigInt']>
  stakeAmount_in?: Maybe<Array<Scalars['BigInt']>>
  rewardPerBlock_eq?: Maybe<Scalars['BigInt']>
  rewardPerBlock_gt?: Maybe<Scalars['BigInt']>
  rewardPerBlock_gte?: Maybe<Scalars['BigInt']>
  rewardPerBlock_lt?: Maybe<Scalars['BigInt']>
  rewardPerBlock_lte?: Maybe<Scalars['BigInt']>
  rewardPerBlock_in?: Maybe<Array<Scalars['BigInt']>>
  metadata_eq?: Maybe<Scalars['ID']>
  metadata_in?: Maybe<Array<Scalars['ID']>>
  createdInEvent?: Maybe<StatusTextChangedEventWhereInput>
  group?: Maybe<WorkingGroupWhereInput>
  metadata?: Maybe<WorkingGroupOpeningMetadataWhereInput>
  AND?: Maybe<Array<UpcomingWorkingGroupOpeningWhereInput>>
  OR?: Maybe<Array<UpcomingWorkingGroupOpeningWhereInput>>
}

export type UpcomingWorkingGroupOpeningWhereUniqueInput = {
  id: Scalars['ID']
}

export type UpdateWorkingGroupBudgetProposalDetails = {
  __typename: 'UpdateWorkingGroupBudgetProposalDetails'
  amount: Scalars['BigInt']
  group?: Maybe<WorkingGroup>
}

export type UpdateWorkingGroupBudgetProposalDetailsCreateInput = {
  amount: Scalars['BigInt']
}

export type UpdateWorkingGroupBudgetProposalDetailsUpdateInput = {
  amount?: Maybe<Scalars['BigInt']>
}

export type UpdateWorkingGroupBudgetProposalDetailsWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  amount_eq?: Maybe<Scalars['BigInt']>
  amount_gt?: Maybe<Scalars['BigInt']>
  amount_gte?: Maybe<Scalars['BigInt']>
  amount_lt?: Maybe<Scalars['BigInt']>
  amount_lte?: Maybe<Scalars['BigInt']>
  amount_in?: Maybe<Array<Scalars['BigInt']>>
  AND?: Maybe<Array<UpdateWorkingGroupBudgetProposalDetailsWhereInput>>
  OR?: Maybe<Array<UpdateWorkingGroupBudgetProposalDetailsWhereInput>>
}

export type UpdateWorkingGroupBudgetProposalDetailsWhereUniqueInput = {
  id: Scalars['ID']
}

export type VetoProposalDetails = {
  __typename: 'VetoProposalDetails'
  proposal?: Maybe<Proposal>
}

export type VoteOnPollEvent = BaseGraphQlObject & {
  __typename: 'VoteOnPollEvent'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Int']
  network: Network
  indexInBlock: Scalars['Int']
  pollAlternative: ForumPollAlternative
  pollAlternativeId: Scalars['String']
  votingMember: Membership
  votingMemberId: Scalars['String']
}

export type VoteOnPollEventConnection = {
  __typename: 'VoteOnPollEventConnection'
  totalCount: Scalars['Int']
  edges: Array<VoteOnPollEventEdge>
  pageInfo: PageInfo
}

export type VoteOnPollEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  pollAlternative: Scalars['ID']
  votingMember: Scalars['ID']
}

export type VoteOnPollEventEdge = {
  __typename: 'VoteOnPollEventEdge'
  node: VoteOnPollEvent
  cursor: Scalars['String']
}

export enum VoteOnPollEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  PollAlternativeAsc = 'pollAlternative_ASC',
  PollAlternativeDesc = 'pollAlternative_DESC',
  VotingMemberAsc = 'votingMember_ASC',
  VotingMemberDesc = 'votingMember_DESC',
}

export type VoteOnPollEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  pollAlternative?: Maybe<Scalars['ID']>
  votingMember?: Maybe<Scalars['ID']>
}

export type VoteOnPollEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  pollAlternative_eq?: Maybe<Scalars['ID']>
  pollAlternative_in?: Maybe<Array<Scalars['ID']>>
  votingMember_eq?: Maybe<Scalars['ID']>
  votingMember_in?: Maybe<Array<Scalars['ID']>>
  pollAlternative?: Maybe<ForumPollAlternativeWhereInput>
  votingMember?: Maybe<MembershipWhereInput>
  AND?: Maybe<Array<VoteOnPollEventWhereInput>>
  OR?: Maybe<Array<VoteOnPollEventWhereInput>>
}

export type VoteOnPollEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type Worker = BaseGraphQlObject & {
  __typename: 'Worker'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  runtimeId: Scalars['Int']
  group: WorkingGroup
  groupId: Scalars['String']
  membership: Membership
  membershipId: Scalars['String']
  roleAccount: Scalars['String']
  rewardAccount: Scalars['String']
  stakeAccount: Scalars['String']
  status: WorkerStatus
  isLead: Scalars['Boolean']
  stake: Scalars['BigInt']
  rewardPerBlock: Scalars['BigInt']
  missingRewardAmount?: Maybe<Scalars['BigInt']>
  payouts: Array<RewardPaidEvent>
  slashes: Array<StakeSlashedEvent>
  entry: OpeningFilledEvent
  entryId: Scalars['String']
  application: WorkingGroupApplication
  applicationId: Scalars['String']
  storage?: Maybe<Scalars['String']>
  managedForumCategories: Array<ForumCategory>
  categorydeletedeventactor?: Maybe<Array<CategoryDeletedEvent>>
  categorymembershipofmoderatorupdatedeventmoderator?: Maybe<Array<CategoryMembershipOfModeratorUpdatedEvent>>
  categorystickythreadupdateeventactor?: Maybe<Array<CategoryStickyThreadUpdateEvent>>
  categoryupdatedeventactor?: Maybe<Array<CategoryUpdatedEvent>>
  leaderseteventworker?: Maybe<Array<LeaderSetEvent>>
  leaderunseteventleader?: Maybe<Array<LeaderUnsetEvent>>
  memberverificationstatusupdatedeventworker?: Maybe<Array<MemberVerificationStatusUpdatedEvent>>
  newmissedrewardlevelreachedeventworker?: Maybe<Array<NewMissedRewardLevelReachedEvent>>
  postmoderatedeventactor?: Maybe<Array<PostModeratedEvent>>
  stakedecreasedeventworker?: Maybe<Array<StakeDecreasedEvent>>
  stakeincreasedeventworker?: Maybe<Array<StakeIncreasedEvent>>
  terminatedleadereventworker?: Maybe<Array<TerminatedLeaderEvent>>
  terminatedworkereventworker?: Maybe<Array<TerminatedWorkerEvent>>
  threadmoderatedeventactor?: Maybe<Array<ThreadModeratedEvent>>
  threadmovedeventactor?: Maybe<Array<ThreadMovedEvent>>
  workerexitedeventworker?: Maybe<Array<WorkerExitedEvent>>
  workerrewardaccountupdatedeventworker?: Maybe<Array<WorkerRewardAccountUpdatedEvent>>
  workerrewardamountupdatedeventworker?: Maybe<Array<WorkerRewardAmountUpdatedEvent>>
  workerroleaccountupdatedeventworker?: Maybe<Array<WorkerRoleAccountUpdatedEvent>>
  workerstartedleavingeventworker?: Maybe<Array<WorkerStartedLeavingEvent>>
  workinggroupleader?: Maybe<Array<WorkingGroup>>
}

export type WorkerConnection = {
  __typename: 'WorkerConnection'
  totalCount: Scalars['Int']
  edges: Array<WorkerEdge>
  pageInfo: PageInfo
}

export type WorkerCreateInput = {
  runtimeId: Scalars['Float']
  group: Scalars['ID']
  membership: Scalars['ID']
  roleAccount: Scalars['String']
  rewardAccount: Scalars['String']
  stakeAccount: Scalars['String']
  status: Scalars['JSONObject']
  isLead: Scalars['Boolean']
  stake: Scalars['BigInt']
  rewardPerBlock: Scalars['BigInt']
  missingRewardAmount?: Maybe<Scalars['BigInt']>
  entry: Scalars['ID']
  application: Scalars['ID']
  storage?: Maybe<Scalars['String']>
}

export type WorkerEdge = {
  __typename: 'WorkerEdge'
  node: Worker
  cursor: Scalars['String']
}

export type WorkerExitedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'WorkerExitedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    worker: Worker
    workerId: Scalars['String']
  }

export type WorkerExitedEventConnection = {
  __typename: 'WorkerExitedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<WorkerExitedEventEdge>
  pageInfo: PageInfo
}

export type WorkerExitedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  worker: Scalars['ID']
}

export type WorkerExitedEventEdge = {
  __typename: 'WorkerExitedEventEdge'
  node: WorkerExitedEvent
  cursor: Scalars['String']
}

export enum WorkerExitedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
}

export type WorkerExitedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  worker?: Maybe<Scalars['ID']>
}

export type WorkerExitedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  worker_eq?: Maybe<Scalars['ID']>
  worker_in?: Maybe<Array<Scalars['ID']>>
  group?: Maybe<WorkingGroupWhereInput>
  worker?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<WorkerExitedEventWhereInput>>
  OR?: Maybe<Array<WorkerExitedEventWhereInput>>
}

export type WorkerExitedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export enum WorkerOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  RuntimeIdAsc = 'runtimeId_ASC',
  RuntimeIdDesc = 'runtimeId_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  MembershipAsc = 'membership_ASC',
  MembershipDesc = 'membership_DESC',
  RoleAccountAsc = 'roleAccount_ASC',
  RoleAccountDesc = 'roleAccount_DESC',
  RewardAccountAsc = 'rewardAccount_ASC',
  RewardAccountDesc = 'rewardAccount_DESC',
  StakeAccountAsc = 'stakeAccount_ASC',
  StakeAccountDesc = 'stakeAccount_DESC',
  IsLeadAsc = 'isLead_ASC',
  IsLeadDesc = 'isLead_DESC',
  StakeAsc = 'stake_ASC',
  StakeDesc = 'stake_DESC',
  RewardPerBlockAsc = 'rewardPerBlock_ASC',
  RewardPerBlockDesc = 'rewardPerBlock_DESC',
  MissingRewardAmountAsc = 'missingRewardAmount_ASC',
  MissingRewardAmountDesc = 'missingRewardAmount_DESC',
  EntryAsc = 'entry_ASC',
  EntryDesc = 'entry_DESC',
  ApplicationAsc = 'application_ASC',
  ApplicationDesc = 'application_DESC',
  StorageAsc = 'storage_ASC',
  StorageDesc = 'storage_DESC',
}

export type WorkerRewardAccountUpdatedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'WorkerRewardAccountUpdatedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    worker: Worker
    workerId: Scalars['String']
    newRewardAccount: Scalars['String']
  }

export type WorkerRewardAccountUpdatedEventConnection = {
  __typename: 'WorkerRewardAccountUpdatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<WorkerRewardAccountUpdatedEventEdge>
  pageInfo: PageInfo
}

export type WorkerRewardAccountUpdatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  worker: Scalars['ID']
  newRewardAccount: Scalars['String']
}

export type WorkerRewardAccountUpdatedEventEdge = {
  __typename: 'WorkerRewardAccountUpdatedEventEdge'
  node: WorkerRewardAccountUpdatedEvent
  cursor: Scalars['String']
}

export enum WorkerRewardAccountUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
  NewRewardAccountAsc = 'newRewardAccount_ASC',
  NewRewardAccountDesc = 'newRewardAccount_DESC',
}

export type WorkerRewardAccountUpdatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  worker?: Maybe<Scalars['ID']>
  newRewardAccount?: Maybe<Scalars['String']>
}

export type WorkerRewardAccountUpdatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  worker_eq?: Maybe<Scalars['ID']>
  worker_in?: Maybe<Array<Scalars['ID']>>
  newRewardAccount_eq?: Maybe<Scalars['String']>
  newRewardAccount_contains?: Maybe<Scalars['String']>
  newRewardAccount_startsWith?: Maybe<Scalars['String']>
  newRewardAccount_endsWith?: Maybe<Scalars['String']>
  newRewardAccount_in?: Maybe<Array<Scalars['String']>>
  group?: Maybe<WorkingGroupWhereInput>
  worker?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<WorkerRewardAccountUpdatedEventWhereInput>>
  OR?: Maybe<Array<WorkerRewardAccountUpdatedEventWhereInput>>
}

export type WorkerRewardAccountUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type WorkerRewardAmountUpdatedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'WorkerRewardAmountUpdatedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    worker: Worker
    workerId: Scalars['String']
    newRewardPerBlock: Scalars['BigInt']
  }

export type WorkerRewardAmountUpdatedEventConnection = {
  __typename: 'WorkerRewardAmountUpdatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<WorkerRewardAmountUpdatedEventEdge>
  pageInfo: PageInfo
}

export type WorkerRewardAmountUpdatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  worker: Scalars['ID']
  newRewardPerBlock: Scalars['BigInt']
}

export type WorkerRewardAmountUpdatedEventEdge = {
  __typename: 'WorkerRewardAmountUpdatedEventEdge'
  node: WorkerRewardAmountUpdatedEvent
  cursor: Scalars['String']
}

export enum WorkerRewardAmountUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
  NewRewardPerBlockAsc = 'newRewardPerBlock_ASC',
  NewRewardPerBlockDesc = 'newRewardPerBlock_DESC',
}

export type WorkerRewardAmountUpdatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  worker?: Maybe<Scalars['ID']>
  newRewardPerBlock?: Maybe<Scalars['BigInt']>
}

export type WorkerRewardAmountUpdatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  worker_eq?: Maybe<Scalars['ID']>
  worker_in?: Maybe<Array<Scalars['ID']>>
  newRewardPerBlock_eq?: Maybe<Scalars['BigInt']>
  newRewardPerBlock_gt?: Maybe<Scalars['BigInt']>
  newRewardPerBlock_gte?: Maybe<Scalars['BigInt']>
  newRewardPerBlock_lt?: Maybe<Scalars['BigInt']>
  newRewardPerBlock_lte?: Maybe<Scalars['BigInt']>
  newRewardPerBlock_in?: Maybe<Array<Scalars['BigInt']>>
  group?: Maybe<WorkingGroupWhereInput>
  worker?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<WorkerRewardAmountUpdatedEventWhereInput>>
  OR?: Maybe<Array<WorkerRewardAmountUpdatedEventWhereInput>>
}

export type WorkerRewardAmountUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type WorkerRoleAccountUpdatedEvent = Event &
  BaseGraphQlObject & {
    __typename: 'WorkerRoleAccountUpdatedEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    worker: Worker
    workerId: Scalars['String']
    newRoleAccount: Scalars['String']
  }

export type WorkerRoleAccountUpdatedEventConnection = {
  __typename: 'WorkerRoleAccountUpdatedEventConnection'
  totalCount: Scalars['Int']
  edges: Array<WorkerRoleAccountUpdatedEventEdge>
  pageInfo: PageInfo
}

export type WorkerRoleAccountUpdatedEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  worker: Scalars['ID']
  newRoleAccount: Scalars['String']
}

export type WorkerRoleAccountUpdatedEventEdge = {
  __typename: 'WorkerRoleAccountUpdatedEventEdge'
  node: WorkerRoleAccountUpdatedEvent
  cursor: Scalars['String']
}

export enum WorkerRoleAccountUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
  NewRoleAccountAsc = 'newRoleAccount_ASC',
  NewRoleAccountDesc = 'newRoleAccount_DESC',
}

export type WorkerRoleAccountUpdatedEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  worker?: Maybe<Scalars['ID']>
  newRoleAccount?: Maybe<Scalars['String']>
}

export type WorkerRoleAccountUpdatedEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  worker_eq?: Maybe<Scalars['ID']>
  worker_in?: Maybe<Array<Scalars['ID']>>
  newRoleAccount_eq?: Maybe<Scalars['String']>
  newRoleAccount_contains?: Maybe<Scalars['String']>
  newRoleAccount_startsWith?: Maybe<Scalars['String']>
  newRoleAccount_endsWith?: Maybe<Scalars['String']>
  newRoleAccount_in?: Maybe<Array<Scalars['String']>>
  group?: Maybe<WorkingGroupWhereInput>
  worker?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<WorkerRoleAccountUpdatedEventWhereInput>>
  OR?: Maybe<Array<WorkerRoleAccountUpdatedEventWhereInput>>
}

export type WorkerRoleAccountUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type WorkerStartedLeavingEvent = Event &
  BaseGraphQlObject & {
    __typename: 'WorkerStartedLeavingEvent'
    inExtrinsic?: Maybe<Scalars['String']>
    inBlock: Scalars['Int']
    network: Network
    indexInBlock: Scalars['Int']
    type?: Maybe<EventTypeOptions>
    id: Scalars['ID']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    group: WorkingGroup
    groupId: Scalars['String']
    worker: Worker
    workerId: Scalars['String']
    rationale?: Maybe<Scalars['String']>
  }

export type WorkerStartedLeavingEventConnection = {
  __typename: 'WorkerStartedLeavingEventConnection'
  totalCount: Scalars['Int']
  edges: Array<WorkerStartedLeavingEventEdge>
  pageInfo: PageInfo
}

export type WorkerStartedLeavingEventCreateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock: Scalars['Float']
  network: Network
  indexInBlock: Scalars['Float']
  group: Scalars['ID']
  worker: Scalars['ID']
  rationale?: Maybe<Scalars['String']>
}

export type WorkerStartedLeavingEventEdge = {
  __typename: 'WorkerStartedLeavingEventEdge'
  node: WorkerStartedLeavingEvent
  cursor: Scalars['String']
}

export enum WorkerStartedLeavingEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
}

export type WorkerStartedLeavingEventUpdateInput = {
  inExtrinsic?: Maybe<Scalars['String']>
  inBlock?: Maybe<Scalars['Float']>
  network?: Maybe<Network>
  indexInBlock?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  worker?: Maybe<Scalars['ID']>
  rationale?: Maybe<Scalars['String']>
}

export type WorkerStartedLeavingEventWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  inExtrinsic_eq?: Maybe<Scalars['String']>
  inExtrinsic_contains?: Maybe<Scalars['String']>
  inExtrinsic_startsWith?: Maybe<Scalars['String']>
  inExtrinsic_endsWith?: Maybe<Scalars['String']>
  inExtrinsic_in?: Maybe<Array<Scalars['String']>>
  inBlock_eq?: Maybe<Scalars['Int']>
  inBlock_gt?: Maybe<Scalars['Int']>
  inBlock_gte?: Maybe<Scalars['Int']>
  inBlock_lt?: Maybe<Scalars['Int']>
  inBlock_lte?: Maybe<Scalars['Int']>
  inBlock_in?: Maybe<Array<Scalars['Int']>>
  network_eq?: Maybe<Network>
  network_in?: Maybe<Array<Network>>
  indexInBlock_eq?: Maybe<Scalars['Int']>
  indexInBlock_gt?: Maybe<Scalars['Int']>
  indexInBlock_gte?: Maybe<Scalars['Int']>
  indexInBlock_lt?: Maybe<Scalars['Int']>
  indexInBlock_lte?: Maybe<Scalars['Int']>
  indexInBlock_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  worker_eq?: Maybe<Scalars['ID']>
  worker_in?: Maybe<Array<Scalars['ID']>>
  rationale_eq?: Maybe<Scalars['String']>
  rationale_contains?: Maybe<Scalars['String']>
  rationale_startsWith?: Maybe<Scalars['String']>
  rationale_endsWith?: Maybe<Scalars['String']>
  rationale_in?: Maybe<Array<Scalars['String']>>
  group?: Maybe<WorkingGroupWhereInput>
  worker?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<WorkerStartedLeavingEventWhereInput>>
  OR?: Maybe<Array<WorkerStartedLeavingEventWhereInput>>
}

export type WorkerStartedLeavingEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type WorkerStatus = WorkerStatusActive | WorkerStatusLeft | WorkerStatusTerminated

export type WorkerStatusActive = {
  __typename: 'WorkerStatusActive'
  phantom?: Maybe<Scalars['Int']>
}

export type WorkerStatusActiveCreateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type WorkerStatusActiveUpdateInput = {
  phantom?: Maybe<Scalars['Float']>
}

export type WorkerStatusActiveWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  phantom_eq?: Maybe<Scalars['Int']>
  phantom_gt?: Maybe<Scalars['Int']>
  phantom_gte?: Maybe<Scalars['Int']>
  phantom_lt?: Maybe<Scalars['Int']>
  phantom_lte?: Maybe<Scalars['Int']>
  phantom_in?: Maybe<Array<Scalars['Int']>>
  AND?: Maybe<Array<WorkerStatusActiveWhereInput>>
  OR?: Maybe<Array<WorkerStatusActiveWhereInput>>
}

export type WorkerStatusActiveWhereUniqueInput = {
  id: Scalars['ID']
}

export type WorkerStatusLeft = {
  __typename: 'WorkerStatusLeft'
  workerStartedLeavingEvent?: Maybe<WorkerStartedLeavingEvent>
  workerExitedEvent?: Maybe<WorkerExitedEvent>
}

export type WorkerStatusTerminated = {
  __typename: 'WorkerStatusTerminated'
  terminatedWorkerEvent?: Maybe<TerminatedWorkerEvent>
}

export type WorkerUpdateInput = {
  runtimeId?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  membership?: Maybe<Scalars['ID']>
  roleAccount?: Maybe<Scalars['String']>
  rewardAccount?: Maybe<Scalars['String']>
  stakeAccount?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['JSONObject']>
  isLead?: Maybe<Scalars['Boolean']>
  stake?: Maybe<Scalars['BigInt']>
  rewardPerBlock?: Maybe<Scalars['BigInt']>
  missingRewardAmount?: Maybe<Scalars['BigInt']>
  entry?: Maybe<Scalars['ID']>
  application?: Maybe<Scalars['ID']>
  storage?: Maybe<Scalars['String']>
}

export type WorkerWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  runtimeId_eq?: Maybe<Scalars['Int']>
  runtimeId_gt?: Maybe<Scalars['Int']>
  runtimeId_gte?: Maybe<Scalars['Int']>
  runtimeId_lt?: Maybe<Scalars['Int']>
  runtimeId_lte?: Maybe<Scalars['Int']>
  runtimeId_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  membership_eq?: Maybe<Scalars['ID']>
  membership_in?: Maybe<Array<Scalars['ID']>>
  roleAccount_eq?: Maybe<Scalars['String']>
  roleAccount_contains?: Maybe<Scalars['String']>
  roleAccount_startsWith?: Maybe<Scalars['String']>
  roleAccount_endsWith?: Maybe<Scalars['String']>
  roleAccount_in?: Maybe<Array<Scalars['String']>>
  rewardAccount_eq?: Maybe<Scalars['String']>
  rewardAccount_contains?: Maybe<Scalars['String']>
  rewardAccount_startsWith?: Maybe<Scalars['String']>
  rewardAccount_endsWith?: Maybe<Scalars['String']>
  rewardAccount_in?: Maybe<Array<Scalars['String']>>
  stakeAccount_eq?: Maybe<Scalars['String']>
  stakeAccount_contains?: Maybe<Scalars['String']>
  stakeAccount_startsWith?: Maybe<Scalars['String']>
  stakeAccount_endsWith?: Maybe<Scalars['String']>
  stakeAccount_in?: Maybe<Array<Scalars['String']>>
  status_json?: Maybe<Scalars['JSONObject']>
  isLead_eq?: Maybe<Scalars['Boolean']>
  isLead_in?: Maybe<Array<Scalars['Boolean']>>
  stake_eq?: Maybe<Scalars['BigInt']>
  stake_gt?: Maybe<Scalars['BigInt']>
  stake_gte?: Maybe<Scalars['BigInt']>
  stake_lt?: Maybe<Scalars['BigInt']>
  stake_lte?: Maybe<Scalars['BigInt']>
  stake_in?: Maybe<Array<Scalars['BigInt']>>
  rewardPerBlock_eq?: Maybe<Scalars['BigInt']>
  rewardPerBlock_gt?: Maybe<Scalars['BigInt']>
  rewardPerBlock_gte?: Maybe<Scalars['BigInt']>
  rewardPerBlock_lt?: Maybe<Scalars['BigInt']>
  rewardPerBlock_lte?: Maybe<Scalars['BigInt']>
  rewardPerBlock_in?: Maybe<Array<Scalars['BigInt']>>
  missingRewardAmount_eq?: Maybe<Scalars['BigInt']>
  missingRewardAmount_gt?: Maybe<Scalars['BigInt']>
  missingRewardAmount_gte?: Maybe<Scalars['BigInt']>
  missingRewardAmount_lt?: Maybe<Scalars['BigInt']>
  missingRewardAmount_lte?: Maybe<Scalars['BigInt']>
  missingRewardAmount_in?: Maybe<Array<Scalars['BigInt']>>
  entry_eq?: Maybe<Scalars['ID']>
  entry_in?: Maybe<Array<Scalars['ID']>>
  application_eq?: Maybe<Scalars['ID']>
  application_in?: Maybe<Array<Scalars['ID']>>
  storage_eq?: Maybe<Scalars['String']>
  storage_contains?: Maybe<Scalars['String']>
  storage_startsWith?: Maybe<Scalars['String']>
  storage_endsWith?: Maybe<Scalars['String']>
  storage_in?: Maybe<Array<Scalars['String']>>
  group?: Maybe<WorkingGroupWhereInput>
  membership?: Maybe<MembershipWhereInput>
  payouts_none?: Maybe<RewardPaidEventWhereInput>
  payouts_some?: Maybe<RewardPaidEventWhereInput>
  payouts_every?: Maybe<RewardPaidEventWhereInput>
  slashes_none?: Maybe<StakeSlashedEventWhereInput>
  slashes_some?: Maybe<StakeSlashedEventWhereInput>
  slashes_every?: Maybe<StakeSlashedEventWhereInput>
  entry?: Maybe<OpeningFilledEventWhereInput>
  application?: Maybe<WorkingGroupApplicationWhereInput>
  managedForumCategories_none?: Maybe<ForumCategoryWhereInput>
  managedForumCategories_some?: Maybe<ForumCategoryWhereInput>
  managedForumCategories_every?: Maybe<ForumCategoryWhereInput>
  categorydeletedeventactor_none?: Maybe<CategoryDeletedEventWhereInput>
  categorydeletedeventactor_some?: Maybe<CategoryDeletedEventWhereInput>
  categorydeletedeventactor_every?: Maybe<CategoryDeletedEventWhereInput>
  categorymembershipofmoderatorupdatedeventmoderator_none?: Maybe<CategoryMembershipOfModeratorUpdatedEventWhereInput>
  categorymembershipofmoderatorupdatedeventmoderator_some?: Maybe<CategoryMembershipOfModeratorUpdatedEventWhereInput>
  categorymembershipofmoderatorupdatedeventmoderator_every?: Maybe<CategoryMembershipOfModeratorUpdatedEventWhereInput>
  categorystickythreadupdateeventactor_none?: Maybe<CategoryStickyThreadUpdateEventWhereInput>
  categorystickythreadupdateeventactor_some?: Maybe<CategoryStickyThreadUpdateEventWhereInput>
  categorystickythreadupdateeventactor_every?: Maybe<CategoryStickyThreadUpdateEventWhereInput>
  categoryupdatedeventactor_none?: Maybe<CategoryUpdatedEventWhereInput>
  categoryupdatedeventactor_some?: Maybe<CategoryUpdatedEventWhereInput>
  categoryupdatedeventactor_every?: Maybe<CategoryUpdatedEventWhereInput>
  leaderseteventworker_none?: Maybe<LeaderSetEventWhereInput>
  leaderseteventworker_some?: Maybe<LeaderSetEventWhereInput>
  leaderseteventworker_every?: Maybe<LeaderSetEventWhereInput>
  leaderunseteventleader_none?: Maybe<LeaderUnsetEventWhereInput>
  leaderunseteventleader_some?: Maybe<LeaderUnsetEventWhereInput>
  leaderunseteventleader_every?: Maybe<LeaderUnsetEventWhereInput>
  memberverificationstatusupdatedeventworker_none?: Maybe<MemberVerificationStatusUpdatedEventWhereInput>
  memberverificationstatusupdatedeventworker_some?: Maybe<MemberVerificationStatusUpdatedEventWhereInput>
  memberverificationstatusupdatedeventworker_every?: Maybe<MemberVerificationStatusUpdatedEventWhereInput>
  newmissedrewardlevelreachedeventworker_none?: Maybe<NewMissedRewardLevelReachedEventWhereInput>
  newmissedrewardlevelreachedeventworker_some?: Maybe<NewMissedRewardLevelReachedEventWhereInput>
  newmissedrewardlevelreachedeventworker_every?: Maybe<NewMissedRewardLevelReachedEventWhereInput>
  postmoderatedeventactor_none?: Maybe<PostModeratedEventWhereInput>
  postmoderatedeventactor_some?: Maybe<PostModeratedEventWhereInput>
  postmoderatedeventactor_every?: Maybe<PostModeratedEventWhereInput>
  stakedecreasedeventworker_none?: Maybe<StakeDecreasedEventWhereInput>
  stakedecreasedeventworker_some?: Maybe<StakeDecreasedEventWhereInput>
  stakedecreasedeventworker_every?: Maybe<StakeDecreasedEventWhereInput>
  stakeincreasedeventworker_none?: Maybe<StakeIncreasedEventWhereInput>
  stakeincreasedeventworker_some?: Maybe<StakeIncreasedEventWhereInput>
  stakeincreasedeventworker_every?: Maybe<StakeIncreasedEventWhereInput>
  terminatedleadereventworker_none?: Maybe<TerminatedLeaderEventWhereInput>
  terminatedleadereventworker_some?: Maybe<TerminatedLeaderEventWhereInput>
  terminatedleadereventworker_every?: Maybe<TerminatedLeaderEventWhereInput>
  terminatedworkereventworker_none?: Maybe<TerminatedWorkerEventWhereInput>
  terminatedworkereventworker_some?: Maybe<TerminatedWorkerEventWhereInput>
  terminatedworkereventworker_every?: Maybe<TerminatedWorkerEventWhereInput>
  threadmoderatedeventactor_none?: Maybe<ThreadModeratedEventWhereInput>
  threadmoderatedeventactor_some?: Maybe<ThreadModeratedEventWhereInput>
  threadmoderatedeventactor_every?: Maybe<ThreadModeratedEventWhereInput>
  threadmovedeventactor_none?: Maybe<ThreadMovedEventWhereInput>
  threadmovedeventactor_some?: Maybe<ThreadMovedEventWhereInput>
  threadmovedeventactor_every?: Maybe<ThreadMovedEventWhereInput>
  workerexitedeventworker_none?: Maybe<WorkerExitedEventWhereInput>
  workerexitedeventworker_some?: Maybe<WorkerExitedEventWhereInput>
  workerexitedeventworker_every?: Maybe<WorkerExitedEventWhereInput>
  workerrewardaccountupdatedeventworker_none?: Maybe<WorkerRewardAccountUpdatedEventWhereInput>
  workerrewardaccountupdatedeventworker_some?: Maybe<WorkerRewardAccountUpdatedEventWhereInput>
  workerrewardaccountupdatedeventworker_every?: Maybe<WorkerRewardAccountUpdatedEventWhereInput>
  workerrewardamountupdatedeventworker_none?: Maybe<WorkerRewardAmountUpdatedEventWhereInput>
  workerrewardamountupdatedeventworker_some?: Maybe<WorkerRewardAmountUpdatedEventWhereInput>
  workerrewardamountupdatedeventworker_every?: Maybe<WorkerRewardAmountUpdatedEventWhereInput>
  workerroleaccountupdatedeventworker_none?: Maybe<WorkerRoleAccountUpdatedEventWhereInput>
  workerroleaccountupdatedeventworker_some?: Maybe<WorkerRoleAccountUpdatedEventWhereInput>
  workerroleaccountupdatedeventworker_every?: Maybe<WorkerRoleAccountUpdatedEventWhereInput>
  workerstartedleavingeventworker_none?: Maybe<WorkerStartedLeavingEventWhereInput>
  workerstartedleavingeventworker_some?: Maybe<WorkerStartedLeavingEventWhereInput>
  workerstartedleavingeventworker_every?: Maybe<WorkerStartedLeavingEventWhereInput>
  workinggroupleader_none?: Maybe<WorkingGroupWhereInput>
  workinggroupleader_some?: Maybe<WorkingGroupWhereInput>
  workinggroupleader_every?: Maybe<WorkingGroupWhereInput>
  AND?: Maybe<Array<WorkerWhereInput>>
  OR?: Maybe<Array<WorkerWhereInput>>
}

export type WorkerWhereUniqueInput = {
  id: Scalars['ID']
}

export type WorkingGroup = BaseGraphQlObject & {
  __typename: 'WorkingGroup'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  name: Scalars['String']
  metadata?: Maybe<WorkingGroupMetadata>
  metadataId?: Maybe<Scalars['String']>
  leader?: Maybe<Worker>
  leaderId?: Maybe<Scalars['String']>
  workers: Array<Worker>
  openings: Array<WorkingGroupOpening>
  budget: Scalars['BigInt']
  applicationwithdrawneventgroup?: Maybe<Array<ApplicationWithdrawnEvent>>
  appliedonopeningeventgroup?: Maybe<Array<AppliedOnOpeningEvent>>
  budgetseteventgroup?: Maybe<Array<BudgetSetEvent>>
  budgetspendingeventgroup?: Maybe<Array<BudgetSpendingEvent>>
  leaderseteventgroup?: Maybe<Array<LeaderSetEvent>>
  leaderunseteventgroup?: Maybe<Array<LeaderUnsetEvent>>
  newmissedrewardlevelreachedeventgroup?: Maybe<Array<NewMissedRewardLevelReachedEvent>>
  openingaddedeventgroup?: Maybe<Array<OpeningAddedEvent>>
  openingcanceledeventgroup?: Maybe<Array<OpeningCanceledEvent>>
  openingfilledeventgroup?: Maybe<Array<OpeningFilledEvent>>
  rewardpaideventgroup?: Maybe<Array<RewardPaidEvent>>
  stakedecreasedeventgroup?: Maybe<Array<StakeDecreasedEvent>>
  stakeincreasedeventgroup?: Maybe<Array<StakeIncreasedEvent>>
  stakeslashedeventgroup?: Maybe<Array<StakeSlashedEvent>>
  statustextchangedeventgroup?: Maybe<Array<StatusTextChangedEvent>>
  terminatedleadereventgroup?: Maybe<Array<TerminatedLeaderEvent>>
  terminatedworkereventgroup?: Maybe<Array<TerminatedWorkerEvent>>
  upcomingworkinggroupopeninggroup?: Maybe<Array<UpcomingWorkingGroupOpening>>
  workerexitedeventgroup?: Maybe<Array<WorkerExitedEvent>>
  workerrewardaccountupdatedeventgroup?: Maybe<Array<WorkerRewardAccountUpdatedEvent>>
  workerrewardamountupdatedeventgroup?: Maybe<Array<WorkerRewardAmountUpdatedEvent>>
  workerroleaccountupdatedeventgroup?: Maybe<Array<WorkerRoleAccountUpdatedEvent>>
  workerstartedleavingeventgroup?: Maybe<Array<WorkerStartedLeavingEvent>>
  workinggroupmetadatagroup?: Maybe<Array<WorkingGroupMetadata>>
}

export type WorkingGroupApplication = BaseGraphQlObject & {
  __typename: 'WorkingGroupApplication'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  runtimeId: Scalars['Int']
  opening: WorkingGroupOpening
  openingId: Scalars['String']
  applicant: Membership
  applicantId: Scalars['String']
  stake: Scalars['BigInt']
  roleAccount: Scalars['String']
  rewardAccount: Scalars['String']
  stakingAccount: Scalars['String']
  answers: Array<ApplicationFormQuestionAnswer>
  status: WorkingGroupApplicationStatus
  createdInEvent: AppliedOnOpeningEvent
  applicationwithdrawneventapplication?: Maybe<Array<ApplicationWithdrawnEvent>>
  workerapplication?: Maybe<Array<Worker>>
}

export type WorkingGroupApplicationConnection = {
  __typename: 'WorkingGroupApplicationConnection'
  totalCount: Scalars['Int']
  edges: Array<WorkingGroupApplicationEdge>
  pageInfo: PageInfo
}

export type WorkingGroupApplicationCreateInput = {
  runtimeId: Scalars['Float']
  opening: Scalars['ID']
  applicant: Scalars['ID']
  stake: Scalars['BigInt']
  roleAccount: Scalars['String']
  rewardAccount: Scalars['String']
  stakingAccount: Scalars['String']
  status: Scalars['JSONObject']
}

export type WorkingGroupApplicationEdge = {
  __typename: 'WorkingGroupApplicationEdge'
  node: WorkingGroupApplication
  cursor: Scalars['String']
}

export enum WorkingGroupApplicationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  RuntimeIdAsc = 'runtimeId_ASC',
  RuntimeIdDesc = 'runtimeId_DESC',
  OpeningAsc = 'opening_ASC',
  OpeningDesc = 'opening_DESC',
  ApplicantAsc = 'applicant_ASC',
  ApplicantDesc = 'applicant_DESC',
  StakeAsc = 'stake_ASC',
  StakeDesc = 'stake_DESC',
  RoleAccountAsc = 'roleAccount_ASC',
  RoleAccountDesc = 'roleAccount_DESC',
  RewardAccountAsc = 'rewardAccount_ASC',
  RewardAccountDesc = 'rewardAccount_DESC',
  StakingAccountAsc = 'stakingAccount_ASC',
  StakingAccountDesc = 'stakingAccount_DESC',
}

export type WorkingGroupApplicationStatus =
  | ApplicationStatusPending
  | ApplicationStatusAccepted
  | ApplicationStatusRejected
  | ApplicationStatusWithdrawn
  | ApplicationStatusCancelled

export type WorkingGroupApplicationUpdateInput = {
  runtimeId?: Maybe<Scalars['Float']>
  opening?: Maybe<Scalars['ID']>
  applicant?: Maybe<Scalars['ID']>
  stake?: Maybe<Scalars['BigInt']>
  roleAccount?: Maybe<Scalars['String']>
  rewardAccount?: Maybe<Scalars['String']>
  stakingAccount?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['JSONObject']>
}

export type WorkingGroupApplicationWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  runtimeId_eq?: Maybe<Scalars['Int']>
  runtimeId_gt?: Maybe<Scalars['Int']>
  runtimeId_gte?: Maybe<Scalars['Int']>
  runtimeId_lt?: Maybe<Scalars['Int']>
  runtimeId_lte?: Maybe<Scalars['Int']>
  runtimeId_in?: Maybe<Array<Scalars['Int']>>
  opening_eq?: Maybe<Scalars['ID']>
  opening_in?: Maybe<Array<Scalars['ID']>>
  applicant_eq?: Maybe<Scalars['ID']>
  applicant_in?: Maybe<Array<Scalars['ID']>>
  stake_eq?: Maybe<Scalars['BigInt']>
  stake_gt?: Maybe<Scalars['BigInt']>
  stake_gte?: Maybe<Scalars['BigInt']>
  stake_lt?: Maybe<Scalars['BigInt']>
  stake_lte?: Maybe<Scalars['BigInt']>
  stake_in?: Maybe<Array<Scalars['BigInt']>>
  roleAccount_eq?: Maybe<Scalars['String']>
  roleAccount_contains?: Maybe<Scalars['String']>
  roleAccount_startsWith?: Maybe<Scalars['String']>
  roleAccount_endsWith?: Maybe<Scalars['String']>
  roleAccount_in?: Maybe<Array<Scalars['String']>>
  rewardAccount_eq?: Maybe<Scalars['String']>
  rewardAccount_contains?: Maybe<Scalars['String']>
  rewardAccount_startsWith?: Maybe<Scalars['String']>
  rewardAccount_endsWith?: Maybe<Scalars['String']>
  rewardAccount_in?: Maybe<Array<Scalars['String']>>
  stakingAccount_eq?: Maybe<Scalars['String']>
  stakingAccount_contains?: Maybe<Scalars['String']>
  stakingAccount_startsWith?: Maybe<Scalars['String']>
  stakingAccount_endsWith?: Maybe<Scalars['String']>
  stakingAccount_in?: Maybe<Array<Scalars['String']>>
  status_json?: Maybe<Scalars['JSONObject']>
  opening?: Maybe<WorkingGroupOpeningWhereInput>
  applicant?: Maybe<MembershipWhereInput>
  answers_none?: Maybe<ApplicationFormQuestionAnswerWhereInput>
  answers_some?: Maybe<ApplicationFormQuestionAnswerWhereInput>
  answers_every?: Maybe<ApplicationFormQuestionAnswerWhereInput>
  createdInEvent?: Maybe<AppliedOnOpeningEventWhereInput>
  applicationwithdrawneventapplication_none?: Maybe<ApplicationWithdrawnEventWhereInput>
  applicationwithdrawneventapplication_some?: Maybe<ApplicationWithdrawnEventWhereInput>
  applicationwithdrawneventapplication_every?: Maybe<ApplicationWithdrawnEventWhereInput>
  workerapplication_none?: Maybe<WorkerWhereInput>
  workerapplication_some?: Maybe<WorkerWhereInput>
  workerapplication_every?: Maybe<WorkerWhereInput>
  AND?: Maybe<Array<WorkingGroupApplicationWhereInput>>
  OR?: Maybe<Array<WorkingGroupApplicationWhereInput>>
}

export type WorkingGroupApplicationWhereUniqueInput = {
  id: Scalars['ID']
}

export type WorkingGroupConnection = {
  __typename: 'WorkingGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<WorkingGroupEdge>
  pageInfo: PageInfo
}

export type WorkingGroupCreateInput = {
  name: Scalars['String']
  metadata?: Maybe<Scalars['ID']>
  leader?: Maybe<Scalars['ID']>
  budget: Scalars['BigInt']
}

export type WorkingGroupEdge = {
  __typename: 'WorkingGroupEdge'
  node: WorkingGroup
  cursor: Scalars['String']
}

export type WorkingGroupMetadata = BaseGraphQlObject & {
  __typename: 'WorkingGroupMetadata'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  status?: Maybe<Scalars['String']>
  statusMessage?: Maybe<Scalars['String']>
  about?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  setInEvent: StatusTextChangedEvent
  setInEventId: Scalars['String']
  group: WorkingGroup
  groupId: Scalars['String']
  workinggroupmetadata?: Maybe<Array<WorkingGroup>>
}

export type WorkingGroupMetadataActionResult =
  | UpcomingOpeningAdded
  | UpcomingOpeningRemoved
  | WorkingGroupMetadataSet
  | InvalidActionMetadata

export type WorkingGroupMetadataConnection = {
  __typename: 'WorkingGroupMetadataConnection'
  totalCount: Scalars['Int']
  edges: Array<WorkingGroupMetadataEdge>
  pageInfo: PageInfo
}

export type WorkingGroupMetadataCreateInput = {
  status?: Maybe<Scalars['String']>
  statusMessage?: Maybe<Scalars['String']>
  about?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  setInEvent: Scalars['ID']
  group: Scalars['ID']
}

export type WorkingGroupMetadataEdge = {
  __typename: 'WorkingGroupMetadataEdge'
  node: WorkingGroupMetadata
  cursor: Scalars['String']
}

export enum WorkingGroupMetadataOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  StatusMessageAsc = 'statusMessage_ASC',
  StatusMessageDesc = 'statusMessage_DESC',
  AboutAsc = 'about_ASC',
  AboutDesc = 'about_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SetInEventAsc = 'setInEvent_ASC',
  SetInEventDesc = 'setInEvent_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
}

export type WorkingGroupMetadataSet = {
  __typename: 'WorkingGroupMetadataSet'
  metadata?: Maybe<WorkingGroupMetadata>
}

export type WorkingGroupMetadataUpdateInput = {
  status?: Maybe<Scalars['String']>
  statusMessage?: Maybe<Scalars['String']>
  about?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  setInEvent?: Maybe<Scalars['ID']>
  group?: Maybe<Scalars['ID']>
}

export type WorkingGroupMetadataWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  status_eq?: Maybe<Scalars['String']>
  status_contains?: Maybe<Scalars['String']>
  status_startsWith?: Maybe<Scalars['String']>
  status_endsWith?: Maybe<Scalars['String']>
  status_in?: Maybe<Array<Scalars['String']>>
  statusMessage_eq?: Maybe<Scalars['String']>
  statusMessage_contains?: Maybe<Scalars['String']>
  statusMessage_startsWith?: Maybe<Scalars['String']>
  statusMessage_endsWith?: Maybe<Scalars['String']>
  statusMessage_in?: Maybe<Array<Scalars['String']>>
  about_eq?: Maybe<Scalars['String']>
  about_contains?: Maybe<Scalars['String']>
  about_startsWith?: Maybe<Scalars['String']>
  about_endsWith?: Maybe<Scalars['String']>
  about_in?: Maybe<Array<Scalars['String']>>
  description_eq?: Maybe<Scalars['String']>
  description_contains?: Maybe<Scalars['String']>
  description_startsWith?: Maybe<Scalars['String']>
  description_endsWith?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Scalars['String']>>
  setInEvent_eq?: Maybe<Scalars['ID']>
  setInEvent_in?: Maybe<Array<Scalars['ID']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  setInEvent?: Maybe<StatusTextChangedEventWhereInput>
  group?: Maybe<WorkingGroupWhereInput>
  workinggroupmetadata_none?: Maybe<WorkingGroupWhereInput>
  workinggroupmetadata_some?: Maybe<WorkingGroupWhereInput>
  workinggroupmetadata_every?: Maybe<WorkingGroupWhereInput>
  AND?: Maybe<Array<WorkingGroupMetadataWhereInput>>
  OR?: Maybe<Array<WorkingGroupMetadataWhereInput>>
}

export type WorkingGroupMetadataWhereUniqueInput = {
  id: Scalars['ID']
}

export type WorkingGroupOpening = BaseGraphQlObject & {
  __typename: 'WorkingGroupOpening'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  runtimeId: Scalars['Int']
  group: WorkingGroup
  groupId: Scalars['String']
  applications: Array<WorkingGroupApplication>
  type: WorkingGroupOpeningType
  status: WorkingGroupOpeningStatus
  metadata: WorkingGroupOpeningMetadata
  metadataId: Scalars['String']
  stakeAmount: Scalars['BigInt']
  unstakingPeriod: Scalars['Int']
  rewardPerBlock: Scalars['BigInt']
  createdInEvent: OpeningAddedEvent
  appliedonopeningeventopening?: Maybe<Array<AppliedOnOpeningEvent>>
  openingcanceledeventopening?: Maybe<Array<OpeningCanceledEvent>>
  openingfilledeventopening?: Maybe<Array<OpeningFilledEvent>>
}

export type WorkingGroupOpeningConnection = {
  __typename: 'WorkingGroupOpeningConnection'
  totalCount: Scalars['Int']
  edges: Array<WorkingGroupOpeningEdge>
  pageInfo: PageInfo
}

export type WorkingGroupOpeningCreateInput = {
  createdAt: Scalars['DateTime']
  runtimeId: Scalars['Float']
  group: Scalars['ID']
  type: WorkingGroupOpeningType
  status: Scalars['JSONObject']
  metadata: Scalars['ID']
  stakeAmount: Scalars['BigInt']
  unstakingPeriod: Scalars['Float']
  rewardPerBlock: Scalars['BigInt']
}

export type WorkingGroupOpeningEdge = {
  __typename: 'WorkingGroupOpeningEdge'
  node: WorkingGroupOpening
  cursor: Scalars['String']
}

export type WorkingGroupOpeningMetadata = BaseGraphQlObject & {
  __typename: 'WorkingGroupOpeningMetadata'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  originallyValid: Scalars['Boolean']
  shortDescription?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  hiringLimit?: Maybe<Scalars['Int']>
  expectedEnding?: Maybe<Scalars['DateTime']>
  applicationDetails?: Maybe<Scalars['String']>
  applicationFormQuestions: Array<ApplicationFormQuestion>
  upcomingworkinggroupopeningmetadata?: Maybe<Array<UpcomingWorkingGroupOpening>>
  workinggroupopeningmetadata?: Maybe<Array<WorkingGroupOpening>>
}

export type WorkingGroupOpeningMetadataConnection = {
  __typename: 'WorkingGroupOpeningMetadataConnection'
  totalCount: Scalars['Int']
  edges: Array<WorkingGroupOpeningMetadataEdge>
  pageInfo: PageInfo
}

export type WorkingGroupOpeningMetadataCreateInput = {
  originallyValid: Scalars['Boolean']
  shortDescription?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  hiringLimit?: Maybe<Scalars['Float']>
  expectedEnding?: Maybe<Scalars['DateTime']>
  applicationDetails?: Maybe<Scalars['String']>
}

export type WorkingGroupOpeningMetadataEdge = {
  __typename: 'WorkingGroupOpeningMetadataEdge'
  node: WorkingGroupOpeningMetadata
  cursor: Scalars['String']
}

export enum WorkingGroupOpeningMetadataOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  OriginallyValidAsc = 'originallyValid_ASC',
  OriginallyValidDesc = 'originallyValid_DESC',
  ShortDescriptionAsc = 'shortDescription_ASC',
  ShortDescriptionDesc = 'shortDescription_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HiringLimitAsc = 'hiringLimit_ASC',
  HiringLimitDesc = 'hiringLimit_DESC',
  ExpectedEndingAsc = 'expectedEnding_ASC',
  ExpectedEndingDesc = 'expectedEnding_DESC',
  ApplicationDetailsAsc = 'applicationDetails_ASC',
  ApplicationDetailsDesc = 'applicationDetails_DESC',
}

export type WorkingGroupOpeningMetadataUpdateInput = {
  originallyValid?: Maybe<Scalars['Boolean']>
  shortDescription?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  hiringLimit?: Maybe<Scalars['Float']>
  expectedEnding?: Maybe<Scalars['DateTime']>
  applicationDetails?: Maybe<Scalars['String']>
}

export type WorkingGroupOpeningMetadataWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  originallyValid_eq?: Maybe<Scalars['Boolean']>
  originallyValid_in?: Maybe<Array<Scalars['Boolean']>>
  shortDescription_eq?: Maybe<Scalars['String']>
  shortDescription_contains?: Maybe<Scalars['String']>
  shortDescription_startsWith?: Maybe<Scalars['String']>
  shortDescription_endsWith?: Maybe<Scalars['String']>
  shortDescription_in?: Maybe<Array<Scalars['String']>>
  description_eq?: Maybe<Scalars['String']>
  description_contains?: Maybe<Scalars['String']>
  description_startsWith?: Maybe<Scalars['String']>
  description_endsWith?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Scalars['String']>>
  hiringLimit_eq?: Maybe<Scalars['Int']>
  hiringLimit_gt?: Maybe<Scalars['Int']>
  hiringLimit_gte?: Maybe<Scalars['Int']>
  hiringLimit_lt?: Maybe<Scalars['Int']>
  hiringLimit_lte?: Maybe<Scalars['Int']>
  hiringLimit_in?: Maybe<Array<Scalars['Int']>>
  expectedEnding_eq?: Maybe<Scalars['DateTime']>
  expectedEnding_lt?: Maybe<Scalars['DateTime']>
  expectedEnding_lte?: Maybe<Scalars['DateTime']>
  expectedEnding_gt?: Maybe<Scalars['DateTime']>
  expectedEnding_gte?: Maybe<Scalars['DateTime']>
  applicationDetails_eq?: Maybe<Scalars['String']>
  applicationDetails_contains?: Maybe<Scalars['String']>
  applicationDetails_startsWith?: Maybe<Scalars['String']>
  applicationDetails_endsWith?: Maybe<Scalars['String']>
  applicationDetails_in?: Maybe<Array<Scalars['String']>>
  applicationFormQuestions_none?: Maybe<ApplicationFormQuestionWhereInput>
  applicationFormQuestions_some?: Maybe<ApplicationFormQuestionWhereInput>
  applicationFormQuestions_every?: Maybe<ApplicationFormQuestionWhereInput>
  upcomingworkinggroupopeningmetadata_none?: Maybe<UpcomingWorkingGroupOpeningWhereInput>
  upcomingworkinggroupopeningmetadata_some?: Maybe<UpcomingWorkingGroupOpeningWhereInput>
  upcomingworkinggroupopeningmetadata_every?: Maybe<UpcomingWorkingGroupOpeningWhereInput>
  workinggroupopeningmetadata_none?: Maybe<WorkingGroupOpeningWhereInput>
  workinggroupopeningmetadata_some?: Maybe<WorkingGroupOpeningWhereInput>
  workinggroupopeningmetadata_every?: Maybe<WorkingGroupOpeningWhereInput>
  AND?: Maybe<Array<WorkingGroupOpeningMetadataWhereInput>>
  OR?: Maybe<Array<WorkingGroupOpeningMetadataWhereInput>>
}

export type WorkingGroupOpeningMetadataWhereUniqueInput = {
  id: Scalars['ID']
}

export enum WorkingGroupOpeningOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  RuntimeIdAsc = 'runtimeId_ASC',
  RuntimeIdDesc = 'runtimeId_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
  StakeAmountAsc = 'stakeAmount_ASC',
  StakeAmountDesc = 'stakeAmount_DESC',
  UnstakingPeriodAsc = 'unstakingPeriod_ASC',
  UnstakingPeriodDesc = 'unstakingPeriod_DESC',
  RewardPerBlockAsc = 'rewardPerBlock_ASC',
  RewardPerBlockDesc = 'rewardPerBlock_DESC',
}

export type WorkingGroupOpeningStatus = OpeningStatusOpen | OpeningStatusFilled | OpeningStatusCancelled

export enum WorkingGroupOpeningType {
  Regular = 'REGULAR',
  Leader = 'LEADER',
}

export type WorkingGroupOpeningUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  runtimeId?: Maybe<Scalars['Float']>
  group?: Maybe<Scalars['ID']>
  type?: Maybe<WorkingGroupOpeningType>
  status?: Maybe<Scalars['JSONObject']>
  metadata?: Maybe<Scalars['ID']>
  stakeAmount?: Maybe<Scalars['BigInt']>
  unstakingPeriod?: Maybe<Scalars['Float']>
  rewardPerBlock?: Maybe<Scalars['BigInt']>
}

export type WorkingGroupOpeningWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  runtimeId_eq?: Maybe<Scalars['Int']>
  runtimeId_gt?: Maybe<Scalars['Int']>
  runtimeId_gte?: Maybe<Scalars['Int']>
  runtimeId_lt?: Maybe<Scalars['Int']>
  runtimeId_lte?: Maybe<Scalars['Int']>
  runtimeId_in?: Maybe<Array<Scalars['Int']>>
  group_eq?: Maybe<Scalars['ID']>
  group_in?: Maybe<Array<Scalars['ID']>>
  type_eq?: Maybe<WorkingGroupOpeningType>
  type_in?: Maybe<Array<WorkingGroupOpeningType>>
  status_json?: Maybe<Scalars['JSONObject']>
  metadata_eq?: Maybe<Scalars['ID']>
  metadata_in?: Maybe<Array<Scalars['ID']>>
  stakeAmount_eq?: Maybe<Scalars['BigInt']>
  stakeAmount_gt?: Maybe<Scalars['BigInt']>
  stakeAmount_gte?: Maybe<Scalars['BigInt']>
  stakeAmount_lt?: Maybe<Scalars['BigInt']>
  stakeAmount_lte?: Maybe<Scalars['BigInt']>
  stakeAmount_in?: Maybe<Array<Scalars['BigInt']>>
  unstakingPeriod_eq?: Maybe<Scalars['Int']>
  unstakingPeriod_gt?: Maybe<Scalars['Int']>
  unstakingPeriod_gte?: Maybe<Scalars['Int']>
  unstakingPeriod_lt?: Maybe<Scalars['Int']>
  unstakingPeriod_lte?: Maybe<Scalars['Int']>
  unstakingPeriod_in?: Maybe<Array<Scalars['Int']>>
  rewardPerBlock_eq?: Maybe<Scalars['BigInt']>
  rewardPerBlock_gt?: Maybe<Scalars['BigInt']>
  rewardPerBlock_gte?: Maybe<Scalars['BigInt']>
  rewardPerBlock_lt?: Maybe<Scalars['BigInt']>
  rewardPerBlock_lte?: Maybe<Scalars['BigInt']>
  rewardPerBlock_in?: Maybe<Array<Scalars['BigInt']>>
  group?: Maybe<WorkingGroupWhereInput>
  applications_none?: Maybe<WorkingGroupApplicationWhereInput>
  applications_some?: Maybe<WorkingGroupApplicationWhereInput>
  applications_every?: Maybe<WorkingGroupApplicationWhereInput>
  metadata?: Maybe<WorkingGroupOpeningMetadataWhereInput>
  createdInEvent?: Maybe<OpeningAddedEventWhereInput>
  appliedonopeningeventopening_none?: Maybe<AppliedOnOpeningEventWhereInput>
  appliedonopeningeventopening_some?: Maybe<AppliedOnOpeningEventWhereInput>
  appliedonopeningeventopening_every?: Maybe<AppliedOnOpeningEventWhereInput>
  openingcanceledeventopening_none?: Maybe<OpeningCanceledEventWhereInput>
  openingcanceledeventopening_some?: Maybe<OpeningCanceledEventWhereInput>
  openingcanceledeventopening_every?: Maybe<OpeningCanceledEventWhereInput>
  openingfilledeventopening_none?: Maybe<OpeningFilledEventWhereInput>
  openingfilledeventopening_some?: Maybe<OpeningFilledEventWhereInput>
  openingfilledeventopening_every?: Maybe<OpeningFilledEventWhereInput>
  AND?: Maybe<Array<WorkingGroupOpeningWhereInput>>
  OR?: Maybe<Array<WorkingGroupOpeningWhereInput>>
}

export type WorkingGroupOpeningWhereUniqueInput = {
  id: Scalars['ID']
}

export enum WorkingGroupOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
  LeaderAsc = 'leader_ASC',
  LeaderDesc = 'leader_DESC',
  BudgetAsc = 'budget_ASC',
  BudgetDesc = 'budget_DESC',
}

export type WorkingGroupUpdateInput = {
  name?: Maybe<Scalars['String']>
  metadata?: Maybe<Scalars['ID']>
  leader?: Maybe<Scalars['ID']>
  budget?: Maybe<Scalars['BigInt']>
}

export type WorkingGroupWhereInput = {
  id_eq?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  createdAt_eq?: Maybe<Scalars['DateTime']>
  createdAt_lt?: Maybe<Scalars['DateTime']>
  createdAt_lte?: Maybe<Scalars['DateTime']>
  createdAt_gt?: Maybe<Scalars['DateTime']>
  createdAt_gte?: Maybe<Scalars['DateTime']>
  createdById_eq?: Maybe<Scalars['ID']>
  createdById_in?: Maybe<Array<Scalars['ID']>>
  updatedAt_eq?: Maybe<Scalars['DateTime']>
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  updatedById_eq?: Maybe<Scalars['ID']>
  updatedById_in?: Maybe<Array<Scalars['ID']>>
  deletedAt_all?: Maybe<Scalars['Boolean']>
  deletedAt_eq?: Maybe<Scalars['DateTime']>
  deletedAt_lt?: Maybe<Scalars['DateTime']>
  deletedAt_lte?: Maybe<Scalars['DateTime']>
  deletedAt_gt?: Maybe<Scalars['DateTime']>
  deletedAt_gte?: Maybe<Scalars['DateTime']>
  deletedById_eq?: Maybe<Scalars['ID']>
  deletedById_in?: Maybe<Array<Scalars['ID']>>
  name_eq?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_startsWith?: Maybe<Scalars['String']>
  name_endsWith?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  metadata_eq?: Maybe<Scalars['ID']>
  metadata_in?: Maybe<Array<Scalars['ID']>>
  leader_eq?: Maybe<Scalars['ID']>
  leader_in?: Maybe<Array<Scalars['ID']>>
  budget_eq?: Maybe<Scalars['BigInt']>
  budget_gt?: Maybe<Scalars['BigInt']>
  budget_gte?: Maybe<Scalars['BigInt']>
  budget_lt?: Maybe<Scalars['BigInt']>
  budget_lte?: Maybe<Scalars['BigInt']>
  budget_in?: Maybe<Array<Scalars['BigInt']>>
  metadata?: Maybe<WorkingGroupMetadataWhereInput>
  leader?: Maybe<WorkerWhereInput>
  workers_none?: Maybe<WorkerWhereInput>
  workers_some?: Maybe<WorkerWhereInput>
  workers_every?: Maybe<WorkerWhereInput>
  openings_none?: Maybe<WorkingGroupOpeningWhereInput>
  openings_some?: Maybe<WorkingGroupOpeningWhereInput>
  openings_every?: Maybe<WorkingGroupOpeningWhereInput>
  applicationwithdrawneventgroup_none?: Maybe<ApplicationWithdrawnEventWhereInput>
  applicationwithdrawneventgroup_some?: Maybe<ApplicationWithdrawnEventWhereInput>
  applicationwithdrawneventgroup_every?: Maybe<ApplicationWithdrawnEventWhereInput>
  appliedonopeningeventgroup_none?: Maybe<AppliedOnOpeningEventWhereInput>
  appliedonopeningeventgroup_some?: Maybe<AppliedOnOpeningEventWhereInput>
  appliedonopeningeventgroup_every?: Maybe<AppliedOnOpeningEventWhereInput>
  budgetseteventgroup_none?: Maybe<BudgetSetEventWhereInput>
  budgetseteventgroup_some?: Maybe<BudgetSetEventWhereInput>
  budgetseteventgroup_every?: Maybe<BudgetSetEventWhereInput>
  budgetspendingeventgroup_none?: Maybe<BudgetSpendingEventWhereInput>
  budgetspendingeventgroup_some?: Maybe<BudgetSpendingEventWhereInput>
  budgetspendingeventgroup_every?: Maybe<BudgetSpendingEventWhereInput>
  leaderseteventgroup_none?: Maybe<LeaderSetEventWhereInput>
  leaderseteventgroup_some?: Maybe<LeaderSetEventWhereInput>
  leaderseteventgroup_every?: Maybe<LeaderSetEventWhereInput>
  leaderunseteventgroup_none?: Maybe<LeaderUnsetEventWhereInput>
  leaderunseteventgroup_some?: Maybe<LeaderUnsetEventWhereInput>
  leaderunseteventgroup_every?: Maybe<LeaderUnsetEventWhereInput>
  newmissedrewardlevelreachedeventgroup_none?: Maybe<NewMissedRewardLevelReachedEventWhereInput>
  newmissedrewardlevelreachedeventgroup_some?: Maybe<NewMissedRewardLevelReachedEventWhereInput>
  newmissedrewardlevelreachedeventgroup_every?: Maybe<NewMissedRewardLevelReachedEventWhereInput>
  openingaddedeventgroup_none?: Maybe<OpeningAddedEventWhereInput>
  openingaddedeventgroup_some?: Maybe<OpeningAddedEventWhereInput>
  openingaddedeventgroup_every?: Maybe<OpeningAddedEventWhereInput>
  openingcanceledeventgroup_none?: Maybe<OpeningCanceledEventWhereInput>
  openingcanceledeventgroup_some?: Maybe<OpeningCanceledEventWhereInput>
  openingcanceledeventgroup_every?: Maybe<OpeningCanceledEventWhereInput>
  openingfilledeventgroup_none?: Maybe<OpeningFilledEventWhereInput>
  openingfilledeventgroup_some?: Maybe<OpeningFilledEventWhereInput>
  openingfilledeventgroup_every?: Maybe<OpeningFilledEventWhereInput>
  rewardpaideventgroup_none?: Maybe<RewardPaidEventWhereInput>
  rewardpaideventgroup_some?: Maybe<RewardPaidEventWhereInput>
  rewardpaideventgroup_every?: Maybe<RewardPaidEventWhereInput>
  stakedecreasedeventgroup_none?: Maybe<StakeDecreasedEventWhereInput>
  stakedecreasedeventgroup_some?: Maybe<StakeDecreasedEventWhereInput>
  stakedecreasedeventgroup_every?: Maybe<StakeDecreasedEventWhereInput>
  stakeincreasedeventgroup_none?: Maybe<StakeIncreasedEventWhereInput>
  stakeincreasedeventgroup_some?: Maybe<StakeIncreasedEventWhereInput>
  stakeincreasedeventgroup_every?: Maybe<StakeIncreasedEventWhereInput>
  stakeslashedeventgroup_none?: Maybe<StakeSlashedEventWhereInput>
  stakeslashedeventgroup_some?: Maybe<StakeSlashedEventWhereInput>
  stakeslashedeventgroup_every?: Maybe<StakeSlashedEventWhereInput>
  statustextchangedeventgroup_none?: Maybe<StatusTextChangedEventWhereInput>
  statustextchangedeventgroup_some?: Maybe<StatusTextChangedEventWhereInput>
  statustextchangedeventgroup_every?: Maybe<StatusTextChangedEventWhereInput>
  terminatedleadereventgroup_none?: Maybe<TerminatedLeaderEventWhereInput>
  terminatedleadereventgroup_some?: Maybe<TerminatedLeaderEventWhereInput>
  terminatedleadereventgroup_every?: Maybe<TerminatedLeaderEventWhereInput>
  terminatedworkereventgroup_none?: Maybe<TerminatedWorkerEventWhereInput>
  terminatedworkereventgroup_some?: Maybe<TerminatedWorkerEventWhereInput>
  terminatedworkereventgroup_every?: Maybe<TerminatedWorkerEventWhereInput>
  upcomingworkinggroupopeninggroup_none?: Maybe<UpcomingWorkingGroupOpeningWhereInput>
  upcomingworkinggroupopeninggroup_some?: Maybe<UpcomingWorkingGroupOpeningWhereInput>
  upcomingworkinggroupopeninggroup_every?: Maybe<UpcomingWorkingGroupOpeningWhereInput>
  workerexitedeventgroup_none?: Maybe<WorkerExitedEventWhereInput>
  workerexitedeventgroup_some?: Maybe<WorkerExitedEventWhereInput>
  workerexitedeventgroup_every?: Maybe<WorkerExitedEventWhereInput>
  workerrewardaccountupdatedeventgroup_none?: Maybe<WorkerRewardAccountUpdatedEventWhereInput>
  workerrewardaccountupdatedeventgroup_some?: Maybe<WorkerRewardAccountUpdatedEventWhereInput>
  workerrewardaccountupdatedeventgroup_every?: Maybe<WorkerRewardAccountUpdatedEventWhereInput>
  workerrewardamountupdatedeventgroup_none?: Maybe<WorkerRewardAmountUpdatedEventWhereInput>
  workerrewardamountupdatedeventgroup_some?: Maybe<WorkerRewardAmountUpdatedEventWhereInput>
  workerrewardamountupdatedeventgroup_every?: Maybe<WorkerRewardAmountUpdatedEventWhereInput>
  workerroleaccountupdatedeventgroup_none?: Maybe<WorkerRoleAccountUpdatedEventWhereInput>
  workerroleaccountupdatedeventgroup_some?: Maybe<WorkerRoleAccountUpdatedEventWhereInput>
  workerroleaccountupdatedeventgroup_every?: Maybe<WorkerRoleAccountUpdatedEventWhereInput>
  workerstartedleavingeventgroup_none?: Maybe<WorkerStartedLeavingEventWhereInput>
  workerstartedleavingeventgroup_some?: Maybe<WorkerStartedLeavingEventWhereInput>
  workerstartedleavingeventgroup_every?: Maybe<WorkerStartedLeavingEventWhereInput>
  workinggroupmetadatagroup_none?: Maybe<WorkingGroupMetadataWhereInput>
  workinggroupmetadatagroup_some?: Maybe<WorkingGroupMetadataWhereInput>
  workinggroupmetadatagroup_every?: Maybe<WorkingGroupMetadataWhereInput>
  AND?: Maybe<Array<WorkingGroupWhereInput>>
  OR?: Maybe<Array<WorkingGroupWhereInput>>
}

export type WorkingGroupWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}
