export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigInt: { input: any; output: any };
  ISO8601Date: { input: any; output: any };
  ISO8601DateTime: { input: any; output: any };
  JSON: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type AccountsReceivablePaymentSource = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'AccountsReceivablePaymentSource';
    businessClient?: Maybe<BusinessClient>;
    canI: Scalars['Boolean']['output'];
    clientsStore?: Maybe<ClientsStore>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    paymentMethod?: Maybe<PaymentMethod>;
    supplierStockLocation?: Maybe<StockLocation>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
  };

export type AccountsReceivablePaymentSourceCanIArgs = {
  action: CanIAction;
};

export type ActionInterface = {
  deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  promotion: Promotion;
  promotionId: Scalars['ID']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type AddFeedbackInput = {
  body: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  orderId?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  topicId: Scalars['ID']['input'];
};

export type AddFeedbackTopicInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderRequired?: InputMaybe<Scalars['Boolean']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  positive?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
  websiteId: Scalars['ID']['input'];
};

export type Address = BaseModelInterface &
  Node & {
    __typename?: 'Address';
    address1?: Maybe<Scalars['String']['output']>;
    address2?: Maybe<Scalars['String']['output']>;
    alias?: Maybe<Scalars['String']['output']>;
    alternativePhone?: Maybe<Scalars['String']['output']>;
    apartment?: Maybe<Scalars['String']['output']>;
    audits: AuditConnection;
    birthday?: Maybe<Scalars['ISO8601Date']['output']>;
    branches: Array<Branch>;
    canI: Scalars['Boolean']['output'];
    cdq?: Maybe<Array<Scalars['ID']['output']>>;
    city?: Maybe<Scalars['String']['output']>;
    company?: Maybe<Scalars['String']['output']>;
    consumerNo?: Maybe<Scalars['String']['output']>;
    coordinate?: Maybe<Scalars['JSON']['output']>;
    country?: Maybe<Country>;
    countryId?: Maybe<Scalars['ID']['output']>;
    countryName?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    district?: Maybe<District>;
    districtId?: Maybe<Scalars['ID']['output']>;
    districtName?: Maybe<Scalars['String']['output']>;
    entrance?: Maybe<Scalars['String']['output']>;
    firstname?: Maybe<Scalars['String']['output']>;
    floor?: Maybe<Scalars['String']['output']>;
    gender?: Maybe<Scalars['String']['output']>;
    geoPoint?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    house?: Maybe<Scalars['String']['output']>;
    houseKorpus?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    intercom?: Maybe<Scalars['String']['output']>;
    isBillAddress?: Maybe<Scalars['Boolean']['output']>;
    isCompany?: Maybe<Scalars['Boolean']['output']>;
    isPup?: Maybe<Scalars['Boolean']['output']>;
    lastname?: Maybe<Scalars['String']['output']>;
    latitude?: Maybe<Scalars['String']['output']>;
    longitude?: Maybe<Scalars['String']['output']>;
    mnQuarterId?: Maybe<Scalars['ID']['output']>;
    nationality?: Maybe<Scalars['String']['output']>;
    note?: Maybe<Scalars['String']['output']>;
    owningType?: Maybe<Scalars['String']['output']>;
    passportNumber?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    pinFl?: Maybe<Scalars['String']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    quarter?: Maybe<District>;
    quarterName?: Maybe<Scalars['String']['output']>;
    state?: Maybe<State>;
    stateId?: Maybe<Scalars['ID']['output']>;
    stateName?: Maybe<Scalars['String']['output']>;
    tin?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    what3words?: Maybe<Scalars['String']['output']>;
    year?: Maybe<Scalars['String']['output']>;
    zipcode?: Maybe<Scalars['String']['output']>;
  };

export type AddressAuditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type AddressCanIArgs = {
  action: CanIAction;
};

export type AddressConnection = {
  __typename?: 'AddressConnection';
  edges: Array<AddressEdge>;
  nodes: Array<Address>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type AddressConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type AddressEdge = {
  __typename?: 'AddressEdge';
  cursor: Scalars['String']['output'];
  node: Address;
};

export type AddressFilter = {
  address1?: InputMaybe<StringFilter>;
  address2?: InputMaybe<StringFilter>;
  countryId?: InputMaybe<IdFilter>;
  createdAt?: InputMaybe<DateFilter>;
  district?: InputMaybe<DistrictFilter>;
  districtId?: InputMaybe<IdFilter>;
  firstname?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isCompany?: InputMaybe<BoolFilter>;
  lastname?: InputMaybe<StringFilter>;
  mnQuarter?: InputMaybe<QuarterFilter>;
  mnQuarterId?: InputMaybe<IdFilter>;
  phone?: InputMaybe<StringFilter>;
  state?: InputMaybe<StateFilter>;
  stateId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type AddressInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  alternativePhone?: InputMaybe<Scalars['String']['input']>;
  apartment?: InputMaybe<Scalars['String']['input']>;
  cdq?: InputMaybe<Array<Scalars['ID']['input']>>;
  company?: InputMaybe<Scalars['String']['input']>;
  consumerNo?: InputMaybe<Scalars['String']['input']>;
  coordinate?: InputMaybe<Scalars['JSON']['input']>;
  countryId?: InputMaybe<Scalars['ID']['input']>;
  districtId?: InputMaybe<Scalars['ID']['input']>;
  entrance?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  floor?: InputMaybe<Scalars['String']['input']>;
  house?: InputMaybe<Scalars['String']['input']>;
  houseKorpus?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  intercom?: InputMaybe<Scalars['String']['input']>;
  isBillAddress?: InputMaybe<Scalars['Boolean']['input']>;
  isCompany?: InputMaybe<Scalars['Boolean']['input']>;
  isPup?: InputMaybe<Scalars['Boolean']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  mnQuarterId?: InputMaybe<Scalars['ID']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  owningType?: InputMaybe<Scalars['String']['input']>;
  passportNumber?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  pinFl?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  stateId?: InputMaybe<Scalars['ID']['input']>;
  tin?: InputMaybe<Scalars['String']['input']>;
  what3words?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

export type Addressable = District | Quarter | State;

export type Adjustment = BaseModelInterface &
  Node & {
    __typename?: 'Adjustment';
    adjustableId?: Maybe<Scalars['ID']['output']>;
    adjustableLabel?: Maybe<Scalars['String']['output']>;
    adjustableType?: Maybe<Scalars['String']['output']>;
    amount: Scalars['Float']['output'];
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    eligible?: Maybe<Scalars['Boolean']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    included?: Maybe<Scalars['Boolean']['output']>;
    label: Scalars['String']['output'];
    mandatory?: Maybe<Scalars['Boolean']['output']>;
    order: Order;
    source?: Maybe<Node>;
    sourceId?: Maybe<Scalars['ID']['output']>;
    sourceType?: Maybe<Scalars['String']['output']>;
    state?: Maybe<Scalars['String']['output']>;
    taxAmount: Scalars['Float']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type AdjustmentCanIArgs = {
  action: CanIAction;
};

export enum AfterPay {
  Approved = 'approved',
  Inactive = 'inactive',
  Pending = 'pending',
}

export type Agenda = BaseModelInterface &
  Node & {
    __typename?: 'Agenda';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['String']['output']>;
    date?: Maybe<Scalars['ISO8601Date']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    location?: Maybe<Scalars['String']['output']>;
    preview?: Maybe<Scalars['String']['output']>;
    tagList: Array<Scalars['String']['output']>;
    tags: Array<Tag>;
    time?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    websiteId?: Maybe<Scalars['ID']['output']>;
  };

export type AgendaCanIArgs = {
  action: CanIAction;
};

export type AgendaConnection = {
  __typename?: 'AgendaConnection';
  edges: Array<AgendaEdge>;
  nodes: Array<Agenda>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type AgendaConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type AgendaEdge = {
  __typename?: 'AgendaEdge';
  cursor: Scalars['String']['output'];
  node: Agenda;
};

export type AgendaFilter = {
  createdAt?: InputMaybe<DateFilter>;
  date?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  location?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagFilter>;
  time?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type AlibabaOrder = BaseModelInterface &
  Node & {
    __typename?: 'AlibabaOrder';
    addressComparePrice?: Maybe<Scalars['Float']['output']>;
    addressMainPrice?: Maybe<Scalars['Float']['output']>;
    alibabaId?: Maybe<Scalars['Float']['output']>;
    amount?: Maybe<Scalars['Float']['output']>;
    amountUsd?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    canceledTotal?: Maybe<Scalars['Float']['output']>;
    cargoPaid?: Maybe<Scalars['Boolean']['output']>;
    cargoPrice?: Maybe<Scalars['Float']['output']>;
    cargoStatus?: Maybe<Scalars['String']['output']>;
    cargoWeight?: Maybe<Scalars['Float']['output']>;
    cny?: Maybe<Scalars['Float']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    discount?: Maybe<Scalars['Float']['output']>;
    displayShipmentBeforePaid?: Maybe<Scalars['Float']['output']>;
    displayShipmentTotal?: Maybe<Scalars['Float']['output']>;
    displayShipmentTotalUsd?: Maybe<Scalars['Float']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    lastSyncedAt?: Maybe<Scalars['String']['output']>;
    lineItems?: Maybe<Array<LineItem>>;
    logisticTrace?: Maybe<Scalars['JSON']['output']>;
    mongoliaInboundAt?: Maybe<Scalars['String']['output']>;
    noStockTotal?: Maybe<Scalars['Float']['output']>;
    note?: Maybe<Scalars['String']['output']>;
    number?: Maybe<Scalars['String']['output']>;
    oldWaybill?: Maybe<Scalars['String']['output']>;
    oldWaybills?: Maybe<Scalars['JSON']['output']>;
    order?: Maybe<Order>;
    orderTotalLocalShipping?: Maybe<Scalars['Float']['output']>;
    paidAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    parcelServiceOrderId?: Maybe<Scalars['String']['output']>;
    parcelServiceOrderStatus?: Maybe<Scalars['String']['output']>;
    priceUpdatedAt?: Maybe<Scalars['String']['output']>;
    provider?: Maybe<DropshipProvider>;
    refund?: Maybe<Scalars['Float']['output']>;
    refundPayment?: Maybe<Scalars['Float']['output']>;
    returnTotal?: Maybe<Scalars['Float']['output']>;
    sellerName?: Maybe<Scalars['String']['output']>;
    sellerOpenid?: Maybe<Scalars['String']['output']>;
    shipmentTotal?: Maybe<Scalars['Float']['output']>;
    shipping?: Maybe<Scalars['Float']['output']>;
    shippingCalculator?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    tax?: Maybe<Scalars['Float']['output']>;
    total?: Maybe<Scalars['Float']['output']>;
    totalItemAmount?: Maybe<Scalars['Float']['output']>;
    totalItemCount?: Maybe<Scalars['Int']['output']>;
    totalUsd?: Maybe<Scalars['Float']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    updatedPrice?: Maybe<Scalars['String']['output']>;
    updatedShipping?: Maybe<Scalars['String']['output']>;
    uzbekistanInboundAt?: Maybe<Scalars['String']['output']>;
    warehouse2InboundAt?: Maybe<Scalars['String']['output']>;
    warehouse2OutboundAt?: Maybe<Scalars['String']['output']>;
    warehouseInboundAt?: Maybe<Scalars['String']['output']>;
    warehouseOutboundAt?: Maybe<Scalars['String']['output']>;
    waybill?: Maybe<Scalars['String']['output']>;
    waybillStatus?: Maybe<Scalars['String']['output']>;
    waybills?: Maybe<Array<AlibabaWaybill>>;
    website?: Maybe<Website>;
    websiteId?: Maybe<Scalars['ID']['output']>;
  };

export type AlibabaOrderCanIArgs = {
  action: CanIAction;
};

export type AlibabaWaybill = BaseModelInterface &
  Node & {
    __typename?: 'AlibabaWaybill';
    bag?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    entry?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    goods?: Maybe<Scalars['JSON']['output']>;
    id: Scalars['ID']['output'];
    lid?: Maybe<Scalars['String']['output']>;
    order?: Maybe<AlibabaOrder>;
    pickPackStatus?: Maybe<Scalars['String']['output']>;
    price?: Maybe<Scalars['Float']['output']>;
    provider?: Maybe<DropshipProvider>;
    status?: Maybe<Scalars['String']['output']>;
    step?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    waybill?: Maybe<Scalars['String']['output']>;
    website?: Maybe<Website>;
    weight?: Maybe<Scalars['Float']['output']>;
  };

export type AlibabaWaybillCanIArgs = {
  action: CanIAction;
};

export type AlifPayInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'AlifPayInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceId?: Maybe<Scalars['String']['output']>;
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    signature?: Maybe<Scalars['String']['output']>;
    splitMonths?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type AlifPayInvoiceCanIArgs = {
  action: CanIAction;
};

export type Application = BaseModelInterface &
  Node & {
    __typename?: 'Application';
    canI: Scalars['Boolean']['output'];
    confidential: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    onesignalAppId?: Maybe<Scalars['String']['output']>;
    onesignalAppKey?: Maybe<Scalars['String']['output']>;
    redirectUri: Scalars['String']['output'];
    scopes: Scalars['String']['output'];
    secret: Scalars['String']['output'];
    uid: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type ApplicationCanIArgs = {
  action: CanIAction;
};

export type ApprovalComment = Node & {
  __typename?: 'ApprovalComment';
  comments: Array<KeyValue>;
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
};

export enum ApproveAction {
  Approve = 'approve',
  Cancel = 'cancel',
  Order = 'order',
  Revert = 'revert',
}

export type Around = Order | Product | Website;

export type Article = BaseModelInterface &
  Node & {
    __typename?: 'Article';
    author?: Maybe<Author>;
    averageRating: Scalars['Float']['output'];
    blocks?: Maybe<Scalars['JSON']['output']>;
    canI: Scalars['Boolean']['output'];
    canonicalLink?: Maybe<Scalars['String']['output']>;
    comments: CommentConnection;
    contentType?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    editor?: Maybe<User>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    image?: Maybe<ArticleImage>;
    images: Array<ArticleImage>;
    impressionsCount?: Maybe<Scalars['Int']['output']>;
    isDraft?: Maybe<Scalars['Boolean']['output']>;
    isFeatured?: Maybe<Scalars['Boolean']['output']>;
    isPublished?: Maybe<Scalars['Boolean']['output']>;
    items?: Maybe<Scalars['JSON']['output']>;
    licensing?: Maybe<Scalars['String']['output']>;
    myReview?: Maybe<Review>;
    preview?: Maybe<Scalars['String']['output']>;
    publishedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    publishedBlocks?: Maybe<Scalars['JSON']['output']>;
    reviews: ReviewConnection;
    seoDescription?: Maybe<Scalars['String']['output']>;
    seoKeywords?: Maybe<Scalars['String']['output']>;
    seoTitle?: Maybe<Scalars['String']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    tagList: Array<Scalars['String']['output']>;
    tags: Array<Tag>;
    text?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    totalComments?: Maybe<Scalars['Int']['output']>;
    totalReviews: Scalars['Int']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
    wordCount?: Maybe<Scalars['Int']['output']>;
  };

export type ArticleCanIArgs = {
  action: CanIAction;
};

export type ArticleCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type ArticleReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ReviewsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  edges: Array<ArticleEdge>;
  nodes: Array<Article>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type ArticleConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  cursor: Scalars['String']['output'];
  node: Article;
};

export type ArticleFilter = {
  author?: InputMaybe<AuthorFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  isDraft?: InputMaybe<BoolFilter>;
  isPublished?: InputMaybe<BoolFilter>;
  preview?: InputMaybe<StringFilter>;
  publishedAt?: InputMaybe<DateFilter>;
  tags?: InputMaybe<TagFilter>;
  title?: InputMaybe<StringFilter>;
  trending?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type ArticleImage = BaseModelInterface &
  Node & {
    __typename?: 'ArticleImage';
    alt?: Maybe<Scalars['String']['output']>;
    article?: Maybe<Article>;
    attachment?: Maybe<Scalars['String']['output']>;
    attachmentContentType: Scalars['String']['output'];
    attachmentFileName: Scalars['String']['output'];
    attachmentFileSize?: Maybe<Scalars['Int']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    imageHeight?: Maybe<Scalars['Int']['output']>;
    imageWidth?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    website?: Maybe<Website>;
  };

export type ArticleImageCanIArgs = {
  action: CanIAction;
};

export type AssemblyPart = BaseModelInterface &
  Node & {
    __typename?: 'AssemblyPart';
    assemblyId?: Maybe<Scalars['ID']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    part?: Maybe<Variant>;
    partId?: Maybe<Scalars['ID']['output']>;
    quantity?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type AssemblyPartCanIArgs = {
  action: CanIAction;
};

export type Asset = Branch | BusinessClient | ClientsStore | Merchant | StoreLocation | User | Vendor | Website;

export type AssetFilter = {
  assetId?: InputMaybe<IdFilter>;
  assetType?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  number?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userEmailOrUserMobile?: InputMaybe<StringFilter>;
  userEmailOrUserMobileOrUserFirstName?: InputMaybe<StringFilter>;
  withRoles?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AssetRole = BaseModelInterface &
  Node & {
    __typename?: 'AssetRole';
    asset?: Maybe<Asset>;
    assetId?: Maybe<Scalars['ID']['output']>;
    assetKind?: Maybe<Scalars['String']['output']>;
    assetName?: Maybe<Scalars['String']['output']>;
    business?: Maybe<Vendor>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    people?: Maybe<Employee>;
    roles: Array<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
  };

export type AssetRoleCanIArgs = {
  action: CanIAction;
};

export type AssetRoleConnection = {
  __typename?: 'AssetRoleConnection';
  edges: Array<AssetRoleEdge>;
  nodes: Array<AssetRole>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type AssetRoleConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type AssetRoleEdge = {
  __typename?: 'AssetRoleEdge';
  cursor: Scalars['String']['output'];
  node: AssetRole;
};

export type AssetRoleInput = {
  assetId: Scalars['ID']['input'];
  assetType: AssetTarget | `${AssetTarget}`;
  roles: Array<Scalars['String']['input']>;
};

export enum AssetTarget {
  Branch = 'branch',
  Business = 'business',
  BusinessClient = 'business_client',
  BusinessSupplier = 'business_supplier',
  Channel = 'channel',
  ClientsStore = 'clients_store',
  StoreLocation = 'store_location',
  User = 'user',
  Website = 'website',
}

export type AssetTargetRoleInput = {
  peopleIds: Array<Scalars['ID']['input']>;
  roles: Array<Scalars['String']['input']>;
  targetIds: Array<Scalars['ID']['input']>;
  targetType: AssetTarget | `${AssetTarget}`;
};

export type Attachment = BaseModelInterface &
  Node & {
    __typename?: 'Attachment';
    attachment?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    contract?: Maybe<Contract>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type AttachmentCanIArgs = {
  action: CanIAction;
};

export type Audit = Node & {
  __typename?: 'Audit';
  action?: Maybe<Scalars['String']['output']>;
  associated?: Maybe<Node>;
  associatedId?: Maybe<Scalars['ID']['output']>;
  associatedJson?: Maybe<Scalars['JSON']['output']>;
  associatedSku?: Maybe<Scalars['String']['output']>;
  associatedType?: Maybe<Scalars['String']['output']>;
  auditable?: Maybe<Node>;
  auditableId?: Maybe<Scalars['ID']['output']>;
  auditableType?: Maybe<Scalars['String']['output']>;
  auditedChanges?: Maybe<Scalars['JSON']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  remoteAddress?: Maybe<Scalars['String']['output']>;
  requestUuid?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userEmail?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
  userType?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type AuditConnection = {
  __typename?: 'AuditConnection';
  edges: Array<AuditEdge>;
  nodes: Array<Audit>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type AuditConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type AuditEdge = {
  __typename?: 'AuditEdge';
  cursor: Scalars['String']['output'];
  node: Audit;
};

export type AuditFilter = {
  action?: InputMaybe<StringFilter>;
  associatedId?: InputMaybe<IntFilter>;
  auditableType?: InputMaybe<StringFilter>;
  comment?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  remoteAddress?: InputMaybe<StringFilter>;
  sku?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  userEmail?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringFilter>;
};

export type Author = BaseModelInterface &
  Node & {
    __typename?: 'Author';
    articles: ArticleConnection;
    articlesCount?: Maybe<Scalars['Int']['output']>;
    avatar?: Maybe<Scalars['String']['output']>;
    avatarContentType?: Maybe<Scalars['String']['output']>;
    avatarFileName?: Maybe<Scalars['String']['output']>;
    bio?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    followersCount?: Maybe<Scalars['Int']['output']>;
    fullName?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isFeatured?: Maybe<Scalars['Boolean']['output']>;
    isPublic?: Maybe<Scalars['Boolean']['output']>;
    shoppyAuthors?: Maybe<Scalars['Int']['output']>;
    social?: Maybe<Scalars['JSON']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    username?: Maybe<Scalars['String']['output']>;
    website?: Maybe<Website>;
  };

export type AuthorArticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ArticleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type AuthorAvatarArgs = {
  mirror?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
};

export type AuthorCanIArgs = {
  action: CanIAction;
};

export type AuthorConnection = {
  __typename?: 'AuthorConnection';
  edges: Array<AuthorEdge>;
  nodes: Array<Author>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type AuthorConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type AuthorEdge = {
  __typename?: 'AuthorEdge';
  cursor: Scalars['String']['output'];
  node: Author;
};

export type AuthorFilter = {
  createdAt?: InputMaybe<DateFilter>;
  followersCount?: InputMaybe<IntFilter>;
  fullName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  username?: InputMaybe<StringFilter>;
};

export type Availability = Node &
  RuleInterface & {
    __typename?: 'Availability';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export enum B2bAllowedStatusTypeEnum {
  Pending = 'pending',
}

export enum B2bApprovalDecisionStatusEnum {
  Approved = 'approved',
  Declined = 'declined',
  Disabled = 'disabled',
  Hidden = 'hidden',
  Pending = 'pending',
  Suspended = 'suspended',
}

export type B2bBusinessUserBankAccountInput = {
  accountNumber: Scalars['String']['input'];
  bankName: Scalars['String']['input'];
};

export type Badge = BaseModelInterface &
  Node & {
    __typename?: 'Badge';
    active?: Maybe<Scalars['Boolean']['output']>;
    attachment?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    listings: ListingConnection;
    name?: Maybe<Scalars['String']['output']>;
    priority?: Maybe<Scalars['Int']['output']>;
    promotable: Scalars['Boolean']['output'];
    startAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    style?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    url?: Maybe<Scalars['String']['output']>;
    website: Website;
    websiteId: Scalars['ID']['output'];
  };

export type BadgeCanIArgs = {
  action: CanIAction;
};

export type BadgeListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type BadgeConnection = {
  __typename?: 'BadgeConnection';
  edges: Array<BadgeEdge>;
  nodes: Array<Badge>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type BadgeConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type BadgeEdge = {
  __typename?: 'BadgeEdge';
  cursor: Scalars['String']['output'];
  node: Badge;
};

export type BadgeFilter = {
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateFilter>;
  expireAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  priority?: InputMaybe<IntFilter>;
  promotable?: InputMaybe<BoolFilter>;
  searchState?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<DateFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  url?: InputMaybe<StringFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type Bank = BaseModelInterface &
  Node & {
    __typename?: 'Bank';
    accountNo: Scalars['String']['output'];
    active?: Maybe<Scalars['Boolean']['output']>;
    additionalDetails?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    iban?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type BankCanIArgs = {
  action: CanIAction;
};

export type BankAccount = Node & {
  __typename?: 'BankAccount';
  accountName: Scalars['String']['output'];
  accountNumber: Scalars['String']['output'];
  bankName: Scalars['String']['output'];
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  status?: Maybe<Scalars['String']['output']>;
};

export type BankInput = {
  _destroy?: InputMaybe<Scalars['Boolean']['input']>;
  accountNo?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  additionalDetails?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BankTransaction = {
  __typename?: 'BankTransaction';
  account?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  customerAccount?: Maybe<Scalars['String']['output']>;
  customerBank?: Maybe<Scalars['String']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  order?: Maybe<Order>;
  payment?: Maybe<Payment>;
  ref?: Maybe<Scalars['String']['output']>;
  transactionDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  website?: Maybe<Website>;
};

export type BaseModelInterface = {
  canI: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type BaseModelInterfaceCanIArgs = {
  action: CanIAction;
};

export type BinancePayInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'BinancePayInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    checkoutUrl?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    prepayId?: Maybe<Scalars['String']['output']>;
    qrContent?: Maybe<Scalars['String']['output']>;
    qrImage?: Maybe<Scalars['String']['output']>;
    universalUrl?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type BinancePayInvoiceCanIArgs = {
  action: CanIAction;
};

export type Booking = BaseModelInterface &
  Node & {
    __typename?: 'Booking';
    bookingVariants: Array<BookingVariant>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    prices: Scalars['JSON']['output'];
    product: Product;
    productId: Scalars['ID']['output'];
    repeats?: Maybe<Array<Scalars['String']['output']>>;
    skips: Array<Scalars['JSON']['output']>;
    stockAvailable: Array<Scalars['JSON']['output']>;
    stocks: Array<Scalars['JSON']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variation: Scalars['JSON']['output'];
  };

export type BookingCanIArgs = {
  action: CanIAction;
};

export type BookingStockAvailableArgs = {
  date: Scalars['ISO8601DateTime']['input'];
  storeLocationId: Scalars['ID']['input'];
};

export type BookingStocksArgs = {
  date: Scalars['ISO8601DateTime']['input'];
};

export type BookingVariant = BaseModelInterface &
  Node & {
    __typename?: 'BookingVariant';
    basePrice: Scalars['Float']['output'];
    booking: Booking;
    bookingId: Scalars['ID']['output'];
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    price: Scalars['Float']['output'];
    product: Product;
    productId: Scalars['ID']['output'];
    stock: Scalars['Int']['output'];
    stockLocation?: Maybe<StockLocation>;
    stockLocationId?: Maybe<Scalars['ID']['output']>;
    storeLocation?: Maybe<StoreLocation>;
    storeLocationId?: Maybe<Scalars['ID']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variant: Variant;
    variantId: Scalars['ID']['output'];
  };

export type BookingVariantCanIArgs = {
  action: CanIAction;
};

export type BoolFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  notEq?: InputMaybe<Scalars['Boolean']['input']>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Branch = BaseModelInterface &
  Node & {
    __typename?: 'Branch';
    address?: Maybe<Address>;
    assetRoles: AssetRoleConnection;
    businessType?: Maybe<BusinessType>;
    canI: Scalars['Boolean']['output'];
    clientId?: Maybe<Scalars['ID']['output']>;
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    createdBy?: Maybe<User>;
    email?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    phone1?: Maybe<Scalars['String']['output']>;
    supplySegmentIds?: Maybe<Scalars['JSON']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendor: Vendor;
  };

export type BranchAssetRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AssetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type BranchCanIArgs = {
  action: CanIAction;
};

export type BranchClientIdArgs = {
  id: Scalars['ID']['input'];
};

export type BranchConnection = {
  __typename?: 'BranchConnection';
  edges: Array<BranchEdge>;
  nodes: Array<Branch>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type BranchConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type BranchEdge = {
  __typename?: 'BranchEdge';
  cursor: Scalars['String']['output'];
  node: Branch;
};

export type BranchFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Brand = BaseModelInterface &
  Node & {
    __typename?: 'Brand';
    averageRating: Scalars['Float']['output'];
    blackLogo?: Maybe<Image>;
    canI: Scalars['Boolean']['output'];
    categoryType?: Maybe<Scalars['String']['output']>;
    code: Scalars['String']['output'];
    cover?: Maybe<Scalars['String']['output']>;
    coverSquare?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    createdBy?: Maybe<User>;
    default: Scalars['Boolean']['output'];
    defaultCurrency?: Maybe<Scalars['String']['output']>;
    deliveryDuration?: Maybe<Scalars['String']['output']>;
    deliveryHours?: Maybe<Scalars['Int']['output']>;
    desktopCover?: Maybe<Image>;
    facebook?: Maybe<Scalars['String']['output']>;
    fees?: Maybe<Scalars['String']['output']>;
    follow: Follow;
    follows: Array<Follow>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isPopUp?: Maybe<Scalars['Boolean']['output']>;
    isPublished?: Maybe<Scalars['Boolean']['output']>;
    items?: Maybe<Scalars['String']['output']>;
    logo?: Maybe<Scalars['String']['output']>;
    lvl3?: Maybe<Scalars['String']['output']>;
    lvl4?: Maybe<Scalars['String']['output']>;
    mailFromAddress?: Maybe<Scalars['String']['output']>;
    manufacture?: Maybe<Scalars['String']['output']>;
    metaDescription?: Maybe<Scalars['String']['output']>;
    metaKeywords?: Maybe<Scalars['String']['output']>;
    mobileCover?: Maybe<Scalars['String']['output']>;
    monthlyFee?: Maybe<Scalars['Float']['output']>;
    myReview?: Maybe<Review>;
    name?: Maybe<Scalars['String']['output']>;
    officialLogo?: Maybe<Scalars['String']['output']>;
    popOffDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    popUpDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    reviews: ReviewConnection;
    seoTitle?: Maybe<Scalars['String']['output']>;
    shoppyFeatured?: Maybe<Featured>;
    shoppyFeatureds: FeaturedConnection;
    storeLocations: StoreLocationConnection;
    storeType?: Maybe<Scalars['String']['output']>;
    totalReviews: Scalars['Int']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    url?: Maybe<Scalars['String']['output']>;
    webData?: Maybe<Scalars['JSON']['output']>;
    websiteIds: Array<Scalars['ID']['output']>;
    websiteNames?: Maybe<Scalars['String']['output']>;
    websites: BrandListingConnection;
    whiteLogo?: Maybe<Image>;
  };

export type BrandCanIArgs = {
  action: CanIAction;
};

export type BrandFollowArgs = {
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type BrandReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ReviewsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type BrandShoppyFeaturedArgs = {
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type BrandShoppyFeaturedsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type BrandStoreLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StoreLocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type BrandWebsitesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BrandListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type BrandConnection = {
  __typename?: 'BrandConnection';
  edges: Array<BrandEdge>;
  nodes: Array<Brand>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type BrandConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type BrandEdge = {
  __typename?: 'BrandEdge';
  cursor: Scalars['String']['output'];
  node: Brand;
};

export type BrandFilter = {
  blackLogo?: InputMaybe<ShoppyImageFilter>;
  brandWebsitesWebsiteId?: InputMaybe<StringFilter>;
  brandWebsitesWebsiteName?: InputMaybe<StringFilter>;
  categoryType?: InputMaybe<StringFilter>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  domain?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isPublished?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductFilter>;
  productsListingsWebsiteName?: InputMaybe<StringFilter>;
  storeType?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  whiteLogo?: InputMaybe<ShoppyImageFilter>;
};

export type BrandListing = BaseModelInterface &
  Node & {
    __typename?: 'BrandListing';
    active?: Maybe<Scalars['Boolean']['output']>;
    canI: Scalars['Boolean']['output'];
    code?: Maybe<Scalars['String']['output']>;
    cover?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    desktopCover?: Maybe<Image>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    listings: ListingConnection;
    mobileCover?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    store: Brand;
    storeId?: Maybe<Scalars['ID']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website: Website;
    websiteId?: Maybe<Scalars['ID']['output']>;
  };

export type BrandListingCanIArgs = {
  action: CanIAction;
};

export type BrandListingListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type BrandListingConnection = {
  __typename?: 'BrandListingConnection';
  edges: Array<BrandListingEdge>;
  nodes: Array<BrandListing>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type BrandListingConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type BrandListingEdge = {
  __typename?: 'BrandListingEdge';
  cursor: Scalars['String']['output'];
  node: BrandListing;
};

export type BrandListingFilter = {
  active?: InputMaybe<BoolFilter>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  store?: InputMaybe<BrandFilter>;
  storeId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
  websiteId?: InputMaybe<IdFilter>;
};

export type BusinessClient = BaseModelInterface &
  Node & {
    __typename?: 'BusinessClient';
    address?: Maybe<Scalars['String']['output']>;
    alias?: Maybe<Scalars['String']['output']>;
    audits: AuditConnection;
    background?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    category?: Maybe<SupplierCategory>;
    categoryId?: Maybe<Scalars['ID']['output']>;
    client: Vendor;
    clientCodes: Array<BusinessClientCode>;
    clientId: Scalars['ID']['output'];
    clientsStore?: Maybe<ClientsStore>;
    clientsStores: ClientsStoreConnection;
    commentGroups?: Maybe<CommentGroupsConnection>;
    comments?: Maybe<OrderCommentConnection>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    creditBalance?: Maybe<Scalars['Float']['output']>;
    creditLimit?: Maybe<Scalars['Float']['output']>;
    creditStatus?: Maybe<Scalars['Float']['output']>;
    creditWallet?: Maybe<Wallet>;
    creditWallets?: Maybe<Array<Wallet>>;
    currentOrderTotal: Scalars['Float']['output'];
    customerCreditData?: Maybe<Scalars['JSON']['output']>;
    customerDetailCreditData?: Maybe<Scalars['JSON']['output']>;
    data?: Maybe<Scalars['JSON']['output']>;
    debitWallet?: Maybe<Wallet>;
    debitWallets?: Maybe<Array<Wallet>>;
    description?: Maybe<Scalars['String']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    employees?: Maybe<EmployeeConnection>;
    facebook?: Maybe<Scalars['String']['output']>;
    gamifications: GamificationConnection;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isIndividual?: Maybe<Scalars['Boolean']['output']>;
    lastApprovalComment?: Maybe<ApprovalComment>;
    lastAudit?: Maybe<Audit>;
    lineItems: LineItemConnection;
    localId?: Maybe<Scalars['String']['output']>;
    logo?: Maybe<Scalars['String']['output']>;
    manager?: Maybe<Employee>;
    maxEmployees: Scalars['Int']['output'];
    msCode?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    orderTotal: Scalars['Float']['output'];
    orders: OrderConnection;
    organizationCertificateAttachments?: Maybe<Array<BusinessVerificationAttachmentType>>;
    organizationId?: Maybe<Scalars['String']['output']>;
    pendingApproval: Scalars['Boolean']['output'];
    personPassportAttachments?: Maybe<Array<BusinessVerificationAttachmentType>>;
    phone?: Maybe<Scalars['String']['output']>;
    profile?: Maybe<Profile>;
    progresses: ProgressConnection;
    promotions: PromotionConnection;
    salesManagerReport?: Maybe<Scalars['JSON']['output']>;
    salesManagers?: Maybe<Array<Employee>>;
    specialPermissionCertificateAttachments?: Maybe<Array<BusinessVerificationAttachmentType>>;
    status: Scalars['String']['output'];
    storeLocations: StoreLocationConnection;
    supplySegmentIds: Array<Scalars['ID']['output']>;
    supplySegments: Array<SupplySegment>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendor: Vendor;
    web?: Maybe<Scalars['String']['output']>;
    website: Website;
  };

export type BusinessClientAuditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuditFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type BusinessClientCanIArgs = {
  action: CanIAction;
};

export type BusinessClientClientsStoreArgs = {
  id: Scalars['ID']['input'];
};

export type BusinessClientClientsStoresArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ClientsStoreFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type BusinessClientCommentGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type BusinessClientCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type BusinessClientCustomerCreditDataArgs = {
  clientStoreId?: InputMaybe<Scalars['ID']['input']>;
  supplierStockLocationId?: InputMaybe<Scalars['ID']['input']>;
};

export type BusinessClientCustomerDetailCreditDataArgs = {
  clientStoreId?: InputMaybe<Scalars['ID']['input']>;
  supplierStockLocationId?: InputMaybe<Scalars['ID']['input']>;
};

export type BusinessClientEmployeesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BusinessUserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type BusinessClientGamificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type BusinessClientLineItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludeBankPending?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<LineItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  ready?: InputMaybe<Scalars['Boolean']['input']>;
  reportType?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type BusinessClientOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  status?: InputMaybe<OrderStatus>;
};

export type BusinessClientProgressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationProgressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type BusinessClientPromotionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateType?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PromotionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type BusinessClientSalesManagerReportArgs = {
  beginDate?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  websiteIndex: Scalars['String']['input'];
};

export type BusinessClientStoreLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StoreLocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type BusinessClientCode = BaseModelInterface &
  Node & {
    __typename?: 'BusinessClientCode';
    branch: Branch;
    branchId: Scalars['ID']['output'];
    canI: Scalars['Boolean']['output'];
    code: Scalars['String']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendor: Vendor;
    vendorId: Scalars['ID']['output'];
  };

export type BusinessClientCodeCanIArgs = {
  action: CanIAction;
};

export type BusinessClientConnection = {
  __typename?: 'BusinessClientConnection';
  edges: Array<BusinessClientEdge>;
  nodes: Array<BusinessClient>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type BusinessClientConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type BusinessClientEdge = {
  __typename?: 'BusinessClientEdge';
  cursor: Scalars['String']['output'];
  node: BusinessClient;
};

export type BusinessClientFilter = {
  aliasOrClientName?: InputMaybe<StringFilter>;
  client?: InputMaybe<VendorFilter>;
  clientName?: InputMaybe<StringFilter>;
  clientNameOrClientRegister?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  localId?: InputMaybe<StringFilter>;
  msCode?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nameOrOrganizationId?: InputMaybe<StringFilter>;
  organizationId?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  phoneOrEmail?: InputMaybe<StringFilter>;
  phoneOrEmailOrLocalIdOrClientNameOrClientRegister?: InputMaybe<StringFilter>;
  salesManagers?: InputMaybe<BusinessUserFilter>;
  segmentsClients?: InputMaybe<SegmentClientFilter>;
  status?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  vendor?: InputMaybe<VendorFilter>;
  vendorNameOrVendorRegister?: InputMaybe<StringFilter>;
  withStatus?: InputMaybe<StringFilter>;
};

export type BusinessClientInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  clientsStoresObjects?: InputMaybe<Array<ClientsStoreInputType>>;
  directorPassportFiles?: InputMaybe<Array<BusinessVerificationAttachmentInput>>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isIndividual?: InputMaybe<Scalars['Boolean']['input']>;
  logo?: InputMaybe<Scalars['Upload']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationCertificateFiles?: InputMaybe<Array<BusinessVerificationAttachmentInput>>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  personPassportFiles?: InputMaybe<Array<BusinessVerificationAttachmentInput>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  specialPermissionCertificateFiles?: InputMaybe<Array<BusinessVerificationAttachmentInput>>;
  status?: InputMaybe<B2bAllowedStatusTypeEnum | `${B2bAllowedStatusTypeEnum}`>;
};

export type BusinessType = BaseModelInterface &
  Node & {
    __typename?: 'BusinessType';
    canI: Scalars['Boolean']['output'];
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    createdBy?: Maybe<User>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type BusinessTypeCanIArgs = {
  action: CanIAction;
};

export type BusinessTypeConnection = {
  __typename?: 'BusinessTypeConnection';
  edges: Array<BusinessTypeEdge>;
  nodes: Array<BusinessType>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type BusinessTypeConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type BusinessTypeEdge = {
  __typename?: 'BusinessTypeEdge';
  cursor: Scalars['String']['output'];
  node: BusinessType;
};

export type BusinessTypeFilter = {
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type BusinessUserFilter = {
  addedBy?: InputMaybe<UserFilter>;
  assetRoles?: InputMaybe<AssetFilter>;
  businessUserGroups?: InputMaybe<BusinessUserGroupFilter>;
  createdAt?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  emailOrFirstNameOrLastNameOrMobile?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  lastName?: InputMaybe<StringFilter>;
  mobile?: InputMaybe<StringFilter>;
  msCode?: InputMaybe<StringFilter>;
  role?: InputMaybe<StringFilter>;
  searchAll?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  vendor?: InputMaybe<VendorFilter>;
};

export enum BusinessUserGroupCodeEnum {
  Director = 'DIRECTOR',
}

export type BusinessUserGroupFilter = {
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type BusinessUserGroupInput = {
  code?: InputMaybe<BusinessUserGroupCodeEnum | `${BusinessUserGroupCodeEnum}`>;
};

export type BusinessUserGroupType = BaseModelInterface &
  Node & {
    __typename?: 'BusinessUserGroupType';
    canI: Scalars['Boolean']['output'];
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendor?: Maybe<Vendor>;
  };

export type BusinessUserGroupTypeCanIArgs = {
  action: CanIAction;
};

export type BusinessUserGroupTypeConnection = {
  __typename?: 'BusinessUserGroupTypeConnection';
  edges: Array<BusinessUserGroupTypeEdge>;
  nodes: Array<BusinessUserGroupType>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type BusinessUserGroupTypeConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type BusinessUserGroupTypeEdge = {
  __typename?: 'BusinessUserGroupTypeEdge';
  cursor: Scalars['String']['output'];
  node: BusinessUserGroupType;
};

export type BusinessUserProfile = Node & {
  __typename?: 'BusinessUserProfile';
  businessUserVerifications: Array<BusinessVerificationType>;
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  lastApprovalComment?: Maybe<ApprovalComment>;
  status: B2bApprovalDecisionStatusEnum | `${B2bApprovalDecisionStatusEnum}`;
};

export type BusinessUserProfileInput = {
  status?: InputMaybe<B2bApprovalDecisionStatusEnum | `${B2bApprovalDecisionStatusEnum}`>;
  verifications?: InputMaybe<Array<BusinessVerificationInput>>;
};

export type BusinessUsersSegment = BaseModelInterface &
  Node & {
    __typename?: 'BusinessUsersSegment';
    businessUser: Employee;
    businessUserId: Scalars['ID']['output'];
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    expiresAt: Scalars['ISO8601Date']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    segment: SupplySegment;
    segmentId: Scalars['ID']['output'];
    sourceId?: Maybe<Scalars['ID']['output']>;
    sourceType?: Maybe<Scalars['String']['output']>;
    status: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type BusinessUsersSegmentCanIArgs = {
  action: CanIAction;
};

export type BusinessUsersSegmentConnection = {
  __typename?: 'BusinessUsersSegmentConnection';
  edges: Array<BusinessUsersSegmentEdge>;
  nodes: Array<BusinessUsersSegment>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type BusinessUsersSegmentConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type BusinessUsersSegmentEdge = {
  __typename?: 'BusinessUsersSegmentEdge';
  cursor: Scalars['String']['output'];
  node: BusinessUsersSegment;
};

export type BusinessUsersSegmentFilter = {
  businessUser?: InputMaybe<BusinessUserFilter>;
  businessUserId?: InputMaybe<IdFilter>;
  createdAt?: InputMaybe<DateFilter>;
  expiresAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  segment?: InputMaybe<SupplySegmentFilter>;
  segmentId?: InputMaybe<IdFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type BusinessVerificationAttachmentInput = {
  file: Scalars['Upload']['input'];
  key: Scalars['String']['input'];
};

export type BusinessVerificationAttachmentType = BaseModelInterface &
  Node & {
    __typename?: 'BusinessVerificationAttachmentType';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    key: Scalars['String']['output'];
    large?: Maybe<Scalars['String']['output']>;
    medium?: Maybe<Scalars['String']['output']>;
    original?: Maybe<Scalars['String']['output']>;
    originalFileSize?: Maybe<Scalars['Int']['output']>;
    small?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type BusinessVerificationAttachmentTypeCanIArgs = {
  action: CanIAction;
};

export type BusinessVerificationInput = {
  attachments?: InputMaybe<Array<BusinessVerificationAttachmentInput>>;
  category: Scalars['String']['input'];
  preferredExpireAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

export type BusinessVerificationType = BaseModelInterface &
  Node & {
    __typename?: 'BusinessVerificationType';
    attachments?: Maybe<Array<BusinessVerificationAttachmentType>>;
    canI: Scalars['Boolean']['output'];
    category?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    createdBy?: Maybe<User>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferredExpireAt?: Maybe<Scalars['ISO8601Date']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type BusinessVerificationTypeCanIArgs = {
  action: CanIAction;
};

export type CalculatorInterface = {
  calculableId?: Maybe<Scalars['Int']['output']>;
  calculableType?: Maybe<Scalars['String']['output']>;
  canI: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type CalculatorInterfaceCanIArgs = {
  action: CanIAction;
};

export type Campaign = BaseModelInterface &
  Node & {
    __typename?: 'Campaign';
    campaignContacts: CampaignContactConnection;
    canI: Scalars['Boolean']['output'];
    contacts: ContactConnection;
    createdAt: Scalars['ISO8601DateTime']['output'];
    deliveredAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    events: EventConnection;
    eventsCount?: Maybe<Scalars['JSON']['output']>;
    fromEmail?: Maybe<Scalars['String']['output']>;
    fromName?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    lastEvents?: Maybe<Scalars['JSON']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    preview?: Maybe<Scalars['String']['output']>;
    recipientsCount?: Maybe<Scalars['Int']['output']>;
    segment?: Maybe<Segment>;
    slug?: Maybe<Scalars['String']['output']>;
    state?: Maybe<Scalars['String']['output']>;
    subject?: Maybe<Scalars['String']['output']>;
    template?: Maybe<Template>;
    totals?: Maybe<Scalars['JSON']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type CampaignCampaignContactsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type CampaignCanIArgs = {
  action: CanIAction;
};

export type CampaignContactsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type CampaignEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EMailEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type CampaignContact = BaseModelInterface &
  Node & {
    __typename?: 'CampaignContact';
    campaign?: Maybe<Campaign>;
    canI: Scalars['Boolean']['output'];
    contact?: Maybe<Contact>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    sentAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type CampaignContactCanIArgs = {
  action: CanIAction;
};

export type CampaignContactConnection = {
  __typename?: 'CampaignContactConnection';
  edges: Array<CampaignContactEdge>;
  nodes: Array<CampaignContact>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type CampaignContactConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type CampaignContactEdge = {
  __typename?: 'CampaignContactEdge';
  cursor: Scalars['String']['output'];
  node: CampaignContact;
};

export type CampaignFilter = {
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  endsAt?: InputMaybe<DateFilter>;
  fulfillDate?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  location?: InputMaybe<StringFilter>;
  startsAt?: InputMaybe<DateFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  vendor?: InputMaybe<VendorFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type CampaignListing = BaseModelInterface &
  Node & {
    __typename?: 'CampaignListing';
    campaign: ShoppyCampaign;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    ordersCount: Scalars['Int']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    price: Scalars['Float']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variant: Variant;
  };

export type CampaignListingCanIArgs = {
  action: CanIAction;
};

export type CampaignListingConnection = {
  __typename?: 'CampaignListingConnection';
  edges: Array<CampaignListingEdge>;
  nodes: Array<CampaignListing>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type CampaignListingConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type CampaignListingEdge = {
  __typename?: 'CampaignListingEdge';
  cursor: Scalars['String']['output'];
  node: CampaignListing;
};

export type CampaignListingFilter = {
  campaign?: InputMaybe<CampaignFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  price?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  variant?: InputMaybe<VariantFilter>;
};

export type CampaignListingInput = {
  position?: InputMaybe<Scalars['Int']['input']>;
  price: Scalars['Float']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
  variantId: Scalars['ID']['input'];
};

export enum CanIAction {
  Delete = 'delete',
  Update = 'update',
}

export type CancelReason = BaseModelInterface &
  Node & {
    __typename?: 'CancelReason';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    display?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    websiteId?: Maybe<Scalars['Int']['output']>;
  };

export type CancelReasonCanIArgs = {
  action: CanIAction;
};

export type CancelReasonConnection = {
  __typename?: 'CancelReasonConnection';
  edges: Array<CancelReasonEdge>;
  nodes: Array<CancelReason>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type CancelReasonConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type CancelReasonEdge = {
  __typename?: 'CancelReasonEdge';
  cursor: Scalars['String']['output'];
  node: CancelReason;
};

export type CandyInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'CandyInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    candyMiniApp?: Maybe<Scalars['Int']['output']>;
    candyUser?: Maybe<Scalars['Int']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    qrLink?: Maybe<Scalars['String']['output']>;
    receiver?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type CandyInvoiceCanIArgs = {
  action: CanIAction;
};

export type Card = BaseModelInterface &
  Node & {
    __typename?: 'Card';
    canI: Scalars['Boolean']['output'];
    cardHolder?: Maybe<Scalars['String']['output']>;
    cardIssuer?: Maybe<Scalars['String']['output']>;
    cardNumber: Scalars['String']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    expiresAt: Scalars['String']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    status: Scalars['String']['output'];
    tokenDate?: Maybe<Scalars['ISO8601Date']['output']>;
    type: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user: User;
    userId: Scalars['ID']['output'];
    website: Website;
    websiteId: Scalars['ID']['output'];
  };

export type CardCanIArgs = {
  action: CanIAction;
};

export type CartItemInput = {
  attachments?: InputMaybe<Array<Scalars['Upload']['input']>>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['ID']['input']>;
};

export type ChatAttachment = BaseModelInterface &
  Node & {
    __typename?: 'ChatAttachment';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    large?: Maybe<Scalars['String']['output']>;
    medium?: Maybe<Scalars['String']['output']>;
    original?: Maybe<Scalars['String']['output']>;
    small?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type ChatAttachmentCanIArgs = {
  action: CanIAction;
};

export type Cinema = BaseModelInterface &
  Node & {
    __typename?: 'Cinema';
    address?: Maybe<Scalars['String']['output']>;
    branch?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    city?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    email?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    idx?: Maybe<Scalars['String']['output']>;
    image?: Maybe<Scalars['String']['output']>;
    lat?: Maybe<Scalars['String']['output']>;
    latLon?: Maybe<Array<Scalars['String']['output']>>;
    lon?: Maybe<Scalars['String']['output']>;
    movies?: Maybe<Array<Movie>>;
    name?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    screens?: Maybe<Array<Screen>>;
    sessions?: Maybe<Array<Session>>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type CinemaCanIArgs = {
  action: CanIAction;
};

export type ClaimedOnly = Node &
  RuleInterface & {
    __typename?: 'ClaimedOnly';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type ClientsStore = BaseModelInterface &
  Node & {
    __typename?: 'ClientsStore';
    assetRoles: Array<AssetRole>;
    businessClient?: Maybe<BusinessClient>;
    businessVerifications: Array<BusinessVerificationType>;
    canI: Scalars['Boolean']['output'];
    category?: Maybe<SupplierCategory>;
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    lastApprovalComment?: Maybe<ApprovalComment>;
    lastRelationalAudit?: Maybe<Audit>;
    orders: OrderConnection;
    relationalAudits: AuditConnection;
    status: Scalars['String']['output'];
    storeLocation?: Maybe<StoreLocation>;
    supplierStockLocations: StockLocationConnection;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type ClientsStoreCanIArgs = {
  action: CanIAction;
};

export type ClientsStoreOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  status?: InputMaybe<OrderStatus>;
};

export type ClientsStoreRelationalAuditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuditFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type ClientsStoreSupplierStockLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StockLocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type ClientsStoreConnection = {
  __typename?: 'ClientsStoreConnection';
  edges: Array<ClientsStoreEdge>;
  nodes: Array<ClientsStore>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type ClientsStoreConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type ClientsStoreEdge = {
  __typename?: 'ClientsStoreEdge';
  cursor: Scalars['String']['output'];
  node: ClientsStore;
};

export type ClientsStoreFilter = {
  businessClient?: InputMaybe<BusinessClientFilter>;
  category?: InputMaybe<SupplierCategoryFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  statusEq?: InputMaybe<ClientsStoreStatus | `${ClientsStoreStatus}`>;
  storeLocation?: InputMaybe<StoreLocationFilter>;
  supplierStockLocations?: InputMaybe<StockLocationFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type ClientsStoreInputType = {
  businessClientId?: InputMaybe<Scalars['ID']['input']>;
  businessVerifications?: InputMaybe<Array<BusinessVerificationInput>>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<B2bAllowedStatusTypeEnum | `${B2bAllowedStatusTypeEnum}`>;
  storeLocationObject?: InputMaybe<StoreLocationInputType>;
  supplierStockLocationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum ClientsStoreStatus {
  Approved = 'approved',
  Declined = 'declined',
  Disabled = 'disabled',
  Pending = 'pending',
  Suspended = 'suspended',
}

export type Collect = BaseModelInterface &
  Node & {
    __typename?: 'Collect';
    acceptedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    canI: Scalars['Boolean']['output'];
    collectedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    driver?: Maybe<User>;
    driverCode?: Maybe<Scalars['String']['output']>;
    driverTakenAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    order: Order;
    status?: Maybe<Scalars['String']['output']>;
    storeLocation?: Maybe<StoreLocation>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user: User;
    website: Website;
  };

export type CollectCanIArgs = {
  action: CanIAction;
};

export type CollectFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  status?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
};

export type Comment = BaseModelInterface &
  Node & {
    __typename?: 'Comment';
    averageRating: Scalars['Float']['output'];
    canI: Scalars['Boolean']['output'];
    comment?: Maybe<Scalars['String']['output']>;
    commentable?: Maybe<Commentable>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    ip?: Maybe<Scalars['String']['output']>;
    isMe: Scalars['Boolean']['output'];
    mentions: UserConnection;
    myReview?: Maybe<Review>;
    reviews: ReviewConnection;
    title?: Maybe<Scalars['String']['output']>;
    totalReviews: Scalars['Int']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    userAgent?: Maybe<Scalars['String']['output']>;
    variants: Array<Variant>;
  };

export type CommentCanIArgs = {
  action: CanIAction;
};

export type CommentMentionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type CommentReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ReviewsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type CommentCategoryType = BaseModelInterface &
  Node & {
    __typename?: 'CommentCategoryType';
    appliesTo?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    comments?: Maybe<OrderCommentConnection>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type CommentCategoryTypeCanIArgs = {
  action: CanIAction;
};

export type CommentCategoryTypeCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  edges: Array<CommentEdge>;
  nodes: Array<Comment>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type CommentConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  cursor: Scalars['String']['output'];
  node: Comment;
};

export type CommentFilter = {
  commentType?: InputMaybe<CommentTypeFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type CommentGroups = {
  __typename?: 'CommentGroups';
  commentCategory: CommentCategoryType;
  comments?: Maybe<Array<OrderComment>>;
};

export type CommentGroupsConnection = {
  __typename?: 'CommentGroupsConnection';
  edges: Array<CommentGroupsEdge>;
  nodes: Array<CommentGroups>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type CommentGroupsConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type CommentGroupsEdge = {
  __typename?: 'CommentGroupsEdge';
  cursor: Scalars['String']['output'];
  node: CommentGroups;
};

export type CommentTypeFilter = {
  appliesTo?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Commentable = FeedbackType;

export type CommerceAddress = BaseModelInterface &
  Node & {
    __typename?: 'CommerceAddress';
    address1?: Maybe<Scalars['String']['output']>;
    address2?: Maybe<Scalars['String']['output']>;
    alternativePhone?: Maybe<Scalars['String']['output']>;
    birthday?: Maybe<Scalars['ISO8601Date']['output']>;
    canI: Scalars['Boolean']['output'];
    city?: Maybe<Scalars['String']['output']>;
    company?: Maybe<Scalars['String']['output']>;
    countryId?: Maybe<Scalars['ID']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    districtId?: Maybe<Scalars['ID']['output']>;
    firstname?: Maybe<Scalars['String']['output']>;
    gender?: Maybe<Scalars['String']['output']>;
    geoPoint?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isCompany?: Maybe<Scalars['Boolean']['output']>;
    lastname?: Maybe<Scalars['String']['output']>;
    mnQuarterId?: Maybe<Scalars['ID']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    quarterId?: Maybe<Scalars['ID']['output']>;
    stateId?: Maybe<Scalars['ID']['output']>;
    stateName?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    what3words?: Maybe<Scalars['String']['output']>;
    zipId?: Maybe<Scalars['ID']['output']>;
    zipcode?: Maybe<Scalars['String']['output']>;
  };

export type CommerceAddressCanIArgs = {
  action: CanIAction;
};

export type CommerceOrder = BaseModelInterface &
  Node & {
    __typename?: 'CommerceOrder';
    address?: Maybe<CommerceAddress>;
    adjustmentTotal: Scalars['Float']['output'];
    billAddress?: Maybe<Address>;
    canI: Scalars['Boolean']['output'];
    canceledAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    canceler?: Maybe<User>;
    comments: Array<OrderComment>;
    completedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    confirmationDelivered?: Maybe<Scalars['Boolean']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    currency?: Maybe<Scalars['String']['output']>;
    driver?: Maybe<User>;
    driverTakenAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    ebarimt?: Maybe<Scalars['Boolean']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    extraData?: Maybe<Scalars['JSON']['output']>;
    flag?: Maybe<Scalars['String']['output']>;
    flaggedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    flaggedBy?: Maybe<User>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    images: Array<ProductImage>;
    itemCount?: Maybe<Scalars['Int']['output']>;
    itemTotal: Scalars['Float']['output'];
    khanId?: Maybe<Scalars['String']['output']>;
    latestNote?: Maybe<Scalars['String']['output']>;
    leaseLeft?: Maybe<Scalars['Float']['output']>;
    leaseState?: Maybe<Scalars['String']['output']>;
    lineItems: Array<LineItem>;
    number?: Maybe<Scalars['String']['output']>;
    paidAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    parcels: Array<Parcel>;
    paymentState?: Maybe<Scalars['String']['output']>;
    paymentTotal?: Maybe<Scalars['Float']['output']>;
    paymentTypes: Array<Scalars['String']['output']>;
    payments: Array<Payment>;
    pickPackAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    pickPackBy?: Maybe<User>;
    pickPackCompletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    pickPackNumber?: Maybe<Scalars['Int']['output']>;
    pickPackOtp?: Maybe<Scalars['String']['output']>;
    pickPackStatus?: Maybe<Scalars['String']['output']>;
    pickPackTrackingNumber?: Maybe<Scalars['String']['output']>;
    shipAddress?: Maybe<Address>;
    shipmentState?: Maybe<Scalars['String']['output']>;
    shipmentTotal: Scalars['Float']['output'];
    shipments: Array<Shipment>;
    shippedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    shippingMethod?: Maybe<ShippingMethod>;
    specialInstructions?: Maybe<Scalars['String']['output']>;
    state?: Maybe<Scalars['String']['output']>;
    storeLocation?: Maybe<StoreLocation>;
    stores: Array<Brand>;
    total: Scalars['Float']['output'];
    totalAppliedStoreCredit: Scalars['Float']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    waitUntil?: Maybe<Scalars['ISO8601DateTime']['output']>;
    website?: Maybe<Website>;
    whenToShip?: Maybe<Scalars['ISO8601DateTime']['output']>;
  };

export type CommerceOrderCanIArgs = {
  action: CanIAction;
};

export type CommerceOrderConnection = {
  __typename?: 'CommerceOrderConnection';
  edges: Array<CommerceOrderEdge>;
  nodes: Array<CommerceOrder>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type CommerceOrderConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type CommerceOrderEdge = {
  __typename?: 'CommerceOrderEdge';
  cursor: Scalars['String']['output'];
  node: CommerceOrder;
};

export type Contact = BaseModelInterface &
  Node & {
    __typename?: 'Contact';
    campaignContacts: Array<CampaignContact>;
    campaigns: Array<Campaign>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    email?: Maybe<Scalars['String']['output']>;
    events: Array<Event>;
    firstName?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    lastName?: Maybe<Scalars['String']['output']>;
    source?: Maybe<Scalars['String']['output']>;
    state?: Maybe<Scalars['String']['output']>;
    tagList: Array<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    website?: Maybe<Website>;
  };

export type ContactCanIArgs = {
  action: CanIAction;
};

export type ContactConnection = {
  __typename?: 'ContactConnection';
  edges: Array<ContactEdge>;
  nodes: Array<Contact>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type ContactConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type ContactEdge = {
  __typename?: 'ContactEdge';
  cursor: Scalars['String']['output'];
  node: Contact;
};

export type Contract = BaseModelInterface &
  Node & {
    __typename?: 'Contract';
    attachments: Array<Attachment>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
  };

export type ContractCanIArgs = {
  action: CanIAction;
};

export type ContractFilter = {
  createdAt?: InputMaybe<DateFilter>;
  handedAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  isMaster?: InputMaybe<BoolFilter>;
  order?: InputMaybe<OrderFilter>;
  receivedAt?: InputMaybe<DateFilter>;
  registerNum?: InputMaybe<StringFilter>;
  signedAt?: InputMaybe<DateFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
};

export type CorporateGateway = BaseModelInterface &
  Node & {
    __typename?: 'CorporateGateway';
    accounts: Array<Scalars['String']['output']>;
    active?: Maybe<Scalars['Boolean']['output']>;
    bank?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    ibanAccounts: Array<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    statements: Array<BankTransaction>;
    transferAccount?: Maybe<Scalars['String']['output']>;
    transferPassword?: Maybe<Scalars['String']['output']>;
    transferUsername?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type CorporateGatewayCanIArgs = {
  action: CanIAction;
};

export type CorporateGatewayStatementsArgs = {
  account: Scalars['String']['input'];
  fetch?: InputMaybe<Scalars['Boolean']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  record?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type Country = Node & {
  __typename?: 'Country';
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  iso?: Maybe<Scalars['String']['output']>;
  iso3?: Maybe<Scalars['String']['output']>;
  isoName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numcode?: Maybe<Scalars['Int']['output']>;
  states: Array<State>;
  statesRequired?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  zipcodeRequired?: Maybe<Scalars['Boolean']['output']>;
};

export type CountryConnection = {
  __typename?: 'CountryConnection';
  edges: Array<CountryEdge>;
  nodes: Array<Country>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type CountryConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type CountryEdge = {
  __typename?: 'CountryEdge';
  cursor: Scalars['String']['output'];
  node: Country;
};

export type CountryFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Coupon = BaseModelInterface &
  Node & {
    __typename?: 'Coupon';
    amount?: Maybe<Scalars['Int']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['String']['output']>;
    deactivatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    giftMessage?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    inventoryUnitId?: Maybe<Scalars['ID']['output']>;
    lineItem: LineItem;
    number: Scalars['String']['output'];
    order: Order;
    part?: Maybe<Variant>;
    product: Product;
    receiverEmail?: Maybe<Scalars['String']['output']>;
    receiverName?: Maybe<Scalars['String']['output']>;
    receiverPhone?: Maybe<Scalars['String']['output']>;
    scannedBy?: Maybe<User>;
    sender?: Maybe<Scalars['String']['output']>;
    sentAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    state?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    usedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    user?: Maybe<User>;
    variant: Variant;
    vendor?: Maybe<Vendor>;
    website?: Maybe<Website>;
  };

export type CouponCanIArgs = {
  action: CanIAction;
};

export type CouponCodeUsagePerUser = Node &
  RuleInterface & {
    __typename?: 'CouponCodeUsagePerUser';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredCouponCodeUsagePerUserLimit: Scalars['Int']['output'];
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type CouponConnection = {
  __typename?: 'CouponConnection';
  edges: Array<CouponEdge>;
  nodes: Array<Coupon>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type CouponConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type CouponEdge = {
  __typename?: 'CouponEdge';
  cursor: Scalars['String']['output'];
  node: Coupon;
};

export type CouponFilter = {
  amount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  deactivatedAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  itemType?: InputMaybe<StringFilter>;
  lineItem?: InputMaybe<LineItemFilter>;
  number?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderFilter>;
  receiverEmail?: InputMaybe<StringFilter>;
  receiverName?: InputMaybe<StringFilter>;
  receiverPhone?: InputMaybe<StringFilter>;
  scannedBy?: InputMaybe<UserFilter>;
  sentAt?: InputMaybe<DateFilter>;
  state?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  usedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userEmailOrUserMobileOrUserFirstName?: InputMaybe<StringFilter>;
  vendor?: InputMaybe<VendorFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type CouponManifest = Node &
  ProductManifestInterface & {
    __typename?: 'CouponManifest';
    brand?: Maybe<Brand>;
    canSupply?: Maybe<Scalars['Boolean']['output']>;
    coupons: Array<Coupon>;
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    fulfillDuration?: Maybe<Scalars['Int']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    maxQty?: Maybe<Scalars['Int']['output']>;
    name: Scalars['String']['output'];
    optionsText?: Maybe<Scalars['String']['output']>;
    price: Scalars['Float']['output'];
    productCat?: Maybe<Scalars['String']['output']>;
    sku?: Maybe<Scalars['String']['output']>;
    slug: Scalars['String']['output'];
    totalOnHand?: Maybe<Scalars['Int']['output']>;
    vendor?: Maybe<Vendor>;
    weight?: Maybe<Scalars['Float']['output']>;
  };

export type CreateAdjustment = ActionInterface &
  Node & {
    __typename?: 'CreateAdjustment';
    calculator: CalculatorInterface;
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    promotion: Promotion;
    promotionActionLineItems: Array<PromotionActionLineItem>;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
  };

export type CreateItemAdjustments = ActionInterface &
  Node & {
    __typename?: 'CreateItemAdjustments';
    calculator: CalculatorInterface;
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredActionWithQtyLimit: Scalars['Int']['output'];
    preferredExcludeOnSale: Scalars['Boolean']['output'];
    preferredLimit?: Maybe<Scalars['Int']['output']>;
    preferredMatchPolicy: Scalars['String']['output'];
    preferredOnlyOnCheapest: Scalars['Boolean']['output'];
    promotion: Promotion;
    promotionActionLineItems: Array<PromotionActionLineItem>;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
  };

export type CreateLineItems = ActionInterface &
  Node & {
    __typename?: 'CreateLineItems';
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredInterval?: Maybe<Scalars['Int']['output']>;
    preferredMatchPolicy: Scalars['String']['output'];
    preferredRule: Scalars['String']['output'];
    promotion: Promotion;
    promotionActionLineItems: Array<PromotionActionLineItem>;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
  };

export type CreateOnePlusOneItems = ActionInterface &
  Node & {
    __typename?: 'CreateOnePlusOneItems';
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredMatchPolicy: Scalars['String']['output'];
    preferredMaxAmount: Scalars['Float']['output'];
    preferredMaxQuantity: Scalars['BigInt']['output'];
    preferredMinAmount: Scalars['Float']['output'];
    preferredMinQuantity: Scalars['Int']['output'];
    promotion: Promotion;
    promotionActionLineItems: Array<PromotionActionLineItem>;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
  };

export type CreateOrderInput = {
  billAddress: AddressInput;
  channel?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  clientVendorId?: InputMaybe<Scalars['ID']['input']>;
  clientsStoreId?: InputMaybe<Scalars['ID']['input']>;
  couponCode?: InputMaybe<Scalars['String']['input']>;
  ebarimt?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  extraData?: InputMaybe<Scalars['JSON']['input']>;
  flag?: InputMaybe<Scalars['String']['input']>;
  isConfirmation?: InputMaybe<Scalars['Boolean']['input']>;
  lineItems?: InputMaybe<Array<LineItemInput>>;
  parcelDelivery?: InputMaybe<Scalars['Boolean']['input']>;
  paymentState?: InputMaybe<Scalars['Boolean']['input']>;
  payments?: InputMaybe<Array<Scalars['JSON']['input']>>;
  shipAddress?: InputMaybe<AddressInput>;
  useBilling?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['ID']['input'];
  websiteId: Scalars['ID']['input'];
  whenToShip?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

export type CreatePaymentMethodAdjustmentPromise = ActionInterface &
  Node & {
    __typename?: 'CreatePaymentMethodAdjustmentPromise';
    calculator: CalculatorInterface;
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    matchPolicy: Scalars['String']['output'];
    paymentMethodIds: Array<Scalars['ID']['output']>;
    position?: Maybe<Scalars['Int']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
  };

export type CreatePropertyAdjustments = ActionInterface &
  Node & {
    __typename?: 'CreatePropertyAdjustments';
    calculator: CalculatorInterface;
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredExcludeOnSale: Scalars['Boolean']['output'];
    preferredLimit?: Maybe<Scalars['Int']['output']>;
    preferredMatchPolicy: Scalars['String']['output'];
    preferredOnlyOnCheapest: Scalars['Boolean']['output'];
    preferredPropertiesValues: Scalars['JSON']['output'];
    promotion: Promotion;
    promotionActionLineItems: Array<PromotionActionLineItem>;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
  };

export type CreditCard = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'CreditCard';
    audits: AuditConnection;
    canI: Scalars['Boolean']['output'];
    cardType?: Maybe<Scalars['String']['output']>;
    ccType?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    creditLimit?: Maybe<Scalars['Float']['output']>;
    currentBalance?: Maybe<Scalars['Float']['output']>;
    default: Scalars['Boolean']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    lastDigits?: Maybe<Scalars['String']['output']>;
    minPayment?: Maybe<Scalars['Float']['output']>;
    month?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    number?: Maybe<Scalars['String']['output']>;
    openBalance?: Maybe<Scalars['Float']['output']>;
    registerNum?: Maybe<Scalars['String']['output']>;
    statements?: Maybe<Scalars['JSON']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    token?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    website?: Maybe<Website>;
    year?: Maybe<Scalars['String']['output']>;
  };

export type CreditCardAuditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuditFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type CreditCardCanIArgs = {
  action: CanIAction;
};

export type CreditCardStatementsArgs = {
  monthEnd?: InputMaybe<Scalars['String']['input']>;
  monthStart: Scalars['String']['input'];
};

export type CreditCardConnection = {
  __typename?: 'CreditCardConnection';
  edges: Array<CreditCardEdge>;
  nodes: Array<CreditCard>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type CreditCardConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type CreditCardEdge = {
  __typename?: 'CreditCardEdge';
  cursor: Scalars['String']['output'];
  node: CreditCard;
};

export type CreditCardsFilter = {
  cardType?: InputMaybe<EnumStringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  lastDigits?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  number?: InputMaybe<StringFilter>;
  registerNum?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
};

export type CreditProfile = BaseModelInterface &
  Node & {
    __typename?: 'CreditProfile';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    wallet?: Maybe<Wallet>;
  };

export type CreditProfileCanIArgs = {
  action: CanIAction;
};

export type CreditWellbeeSource = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'CreditWellbeeSource';
    businessClient?: Maybe<BusinessClient>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    paymentMethod?: Maybe<PaymentMethod>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
  };

export type CreditWellbeeSourceCanIArgs = {
  action: CanIAction;
};

export type DateFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gteq?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lteq?: InputMaybe<Scalars['String']['input']>;
  notEq?: InputMaybe<Scalars['String']['input']>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DeliveryPackage = BaseModelInterface &
  Node & {
    __typename?: 'DeliveryPackage';
    canI: Scalars['Boolean']['output'];
    courier: Scalars['String']['output'];
    courierOrdNumber?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['String']['output']>;
    deliveryLogs?: Maybe<Scalars['JSON']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    itemCount?: Maybe<Scalars['Int']['output']>;
    items: Array<DeliveryPackageItem>;
    label?: Maybe<Scalars['JSON']['output']>;
    labelPdfUrl?: Maybe<Scalars['String']['output']>;
    lineItems: Array<LineItem>;
    merchant: Merchant;
    number: Scalars['String']['output'];
    order: Order;
    parcelNumbers: Array<Scalars['String']['output']>;
    pinCode?: Maybe<Scalars['String']['output']>;
    sender?: Maybe<User>;
    senderId?: Maybe<Scalars['ID']['output']>;
    sendingQueuedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    sendingStatus: Scalars['String']['output'];
    status: Scalars['String']['output'];
    trackingStatus?: Maybe<Scalars['String']['output']>;
    trackingUpdatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    travel?: Maybe<Scalars['String']['output']>;
    tutPup: Scalars['Boolean']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    weight?: Maybe<Scalars['Float']['output']>;
  };

export type DeliveryPackageCanIArgs = {
  action: CanIAction;
};

export type DeliveryPackageItem = BaseModelInterface &
  Node & {
    __typename?: 'DeliveryPackageItem';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    inventoryUnit: InventoryUnit;
    inventoryUnitId: Scalars['ID']['output'];
    lineItem: LineItem;
    lineItemId: Scalars['ID']['output'];
    package: DeliveryPackage;
    packageId: Scalars['ID']['output'];
    parcelNumber?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type DeliveryPackageItemCanIArgs = {
  action: CanIAction;
};

export type DepartmentStore = BaseModelInterface &
  Node & {
    __typename?: 'DepartmentStore';
    address?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    cover?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    logo?: Maybe<Scalars['String']['output']>;
    map?: Maybe<Scalars['String']['output']>;
    phoneNumber?: Maybe<Scalars['String']['output']>;
    schedule?: Maybe<Scalars['JSON']['output']>;
    stockLocations: StockLocationConnection;
    storeLocations: StoreLocationConnection;
    stores: BrandConnection;
    timeSheets?: Maybe<Scalars['JSON']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    winterTimeSheets?: Maybe<Scalars['JSON']['output']>;
  };

export type DepartmentStoreCanIArgs = {
  action: CanIAction;
};

export type DepartmentStoreStockLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StockLocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type DepartmentStoreStoreLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StoreLocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type DepartmentStoreStoresArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BrandFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type DepartmentStoreConnection = {
  __typename?: 'DepartmentStoreConnection';
  edges: Array<DepartmentStoreEdge>;
  nodes: Array<DepartmentStore>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type DepartmentStoreConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type DepartmentStoreEdge = {
  __typename?: 'DepartmentStoreEdge';
  cursor: Scalars['String']['output'];
  node: DepartmentStore;
};

export type DepartmentStoreFilter = {
  address?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  timeSheets?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Device = BaseModelInterface &
  Node & {
    __typename?: 'Device';
    adId?: Maybe<Scalars['String']['output']>;
    amountSpent?: Maybe<Scalars['Float']['output']>;
    application?: Maybe<Application>;
    badgeCount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    country?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    deviceModel?: Maybe<Scalars['String']['output']>;
    deviceOs?: Maybe<Scalars['String']['output']>;
    deviceType?: Maybe<Scalars['Int']['output']>;
    gameVersion?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    identifier?: Maybe<Scalars['String']['output']>;
    ip?: Maybe<Scalars['String']['output']>;
    lang?: Maybe<Scalars['String']['output']>;
    language?: Maybe<Scalars['String']['output']>;
    lastActive?: Maybe<Scalars['ISO8601DateTime']['output']>;
    oneSignalId?: Maybe<Scalars['String']['output']>;
    sessionCount?: Maybe<Scalars['Int']['output']>;
    subscribed?: Maybe<Scalars['Int']['output']>;
    tags?: Maybe<Scalars['String']['output']>;
    timezone?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    webAuth?: Maybe<Scalars['String']['output']>;
    webP256?: Maybe<Scalars['String']['output']>;
    website?: Maybe<Website>;
  };

export type DeviceCanIArgs = {
  action: CanIAction;
};

export type DeviceConnection = {
  __typename?: 'DeviceConnection';
  edges: Array<DeviceEdge>;
  nodes: Array<Device>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type DeviceConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type DeviceEdge = {
  __typename?: 'DeviceEdge';
  cursor: Scalars['String']['output'];
  node: Device;
};

export type DigiPayInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'DigiPayInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceId?: Maybe<Scalars['String']['output']>;
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    redirectUrl?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type DigiPayInvoiceCanIArgs = {
  action: CanIAction;
};

export type DigitalContract = BaseModelInterface &
  Node & {
    __typename?: 'DigitalContract';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    handedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    id: Scalars['ID']['output'];
    isMaster?: Maybe<Scalars['Boolean']['output']>;
    order: Order;
    receivedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    registerNum?: Maybe<Scalars['String']['output']>;
    signedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user: User;
  };

export type DigitalContractCanIArgs = {
  action: CanIAction;
};

export type DigitalCreditInvoice = BaseModelInterface &
  Node & {
    __typename?: 'DigitalCreditInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    requestNumber?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type DigitalCreditInvoiceCanIArgs = {
  action: CanIAction;
};

export type Discount = {
  __typename?: 'Discount';
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discountType?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['ISO8601Date']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  percent?: Maybe<Scalars['Float']['output']>;
  preferences?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['ISO8601Date']['output']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

export type Dispatch = BaseModelInterface &
  Node & {
    __typename?: 'Dispatch';
    address?: Maybe<Scalars['String']['output']>;
    calls: Array<DispatchCall>;
    callsCount?: Maybe<Scalars['Int']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    lastCallAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    latitude?: Maybe<Scalars['String']['output']>;
    longitude?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    target: Target;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type DispatchCanIArgs = {
  action: CanIAction;
};

export type DispatchCall = BaseModelInterface &
  Node & {
    __typename?: 'DispatchCall';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    dispatch: Dispatch;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    latitude?: Maybe<Scalars['String']['output']>;
    longitude?: Maybe<Scalars['String']['output']>;
    recipientUser: User;
    status: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type DispatchCallCanIArgs = {
  action: CanIAction;
};

export type District = Node & {
  __typename?: 'District';
  children: Array<Quarter>;
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  quarters: Array<Quarter>;
  state?: Maybe<State>;
  stateId?: Maybe<Scalars['ID']['output']>;
  zip?: Maybe<Zipcode>;
};

export type DistrictConnection = {
  __typename?: 'DistrictConnection';
  edges: Array<DistrictEdge>;
  nodes: Array<District>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type DistrictConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type DistrictEdge = {
  __typename?: 'DistrictEdge';
  cursor: Scalars['String']['output'];
  node: District;
};

export type DistrictFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  stateId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Donation = BaseModelInterface &
  Node & {
    __typename?: 'Donation';
    active?: Maybe<Scalars['Boolean']['output']>;
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    donationType?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isAnonymous?: Maybe<Scalars['Boolean']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    product?: Maybe<Product>;
    sender?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    website?: Maybe<Website>;
  };

export type DonationCanIArgs = {
  action: CanIAction;
};

export type DonationConnection = {
  __typename?: 'DonationConnection';
  edges: Array<DonationEdge>;
  nodes: Array<Donation>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type DonationConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type DonationEdge = {
  __typename?: 'DonationEdge';
  cursor: Scalars['String']['output'];
  node: Donation;
};

export type DonationFilter = {
  active?: InputMaybe<BoolFilter>;
  amount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  donationType?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  phone?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductFilter>;
  sender?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type DonationManifest = Node &
  ProductManifestInterface & {
    __typename?: 'DonationManifest';
    brand?: Maybe<Brand>;
    canSupply?: Maybe<Scalars['Boolean']['output']>;
    donation?: Maybe<Array<Donation>>;
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    fulfillDuration?: Maybe<Scalars['Int']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    maxQty?: Maybe<Scalars['Int']['output']>;
    name: Scalars['String']['output'];
    optionsText?: Maybe<Scalars['String']['output']>;
    price: Scalars['Float']['output'];
    productCat?: Maybe<Scalars['String']['output']>;
    sku?: Maybe<Scalars['String']['output']>;
    slug: Scalars['String']['output'];
    totalOnHand?: Maybe<Scalars['Int']['output']>;
    vendor?: Maybe<Vendor>;
    weight?: Maybe<Scalars['Float']['output']>;
  };

export type DownloadableAttachment = BaseModelInterface &
  Node & {
    __typename?: 'DownloadableAttachment';
    attachment?: Maybe<Scalars['String']['output']>;
    attachmentContentType?: Maybe<Scalars['String']['output']>;
    attachmentFileName?: Maybe<Scalars['String']['output']>;
    attachmentFileSize?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    duration?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variant?: Maybe<Variant>;
  };

export type DownloadableAttachmentCanIArgs = {
  action: CanIAction;
};

export type DownloadableFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type DropshipBrand = BaseModelInterface &
  Node & {
    __typename?: 'DropshipBrand';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    key: Scalars['String']['output'];
    name?: Maybe<Scalars['String']['output']>;
    presentation?: Maybe<Scalars['String']['output']>;
    provider: DropshipProvider;
    providerId: Scalars['ID']['output'];
    slug: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type DropshipBrandCanIArgs = {
  action: CanIAction;
};

export type DropshipBrandConnection = {
  __typename?: 'DropshipBrandConnection';
  edges: Array<DropshipBrandEdge>;
  nodes: Array<DropshipBrand>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type DropshipBrandConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type DropshipBrandEdge = {
  __typename?: 'DropshipBrandEdge';
  cursor: Scalars['String']['output'];
  node: DropshipBrand;
};

export type DropshipBrandFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  presentation?: InputMaybe<StringFilter>;
  provider?: InputMaybe<ProviderFilter>;
  providerId?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type DropshipCategory = BaseModelInterface &
  Node & {
    __typename?: 'DropshipCategory';
    canI: Scalars['Boolean']['output'];
    children: Array<DropshipCategory>;
    childrenIds: Array<Scalars['ID']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    depth: Scalars['Int']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    key: Scalars['String']['output'];
    name: Scalars['String']['output'];
    parent?: Maybe<DropshipCategory>;
    parentId?: Maybe<Scalars['ID']['output']>;
    presentation: Scalars['String']['output'];
    prettyName: Scalars['String']['output'];
    productCount?: Maybe<Scalars['Int']['output']>;
    provider: DropshipProvider;
    providerId: Scalars['ID']['output'];
    slug: Scalars['String']['output'];
    taxonIds: Array<Scalars['ID']['output']>;
    taxons: Array<Taxon>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type DropshipCategoryCanIArgs = {
  action: CanIAction;
};

export type DropshipCategoryConnection = {
  __typename?: 'DropshipCategoryConnection';
  edges: Array<DropshipCategoryEdge>;
  nodes: Array<DropshipCategory>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type DropshipCategoryConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type DropshipCategoryEdge = {
  __typename?: 'DropshipCategoryEdge';
  cursor: Scalars['String']['output'];
  node: DropshipCategory;
};

export type DropshipCategoryFilter = {
  createdAt?: InputMaybe<DateFilter>;
  depth?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parent?: InputMaybe<DropshipCategoryFilter>;
  parentId?: InputMaybe<IdFilter>;
  presentation?: InputMaybe<StringFilter>;
  productCount?: InputMaybe<IntFilter>;
  provider?: InputMaybe<ProviderFilter>;
  providerId?: InputMaybe<IdFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type DropshipManifest = Node &
  ProductManifestInterface & {
    __typename?: 'DropshipManifest';
    brand?: Maybe<Brand>;
    canSupply?: Maybe<Scalars['Boolean']['output']>;
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    fulfillDuration?: Maybe<Scalars['Int']['output']>;
    gid: Scalars['ID']['output'];
    hiddenTitle?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    maxQty?: Maybe<Scalars['Int']['output']>;
    minAllowedQty?: Maybe<Scalars['Int']['output']>;
    name: Scalars['String']['output'];
    offerId?: Maybe<Scalars['String']['output']>;
    optionsText?: Maybe<Scalars['String']['output']>;
    price: Scalars['Float']['output'];
    productCat?: Maybe<Scalars['String']['output']>;
    sellerOpenid?: Maybe<Scalars['String']['output']>;
    shipmentCost?: Maybe<Scalars['Float']['output']>;
    sku?: Maybe<Scalars['String']['output']>;
    slug: Scalars['String']['output'];
    totalOnHand?: Maybe<Scalars['Int']['output']>;
    tradeScore?: Maybe<Scalars['String']['output']>;
    vendor?: Maybe<Vendor>;
    weight?: Maybe<Scalars['Float']['output']>;
  };

export type DropshipProduct = BaseModelInterface &
  Node & {
    __typename?: 'DropshipProduct';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    currency?: Maybe<Scalars['String']['output']>;
    data?: Maybe<Scalars['JSON']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    images?: Maybe<Scalars['JSON']['output']>;
    key?: Maybe<Scalars['String']['output']>;
    listed?: Maybe<Scalars['Boolean']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    price?: Maybe<Scalars['Float']['output']>;
    provider?: Maybe<DropshipProvider>;
    providerId?: Maybe<Scalars['ID']['output']>;
    quantity?: Maybe<Scalars['Float']['output']>;
    sku?: Maybe<Scalars['String']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    syncedAt?: Maybe<Scalars['ISO8601Date']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type DropshipProductCanIArgs = {
  action: CanIAction;
};

export type DropshipProductConnection = {
  __typename?: 'DropshipProductConnection';
  edges: Array<DropshipProductEdge>;
  nodes: Array<DropshipProduct>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type DropshipProductConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type DropshipProductEdge = {
  __typename?: 'DropshipProductEdge';
  cursor: Scalars['String']['output'];
  node: DropshipProduct;
};

export type DropshipProductFilter = {
  createdAt?: InputMaybe<DateFilter>;
  currency?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  key?: InputMaybe<StringFilter>;
  listed?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntFilter>;
  providerId?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  sku?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  syncedAt?: InputMaybe<DateFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type DropshipProvider = BaseModelInterface &
  Node & {
    __typename?: 'DropshipProvider';
    brands: DropshipBrandConnection;
    canI: Scalars['Boolean']['output'];
    categories: DropshipCategoryConnection;
    createdAt: Scalars['ISO8601DateTime']['output'];
    currency?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    products: DropshipProductConnection;
    search: Scalars['JSON']['output'];
    status?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendor?: Maybe<Vendor>;
  };

export type DropshipProviderBrandsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DropshipBrandFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type DropshipProviderCanIArgs = {
  action: CanIAction;
};

export type DropshipProviderCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DropshipCategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type DropshipProviderProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DropshipProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type DropshipProviderSearchArgs = {
  brandIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  categoryIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DropshipProviderConnection = {
  __typename?: 'DropshipProviderConnection';
  edges: Array<DropshipProviderEdge>;
  nodes: Array<DropshipProvider>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type DropshipProviderConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type DropshipProviderEdge = {
  __typename?: 'DropshipProviderEdge';
  cursor: Scalars['String']['output'];
  node: DropshipProvider;
};

export type DynamicMenu = BaseModelInterface &
  Node & {
    __typename?: 'DynamicMenu';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    system?: Maybe<Scalars['Boolean']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type DynamicMenuCanIArgs = {
  action: CanIAction;
};

export type DynamicPage = BaseModelInterface &
  Node & {
    __typename?: 'DynamicPage';
    background?: Maybe<Scalars['JSON']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    createdBy?: Maybe<User>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    items?: Maybe<Array<Scalars['JSON']['output']>>;
    language?: Maybe<Scalars['String']['output']>;
    layout?: Maybe<Scalars['String']['output']>;
    menuId?: Maybe<Scalars['ID']['output']>;
    metaDescription?: Maybe<Scalars['String']['output']>;
    metaImage?: Maybe<Image>;
    metaImageId?: Maybe<Scalars['ID']['output']>;
    metaKeywords?: Maybe<Scalars['String']['output']>;
    metaTitle?: Maybe<Scalars['String']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    rawItems?: Maybe<Array<Scalars['JSON']['output']>>;
    slug?: Maybe<Scalars['String']['output']>;
    subPages: Array<DynamicPage>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendor?: Maybe<Vendor>;
    vendorId?: Maybe<Scalars['ID']['output']>;
    visible?: Maybe<Scalars['Boolean']['output']>;
  };

export type DynamicPageCanIArgs = {
  action: CanIAction;
};

export type DynamicPageConnection = {
  __typename?: 'DynamicPageConnection';
  edges: Array<DynamicPageEdge>;
  nodes: Array<DynamicPage>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type DynamicPageConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type DynamicPageEdge = {
  __typename?: 'DynamicPageEdge';
  cursor: Scalars['String']['output'];
  node: DynamicPage;
};

export type EMailContactFilter = {
  createdAt?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  lastName?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntFilter>;
  segment?: InputMaybe<EMailSegmentFilter>;
  segmentId?: InputMaybe<IdFilter>;
  source?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type EMailEventFilter = {
  contact?: InputMaybe<EMailContactFilter>;
  createdAt?: InputMaybe<DateFilter>;
  eventType?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  sourceId?: InputMaybe<StringFilter>;
  sourceType?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type EMailSegmentFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  operator?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type EMongoliaType = KycInterface & {
  __typename?: 'EMongoliaType';
  address?: Maybe<Scalars['String']['output']>;
  approvedAt?: Maybe<Scalars['ISO8601Date']['output']>;
  approvedBy?: Maybe<Scalars['String']['output']>;
  civilId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  expireAt?: Maybe<Scalars['ISO8601Date']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  registerNum?: Maybe<Scalars['String']['output']>;
  status?: Maybe<KycStatus | `${KycStatus}`>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
  vendor?: Maybe<Vendor>;
  vendorId?: Maybe<Scalars['ID']['output']>;
  websiteId?: Maybe<Scalars['ID']['output']>;
};

export type ETicket = BaseModelInterface &
  Node & {
    __typename?: 'ETicket';
    activated?: Maybe<Scalars['Boolean']['output']>;
    activations?: Maybe<Array<ETicketActivation>>;
    activeActivation?: Maybe<ETicketActivation>;
    additionalInfo?: Maybe<Scalars['JSON']['output']>;
    amount?: Maybe<Scalars['Int']['output']>;
    attachmentContentType?: Maybe<Scalars['String']['output']>;
    attachmentFileName?: Maybe<Scalars['String']['output']>;
    body?: Maybe<Scalars['JSON']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    date?: Maybe<Scalars['ISO8601DateTime']['output']>;
    deactivatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    groupNo?: Maybe<Scalars['Int']['output']>;
    id: Scalars['ID']['output'];
    inventoryUnitId?: Maybe<Scalars['ID']['output']>;
    invite?: Maybe<EventInviteItem>;
    inviteId?: Maybe<Scalars['ID']['output']>;
    lineItem: LineItem;
    number?: Maybe<Scalars['String']['output']>;
    order: Order;
    product: Product;
    qrCode?: Maybe<Scalars['String']['output']>;
    qrData?: Maybe<Scalars['String']['output']>;
    receiverEmail?: Maybe<Scalars['String']['output']>;
    scannedBy?: Maybe<User>;
    seat?: Maybe<Scalars['String']['output']>;
    seatInfo?: Maybe<Scalars['JSON']['output']>;
    sentAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    usedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    user?: Maybe<User>;
    variant: Variant;
    vendor?: Maybe<Vendor>;
    website: Website;
  };

export type ETicketActivationsArgs = {
  eTicketId?: InputMaybe<Scalars['ID']['input']>;
};

export type ETicketCanIArgs = {
  action: CanIAction;
};

export type ETicketActivation = BaseModelInterface &
  Node & {
    __typename?: 'ETicketActivation';
    canI: Scalars['Boolean']['output'];
    citizenId?: Maybe<Scalars['String']['output']>;
    citizenship?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    eTicket: ETicket;
    eTicketsId: Scalars['ID']['output'];
    email?: Maybe<Scalars['String']['output']>;
    firstName?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    integrationResponse?: Maybe<Scalars['JSON']['output']>;
    lastName?: Maybe<Scalars['String']['output']>;
    nfcId?: Maybe<Scalars['String']['output']>;
    organization?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    phoneAdditional?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    ticketNumber?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    userId?: Maybe<Scalars['ID']['output']>;
    website?: Maybe<Website>;
    websiteId?: Maybe<Scalars['ID']['output']>;
  };

export type ETicketActivationCanIArgs = {
  action: CanIAction;
};

export type ETicketActivationFilter = {
  createdAt?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type ETicketActivationMethod = BaseModelInterface &
  Node & {
    __typename?: 'ETicketActivationMethod';
    activationMethod?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    config?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendorId?: Maybe<Scalars['ID']['output']>;
  };

export type ETicketActivationMethodCanIArgs = {
  action: CanIAction;
};

export type ETicketActivationMethodConnection = {
  __typename?: 'ETicketActivationMethodConnection';
  edges: Array<ETicketActivationMethodEdge>;
  nodes: Array<ETicketActivationMethod>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type ETicketActivationMethodConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type ETicketActivationMethodEdge = {
  __typename?: 'ETicketActivationMethodEdge';
  cursor: Scalars['String']['output'];
  node: ETicketActivationMethod;
};

export type ETicketConnection = {
  __typename?: 'ETicketConnection';
  edges: Array<ETicketEdge>;
  nodes: Array<ETicket>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type ETicketConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type ETicketEdge = {
  __typename?: 'ETicketEdge';
  cursor: Scalars['String']['output'];
  node: ETicket;
};

export type ETicketFilter = {
  activeActivation?: InputMaybe<ETicketActivationFilter>;
  amount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  lineItem?: InputMaybe<LineItemFilter>;
  number?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderFilter>;
  product?: InputMaybe<ProductFilter>;
  receiverEmail?: InputMaybe<StringFilter>;
  scannedBy?: InputMaybe<UserFilter>;
  scannedByMobileOrScannedByEmail?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  usedAt?: InputMaybe<DateFilter>;
  variant?: InputMaybe<VariantFilter>;
};

export type ETicketManifest = Node &
  ProductManifestInterface & {
    __typename?: 'ETicketManifest';
    brand?: Maybe<Brand>;
    canSupply?: Maybe<Scalars['Boolean']['output']>;
    eTickets: Array<ETicket>;
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    fulfillDuration?: Maybe<Scalars['Int']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    maxQty?: Maybe<Scalars['Int']['output']>;
    name: Scalars['String']['output'];
    optionsText?: Maybe<Scalars['String']['output']>;
    price: Scalars['Float']['output'];
    productCat?: Maybe<Scalars['String']['output']>;
    sku?: Maybe<Scalars['String']['output']>;
    slug: Scalars['String']['output'];
    totalOnHand?: Maybe<Scalars['Int']['output']>;
    vendor?: Maybe<Vendor>;
    weight?: Maybe<Scalars['Float']['output']>;
  };

export enum Ebarimt {
  ContractedNotPayer = 'contracted_not_payer',
  ContractedVatPayer = 'contracted_vat_payer',
  NotPayer = 'not_payer',
  NotRegistered = 'not_registered',
  SelfPrint = 'self_print',
  VatPayer = 'vat_payer',
}

export type EducationInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  degree?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  profession?: InputMaybe<Scalars['String']['input']>;
  school?: InputMaybe<Scalars['String']['input']>;
  since?: InputMaybe<Scalars['ISO8601Date']['input']>;
};

export type EmergencyContact = BaseModelInterface &
  Node & {
    __typename?: 'EmergencyContact';
    address?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    firstName?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    lastName?: Maybe<Scalars['String']['output']>;
    mobile?: Maybe<Scalars['String']['output']>;
    relation?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
  };

export type EmergencyContactCanIArgs = {
  action: CanIAction;
};

export type EmergencyContactInput = {
  _destroy?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  relation?: InputMaybe<Scalars['String']['input']>;
};

export type Employee = BaseModelInterface &
  Node & {
    __typename?: 'Employee';
    addedBy?: Maybe<User>;
    assets: AssetRoleConnection;
    bankAccounts?: Maybe<Array<BankAccount>>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    email?: Maybe<Scalars['String']['output']>;
    firstName?: Maybe<Scalars['String']['output']>;
    fullName?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    groups?: Maybe<BusinessUserGroupTypeConnection>;
    id: Scalars['ID']['output'];
    jobTitle?: Maybe<Scalars['String']['output']>;
    lastName?: Maybe<Scalars['String']['output']>;
    login?: Maybe<Scalars['String']['output']>;
    mobile?: Maybe<Scalars['String']['output']>;
    msCode?: Maybe<Scalars['String']['output']>;
    profile?: Maybe<BusinessUserProfile>;
    role?: Maybe<Scalars['String']['output']>;
    salesManagerBonus?: Maybe<Scalars['Float']['output']>;
    salesManagerIsVendor?: Maybe<Scalars['Boolean']['output']>;
    salesManagerTaxpayerNumber?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    vendor?: Maybe<Vendor>;
  };

export type EmployeeAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AssetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type EmployeeCanIArgs = {
  action: CanIAction;
};

export type EmployeeGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BusinessUserGroupFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type EmployeeConnection = {
  __typename?: 'EmployeeConnection';
  edges: Array<EmployeeEdge>;
  nodes: Array<Employee>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type EmployeeConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type EmployeeEdge = {
  __typename?: 'EmployeeEdge';
  cursor: Scalars['String']['output'];
  node: Employee;
};

export enum EmployeeRole {
  Admin = 'admin',
  Employee = 'employee',
}

export type EmploymentInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  employeeCount?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  since?: InputMaybe<Scalars['ISO8601Date']['input']>;
  years?: InputMaybe<Scalars['String']['input']>;
};

export type EnumStringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  notEq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ErpIntegration = BaseModelInterface &
  Node & {
    __typename?: 'ErpIntegration';
    active?: Maybe<Scalars['Boolean']['output']>;
    autoSync?: Maybe<Scalars['Boolean']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    erp?: Maybe<Scalars['String']['output']>;
    frequency?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    integrationRecords: IntegrationRecordConnection;
    integrationReports: IntegrationReportConnection;
    matchField?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    repeat?: Maybe<Scalars['String']['output']>;
    time?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendor?: Maybe<Vendor>;
  };

export type ErpIntegrationCanIArgs = {
  action: CanIAction;
};

export type ErpIntegrationIntegrationRecordsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IntegrationRecordFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type ErpIntegrationIntegrationReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IntegrationReportFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type ErpIntegrationFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  vendor?: InputMaybe<VendorFilter>;
};

export type Error = {
  __typename?: 'Error';
  attribute: Scalars['String']['output'];
  fullMessage: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Event = BaseModelInterface &
  Node & {
    __typename?: 'Event';
    canI: Scalars['Boolean']['output'];
    client?: Maybe<Scalars['String']['output']>;
    contact?: Maybe<Contact>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    device?: Maybe<Scalars['String']['output']>;
    eventType?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    ip?: Maybe<Scalars['String']['output']>;
    note?: Maybe<Scalars['String']['output']>;
    sourceId?: Maybe<Scalars['ID']['output']>;
    sourceType?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userAgent?: Maybe<Scalars['String']['output']>;
  };

export type EventCanIArgs = {
  action: CanIAction;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  edges: Array<EventEdge>;
  nodes: Array<Event>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type EventConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor: Scalars['String']['output'];
  node: Event;
};

export type EventEntree = Order | User;

export type EventEntryFilter = {
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  entree?: InputMaybe<UserFilter>;
  entreeId?: InputMaybe<IdFilter>;
  entreeType?: InputMaybe<StringFilter>;
  entryDate?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  score?: InputMaybe<IntFilter>;
  sourceId?: InputMaybe<IdFilter>;
  sourceType?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
  winning?: InputMaybe<PromotionFilter>;
  winningId?: InputMaybe<IdFilter>;
  winningType?: InputMaybe<StringFilter>;
};

export type EventEntryWinning = BaseModelInterface &
  Node & {
    __typename?: 'EventEntryWinning';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    eventEntry: EventEntry;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    source?: Maybe<EventWinning>;
    sourceId?: Maybe<Scalars['ID']['output']>;
    sourceType?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type EventEntryWinningCanIArgs = {
  action: CanIAction;
};

export type EventInvite = BaseModelInterface &
  Node & {
    __typename?: 'EventInvite';
    canI: Scalars['Boolean']['output'];
    company: Scalars['String']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    eTickets?: Maybe<ETicketConnection>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    items?: Maybe<EventInviteItemConnection>;
    number: Scalars['String']['output'];
    order?: Maybe<Order>;
    orderId?: Maybe<Scalars['ID']['output']>;
    product: Product;
    productId: Scalars['ID']['output'];
    quantity?: Maybe<Scalars['Int']['output']>;
    references?: Maybe<Scalars['JSON']['output']>;
    status: Scalars['String']['output'];
    ticketsCount?: Maybe<Scalars['Int']['output']>;
    total?: Maybe<Scalars['Float']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    usedTicketsCount?: Maybe<Scalars['Int']['output']>;
    user: User;
    userId: Scalars['ID']['output'];
    website: Website;
    websiteId: Scalars['ID']['output'];
  };

export type EventInviteCanIArgs = {
  action: CanIAction;
};

export type EventInviteETicketsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ETicketFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type EventInviteItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EventInviteItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type EventInviteConnection = {
  __typename?: 'EventInviteConnection';
  edges: Array<EventInviteEdge>;
  nodes: Array<EventInvite>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type EventInviteConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type EventInviteEdge = {
  __typename?: 'EventInviteEdge';
  cursor: Scalars['String']['output'];
  node: EventInvite;
};

export type EventInviteFilter = {
  company?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  number?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderFilter>;
  product?: InputMaybe<ProductFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userMobileOrUserEmail?: InputMaybe<StringFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type EventInviteItem = BaseModelInterface &
  Node & {
    __typename?: 'EventInviteItem';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    eTickets: ETicketConnection;
    email: Scalars['String']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invite: EventInvite;
    inviteId: Scalars['ID']['output'];
    mobile?: Maybe<Scalars['String']['output']>;
    quantity: Scalars['Int']['output'];
    receiverName: Scalars['String']['output'];
    status: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variant: Variant;
    variantId: Scalars['ID']['output'];
  };

export type EventInviteItemCanIArgs = {
  action: CanIAction;
};

export type EventInviteItemETicketsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ETicketFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type EventInviteItemConnection = {
  __typename?: 'EventInviteItemConnection';
  edges: Array<EventInviteItemEdge>;
  nodes: Array<EventInviteItem>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type EventInviteItemConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type EventInviteItemEdge = {
  __typename?: 'EventInviteItemEdge';
  cursor: Scalars['String']['output'];
  node: EventInviteItem;
};

export type EventInviteItemFilter = {
  createdAt?: InputMaybe<DateFilter>;
  eTickets?: InputMaybe<ETicketFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  invite?: InputMaybe<EventInviteFilter>;
  inviteId?: InputMaybe<IdFilter>;
  receiverName?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  variant?: InputMaybe<VariantFilter>;
  variantId?: InputMaybe<IdFilter>;
};

export type EventPrize = {
  __typename?: 'EventPrize';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type EventWinning = Promotion | StoreCredit | EventTry;

export type FeatureType = BaseModelInterface &
  Node & {
    __typename?: 'FeatureType';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    feature: Scalars['String']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website: Website;
  };

export type FeatureTypeCanIArgs = {
  action: CanIAction;
};

export type Featured = BaseModelInterface &
  Node & {
    __typename?: 'Featured';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    createdUser?: Maybe<User>;
    description?: Maybe<Scalars['String']['output']>;
    from?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isActive: Scalars['Boolean']['output'];
    tag?: Maybe<Scalars['String']['output']>;
    target?: Maybe<FeaturedTarget>;
    targetId: Scalars['ID']['output'];
    targetType: Scalars['String']['output'];
    to?: Maybe<Scalars['ISO8601DateTime']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type FeaturedCanIArgs = {
  action: CanIAction;
};

export type FeaturedConnection = {
  __typename?: 'FeaturedConnection';
  edges: Array<FeaturedEdge>;
  nodes: Array<Featured>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type FeaturedConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type FeaturedEdge = {
  __typename?: 'FeaturedEdge';
  cursor: Scalars['String']['output'];
  node: Featured;
};

export type FeaturedTarget = Brand | Listing | Merchant;

export type FeedbackFilter = {
  body?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  imageFileName?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  mainType?: InputMaybe<StringFilter>;
  orderNumber?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  phoneOrUserMobile?: InputMaybe<StringFilter>;
  resolver?: InputMaybe<UserFilter>;
  status?: InputMaybe<StringFilter>;
  topicParentTitle?: InputMaybe<StringFilter>;
  topicTitle?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type FeedbackTopic = BaseModelInterface &
  Node & {
    __typename?: 'FeedbackTopic';
    canI: Scalars['Boolean']['output'];
    children: Array<FeedbackTopic>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    feedbacks: FeedbackTypeConnection;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    orderRequired: Scalars['Boolean']['output'];
    parent?: Maybe<FeedbackTopic>;
    parentId?: Maybe<Scalars['ID']['output']>;
    position?: Maybe<Scalars['Int']['output']>;
    positive: Scalars['Boolean']['output'];
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website: Website;
    websiteId: Scalars['ID']['output'];
  };

export type FeedbackTopicCanIArgs = {
  action: CanIAction;
};

export type FeedbackTopicFeedbacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FeedbackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type FeedbackTopicConnection = {
  __typename?: 'FeedbackTopicConnection';
  edges: Array<FeedbackTopicEdge>;
  nodes: Array<FeedbackTopic>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type FeedbackTopicConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type FeedbackTopicEdge = {
  __typename?: 'FeedbackTopicEdge';
  cursor: Scalars['String']['output'];
  node: FeedbackTopic;
};

export type FeedbackTopicFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  orderRequired?: InputMaybe<BoolFilter>;
  parentId?: InputMaybe<StringFilter>;
  parentTitle?: InputMaybe<StringFilter>;
  positive?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  websiteId?: InputMaybe<StringFilter>;
};

export type FeedbackType = BaseModelInterface &
  Node & {
    __typename?: 'FeedbackType';
    body: Scalars['String']['output'];
    canI: Scalars['Boolean']['output'];
    comments: CommentConnection;
    createdAt: Scalars['ISO8601DateTime']['output'];
    email?: Maybe<Scalars['String']['output']>;
    firstName?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    lastName?: Maybe<Scalars['String']['output']>;
    mainType?: Maybe<Scalars['String']['output']>;
    order?: Maybe<Order>;
    phone?: Maybe<Scalars['String']['output']>;
    resolver?: Maybe<User>;
    status?: Maybe<Scalars['String']['output']>;
    topic?: Maybe<FeedbackTopic>;
    totalComments?: Maybe<Scalars['Int']['output']>;
    unreadCommentsCount: Scalars['Int']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    website: Website;
  };

export type FeedbackTypeCanIArgs = {
  action: CanIAction;
};

export type FeedbackTypeCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type FeedbackTypeConnection = {
  __typename?: 'FeedbackTypeConnection';
  edges: Array<FeedbackTypeEdge>;
  nodes: Array<FeedbackType>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type FeedbackTypeConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type FeedbackTypeEdge = {
  __typename?: 'FeedbackTypeEdge';
  cursor: Scalars['String']['output'];
  node: FeedbackType;
};

export type FinanceInput = {
  businessIncome?: InputMaybe<Scalars['Float']['input']>;
  creditLimit?: InputMaybe<Scalars['Float']['input']>;
  groceryOutcome?: InputMaybe<Scalars['Float']['input']>;
  hasCreditcard?: InputMaybe<Scalars['Boolean']['input']>;
  hasLoan?: InputMaybe<Scalars['Boolean']['input']>;
  householdOutcome?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  income?: InputMaybe<Scalars['Float']['input']>;
  loanExceed60?: InputMaybe<Scalars['Boolean']['input']>;
  loanpaymentAmoutMonthly?: InputMaybe<Scalars['Float']['input']>;
  otherIncome?: InputMaybe<Scalars['Float']['input']>;
  otherOutcome?: InputMaybe<Scalars['Float']['input']>;
};

export type FirstOrder = Node &
  RuleInterface & {
    __typename?: 'FirstOrder';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type FlatPercentItemTotal = BaseModelInterface &
  CalculatorInterface &
  Node & {
    __typename?: 'FlatPercentItemTotal';
    calculableId?: Maybe<Scalars['Int']['output']>;
    calculableType?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredFlatPercent: Scalars['Float']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type FlatPercentItemTotalCanIArgs = {
  action: CanIAction;
};

export type FlatPercentOrderTotal = BaseModelInterface &
  CalculatorInterface &
  Node & {
    __typename?: 'FlatPercentOrderTotal';
    calculableId?: Maybe<Scalars['Int']['output']>;
    calculableType?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredFlatPercent: Scalars['Float']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type FlatPercentOrderTotalCanIArgs = {
  action: CanIAction;
};

export type FlatRate = BaseModelInterface &
  CalculatorInterface &
  Node & {
    __typename?: 'FlatRate';
    calculableId?: Maybe<Scalars['Int']['output']>;
    calculableType?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredAmount: Scalars['Float']['output'];
    preferredCurrency: Scalars['String']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type FlatRateCanIArgs = {
  action: CanIAction;
};

export type FlexiRate = BaseModelInterface &
  CalculatorInterface &
  Node & {
    __typename?: 'FlexiRate';
    calculableId?: Maybe<Scalars['Int']['output']>;
    calculableType?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredAdditionalItem: Scalars['Float']['output'];
    preferredCurrency: Scalars['String']['output'];
    preferredFirstItem: Scalars['Float']['output'];
    preferredMaxItems: Scalars['Int']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type FlexiRateCanIArgs = {
  action: CanIAction;
};

export type Follow = BaseModelInterface &
  Node & {
    __typename?: 'Follow';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    followers: FollowerConnection;
    followersCount: Scalars['Int']['output'];
    following: Scalars['Boolean']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    target?: Maybe<FollowTarget>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type FollowCanIArgs = {
  action: CanIAction;
};

export type FollowFollowersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FollowerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type FollowFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  targetId?: InputMaybe<StringFilter>;
  targetType?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  vendorName?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<WebsiteFilter>;
};

export type FollowTarget = Brand | Vendor;

export type Follower = BaseModelInterface &
  Node & {
    __typename?: 'Follower';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    follow?: Maybe<Follow>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
  };

export type FollowerCanIArgs = {
  action: CanIAction;
};

export type FollowerConnection = {
  __typename?: 'FollowerConnection';
  edges: Array<FollowerEdge>;
  nodes: Array<Follower>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type FollowerConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type FollowerEdge = {
  __typename?: 'FollowerEdge';
  cursor: Scalars['String']['output'];
  node: Follower;
};

export type FollowerFilter = {
  createdAt?: InputMaybe<DateFilter>;
  follow?: InputMaybe<FollowFilter>;
  id?: InputMaybe<IdFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  vendorName?: InputMaybe<Scalars['String']['input']>;
};

export type FormAnswerFilter = {
  body?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  entry?: InputMaybe<FormEntryFilter>;
  field?: InputMaybe<FormFieldFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type FormAnswerInput = {
  attachment?: InputMaybe<Scalars['Upload']['input']>;
  body: Scalars['String']['input'];
  fieldId: Scalars['ID']['input'];
};

export type FormEntryFilter = {
  answers?: InputMaybe<FormAnswerFilter>;
  createdAt?: InputMaybe<DateFilter>;
  form?: InputMaybe<FormFilter>;
  id?: InputMaybe<IdFilter>;
  node?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type FormFieldFilter = {
  active?: InputMaybe<BoolFilter>;
  answers?: InputMaybe<FormAnswerFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  fieldType?: InputMaybe<StringFilter>;
  form?: InputMaybe<FormFilter>;
  id?: InputMaybe<IdFilter>;
  label?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type FormFieldInput = {
  _destroy?: InputMaybe<Scalars['Boolean']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fieldType?: InputMaybe<Scalars['String']['input']>;
  formId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type FormFilter = {
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateFilter>;
  createdBy?: InputMaybe<UserFilter>;
  description?: InputMaybe<StringFilter>;
  entries?: InputMaybe<FormEntryFilter>;
  fields?: InputMaybe<FormFieldFilter>;
  id?: InputMaybe<IdFilter>;
  permalink?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type Gamification = Node & {
  __typename?: 'Gamification';
  actions: Array<GamificationAction>;
  active: Scalars['Boolean']['output'];
  clientIds?: Maybe<Array<Scalars['ID']['output']>>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  detailUrl?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  gid: Scalars['ID']['output'];
  goalPolicy: Scalars['String']['output'];
  goalProducts: ProductConnection;
  goalVariants: VariantConnection;
  goals: Array<GamificationGoal>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  participatingCount: Scalars['Int']['output'];
  performOn: GamificationPerformOnEnum | `${GamificationPerformOnEnum}`;
  preferences: Scalars['JSON']['output'];
  progresses: ProgressConnection;
  scope: Scalars['String']['output'];
  segmentIds?: Maybe<Array<Scalars['ID']['output']>>;
  startsAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  totalProgressPercent: Scalars['Float']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  userIds?: Maybe<Array<Scalars['ID']['output']>>;
  vendorId?: Maybe<Scalars['ID']['output']>;
  vendorIds?: Maybe<Array<Scalars['ID']['output']>>;
  websiteId?: Maybe<Scalars['ID']['output']>;
};

export type GamificationGoalProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type GamificationGoalVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VariantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  permission?: InputMaybe<VariantsPermission>;
  sort?: InputMaybe<SortFilter>;
};

export type GamificationProgressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationProgressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type GamificationTotalProgressPercentArgs = {
  ownerId: Scalars['ID']['input'];
  ownerType: GamificationOwnerTypeEnum;
};

export type GamificationAction = {
  createdAt: Scalars['ISO8601DateTime']['output'];
  gamificationId: Scalars['ID']['output'];
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type GamificationActionAddToSegment = GamificationAction &
  Node & {
    __typename?: 'GamificationActionAddToSegment';
    createdAt: Scalars['ISO8601DateTime']['output'];
    gamificationId: Scalars['ID']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    type: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type GamificationActionCreatePromotion = GamificationAction &
  Node & {
    __typename?: 'GamificationActionCreatePromotion';
    createdAt: Scalars['ISO8601DateTime']['output'];
    gamificationId: Scalars['ID']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    type: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type GamificationActionCreateWallet = GamificationAction &
  Node & {
    __typename?: 'GamificationActionCreateWallet';
    createdAt: Scalars['ISO8601DateTime']['output'];
    gamificationId: Scalars['ID']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    type: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type GamificationActionPassiveImage = GamificationAction &
  Node & {
    __typename?: 'GamificationActionPassiveImage';
    createdAt: Scalars['ISO8601DateTime']['output'];
    gamificationId: Scalars['ID']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    image?: Maybe<Image>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    type: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type GamificationActionSendNotification = GamificationAction &
  Node & {
    __typename?: 'GamificationActionSendNotification';
    createdAt: Scalars['ISO8601DateTime']['output'];
    gamificationId: Scalars['ID']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    type: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type GamificationConnection = {
  __typename?: 'GamificationConnection';
  edges: Array<GamificationEdge>;
  nodes: Array<Gamification>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type GamificationConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type GamificationEdge = {
  __typename?: 'GamificationEdge';
  cursor: Scalars['String']['output'];
  node: Gamification;
};

export type GamificationFilter = {
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateFilter>;
  expiresAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  startsAt?: InputMaybe<DateFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  vendor?: InputMaybe<VendorFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type GamificationGoal = {
  accumulateBy: GamificationGoalAccumulateBy | `${GamificationGoalAccumulateBy}`;
  createdAt: Scalars['ISO8601DateTime']['output'];
  currentCycle: Scalars['String']['output'];
  gamificationId: Scalars['ID']['output'];
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nextCycle: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  prevCycle: Scalars['String']['output'];
  prevCycles: Array<Scalars['String']['output']>;
  repeat: GamificationGoalRepeat | `${GamificationGoalRepeat}`;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type GamificationGoalPrevCyclesArgs = {
  size: Scalars['Int']['input'];
};

export enum GamificationGoalAccumulateBy {
  Business = 'business',
  User = 'user',
}

export type GamificationGoalOrderTotal = GamificationGoal &
  Node & {
    __typename?: 'GamificationGoalOrderTotal';
    accumulateBy: GamificationGoalAccumulateBy | `${GamificationGoalAccumulateBy}`;
    createdAt: Scalars['ISO8601DateTime']['output'];
    currentCycle: Scalars['String']['output'];
    gamificationId: Scalars['ID']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    nextCycle: Scalars['String']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    prevCycle: Scalars['String']['output'];
    prevCycles: Array<Scalars['String']['output']>;
    repeat: GamificationGoalRepeat | `${GamificationGoalRepeat}`;
    type: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type GamificationGoalOrderTotalPrevCyclesArgs = {
  size: Scalars['Int']['input'];
};

export type GamificationGoalProduct = GamificationGoal &
  Node & {
    __typename?: 'GamificationGoalProduct';
    accumulateBy: GamificationGoalAccumulateBy | `${GamificationGoalAccumulateBy}`;
    createdAt: Scalars['ISO8601DateTime']['output'];
    currentCycle: Scalars['String']['output'];
    gamificationId: Scalars['ID']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    nextCycle: Scalars['String']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    prevCycle: Scalars['String']['output'];
    prevCycles: Array<Scalars['String']['output']>;
    productIds: Array<Scalars['ID']['output']>;
    repeat: GamificationGoalRepeat | `${GamificationGoalRepeat}`;
    storeIds: Array<Scalars['ID']['output']>;
    type: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variantIds: Array<Scalars['ID']['output']>;
  };

export type GamificationGoalProductPrevCyclesArgs = {
  size: Scalars['Int']['input'];
};

export type GamificationGoalProperty = GamificationGoal &
  Node & {
    __typename?: 'GamificationGoalProperty';
    accumulateBy: GamificationGoalAccumulateBy | `${GamificationGoalAccumulateBy}`;
    createdAt: Scalars['ISO8601DateTime']['output'];
    currentCycle: Scalars['String']['output'];
    gamificationId: Scalars['ID']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    nextCycle: Scalars['String']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    prevCycle: Scalars['String']['output'];
    prevCycles: Array<Scalars['String']['output']>;
    repeat: GamificationGoalRepeat | `${GamificationGoalRepeat}`;
    type: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type GamificationGoalPropertyPrevCyclesArgs = {
  size: Scalars['Int']['input'];
};

export enum GamificationGoalRepeat {
  Daily = 'daily',
  Goal = 'goal',
  Monthly = 'monthly',
  NoRepeat = 'no_repeat',
  Quarterly = 'quarterly',
  Weekly = 'weekly',
  Yearly = 'yearly',
}

export enum GamificationOwnerTypeEnum {
  BusinessClient = 'BUSINESS_CLIENT',
  User = 'USER',
  Vendor = 'VENDOR',
}

export enum GamificationPerformOnEnum {
  Paid = 'PAID',
  Shipped = 'SHIPPED',
}

export type GamificationProgressFilter = {
  createdAt?: InputMaybe<DateFilter>;
  cycle?: InputMaybe<StringFilter>;
  date?: InputMaybe<DateFilter>;
  gamificationId?: InputMaybe<IdFilter>;
  goalId?: InputMaybe<IdFilter>;
  id?: InputMaybe<IdFilter>;
  lastRecords?: InputMaybe<Scalars['Boolean']['input']>;
  ownerId?: InputMaybe<IdFilter>;
  ownerType?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export enum Gender {
  F = 'F',
  M = 'M',
}

export type GiftCard = BaseModelInterface &
  Node & {
    __typename?: 'GiftCard';
    amount?: Maybe<Scalars['Int']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    currency?: Maybe<Scalars['String']['output']>;
    deactivatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    giftMessage?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    inventoryUnitId?: Maybe<Scalars['ID']['output']>;
    lineItem?: Maybe<LineItem>;
    number?: Maybe<Scalars['String']['output']>;
    order?: Maybe<Order>;
    printed: Scalars['Boolean']['output'];
    product?: Maybe<Product>;
    purchaserId?: Maybe<Scalars['ID']['output']>;
    purchaserName?: Maybe<Scalars['String']['output']>;
    recipientEmail?: Maybe<Scalars['String']['output']>;
    recipientName?: Maybe<Scalars['String']['output']>;
    recipientPhone?: Maybe<Scalars['String']['output']>;
    redeemable?: Maybe<Scalars['Boolean']['output']>;
    redeemedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    redeemer?: Maybe<User>;
    redeemerVendor?: Maybe<Vendor>;
    redemptionCode?: Maybe<Scalars['String']['output']>;
    sendEmailAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    sentAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    storeCreditId?: Maybe<Scalars['ID']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type GiftCardCanIArgs = {
  action: CanIAction;
};

export type GiftCardConnection = {
  __typename?: 'GiftCardConnection';
  edges: Array<GiftCardEdge>;
  nodes: Array<GiftCard>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type GiftCardConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type GiftCardEdge = {
  __typename?: 'GiftCardEdge';
  cursor: Scalars['String']['output'];
  node: GiftCard;
};

export type GiftCardFilter = {
  amount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  deactivatedAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  number?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderFilter>;
  printed?: InputMaybe<BoolFilter>;
  product?: InputMaybe<ProductFilter>;
  purchaserName?: InputMaybe<StringFilter>;
  recipientEmail?: InputMaybe<StringFilter>;
  recipientName?: InputMaybe<StringFilter>;
  redeemable?: InputMaybe<BoolFilter>;
  redeemedAt?: InputMaybe<DateFilter>;
  redeemer?: InputMaybe<UserFilter>;
  redeemerEmailOrRedeemerMobile?: InputMaybe<StringFilter>;
  redemptionCode?: InputMaybe<StringFilter>;
  sendEmailAt?: InputMaybe<DateFilter>;
  sentAt?: InputMaybe<DateFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  usedOrderNumber?: InputMaybe<StringFilter>;
  usedOrders?: InputMaybe<OrderFilter>;
  variant?: InputMaybe<VariantFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type GiftCardManifest = Node &
  ProductManifestInterface & {
    __typename?: 'GiftCardManifest';
    brand?: Maybe<Brand>;
    canSupply?: Maybe<Scalars['Boolean']['output']>;
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    fulfillDuration?: Maybe<Scalars['Int']['output']>;
    gid: Scalars['ID']['output'];
    giftCards?: Maybe<Array<GiftCard>>;
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    maxQty?: Maybe<Scalars['Int']['output']>;
    name: Scalars['String']['output'];
    optionsText?: Maybe<Scalars['String']['output']>;
    price: Scalars['Float']['output'];
    productCat?: Maybe<Scalars['String']['output']>;
    sku?: Maybe<Scalars['String']['output']>;
    slug: Scalars['String']['output'];
    totalOnHand?: Maybe<Scalars['Int']['output']>;
    vendor?: Maybe<Vendor>;
    weight?: Maybe<Scalars['Float']['output']>;
  };

export type GiftItemInput = {
  id: Scalars['ID']['input'];
  qty: Scalars['Int']['input'];
};

export type GolomtCard = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'GolomtCard';
    bank: Scalars['String']['output'];
    canI: Scalars['Boolean']['output'];
    cardHolder: Scalars['String']['output'];
    cardNumber: Scalars['String']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    creditLimit?: Maybe<Scalars['Float']['output']>;
    currentBalance?: Maybe<Scalars['Float']['output']>;
    expiry?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    passwordSet?: Maybe<Scalars['Boolean']['output']>;
    paymentMethod?: Maybe<PaymentMethod>;
    paymentMethodId?: Maybe<Scalars['ID']['output']>;
    statements?: Maybe<Scalars['JSON']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type GolomtCardCanIArgs = {
  action: CanIAction;
};

export type GolomtCardStatementsArgs = {
  from: Scalars['String']['input'];
  to?: InputMaybe<Scalars['String']['input']>;
};

export type GolomtDigitalInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'GolomtDigitalInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceId?: Maybe<Scalars['String']['output']>;
    registerNumber?: Maybe<Scalars['String']['output']>;
    requestId?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type GolomtDigitalInvoiceCanIArgs = {
  action: CanIAction;
};

export type GolomtKyc = KycInterface & {
  __typename?: 'GolomtKYC';
  address1?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  address3?: Maybe<Scalars['String']['output']>;
  apartment?: Maybe<Scalars['String']['output']>;
  appointment?: Maybe<Scalars['String']['output']>;
  approvedAt?: Maybe<Scalars['ISO8601Date']['output']>;
  approvedBy?: Maybe<Scalars['String']['output']>;
  branchId?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  creditLimit?: Maybe<Scalars['Int']['output']>;
  degree?: Maybe<Scalars['String']['output']>;
  doorNo?: Maybe<Scalars['String']['output']>;
  embossName?: Maybe<Scalars['String']['output']>;
  enrollmentDate?: Maybe<Scalars['String']['output']>;
  entry?: Maybe<Scalars['String']['output']>;
  expireAt?: Maybe<Scalars['ISO8601Date']['output']>;
  id: Scalars['ID']['output'];
  isCustomer?: Maybe<Scalars['Boolean']['output']>;
  isEbankEnabled?: Maybe<Scalars['Boolean']['output']>;
  isMasterAgreement?: Maybe<Scalars['Boolean']['output']>;
  isPreApproved?: Maybe<Scalars['Boolean']['output']>;
  maritalStatus?: Maybe<Scalars['String']['output']>;
  schoolName?: Maybe<Scalars['String']['output']>;
  sector?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  status?: Maybe<KycStatus | `${KycStatus}`>;
  streetName?: Maybe<Scalars['String']['output']>;
  subDistrict?: Maybe<Scalars['String']['output']>;
  subSector?: Maybe<Scalars['String']['output']>;
  town?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
  vendor?: Maybe<Vendor>;
  vendorId?: Maybe<Scalars['ID']['output']>;
  websiteId?: Maybe<Scalars['ID']['output']>;
  yearsWork?: Maybe<Scalars['Int']['output']>;
};

export type GolomtPosInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'GolomtPosInvoice';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    merchantId?: Maybe<Scalars['String']['output']>;
    pan?: Maybe<Scalars['String']['output']>;
    referenceNo?: Maybe<Scalars['String']['output']>;
    response?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type GolomtPosInvoiceCanIArgs = {
  action: CanIAction;
};

export type HandleCartItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  itemAction: ShopperCartItemAction | `${ShopperCartItemAction}`;
  notify?: InputMaybe<Scalars['Boolean']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['ID']['input']>;
  variantIndex?: InputMaybe<Scalars['Int']['input']>;
};

export type HandlebarTemplate = BaseModelInterface &
  Node & {
    __typename?: 'HandlebarTemplate';
    canI: Scalars['Boolean']['output'];
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    paperSize?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type HandlebarTemplateCanIArgs = {
  action: CanIAction;
};

export type HiPayInAppInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'HiPayInAppInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    checkoutId?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    requestId?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type HiPayInAppInvoiceCanIArgs = {
  action: CanIAction;
};

export type HiPayInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'HiPayInvoice';
    canI: Scalars['Boolean']['output'];
    checkoutId?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    requestId?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type HiPayInvoiceCanIArgs = {
  action: CanIAction;
};

export type History = Node &
  RuleInterface & {
    __typename?: 'History';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type HotelManifest = Node &
  ProductManifestInterface & {
    __typename?: 'HotelManifest';
    brand?: Maybe<Brand>;
    canSupply?: Maybe<Scalars['Boolean']['output']>;
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    fulfillDuration?: Maybe<Scalars['Int']['output']>;
    gid: Scalars['ID']['output'];
    hotel: Array<HotelProduct>;
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    maxQty?: Maybe<Scalars['Int']['output']>;
    name: Scalars['String']['output'];
    optionsText?: Maybe<Scalars['String']['output']>;
    price: Scalars['Float']['output'];
    productCat?: Maybe<Scalars['String']['output']>;
    sku?: Maybe<Scalars['String']['output']>;
    slug: Scalars['String']['output'];
    totalOnHand?: Maybe<Scalars['Int']['output']>;
    vendor?: Maybe<Vendor>;
    weight?: Maybe<Scalars['Float']['output']>;
  };

export type HotelProduct = BaseModelInterface &
  Node & {
    __typename?: 'HotelProduct';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    guest?: Maybe<Scalars['String']['output']>;
    hotel?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    lineItem?: Maybe<LineItem>;
    name?: Maybe<Scalars['String']['output']>;
    price?: Maybe<Scalars['Float']['output']>;
    reserve?: Maybe<Scalars['String']['output']>;
    room?: Maybe<Scalars['String']['output']>;
    sku?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
    website?: Maybe<Website>;
  };

export type HotelProductCanIArgs = {
  action: CanIAction;
};

export type IdFilter = {
  blank?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gteq?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lteq?: InputMaybe<Scalars['Int']['input']>;
  notEq?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Image = BaseModelInterface &
  Node & {
    __typename?: 'Image';
    alt?: Maybe<Scalars['String']['output']>;
    attachmentContentType?: Maybe<Scalars['String']['output']>;
    attachmentFileName?: Maybe<Scalars['String']['output']>;
    attachmentFileSize?: Maybe<Scalars['Int']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    endDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    group?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    link?: Maybe<Scalars['String']['output']>;
    position?: Maybe<Scalars['Int']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    url?: Maybe<Scalars['String']['output']>;
    user?: Maybe<User>;
    vendor?: Maybe<Vendor>;
    viewableId?: Maybe<Scalars['ID']['output']>;
    viewableType?: Maybe<Scalars['String']['output']>;
    website?: Maybe<Website>;
  };

export type ImageCanIArgs = {
  action: CanIAction;
};

export type ImageUrlArgs = {
  format?: InputMaybe<ImageFormat>;
  height: Scalars['Int']['input'];
  width: Scalars['Int']['input'];
};

export type ImageConnection = {
  __typename?: 'ImageConnection';
  edges: Array<ImageEdge>;
  nodes: Array<Image>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type ImageConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type ImageEdge = {
  __typename?: 'ImageEdge';
  cursor: Scalars['String']['output'];
  node: Image;
};

export enum ImageFormat {
  Jpeg = 'jpeg',
  Png = 'png',
  Webp = 'webp',
}

export type ImageVariation = Node & {
  __typename?: 'ImageVariation';
  alt?: Maybe<Scalars['String']['output']>;
  attachmentContentType?: Maybe<Scalars['String']['output']>;
  attachmentFileName?: Maybe<Scalars['String']['output']>;
  attachmentFileSize?: Maybe<Scalars['Int']['output']>;
  attachmentId?: Maybe<Scalars['ID']['output']>;
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  large?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Scalars['String']['output']>;
  small?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type ImageVariationUrlArgs = {
  crop?: InputMaybe<Array<Scalars['Int']['input']>>;
  format?: InputMaybe<ImageFormat>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  resizeAndPad?: InputMaybe<Array<Scalars['Int']['input']>>;
  resizeToFill?: InputMaybe<Array<Scalars['Int']['input']>>;
  resizeToFit?: InputMaybe<Array<Scalars['Int']['input']>>;
  resizeToLimit?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntFilter = {
  blank?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gteq?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lteq?: InputMaybe<Scalars['Float']['input']>;
  notEq?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IntegrationRecord = BaseModelInterface &
  Node & {
    __typename?: 'IntegrationRecord';
    body?: Maybe<Scalars['JSON']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    erpIntegration?: Maybe<ErpIntegration>;
    erpIntegrationId?: Maybe<Scalars['ID']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    idx?: Maybe<Scalars['String']['output']>;
    notFound?: Maybe<Scalars['Boolean']['output']>;
    preferences?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type IntegrationRecordCanIArgs = {
  action: CanIAction;
};

export type IntegrationRecordConnection = {
  __typename?: 'IntegrationRecordConnection';
  edges: Array<IntegrationRecordEdge>;
  nodes: Array<IntegrationRecord>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type IntegrationRecordConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type IntegrationRecordEdge = {
  __typename?: 'IntegrationRecordEdge';
  cursor: Scalars['String']['output'];
  node: IntegrationRecord;
};

export type IntegrationRecordFilter = {
  createdAt?: InputMaybe<DateFilter>;
  erpIntegration?: InputMaybe<ErpIntegrationFilter>;
  erpIntegrationId?: InputMaybe<IdFilter>;
  id?: InputMaybe<IdFilter>;
  idx?: InputMaybe<StringFilter>;
  notFound?: InputMaybe<BoolFilter>;
  preferences?: InputMaybe<StringFilter>;
  status?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type IntegrationReport = BaseModelInterface &
  Node & {
    __typename?: 'IntegrationReport';
    body?: Maybe<Scalars['JSON']['output']>;
    canI: Scalars['Boolean']['output'];
    category?: Maybe<Scalars['String']['output']>;
    created?: Maybe<Scalars['Int']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    direction: Scalars['Boolean']['output'];
    endedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    excluded?: Maybe<Scalars['Int']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    message?: Maybe<Scalars['String']['output']>;
    notFound: Scalars['Int']['output'];
    owner?: Maybe<IntegrationReportSource>;
    ownerId?: Maybe<Scalars['ID']['output']>;
    ownerType?: Maybe<Scalars['String']['output']>;
    received: Scalars['Int']['output'];
    skipped: Scalars['Int']['output'];
    source?: Maybe<IntegrationReportSource>;
    sourceId?: Maybe<Scalars['ID']['output']>;
    sourceType?: Maybe<Scalars['String']['output']>;
    startedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    synced: Scalars['Int']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type IntegrationReportCanIArgs = {
  action: CanIAction;
};

export type IntegrationReportConnection = {
  __typename?: 'IntegrationReportConnection';
  edges: Array<IntegrationReportEdge>;
  nodes: Array<IntegrationReport>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type IntegrationReportConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type IntegrationReportEdge = {
  __typename?: 'IntegrationReportEdge';
  cursor: Scalars['String']['output'];
  node: IntegrationReport;
};

export type IntegrationReportFilter = {
  category?: InputMaybe<StringFilter>;
  created?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  data?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  endedAt?: InputMaybe<DateFilter>;
  excluded?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  message?: InputMaybe<StringFilter>;
  notFound?: InputMaybe<IntFilter>;
  ownerId?: InputMaybe<IdFilter>;
  ownerType?: InputMaybe<StringFilter>;
  received?: InputMaybe<IntFilter>;
  skipped?: InputMaybe<IntFilter>;
  source?: InputMaybe<OrderFilter>;
  sourceId?: InputMaybe<IdFilter>;
  sourceType?: InputMaybe<StringFilter>;
  startedAt?: InputMaybe<DateFilter>;
  status?: InputMaybe<StringFilter>;
  synced?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type IntegrationReportSource = Order | Vendor | Website;

export type IntendInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'IntendInvoice';
    bonus?: Maybe<Scalars['Int']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    fullName?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    installationPrice?: Maybe<Scalars['Int']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    perMonthAmount?: Maybe<Scalars['Int']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    price?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    username?: Maybe<Scalars['String']['output']>;
  };

export type IntendInvoiceCanIArgs = {
  action: CanIAction;
};

export type Interval = BaseModelInterface &
  CalculatorInterface &
  Node & {
    __typename?: 'Interval';
    calculableId?: Maybe<Scalars['Int']['output']>;
    calculableType?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredAmount: Scalars['Float']['output'];
    preferredCurrency: Scalars['String']['output'];
    preferredInterval: Scalars['Int']['output'];
    preferredMatchPolicy: Scalars['String']['output'];
    preferredRule: Scalars['String']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type IntervalCanIArgs = {
  action: CanIAction;
};

export type InventoryUnit = BaseModelInterface &
  Node & {
    __typename?: 'InventoryUnit';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    inventoryUnitActions: Array<InventoryUnitAction>;
    lineItem?: Maybe<LineItem>;
    order?: Maybe<Order>;
    originalReturnItem?: Maybe<ReturnItem>;
    pending?: Maybe<Scalars['Boolean']['output']>;
    quantity?: Maybe<Scalars['Int']['output']>;
    shipment?: Maybe<Shipment>;
    state?: Maybe<Scalars['String']['output']>;
    totalPrice: Scalars['Float']['output'];
    unitPrice: Scalars['Float']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variant?: Maybe<Variant>;
  };

export type InventoryUnitCanIArgs = {
  action: CanIAction;
};

export type InventoryUnitAction = BaseModelInterface &
  Node & {
    __typename?: 'InventoryUnitAction';
    action?: Maybe<Scalars['String']['output']>;
    actionBy: User;
    canI: Scalars['Boolean']['output'];
    comment?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    inventoryUnit: InventoryUnit;
    lineItem: LineItem;
    location?: Maybe<StoreLocation>;
    order: Order;
    quantity?: Maybe<Scalars['Int']['output']>;
    shipment: Shipment;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variant: Variant;
  };

export type InventoryUnitActionCanIArgs = {
  action: CanIAction;
};

export type InventoryUnitActionConnection = {
  __typename?: 'InventoryUnitActionConnection';
  edges: Array<InventoryUnitActionEdge>;
  nodes: Array<InventoryUnitAction>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type InventoryUnitActionConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type InventoryUnitActionEdge = {
  __typename?: 'InventoryUnitActionEdge';
  cursor: Scalars['String']['output'];
  node: InventoryUnitAction;
};

export type InventoryUnitActionFilter = {
  actionBy?: InputMaybe<UserFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  inventoryUnit?: InputMaybe<InventoryUnitFilter>;
  lineItem?: InputMaybe<LineItemFilter>;
  location?: InputMaybe<StoreLocationFilter>;
  order?: InputMaybe<OrderFilter>;
  quantity?: InputMaybe<StringFilter>;
  shipment?: InputMaybe<ShipmentFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  variant?: InputMaybe<VariantFilter>;
};

export type InventoryUnitFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  lineItems?: InputMaybe<LineItemFilter>;
  order?: InputMaybe<OrderFilter>;
  pending?: InputMaybe<BoolFilter>;
  quantity?: InputMaybe<IntFilter>;
  state?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  variant?: InputMaybe<VariantFilter>;
};

export type Invitation = BaseModelInterface &
  Node & {
    __typename?: 'Invitation';
    accepts: InvitationAcceptConnection;
    active?: Maybe<Scalars['Boolean']['output']>;
    canI: Scalars['Boolean']['output'];
    code: Scalars['String']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    endsAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    preferences: Scalars['JSON']['output'];
    startsAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    type: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userInvitations: UserInvitationConnection;
    website: Website;
    websiteId: Scalars['ID']['output'];
  };

export type InvitationAcceptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type InvitationCanIArgs = {
  action: CanIAction;
};

export type InvitationUserInvitationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type InvitationAccept = BaseModelInterface &
  Node & {
    __typename?: 'InvitationAccept';
    acceptedAt: Scalars['ISO8601DateTime']['output'];
    acceptedUser: User;
    acceptedUserId: Scalars['ID']['output'];
    active: Scalars['Boolean']['output'];
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invitation: Invitation;
    invitationId: Scalars['ID']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userInvitation: UserInvitation;
    userInvitationId: Scalars['ID']['output'];
    website: Website;
    websiteId: Scalars['ID']['output'];
  };

export type InvitationAcceptCanIArgs = {
  action: CanIAction;
};

export type InvitationAcceptConnection = {
  __typename?: 'InvitationAcceptConnection';
  edges: Array<InvitationAcceptEdge>;
  nodes: Array<InvitationAccept>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type InvitationAcceptConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type InvitationAcceptEdge = {
  __typename?: 'InvitationAcceptEdge';
  cursor: Scalars['String']['output'];
  node: InvitationAccept;
};

export type ItemTotal = Node &
  RuleInterface & {
    __typename?: 'ItemTotal';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredAmountMax: Scalars['Float']['output'];
    preferredAmountMin: Scalars['Float']['output'];
    preferredOperatorMax: Scalars['String']['output'];
    preferredOperatorMin: Scalars['String']['output'];
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type JobLog = BaseModelInterface &
  Node & {
    __typename?: 'JobLog';
    arguments?: Maybe<Scalars['JSON']['output']>;
    at?: Maybe<Scalars['Int']['output']>;
    canI: Scalars['Boolean']['output'];
    completedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    errorMessage?: Maybe<Scalars['String']['output']>;
    file?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    jobId?: Maybe<Scalars['String']['output']>;
    jobType?: Maybe<Scalars['String']['output']>;
    latency?: Maybe<Scalars['Int']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    percentComplete?: Maybe<Scalars['Int']['output']>;
    startedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    total?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type JobLogCanIArgs = {
  action: CanIAction;
};

export type KeyValue = {
  __typename?: 'KeyValue';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Keyword = BaseModelInterface &
  Node & {
    __typename?: 'Keyword';
    alias?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    full?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    gpc?: Maybe<Scalars['String']['output']>;
    grouping?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    mn?: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
    products: ProductConnection;
    productsCount: Scalars['Int']['output'];
    prototype?: Maybe<Prototype>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type KeywordCanIArgs = {
  action: CanIAction;
};

export type KeywordProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type KeywordFilter = {
  alias?: InputMaybe<StringFilter>;
  byRelevance?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  mn?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  prototype?: InputMaybe<PrototypeFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type KhaanLeasingInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'KhaanLeasingInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoice?: Maybe<Scalars['String']['output']>;
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    qrLink?: Maybe<Scalars['String']['output']>;
    register?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type KhaanLeasingInvoiceCanIArgs = {
  action: CanIAction;
};

export type KycInterface = {
  approvedAt?: Maybe<Scalars['ISO8601Date']['output']>;
  approvedBy?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  expireAt?: Maybe<Scalars['ISO8601Date']['output']>;
  id: Scalars['ID']['output'];
  status?: Maybe<KycStatus | `${KycStatus}`>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
  vendor?: Maybe<Vendor>;
  vendorId?: Maybe<Scalars['ID']['output']>;
  websiteId?: Maybe<Scalars['ID']['output']>;
};

export enum KycStatus {
  Approved = 'approved',
  Pending = 'pending',
  Rejected = 'rejected',
}

export type LeasingInfo = BaseModelInterface &
  Node & {
    __typename?: 'LeasingInfo';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    customerFee?: Maybe<Scalars['Float']['output']>;
    gid: Scalars['ID']['output'];
    hasQuickLoan?: Maybe<Scalars['Boolean']['output']>;
    id: Scalars['ID']['output'];
    incomeConfirm?: Maybe<Scalars['Boolean']['output']>;
    interest?: Maybe<Scalars['Float']['output']>;
    maxAmount?: Maybe<Scalars['Float']['output']>;
    maxMonth?: Maybe<Scalars['Float']['output']>;
    merchantFee?: Maybe<Scalars['Float']['output']>;
    status?: Maybe<Scalars['Int']['output']>;
    tdbmCustomer?: Maybe<Scalars['Boolean']['output']>;
    tdbmEmployee?: Maybe<Scalars['Boolean']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type LeasingInfoCanIArgs = {
  action: CanIAction;
};

export type LendInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'LendInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    qrLink?: Maybe<Scalars['String']['output']>;
    qrString?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type LendInvoiceCanIArgs = {
  action: CanIAction;
};

export type License = BaseModelInterface &
  Node & {
    __typename?: 'License';
    additionalData?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    claimedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    createdBy?: Maybe<User>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    inventoryUnitId?: Maybe<Scalars['ID']['output']>;
    lineItem: LineItem;
    lineItemId?: Maybe<Scalars['ID']['output']>;
    order?: Maybe<Order>;
    product: Product;
    serial?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    userId?: Maybe<Scalars['ID']['output']>;
    variant: Variant;
    variantId?: Maybe<Scalars['ID']['output']>;
  };

export type LicenseCanIArgs = {
  action: CanIAction;
};

export type LicenseConnection = {
  __typename?: 'LicenseConnection';
  edges: Array<LicenseEdge>;
  nodes: Array<License>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type LicenseConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type LicenseEdge = {
  __typename?: 'LicenseEdge';
  cursor: Scalars['String']['output'];
  node: License;
};

export type LicenseFilter = {
  amount?: InputMaybe<IntFilter>;
  createBy?: InputMaybe<UserFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  lineItem?: InputMaybe<LineItemFilter>;
  number?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderFilter>;
  product?: InputMaybe<ProductFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  variant?: InputMaybe<VariantFilter>;
};

export type LineItem = BaseModelInterface &
  Node & {
    __typename?: 'LineItem';
    actn?: Maybe<Scalars['String']['output']>;
    additionalTaxTotal?: Maybe<Scalars['Float']['output']>;
    adjustmentTotal?: Maybe<Scalars['Float']['output']>;
    adjustments?: Maybe<Array<Adjustment>>;
    alibabaOrder?: Maybe<AlibabaOrder>;
    amount: Scalars['Float']['output'];
    amountUsd?: Maybe<Scalars['Float']['output']>;
    attachments: Array<Scalars['String']['output']>;
    basePrice?: Maybe<Scalars['Float']['output']>;
    broughtAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    canI: Scalars['Boolean']['output'];
    comment?: Maybe<Scalars['String']['output']>;
    comments: Array<Comment>;
    commission?: Maybe<Scalars['Float']['output']>;
    commissionUpdated?: Maybe<Scalars['Boolean']['output']>;
    costCurrency?: Maybe<Scalars['String']['output']>;
    costPrice?: Maybe<Scalars['Float']['output']>;
    costRate?: Maybe<Scalars['Float']['output']>;
    coupons: CouponConnection;
    createdAt: Scalars['ISO8601DateTime']['output'];
    currency?: Maybe<Scalars['String']['output']>;
    data?: Maybe<Scalars['JSON']['output']>;
    defaultPrice: Scalars['Float']['output'];
    displayAmount: Scalars['String']['output'];
    eTickets: Array<ETicket>;
    ebarimtType?: Maybe<Scalars['String']['output']>;
    fee?: Maybe<Scalars['Float']['output']>;
    gid: Scalars['ID']['output'];
    giftOrigin?: Maybe<Scalars['JSON']['output']>;
    giftQuantity: Scalars['Int']['output'];
    /** @deprecated Will be removed in future */
    hasMoreVariants: Scalars['Boolean']['output'];
    id: Scalars['ID']['output'];
    imeiCodes?: Maybe<Array<Scalars['String']['output']>>;
    imeiCodesEnabled?: Maybe<Scalars['Boolean']['output']>;
    includedTaxTotal: Scalars['Float']['output'];
    inventoryUnits: Array<InventoryUnit>;
    isDigital?: Maybe<Scalars['Boolean']['output']>;
    labelCodes?: Maybe<Array<Scalars['String']['output']>>;
    labelCodesEnabled?: Maybe<Scalars['Boolean']['output']>;
    listing?: Maybe<Listing>;
    location?: Maybe<Scalars['String']['output']>;
    lotteries?: Maybe<Array<Lottery>>;
    manifest: ProductManifestInterface;
    movieTicket?: Maybe<MovieTicket>;
    name: Scalars['String']['output'];
    nonTaxableAdjustmentTotal?: Maybe<Scalars['Float']['output']>;
    order: Order;
    packageCode?: Maybe<Scalars['String']['output']>;
    packedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    packedBy?: Maybe<User>;
    parcelServiceCategoryId?: Maybe<Scalars['String']['output']>;
    partLineItems: Array<PartLineItem>;
    preTaxAmount: Scalars['Float']['output'];
    preferredCostPrice?: Maybe<Scalars['Float']['output']>;
    prevItem?: Maybe<LineItem>;
    price: Scalars['Float']['output'];
    priceChannels: Scalars['JSON']['output'];
    priceUsd?: Maybe<Scalars['Float']['output']>;
    product: Product;
    productCat: Scalars['String']['output'];
    promoQuantity: Scalars['JSON']['output'];
    promoQuantityDisplay: Scalars['JSON']['output'];
    promoQuantityIntervals: Scalars['JSON']['output'];
    promoTotal?: Maybe<Scalars['Float']['output']>;
    qty: Scalars['Int']['output'];
    quantity: Scalars['Int']['output'];
    receivedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    receivedBy?: Maybe<User>;
    returnAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    returnBy?: Maybe<User>;
    returnLocation?: Maybe<Scalars['String']['output']>;
    segment?: Maybe<SupplySegment>;
    segmentId?: Maybe<Scalars['ID']['output']>;
    /** @deprecated Will be removed in future */
    seriesExpiresAt?: Maybe<Scalars['String']['output']>;
    shipmentAmount?: Maybe<Scalars['Float']['output']>;
    shipmentAmountUpdated?: Maybe<Scalars['Boolean']['output']>;
    shipmentPrice?: Maybe<Scalars['Float']['output']>;
    singleDisplayAmount: Scalars['String']['output'];
    sku: Scalars['String']['output'];
    storeVariantStatus?: Maybe<Scalars['String']['output']>;
    swappedItems?: Maybe<Array<LineItem>>;
    takeLocation?: Maybe<StoreLocation>;
    takenAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    takenBy?: Maybe<User>;
    takenLocation?: Maybe<StoreLocation>;
    takenStatus?: Maybe<Scalars['String']['output']>;
    taxCategoryId?: Maybe<Scalars['ID']['output']>;
    taxCode?: Maybe<Scalars['String']['output']>;
    taxableAdjustmentTotal?: Maybe<Scalars['Float']['output']>;
    total: Scalars['Float']['output'];
    /** @deprecated Will be removed in future, use total_on_hand if it exists */
    totalCountOnHand?: Maybe<Scalars['Float']['output']>;
    totalWeight?: Maybe<Scalars['Float']['output']>;
    totalWeightInKg?: Maybe<Scalars['Float']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variant: Variant;
    variantId: Scalars['ID']['output'];
    variantInfo?: Maybe<Scalars['JSON']['output']>;
    vatTotal?: Maybe<Scalars['Float']['output']>;
    vendor: Vendor;
    vendorId: Scalars['ID']['output'];
    vendorName?: Maybe<Scalars['String']['output']>;
    vendorRegister?: Maybe<Scalars['String']['output']>;
    volume?: Maybe<Scalars['Float']['output']>;
    weight?: Maybe<Scalars['Float']['output']>;
    weightInKg?: Maybe<Scalars['Float']['output']>;
  };

export type LineItemCanIArgs = {
  action: CanIAction;
};

export type LineItemCouponsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CouponFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type LineItemHasMoreVariantsArgs = {
  stockLocationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type LineItemTotalCountOnHandArgs = {
  stockLocationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum LineItemAction {
  Brought = 'brought',
  NoStock = 'no_stock',
  NotTaken = 'not_taken',
  OnHand = 'on_hand',
  Pack = 'pack',
  Ready = 'ready',
  Returned = 'returned',
  Shipped = 'shipped',
  Taken = 'taken',
  Unpack = 'unpack',
}

export type LineItemConnection = {
  __typename?: 'LineItemConnection';
  edges: Array<LineItemEdge>;
  nodes: Array<LineItem>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalAdjustment?: Maybe<Scalars['BigInt']['output']>;
  totalBaseAmount?: Maybe<Scalars['BigInt']['output']>;
  totalCount: Scalars['Int']['output'];
  totalPrice?: Maybe<Scalars['BigInt']['output']>;
  totalQuantity?: Maybe<Scalars['BigInt']['output']>;
};

export type LineItemConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type LineItemEdge = {
  __typename?: 'LineItemEdge';
  cursor: Scalars['String']['output'];
  node: LineItem;
};

export type LineItemFilter = {
  VariantProductStoreCategoryType?: InputMaybe<StringFilter>;
  actn?: InputMaybe<StringFilter>;
  actnNull?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  inventoryUnits?: InputMaybe<InventoryUnitFilter>;
  order?: InputMaybe<OrderFilter>;
  packedAt?: InputMaybe<DateFilter>;
  packedAtTime?: InputMaybe<StringFilter>;
  packedBy?: InputMaybe<UserFilter>;
  price?: InputMaybe<IntFilter>;
  product?: InputMaybe<ProductFilter>;
  quantity?: InputMaybe<IntFilter>;
  segment?: InputMaybe<SupplySegmentFilter>;
  segmentId?: InputMaybe<IdFilter>;
  takeLocation?: InputMaybe<StoreLocationFilter>;
  takenAt?: InputMaybe<DateFilter>;
  takenBy?: InputMaybe<UserFilter>;
  takenLocation?: InputMaybe<StoreLocationFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  variant?: InputMaybe<VariantFilter>;
  vendor?: InputMaybe<VendorFilter>;
  vendorId?: InputMaybe<IdFilter>;
};

export type LineItemInput = {
  options?: InputMaybe<Scalars['JSON']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  variantId?: InputMaybe<Scalars['ID']['input']>;
};

export type LineItemReport = BaseModelInterface &
  Node & {
    __typename?: 'LineItemReport';
    absTotal?: Maybe<Scalars['Float']['output']>;
    actn?: Maybe<Scalars['String']['output']>;
    addedNew?: Maybe<Scalars['String']['output']>;
    addedTotal?: Maybe<Scalars['Float']['output']>;
    additionalTaxTotal?: Maybe<Scalars['Float']['output']>;
    adjustPrice?: Maybe<Scalars['Float']['output']>;
    adjustmentTotal?: Maybe<Scalars['Float']['output']>;
    adjustments?: Maybe<Array<Adjustment>>;
    alibabaOrder?: Maybe<AlibabaOrder>;
    amount: Scalars['Float']['output'];
    amountUsd?: Maybe<Scalars['Float']['output']>;
    assemblyManifest: Array<Scalars['JSON']['output']>;
    attachments: Array<Scalars['String']['output']>;
    basePrice?: Maybe<Scalars['Float']['output']>;
    broughtAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    canI: Scalars['Boolean']['output'];
    canceledTotal?: Maybe<Scalars['Float']['output']>;
    changed?: Maybe<Scalars['JSON']['output']>;
    checkSum?: Maybe<Scalars['Float']['output']>;
    comment?: Maybe<Scalars['String']['output']>;
    comments: Array<Comment>;
    commission?: Maybe<Scalars['Float']['output']>;
    commissionUpdated?: Maybe<Scalars['Boolean']['output']>;
    completeTotal?: Maybe<Scalars['Float']['output']>;
    computedFee?: Maybe<Scalars['Float']['output']>;
    costCurrency?: Maybe<Scalars['String']['output']>;
    costPrice?: Maybe<Scalars['Float']['output']>;
    costRate?: Maybe<Scalars['Float']['output']>;
    coupons: CouponConnection;
    createdAt: Scalars['ISO8601DateTime']['output'];
    currency?: Maybe<Scalars['String']['output']>;
    currencyRate?: Maybe<Scalars['String']['output']>;
    data?: Maybe<Scalars['JSON']['output']>;
    defaultPrice: Scalars['Float']['output'];
    displayAmount: Scalars['String']['output'];
    eTickets: Array<ETicket>;
    ebarimtType?: Maybe<Scalars['String']['output']>;
    fee?: Maybe<Scalars['Float']['output']>;
    finalCount?: Maybe<Scalars['Int']['output']>;
    finalTotal?: Maybe<Scalars['Float']['output']>;
    gid: Scalars['ID']['output'];
    giftOrigin?: Maybe<Scalars['JSON']['output']>;
    giftQuantity: Scalars['Int']['output'];
    /** @deprecated Will be removed in future */
    hasMoreVariants: Scalars['Boolean']['output'];
    id: Scalars['ID']['output'];
    imeiCodes?: Maybe<Array<Scalars['String']['output']>>;
    imeiCodesEnabled?: Maybe<Scalars['Boolean']['output']>;
    includedTaxTotal: Scalars['Float']['output'];
    inventoryUnits: Array<InventoryUnit>;
    isDigital?: Maybe<Scalars['Boolean']['output']>;
    labelCodes?: Maybe<Array<Scalars['String']['output']>>;
    labelCodesEnabled?: Maybe<Scalars['Boolean']['output']>;
    leaseLeft?: Maybe<Scalars['Int']['output']>;
    leaseTransactionDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    listing?: Maybe<Listing>;
    location?: Maybe<Scalars['String']['output']>;
    lotteries?: Maybe<Array<Lottery>>;
    manifest: ProductManifestInterface;
    movieTicket?: Maybe<MovieTicket>;
    name: Scalars['String']['output'];
    noStockTotal?: Maybe<Scalars['Float']['output']>;
    nonTaxableAdjustmentTotal?: Maybe<Scalars['Float']['output']>;
    onShip?: Maybe<Scalars['JSON']['output']>;
    order: Order;
    orderReport?: Maybe<OrderReport>;
    originalPrice?: Maybe<Scalars['Float']['output']>;
    packageCode?: Maybe<Scalars['String']['output']>;
    packedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    packedBy?: Maybe<User>;
    parcelServiceCategoryId?: Maybe<Scalars['String']['output']>;
    partLineItems: Array<PartLineItem>;
    preTaxAmount: Scalars['Float']['output'];
    preferredCostPrice?: Maybe<Scalars['Float']['output']>;
    prevItem?: Maybe<LineItem>;
    price: Scalars['Float']['output'];
    priceChannels: Scalars['JSON']['output'];
    priceUsd?: Maybe<Scalars['Float']['output']>;
    product: Product;
    productCat: Scalars['String']['output'];
    promoQuantity: Scalars['JSON']['output'];
    promoQuantityDisplay: Scalars['JSON']['output'];
    promoQuantityIntervals: Scalars['JSON']['output'];
    promoTotal?: Maybe<Scalars['Float']['output']>;
    qty: Scalars['Int']['output'];
    quantity: Scalars['Int']['output'];
    receivedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    receivedBy?: Maybe<User>;
    returnAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    returnBy?: Maybe<User>;
    returnLocation?: Maybe<Scalars['String']['output']>;
    returnTotal?: Maybe<Scalars['Float']['output']>;
    segment?: Maybe<SupplySegment>;
    segmentId?: Maybe<Scalars['ID']['output']>;
    /** @deprecated Will be removed in future */
    seriesExpiresAt?: Maybe<Scalars['String']['output']>;
    shipmentAmount?: Maybe<Scalars['Float']['output']>;
    shipmentAmountUpdated?: Maybe<Scalars['Boolean']['output']>;
    shipmentPrice?: Maybe<Scalars['Float']['output']>;
    shippedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    singleDisplayAmount: Scalars['String']['output'];
    sku: Scalars['String']['output'];
    storeCreditUsage?: Maybe<Scalars['Int']['output']>;
    storeVariantStatus?: Maybe<Scalars['String']['output']>;
    swappedItems?: Maybe<Array<LineItem>>;
    takeLocation?: Maybe<StoreLocation>;
    takenAmount?: Maybe<Scalars['Float']['output']>;
    takenAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    takenBy?: Maybe<User>;
    takenLocation?: Maybe<StoreLocation>;
    takenStatus?: Maybe<Scalars['String']['output']>;
    taxCategoryId?: Maybe<Scalars['ID']['output']>;
    taxCode?: Maybe<Scalars['String']['output']>;
    taxableAdjustmentTotal?: Maybe<Scalars['Float']['output']>;
    ticketInfo?: Maybe<Scalars['JSON']['output']>;
    total: Scalars['Float']['output'];
    /** @deprecated Will be removed in future, use total_on_hand if it exists */
    totalCountOnHand?: Maybe<Scalars['Float']['output']>;
    totalPercentage?: Maybe<Scalars['Int']['output']>;
    totalWeight?: Maybe<Scalars['Float']['output']>;
    totalWeightInKg?: Maybe<Scalars['Float']['output']>;
    transferAmount?: Maybe<Scalars['Float']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variant: Variant;
    variantId: Scalars['ID']['output'];
    variantInfo?: Maybe<Scalars['JSON']['output']>;
    vatTotal?: Maybe<Scalars['Float']['output']>;
    vendor: Vendor;
    vendorId: Scalars['ID']['output'];
    vendorName?: Maybe<Scalars['String']['output']>;
    vendorRegister?: Maybe<Scalars['String']['output']>;
    volume?: Maybe<Scalars['Float']['output']>;
    weight?: Maybe<Scalars['Float']['output']>;
    weightInKg?: Maybe<Scalars['Float']['output']>;
  };

export type LineItemReportCanIArgs = {
  action: CanIAction;
};

export type LineItemReportCouponsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CouponFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type LineItemReportHasMoreVariantsArgs = {
  stockLocationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type LineItemReportTotalCountOnHandArgs = {
  stockLocationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Listing = BaseModelInterface &
  Node & {
    __typename?: 'Listing';
    activeSince?: Maybe<Scalars['ISO8601DateTime']['output']>;
    activeUntil?: Maybe<Scalars['ISO8601DateTime']['output']>;
    afterPay: Scalars['Boolean']['output'];
    approved?: Maybe<Scalars['Boolean']['output']>;
    averageRating: Scalars['Float']['output'];
    badges: Array<Badge>;
    bonus?: Maybe<Scalars['Float']['output']>;
    campaigns?: Maybe<Array<Scalars['ID']['output']>>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    createdBy?: Maybe<User>;
    featured?: Maybe<Scalars['Boolean']['output']>;
    featuredUntil?: Maybe<Scalars['ISO8601DateTime']['output']>;
    fulfillDuration?: Maybe<Scalars['Int']['output']>;
    gid: Scalars['ID']['output'];
    hasRelatedProducts: Scalars['Boolean']['output'];
    hideOnSearch: Scalars['Boolean']['output'];
    id: Scalars['ID']['output'];
    impressionsCount?: Maybe<Scalars['Int']['output']>;
    isBlocking?: Maybe<Scalars['Boolean']['output']>;
    isExcSelling?: Maybe<Scalars['Boolean']['output']>;
    maxQty?: Maybe<Scalars['Int']['output']>;
    minQty?: Maybe<Scalars['Int']['output']>;
    myReview?: Maybe<Review>;
    options?: Maybe<Scalars['JSON']['output']>;
    otherVendorsSelling?: Maybe<Scalars['Boolean']['output']>;
    product: Product;
    promotions?: Maybe<Array<Promotion>>;
    properties: Array<Property>;
    prototypes: Array<Prototype>;
    published?: Maybe<Scalars['Boolean']['output']>;
    relatedProducts?: Maybe<Array<Relation>>;
    reviews: ReviewConnection;
    seller?: Maybe<Merchant>;
    seoDescription?: Maybe<Scalars['String']['output']>;
    seoKeywords?: Maybe<Scalars['String']['output']>;
    seoTitle?: Maybe<Scalars['String']['output']>;
    shippingCategory?: Maybe<ShippingCategory>;
    shippingCategoryId?: Maybe<Scalars['ID']['output']>;
    sizingGuides: Array<SizingGuide>;
    slug?: Maybe<Scalars['String']['output']>;
    stepQty: Scalars['Int']['output'];
    stockLocations?: Maybe<Array<StockLocation>>;
    storeListingId?: Maybe<Scalars['ID']['output']>;
    storeListings: StoreListingConnection;
    taxCategory?: Maybe<TaxCategory>;
    taxCategoryId?: Maybe<Scalars['ID']['output']>;
    taxons: Array<Taxon>;
    totalReviews: Scalars['Int']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendorIsSelling?: Maybe<Scalars['Boolean']['output']>;
    website: Website;
  };

export type ListingCanIArgs = {
  action: CanIAction;
};

export type ListingPromotionsArgs = {
  dateType?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PromotionFilter>;
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type ListingReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ReviewsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type ListingSizingGuidesArgs = {
  filter?: InputMaybe<SizingGuideFilter>;
};

export type ListingStoreListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StoreListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type ListingConnection = {
  __typename?: 'ListingConnection';
  edges: Array<ListingEdge>;
  nodes: Array<Listing>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type ListingConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type ListingEdge = {
  __typename?: 'ListingEdge';
  cursor: Scalars['String']['output'];
  node: Listing;
};

export type ListingFilter = {
  afterPay?: InputMaybe<BoolFilter>;
  approved?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateFilter>;
  fulfillDuration?: InputMaybe<IntFilter>;
  hideOnSearch?: InputMaybe<BoolFilter>;
  id?: InputMaybe<IdFilter>;
  maxQty?: InputMaybe<IntFilter>;
  minQty?: InputMaybe<IntFilter>;
  product?: InputMaybe<ProductFilter>;
  published?: InputMaybe<BoolFilter>;
  seoDescription?: InputMaybe<StringFilter>;
  seoKeywords?: InputMaybe<StringFilter>;
  seoTitle?: InputMaybe<StringFilter>;
  shippingCategory?: InputMaybe<ShippingCategoryFilter>;
  slug?: InputMaybe<StringFilter>;
  stockLocations?: InputMaybe<StockLocationFilter>;
  taxons?: InputMaybe<TaxonFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  vendorListing?: InputMaybe<VendorListingFilter>;
  withSale?: InputMaybe<Scalars['Int']['input']>;
};

export type ListingSaleInput = {
  amount: Scalars['Float']['input'];
  expireAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  id: Scalars['ID']['input'];
  remove?: InputMaybe<Scalars['Boolean']['input']>;
  startAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

export type ListingVendorFilter = {
  listingId: Scalars['ID']['input'];
  status: Scalars['String']['input'];
};

export type LoanContractInput = {
  attachments?: InputMaybe<Array<Scalars['Upload']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Log = BaseModelInterface &
  Node & {
    __typename?: 'Log';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    func?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    order?: Maybe<Order>;
    request?: Maybe<Scalars['JSON']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
  };

export type LogCanIArgs = {
  action: CanIAction;
};

export type LookBook = BaseModelInterface &
  Node & {
    __typename?: 'LookBook';
    canI: Scalars['Boolean']['output'];
    cover?: Maybe<Scalars['String']['output']>;
    coverContentType?: Maybe<Scalars['String']['output']>;
    coverFileName?: Maybe<Scalars['String']['output']>;
    coverSquare?: Maybe<Scalars['String']['output']>;
    coverSquareContentType?: Maybe<Scalars['String']['output']>;
    coverSquareFileName?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isDraft?: Maybe<Scalars['Boolean']['output']>;
    lookBookImages: Array<LookBookImage>;
    tagList: Array<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type LookBookCanIArgs = {
  action: CanIAction;
};

export type LookBookCoverArgs = {
  format?: InputMaybe<ImageFormat>;
  height: Scalars['Int']['input'];
  width: Scalars['Int']['input'];
};

export type LookBookCoverSquareArgs = {
  format?: InputMaybe<ImageFormat>;
  height: Scalars['Int']['input'];
  width: Scalars['Int']['input'];
};

export type LookBookConnection = {
  __typename?: 'LookBookConnection';
  edges: Array<LookBookEdge>;
  nodes: Array<LookBook>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type LookBookConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type LookBookEdge = {
  __typename?: 'LookBookEdge';
  cursor: Scalars['String']['output'];
  node: LookBook;
};

export type LookBookFilter = {
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isDraft?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type LookBookImage = BaseModelInterface &
  Node & {
    __typename?: 'LookBookImage';
    attachment?: Maybe<Scalars['String']['output']>;
    attachmentContentType?: Maybe<Scalars['String']['output']>;
    attachmentFileName?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    lookBook?: Maybe<LookBook>;
    lookBookTags: Array<LookBookTag>;
    position?: Maybe<Scalars['Int']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type LookBookImageAttachmentArgs = {
  format?: InputMaybe<ImageFormat>;
  height: Scalars['Int']['input'];
  width: Scalars['Int']['input'];
};

export type LookBookImageCanIArgs = {
  action: CanIAction;
};

export type LookBookTag = BaseModelInterface &
  Node & {
    __typename?: 'LookBookTag';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    left?: Maybe<Scalars['Float']['output']>;
    lookBook?: Maybe<LookBook>;
    lookBookImage?: Maybe<LookBookImage>;
    position?: Maybe<Scalars['Int']['output']>;
    product?: Maybe<Product>;
    top?: Maybe<Scalars['Float']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type LookBookTagCanIArgs = {
  action: CanIAction;
};

export type Lottery = BaseModelInterface &
  Node & {
    __typename?: 'Lottery';
    active?: Maybe<Scalars['Boolean']['output']>;
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    entryAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    entryNumber?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    product?: Maybe<Product>;
    recentlyWon?: Maybe<Scalars['Boolean']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    website?: Maybe<Website>;
    win?: Maybe<Scalars['Boolean']['output']>;
    winAt?: Maybe<Scalars['ISO8601Date']['output']>;
  };

export type LotteryCanIArgs = {
  action: CanIAction;
};

export type LotteryConnection = {
  __typename?: 'LotteryConnection';
  edges: Array<LotteryEdge>;
  nodes: Array<Lottery>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type LotteryConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type LotteryEdge = {
  __typename?: 'LotteryEdge';
  cursor: Scalars['String']['output'];
  node: Lottery;
};

export type LotteryEntree = Order | User;

export type LotteryEntryAnswer = {
  __typename?: 'LotteryEntryAnswer';
  answerText: Scalars['String']['output'];
  entry: LotteryEntry;
  id: Scalars['ID']['output'];
  question: LotteryEventQuestion;
};

export type LotteryEntryFilter = {
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  entryDate?: InputMaybe<DateFilter>;
  eventId?: InputMaybe<IdFilter>;
  id?: InputMaybe<IdFilter>;
  number?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  websiteId?: InputMaybe<IdFilter>;
};

export type LotteryEvent = {
  __typename?: 'LotteryEvent';
  actions?: Maybe<Array<LotteryEventAction>>;
  active?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  entries: LotteryEntryConnection;
  expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  permalink?: Maybe<Scalars['String']['output']>;
  questions?: Maybe<Array<LotteryEventQuestion>>;
  rewardChoice?: Maybe<Scalars['Boolean']['output']>;
  rewardLimit?: Maybe<Scalars['Int']['output']>;
  rules?: Maybe<Array<LotteryEventRule>>;
  slots?: Maybe<Array<LotteryEventSlot>>;
  startAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

export type LotteryEventEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LotteryEntryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type LotteryEventAction = {
  __typename?: 'LotteryEventAction';
  deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  id: Scalars['ID']['output'];
  preferences?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type LotteryEventAnswer = {
  __typename?: 'LotteryEventAnswer';
  active?: Maybe<Scalars['Boolean']['output']>;
  answerText: Scalars['String']['output'];
  correct?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
};

export type LotteryEventConnection = {
  __typename?: 'LotteryEventConnection';
  edges: Array<LotteryEventEdge>;
  nodes: Array<LotteryEvent>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type LotteryEventConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type LotteryEventEdge = {
  __typename?: 'LotteryEventEdge';
  cursor: Scalars['String']['output'];
  node: LotteryEvent;
};

export type LotteryEventFilter = {
  active?: InputMaybe<BoolFilter>;
  condition?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  eventType?: InputMaybe<StringFilter>;
  expireAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  isModal?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  permalink?: InputMaybe<StringFilter>;
  rewardChoice?: InputMaybe<BoolFilter>;
  slotType?: InputMaybe<StringFilter>;
  startAt?: InputMaybe<DateFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  websiteId?: InputMaybe<IdFilter>;
};

export type LotteryEventQuestion = {
  __typename?: 'LotteryEventQuestion';
  answers?: Maybe<Array<LotteryEventAnswer>>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  questionText: Scalars['String']['output'];
  questionType?: Maybe<Scalars['String']['output']>;
};

export type LotteryEventRule = {
  __typename?: 'LotteryEventRule';
  id: Scalars['ID']['output'];
  preferences?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type LotteryEventSlot = {
  __typename?: 'LotteryEventSlot';
  active?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  imageContentType?: Maybe<Scalars['String']['output']>;
  imageFileName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
};

export type LotteryFilter = {
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateFilter>;
  entryNumber?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  product?: InputMaybe<ProductFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  website?: InputMaybe<WebsiteFilter>;
  win?: InputMaybe<BoolFilter>;
};

export type LotteryWinning = Promotion | StoreCredit | EventTry;

export type LoyaltyCard = BaseModelInterface &
  Node & {
    __typename?: 'LoyaltyCard';
    active?: Maybe<Scalars['Boolean']['output']>;
    address?: Maybe<Scalars['String']['output']>;
    amount?: Maybe<Scalars['Float']['output']>;
    baseAmount?: Maybe<Scalars['Float']['output']>;
    birthDate?: Maybe<Scalars['String']['output']>;
    bonusAddedAmount?: Maybe<Scalars['Float']['output']>;
    bonusBalance?: Maybe<Scalars['Float']['output']>;
    bonusPaymentPercent?: Maybe<Scalars['Float']['output']>;
    bonusPercent?: Maybe<Scalars['Float']['output']>;
    bonusUsedAmount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    cardTemplateName?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    customerId?: Maybe<Scalars['String']['output']>;
    discountAmount?: Maybe<Scalars['Float']['output']>;
    discountPercent?: Maybe<Scalars['Float']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    expireDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    firstName?: Maybe<Scalars['String']['output']>;
    gender?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    giftBalance?: Maybe<Scalars['Float']['output']>;
    giftUsedAmount?: Maybe<Scalars['Float']['output']>;
    homeAddress?: Maybe<Address>;
    id: Scalars['ID']['output'];
    isChangeUseBonus?: Maybe<Scalars['Boolean']['output']>;
    isShowBirthDate?: Maybe<Scalars['Boolean']['output']>;
    itemBonusBalance?: Maybe<Scalars['Float']['output']>;
    lastName?: Maybe<Scalars['String']['output']>;
    loyaltyCardTransactions?: Maybe<Array<Scalars['JSON']['output']>>;
    loyaltyType?: Maybe<Scalars['String']['output']>;
    maritalStatus?: Maybe<Scalars['String']['output']>;
    notAddUseBonus?: Maybe<Scalars['Boolean']['output']>;
    note?: Maybe<Scalars['String']['output']>;
    number?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    pointBalance?: Maybe<Scalars['Float']['output']>;
    purchaseAmount?: Maybe<Scalars['Float']['output']>;
    registerNumber?: Maybe<Scalars['String']['output']>;
    totalBonusBalance?: Maybe<Scalars['Float']['output']>;
    totalEarnedPoints?: Maybe<Scalars['Float']['output']>;
    totalUsedPoints?: Maybe<Scalars['Float']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    useBonus?: Maybe<Scalars['Boolean']['output']>;
    user?: Maybe<User>;
    voucherPaymentPercent?: Maybe<Scalars['Float']['output']>;
    website?: Maybe<Website>;
    workAddress?: Maybe<Scalars['String']['output']>;
  };

export type LoyaltyCardCanIArgs = {
  action: CanIAction;
};

export type LoyaltyCardFilter = {
  address?: InputMaybe<StringFilter>;
  bonusAddedAmount?: InputMaybe<IntFilter>;
  bonusBalance?: InputMaybe<IntFilter>;
  bonusPercent?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  giftBalance?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  itemBonusBalance?: InputMaybe<IntFilter>;
  lastName?: InputMaybe<StringFilter>;
  number?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  pointBalance?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type LoyaltyCardTransaction = BaseModelInterface &
  Node & {
    __typename?: 'LoyaltyCardTransaction';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    finalBalance?: Maybe<Scalars['Float']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    loyaltyCard?: Maybe<LoyaltyCard>;
    previousBalance?: Maybe<Scalars['Float']['output']>;
    record?: Maybe<Scalars['String']['output']>;
    source?: Maybe<LoyaltyCardTransactionSource>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    website?: Maybe<Website>;
  };

export type LoyaltyCardTransactionCanIArgs = {
  action: CanIAction;
};

export type LoyaltyCardTransactionConnection = {
  __typename?: 'LoyaltyCardTransactionConnection';
  edges: Array<LoyaltyCardTransactionEdge>;
  nodes: Array<LoyaltyCardTransaction>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type LoyaltyCardTransactionConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type LoyaltyCardTransactionEdge = {
  __typename?: 'LoyaltyCardTransactionEdge';
  cursor: Scalars['String']['output'];
  node: LoyaltyCardTransaction;
};

export type LoyaltyCardTransactionFilter = {
  amount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  finalBalance?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  loyaltyCard?: InputMaybe<LoyaltyCardFilter>;
  previousBalance?: InputMaybe<IntFilter>;
  record?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userFirstNameOrUserMobileOrUserEmail?: InputMaybe<StringFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type LoyaltyCardTransactionSource = Order;

export type MassMessage = BaseModelInterface &
  Node & {
    __typename?: 'MassMessage';
    acceptedBy?: Maybe<User>;
    canI: Scalars['Boolean']['output'];
    content?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    messagesCount: Scalars['Int']['output'];
    roomIds?: Maybe<Array<Scalars['ID']['output']>>;
    segment?: Maybe<Scalars['String']['output']>;
    sendAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    sentIds?: Maybe<Array<Scalars['ID']['output']>>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user: User;
    website: Website;
  };

export type MassMessageCanIArgs = {
  action: CanIAction;
};

export type MassMessageConnection = {
  __typename?: 'MassMessageConnection';
  edges: Array<MassMessageEdge>;
  nodes: Array<MassMessage>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type MassMessageConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type MassMessageEdge = {
  __typename?: 'MassMessageEdge';
  cursor: Scalars['String']['output'];
  node: MassMessage;
};

export type MassMessageFilter = {
  acceptedBy?: InputMaybe<UserFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  segment?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
};

export type MassPromoFilter = {
  createdAt?: InputMaybe<DateFilter>;
  createdBy?: InputMaybe<UserFilter>;
  finishedAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  promotion?: InputMaybe<PromotionFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  userCount?: InputMaybe<IntFilter>;
  users?: InputMaybe<StringFilter>;
};

export type MassPromotion = BaseModelInterface &
  Node & {
    __typename?: 'MassPromotion';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    createdBy: User;
    finishedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    promotion: Promotion;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userCount?: Maybe<Scalars['Int']['output']>;
    users?: Maybe<Scalars['String']['output']>;
  };

export type MassPromotionCanIArgs = {
  action: CanIAction;
};

export type MassPromotionConnection = {
  __typename?: 'MassPromotionConnection';
  edges: Array<MassPromotionEdge>;
  nodes: Array<MassPromotion>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type MassPromotionConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type MassPromotionEdge = {
  __typename?: 'MassPromotionEdge';
  cursor: Scalars['String']['output'];
  node: MassPromotion;
};

export type MassRepayment = BaseModelInterface &
  Node & {
    __typename?: 'MassRepayment';
    amountToRepay?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    completedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    errors?: Maybe<Array<Error>>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    items: MassRepaymentItemConnection;
    number?: Maybe<Scalars['String']['output']>;
    repaidAmount?: Maybe<Scalars['Float']['output']>;
    source?: Maybe<Source>;
    state: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    wallet: Wallet;
  };

export type MassRepaymentCanIArgs = {
  action: CanIAction;
};

export type MassRepaymentItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type MassRepaymentConnection = {
  __typename?: 'MassRepaymentConnection';
  edges: Array<MassRepaymentEdge>;
  nodes: Array<MassRepayment>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type MassRepaymentConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type MassRepaymentEdge = {
  __typename?: 'MassRepaymentEdge';
  cursor: Scalars['String']['output'];
  node: MassRepayment;
};

export type MassRepaymentFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  number?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type MassRepaymentItem = BaseModelInterface &
  Node & {
    __typename?: 'MassRepaymentItem';
    amount: Scalars['Float']['output'];
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    errors?: Maybe<Array<Error>>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    massRepayment: MassRepayment;
    prePaymentStatus: MassRepaymentItemStatusEnum | `${MassRepaymentItemStatusEnum}`;
    preRemainingAmount?: Maybe<Scalars['Float']['output']>;
    remainingAmount?: Maybe<Scalars['Float']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    walletTransaction: Transaction;
  };

export type MassRepaymentItemCanIArgs = {
  action: CanIAction;
};

export type MassRepaymentItemConnection = {
  __typename?: 'MassRepaymentItemConnection';
  edges: Array<MassRepaymentItemEdge>;
  nodes: Array<MassRepaymentItem>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type MassRepaymentItemConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type MassRepaymentItemEdge = {
  __typename?: 'MassRepaymentItemEdge';
  cursor: Scalars['String']['output'];
  node: MassRepaymentItem;
};

export type MassRepaymentItemInput = {
  amount: Scalars['Float']['input'];
  walletTransactionId: Scalars['ID']['input'];
};

export enum MassRepaymentItemStatusEnum {
  FullyPaid = 'FULLY_PAID',
  PartiallyPaid = 'PARTIALLY_PAID',
  Pending = 'PENDING',
}

export type MbankInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'MbankInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    invoiceUrl?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type MbankInvoiceCanIArgs = {
  action: CanIAction;
};

export type Member = BaseModelInterface &
  Node & {
    __typename?: 'Member';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    messages: MessageConnection;
    role?: Maybe<Scalars['String']['output']>;
    room: Room;
    seenMessage?: Maybe<Message>;
    unreadMessages: MessageConnection;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
  };

export type MemberCanIArgs = {
  action: CanIAction;
};

export type MemberMessagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type MemberUnreadMessagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type MemberFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  role?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
};

export type Merchant = BaseModelInterface &
  Node & {
    __typename?: 'Merchant';
    address?: Maybe<Scalars['String']['output']>;
    afterPay: AfterPay | `${AfterPay}`;
    afterPayApprovedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    afterPayApprover?: Maybe<User>;
    afterPayTypes?: Maybe<Array<Scalars['String']['output']>>;
    alias?: Maybe<Scalars['String']['output']>;
    allowCampaign?: Maybe<Scalars['Boolean']['output']>;
    allowSelfBuy: Scalars['Boolean']['output'];
    assetRoles: AssetRoleConnection;
    audits: AuditConnection;
    autoApprove?: Maybe<Scalars['Boolean']['output']>;
    background?: Maybe<Scalars['String']['output']>;
    banks: Array<Bank>;
    canI: Scalars['Boolean']['output'];
    cartAmount?: Maybe<Scalars['Float']['output']>;
    category?: Maybe<SupplierCategory>;
    categoryId?: Maybe<Scalars['ID']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    deliveryType?: Maybe<Scalars['String']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    ebarimtType?: Maybe<Scalars['String']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    facebook?: Maybe<Scalars['String']['output']>;
    featured?: Maybe<Scalars['Boolean']['output']>;
    featuredFrom?: Maybe<Scalars['ISO8601DateTime']['output']>;
    featuredStart?: Maybe<Scalars['ISO8601DateTime']['output']>;
    featuredTo?: Maybe<Scalars['ISO8601DateTime']['output']>;
    featuredUntil?: Maybe<Scalars['ISO8601DateTime']['output']>;
    features?: Maybe<Array<Featured>>;
    follow: Follow;
    follows: Array<Follow>;
    fulfillmentDashboard?: Maybe<Scalars['JSON']['output']>;
    fulfillmentDays?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    impressionsCount: Scalars['Int']['output'];
    listings: ListingConnection;
    listingsCount?: Maybe<Scalars['Int']['output']>;
    localId?: Maybe<Scalars['String']['output']>;
    maxCartAmount?: Maybe<Scalars['Float']['output']>;
    minStock?: Maybe<Scalars['Int']['output']>;
    organizationId?: Maybe<Scalars['String']['output']>;
    page?: Maybe<DynamicPage>;
    pages: DynamicPageConnection;
    paymentMethods: Array<PaymentMethod>;
    phone?: Maybe<Scalars['String']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    receiveOrderNotifications: Scalars['Boolean']['output'];
    shippingCategoryId?: Maybe<Scalars['Float']['output']>;
    state?: Maybe<Scalars['String']['output']>;
    taxons: Array<Taxon>;
    totalSales: Scalars['Float']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendor: Vendor;
    vendorById?: Maybe<Scalars['ID']['output']>;
    vendorId?: Maybe<Scalars['ID']['output']>;
    web?: Maybe<Scalars['String']['output']>;
    website: Website;
    websiteById?: Maybe<Scalars['ID']['output']>;
  };

export type MerchantAssetRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AssetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type MerchantAuditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuditFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type MerchantCanIArgs = {
  action: CanIAction;
};

export type MerchantFollowArgs = {
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type MerchantFulfillmentDashboardArgs = {
  filter?: InputMaybe<OrderFilter>;
};

export type MerchantListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type MerchantPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type MerchantPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type MerchantConnection = {
  __typename?: 'MerchantConnection';
  edges: Array<MerchantEdge>;
  nodes: Array<Merchant>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type MerchantConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type MerchantEdge = {
  __typename?: 'MerchantEdge';
  cursor: Scalars['String']['output'];
  node: Merchant;
};

export type MerchantFilter = {
  afterPay?: InputMaybe<StringFilter>;
  afterPayApprovedAt?: InputMaybe<DateFilter>;
  afterPayApprover?: InputMaybe<UserFilter>;
  afterPayEq?: InputMaybe<AfterPay | `${AfterPay}`>;
  alias?: InputMaybe<StringFilter>;
  aliasOrVendorName?: InputMaybe<StringFilter>;
  allowCampaign?: InputMaybe<BoolFilter>;
  autoApprove?: InputMaybe<BoolFilter>;
  category?: InputMaybe<SupplierCategoryFilter>;
  createdAt?: InputMaybe<DateFilter>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<IdFilter>;
  isActive?: InputMaybe<IntFilter>;
  listingsCount?: InputMaybe<IntFilter>;
  receiveOrderNotifications?: InputMaybe<BoolFilter>;
  searchState?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateFilter>;
  vendor?: InputMaybe<VendorFilter>;
  vendorNameOrVendorRegister?: InputMaybe<StringFilter>;
  vendorNameOrVendorRegisterOrVendorPhone?: InputMaybe<StringFilter>;
  website?: InputMaybe<WebsiteFilter>;
  websiteNameOrWebsiteDomain?: InputMaybe<StringFilter>;
  withListings?: InputMaybe<BoolFilter>;
  withTaxon?: InputMaybe<StringFilter>;
};

export type Message = BaseModelInterface &
  Node & {
    __typename?: 'Message';
    attachments: Array<ChatAttachment>;
    canI: Scalars['Boolean']['output'];
    content?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    mine?: Maybe<Scalars['Boolean']['output']>;
    room?: Maybe<Room>;
    roomId?: Maybe<Scalars['ID']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
  };

export type MessageCanIArgs = {
  action: CanIAction;
};

export type MessageConnection = {
  __typename?: 'MessageConnection';
  edges: Array<MessageEdge>;
  nodes: Array<Message>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type MessageConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type MessageEdge = {
  __typename?: 'MessageEdge';
  cursor: Scalars['String']['output'];
  node: Message;
};

export type MessageFilter = {
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type MessengerLoanInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'MessengerLoanInvoice';
    amount?: Maybe<Scalars['Int']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceId?: Maybe<Scalars['String']['output']>;
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type MessengerLoanInvoiceCanIArgs = {
  action: CanIAction;
};

export type MnCitizenIdentity = KycInterface & {
  __typename?: 'MnCitizenIdentity';
  approvedAt?: Maybe<Scalars['ISO8601Date']['output']>;
  approvedBy?: Maybe<Scalars['String']['output']>;
  back?: Maybe<Scalars['String']['output']>;
  backVerifiedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  expireAt?: Maybe<Scalars['ISO8601Date']['output']>;
  front?: Maybe<Scalars['String']['output']>;
  frontVerifiedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  id: Scalars['ID']['output'];
  selfie?: Maybe<Scalars['String']['output']>;
  selfieVerifiedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  status?: Maybe<KycStatus | `${KycStatus}`>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
  vendor?: Maybe<Vendor>;
  vendorId?: Maybe<Scalars['ID']['output']>;
  websiteId?: Maybe<Scalars['ID']['output']>;
};

export type MongolChatInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'MongolChatInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    qrLink?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type MongolChatInvoiceCanIArgs = {
  action: CanIAction;
};

export type MoniSource = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'MoniSource';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    expireDate?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceId?: Maybe<Scalars['String']['output']>;
    merchantName?: Maybe<Scalars['String']['output']>;
    mobile?: Maybe<Scalars['String']['output']>;
    paymentMethod: PaymentMethod;
    paymentMethodId: Scalars['ID']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user: User;
    userId: Scalars['ID']['output'];
  };

export type MoniSourceCanIArgs = {
  action: CanIAction;
};

export type MonpayInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'MonpayInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    qrLink?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    uuid?: Maybe<Scalars['String']['output']>;
  };

export type MonpayInvoiceCanIArgs = {
  action: CanIAction;
};

export type MonpayV2Invoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'MonpayV2Invoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    monpayId?: Maybe<Scalars['String']['output']>;
    qrLink?: Maybe<Scalars['String']['output']>;
    receiver?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type MonpayV2InvoiceCanIArgs = {
  action: CanIAction;
};

export type MostInAppInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'MostInAppInvoice';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    custToken?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    tranToken?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type MostInAppInvoiceCanIArgs = {
  action: CanIAction;
};

export type MostInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'MostInvoice';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    qpayAccountId?: Maybe<Scalars['Int']['output']>;
    qrCode?: Maybe<Scalars['String']['output']>;
    qrImage?: Maybe<Scalars['String']['output']>;
    traceNo?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type MostInvoiceCanIArgs = {
  action: CanIAction;
};

export type Movie = BaseModelInterface &
  Node & {
    __typename?: 'Movie';
    attributes?: Maybe<Array<Scalars['String']['output']>>;
    canI: Scalars['Boolean']['output'];
    cinemas?: Maybe<Array<Cinema>>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    genres?: Maybe<Array<Scalars['String']['output']>>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    idx?: Maybe<Scalars['String']['output']>;
    image?: Maybe<Scalars['String']['output']>;
    imdb?: Maybe<Scalars['String']['output']>;
    openingDate?: Maybe<Scalars['ISO8601Date']['output']>;
    rating?: Maybe<Scalars['String']['output']>;
    runtime?: Maybe<Scalars['Int']['output']>;
    sessions?: Maybe<Array<Session>>;
    synopsis?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    trailerUrl?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type MovieCanIArgs = {
  action: CanIAction;
};

export type MovieConnection = {
  __typename?: 'MovieConnection';
  edges: Array<MovieEdge>;
  nodes: Array<Movie>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type MovieConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type MovieEdge = {
  __typename?: 'MovieEdge';
  cursor: Scalars['String']['output'];
  node: Movie;
};

export type MovieFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  idx?: InputMaybe<StringFilter>;
  imdb?: InputMaybe<IntFilter>;
  runtime?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type MovieTicket = BaseModelInterface &
  Node & {
    __typename?: 'MovieTicket';
    amount: Scalars['Float']['output'];
    area: Scalars['Int']['output'];
    areaCategoryCode?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    cinema: Cinema;
    colIndex: Scalars['Int']['output'];
    column: Scalars['String']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['String']['output']>;
    errorDescription?: Maybe<Scalars['String']['output']>;
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    historyId?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    idx?: Maybe<Scalars['String']['output']>;
    movie: Movie;
    number?: Maybe<Scalars['String']['output']>;
    order?: Maybe<Order>;
    row: Scalars['String']['output'];
    rowIndex: Scalars['Int']['output'];
    screen: Screen;
    seat: Scalars['String']['output'];
    session: Session;
    status?: Maybe<Scalars['String']['output']>;
    ticketType: TicketType;
    transNumber?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
  };

export type MovieTicketCanIArgs = {
  action: CanIAction;
};

export type MovieTicketConnection = {
  __typename?: 'MovieTicketConnection';
  edges: Array<MovieTicketEdge>;
  nodes: Array<MovieTicket>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type MovieTicketConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type MovieTicketEdge = {
  __typename?: 'MovieTicketEdge';
  cursor: Scalars['String']['output'];
  node: MovieTicket;
};

export type MovieTicketFilter = {
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  lineItem?: InputMaybe<LineItemFilter>;
  order?: InputMaybe<OrderFilter>;
  price?: InputMaybe<IntFilter>;
  product?: InputMaybe<ProductFilter>;
  seat?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  variant?: InputMaybe<VariantFilter>;
};

export type MovieTicketManifest = Node &
  ProductManifestInterface & {
    __typename?: 'MovieTicketManifest';
    areaCategoryCode?: Maybe<Scalars['String']['output']>;
    areaNumber?: Maybe<Scalars['String']['output']>;
    brand?: Maybe<Brand>;
    canSupply?: Maybe<Scalars['Boolean']['output']>;
    cinema: Cinema;
    column?: Maybe<Scalars['Int']['output']>;
    columnIndex?: Maybe<Scalars['Int']['output']>;
    data?: Maybe<Scalars['String']['output']>;
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    fulfillDuration?: Maybe<Scalars['Int']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    maxQty?: Maybe<Scalars['Int']['output']>;
    name: Scalars['String']['output'];
    optionsText?: Maybe<Scalars['String']['output']>;
    price: Scalars['Float']['output'];
    productCat?: Maybe<Scalars['String']['output']>;
    row?: Maybe<Scalars['Int']['output']>;
    rowIndex?: Maybe<Scalars['Int']['output']>;
    seat?: Maybe<Scalars['String']['output']>;
    session: Session;
    sku?: Maybe<Scalars['String']['output']>;
    slug: Scalars['String']['output'];
    status?: Maybe<Scalars['String']['output']>;
    ticketType?: Maybe<TicketType>;
    ticketTypeCode?: Maybe<Scalars['String']['output']>;
    totalOnHand?: Maybe<Scalars['Int']['output']>;
    vendor?: Maybe<Vendor>;
    weight?: Maybe<Scalars['Float']['output']>;
  };

export type MultiPercent = BaseModelInterface &
  CalculatorInterface &
  Node & {
    __typename?: 'MultiPercent';
    calculableId?: Maybe<Scalars['Int']['output']>;
    calculableType?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredOrder: Scalars['String']['output'];
    preferredPercents: Scalars['String']['output'];
    preferredRule: Scalars['String']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type MultiPercentCanIArgs = {
  action: CanIAction;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptMassChatMessage?: Maybe<MassMessage>;
  acceptPrescription?: Maybe<Prescription>;
  actionCollect?: Maybe<Collect>;
  activationETicket?: Maybe<ETicketActivation>;
  activationSyncETicket?: Maybe<ETicketActivation>;
  addBankAccount?: Maybe<Bank>;
  addBankToWallet?: Maybe<Wallet>;
  addBatchStoreListings?: Maybe<Scalars['Boolean']['output']>;
  addBtobEmployeeBankAccount?: Maybe<Employee>;
  addCampaignList?: Maybe<ShoppyCampaign>;
  addComment?: Maybe<Comment>;
  addEmployee?: Maybe<Employee>;
  addFeedback?: Maybe<FeedbackType>;
  addFeedbackTopic?: Maybe<FeedbackTopic>;
  addOrderNote?: Maybe<OrderComment>;
  addPrescriptionItem?: Maybe<PrescriptionItem>;
  addPromotionNote?: Maybe<OrderComment>;
  addStockToLocation?: Maybe<StockItem>;
  addToCart?: Maybe<Order>;
  addToWish?: Maybe<WishedProduct>;
  applyCoupon?: Maybe<Order>;
  approveOrders?: Maybe<Scalars['String']['output']>;
  assignMassPromo?: Maybe<Scalars['Boolean']['output']>;
  assignSalesManagerByMsCode?: Maybe<Scalars['Boolean']['output']>;
  authChangePassword?: Maybe<Scalars['Boolean']['output']>;
  authChangePasswordWithOld?: Maybe<Scalars['Boolean']['output']>;
  authCheckLogin?: Maybe<Scalars['JSON']['output']>;
  authRegister?: Maybe<Scalars['Boolean']['output']>;
  authResetPassword?: Maybe<Scalars['String']['output']>;
  authValidateOtp?: Maybe<Scalars['Boolean']['output']>;
  batchUpdateVariants?: Maybe<Product>;
  blackFridayPromotion?: Maybe<LotteryEntry>;
  cancelOrderTemplate?: Maybe<OrderTemplate>;
  cancelPrescription?: Maybe<Prescription>;
  changeItem?: Maybe<Order>;
  changeLoyaltyCardPassword?: Maybe<LoyaltyCard>;
  changeWalletPin?: Maybe<Wallet>;
  chargeGiftCard?: Maybe<Order>;
  checkAlifPayCard?: Maybe<Scalars['Boolean']['output']>;
  checkEntryToAirLotteryEvent?: Maybe<Scalars['Boolean']['output']>;
  checkGolomtCardPassword?: Maybe<Scalars['JSON']['output']>;
  checkIntendUser?: Maybe<Scalars['Boolean']['output']>;
  checkLoyaltyCardInfo?: Maybe<Scalars['JSON']['output']>;
  checkMobile?: Maybe<Scalars['Boolean']['output']>;
  checkPayment?: Maybe<Payment>;
  checkPosStageTicket?: Maybe<Scalars['JSON']['output']>;
  checkSegmentWhiteList?: Maybe<Scalars['Boolean']['output']>;
  christmasSlotPromotion?: Maybe<LotteryEntry>;
  claimGift?: Maybe<Order>;
  claimGiftItems?: Maybe<Order>;
  claimPromotion?: Maybe<Scalars['JSON']['output']>;
  clearViewTrack?: Maybe<Scalars['Boolean']['output']>;
  clearWish?: Maybe<Wishlist>;
  collectOrder?: Maybe<Collect>;
  confirmAlifPayCharge?: Maybe<Scalars['Boolean']['output']>;
  confirmGolomtVcc?: Maybe<Scalars['JSON']['output']>;
  confirmIntendInvoice?: Maybe<Scalars['Boolean']['output']>;
  confirmMerchant?: Maybe<Merchant>;
  confirmPosStageTicket?: Maybe<Scalars['JSON']['output']>;
  confirmPrescription?: Maybe<Prescription>;
  createAddress?: Maybe<Address>;
  createAssetRole?: Maybe<AssetRole>;
  createBranch?: Maybe<Branch>;
  createBtobBusinessClient?: Maybe<BusinessClient>;
  createCampaign?: Maybe<ShoppyCampaign>;
  createCard?: Maybe<Card>;
  createChatRoom?: Maybe<Room>;
  createClientsStore?: Maybe<ClientsStore>;
  createEMailContact?: Maybe<Contact>;
  createForm?: Maybe<ShoppyForm>;
  createLease?: Maybe<User>;
  createListings?: Maybe<Scalars['Boolean']['output']>;
  createLoyaltyCard?: Maybe<LoyaltyCard>;
  createMassRepayment?: Maybe<MassRepayment>;
  createOptionValueImage?: Maybe<ProductImage>;
  createOrUpdateStoreListing?: Maybe<Array<StoreListing>>;
  createOrder?: Maybe<Order>;
  createOrderTemplate?: Maybe<OrderTemplate>;
  createOrderTemplateFromOrder?: Maybe<OrderTemplate>;
  createPoll?: Maybe<Poll>;
  createPrescription?: Maybe<Prescription>;
  createProduct?: Maybe<Product>;
  createPushTemplate?: Maybe<PushTemplate>;
  createReport?: Maybe<Scalars['Boolean']['output']>;
  createReportReason?: Maybe<ReportReason>;
  createReview?: Maybe<Review>;
  createSalePrice?: Maybe<SalePrice>;
  createShipper?: Maybe<Shipper>;
  createShoppyImage?: Maybe<Image>;
  createStockLocation?: Maybe<StockLocation>;
  createTecAlliancePrices?: Maybe<Scalars['JSON']['output']>;
  createTracking?: Maybe<TrackingType>;
  createUPointCard?: Maybe<UPointCard>;
  createUserAddress?: Maybe<UserAddress>;
  createUserArticle?: Maybe<UserArticle>;
  createVariant?: Maybe<Variant>;
  createVariantImage?: Maybe<ProductImage>;
  createVendor?: Maybe<Vendor>;
  createWalletRequest?: Maybe<WalletRequest>;
  createWishlist?: Maybe<Wishlist>;
  deactivateCard?: Maybe<Card>;
  deactivateVoucher?: Maybe<Order>;
  deleteEntriesFromSegmentWhiteList?: Maybe<SegmentWhiteListReport>;
  destroyAssetRole?: Maybe<AssetRole>;
  destroyBankAccount?: Maybe<Bank>;
  destroyBatchVariants?: Maybe<Product>;
  destroyBranch?: Maybe<Branch>;
  destroyDepartmentStore?: Maybe<DepartmentStore>;
  destroyEmployee?: Maybe<Employee>;
  destroyFeedbackTopic?: Maybe<FeedbackTopic>;
  destroyForm?: Maybe<ShoppyForm>;
  destroyLineItem?: Maybe<LineItem>;
  destroyListings?: Maybe<Scalars['Boolean']['output']>;
  destroyMerchant?: Maybe<Merchant>;
  destroyOrderTemplate?: Maybe<OrderTemplate>;
  destroyPoll?: Maybe<Poll>;
  destroyProductImage?: Maybe<ProductImage>;
  destroyProductOptionValueImage?: Maybe<ProductImage>;
  destroyPushTemplate?: Maybe<PushTemplate>;
  destroyReview?: Maybe<Review>;
  destroyReviews?: Maybe<Scalars['Boolean']['output']>;
  destroySalePrice?: Maybe<SalePrice>;
  destroySavedCard?: Maybe<Scalars['Boolean']['output']>;
  destroyShipper?: Maybe<Shipper>;
  destroyShoppyImage?: Maybe<Image>;
  destroyStockItem?: Maybe<StockItem>;
  destroyStockLocation?: Maybe<StockLocation>;
  destroyStoreListing?: Maybe<Scalars['Boolean']['output']>;
  destroyUserAddress?: Maybe<UserAddress>;
  destroyUserArticle?: Maybe<Scalars['Boolean']['output']>;
  destroyVariant?: Maybe<Scalars['Boolean']['output']>;
  destroyWish?: Maybe<WishedProduct>;
  destroyWishlist?: Maybe<Wishlist>;
  disableCurrentUser?: Maybe<User>;
  disableTotp?: Maybe<User>;
  emptyCart?: Maybe<Order>;
  enableTotp?: Maybe<User>;
  eventBuy?: Maybe<Scalars['Boolean']['output']>;
  generateLoyaltyCardQr?: Maybe<Scalars['JSON']['output']>;
  generateUserTokenQr?: Maybe<UserToken>;
  generateVariants?: Maybe<Product>;
  golomtOtp?: Maybe<Scalars['JSON']['output']>;
  halloweenPromotion?: Maybe<LotteryEntry>;
  handleCartItem?: Maybe<LineItem>;
  imageSearch?: Maybe<Scalars['JSON']['output']>;
  importShoppyImages?: Maybe<Array<Image>>;
  inviteBtobEmployee?: Maybe<Employee>;
  inviteEmployee?: Maybe<Employee>;
  inviteMerchant?: Maybe<Merchant>;
  joinBusiness?: Maybe<Employee>;
  leaseAcceptTerm?: Maybe<Scalars['Boolean']['output']>;
  leaseCancel?: Maybe<Scalars['Boolean']['output']>;
  leaseChangeName?: Maybe<Scalars['Boolean']['output']>;
  leaseComplete?: Maybe<Order>;
  leaseCompleteFix?: Maybe<User>;
  leaseDeclineTerm?: Maybe<Scalars['Boolean']['output']>;
  leaseMakeNormal?: Maybe<Scalars['Boolean']['output']>;
  leaseUpdateAddress?: Maybe<User>;
  leaseUpdateEducation?: Maybe<UserEducation>;
  leaseUpdateEmergency?: Maybe<Array<EmergencyContact>>;
  leaseUpdateEmployment?: Maybe<UserEmployment>;
  leaseUpdateFinance?: Maybe<UserFinance>;
  leaseUploadPassport?: Maybe<Scalars['Boolean']['output']>;
  leaveChatRoom?: Maybe<Room>;
  linkDevice?: Maybe<Device>;
  mcsCheckRegister?: Maybe<Scalars['JSON']['output']>;
  mcsRegister?: Maybe<Scalars['JSON']['output']>;
  mcsResetPassword?: Maybe<Scalars['Boolean']['output']>;
  mcsSignup?: Maybe<Scalars['JSON']['output']>;
  mcsVerify?: Maybe<Scalars['JSON']['output']>;
  orderPay?: Maybe<Scalars['JSON']['output']>;
  passCoupon?: Maybe<Coupon>;
  passETicket?: Maybe<ETicket>;
  payCargoPrice?: Maybe<Order>;
  paymentAction?: Maybe<Scalars['JSON']['output']>;
  performId1?: Maybe<User>;
  performLineItemAction?: Maybe<LineItem>;
  performOrderAction?: Maybe<Order>;
  playCurrentEvent?: Maybe<PlayCurrentEvent>;
  printOrders?: Maybe<Scalars['JSON']['output']>;
  quickBuy?: Maybe<Order>;
  readAllNotification?: Maybe<Scalars['Boolean']['output']>;
  readNotification?: Maybe<Notification>;
  readyShipment?: Maybe<Shipment>;
  receivePreorderShipment?: Maybe<Shipment>;
  refreshOrderTrackings?: Maybe<Scalars['Boolean']['output']>;
  registerQPayCard?: Maybe<Scalars['JSON']['output']>;
  removeBankFromWallet?: Maybe<Scalars['Boolean']['output']>;
  removeBtobEmployeeBankAccount?: Maybe<Employee>;
  removeCampaignList?: Maybe<CampaignListing>;
  removeChatMessage?: Maybe<Scalars['Boolean']['output']>;
  removePrescription?: Maybe<Prescription>;
  removePrescriptionItem?: Maybe<PrescriptionItem>;
  removeViewTrack?: Maybe<Scalars['Boolean']['output']>;
  replaceNfc?: Maybe<ETicketActivation>;
  requestCardOtp?: Maybe<Scalars['Boolean']['output']>;
  requestGolomtVcc?: Maybe<Scalars['JSON']['output']>;
  requestListingOtp?: Maybe<Listing>;
  requestMerchant?: Maybe<Merchant>;
  requestPaymentReturn?: Maybe<PaymentReturn>;
  resendGiftCard?: Maybe<GiftCard>;
  resendIntendSms?: Maybe<Scalars['Boolean']['output']>;
  resendShipmentTracking?: Maybe<Order>;
  resolveOutOfStock?: Maybe<Order>;
  reviewDriver?: Maybe<Review>;
  searchAddress?: Maybe<Scalars['JSON']['output']>;
  seenChatMessage?: Maybe<Room>;
  selectPrescriptionItem?: Maybe<PrescriptionItem>;
  sendChangeLoyaltyCardPasswordOtp?: Maybe<Scalars['JSON']['output']>;
  sendChatMessage?: Maybe<Message>;
  sendCoupon?: Maybe<Coupon>;
  sendCreateLoyaltyCardOtp?: Maybe<Scalars['JSON']['output']>;
  sendErpLoyaltyRequest?: Maybe<Scalars['JSON']['output']>;
  sendInvoice?: Maybe<Scalars['Boolean']['output']>;
  sendInvoiceNotification?: Maybe<Scalars['Boolean']['output']>;
  sendJobApplicationEmail?: Maybe<Scalars['Boolean']['output']>;
  sendNotification?: Maybe<Scalars['Boolean']['output']>;
  sendUserTokenQr?: Maybe<UserToken>;
  sendWalletWithdrawToken?: Maybe<Transaction>;
  setAvailability?: Maybe<TrackableType>;
  setGolomtCardPassword?: Maybe<Scalars['JSON']['output']>;
  shipShipment?: Maybe<Shipment>;
  shoppyBox?: Maybe<EventEntry>;
  shoppyhubPromotion?: Maybe<LotteryEntry>;
  submitAnswer?: Maybe<QuizResult>;
  submitEntryToAirLotteryEvent?: Maybe<Scalars['JSON']['output']>;
  submitForm?: Maybe<ShoppyForm>;
  swapOrderDriver?: Maybe<Order>;
  syncListings?: Maybe<Scalars['Boolean']['output']>;
  syncListingsSeo?: Maybe<Scalars['Boolean']['output']>;
  syncReport?: Maybe<Scalars['Boolean']['output']>;
  toggleAdjustmentPromise?: Maybe<Order>;
  toggleFollow?: Maybe<Follow>;
  toggleWish?: Maybe<Wishlist>;
  topUpGiftCard?: Maybe<GiftCard>;
  transferShipment?: Maybe<Shipment>;
  unlockWalletPin?: Maybe<Wallet>;
  updateAddress?: Maybe<Address>;
  updateAfterPay?: Maybe<Merchant>;
  updateAssetRole?: Maybe<AssetRole>;
  updateAssetRoleBatch?: Maybe<Array<AssetRole>>;
  updateAvatar?: Maybe<User>;
  updateBankAccount?: Maybe<Bank>;
  updateBranch?: Maybe<Branch>;
  updateBtobBusinessClient?: Maybe<BusinessClient>;
  updateBtobOrderTemplate?: Maybe<OrderTemplate>;
  updateCampaign?: Maybe<ShoppyCampaign>;
  updateCampaignList?: Maybe<CampaignListing>;
  updateCard?: Maybe<Card>;
  updateChannel?: Maybe<Cinema>;
  updateCheckoutOrder?: Maybe<Order>;
  updateClientsStore?: Maybe<ClientsStore>;
  updateCompleteOrder?: Maybe<Order>;
  updateEmployee?: Maybe<Employee>;
  updateFeedback?: Maybe<FeedbackType>;
  updateFeedbackTopic?: Maybe<FeedbackTopic>;
  updateForm?: Maybe<ShoppyForm>;
  updateFormEntry?: Maybe<ShoppyFormEntry>;
  updateInvitedBtobEmployee?: Maybe<Employee>;
  updateItem?: Maybe<Order>;
  updateKyc?: Maybe<User>;
  updateKycGolomt?: Maybe<GolomtKyc>;
  updateListing?: Maybe<Listing>;
  updateListingBatch?: Maybe<Scalars['Boolean']['output']>;
  updateListingEs?: Maybe<Scalars['Boolean']['output']>;
  updateListingOptions?: Maybe<Listing>;
  updateLogin?: Maybe<User>;
  updateMassChatMessage?: Maybe<MassMessage>;
  updateMerchant?: Maybe<Merchant>;
  updateOrder?: Maybe<Order>;
  updateOrderTemplate?: Maybe<OrderTemplate>;
  updatePoll?: Maybe<Poll>;
  updatePositionOptionValueImage?: Maybe<ProductOptionValue>;
  updatePositionSalePrices?: Maybe<Variant>;
  updatePositionVariantImage?: Maybe<Variant>;
  updatePrescription?: Maybe<Prescription>;
  updatePrescriptionItem?: Maybe<PrescriptionItem>;
  updateProduct?: Maybe<Product>;
  updatePushTemplate?: Maybe<PushTemplate>;
  updateReportReason?: Maybe<ReportReason>;
  updateSaleListing?: Maybe<Array<Listing>>;
  updateSalePrice?: Maybe<SalePrice>;
  updateShipmentTracking?: Maybe<Scalars['Boolean']['output']>;
  updateShipper?: Maybe<Shipper>;
  updateStockItem?: Maybe<StockItem>;
  updateStockLocation?: Maybe<StockLocation>;
  updateUserAddress?: Maybe<UserAddress>;
  updateUserClearance?: Maybe<User>;
  updateUserProfile?: Maybe<User>;
  updateVariant?: Maybe<Variant>;
  updateVendor?: Maybe<Vendor>;
  updateVendorLogo?: Maybe<Vendor>;
  updateWishedProduct?: Maybe<WishedProduct>;
  updateWishlist?: Maybe<Wishlist>;
  uploadSegmentWhiteList?: Maybe<SegmentWhiteListReport>;
  useCoupon?: Maybe<Coupon>;
  useGiftCard?: Maybe<GiftCard>;
  useLoyaltyCard?: Maybe<Order>;
  useStoreCredit?: Maybe<Order>;
  useStoreCreditById?: Maybe<Order>;
  useUPointCard?: Maybe<Order>;
  useUserTokenQr?: Maybe<UserToken>;
  useVoucher?: Maybe<Order>;
  validateApplePayMerchant?: Maybe<Scalars['JSON']['output']>;
  verifyCard?: Maybe<Card>;
  verifyEMongolia?: Maybe<Scalars['String']['output']>;
  verifyLogin?: Maybe<User>;
  verifyMnCitizenIdentity?: Maybe<MnCitizenIdentity>;
  verifyWallet?: Maybe<Scalars['JSON']['output']>;
  verifyWalletWithdraw?: Maybe<Transaction>;
  viewTrack?: Maybe<RecentlyViewedListing>;
  walletWithdraw?: Maybe<Transaction>;
};

export type MutationAcceptMassChatMessageArgs = {
  input: AcceptMassChatMessageInput;
};

export type MutationAcceptPrescriptionArgs = {
  input: AcceptPrescriptionInput;
};

export type MutationActionCollectArgs = {
  input: ActionCollectInput;
};

export type MutationActivationETicketArgs = {
  input: ActivationETicketInput;
};

export type MutationActivationSyncETicketArgs = {
  input: ActivationSyncETicketInput;
};

export type MutationAddBankAccountArgs = {
  input: AddBankAccountInput;
};

export type MutationAddBankToWalletArgs = {
  input: AddBankToWalletInput;
};

export type MutationAddBatchStoreListingsArgs = {
  input: AddBatchStoreListingsInput;
};

export type MutationAddBtobEmployeeBankAccountArgs = {
  input: AddBtobEmployeeBankAccountInput;
};

export type MutationAddCampaignListArgs = {
  input: AddCampaignListInput;
};

export type MutationAddCommentArgs = {
  input: AddCommentInput;
};

export type MutationAddEmployeeArgs = {
  input: AddEmployeeInput;
};

export type MutationAddFeedbackArgs = {
  input: AddFeedbackInput;
};

export type MutationAddFeedbackTopicArgs = {
  input: AddFeedbackTopicInput;
};

export type MutationAddOrderNoteArgs = {
  input: AddOrderNoteInput;
};

export type MutationAddPrescriptionItemArgs = {
  input: AddPrescriptionItemInput;
};

export type MutationAddPromotionNoteArgs = {
  input: AddPromotionNoteInput;
};

export type MutationAddStockToLocationArgs = {
  input: AddStockToLocationInput;
};

export type MutationAddToCartArgs = {
  input: AddToCartInput;
};

export type MutationAddToWishArgs = {
  input: AddToWishInput;
};

export type MutationApplyCouponArgs = {
  input: ApplyCouponInput;
};

export type MutationApproveOrdersArgs = {
  input: ApproveOrdersInput;
};

export type MutationAssignMassPromoArgs = {
  input: AssignMassPromoInput;
};

export type MutationAssignSalesManagerByMsCodeArgs = {
  input: AssignSalesManagerByMsCodeInput;
};

export type MutationAuthChangePasswordArgs = {
  input: AuthChangePasswordInput;
};

export type MutationAuthChangePasswordWithOldArgs = {
  input: AuthChangePasswordWithOldInput;
};

export type MutationAuthCheckLoginArgs = {
  input: AuthCheckLoginInput;
};

export type MutationAuthRegisterArgs = {
  input: AuthRegisterInput;
};

export type MutationAuthResetPasswordArgs = {
  input: AuthResetPasswordInput;
};

export type MutationAuthValidateOtpArgs = {
  input: AuthValidateOtpInput;
};

export type MutationBatchUpdateVariantsArgs = {
  input: BatchUpdateVariantsInput;
};

export type MutationBlackFridayPromotionArgs = {
  input: BlackFridayPromotionInput;
};

export type MutationCancelOrderTemplateArgs = {
  input: CancelOrderTemplateInput;
};

export type MutationCancelPrescriptionArgs = {
  input: CancelPrescriptionInput;
};

export type MutationChangeItemArgs = {
  input: ChangeItemInput;
};

export type MutationChangeLoyaltyCardPasswordArgs = {
  input: ChangeLoyaltyCardPasswordInput;
};

export type MutationChangeWalletPinArgs = {
  input: ChangeWalletPinInput;
};

export type MutationChargeGiftCardArgs = {
  input: ChargeGiftCardInput;
};

export type MutationCheckAlifPayCardArgs = {
  input: CheckAlifPayCardInput;
};

export type MutationCheckEntryToAirLotteryEventArgs = {
  input: CheckEntryToAirLotteryEventInput;
};

export type MutationCheckGolomtCardPasswordArgs = {
  input: CheckGolomtCardPasswordInput;
};

export type MutationCheckIntendUserArgs = {
  input: CheckIntendUserInput;
};

export type MutationCheckLoyaltyCardInfoArgs = {
  input: CheckLoyaltyCardInfoInput;
};

export type MutationCheckMobileArgs = {
  input: CheckMobileInput;
};

export type MutationCheckPaymentArgs = {
  input: CheckPaymentInput;
};

export type MutationCheckPosStageTicketArgs = {
  input: CheckPosStageTicketInput;
};

export type MutationCheckSegmentWhiteListArgs = {
  input: CheckSegmentWhiteListInput;
};

export type MutationChristmasSlotPromotionArgs = {
  input: ChristmasSlotPromotionInput;
};

export type MutationClaimGiftArgs = {
  input: ClaimGiftInput;
};

export type MutationClaimGiftItemsArgs = {
  input: ClaimGiftItemsInput;
};

export type MutationClaimPromotionArgs = {
  input: ClaimPromotionInput;
};

export type MutationClearViewTrackArgs = {
  input: ClearViewTrackInput;
};

export type MutationClearWishArgs = {
  input: ClearWishInput;
};

export type MutationCollectOrderArgs = {
  input: CollectOrderInput;
};

export type MutationConfirmAlifPayChargeArgs = {
  input: ConfirmAlifPayChargeInput;
};

export type MutationConfirmGolomtVccArgs = {
  input: ConfirmGolomtVccInput;
};

export type MutationConfirmIntendInvoiceArgs = {
  input: ConfirmIntendInvoiceInput;
};

export type MutationConfirmMerchantArgs = {
  input: ConfirmMerchantInput;
};

export type MutationConfirmPosStageTicketArgs = {
  input: ConfirmPosStageTicketInput;
};

export type MutationConfirmPrescriptionArgs = {
  input: ConfirmPrescriptionInput;
};

export type MutationCreateAddressArgs = {
  input: CreateAddressInput;
};

export type MutationCreateAssetRoleArgs = {
  input: CreateAssetRoleInput;
};

export type MutationCreateBranchArgs = {
  input: CreateBranchInput;
};

export type MutationCreateBtobBusinessClientArgs = {
  input: CreateBtobBusinessClientInput;
};

export type MutationCreateCampaignArgs = {
  input: CreateCampaignInput;
};

export type MutationCreateCardArgs = {
  input: CreateCardInput;
};

export type MutationCreateChatRoomArgs = {
  input: CreateChatRoomInput;
};

export type MutationCreateClientsStoreArgs = {
  input: CreateClientsStoreInput;
};

export type MutationCreateEMailContactArgs = {
  input: CreateEMailContactInput;
};

export type MutationCreateFormArgs = {
  input: CreateFormInput;
};

export type MutationCreateLeaseArgs = {
  input: CreateLeaseInput;
};

export type MutationCreateListingsArgs = {
  input: CreateListingsInput;
};

export type MutationCreateLoyaltyCardArgs = {
  input: CreateLoyaltyCardInput;
};

export type MutationCreateMassRepaymentArgs = {
  input: CreateMassRepaymentInput;
};

export type MutationCreateOptionValueImageArgs = {
  input: CreateOptionValueImageInput;
};

export type MutationCreateOrUpdateStoreListingArgs = {
  input: CreateOrUpdateStoreListingInput;
};

export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};

export type MutationCreateOrderTemplateArgs = {
  input: CreateOrderTemplateInput;
};

export type MutationCreateOrderTemplateFromOrderArgs = {
  input: CreateOrderTemplateFromOrderInput;
};

export type MutationCreatePollArgs = {
  input: CreatePollInput;
};

export type MutationCreatePrescriptionArgs = {
  input: CreatePrescriptionInput;
};

export type MutationCreateProductArgs = {
  input: CreateProductInput;
};

export type MutationCreatePushTemplateArgs = {
  input: CreatePushTemplateInput;
};

export type MutationCreateReportArgs = {
  input: CreateReportInput;
};

export type MutationCreateReportReasonArgs = {
  input: CreateReportReasonInput;
};

export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
};

export type MutationCreateSalePriceArgs = {
  input: CreateSalePriceInput;
};

export type MutationCreateShipperArgs = {
  input: CreateShipperInput;
};

export type MutationCreateShoppyImageArgs = {
  input: CreateShoppyImageInput;
};

export type MutationCreateStockLocationArgs = {
  input: CreateStockLocationInput;
};

export type MutationCreateTecAlliancePricesArgs = {
  input: CreateTecAlliancePricesInput;
};

export type MutationCreateTrackingArgs = {
  input: CreateTrackingInput;
};

export type MutationCreateUPointCardArgs = {
  input: CreateUPointCardInput;
};

export type MutationCreateUserAddressArgs = {
  input: CreateUserAddressInput;
};

export type MutationCreateUserArticleArgs = {
  input: CreateUserArticleInput;
};

export type MutationCreateVariantArgs = {
  input: CreateVariantInput;
};

export type MutationCreateVariantImageArgs = {
  input: CreateVariantImageInput;
};

export type MutationCreateVendorArgs = {
  input: CreateVendorInput;
};

export type MutationCreateWalletRequestArgs = {
  input: CreateWalletRequestInput;
};

export type MutationCreateWishlistArgs = {
  input: CreateWishlistInput;
};

export type MutationDeactivateCardArgs = {
  input: DeactivateCardInput;
};

export type MutationDeactivateVoucherArgs = {
  input: DeactivateVoucherInput;
};

export type MutationDeleteEntriesFromSegmentWhiteListArgs = {
  input: DeleteEntriesFromSegmentWhiteListInput;
};

export type MutationDestroyAssetRoleArgs = {
  input: DestroyAssetRoleInput;
};

export type MutationDestroyBankAccountArgs = {
  input: DestroyBankAccountInput;
};

export type MutationDestroyBatchVariantsArgs = {
  input: DestroyBatchVariantsInput;
};

export type MutationDestroyBranchArgs = {
  input: DestroyBranchInput;
};

export type MutationDestroyDepartmentStoreArgs = {
  input: DestroyDepartmentStoreInput;
};

export type MutationDestroyEmployeeArgs = {
  input: DestroyEmployeeInput;
};

export type MutationDestroyFeedbackTopicArgs = {
  input: DestroyFeedbackTopicInput;
};

export type MutationDestroyFormArgs = {
  input: DestroyFormInput;
};

export type MutationDestroyLineItemArgs = {
  input: DestroyLineItemInput;
};

export type MutationDestroyListingsArgs = {
  input: DestroyListingsInput;
};

export type MutationDestroyMerchantArgs = {
  input: DestroyMerchantInput;
};

export type MutationDestroyOrderTemplateArgs = {
  input: DestroyOrderTemplateInput;
};

export type MutationDestroyPollArgs = {
  input: DestroyPollInput;
};

export type MutationDestroyProductImageArgs = {
  input: DestroyProductImageInput;
};

export type MutationDestroyProductOptionValueImageArgs = {
  input: DestroyProductOptionValueImageInput;
};

export type MutationDestroyPushTemplateArgs = {
  input: DestroyPushTemplateInput;
};

export type MutationDestroyReviewArgs = {
  input: DestroyReviewInput;
};

export type MutationDestroyReviewsArgs = {
  input: DestroyReviewsInput;
};

export type MutationDestroySalePriceArgs = {
  input: DestroySalePriceInput;
};

export type MutationDestroySavedCardArgs = {
  input: DestroySavedCardInput;
};

export type MutationDestroyShipperArgs = {
  input: DestroyShipperInput;
};

export type MutationDestroyShoppyImageArgs = {
  input: DestroyShoppyImageInput;
};

export type MutationDestroyStockItemArgs = {
  input: DestroyStockItemInput;
};

export type MutationDestroyStockLocationArgs = {
  input: DestroyStockLocationInput;
};

export type MutationDestroyStoreListingArgs = {
  input: DestroyStoreListingInput;
};

export type MutationDestroyUserAddressArgs = {
  input: DestroyUserAddressInput;
};

export type MutationDestroyUserArticleArgs = {
  input: DestroyUserArticleInput;
};

export type MutationDestroyVariantArgs = {
  input: DestroyVariantInput;
};

export type MutationDestroyWishArgs = {
  input: DestroyWishInput;
};

export type MutationDestroyWishlistArgs = {
  input: DestroyWishlistInput;
};

export type MutationDisableCurrentUserArgs = {
  input: DisableCurrentUserInput;
};

export type MutationDisableTotpArgs = {
  input: DisableTotpInput;
};

export type MutationEmptyCartArgs = {
  input: EmptyCartInput;
};

export type MutationEnableTotpArgs = {
  input: EnableTotpInput;
};

export type MutationEventBuyArgs = {
  input: EventBuyInput;
};

export type MutationGenerateLoyaltyCardQrArgs = {
  input: GenerateLoyaltyCardQrInput;
};

export type MutationGenerateUserTokenQrArgs = {
  input: GenerateUserTokenQrInput;
};

export type MutationGenerateVariantsArgs = {
  input: GenerateVariantsInput;
};

export type MutationGolomtOtpArgs = {
  input: GolomtOtpInput;
};

export type MutationHalloweenPromotionArgs = {
  input: HalloweenPromotionInput;
};

export type MutationHandleCartItemArgs = {
  input: HandleCartItemInput;
};

export type MutationImageSearchArgs = {
  input: ImageSearchInput;
};

export type MutationImportShoppyImagesArgs = {
  input: ImportShoppyImagesInput;
};

export type MutationInviteBtobEmployeeArgs = {
  input: InviteBtobEmployeeInput;
};

export type MutationInviteEmployeeArgs = {
  input: InviteEmployeeInput;
};

export type MutationInviteMerchantArgs = {
  input: InviteMerchantInput;
};

export type MutationJoinBusinessArgs = {
  input: JoinBusinessInput;
};

export type MutationLeaseAcceptTermArgs = {
  input: LeaseAcceptTermInput;
};

export type MutationLeaseCancelArgs = {
  input: LeaseCancelInput;
};

export type MutationLeaseChangeNameArgs = {
  input: LeaseChangeNameInput;
};

export type MutationLeaseCompleteArgs = {
  input: LeaseCompleteInput;
};

export type MutationLeaseCompleteFixArgs = {
  input: LeaseCompleteFixInput;
};

export type MutationLeaseDeclineTermArgs = {
  input: LeaseDeclineTermInput;
};

export type MutationLeaseMakeNormalArgs = {
  input: LeaseMakeNormalInput;
};

export type MutationLeaseUpdateAddressArgs = {
  input: LeaseUpdateAddressInput;
};

export type MutationLeaseUpdateEducationArgs = {
  input: LeaseUpdateEducationInput;
};

export type MutationLeaseUpdateEmergencyArgs = {
  input: LeaseUpdateEmergencyInput;
};

export type MutationLeaseUpdateEmploymentArgs = {
  input: LeaseUpdateEmploymentInput;
};

export type MutationLeaseUpdateFinanceArgs = {
  input: LeaseUpdateFinanceInput;
};

export type MutationLeaseUploadPassportArgs = {
  input: LeaseUploadPassportInput;
};

export type MutationLeaveChatRoomArgs = {
  input: LeaveChatRoomInput;
};

export type MutationLinkDeviceArgs = {
  input: LinkDeviceInput;
};

export type MutationMcsCheckRegisterArgs = {
  input: McsCheckRegisterInput;
};

export type MutationMcsRegisterArgs = {
  input: McsRegisterInput;
};

export type MutationMcsResetPasswordArgs = {
  input: McsResetPasswordInput;
};

export type MutationMcsSignupArgs = {
  input: McsSignupInput;
};

export type MutationMcsVerifyArgs = {
  input: McsVerifyInput;
};

export type MutationOrderPayArgs = {
  input: OrderPayInput;
};

export type MutationPassCouponArgs = {
  input: PassCouponInput;
};

export type MutationPassETicketArgs = {
  input: PassETicketInput;
};

export type MutationPayCargoPriceArgs = {
  input: PayCargoPriceInput;
};

export type MutationPaymentActionArgs = {
  input: PaymentActionInput;
};

export type MutationPerformId1Args = {
  input: PerformId1Input;
};

export type MutationPerformLineItemActionArgs = {
  input: PerformLineItemActionInput;
};

export type MutationPerformOrderActionArgs = {
  input: PerformOrderActionInput;
};

export type MutationPlayCurrentEventArgs = {
  input: PlayCurrentEventInput;
};

export type MutationPrintOrdersArgs = {
  input: PrintOrdersInput;
};

export type MutationQuickBuyArgs = {
  input: QuickBuyInput;
};

export type MutationReadAllNotificationArgs = {
  input: ReadAllNotificationInput;
};

export type MutationReadNotificationArgs = {
  input: ReadNotificationInput;
};

export type MutationReadyShipmentArgs = {
  input: ReadyShipmentInput;
};

export type MutationReceivePreorderShipmentArgs = {
  input: ReceivePreorderShipmentInput;
};

export type MutationRefreshOrderTrackingsArgs = {
  input: RefreshOrderTrackingsInput;
};

export type MutationRegisterQPayCardArgs = {
  input: RegisterQPayCardInput;
};

export type MutationRemoveBankFromWalletArgs = {
  input: RemoveBankFromWalletInput;
};

export type MutationRemoveBtobEmployeeBankAccountArgs = {
  input: RemoveBtobEmployeeBankAccountInput;
};

export type MutationRemoveCampaignListArgs = {
  input: RemoveCampaignListInput;
};

export type MutationRemoveChatMessageArgs = {
  input: RemoveChatMessageInput;
};

export type MutationRemovePrescriptionArgs = {
  input: RemovePrescriptionInput;
};

export type MutationRemovePrescriptionItemArgs = {
  input: RemovePrescriptionItemInput;
};

export type MutationRemoveViewTrackArgs = {
  input: RemoveViewTrackInput;
};

export type MutationReplaceNfcArgs = {
  input: ReplaceNfcInput;
};

export type MutationRequestCardOtpArgs = {
  input: RequestCardOtpInput;
};

export type MutationRequestGolomtVccArgs = {
  input: RequestGolomtVccInput;
};

export type MutationRequestListingOtpArgs = {
  input: RequestListingOtpInput;
};

export type MutationRequestMerchantArgs = {
  input: RequestMerchantInput;
};

export type MutationRequestPaymentReturnArgs = {
  input: RequestPaymentReturnInput;
};

export type MutationResendGiftCardArgs = {
  input: ResendGiftCardInput;
};

export type MutationResendIntendSmsArgs = {
  input: ResendIntendSmsInput;
};

export type MutationResendShipmentTrackingArgs = {
  input: ResendShipmentTrackingInput;
};

export type MutationResolveOutOfStockArgs = {
  input: ResolveOutOfStockInput;
};

export type MutationReviewDriverArgs = {
  input: ReviewDriverInput;
};

export type MutationSearchAddressArgs = {
  input: SearchAddressInput;
};

export type MutationSeenChatMessageArgs = {
  input: SeenChatMessageInput;
};

export type MutationSelectPrescriptionItemArgs = {
  input: SelectPrescriptionItemInput;
};

export type MutationSendChangeLoyaltyCardPasswordOtpArgs = {
  input: SendChangeLoyaltyCardPasswordOtpInput;
};

export type MutationSendChatMessageArgs = {
  input: SendChatMessageInput;
};

export type MutationSendCouponArgs = {
  input: SendCouponInput;
};

export type MutationSendCreateLoyaltyCardOtpArgs = {
  input: SendCreateLoyaltyCardOtpInput;
};

export type MutationSendErpLoyaltyRequestArgs = {
  input: SendErpLoyaltyRequestInput;
};

export type MutationSendInvoiceArgs = {
  input: SendInvoiceInput;
};

export type MutationSendInvoiceNotificationArgs = {
  input: SendInvoiceNotificationInput;
};

export type MutationSendJobApplicationEmailArgs = {
  input: SendJobApplicationEmailInput;
};

export type MutationSendNotificationArgs = {
  input: SendNotificationInput;
};

export type MutationSendUserTokenQrArgs = {
  input: SendUserTokenQrInput;
};

export type MutationSendWalletWithdrawTokenArgs = {
  input: SendWalletWithdrawTokenInput;
};

export type MutationSetAvailabilityArgs = {
  input: SetAvailabilityInput;
};

export type MutationSetGolomtCardPasswordArgs = {
  input: SetGolomtCardPasswordInput;
};

export type MutationShipShipmentArgs = {
  input: ShipShipmentInput;
};

export type MutationShoppyBoxArgs = {
  input: ShoppyBoxInput;
};

export type MutationShoppyhubPromotionArgs = {
  input: ShoppyhubPromotionInput;
};

export type MutationSubmitAnswerArgs = {
  input: SubmitAnswerInput;
};

export type MutationSubmitEntryToAirLotteryEventArgs = {
  input: SubmitEntryToAirLotteryEventInput;
};

export type MutationSubmitFormArgs = {
  input: SubmitFormInput;
};

export type MutationSwapOrderDriverArgs = {
  input: SwapOrderDriverInput;
};

export type MutationSyncListingsArgs = {
  input: SyncListingsInput;
};

export type MutationSyncListingsSeoArgs = {
  input: SyncListingsSeoInput;
};

export type MutationSyncReportArgs = {
  input: SyncReportInput;
};

export type MutationToggleAdjustmentPromiseArgs = {
  input: ToggleAdjustmentPromiseInput;
};

export type MutationToggleFollowArgs = {
  input: ToggleFollowInput;
};

export type MutationToggleWishArgs = {
  input: ToggleWishInput;
};

export type MutationTopUpGiftCardArgs = {
  input: TopUpGiftCardInput;
};

export type MutationTransferShipmentArgs = {
  input: TransferShipmentInput;
};

export type MutationUnlockWalletPinArgs = {
  input: UnlockWalletPinInput;
};

export type MutationUpdateAddressArgs = {
  input: UpdateAddressInput;
};

export type MutationUpdateAfterPayArgs = {
  input: UpdateAfterPayInput;
};

export type MutationUpdateAssetRoleArgs = {
  input: UpdateAssetRoleInput;
};

export type MutationUpdateAssetRoleBatchArgs = {
  input: UpdateAssetRoleBatchInput;
};

export type MutationUpdateAvatarArgs = {
  input: UpdateAvatarInput;
};

export type MutationUpdateBankAccountArgs = {
  input: UpdateBankAccountInput;
};

export type MutationUpdateBranchArgs = {
  input: UpdateBranchInput;
};

export type MutationUpdateBtobBusinessClientArgs = {
  input: UpdateBtobBusinessClientInput;
};

export type MutationUpdateBtobOrderTemplateArgs = {
  input: UpdateBtobOrderTemplateInput;
};

export type MutationUpdateCampaignArgs = {
  input: UpdateCampaignInput;
};

export type MutationUpdateCampaignListArgs = {
  input: UpdateCampaignListInput;
};

export type MutationUpdateCardArgs = {
  input: UpdateCardInput;
};

export type MutationUpdateChannelArgs = {
  input: UpdateChannelInput;
};

export type MutationUpdateCheckoutOrderArgs = {
  input: UpdateCheckoutOrderInput;
};

export type MutationUpdateClientsStoreArgs = {
  input: UpdateClientsStoreInput;
};

export type MutationUpdateCompleteOrderArgs = {
  input: UpdateCompleteOrderInput;
};

export type MutationUpdateEmployeeArgs = {
  input: UpdateEmployeeInput;
};

export type MutationUpdateFeedbackArgs = {
  input: UpdateFeedbackInput;
};

export type MutationUpdateFeedbackTopicArgs = {
  input: UpdateFeedbackTopicInput;
};

export type MutationUpdateFormArgs = {
  input: UpdateFormInput;
};

export type MutationUpdateFormEntryArgs = {
  input: UpdateFormEntryInput;
};

export type MutationUpdateInvitedBtobEmployeeArgs = {
  input: UpdateInvitedBtobEmployeeInput;
};

export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};

export type MutationUpdateKycArgs = {
  input: UpdateKycInput;
};

export type MutationUpdateKycGolomtArgs = {
  input: UpdateKycGolomtInput;
};

export type MutationUpdateListingArgs = {
  input: UpdateListingInput;
};

export type MutationUpdateListingBatchArgs = {
  input: UpdateListingBatchInput;
};

export type MutationUpdateListingEsArgs = {
  input: UpdateListingEsInput;
};

export type MutationUpdateListingOptionsArgs = {
  input: UpdateListingOptionsInput;
};

export type MutationUpdateLoginArgs = {
  input: UpdateLoginInput;
};

export type MutationUpdateMassChatMessageArgs = {
  input: UpdateMassChatMessageInput;
};

export type MutationUpdateMerchantArgs = {
  input: UpdateMerchantInput;
};

export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput;
};

export type MutationUpdateOrderTemplateArgs = {
  input: UpdateOrderTemplateInput;
};

export type MutationUpdatePollArgs = {
  input: UpdatePollInput;
};

export type MutationUpdatePositionOptionValueImageArgs = {
  input: UpdatePositionOptionValueImageInput;
};

export type MutationUpdatePositionSalePricesArgs = {
  input: UpdatePositionSalePricesInput;
};

export type MutationUpdatePositionVariantImageArgs = {
  input: UpdatePositionVariantImageInput;
};

export type MutationUpdatePrescriptionArgs = {
  input: UpdatePrescriptionInput;
};

export type MutationUpdatePrescriptionItemArgs = {
  input: UpdatePrescriptionItemInput;
};

export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};

export type MutationUpdatePushTemplateArgs = {
  input: UpdatePushTemplateInput;
};

export type MutationUpdateReportReasonArgs = {
  input: UpdateReportReasonInput;
};

export type MutationUpdateSaleListingArgs = {
  input: UpdateSaleListingInput;
};

export type MutationUpdateSalePriceArgs = {
  input: UpdateSalePriceInput;
};

export type MutationUpdateShipmentTrackingArgs = {
  input: UpdateShipmentTrackingInput;
};

export type MutationUpdateShipperArgs = {
  input: UpdateShipperInput;
};

export type MutationUpdateStockItemArgs = {
  input: UpdateStockItemInput;
};

export type MutationUpdateStockLocationArgs = {
  input: UpdateStockLocationInput;
};

export type MutationUpdateUserAddressArgs = {
  input: UpdateUserAddressInput;
};

export type MutationUpdateUserClearanceArgs = {
  input: UpdateUserClearanceInput;
};

export type MutationUpdateUserProfileArgs = {
  input: UpdateUserProfileInput;
};

export type MutationUpdateVariantArgs = {
  input: UpdateVariantInput;
};

export type MutationUpdateVendorArgs = {
  input: UpdateVendorInput;
};

export type MutationUpdateVendorLogoArgs = {
  input: UpdateVendorLogoInput;
};

export type MutationUpdateWishedProductArgs = {
  input: UpdateWishedProductInput;
};

export type MutationUpdateWishlistArgs = {
  input: UpdateWishlistInput;
};

export type MutationUploadSegmentWhiteListArgs = {
  input: UploadSegmentWhiteListInput;
};

export type MutationUseCouponArgs = {
  input: UseCouponInput;
};

export type MutationUseGiftCardArgs = {
  input: UseGiftCardInput;
};

export type MutationUseLoyaltyCardArgs = {
  input: UseLoyaltyCardInput;
};

export type MutationUseStoreCreditArgs = {
  input: UseStoreCreditInput;
};

export type MutationUseStoreCreditByIdArgs = {
  input: UseStoreCreditByIdInput;
};

export type MutationUseUPointCardArgs = {
  input: UseUPointCardInput;
};

export type MutationUseUserTokenQrArgs = {
  input: UseUserTokenQrInput;
};

export type MutationUseVoucherArgs = {
  input: UseVoucherInput;
};

export type MutationValidateApplePayMerchantArgs = {
  input: ValidateApplePayMerchantInput;
};

export type MutationVerifyCardArgs = {
  input: VerifyCardInput;
};

export type MutationVerifyEMongoliaArgs = {
  input: VerifyEMongoliaInput;
};

export type MutationVerifyLoginArgs = {
  input: VerifyLoginInput;
};

export type MutationVerifyMnCitizenIdentityArgs = {
  input: VerifyMnCitizenIdentityInput;
};

export type MutationVerifyWalletArgs = {
  input: VerifyWalletInput;
};

export type MutationVerifyWalletWithdrawArgs = {
  input: VerifyWalletWithdrawInput;
};

export type MutationViewTrackArgs = {
  input: ViewTrackInput;
};

export type MutationWalletWithdrawArgs = {
  input: WalletWithdrawInput;
};

export type NetCapitalInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'NetCapitalInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    contractNo?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    payday?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    tanCode?: Maybe<Scalars['String']['output']>;
    term?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type NetCapitalInvoiceCanIArgs = {
  action: CanIAction;
};

export type News = BaseModelInterface &
  Node & {
    __typename?: 'News';
    active?: Maybe<Scalars['Boolean']['output']>;
    author?: Maybe<User>;
    body?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    cat?: Maybe<Scalars['String']['output']>;
    cover?: Maybe<Scalars['JSON']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    impressionsCount?: Maybe<Scalars['Int']['output']>;
    tagList: Array<Scalars['String']['output']>;
    tags: Array<Tag>;
    thumbnail?: Maybe<Scalars['JSON']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type NewsCanIArgs = {
  action: CanIAction;
};

export type NewsConnection = {
  __typename?: 'NewsConnection';
  edges: Array<NewsEdge>;
  nodes: Array<News>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type NewsConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type NewsEdge = {
  __typename?: 'NewsEdge';
  cursor: Scalars['String']['output'];
  node: News;
};

export type NewsFilter = {
  active?: InputMaybe<BoolFilter>;
  cat?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  taggedWith?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Node = {
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
};

export type Notice = BaseModelInterface &
  Node & {
    __typename?: 'Notice';
    body?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    link?: Maybe<Scalars['String']['output']>;
    linkName?: Maybe<Scalars['String']['output']>;
    path?: Maybe<Scalars['String']['output']>;
    position?: Maybe<Scalars['Int']['output']>;
    startAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type NoticeCanIArgs = {
  action: CanIAction;
};

export type NoticeConnection = {
  __typename?: 'NoticeConnection';
  edges: Array<NoticeEdge>;
  nodes: Array<Notice>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type NoticeConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type NoticeEdge = {
  __typename?: 'NoticeEdge';
  cursor: Scalars['String']['output'];
  node: Notice;
};

export type NoticeFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  path?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Notification = BaseModelInterface &
  Node & {
    __typename?: 'Notification';
    activityType?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isRead?: Maybe<Scalars['Boolean']['output']>;
    record?: Maybe<NotificationObject>;
    sender?: Maybe<NotificationSender>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    website?: Maybe<Website>;
  };

export type NotificationCanIArgs = {
  action: CanIAction;
};

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  edges: Array<NotificationEdge>;
  nodes: Array<Notification>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type NotificationConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  cursor: Scalars['String']['output'];
  node: Notification;
};

export type NotificationFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  unread?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type NotificationObject =
  | BusinessClient
  | ClientsStore
  | Comment
  | Employee
  | FeedbackType
  | Listing
  | Merchant
  | OneSignalNotification
  | Order
  | OrderComment
  | Prescription
  | Product
  | Transaction
  | Vendor
  | Wallet
  | Website;

export type NotificationSender = User | Vendor | Website;

export type NumurInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'NumurInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    transNumber?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type NumurInvoiceCanIArgs = {
  action: CanIAction;
};

export type NutritionFact = BaseModelInterface &
  Node & {
    __typename?: 'NutritionFact';
    altMeasures?: Maybe<Scalars['JSON']['output']>;
    brand?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    fullNutrients?: Maybe<Scalars['JSON']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    nfCalories?: Maybe<Scalars['Float']['output']>;
    nfCholesterol?: Maybe<Scalars['Float']['output']>;
    nfDietaryFiber?: Maybe<Scalars['Float']['output']>;
    nfP?: Maybe<Scalars['Float']['output']>;
    nfPotassium?: Maybe<Scalars['Float']['output']>;
    nfProtein?: Maybe<Scalars['Float']['output']>;
    nfSaturatedFat?: Maybe<Scalars['Float']['output']>;
    nfSodium?: Maybe<Scalars['Float']['output']>;
    nfSugars?: Maybe<Scalars['Float']['output']>;
    nfTotalCarbohydrate?: Maybe<Scalars['Float']['output']>;
    nfTotalFat?: Maybe<Scalars['Float']['output']>;
    servingQty?: Maybe<Scalars['Float']['output']>;
    servingUnit?: Maybe<Scalars['String']['output']>;
    servingWeightGrams?: Maybe<Scalars['Float']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendor?: Maybe<Vendor>;
  };

export type NutritionFactCanIArgs = {
  action: CanIAction;
};

export type NutritionFactConnection = {
  __typename?: 'NutritionFactConnection';
  edges: Array<NutritionFactEdge>;
  nodes: Array<NutritionFact>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type NutritionFactConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type NutritionFactEdge = {
  __typename?: 'NutritionFactEdge';
  cursor: Scalars['String']['output'];
  node: NutritionFact;
};

export type NutritionFactFilter = {
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  vendor?: InputMaybe<VendorFilter>;
};

export type OmniwayInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'OmniwayInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    qrContent?: Maybe<Scalars['String']['output']>;
    qrImage?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type OmniwayInvoiceCanIArgs = {
  action: CanIAction;
};

export type OneSignalDeviceFilter = {
  adId?: InputMaybe<StringFilter>;
  amountSpent?: InputMaybe<StringFilter>;
  badgeCount?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  deviceModel?: InputMaybe<StringFilter>;
  deviceOs?: InputMaybe<StringFilter>;
  deviceType?: InputMaybe<StringFilter>;
  gameVersion?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  identifier?: InputMaybe<StringFilter>;
  ip?: InputMaybe<StringFilter>;
  lang?: InputMaybe<StringFilter>;
  language?: InputMaybe<StringFilter>;
  lastActive?: InputMaybe<StringFilter>;
  oneSignalId?: InputMaybe<StringFilter>;
  sessionCount?: InputMaybe<StringFilter>;
  subscribed?: InputMaybe<IntFilter>;
  tags?: InputMaybe<StringFilter>;
  timezone?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  webAuth?: InputMaybe<StringFilter>;
  webP256?: InputMaybe<StringFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type OneSignalNotification = BaseModelInterface &
  Node & {
    __typename?: 'OneSignalNotification';
    appUrl?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    contents?: Maybe<Scalars['JSON']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    deliveryType?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    headings?: Maybe<Scalars['JSON']['output']>;
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    sendAfter?: Maybe<Scalars['ISO8601DateTime']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    webUrl?: Maybe<Scalars['String']['output']>;
  };

export type OneSignalNotificationCanIArgs = {
  action: CanIAction;
};

export type OneUsePerUser = Node &
  RuleInterface & {
    __typename?: 'OneUsePerUser';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredPerUserLimit?: Maybe<Scalars['Int']['output']>;
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type OptionType = BaseModelInterface &
  Node & {
    __typename?: 'OptionType';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    optionValues: OptionValueConnection;
    position: Scalars['Int']['output'];
    presentation?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type OptionTypeCanIArgs = {
  action: CanIAction;
};

export type OptionTypeOptionValuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OptionValueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type OptionTypeConnection = {
  __typename?: 'OptionTypeConnection';
  edges: Array<OptionTypeEdge>;
  nodes: Array<OptionType>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type OptionTypeConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type OptionTypeEdge = {
  __typename?: 'OptionTypeEdge';
  cursor: Scalars['String']['output'];
  node: OptionType;
};

export type OptionTypeFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  nameOrPresentation?: InputMaybe<StringFilter>;
  presentation?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  websiteId?: InputMaybe<IdFilter>;
};

export type OptionValue = BaseModelInterface &
  Node & {
    __typename?: 'OptionValue';
    canI: Scalars['Boolean']['output'];
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    optionType: OptionType;
    optionTypeId: Scalars['ID']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    presentation?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type OptionValueCanIArgs = {
  action: CanIAction;
};

export type OptionValueConnection = {
  __typename?: 'OptionValueConnection';
  edges: Array<OptionValueEdge>;
  nodes: Array<OptionValue>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type OptionValueConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type OptionValueEdge = {
  __typename?: 'OptionValueEdge';
  cursor: Scalars['String']['output'];
  node: OptionValue;
};

export type OptionValueFilter = {
  byRelevance?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  nameOrPresentation?: InputMaybe<StringFilter>;
  optionType?: InputMaybe<OptionTypeFilter>;
  presentation?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Order = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'Order';
    additionalTaxTotal?: Maybe<Scalars['Float']['output']>;
    adjustmentTotal: Scalars['Float']['output'];
    adjustments: Array<Adjustment>;
    alertSentAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    alibabaOrders: Array<AlibabaOrder>;
    allAdjustments: Array<Adjustment>;
    approvedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    approvedOrder?: Maybe<Order>;
    approvedOrderId?: Maybe<Scalars['ID']['output']>;
    approver?: Maybe<User>;
    archived: Scalars['Boolean']['output'];
    audits: AuditConnection;
    billAddress?: Maybe<Address>;
    branch?: Maybe<Branch>;
    canI: Scalars['Boolean']['output'];
    canPurchase: Scalars['Boolean']['output'];
    cancelNote?: Maybe<Scalars['String']['output']>;
    cancelReason?: Maybe<CancelReason>;
    canceledAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    canceler?: Maybe<User>;
    cancellable: Scalars['Boolean']['output'];
    cargoFee?: Maybe<Scalars['Float']['output']>;
    categoryId?: Maybe<Scalars['ID']['output']>;
    channel?: Maybe<Scalars['String']['output']>;
    chatRoom?: Maybe<Room>;
    clientsStore?: Maybe<ClientsStore>;
    collect?: Maybe<Collect>;
    collectStartedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    comments: Array<OrderComment>;
    completedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    confirmationDelivered?: Maybe<Scalars['Boolean']['output']>;
    consideredRisky?: Maybe<Scalars['Boolean']['output']>;
    containsFragile?: Maybe<Scalars['Boolean']['output']>;
    contractStatus?: Maybe<Scalars['Int']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    createdBy?: Maybe<User>;
    creditOwed?: Maybe<Scalars['Float']['output']>;
    currency?: Maybe<Scalars['String']['output']>;
    customerCreditData?: Maybe<Scalars['JSON']['output']>;
    deliveryLocation?: Maybe<Scalars['String']['output']>;
    deliverySignature?: Maybe<Array<Scalars['String']['output']>>;
    deliveryStatusTut?: Maybe<Array<Scalars['JSON']['output']>>;
    digital: Scalars['Boolean']['output'];
    dispatches: Array<Dispatch>;
    displayAdjustmentTotal?: Maybe<Scalars['String']['output']>;
    displayItemTotal: Scalars['String']['output'];
    displayPromoTotal: Scalars['String']['output'];
    displayShipTotal: Scalars['String']['output'];
    displayTaxTotal: Scalars['String']['output'];
    displayTotal: Scalars['String']['output'];
    distance?: Maybe<Scalars['Float']['output']>;
    driver?: Maybe<User>;
    driverCode?: Maybe<Scalars['String']['output']>;
    driverShippingAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    driverTakenAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    driverUrl?: Maybe<Scalars['String']['output']>;
    dropship: Scalars['Boolean']['output'];
    ebarimt?: Maybe<Scalars['Boolean']['output']>;
    ebarimtId?: Maybe<Scalars['String']['output']>;
    ebarimtLogs: Array<Log>;
    editable: Scalars['Boolean']['output'];
    email?: Maybe<Scalars['String']['output']>;
    extraData?: Maybe<Scalars['JSON']['output']>;
    feedbacks: FeedbackTypeConnection;
    flag?: Maybe<Scalars['String']['output']>;
    flaggedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    flaggedBy?: Maybe<User>;
    gid: Scalars['ID']['output'];
    giftOrigin?: Maybe<Scalars['JSON']['output']>;
    id: Scalars['ID']['output'];
    images: Array<ProductImage>;
    includedTaxTotal: Scalars['Float']['output'];
    initialTotal?: Maybe<Scalars['Float']['output']>;
    integrationReports: IntegrationReportConnection;
    isBuyer: Scalars['Boolean']['output'];
    isGreen: Scalars['Boolean']['output'];
    isInternational: Scalars['Boolean']['output'];
    isSeller: Scalars['Boolean']['output'];
    itemCount?: Maybe<Scalars['Int']['output']>;
    itemTotal: Scalars['Float']['output'];
    key?: Maybe<Scalars['String']['output']>;
    khanId?: Maybe<Scalars['String']['output']>;
    lastIpAddress?: Maybe<Scalars['String']['output']>;
    latestNote?: Maybe<Scalars['String']['output']>;
    leaseBank?: Maybe<Scalars['Float']['output']>;
    leaseDownPayment?: Maybe<Scalars['Float']['output']>;
    leaseLeft?: Maybe<Scalars['Float']['output']>;
    leaseSource?: Maybe<TdbmLeaseSource>;
    leaseState?: Maybe<Scalars['String']['output']>;
    leasingContract?: Maybe<DigitalContract>;
    lineItems: Array<LineItem>;
    lineItemsAd?: Maybe<LineItemConnection>;
    lineItemsResolved?: Maybe<LineItemConnection>;
    localShippingFee?: Maybe<Scalars['Float']['output']>;
    loyaltyCardTransactions: LoyaltyCardTransactionConnection;
    nonTaxableAdjustmentTotal?: Maybe<Scalars['Float']['output']>;
    notes?: Maybe<Scalars['Int']['output']>;
    number: Scalars['String']['output'];
    outstandingBalance: Scalars['Float']['output'];
    package?: Maybe<DeliveryPackage>;
    packages: Array<DeliveryPackage>;
    paidAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    parcels: Array<Parcel>;
    payment?: Maybe<Scalars['String']['output']>;
    paymentAccountData?: Maybe<Scalars['JSON']['output']>;
    paymentDataByMethod?: Maybe<Scalars['JSON']['output']>;
    paymentReturns: Array<PaymentReturn>;
    paymentState?: Maybe<Scalars['String']['output']>;
    paymentTotal: Scalars['Float']['output'];
    paymentTypes: Array<Scalars['String']['output']>;
    payments: Array<Payment>;
    pickPackAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    pickPackBy?: Maybe<User>;
    pickPackCompletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    pickPackNumber?: Maybe<Scalars['Int']['output']>;
    pickPackOtp?: Maybe<Scalars['String']['output']>;
    pickPackStatus?: Maybe<Scalars['String']['output']>;
    pickPackTrackingNumber?: Maybe<Scalars['String']['output']>;
    posData?: Maybe<Scalars['JSON']['output']>;
    preferredShippingSlipData?: Maybe<Scalars['JSON']['output']>;
    preorderDownPayment: Scalars['Float']['output'];
    preorderState?: Maybe<Scalars['String']['output']>;
    promoTotal?: Maybe<Scalars['Float']['output']>;
    promotionActionPromises: PromotionActionPromiseConnection;
    promotionIds: Array<Scalars['ID']['output']>;
    promotionLineItems: PromotionActionLineItemConnection;
    promotions: Array<Promotion>;
    qPayInvoice?: Maybe<QPayInvoice>;
    readyCount: Scalars['Int']['output'];
    registerNum?: Maybe<Scalars['String']['output']>;
    segment?: Maybe<SupplySegment>;
    shipAddress?: Maybe<Address>;
    shipmentState?: Maybe<Scalars['String']['output']>;
    shipmentTotal: Scalars['Float']['output'];
    shipmentTrackingNumbers?: Maybe<Array<Scalars['String']['output']>>;
    shipmentTrackings: Array<ShipmentTracking>;
    shipments: Array<Shipment>;
    shippedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    shipperManifest: Array<ShipperManifest>;
    shippingMethod?: Maybe<ShippingMethod>;
    shippingMethodNames?: Maybe<Scalars['String']['output']>;
    shippingMethods: ShippingMethodConnection;
    shippingSlipTemplate?: Maybe<HandlebarTemplate>;
    sms: Array<Sms>;
    specialInstructions?: Maybe<Scalars['String']['output']>;
    state: Scalars['String']['output'];
    stateChanges: Array<StateChange>;
    stateLockVersion: Scalars['Int']['output'];
    status: OrderStatusType;
    storeLocation?: Maybe<StoreLocation>;
    stores: Array<Brand>;
    subOrders: Array<Order>;
    supplierStockLocation?: Maybe<StockLocation>;
    takenItemsCount?: Maybe<Scalars['Int']['output']>;
    taxTotal?: Maybe<Scalars['Float']['output']>;
    taxableAdjustmentTotal?: Maybe<Scalars['Float']['output']>;
    template?: Maybe<OrderTemplate>;
    templateId?: Maybe<Scalars['ID']['output']>;
    token: Scalars['String']['output'];
    total: Scalars['Float']['output'];
    totalAfterStoreCredit: Scalars['Float']['output'];
    totalAppliedStoreCredit: Scalars['Float']['output'];
    totalAppliedWalletAmount: Scalars['Float']['output'];
    totalAppliedWalletBonus: Scalars['Float']['output'];
    totalPoint?: Maybe<Scalars['Float']['output']>;
    totalQuantity: Scalars['Int']['output'];
    transactionCount?: Maybe<Scalars['Int']['output']>;
    transactions: Array<BankTransaction>;
    tutLengthExceeded?: Maybe<Scalars['Boolean']['output']>;
    tutTotalWeight?: Maybe<Scalars['Float']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    usableLoyaltyPoints?: Maybe<Scalars['Float']['output']>;
    usableStoreCredit?: Maybe<Scalars['Float']['output']>;
    useBilling?: Maybe<Scalars['Boolean']['output']>;
    user?: Maybe<User>;
    userGeneratedUrl?: Maybe<Scalars['String']['output']>;
    vatTotal?: Maybe<Scalars['Float']['output']>;
    vendor?: Maybe<Vendor>;
    vendors: Array<Vendor>;
    verified?: Maybe<Scalars['Boolean']['output']>;
    waitUntil?: Maybe<Scalars['ISO8601DateTime']['output']>;
    walletAmount?: Maybe<Scalars['Float']['output']>;
    website?: Maybe<Website>;
    weight?: Maybe<Scalars['Float']['output']>;
    whenToShip?: Maybe<Scalars['ISO8601DateTime']['output']>;
  };

export type OrderAuditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuditFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type OrderCanIArgs = {
  action: CanIAction;
};

export type OrderFeedbacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FeedbackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type OrderIntegrationReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IntegrationReportFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type OrderLineItemsAdArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludeBankPending?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<LineItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  ready?: InputMaybe<Scalars['Boolean']['input']>;
  reportType?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type OrderLineItemsResolvedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LineItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type OrderLoyaltyCardTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoyaltyCardTransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type OrderPromotionActionPromisesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PromotionActionPromiseFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  statuses?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type OrderPromotionLineItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PromotionActionLineItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type OrderShipmentsArgs = {
  shipperId?: InputMaybe<Scalars['ID']['input']>;
};

export type OrderShippingMethodsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShippingMethodFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export enum OrderAction {
  AddFlag = 'add_flag',
  Archive = 'archive',
  Cancel = 'cancel',
  Claim = 'claim',
  ClaimManual = 'claim_manual',
  Modify = 'modify',
  PickPack = 'pick_pack',
  Release = 'release',
  ResendEbarimtEmail = 'resend_ebarimt_email',
  ResendEmail = 'resend_email',
  ResendSms = 'resend_sms',
  Resume = 'resume',
  SendId2 = 'send_id2',
  SendId6 = 'send_id6',
  SendParcelOptions = 'send_parcel_options',
  Sequence = 'sequence',
  Ship = 'ship',
  ShipWithSign = 'ship_with_sign',
  UnArchive = 'un_archive',
}

export type OrderComment = BaseModelInterface &
  Node & {
    __typename?: 'OrderComment';
    canI: Scalars['Boolean']['output'];
    comment?: Maybe<Scalars['String']['output']>;
    commentCategory?: Maybe<CommentCategoryType>;
    commentCategoryId?: Maybe<Scalars['ID']['output']>;
    commentType?: Maybe<CommentCategoryType>;
    commentTypeId?: Maybe<Scalars['ID']['output']>;
    commentable?: Maybe<OrderNotable>;
    commentableId?: Maybe<Scalars['ID']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    mentions: UserConnection;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
  };

export type OrderCommentCanIArgs = {
  action: CanIAction;
};

export type OrderCommentMentionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type OrderCommentConnection = {
  __typename?: 'OrderCommentConnection';
  edges: Array<OrderCommentEdge>;
  nodes: Array<OrderComment>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type OrderCommentConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type OrderCommentEdge = {
  __typename?: 'OrderCommentEdge';
  cursor: Scalars['String']['output'];
  node: OrderComment;
};

export type OrderCommentFilter = {
  comment?: InputMaybe<StringFilter>;
  commentTypeId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  edges: Array<OrderEdge>;
  nodes: Array<Order>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type OrderConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type OrderEdge = {
  __typename?: 'OrderEdge';
  cursor: Scalars['String']['output'];
  node: Order;
};

export type OrderFilter = {
  adjustmentTotal?: InputMaybe<IntFilter>;
  approvedAt?: InputMaybe<DateFilter>;
  approvedOrder?: InputMaybe<OrderFilter>;
  approvedOrderId?: InputMaybe<IdFilter>;
  approver?: InputMaybe<UserFilter>;
  approverId?: InputMaybe<IdFilter>;
  archived?: InputMaybe<BoolFilter>;
  billAddress?: InputMaybe<AddressFilter>;
  channel?: InputMaybe<StringFilter>;
  clientsStore?: InputMaybe<ClientsStoreFilter>;
  clientsStoreId?: InputMaybe<IdFilter>;
  collect?: InputMaybe<CollectFilter>;
  comments?: InputMaybe<OrderCommentFilter>;
  completedAt?: InputMaybe<DateFilter>;
  contractStatus?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  driver?: InputMaybe<UserFilter>;
  driverTakenAt?: InputMaybe<DateFilter>;
  flag?: InputMaybe<StringFilter>;
  flaggedAt?: InputMaybe<DateFilter>;
  hasComments?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  itemCount?: InputMaybe<IntFilter>;
  itemTotal?: InputMaybe<IntFilter>;
  leaseLeft?: InputMaybe<IntFilter>;
  leaseState?: InputMaybe<StringFilter>;
  leasingContract?: InputMaybe<ContractFilter>;
  lineItems?: InputMaybe<LineItemFilter>;
  localCode?: InputMaybe<StringFilter>;
  number?: InputMaybe<StringFilter>;
  paidAt?: InputMaybe<DateFilter>;
  paymentState?: InputMaybe<StringFilter>;
  payments?: InputMaybe<PaymentFilter>;
  segment?: InputMaybe<SupplySegmentFilter>;
  shipAddress?: InputMaybe<AddressFilter>;
  shipmentState?: InputMaybe<StringFilter>;
  shipmentTotal?: InputMaybe<IntFilter>;
  shippedAt?: InputMaybe<DateFilter>;
  state?: InputMaybe<StringFilter>;
  stockLocationName?: InputMaybe<StringFilter>;
  storeLocation?: InputMaybe<StoreLocationFilter>;
  supplierStockLocation?: InputMaybe<StockLocationFilter>;
  supplierStockLocationId?: InputMaybe<IdFilter>;
  total?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  userFirstNameOrUserLastName?: InputMaybe<StringFilter>;
  userId?: InputMaybe<IdFilter>;
  whenToShip?: InputMaybe<DateFilter>;
};

export type OrderNotable = Order | Promotion | Warranty;

export type OrderReport = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'OrderReport';
    additionalTaxTotal?: Maybe<Scalars['Float']['output']>;
    adjustmentFivePercent?: Maybe<Scalars['Float']['output']>;
    adjustmentTotal?: Maybe<Scalars['Float']['output']>;
    adjustments: Array<Adjustment>;
    alertSentAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    alibabaOrders: Array<AlibabaOrder>;
    allAdjustments: Array<Adjustment>;
    approvedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    approvedOrder?: Maybe<Order>;
    approvedOrderId?: Maybe<Scalars['ID']['output']>;
    approver?: Maybe<User>;
    archived: Scalars['Boolean']['output'];
    audits: AuditConnection;
    availablePayments?: Maybe<Scalars['JSON']['output']>;
    balanceDue?: Maybe<Scalars['Float']['output']>;
    billAddress?: Maybe<Address>;
    branch?: Maybe<Branch>;
    canI: Scalars['Boolean']['output'];
    canPurchase: Scalars['Boolean']['output'];
    cancelNote?: Maybe<Scalars['String']['output']>;
    cancelReason?: Maybe<CancelReason>;
    canceledAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    canceler?: Maybe<User>;
    cancellable: Scalars['Boolean']['output'];
    cargoFee?: Maybe<Scalars['Float']['output']>;
    categoryId?: Maybe<Scalars['ID']['output']>;
    channel?: Maybe<Scalars['String']['output']>;
    chatRoom?: Maybe<Room>;
    clientsStore?: Maybe<ClientsStore>;
    collect?: Maybe<Collect>;
    collectStartedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    comments: Array<OrderComment>;
    completedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    confirmationDelivered?: Maybe<Scalars['Boolean']['output']>;
    consideredRisky?: Maybe<Scalars['Boolean']['output']>;
    containsFragile?: Maybe<Scalars['Boolean']['output']>;
    contractStatus?: Maybe<Scalars['Int']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    createdBy?: Maybe<User>;
    creditOwed?: Maybe<Scalars['Float']['output']>;
    currency?: Maybe<Scalars['String']['output']>;
    customerCreditData?: Maybe<Scalars['JSON']['output']>;
    deliveryLocation?: Maybe<Scalars['String']['output']>;
    deliveryPhoto: Array<Scalars['String']['output']>;
    deliverySignature: Array<Scalars['String']['output']>;
    deliveryStatusTut?: Maybe<Array<Scalars['JSON']['output']>>;
    digital: Scalars['Boolean']['output'];
    dispatches: Array<Dispatch>;
    displayAdjustmentTotal?: Maybe<Scalars['String']['output']>;
    displayItemTotal: Scalars['String']['output'];
    displayPromoTotal: Scalars['String']['output'];
    displayShipTotal: Scalars['String']['output'];
    displayTaxTotal: Scalars['String']['output'];
    displayTotal: Scalars['String']['output'];
    distance?: Maybe<Scalars['Float']['output']>;
    driver?: Maybe<User>;
    driverCode?: Maybe<Scalars['String']['output']>;
    driverShippingAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    driverTakenAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    driverUrl?: Maybe<Scalars['String']['output']>;
    dropship: Scalars['Boolean']['output'];
    ebarimt?: Maybe<Scalars['Boolean']['output']>;
    ebarimtId?: Maybe<Scalars['String']['output']>;
    ebarimtLogs: Array<Log>;
    editable: Scalars['Boolean']['output'];
    email?: Maybe<Scalars['String']['output']>;
    extraData?: Maybe<Scalars['JSON']['output']>;
    feedbacks: FeedbackTypeConnection;
    flag?: Maybe<Scalars['String']['output']>;
    flaggedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    flaggedBy?: Maybe<User>;
    gid: Scalars['ID']['output'];
    giftOrigin?: Maybe<Scalars['JSON']['output']>;
    hasGiftCards?: Maybe<Scalars['Boolean']['output']>;
    id: Scalars['ID']['output'];
    images: Array<ProductImage>;
    includedTaxTotal: Scalars['Float']['output'];
    initialTotal?: Maybe<Scalars['Float']['output']>;
    integrationReports: IntegrationReportConnection;
    isBuyer: Scalars['Boolean']['output'];
    isGreen: Scalars['Boolean']['output'];
    isInternational: Scalars['Boolean']['output'];
    isSeller: Scalars['Boolean']['output'];
    itemCount?: Maybe<Scalars['Int']['output']>;
    itemTotal: Scalars['Float']['output'];
    key?: Maybe<Scalars['String']['output']>;
    khanId?: Maybe<Scalars['String']['output']>;
    lastIpAddress?: Maybe<Scalars['String']['output']>;
    latestNote?: Maybe<Scalars['String']['output']>;
    leaseBank?: Maybe<Scalars['Float']['output']>;
    leaseCommission?: Maybe<Scalars['Float']['output']>;
    leaseDownPayment?: Maybe<Scalars['Float']['output']>;
    leaseLeft?: Maybe<Scalars['Float']['output']>;
    leaseSource?: Maybe<TdbmLeaseSource>;
    leaseState?: Maybe<Scalars['String']['output']>;
    leasingContract?: Maybe<DigitalContract>;
    lineItems: Array<LineItem>;
    lineItemsAd?: Maybe<LineItemConnection>;
    lineItemsResolved?: Maybe<LineItemConnection>;
    localShippingFee?: Maybe<Scalars['Float']['output']>;
    loyaltyCardTransactions: LoyaltyCardTransactionConnection;
    nonTaxableAdjustmentTotal?: Maybe<Scalars['Float']['output']>;
    notes?: Maybe<Scalars['Int']['output']>;
    number: Scalars['String']['output'];
    orderCount?: Maybe<Scalars['Int']['output']>;
    outstandingBalance: Scalars['Float']['output'];
    package?: Maybe<DeliveryPackage>;
    packages: Array<DeliveryPackage>;
    paidAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    parcels: Array<Parcel>;
    payment?: Maybe<Scalars['String']['output']>;
    paymentAccountData?: Maybe<Scalars['JSON']['output']>;
    paymentDataByMethod?: Maybe<Scalars['JSON']['output']>;
    paymentReferenceIds?: Maybe<Scalars['JSON']['output']>;
    paymentReturns: Array<PaymentReturn>;
    paymentState?: Maybe<Scalars['String']['output']>;
    paymentTotal: Scalars['Float']['output'];
    paymentTypes: Array<Scalars['String']['output']>;
    payments: Array<Payment>;
    phoneComments?: Maybe<Scalars['String']['output']>;
    pickPackAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    pickPackBy?: Maybe<User>;
    pickPackCompletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    pickPackNumber?: Maybe<Scalars['Int']['output']>;
    pickPackOtp?: Maybe<Scalars['String']['output']>;
    pickPackStatus?: Maybe<Scalars['String']['output']>;
    pickPackTrackingNumber?: Maybe<Scalars['String']['output']>;
    posData?: Maybe<Scalars['JSON']['output']>;
    preferredShippingSlipData?: Maybe<Scalars['JSON']['output']>;
    preorderDownPayment: Scalars['Float']['output'];
    preorderState?: Maybe<Scalars['String']['output']>;
    promoTotal?: Maybe<Scalars['Float']['output']>;
    promotion?: Maybe<Scalars['JSON']['output']>;
    promotionActionPromises: PromotionActionPromiseConnection;
    promotionIds: Array<Scalars['ID']['output']>;
    promotionLineItems: PromotionActionLineItemConnection;
    promotions?: Maybe<Array<Promotion>>;
    qPayInvoice?: Maybe<QPayInvoice>;
    readyCount: Scalars['Int']['output'];
    registerNum?: Maybe<Scalars['String']['output']>;
    segment?: Maybe<SupplySegment>;
    shipAddress?: Maybe<Address>;
    shipmentState?: Maybe<Scalars['String']['output']>;
    shipmentTotal: Scalars['Float']['output'];
    shipmentTrackingNumbers?: Maybe<Array<Scalars['String']['output']>>;
    shipmentTrackings: Array<ShipmentTracking>;
    shipments: Array<Shipment>;
    shippedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    shipperManifest: Array<ShipperManifest>;
    shippingMethod?: Maybe<ShippingMethod>;
    shippingMethodNames?: Maybe<Scalars['String']['output']>;
    shippingMethods: ShippingMethodConnection;
    shippingSlipTemplate?: Maybe<HandlebarTemplate>;
    sms: Array<Sms>;
    specialInstructions?: Maybe<Scalars['String']['output']>;
    state: Scalars['String']['output'];
    stateChanges: Array<StateChange>;
    stateLockVersion: Scalars['Int']['output'];
    status: OrderStatusType;
    storeCredit?: Maybe<Scalars['Float']['output']>;
    storeCreditOrigins?: Maybe<Scalars['JSON']['output']>;
    storeLocation?: Maybe<StoreLocation>;
    stores: Array<Brand>;
    subOrders: Array<Order>;
    supplierStockLocation?: Maybe<StockLocation>;
    takenItemsCount?: Maybe<Scalars['Int']['output']>;
    taxTotal?: Maybe<Scalars['Float']['output']>;
    taxableAdjustmentTotal?: Maybe<Scalars['Float']['output']>;
    template?: Maybe<OrderTemplate>;
    templateId?: Maybe<Scalars['ID']['output']>;
    token: Scalars['String']['output'];
    total: Scalars['Float']['output'];
    totalAfterStoreCredit: Scalars['Float']['output'];
    totalAppliedStoreCredit: Scalars['Float']['output'];
    totalAppliedWalletAmount: Scalars['Float']['output'];
    totalAppliedWalletBonus: Scalars['Float']['output'];
    totalPoint?: Maybe<Scalars['Float']['output']>;
    totalQuantity: Scalars['Int']['output'];
    tracking: Array<Scalars['String']['output']>;
    transactionCount?: Maybe<Scalars['Int']['output']>;
    transactions: Array<BankTransaction>;
    tutLengthExceeded?: Maybe<Scalars['Boolean']['output']>;
    tutTotalWeight?: Maybe<Scalars['Float']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    usableLoyaltyPoints?: Maybe<Scalars['Float']['output']>;
    usableStoreCredit?: Maybe<Scalars['Float']['output']>;
    useBilling?: Maybe<Scalars['Boolean']['output']>;
    user?: Maybe<User>;
    userGeneratedUrl?: Maybe<Scalars['String']['output']>;
    vatComments?: Maybe<Scalars['Int']['output']>;
    vatTotal?: Maybe<Scalars['Float']['output']>;
    vendor?: Maybe<Vendor>;
    vendors?: Maybe<Scalars['JSON']['output']>;
    verified?: Maybe<Scalars['Boolean']['output']>;
    waitUntil?: Maybe<Scalars['ISO8601DateTime']['output']>;
    walletAmount?: Maybe<Scalars['Float']['output']>;
    website?: Maybe<Website>;
    weight?: Maybe<Scalars['Float']['output']>;
    whenToShip?: Maybe<Scalars['ISO8601DateTime']['output']>;
  };

export type OrderReportAuditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuditFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type OrderReportCanIArgs = {
  action: CanIAction;
};

export type OrderReportFeedbacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FeedbackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type OrderReportIntegrationReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IntegrationReportFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type OrderReportLineItemsAdArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludeBankPending?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<LineItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  ready?: InputMaybe<Scalars['Boolean']['input']>;
  reportType?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type OrderReportLineItemsResolvedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LineItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type OrderReportLoyaltyCardTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoyaltyCardTransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type OrderReportPromotionActionPromisesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PromotionActionPromiseFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  statuses?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type OrderReportPromotionLineItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PromotionActionLineItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type OrderReportShipmentsArgs = {
  shipperId?: InputMaybe<Scalars['ID']['input']>;
};

export type OrderReportShippingMethodsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShippingMethodFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type OrderReportStoreCreditOriginsArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderStatus {
  BalanceDue = 'balanceDue',
  Complete = 'complete',
  Incomplete = 'incomplete',
  Paid = 'paid',
  Shipped = 'shipped',
  ToClaim = 'to_claim',
  Unfulfilled = 'unfulfilled',
  WalletFailed = 'wallet_failed',
}

export type OrderStatusType = BaseModelInterface &
  Node & {
    __typename?: 'OrderStatusType';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    /** @deprecated Use OrderType for this info */
    data: Scalars['JSON']['output'];
    description?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isCancelable: Scalars['Boolean']['output'];
    isEditable: Scalars['Boolean']['output'];
    isFeedbackEnabled: Scalars['Boolean']['output'];
    isOutOfStock: Scalars['Boolean']['output'];
    isPaid: Scalars['Boolean']['output'];
    isPayable: Scalars['Boolean']['output'];
    isShipped: Scalars['Boolean']['output'];
    /** @deprecated Use OrderType for this info */
    lineItems: Array<ShipmentLineItemStatusType>;
    shipmentProgress?: Maybe<Scalars['JSON']['output']>;
    status: Scalars['String']['output'];
    title: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type OrderStatusTypeCanIArgs = {
  action: CanIAction;
};

export type OrderTemplate = BaseModelInterface &
  Node & {
    __typename?: 'OrderTemplate';
    billAddress?: Maybe<Address>;
    branch?: Maybe<Branch>;
    business?: Maybe<Vendor>;
    businessTypes: Array<BusinessType>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    dayOfWeek?: Maybe<Scalars['String']['output']>;
    extraData?: Maybe<Scalars['JSON']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isDefault: Scalars['Boolean']['output'];
    items: Array<OrderTemplateItem>;
    lastOrder?: Maybe<Order>;
    message?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    nextDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    orders?: Maybe<Array<Order>>;
    rule?: Maybe<Scalars['String']['output']>;
    shipAddress?: Maybe<Address>;
    status?: Maybe<Scalars['String']['output']>;
    storeLocation?: Maybe<StoreLocation>;
    time?: Maybe<Scalars['String']['output']>;
    totalQuantity: Scalars['Int']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    vendor?: Maybe<Vendor>;
    website?: Maybe<Website>;
    whenToShip?: Maybe<Scalars['ISO8601DateTime']['output']>;
  };

export type OrderTemplateCanIArgs = {
  action: CanIAction;
};

export type OrderTemplateConnection = {
  __typename?: 'OrderTemplateConnection';
  edges: Array<OrderTemplateEdge>;
  nodes: Array<OrderTemplate>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type OrderTemplateConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type OrderTemplateEdge = {
  __typename?: 'OrderTemplateEdge';
  cursor: Scalars['String']['output'];
  node: OrderTemplate;
};

export type OrderTemplateFilter = {
  branch?: InputMaybe<BranchFilter>;
  business?: InputMaybe<VendorFilter>;
  createdAt?: InputMaybe<DateFilter>;
  createdBy?: InputMaybe<UserFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nextDate?: InputMaybe<DateFilter>;
  rule?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  vendor?: InputMaybe<VendorFilter>;
  website?: InputMaybe<WebsiteFilter>;
  whenToShip?: InputMaybe<StringFilter>;
};

export type OrderTemplateItem = BaseModelInterface &
  Node & {
    __typename?: 'OrderTemplateItem';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    orderTemplate?: Maybe<OrderTemplate>;
    quantity?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variant?: Maybe<Variant>;
  };

export type OrderTemplateItemCanIArgs = {
  action: CanIAction;
};

export type OrderTemplateItemInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  orderTemplateId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  variantId?: InputMaybe<Scalars['ID']['input']>;
};

export type PageFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  metaDescription?: InputMaybe<StringFilter>;
  metaKeywords?: InputMaybe<StringFilter>;
  metaTitle?: InputMaybe<StringFilter>;
  seoDescription?: InputMaybe<StringFilter>;
  seoKeywords?: InputMaybe<StringFilter>;
  seoTitle?: InputMaybe<StringFilter>;
  seoVisible?: InputMaybe<BoolFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  visible?: InputMaybe<BoolFilter>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Parcel = BaseModelInterface &
  Node & {
    __typename?: 'Parcel';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    driverId?: Maybe<User>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    otp?: Maybe<Scalars['String']['output']>;
    sentById?: Maybe<User>;
    serviceGeneratedUrl?: Maybe<Scalars['String']['output']>;
    shipment?: Maybe<Shipment>;
    sourceId: Scalars['ID']['output'];
    sourceType: Scalars['String']['output'];
    status?: Maybe<Scalars['String']['output']>;
    trackingNumber?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userGeneratedUrl?: Maybe<Scalars['String']['output']>;
  };

export type ParcelCanIArgs = {
  action: CanIAction;
};

export type PartLineItem = BaseModelInterface &
  Node & {
    __typename?: 'PartLineItem';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    lineItem?: Maybe<LineItem>;
    quantity?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variant?: Maybe<Variant>;
  };

export type PartLineItemCanIArgs = {
  action: CanIAction;
};

export type PassInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'PassInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    orderId?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    shop?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type PassInvoiceCanIArgs = {
  action: CanIAction;
};

export enum PassportFile {
  Back = 'back',
  Front = 'front',
  Selfie = 'selfie',
}

export type PayMeSource = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'PayMeSource';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    cancelTime?: Maybe<Scalars['ISO8601DateTime']['output']>;
    cardExpiry?: Maybe<Scalars['String']['output']>;
    cardNumber?: Maybe<Scalars['String']['output']>;
    cardToken?: Maybe<Scalars['String']['output']>;
    createTime?: Maybe<Scalars['ISO8601DateTime']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    fiscalSent: Scalars['Boolean']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    paymentMethod?: Maybe<PaymentMethod>;
    paymentMethodId?: Maybe<Scalars['ID']['output']>;
    performTime?: Maybe<Scalars['ISO8601DateTime']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    reason?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type PayMeSourceCanIArgs = {
  action: CanIAction;
};

export type Payment = BaseModelInterface &
  Node & {
    __typename?: 'Payment';
    accountNo?: Maybe<Scalars['String']['output']>;
    amount: Scalars['Float']['output'];
    avsResponse?: Maybe<Scalars['String']['output']>;
    bankList?: Maybe<Scalars['JSON']['output']>;
    bankName?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    capturedBy?: Maybe<User>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    cvvResponseCode?: Maybe<Scalars['String']['output']>;
    cvvResponseMessage?: Maybe<Scalars['String']['output']>;
    depositedOn?: Maybe<Scalars['ISO8601Date']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    number?: Maybe<Scalars['String']['output']>;
    order?: Maybe<Order>;
    paymentAccountData?: Maybe<Scalars['JSON']['output']>;
    paymentMethod?: Maybe<PaymentMethod>;
    qrCode?: Maybe<Scalars['String']['output']>;
    qrImage?: Maybe<Scalars['String']['output']>;
    responseCode?: Maybe<Scalars['String']['output']>;
    source?: Maybe<PaymentSourceInterface>;
    sourceId?: Maybe<Scalars['ID']['output']>;
    sourceType?: Maybe<Scalars['String']['output']>;
    state?: Maybe<Scalars['String']['output']>;
    storeCreditEvent?: Maybe<StoreCreditEvent>;
    transactionReferenceNo?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type PaymentCanIArgs = {
  action: CanIAction;
};

export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  edges: Array<PaymentEdge>;
  nodes: Array<Payment>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type PaymentConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type PaymentEdge = {
  __typename?: 'PaymentEdge';
  cursor: Scalars['String']['output'];
  node: Payment;
};

export type PaymentFilter = {
  amount?: InputMaybe<IntFilter>;
  bankName?: InputMaybe<StringFilter>;
  capturedBy?: InputMaybe<UserFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  number?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderFilter>;
  paymentMethod?: InputMaybe<PaymentMethodFilter>;
  sourceType?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type PaymentMethod = BaseModelInterface &
  Node & {
    __typename?: 'PaymentMethod';
    active?: Maybe<Scalars['Boolean']['output']>;
    afterPay: Scalars['Boolean']['output'];
    autoCapture?: Maybe<Scalars['Boolean']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    currencies: Array<Scalars['String']['output']>;
    data: Scalars['JSON']['output'];
    description?: Maybe<Scalars['String']['output']>;
    displayOn?: Maybe<Scalars['String']['output']>;
    eBarimt: Scalars['Boolean']['output'];
    fee: Scalars['Float']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    methodType: PaymentMethodKind | `${PaymentMethodKind}`;
    name: Scalars['String']['output'];
    paymentSourceClass?: Maybe<Scalars['String']['output']>;
    position?: Maybe<Scalars['Int']['output']>;
    returnable: Scalars['Boolean']['output'];
    settlementDays?: Maybe<Scalars['Int']['output']>;
    storeLocation?: Maybe<StoreLocation>;
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendor?: Maybe<Vendor>;
    website?: Maybe<Website>;
  };

export type PaymentMethodCanIArgs = {
  action: CanIAction;
};

export type PaymentMethodFilter = {
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export enum PaymentMethodKind {
  AlifPay = 'alif_pay',
  ArdInApp = 'ard_in_app',
  BankTransfer = 'bank_transfer',
  BinancePay = 'binance_pay',
  BitPayment = 'bit_payment',
  Bogus = 'bogus',
  BogusSimple = 'bogus_simple',
  BonumApplePay = 'bonum_apple_pay',
  CandyInApp = 'candy_in_app',
  CashOnDelivery = 'cash_on_delivery',
  Check = 'check',
  ClickPayment = 'click_payment',
  Complete = 'complete',
  DigiPayInApp = 'digi_pay_in_app',
  DigitalCredit = 'digital_credit',
  DownPayment = 'down_payment',
  ErpIntegrationAccountsReceivable = 'erp_integration_accounts_receivable',
  Golomt = 'golomt',
  GolomtDigitalBank = 'golomt_digital_bank',
  GolomtInApp = 'golomt_in_app',
  GolomtPosTerminal = 'golomt_pos_terminal',
  GolomtWallet = 'golomt_wallet',
  GolomtWalletSocialPay = 'golomt_wallet_social_pay',
  HappyPay = 'happy_pay',
  HiPay = 'hi_pay',
  HiPayInApp = 'hi_pay_in_app',
  HiPayWeChat = 'hi_pay_we_chat',
  Intend = 'intend',
  ItLeasing = 'it_leasing',
  Khaan = 'khaan',
  KhaanInApp = 'khaan_in_app',
  KhaanLeasing = 'khaan_leasing',
  Lend = 'lend',
  LendInApp = 'lend_in_app',
  LendPay = 'lend_pay',
  MBankCard = 'm_bank_card',
  MBankInApp = 'm_bank_in_app',
  MBankMerchant = 'm_bank_merchant',
  MemePay = 'meme_pay',
  MessengerLoanInApp = 'messenger_loan_in_app',
  MongolChat = 'mongol_chat',
  Moni = 'moni',
  Monpay = 'monpay',
  MonpayInApp = 'monpay_in_app',
  MonpayV2 = 'monpay_v2',
  Most = 'most',
  MostInApp = 'most_in_app',
  MostOts = 'most_ots',
  MostTan = 'most_tan',
  MostV2 = 'most_v2',
  NetCapital = 'net_capital',
  NonBanking = 'non_banking',
  Numur = 'numur',
  Omniway = 'omniway',
  Pass = 'pass',
  PayMe = 'pay_me',
  PayMeCard = 'pay_me_card',
  PayPalGateway = 'pay_pal_gateway',
  PaynetPayment = 'paynet_payment',
  Paypal = 'paypal',
  Pocket = 'pocket',
  PocketInApp = 'pocket_in_app',
  PocketZero = 'pocket_zero',
  Qpay = 'qpay',
  QpayMerchant = 'qpay_merchant',
  QpayV2 = 'qpay_v2',
  QpayWallet = 'qpay_wallet',
  ShoppyWallet = 'shoppy_wallet',
  Simple = 'simple',
  SimpleInApp = 'simple_in_app',
  SimpleV2 = 'simple_v2',
  SocialPay = 'social_pay',
  SocialPayQr = 'social_pay_qr',
  Sono = 'sono',
  StorePay = 'store_pay',
  Storecredit = 'storecredit',
  Stripe = 'stripe',
  StripeApplePay = 'stripe_apple_pay',
  TdbInApp = 'tdb_in_app',
  Tdbm = 'tdbm',
  TdbmApplePay = 'tdbm_apple_pay',
  TdbmECommerce = 'tdbm_e_commerce',
  TdbmLease = 'tdbm_lease',
  TdbmLeaseV2 = 'tdbm_lease_v2',
  TdbmLeaseV3 = 'tdbm_lease_v3',
  TdbmPosTerminal = 'tdbm_pos_terminal',
  Toki = 'toki',
  TokiInApp = 'toki_in_app',
  TokiPayLater = 'toki_pay_later',
  UzumNasiya = 'uzum_nasiya',
  WeChat = 'we_chat',
  WellbeeCreditGateway = 'wellbee_credit_gateway',
  Xac = 'xac',
  XacLeasing = 'xac_leasing',
}

export type PaymentReturn = BaseModelInterface &
  Node & {
    __typename?: 'PaymentReturn';
    accountBank?: Maybe<Scalars['String']['output']>;
    accountName?: Maybe<Scalars['String']['output']>;
    accountNumber?: Maybe<Scalars['String']['output']>;
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    commission?: Maybe<Scalars['Float']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    creator?: Maybe<User>;
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    journalNo?: Maybe<Scalars['String']['output']>;
    lineItemIds: Array<Scalars['ID']['output']>;
    lineItems: Array<LineItem>;
    message?: Maybe<Scalars['String']['output']>;
    note?: Maybe<Scalars['String']['output']>;
    order?: Maybe<Order>;
    otherFee?: Maybe<Scalars['Float']['output']>;
    paidAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    payment?: Maybe<Payment>;
    reason?: Maybe<PaymentReturnReason>;
    returnItems: Array<PaymentReturnItem>;
    returner?: Maybe<User>;
    returnsCount?: Maybe<Scalars['Int']['output']>;
    source?: Maybe<PaymentReturnSource>;
    status?: Maybe<Scalars['String']['output']>;
    storeLocation?: Maybe<StoreLocation>;
    transactionId?: Maybe<Scalars['ID']['output']>;
    transactionType?: Maybe<Scalars['String']['output']>;
    transferAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    uuid?: Maybe<Scalars['String']['output']>;
    website?: Maybe<Website>;
  };

export type PaymentReturnCanIArgs = {
  action: CanIAction;
};

export type PaymentReturnConnection = {
  __typename?: 'PaymentReturnConnection';
  edges: Array<PaymentReturnEdge>;
  nodes: Array<PaymentReturn>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type PaymentReturnConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type PaymentReturnEdge = {
  __typename?: 'PaymentReturnEdge';
  cursor: Scalars['String']['output'];
  node: PaymentReturn;
};

export type PaymentReturnFilter = {
  accountBank?: InputMaybe<StringFilter>;
  accountName?: InputMaybe<StringFilter>;
  accountNumber?: InputMaybe<StringFilter>;
  amount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  creator?: InputMaybe<UserFilter>;
  id?: InputMaybe<IdFilter>;
  message?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringFilter>;
  number?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderFilter>;
  payment?: InputMaybe<PaymentFilter>;
  returner?: InputMaybe<UserFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type PaymentReturnItem = BaseModelInterface &
  Node & {
    __typename?: 'PaymentReturnItem';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    lineItem: LineItem;
    lineItemId: Scalars['ID']['output'];
    order: Order;
    paymentReturn: PaymentReturn;
    quantity?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type PaymentReturnItemCanIArgs = {
  action: CanIAction;
};

export type PaymentReturnReason = BaseModelInterface &
  Node & {
    __typename?: 'PaymentReturnReason';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type PaymentReturnReasonCanIArgs = {
  action: CanIAction;
};

export type PaymentReturnReasonConnection = {
  __typename?: 'PaymentReturnReasonConnection';
  edges: Array<PaymentReturnReasonEdge>;
  nodes: Array<PaymentReturnReason>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type PaymentReturnReasonConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type PaymentReturnReasonEdge = {
  __typename?: 'PaymentReturnReasonEdge';
  cursor: Scalars['String']['output'];
  node: PaymentReturnReason;
};

export type PaymentReturnReasonFilter = {
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type PaymentReturnSource = Node & {
  __typename?: 'PaymentReturnSource';
  deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Website>;
};

export type PaymentReturnSourceConnection = {
  __typename?: 'PaymentReturnSourceConnection';
  edges: Array<PaymentReturnSourceEdge>;
  nodes: Array<PaymentReturnSource>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type PaymentReturnSourceConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type PaymentReturnSourceEdge = {
  __typename?: 'PaymentReturnSourceEdge';
  cursor: Scalars['String']['output'];
  node: PaymentReturnSource;
};

export type PaymentReturnSourceFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type PaymentSource = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'PaymentSource';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    idx?: Maybe<Scalars['String']['output']>;
    idx2?: Maybe<Scalars['String']['output']>;
    invoice?: Maybe<Scalars['String']['output']>;
    order?: Maybe<Order>;
    orderId?: Maybe<Scalars['ID']['output']>;
    payment?: Maybe<Payment>;
    paymentId?: Maybe<Scalars['ID']['output']>;
    paymentMethod?: Maybe<PaymentMethod>;
    paymentMethodId?: Maybe<Scalars['ID']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
  };

export type PaymentSourceCanIArgs = {
  action: CanIAction;
};

export type PaymentSourceConnection = {
  __typename?: 'PaymentSourceConnection';
  edges: Array<PaymentSourceEdge>;
  nodes: Array<PaymentSource>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type PaymentSourceConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type PaymentSourceEdge = {
  __typename?: 'PaymentSourceEdge';
  cursor: Scalars['String']['output'];
  node: PaymentSource;
};

export type PaymentSourceFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  idx?: InputMaybe<StringFilter>;
  idx2?: InputMaybe<StringFilter>;
  invoice?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderFilter>;
  orderNumber?: InputMaybe<StringFilter>;
  payment?: InputMaybe<PaymentFilter>;
  paymentMethod?: InputMaybe<PaymentMethodFilter>;
  secureData?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
};

export type PaymentSourceInterface = {
  canI: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type PaymentSourceInterfaceCanIArgs = {
  action: CanIAction;
};

export type PaypalInvoice = BaseModelInterface &
  Node & {
    __typename?: 'PaypalInvoice';
    authorizationId?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    orderId?: Maybe<Scalars['String']['output']>;
    payeeId?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type PaypalInvoiceCanIArgs = {
  action: CanIAction;
};

export type PercentOnLineItem = BaseModelInterface &
  CalculatorInterface &
  Node & {
    __typename?: 'PercentOnLineItem';
    calculableId?: Maybe<Scalars['Int']['output']>;
    calculableType?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredPercent: Scalars['Float']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type PercentOnLineItemCanIArgs = {
  action: CanIAction;
};

export type PickUpLocation = BaseModelInterface &
  Node & {
    __typename?: 'PickUpLocation';
    acceptcard?: Maybe<Scalars['String']['output']>;
    acceptcash?: Maybe<Scalars['String']['output']>;
    acceptindividuals?: Maybe<Scalars['String']['output']>;
    address?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    clientcode?: Maybe<Scalars['String']['output']>;
    code?: Maybe<Scalars['String']['output']>;
    comment?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    latitude?: Maybe<Scalars['String']['output']>;
    longitude?: Maybe<Scalars['String']['output']>;
    maxweight?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    parentcode?: Maybe<Scalars['String']['output']>;
    parentname?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    terminalType?: Maybe<Scalars['String']['output']>;
    traveldescription?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    worktime?: Maybe<Scalars['String']['output']>;
  };

export type PickUpLocationCanIArgs = {
  action: CanIAction;
};

export type PlayCurrentEventInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export enum PmDisplayKind {
  BackEnd = 'back_end',
  Both = 'both',
  FrontEnd = 'front_end',
}

export type PocketInAppInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'PocketInAppInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    holdId?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    info?: Maybe<Scalars['String']['output']>;
    invoiceId?: Maybe<Scalars['String']['output']>;
    terminalId?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type PocketInAppInvoiceCanIArgs = {
  action: CanIAction;
};

export type PocketInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'PocketInvoice';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    heldId?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    info?: Maybe<Scalars['String']['output']>;
    invoiceId?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    qrCode?: Maybe<Scalars['String']['output']>;
    qrImage?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type PocketInvoiceCanIArgs = {
  action: CanIAction;
};

export type PocketZeroInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'PocketZeroInvoice';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    customerId?: Maybe<Scalars['String']['output']>;
    duration?: Maybe<Scalars['String']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    holdAmount?: Maybe<Scalars['String']['output']>;
    holdId?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    invoiceId?: Maybe<Scalars['String']['output']>;
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    isUsed?: Maybe<Scalars['Boolean']['output']>;
    lastName?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    register?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type PocketZeroInvoiceCanIArgs = {
  action: CanIAction;
};

export type Poll = BaseModelInterface &
  Node & {
    __typename?: 'Poll';
    active?: Maybe<Scalars['Boolean']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    creator?: Maybe<User>;
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    question?: Maybe<Scalars['String']['output']>;
    questions: Array<PollQuestion>;
    startAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type PollCanIArgs = {
  action: CanIAction;
};

export type PollAnswer = BaseModelInterface &
  Node & {
    __typename?: 'PollAnswer';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    question?: Maybe<PollQuestion>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    voteDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  };

export type PollAnswerCanIArgs = {
  action: CanIAction;
};

export type PollAnswerConnection = {
  __typename?: 'PollAnswerConnection';
  edges: Array<PollAnswerEdge>;
  nodes: Array<PollAnswer>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type PollAnswerConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type PollAnswerEdge = {
  __typename?: 'PollAnswerEdge';
  cursor: Scalars['String']['output'];
  node: PollAnswer;
};

export type PollConnection = {
  __typename?: 'PollConnection';
  edges: Array<PollEdge>;
  nodes: Array<Poll>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type PollConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type PollEdge = {
  __typename?: 'PollEdge';
  cursor: Scalars['String']['output'];
  node: Poll;
};

export type PollFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type PollQuestion = BaseModelInterface &
  Node & {
    __typename?: 'PollQuestion';
    answers: PollAnswerConnection;
    answersCount?: Maybe<Scalars['Int']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    poll?: Maybe<Poll>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type PollQuestionAnswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type PollQuestionCanIArgs = {
  action: CanIAction;
};

export type PollQuestionInput = {
  _destroy?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PosListing = BaseModelInterface &
  Node & {
    __typename?: 'PosListing';
    activeSince?: Maybe<Scalars['ISO8601DateTime']['output']>;
    activeUntil?: Maybe<Scalars['ISO8601DateTime']['output']>;
    approved?: Maybe<Scalars['Boolean']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    createdBy?: Maybe<User>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    product: Product;
    published?: Maybe<Scalars['Boolean']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    storeLocation: StoreLocation;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type PosListingCanIArgs = {
  action: CanIAction;
};

export type PosListingConnection = {
  __typename?: 'PosListingConnection';
  edges: Array<PosListingEdge>;
  nodes: Array<PosListing>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type PosListingConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type PosListingEdge = {
  __typename?: 'PosListingEdge';
  cursor: Scalars['String']['output'];
  node: PosListing;
};

export type PosListingFilter = {
  approved?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  product?: InputMaybe<ProductFilter>;
  published?: InputMaybe<BoolFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Prescription = BaseModelInterface &
  Node & {
    __typename?: 'Prescription';
    canI: Scalars['Boolean']['output'];
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    diagnosis?: Maybe<Scalars['String']['output']>;
    doctorHospital?: Maybe<Scalars['String']['output']>;
    doctorName?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    image: Scalars['String']['output'];
    image1: Scalars['String']['output'];
    items: Array<PrescriptionItem>;
    number: Scalars['String']['output'];
    order?: Maybe<Order>;
    orderId?: Maybe<Scalars['ID']['output']>;
    patientName?: Maybe<Scalars['String']['output']>;
    prescriptionDate?: Maybe<Scalars['ISO8601Date']['output']>;
    prescriptionVariants: Array<PrescriptionVariant>;
    reviewComment?: Maybe<Scalars['String']['output']>;
    reviewedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    reviewer?: Maybe<User>;
    reviewerId?: Maybe<Scalars['ID']['output']>;
    status: PrescriptionStatus | `${PrescriptionStatus}`;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user: User;
    userId: Scalars['ID']['output'];
    variants: Array<Variant>;
    website: Website;
    websiteId: Scalars['ID']['output'];
  };

export type PrescriptionCanIArgs = {
  action: CanIAction;
};

export type PrescriptionImageArgs = {
  size?: InputMaybe<Scalars['String']['input']>;
};

export type PrescriptionImage1Args = {
  size?: InputMaybe<Scalars['String']['input']>;
};

export type PrescriptionConnection = {
  __typename?: 'PrescriptionConnection';
  edges: Array<PrescriptionEdge>;
  nodes: Array<Prescription>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type PrescriptionConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type PrescriptionEdge = {
  __typename?: 'PrescriptionEdge';
  cursor: Scalars['String']['output'];
  node: Prescription;
};

export type PrescriptionFilter = {
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  diagnosis?: InputMaybe<StringFilter>;
  doctorHospital?: InputMaybe<StringFilter>;
  doctorName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  number?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderFilter>;
  patientName?: InputMaybe<StringFilter>;
  reviewer?: InputMaybe<UserFilter>;
  status?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type PrescriptionItem = BaseModelInterface &
  Node & {
    __typename?: 'PrescriptionItem';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    drugName?: Maybe<Scalars['String']['output']>;
    drugNumber?: Maybe<Scalars['String']['output']>;
    frequency?: Maybe<Scalars['Int']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    lineItem?: Maybe<LineItem>;
    lineItemId?: Maybe<Scalars['ID']['output']>;
    prescription: Prescription;
    prescriptionId: Scalars['ID']['output'];
    prescriptionVariants: Array<PrescriptionVariant>;
    quantity?: Maybe<Scalars['Int']['output']>;
    remainingQuantity?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<PrescriptionItemStatus | `${PrescriptionItemStatus}`>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variantIds: Array<Scalars['ID']['output']>;
    variants: Array<Variant>;
  };

export type PrescriptionItemCanIArgs = {
  action: CanIAction;
};

export enum PrescriptionItemStatus {
  Active = 'active',
  Used = 'used',
}

export enum PrescriptionStatus {
  Accepted = 'accepted',
  Cancelled = 'cancelled',
  Pending = 'pending',
  Used = 'used',
}

export type PrescriptionVariant = BaseModelInterface &
  Node & {
    __typename?: 'PrescriptionVariant';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    item: PrescriptionItem;
    itemId: Scalars['ID']['output'];
    prescription: Prescription;
    prescriptionId: Scalars['ID']['output'];
    quantity?: Maybe<Scalars['Int']['output']>;
    selected: Scalars['Boolean']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variant: Variant;
    variantId: Scalars['ID']['output'];
  };

export type PrescriptionVariantCanIArgs = {
  action: CanIAction;
};

export type Price = BaseModelInterface &
  Node & {
    __typename?: 'Price';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    currency: Scalars['String']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    position: Scalars['Int']['output'];
    price?: Maybe<Scalars['Float']['output']>;
    salePrices: Array<SalePrice>;
    stockLocation?: Maybe<StockLocation>;
    stockLocationId?: Maybe<Scalars['ID']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variant: Variant;
    variantId: Scalars['ID']['output'];
  };

export type PriceCanIArgs = {
  action: CanIAction;
};

export type PriceFilter = {
  amount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Printing = BaseModelInterface &
  Node & {
    __typename?: 'Printing';
    attachment?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    firstName?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    lastName?: Maybe<Scalars['String']['output']>;
    lineItem?: Maybe<LineItem>;
    mobile?: Maybe<Scalars['String']['output']>;
    order?: Maybe<Order>;
    product?: Maybe<Product>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type PrintingCanIArgs = {
  action: CanIAction;
};

export type PrintingConnection = {
  __typename?: 'PrintingConnection';
  edges: Array<PrintingEdge>;
  nodes: Array<Printing>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type PrintingConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type PrintingEdge = {
  __typename?: 'PrintingEdge';
  cursor: Scalars['String']['output'];
  node: Printing;
};

export type PrintingFilter = {
  createdAt?: InputMaybe<DateFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  lastName?: InputMaybe<StringFilter>;
  lineItem?: InputMaybe<LineItemFilter>;
  mobile?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderFilter>;
  preview?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductFilter>;
  publishedAt?: InputMaybe<DateFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type PrintingManifest = Node &
  ProductManifestInterface & {
    __typename?: 'PrintingManifest';
    brand?: Maybe<Brand>;
    canSupply?: Maybe<Scalars['Boolean']['output']>;
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    fulfillDuration?: Maybe<Scalars['Int']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    maxQty?: Maybe<Scalars['Int']['output']>;
    name: Scalars['String']['output'];
    optionsText?: Maybe<Scalars['String']['output']>;
    price: Scalars['Float']['output'];
    printings?: Maybe<Array<Printing>>;
    productCat?: Maybe<Scalars['String']['output']>;
    sku?: Maybe<Scalars['String']['output']>;
    slug: Scalars['String']['output'];
    totalOnHand?: Maybe<Scalars['Int']['output']>;
    vendor?: Maybe<Vendor>;
    weight?: Maybe<Scalars['Float']['output']>;
  };

export type Product = BaseModelInterface &
  Node & {
    __typename?: 'Product';
    assembliesParts: Array<AssemblyPart>;
    attributes?: Maybe<Scalars['JSON']['output']>;
    audits: AuditConnection;
    availableOn?: Maybe<Scalars['ISO8601DateTime']['output']>;
    availableUntil?: Maybe<Scalars['ISO8601DateTime']['output']>;
    averageRating: Scalars['Float']['output'];
    barcode?: Maybe<Scalars['String']['output']>;
    booking?: Maybe<Booking>;
    bookingStock?: Maybe<Booking>;
    brand?: Maybe<Brand>;
    canI: Scalars['Boolean']['output'];
    canSupply: Scalars['Boolean']['output'];
    cancelDuration?: Maybe<Scalars['Int']['output']>;
    chatRoom?: Maybe<Room>;
    condition?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    currency?: Maybe<Scalars['String']['output']>;
    currentListing?: Maybe<Listing>;
    data: Scalars['JSON']['output'];
    dates?: Maybe<Array<Scalars['String']['output']>>;
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    discontinueOn?: Maybe<Scalars['ISO8601DateTime']['output']>;
    documents: Array<ProductDocument>;
    donations: DonationConnection;
    featured?: Maybe<Scalars['Boolean']['output']>;
    features?: Maybe<Scalars['JSON']['output']>;
    fragile?: Maybe<Scalars['Boolean']['output']>;
    gid: Scalars['ID']['output'];
    giftCard?: Maybe<Scalars['Boolean']['output']>;
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    images: Array<ProductImage>;
    info?: Maybe<Scalars['JSON']['output']>;
    isListedOnWebsite?: Maybe<Scalars['Boolean']['output']>;
    keyword?: Maybe<Keyword>;
    keywordId?: Maybe<Scalars['ID']['output']>;
    labelCode?: Maybe<Scalars['String']['output']>;
    listings: Array<Listing>;
    listingsCon: ListingConnection;
    master: Variant;
    merchantSku?: Maybe<Scalars['String']['output']>;
    metaDescription?: Maybe<Scalars['String']['output']>;
    metaKeywords?: Maybe<Scalars['String']['output']>;
    metaTitle?: Maybe<Scalars['String']['output']>;
    myReview?: Maybe<Review>;
    name?: Maybe<Scalars['String']['output']>;
    nonReturnable?: Maybe<Scalars['Boolean']['output']>;
    optionTypes: Array<OptionType>;
    optionValues: Array<OptionValue>;
    packageCode?: Maybe<Scalars['String']['output']>;
    posMaxQty?: Maybe<Scalars['Int']['output']>;
    posVariants?: Maybe<Array<Variant>>;
    possibleOptionValues: Array<OptionValue>;
    preferredAssemblyPartsCalculationType?: Maybe<Scalars['String']['output']>;
    preferredAssemblyStockScope?: Maybe<Scalars['String']['output']>;
    preferredEticketActivationMethod?: Maybe<Scalars['String']['output']>;
    preferredEticketRequireActivation?: Maybe<Scalars['Boolean']['output']>;
    preferredLotteryGenerated?: Maybe<Scalars['Boolean']['output']>;
    preferredLotteryRequireSubscription?: Maybe<Scalars['Boolean']['output']>;
    price: Scalars['Float']['output'];
    prices: Array<Price>;
    productCat?: Maybe<Scalars['String']['output']>;
    productOptionValues: Array<ProductOptionValue>;
    productProperties: Array<ProductProperty>;
    promotionable?: Maybe<Scalars['Boolean']['output']>;
    property?: Maybe<Scalars['String']['output']>;
    prototype?: Maybe<Prototype>;
    reviews: ReviewConnection;
    saleExpireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    salePrices: Array<SalePrice>;
    sellingPrice: Scalars['Float']['output'];
    shippingCategoryId?: Maybe<Scalars['ID']['output']>;
    sizingGuide?: Maybe<SizingGuide>;
    sizingGuideId?: Maybe<Scalars['ID']['output']>;
    sku: Scalars['String']['output'];
    slug: Scalars['String']['output'];
    stage?: Maybe<Stage>;
    stockLocations: Array<StockLocation>;
    storeId?: Maybe<Scalars['ID']['output']>;
    taxCategoryId?: Maybe<Scalars['ID']['output']>;
    taxCode?: Maybe<Scalars['String']['output']>;
    title: Scalars['String']['output'];
    totalDonated: Scalars['Float']['output'];
    totalFund: Scalars['Float']['output'];
    totalOnHand: Scalars['Float']['output'];
    /** @deprecated Will be removed soon */
    totalOnHandAll: Scalars['Float']['output'];
    totalReviews: Scalars['Int']['output'];
    translations: Array<ProductTranslation>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variantSeries: Array<Variant>;
    variants: Array<Variant>;
    variantsIncludingMaster: Array<Variant>;
    vendor?: Maybe<Vendor>;
    youtube?: Maybe<Scalars['String']['output']>;
  };

export type ProductAuditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuditFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type ProductCanIArgs = {
  action: CanIAction;
};

export type ProductDonationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DonationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type ProductImageArgs = {
  mirror?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<ProductImageSize>;
};

export type ProductListingsConArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type ProductPriceArgs = {
  currency?: InputMaybe<Scalars['String']['input']>;
};

export type ProductPropertyArgs = {
  name: Scalars['String']['input'];
};

export type ProductReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ReviewsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type ProductSellingPriceArgs = {
  currency?: InputMaybe<Scalars['String']['input']>;
  stockLocationId?: InputMaybe<Scalars['ID']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductTotalOnHandArgs = {
  excludedVariantId?: InputMaybe<Scalars['ID']['input']>;
  stockLocationId?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ProductTotalOnHandAllArgs = {
  stockLocationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum ProductCat {
  Accessory = 'accessory',
  Activity = 'activity',
  AirTicket = 'air_ticket',
  Alibaba = 'alibaba',
  Assembly = 'assembly',
  Auto = 'auto',
  Beauty = 'beauty',
  Book = 'book',
  Booking = 'booking',
  BookingStock = 'booking_stock',
  Coupon = 'coupon',
  Donation = 'donation',
  Downloadable = 'downloadable',
  Dropship = 'dropship',
  DynamicPrice = 'dynamic_price',
  ETicket = 'e_ticket',
  Education = 'education',
  Food = 'food',
  GiftCard = 'gift_card',
  Health = 'health',
  Hotel = 'hotel',
  Insurance = 'insurance',
  License = 'license',
  Lottery = 'lottery',
  MovieTicket = 'movie_ticket',
  Music = 'music',
  Package = 'package',
  PackagePreOrder = 'package_pre_order',
  Pharmaceutical = 'pharmaceutical',
  PreOrder = 'pre_order',
  PrescriptionDrug = 'prescription_drug',
  Printing = 'printing',
  Product = 'product',
  PromotionOnly = 'promotion_only',
  Seated = 'seated',
  Stage = 'stage',
  Subscription = 'subscription',
  Temporary = 'temporary',
  Travel = 'travel',
  Virtual = 'virtual',
  WalletFund = 'wallet_fund',
}

export type ProductConnection = {
  __typename?: 'ProductConnection';
  edges: Array<ProductEdge>;
  nodes: Array<Product>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type ProductConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type ProductDocument = BaseModelInterface &
  Node & {
    __typename?: 'ProductDocument';
    alt?: Maybe<Scalars['String']['output']>;
    attachmentContentType?: Maybe<Scalars['String']['output']>;
    attachmentFileName?: Maybe<Scalars['String']['output']>;
    attachmentFileSize?: Maybe<Scalars['Int']['output']>;
    attachmentHeight?: Maybe<Scalars['Int']['output']>;
    attachmentProcessing?: Maybe<Scalars['Boolean']['output']>;
    attachmentWidth?: Maybe<Scalars['Int']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    url?: Maybe<Scalars['String']['output']>;
    variant?: Maybe<Variant>;
  };

export type ProductDocumentCanIArgs = {
  action: CanIAction;
};

export type ProductDocumentUrlArgs = {
  mirror?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<ProductImageSize>;
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  cursor: Scalars['String']['output'];
  node: Product;
};

export type ProductFilter = {
  availableOn?: InputMaybe<DateFilter>;
  availableUntil?: InputMaybe<DateFilter>;
  canSupply?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  hasImage?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  keyword?: InputMaybe<KeywordFilter>;
  listings?: InputMaybe<ListingFilter>;
  lottery?: InputMaybe<LotteryFilter>;
  master?: InputMaybe<VariantFilter>;
  metaDescription?: InputMaybe<StringFilter>;
  metaKeywords?: InputMaybe<StringFilter>;
  metaTitle?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nameOrSlug?: InputMaybe<StringFilter>;
  productCat?: InputMaybe<StringFilter>;
  productProperties?: InputMaybe<ProductPropertyFilter>;
  prototype?: InputMaybe<PrototypeFilter>;
  sellingPrice?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  store?: InputMaybe<BrandFilter>;
  title?: InputMaybe<StringFilter>;
  totalOnHand?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  variantsIncludingMaster?: InputMaybe<VariantFilter>;
  vendor?: InputMaybe<VendorFilter>;
};

export type ProductImage = BaseModelInterface &
  Node & {
    __typename?: 'ProductImage';
    alt?: Maybe<Scalars['String']['output']>;
    attachmentContentType?: Maybe<Scalars['String']['output']>;
    attachmentFileName?: Maybe<Scalars['String']['output']>;
    attachmentFileSize?: Maybe<Scalars['Int']['output']>;
    attachmentHeight?: Maybe<Scalars['Int']['output']>;
    attachmentProcessing?: Maybe<Scalars['Boolean']['output']>;
    attachmentWidth?: Maybe<Scalars['Int']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    url: Scalars['String']['output'];
    variant?: Maybe<Variant>;
  };

export type ProductImageCanIArgs = {
  action: CanIAction;
};

export type ProductImageUrlArgs = {
  mirror?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<ProductImageSize>;
};

export enum ProductImageSize {
  Color = 'color',
  Large = 'large',
  List = 'list',
  Mini = 'mini',
  Original = 'original',
  Product = 'product',
  Small = 'small',
  Zoom = 'zoom',
}

export type ProductInput = {
  cancelDuration?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<Scalars['String']['input']>;
  keywordId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productCat?: InputMaybe<ProductCat | `${ProductCat}`>;
  shippingCategoryId?: InputMaybe<Scalars['ID']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProductManifest = Node &
  ProductManifestInterface & {
    __typename?: 'ProductManifest';
    brand?: Maybe<Brand>;
    canSupply?: Maybe<Scalars['Boolean']['output']>;
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    fulfillDuration?: Maybe<Scalars['Int']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    maxQty?: Maybe<Scalars['Int']['output']>;
    name: Scalars['String']['output'];
    optionsText?: Maybe<Scalars['String']['output']>;
    price: Scalars['Float']['output'];
    product?: Maybe<Product>;
    productCat?: Maybe<Scalars['String']['output']>;
    sku?: Maybe<Scalars['String']['output']>;
    slug: Scalars['String']['output'];
    totalOnHand?: Maybe<Scalars['Int']['output']>;
    vendor?: Maybe<Vendor>;
    weight?: Maybe<Scalars['Float']['output']>;
  };

export type ProductManifestInterface = {
  brand?: Maybe<Brand>;
  canSupply?: Maybe<Scalars['Boolean']['output']>;
  expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  fulfillDuration?: Maybe<Scalars['Int']['output']>;
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  maxQty?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  optionsText?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  productCat?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  totalOnHand?: Maybe<Scalars['Int']['output']>;
  vendor?: Maybe<Vendor>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type ProductOptionValue = BaseModelInterface &
  Node & {
    __typename?: 'ProductOptionValue';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    images: Array<ProductImage>;
    optionValue: OptionValue;
    position: Scalars['Int']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type ProductOptionValueCanIArgs = {
  action: CanIAction;
};

export type ProductProperty = BaseModelInterface &
  Node & {
    __typename?: 'ProductProperty';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    product: Product;
    property: Property;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    value?: Maybe<Scalars['String']['output']>;
  };

export type ProductPropertyCanIArgs = {
  action: CanIAction;
};

export type ProductPropertyFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  property?: InputMaybe<PropertyFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  value?: InputMaybe<StringFilter>;
};

export type ProductReturn = BaseModelInterface &
  Node & {
    __typename?: 'ProductReturn';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    lineItem: LineItem;
    order?: Maybe<Order>;
    price?: Maybe<Scalars['Float']['output']>;
    quantity?: Maybe<Scalars['Int']['output']>;
    returnAt?: Maybe<Scalars['String']['output']>;
    returnBy?: Maybe<User>;
    returnByDate?: Maybe<Scalars['String']['output']>;
    returnLocation?: Maybe<StoreLocation>;
    state?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variant: Variant;
  };

export type ProductReturnCanIArgs = {
  action: CanIAction;
};

export type ProductReturnConnection = {
  __typename?: 'ProductReturnConnection';
  edges: Array<ProductReturnEdge>;
  nodes: Array<ProductReturn>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type ProductReturnConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type ProductReturnEdge = {
  __typename?: 'ProductReturnEdge';
  cursor: Scalars['String']['output'];
  node: ProductReturn;
};

export type ProductReturnFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  returnAt?: InputMaybe<DateFilter>;
  returnBy?: InputMaybe<StringFilter>;
  returnByDate?: InputMaybe<DateFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type ProductTranslation = BaseModelInterface &
  Node & {
    __typename?: 'ProductTranslation';
    body?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    locale?: Maybe<Scalars['String']['output']>;
    metaDescription?: Maybe<Scalars['String']['output']>;
    metaKeywords?: Maybe<Scalars['String']['output']>;
    metaTitle?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    product?: Maybe<Product>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type ProductTranslationCanIArgs = {
  action: CanIAction;
};

export type Profile = BaseModelInterface &
  Node & {
    __typename?: 'Profile';
    balance?: Maybe<Scalars['Float']['output']>;
    blocked?: Maybe<Scalars['String']['output']>;
    businessClient?: Maybe<BusinessClient>;
    canI: Scalars['Boolean']['output'];
    contractAmount?: Maybe<Scalars['Float']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    creditLimit?: Maybe<Scalars['Float']['output']>;
    customerId?: Maybe<Scalars['String']['output']>;
    customerName?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    registrationNo?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type ProfileCanIArgs = {
  action: CanIAction;
};

export type Progress = Node & {
  __typename?: 'Progress';
  amount: Scalars['Float']['output'];
  amountChange: Scalars['Float']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  cycle: Scalars['String']['output'];
  date: Scalars['ISO8601DateTime']['output'];
  gamification: Gamification;
  gid: Scalars['ID']['output'];
  goal: GamificationGoal;
  id: Scalars['ID']['output'];
  owner: Node;
  percentage: Scalars['Float']['output'];
  percentageChange: Scalars['Float']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  target: Node;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type ProgressConnection = {
  __typename?: 'ProgressConnection';
  edges: Array<ProgressEdge>;
  nodes: Array<Progress>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type ProgressConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type ProgressEdge = {
  __typename?: 'ProgressEdge';
  cursor: Scalars['String']['output'];
  node: Progress;
};

export type Promotion = BaseModelInterface &
  Node & {
    __typename?: 'Promotion';
    actionManifests: Array<PromotionActionManifest>;
    actions: Array<ActionInterface>;
    advertise?: Maybe<Scalars['Boolean']['output']>;
    applies?: Maybe<Array<PromotionApply>>;
    audits: AuditConnection;
    autoClaim?: Maybe<Scalars['Boolean']['output']>;
    canI: Scalars['Boolean']['output'];
    claimedQuantity?: Maybe<Scalars['Int']['output']>;
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    creditsCount?: Maybe<Scalars['Int']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    entitlements?: Maybe<Array<PromotionApply>>;
    expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    image?: Maybe<Image>;
    link?: Maybe<Scalars['String']['output']>;
    matchPolicy?: Maybe<Scalars['String']['output']>;
    myCode?: Maybe<Scalars['String']['output']>;
    myCodeStatus?: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
    orders: OrderConnection;
    path?: Maybe<Scalars['String']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    priority?: Maybe<Scalars['Int']['output']>;
    rule?: Maybe<Scalars['JSON']['output']>;
    ruleManifests: Array<PromotionRuleManifest>;
    rules: Array<RuleInterface>;
    startsAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    tagList: Array<Scalars['String']['output']>;
    terms?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    usageLimit?: Maybe<Scalars['Int']['output']>;
    websiteIds: Array<Scalars['ID']['output']>;
  };

export type PromotionAuditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuditFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type PromotionCanIArgs = {
  action: CanIAction;
};

export type PromotionEntitlementsArgs = {
  canSupply?: InputMaybe<Scalars['Boolean']['input']>;
  requireApprove?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PromotionOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  status?: InputMaybe<OrderStatus>;
};

export type PromotionAction = ActionInterface &
  Node & {
    __typename?: 'PromotionAction';
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
  };

export type PromotionActionFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  promotion?: InputMaybe<PromotionFilter>;
  promotionActionLineItems?: InputMaybe<PromotionActionLineItemFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type PromotionActionFreeShipping = ActionInterface &
  Node & {
    __typename?: 'PromotionActionFreeShipping';
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
  };

export type PromotionActionLineItem = Node & {
  __typename?: 'PromotionActionLineItem';
  details?: Maybe<Scalars['String']['output']>;
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  interval?: Maybe<Scalars['Int']['output']>;
  lineItemId?: Maybe<Scalars['ID']['output']>;
  maxQuantity?: Maybe<Scalars['Int']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  promotionAction?: Maybe<PromotionAction>;
  promotionActionId?: Maybe<Scalars['ID']['output']>;
  promotionActionType?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  step?: Maybe<Scalars['Float']['output']>;
  variant?: Maybe<Variant>;
  variantId?: Maybe<Scalars['ID']['output']>;
};

export type PromotionActionLineItemConnection = {
  __typename?: 'PromotionActionLineItemConnection';
  edges: Array<PromotionActionLineItemEdge>;
  nodes: Array<PromotionActionLineItem>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type PromotionActionLineItemConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type PromotionActionLineItemEdge = {
  __typename?: 'PromotionActionLineItemEdge';
  cursor: Scalars['String']['output'];
  node: PromotionActionLineItem;
};

export type PromotionActionLineItemFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  promotionAction?: InputMaybe<PromotionActionFilter>;
  quantity?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  variant?: InputMaybe<VariantFilter>;
};

export type PromotionActionManifest = Node & {
  __typename?: 'PromotionActionManifest';
  action: Scalars['String']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  interval?: Maybe<Scalars['Int']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  listings: Array<Listing>;
  products: Array<Product>;
  rule?: Maybe<Scalars['String']['output']>;
  saleAmount?: Maybe<Scalars['Float']['output']>;
  salePercent?: Maybe<Scalars['Float']['output']>;
  variants: Array<Variant>;
};

export type PromotionActionPromise = BaseModelInterface &
  Node & {
    __typename?: 'PromotionActionPromise';
    adjustedLineItems: Array<LineItem>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isEligible: Scalars['Boolean']['output'];
    order: Order;
    preferredLimit?: Maybe<Scalars['String']['output']>;
    promotionAction: PromotionAction;
    promotionActionId?: Maybe<Scalars['Int']['output']>;
    promotionActionLineItems: Array<PromotionActionLineItem>;
    promotionActionType?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    totalAmountEligibleItems: Scalars['Float']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type PromotionActionPromiseCanIArgs = {
  action: CanIAction;
};

export type PromotionActionPromiseConnection = {
  __typename?: 'PromotionActionPromiseConnection';
  edges: Array<PromotionActionPromiseEdge>;
  nodes: Array<PromotionActionPromise>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type PromotionActionPromiseConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type PromotionActionPromiseEdge = {
  __typename?: 'PromotionActionPromiseEdge';
  cursor: Scalars['String']['output'];
  node: PromotionActionPromise;
};

export type PromotionActionPromiseFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  order?: InputMaybe<OrderFilter>;
  promotionAction?: InputMaybe<PromotionActionFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type PromotionApply = Brand | Product | Variant;

export type PromotionConnection = {
  __typename?: 'PromotionConnection';
  edges: Array<PromotionEdge>;
  giftsCount?: Maybe<Scalars['Int']['output']>;
  nodes: Array<Promotion>;
  pageInfo: PageInfo;
  percentsCount?: Maybe<Scalars['Int']['output']>;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type PromotionConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type PromotionEdge = {
  __typename?: 'PromotionEdge';
  cursor: Scalars['String']['output'];
  node: Promotion;
};

export type PromotionFilter = {
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  expiresAt?: InputMaybe<DateFilter>;
  gifts?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<IdFilter>;
  minType?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  orders?: InputMaybe<OrderFilter>;
  percents?: InputMaybe<Scalars['Boolean']['input']>;
  promotionActions?: InputMaybe<PromotionActionFilter>;
  promotionRules?: InputMaybe<PromotionRuleFilter>;
  startsAt?: InputMaybe<DateFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  usageLimit?: InputMaybe<IntFilter>;
  vendor?: InputMaybe<VendorFilter>;
  websites?: InputMaybe<WebsiteFilter>;
  withProduct?: InputMaybe<StringFilter>;
  withVariant?: InputMaybe<StringFilter>;
};

export type PromotionRule = Node &
  RuleInterface & {
    __typename?: 'PromotionRule';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type PromotionRuleBadge = Node &
  RuleInterface & {
    __typename?: 'PromotionRuleBadge';
    badgeIds: Array<Scalars['ID']['output']>;
    badges: Array<Taxon>;
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredMatchPolicy: Scalars['String']['output'];
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type PromotionRuleBusinessClient = Node &
  RuleInterface & {
    __typename?: 'PromotionRuleBusinessClient';
    businessClientIds?: Maybe<Array<Scalars['String']['output']>>;
    businessClients?: Maybe<Array<BusinessClient>>;
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredMatchPolicy: Scalars['String']['output'];
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type PromotionRuleFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  promotion?: InputMaybe<PromotionFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type PromotionRuleManifest = Node & {
  __typename?: 'PromotionRuleManifest';
  badges: Array<Badge>;
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  maxAmount?: Maybe<Scalars['Int']['output']>;
  maxQuantity?: Maybe<Scalars['Int']['output']>;
  minAmount?: Maybe<Scalars['Int']['output']>;
  minQuantity?: Maybe<Scalars['Int']['output']>;
  policy?: Maybe<Scalars['String']['output']>;
  products: Array<Product>;
  rule: Scalars['String']['output'];
  stores: Array<Brand>;
  taxons: Array<Taxon>;
  variants: Array<Variant>;
  vendors: Array<Vendor>;
};

export type PromotionRuleProduct = Node &
  RuleInterface & {
    __typename?: 'PromotionRuleProduct';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredFromBasePrice?: Maybe<Scalars['Boolean']['output']>;
    preferredMatchPolicy: Scalars['String']['output'];
    preferredMaxAmount: Scalars['Float']['output'];
    preferredMaxQuantity: Scalars['Int']['output'];
    preferredMinAmount: Scalars['Float']['output'];
    preferredMinQuantity: Scalars['Int']['output'];
    productGroupId?: Maybe<Scalars['ID']['output']>;
    productIds: Array<Scalars['ID']['output']>;
    products: Array<Product>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type PromotionRuleSegment = Node &
  RuleInterface & {
    __typename?: 'PromotionRuleSegment';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredMatchPolicy: Scalars['String']['output'];
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    segmentIds: Array<Scalars['ID']['output']>;
    segments: Array<SupplySegment>;
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type PromotionRuleShippingMethod = Node &
  RuleInterface & {
    __typename?: 'PromotionRuleShippingMethod';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredMatchPolicy: Scalars['String']['output'];
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    shippingMethodIds?: Maybe<Array<Scalars['String']['output']>>;
    shippingMethods?: Maybe<Array<ShippingMethod>>;
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type PromotionRuleStockLocation = Node &
  RuleInterface & {
    __typename?: 'PromotionRuleStockLocation';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredFromBasePrice?: Maybe<Scalars['Boolean']['output']>;
    preferredMatchPolicy: Scalars['String']['output'];
    preferredMaxAmount: Scalars['Float']['output'];
    preferredMaxQuantity: Scalars['Int']['output'];
    preferredMinAmount: Scalars['Float']['output'];
    preferredMinQuantity: Scalars['Int']['output'];
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    stockLocationIds: Array<Scalars['ID']['output']>;
    stockLocations: Array<StockLocation>;
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type PromotionRuleStore = Node &
  RuleInterface & {
    __typename?: 'PromotionRuleStore';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredFromBasePrice?: Maybe<Scalars['Boolean']['output']>;
    preferredMatchPolicy: Scalars['String']['output'];
    preferredMaxAmount: Scalars['Float']['output'];
    preferredMaxQuantity: Scalars['Int']['output'];
    preferredMinAmount: Scalars['Float']['output'];
    preferredMinQuantity: Scalars['Int']['output'];
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    storeIds: Array<Scalars['ID']['output']>;
    stores: Array<Brand>;
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type PromotionRuleStoreLocation = Node &
  RuleInterface & {
    __typename?: 'PromotionRuleStoreLocation';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredMatchPolicy: Scalars['String']['output'];
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    storeLocationIds: Array<Scalars['ID']['output']>;
    storeLocations: Array<StoreLocation>;
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type PromotionRuleTaxon = Node &
  RuleInterface & {
    __typename?: 'PromotionRuleTaxon';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredMatchPolicy: Scalars['String']['output'];
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    taxonIds: Array<Scalars['ID']['output']>;
    taxons: Array<Taxon>;
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type PromotionRuleUser = Node &
  RuleInterface & {
    __typename?: 'PromotionRuleUser';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
    userIds: Array<Scalars['ID']['output']>;
    users: Array<User>;
  };

export type PromotionRuleVariant = Node &
  RuleInterface & {
    __typename?: 'PromotionRuleVariant';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredFromBasePrice?: Maybe<Scalars['Boolean']['output']>;
    preferredHasCouponCodeItemLimit?: Maybe<Scalars['Boolean']['output']>;
    preferredMatchPolicy: Scalars['String']['output'];
    preferredMaxAmount: Scalars['Float']['output'];
    preferredMaxQuantity: Scalars['Int']['output'];
    preferredMinAmount: Scalars['Float']['output'];
    preferredMinQuantity: Scalars['Int']['output'];
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
    variantIds: Array<Scalars['ID']['output']>;
    variants: Array<Variant>;
  };

export type PromotionRuleVendor = Node &
  RuleInterface & {
    __typename?: 'PromotionRuleVendor';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredFromBasePrice?: Maybe<Scalars['Boolean']['output']>;
    preferredMatchPolicy: Scalars['String']['output'];
    preferredMaxAmount: Scalars['Float']['output'];
    preferredMaxQuantity: Scalars['Int']['output'];
    preferredMinAmount: Scalars['Float']['output'];
    preferredMinQuantity: Scalars['Int']['output'];
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
    vendorIds: Array<Scalars['ID']['output']>;
    vendors: Array<Vendor>;
  };

export type PromotionRuleWebsite = Node &
  RuleInterface & {
    __typename?: 'PromotionRuleWebsite';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
    websiteIds: Array<Scalars['ID']['output']>;
    websites: Array<Website>;
  };

export type Property = BaseModelInterface &
  Node & {
    __typename?: 'Property';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    presentation?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type PropertyCanIArgs = {
  action: CanIAction;
};

export type PropertyConnection = {
  __typename?: 'PropertyConnection';
  edges: Array<PropertyEdge>;
  nodes: Array<Property>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type PropertyConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type PropertyEdge = {
  __typename?: 'PropertyEdge';
  cursor: Scalars['String']['output'];
  node: Property;
};

export type PropertyFilter = {
  advancedSearch?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  nameOrPresentation?: InputMaybe<StringFilter>;
  presentation?: InputMaybe<StringFilter>;
  prettyName?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type PropertyValue = BaseModelInterface &
  Node & {
    __typename?: 'PropertyValue';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    property: Property;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    value?: Maybe<Scalars['String']['output']>;
  };

export type PropertyValueCanIArgs = {
  action: CanIAction;
};

export type PropertyValueConnection = {
  __typename?: 'PropertyValueConnection';
  edges: Array<PropertyValueEdge>;
  nodes: Array<PropertyValue>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type PropertyValueConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type PropertyValueEdge = {
  __typename?: 'PropertyValueEdge';
  cursor: Scalars['String']['output'];
  node: PropertyValue;
};

export type PropertyValueFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  property?: InputMaybe<PropertyFilter>;
  propertyId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  value?: InputMaybe<StringFilter>;
};

export type Prototype = BaseModelInterface &
  Node & {
    __typename?: 'Prototype';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    depth?: Maybe<Scalars['Int']['output']>;
    expanded?: Maybe<Scalars['Int']['output']>;
    gid: Scalars['ID']['output'];
    hasChildren?: Maybe<Scalars['Boolean']['output']>;
    id: Scalars['ID']['output'];
    keywords: Array<Keyword>;
    lft?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    optionTypeIds: Array<Scalars['ID']['output']>;
    optionTypes: OptionTypeConnection;
    options?: Maybe<Scalars['JSON']['output']>;
    parentId?: Maybe<Scalars['ID']['output']>;
    parentIds: Array<Scalars['ID']['output']>;
    position?: Maybe<Scalars['Int']['output']>;
    presentation?: Maybe<Scalars['String']['output']>;
    prettyName?: Maybe<Scalars['String']['output']>;
    prettyOptions?: Maybe<Scalars['JSON']['output']>;
    prettyPresentation?: Maybe<Scalars['String']['output']>;
    properties: Array<Property>;
    rgt?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type PrototypeCanIArgs = {
  action: CanIAction;
};

export type PrototypeOptionTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OptionTypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type PrototypeConnection = {
  __typename?: 'PrototypeConnection';
  edges: Array<PrototypeEdge>;
  nodes: Array<Prototype>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type PrototypeConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type PrototypeEdge = {
  __typename?: 'PrototypeEdge';
  cursor: Scalars['String']['output'];
  node: Prototype;
};

export type PrototypeFilter = {
  createdAt?: InputMaybe<DateFilter>;
  depth?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  parent?: InputMaybe<PrototypeFilter>;
  parentId?: InputMaybe<IdFilter>;
  position?: InputMaybe<IntFilter>;
  prettyName?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type ProviderFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type PurchasedDownloadable = BaseModelInterface &
  Node & {
    __typename?: 'PurchasedDownloadable';
    attachments: Array<DownloadableAttachment>;
    canI: Scalars['Boolean']['output'];
    contentType?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    expireDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    order: Order;
    orderId: Scalars['ID']['output'];
    product: Product;
    productId: Scalars['ID']['output'];
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user: User;
    userId: Scalars['ID']['output'];
    variant: Variant;
    variantId: Scalars['ID']['output'];
  };

export type PurchasedDownloadableCanIArgs = {
  action: CanIAction;
};

export type PurchasedDownloadableConnection = {
  __typename?: 'PurchasedDownloadableConnection';
  edges: Array<PurchasedDownloadableEdge>;
  nodes: Array<PurchasedDownloadable>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type PurchasedDownloadableConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type PurchasedDownloadableEdge = {
  __typename?: 'PurchasedDownloadableEdge';
  cursor: Scalars['String']['output'];
  node: PurchasedDownloadable;
};

export type PushTemplate = BaseModelInterface &
  Node & {
    __typename?: 'PushTemplate';
    appId?: Maybe<Scalars['ID']['output']>;
    appIds: Array<Scalars['ID']['output']>;
    apps: Array<Application>;
    body?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    deeplink?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    title: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    url?: Maybe<Scalars['String']['output']>;
    website: Website;
    websiteId: Scalars['ID']['output'];
  };

export type PushTemplateCanIArgs = {
  action: CanIAction;
};

export type PushTemplateConnection = {
  __typename?: 'PushTemplateConnection';
  edges: Array<PushTemplateEdge>;
  nodes: Array<PushTemplate>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type PushTemplateConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type PushTemplateEdge = {
  __typename?: 'PushTemplateEdge';
  cursor: Scalars['String']['output'];
  node: PushTemplate;
};

export type PushTemplateFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  websiteId?: InputMaybe<IntFilter>;
};

export enum PushTemplateName {
  BrandNewProduct = 'brand_new_product',
  BrandSale = 'brand_sale',
  C2cAfterPayActivated = 'c2c_after_pay_activated',
  C2cListingCreate = 'c2c_listing_create',
  C2cListingExpireReminder = 'c2c_listing_expire_reminder',
  C2cListingExpired = 'c2c_listing_expired',
  C2cListingSales = 'c2c_listing_sales',
  C2cNewFeedback = 'c2c_new_feedback',
  OrderToDrivers = 'order_to_drivers',
  SystemCampaignCancel = 'system_campaign_cancel',
  SystemCampaignSuccess = 'system_campaign_success',
  SystemDispatchCall = 'system_dispatch_call',
  SystemLeasingStatus = 'system_leasing_status',
  SystemMerchantOrder = 'system_merchant_order',
  SystemNewChat = 'system_new_chat',
  SystemNoStock = 'system_no_stock',
  SystemOrderCancel = 'system_order_cancel',
  SystemOrderClaim = 'system_order_claim',
  SystemOrderCompleted = 'system_order_completed',
  SystemOrderEbarimt = 'system_order_ebarimt',
  SystemOrderPaid = 'system_order_paid',
  SystemOrderPurchased = 'system_order_purchased',
  SystemOrderPurchasedLocation = 'system_order_purchased_location',
  SystemOrderShipmentReady = 'system_order_shipment_ready',
  SystemOrderShipped = 'system_order_shipped',
  SystemPrescriptionAccepted = 'system_prescription_accepted',
  SystemPrescriptionCreated = 'system_prescription_created',
  SystemUserBirthday = 'system_user_birthday',
  SystemVendorFollow = 'system_vendor_follow',
  TemplatedOrderCreated = 'templated_order_created',
}

export type QPayCard = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'QPayCard';
    canI: Scalars['Boolean']['output'];
    cardIssuer: Scalars['String']['output'];
    cardNumber: Scalars['String']['output'];
    cardType: Scalars['String']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isDefault: Scalars['Boolean']['output'];
    paymentMethod?: Maybe<PaymentMethod>;
    paymentMethodId?: Maybe<Scalars['ID']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type QPayCardCanIArgs = {
  action: CanIAction;
};

export type QPayDeepLink = {
  __typename?: 'QPayDeepLink';
  description: Scalars['String']['output'];
  link: Scalars['String']['output'];
  logo: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type QPayInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'QPayInvoice';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    deepLinks?: Maybe<Array<QPayDeepLink>>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceId?: Maybe<Scalars['String']['output']>;
    qrCode?: Maybe<Scalars['String']['output']>;
    qrImage?: Maybe<Scalars['String']['output']>;
    qrUrl?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type QPayInvoiceCanIArgs = {
  action: CanIAction;
};

export type Quarter = Node & {
  __typename?: 'Quarter';
  district?: Maybe<District>;
  districtId?: Maybe<Scalars['ID']['output']>;
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  zip?: Maybe<Zipcode>;
};

export type QuarterConnection = {
  __typename?: 'QuarterConnection';
  edges: Array<QuarterEdge>;
  nodes: Array<Quarter>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type QuarterConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type QuarterEdge = {
  __typename?: 'QuarterEdge';
  cursor: Scalars['String']['output'];
  node: Quarter;
};

export type QuarterFilter = {
  createdAt?: InputMaybe<DateFilter>;
  districtId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Query = {
  __typename?: 'Query';
  activeLotteryEvent?: Maybe<LotteryEvent>;
  activeQuiz?: Maybe<Quiz>;
  address: Array<UbcAddress>;
  agendas: AgendaConnection;
  allMovies: MovieConnection;
  article: Article;
  articles: ArticleConnection;
  authors: AuthorConnection;
  availableTickets: ProductConnection;
  badge?: Maybe<Badge>;
  badges: BadgeConnection;
  branch: Branch;
  brand?: Maybe<Brand>;
  brands: BrandConnection;
  business: Vendor;
  businessClient?: Maybe<BusinessClient>;
  businessClients?: Maybe<BusinessClientConnection>;
  businessTypes: BusinessTypeConnection;
  campaign: ShoppyCampaign;
  campaigns: ShoppyCampaignConnection;
  cancelReasons: CancelReasonConnection;
  channel: Merchant;
  chatRoom?: Maybe<Room>;
  chatRooms: RoomConnection;
  cinema?: Maybe<Cinema>;
  cinemas: Array<Cinema>;
  clientsStore?: Maybe<ClientsStore>;
  clientsStores: ClientsStoreConnection;
  countries: CountryConnection;
  coupon?: Maybe<Coupon>;
  creditCard: CreditCard;
  currentOrder?: Maybe<Order>;
  currentWebsite?: Maybe<Website>;
  departmentStore?: Maybe<DepartmentStore>;
  departmentStores: DepartmentStoreConnection;
  districts: DistrictConnection;
  downloadable: PurchasedDownloadable;
  dropshipAlibabaDiscounts: Array<Discount>;
  dropshipProduct: DropshipProduct;
  dropshipProducts: DropshipProductConnection;
  dropshipProvider: DropshipProvider;
  dropshipProviders: DropshipProviderConnection;
  eTicket?: Maybe<ETicket>;
  eTicketActivationChecker?: Maybe<Array<ETicketActivation>>;
  eTicketNfcChecker?: Maybe<ETicketActivation>;
  eTicketRegIdChecker?: Maybe<ETicketActivation>;
  eTickets: ETicketConnection;
  employee: Employee;
  emuPickupLocations?: Maybe<Array<PickUpLocation>>;
  eventInvite: EventInvite;
  eventInvites: EventInviteConnection;
  featured?: Maybe<Featured>;
  feedback: FeedbackType;
  feedbackComments: Array<Comment>;
  feedbackTopics: FeedbackTopicConnection;
  feedbacks: FeedbackTypeConnection;
  flatTaxon?: Maybe<Scalars['JSON']['output']>;
  form?: Maybe<ShoppyForm>;
  forms: ShoppyFormConnection;
  gamification: Gamification;
  gamifications: GamificationConnection;
  gc?: Maybe<GiftCard>;
  golomtCard: GolomtCard;
  inventoryUnitActions?: Maybe<InventoryUnitActionConnection>;
  lastUsedPaymentMethods: Array<PaymentMethod>;
  leaseV3Sources: PaymentSourceConnection;
  lineItem?: Maybe<LineItem>;
  listing: Listing;
  listings: ListingConnection;
  lookBook?: Maybe<LookBook>;
  lookBooks: LookBookConnection;
  lotteryEvent?: Maybe<LotteryEvent>;
  lotteryEvents: LotteryEventConnection;
  massPromotions: MassPromotionConnection;
  me: User;
  menu?: Maybe<DynamicMenu>;
  menus: Array<DynamicMenu>;
  merchants: MerchantConnection;
  movie?: Maybe<Movie>;
  movieTicket?: Maybe<MovieTicket>;
  movieTickets: MovieTicketConnection;
  movies: Array<Movie>;
  news?: Maybe<News>;
  newses: NewsConnection;
  node?: Maybe<Node>;
  nodes: Array<Node>;
  notices: NoticeConnection;
  notifications: NotificationConnection;
  nutritionFact: NutritionFact;
  optionType: OptionType;
  order: Order;
  orderTemplate: OrderTemplate;
  orders: OrderConnection;
  page?: Maybe<DynamicPage>;
  pages: DynamicPageConnection;
  payment: Payment;
  paymentAccountData?: Maybe<Scalars['JSON']['output']>;
  paymentMethods: Array<PaymentMethod>;
  paymentReturn: PaymentReturn;
  paymentReturnReasons: PaymentReturnReasonConnection;
  paymentReturnSources: PaymentReturnSourceConnection;
  poll?: Maybe<Poll>;
  polls: PollConnection;
  prescription?: Maybe<Prescription>;
  prescriptions: PrescriptionConnection;
  product?: Maybe<Product>;
  products: ProductConnection;
  promotion: Promotion;
  promotions: PromotionConnection;
  properties: PropertyConnection;
  propertiesTranslation: Scalars['JSON']['output'];
  propertyValues: PropertyValueConnection;
  prototype: Prototype;
  prototypes: PrototypeConnection;
  pushTemplates: PushTemplateConnection;
  quarters: QuarterConnection;
  quiz?: Maybe<Quiz>;
  rate: Scalars['JSON']['output'];
  relatedProducts: RelationConnection;
  reportReasons: Array<ReportReason>;
  savedAddress: Address;
  screens: Array<Screen>;
  searchAddressByNames: Scalars['JSON']['output'];
  session?: Maybe<Session>;
  shipment: Shipment;
  shipments: ShipmentConnection;
  shippers: ShipperConnection;
  shippingCategories: Array<ShippingCategory>;
  shippingMethods: Array<ShippingMethod>;
  shoppyImages: ImageConnection;
  sizingGuide: SizingGuide;
  stage: Stage;
  states: StateConnection;
  storeCredits: StoreCreditConnection;
  storeLocation?: Maybe<StoreLocation>;
  storeLocations: StoreLocationConnection;
  storesAddresses: AddressConnection;
  supplierCategories: SupplierCategoryConnection;
  supplySegment?: Maybe<SupplySegment>;
  supplySegments: SupplySegmentConnection;
  tag?: Maybe<Tag>;
  tags: TagConnection;
  taxCategories: TaxCategoryConnection;
  taxRates: TaxRateConnection;
  taxon?: Maybe<Taxon>;
  taxons: TaxonConnection;
  ticketTemplates?: Maybe<TicketTemplateConnection>;
  trackables: TrackableTypeConnection;
  transaction?: Maybe<Transaction>;
  unreadNotifications: Scalars['Int']['output'];
  unseenChatRooms?: Maybe<Scalars['Int']['output']>;
  userAddress: UserAddress;
  userAddresses: UserAddressConnection;
  userAgreements: UserAgreementConnection;
  userSubscriptions: Scalars['JSON']['output'];
  userTokenInfo: Scalars['JSON']['output'];
  users: UserConnection;
  usersList: UserConnection;
  variant: Variant;
  variants: VariantConnection;
  vendor: Vendor;
  vendors: VendorConnection;
  wallet: Wallet;
  walletRequests: WalletRequestConnection;
  wallets: WalletConnection;
  webListings: ListingConnection;
  website: Website;
  wishedProducts: WishedProductConnection;
  wishlist: Wishlist;
  wishlists: WishlistConnection;
  zones: Array<Zone>;
};

export type QueryAddressArgs = {
  filterId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lat?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lon?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type QueryAgendasArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AgendaFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryAllMoviesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MovieFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  impression?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryArticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ArticleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryAuthorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthorFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryAvailableTicketsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryBadgeArgs = {
  id: Scalars['ID']['input'];
};

export type QueryBadgesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BadgeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryBranchArgs = {
  id: Scalars['ID']['input'];
};

export type QueryBrandArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type QueryBrandsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BrandFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryBusinessArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryBusinessClientArgs = {
  id: Scalars['ID']['input'];
};

export type QueryBusinessClientsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BusinessClientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryBusinessTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BusinessTypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryCampaignArgs = {
  id: Scalars['ID']['input'];
};

export type QueryCampaignsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CampaignFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryCancelReasonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryChannelArgs = {
  id: Scalars['ID']['input'];
};

export type QueryChatRoomArgs = {
  id: Scalars['ID']['input'];
};

export type QueryChatRoomsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoomFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryCinemaArgs = {
  id: Scalars['ID']['input'];
};

export type QueryClientsStoreArgs = {
  id: Scalars['ID']['input'];
};

export type QueryClientsStoresArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ClientsStoreFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryCountriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CountryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryCouponArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};

export type QueryCreditCardArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryCurrentOrderArgs = {
  currency?: InputMaybe<Scalars['String']['input']>;
  flag?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  orderToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryDepartmentStoreArgs = {
  id: Scalars['ID']['input'];
};

export type QueryDepartmentStoresArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DepartmentStoreFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryDistrictsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DistrictFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryDownloadableArgs = {
  id: Scalars['ID']['input'];
};

export type QueryDropshipAlibabaDiscountsArgs = {
  discountType?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type QueryDropshipProductArgs = {
  id: Scalars['ID']['input'];
};

export type QueryDropshipProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DropshipProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryDropshipProviderArgs = {
  id: Scalars['ID']['input'];
};

export type QueryDropshipProvidersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProviderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryETicketArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};

export type QueryETicketActivationCheckerArgs = {
  citizenId?: InputMaybe<Scalars['String']['input']>;
  eTicketNumber?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type QueryETicketNfcCheckerArgs = {
  nfcId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryETicketRegIdCheckerArgs = {
  regId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryETicketsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ETicketFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryEmployeeArgs = {
  id: Scalars['ID']['input'];
};

export type QueryEmuPickupLocationsArgs = {
  stateId: Scalars['ID']['input'];
};

export type QueryEventInviteArgs = {
  id: Scalars['ID']['input'];
};

export type QueryEventInvitesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EventInviteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryFeaturedArgs = {
  targetId: Scalars['ID']['input'];
  targetType: Scalars['String']['input'];
};

export type QueryFeedbackArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFeedbackCommentsArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFeedbackTopicsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FeedbackTopicFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryFeedbacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FeedbackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryFlatTaxonArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryFormArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  permalink?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FormFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryGamificationArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGamificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryGcArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  redemptionCode?: InputMaybe<Scalars['String']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryGolomtCardArgs = {
  id: Scalars['ID']['input'];
};

export type QueryInventoryUnitActionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<InventoryUnitActionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryLeaseV3SourcesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PaymentSourceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryLineItemArgs = {
  id: Scalars['ID']['input'];
};

export type QueryListingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  impression?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryLookBookArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryLookBooksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LookBookFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryLotteryEventArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  permalink?: InputMaybe<Scalars['String']['input']>;
};

export type QueryLotteryEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LotteryEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryMassPromotionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MassPromoFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryMenuArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type QueryMerchantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MerchantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryMovieArgs = {
  id: Scalars['ID']['input'];
};

export type QueryMovieTicketArgs = {
  id: Scalars['ID']['input'];
};

export type QueryMovieTicketsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MovieTicketFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryMoviesArgs = {
  upcoming?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryNewsArgs = {
  id: Scalars['ID']['input'];
  impression?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryNewsesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NewsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};

export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};

export type QueryNoticesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NoticeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NotificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryNutritionFactArgs = {
  id: Scalars['ID']['input'];
};

export type QueryOptionTypeArgs = {
  id: Scalars['ID']['input'];
};

export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type QueryOrderTemplateArgs = {
  id: Scalars['ID']['input'];
};

export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  status?: InputMaybe<OrderStatus>;
};

export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryPaymentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};

export type QueryPaymentMethodsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  afterPay?: InputMaybe<Scalars['Boolean']['input']>;
  displayOn?: InputMaybe<Array<PmDisplayKind>>;
};

export type QueryPaymentReturnArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPaymentReturnReasonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PaymentReturnReasonFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryPaymentReturnSourcesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PaymentReturnSourceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryPollArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPollsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PollFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryPrescriptionArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPrescriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PrescriptionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryProductArgs = {
  brand?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryPromotionArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPromotionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateType?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PromotionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type QueryPropertiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PropertyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryPropertyValuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PropertyValueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryPrototypeArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPrototypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PrototypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryPushTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PushTemplateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryQuartersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<QuarterFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryQuizArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryRateArgs = {
  rate: Scalars['String']['input'];
};

export type QueryRelatedProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RelationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QuerySavedAddressArgs = {
  id: Scalars['ID']['input'];
};

export type QuerySearchAddressByNamesArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  district?: InputMaybe<Scalars['String']['input']>;
  locality?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
};

export type QuerySessionArgs = {
  id: Scalars['ID']['input'];
};

export type QueryShipmentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};

export type QueryShipmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShipmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryShippersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryShippingCategoriesArgs = {
  filter?: InputMaybe<ShippingCategoryFilter>;
};

export type QueryShippingMethodsArgs = {
  filter?: InputMaybe<ShippingMethodFilter>;
};

export type QueryShoppyImagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShoppyImageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QuerySizingGuideArgs = {
  id: Scalars['ID']['input'];
};

export type QueryStageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryStatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryStoreCreditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StoreCreditFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryStoreLocationArgs = {
  id: Scalars['ID']['input'];
};

export type QueryStoreLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StoreLocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryStoresAddressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categoryIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  wid?: InputMaybe<Scalars['ID']['input']>;
};

export type QuerySupplierCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SupplierCategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QuerySupplySegmentArgs = {
  id: Scalars['ID']['input'];
};

export type QuerySupplySegmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SupplySegmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryTagArgs = {
  name: Scalars['String']['input'];
};

export type QueryTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  websiteSpecific?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryTaxCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryTaxRatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryTaxonArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  permalink?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTaxonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TaxonFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryTicketTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TicketTemplateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryTrackablesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryTransactionArgs = {
  id: Scalars['ID']['input'];
};

export type QueryUserAddressArgs = {
  id: Scalars['ID']['input'];
};

export type QueryUserAddressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserAddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryUserAgreementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserAgreementFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryUserSubscriptionsArgs = {
  activeOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryUserTokenInfoArgs = {
  number: Scalars['String']['input'];
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryUsersListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryVariantArgs = {
  id: Scalars['ID']['input'];
};

export type QueryVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VariantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  permission?: InputMaybe<VariantsPermission>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryVendorArgs = {
  id: Scalars['ID']['input'];
};

export type QueryVendorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VendorFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryWalletArgs = {
  id: Scalars['ID']['input'];
};

export type QueryWalletRequestsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WalletRequestFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryWalletsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WalletFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryWebListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryWebsiteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  index?: InputMaybe<Scalars['String']['input']>;
};

export type QueryWishedProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WishedProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryWishlistArgs = {
  accessHash?: InputMaybe<Scalars['String']['input']>;
};

export type QueryWishlistsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WishlistFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type Quiz = BaseModelInterface &
  Node & {
    __typename?: 'Quiz';
    active?: Maybe<Scalars['Boolean']['output']>;
    available?: Maybe<Scalars['Boolean']['output']>;
    canI: Scalars['Boolean']['output'];
    cover?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    gradeBy?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    permalink?: Maybe<Scalars['String']['output']>;
    preferredEntryPerUser?: Maybe<Scalars['Int']['output']>;
    preferredFrequency?: Maybe<Scalars['String']['output']>;
    preferredOnDisplay?: Maybe<Scalars['Int']['output']>;
    preferredRewardPerUser?: Maybe<Scalars['Int']['output']>;
    preferredTime?: Maybe<Scalars['Int']['output']>;
    questions: Array<QuizQuestion>;
    rewards: Array<QuizReward>;
    startAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type QuizCanIArgs = {
  action: CanIAction;
};

export type QuizAnswer = BaseModelInterface &
  Node & {
    __typename?: 'QuizAnswer';
    body?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    score?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type QuizAnswerCanIArgs = {
  action: CanIAction;
};

export type QuizQuestion = BaseModelInterface &
  Node & {
    __typename?: 'QuizQuestion';
    answers: Array<QuizAnswer>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    question: QuizQuestion;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type QuizQuestionCanIArgs = {
  action: CanIAction;
};

export type QuizResult = BaseModelInterface &
  Node & {
    __typename?: 'QuizResult';
    answers?: Maybe<Array<QuizAnswer>>;
    availableRewards?: Maybe<Scalars['Int']['output']>;
    canI: Scalars['Boolean']['output'];
    claimedRewards?: Maybe<Scalars['Int']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    finalScore?: Maybe<Scalars['Int']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    possibleRewards?: Maybe<Array<QuizReward>>;
    rewards?: Maybe<Array<QuizReward>>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    winnerStatus?: Maybe<Scalars['Boolean']['output']>;
  };

export type QuizResultCanIArgs = {
  action: CanIAction;
};

export type QuizReward = BaseModelInterface &
  Node & {
    __typename?: 'QuizReward';
    availableFrom?: Maybe<Scalars['ISO8601DateTime']['output']>;
    availableUntil?: Maybe<Scalars['ISO8601DateTime']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    maxScore?: Maybe<Scalars['Int']['output']>;
    minScore?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type QuizRewardCanIArgs = {
  action: CanIAction;
};

export type RecentlyViewedListing = BaseModelInterface &
  Node & {
    __typename?: 'RecentlyViewedListing';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    listing: Listing;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    viewCount: Scalars['Int']['output'];
  };

export type RecentlyViewedListingCanIArgs = {
  action: CanIAction;
};

export type RecentlyViewedListingConnection = {
  __typename?: 'RecentlyViewedListingConnection';
  edges: Array<RecentlyViewedListingEdge>;
  nodes: Array<RecentlyViewedListing>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type RecentlyViewedListingConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type RecentlyViewedListingEdge = {
  __typename?: 'RecentlyViewedListingEdge';
  cursor: Scalars['String']['output'];
  node: RecentlyViewedListing;
};

export type Regex = Node &
  RuleInterface & {
    __typename?: 'Regex';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredRegex: Scalars['String']['output'];
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type Relatable = Product | Vendor;

export type RelatableTo = Product | Vendor;

export type Relation = BaseModelInterface &
  Node & {
    __typename?: 'Relation';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    discountAmount?: Maybe<Scalars['Float']['output']>;
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    position?: Maybe<Scalars['String']['output']>;
    relatable?: Maybe<Relatable>;
    relatedTo?: Maybe<RelatableTo>;
    relationType: RelationType;
    startAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
    websiteId?: Maybe<Scalars['ID']['output']>;
  };

export type RelationCanIArgs = {
  action: CanIAction;
};

export type RelationConnection = {
  __typename?: 'RelationConnection';
  edges: Array<RelationEdge>;
  nodes: Array<Relation>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type RelationConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type RelationEdge = {
  __typename?: 'RelationEdge';
  cursor: Scalars['String']['output'];
  node: Relation;
};

export type RelationFilter = {
  createdAt?: InputMaybe<DateFilter>;
  discountAmount?: InputMaybe<IntFilter>;
  expireAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  position?: InputMaybe<IntFilter>;
  relatedSku?: InputMaybe<StringFilter>;
  relatedToSku?: InputMaybe<StringFilter>;
  relationType?: InputMaybe<RelationTypeFilter>;
  relationTypeId?: InputMaybe<IdFilter>;
  startAt?: InputMaybe<DateFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
  websiteId?: InputMaybe<IdFilter>;
};

export type RelationType = BaseModelInterface &
  Node & {
    __typename?: 'RelationType';
    appliesTo: Scalars['String']['output'];
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type RelationTypeCanIArgs = {
  action: CanIAction;
};

export type RelationTypeFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Replenish = BaseModelInterface &
  CalculatorInterface &
  Node & {
    __typename?: 'Replenish';
    calculableId?: Maybe<Scalars['Int']['output']>;
    calculableType?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredAmount: Scalars['Float']['output'];
    preferredSegmentId: Scalars['ID']['output'];
    preferredSkuList: Scalars['String']['output'];
    skuList: Array<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type ReplenishCanIArgs = {
  action: CanIAction;
};

export type Report = BaseModelInterface &
  Node & {
    __typename?: 'Report';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    message?: Maybe<Scalars['String']['output']>;
    reportReason?: Maybe<ReportReason>;
    status?: Maybe<Scalars['String']['output']>;
    target?: Maybe<ReportTarget>;
    targetId?: Maybe<Scalars['ID']['output']>;
    targetType?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    website?: Maybe<Website>;
  };

export type ReportCanIArgs = {
  action: CanIAction;
};

export type ReportConnection = {
  __typename?: 'ReportConnection';
  edges: Array<ReportEdge>;
  nodes: Array<Report>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type ReportConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type ReportEdge = {
  __typename?: 'ReportEdge';
  cursor: Scalars['String']['output'];
  node: Report;
};

export type ReportReason = BaseModelInterface &
  Node & {
    __typename?: 'ReportReason';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    position?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type ReportReasonCanIArgs = {
  action: CanIAction;
};

export type ReportReasonFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type ReportTarget = User | Vendor;

export type ReportsFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  message?: InputMaybe<StringFilter>;
  reportReason?: InputMaybe<ReportReasonFilter>;
  reportReasonId?: InputMaybe<IntFilter>;
  targetId?: InputMaybe<IntFilter>;
  targetType?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userFirstNameOrUserMobileOrUserEmail?: InputMaybe<StringFilter>;
  withStatus?: InputMaybe<StringFilter>;
  withTargetKinds?: InputMaybe<StringFilter>;
  withTargets?: InputMaybe<StringFilter>;
};

export type ReturnItem = BaseModelInterface &
  Node & {
    __typename?: 'ReturnItem';
    acceptanceStatus?: Maybe<Scalars['String']['output']>;
    acceptanceStatusErrors?: Maybe<Scalars['String']['output']>;
    additionalTaxTotal: Scalars['Float']['output'];
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    customerReturnId?: Maybe<Scalars['ID']['output']>;
    exchangeVariant?: Maybe<Variant>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    includedTaxTotal: Scalars['Float']['output'];
    inventoryUnit?: Maybe<InventoryUnit>;
    overrideReimbursementTypeId?: Maybe<Scalars['ID']['output']>;
    preTaxAmount: Scalars['Float']['output'];
    preferredReimbursementTypeId?: Maybe<Scalars['ID']['output']>;
    receptionStatus?: Maybe<Scalars['String']['output']>;
    reimbursementId?: Maybe<Scalars['ID']['output']>;
    resellable: Scalars['Boolean']['output'];
    returnAuthorizationId?: Maybe<Scalars['ID']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type ReturnItemCanIArgs = {
  action: CanIAction;
};

export type Review = BaseModelInterface &
  Node & {
    __typename?: 'Review';
    canI: Scalars['Boolean']['output'];
    comment?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    images: Array<Scalars['String']['output']>;
    rating: Scalars['Float']['output'];
    reviewable?: Maybe<Reviewable>;
    reviewableId: Scalars['ID']['output'];
    reviewableType: Scalars['String']['output'];
    source?: Maybe<ReviewSourceType>;
    sourceId?: Maybe<Scalars['ID']['output']>;
    sourceType?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user: User;
    website: Website;
  };

export type ReviewCanIArgs = {
  action: CanIAction;
};

export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  edges: Array<ReviewEdge>;
  nodes: Array<Review>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type ReviewConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  cursor: Scalars['String']['output'];
  node: Review;
};

export type ReviewSourceType = Order;

export type Reviewable = Article | Brand | Comment | Listing | Product | User | Vendor;

export type ReviewsFilter = {
  comment?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  rating?: InputMaybe<StringFilter>;
  reviewableId?: InputMaybe<IntFilter>;
  reviewableType?: InputMaybe<StringFilter>;
  sourceId?: InputMaybe<IdFilter>;
  sourceType?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  userFirstNameOrUserMobileOrUserEmail?: InputMaybe<StringFilter>;
  withReviewableKinds?: InputMaybe<StringFilter>;
  withReviewables?: InputMaybe<StringFilter>;
};

export type Room = BaseModelInterface &
  Node & {
    __typename?: 'Room';
    adminRead: Scalars['Boolean']['output'];
    around?: Maybe<Around>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    hasSeen?: Maybe<Scalars['Boolean']['output']>;
    id: Scalars['ID']['output'];
    lastMessage?: Maybe<Message>;
    lastMessageId?: Maybe<Scalars['ID']['output']>;
    members: Array<Member>;
    messageCount?: Maybe<Scalars['Int']['output']>;
    messages: MessageConnection;
    status?: Maybe<Scalars['String']['output']>;
    test?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    unseen?: Maybe<Scalars['Boolean']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type RoomCanIArgs = {
  action: CanIAction;
};

export type RoomMessagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type RoomConnection = {
  __typename?: 'RoomConnection';
  edges: Array<RoomEdge>;
  nodes: Array<Room>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type RoomConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type RoomEdge = {
  __typename?: 'RoomEdge';
  cursor: Scalars['String']['output'];
  node: Room;
};

export type RoomFilter = {
  aroundWebsiteId?: InputMaybe<IdFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  members?: InputMaybe<MemberFilter>;
  membersUserMobileOrMembersUserFirstName?: InputMaybe<StringFilter>;
  messages?: InputMaybe<MessageFilter>;
  productId?: InputMaybe<IntFilter>;
  productVendorId?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userEmailOrUserMobileOrUserFirstName?: InputMaybe<StringFilter>;
  userId?: InputMaybe<IdFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type RuleInterface = {
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  productGroupId?: Maybe<Scalars['ID']['output']>;
  promotion: Promotion;
  promotionId: Scalars['ID']['output'];
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  userId?: Maybe<Scalars['ID']['output']>;
};

export type SalePrice = BaseModelInterface &
  Node & {
    __typename?: 'SalePrice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    createdBy?: Maybe<User>;
    currency?: Maybe<Scalars['String']['output']>;
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    eventLabel?: Maybe<Scalars['String']['output']>;
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    forceOthers?: Maybe<Scalars['Boolean']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isEvent?: Maybe<Scalars['Boolean']['output']>;
    position?: Maybe<Scalars['Int']['output']>;
    qty?: Maybe<Scalars['Int']['output']>;
    segment?: Maybe<SupplySegment>;
    segmentId?: Maybe<Scalars['ID']['output']>;
    startAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    stockLocation?: Maybe<StockLocation>;
    stockLocationId?: Maybe<Scalars['ID']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variant: Variant;
    variantId: Scalars['String']['output'];
    website?: Maybe<Website>;
    websiteId?: Maybe<Scalars['ID']['output']>;
  };

export type SalePriceCanIArgs = {
  action: CanIAction;
};

export type Screen = BaseModelInterface &
  Node & {
    __typename?: 'Screen';
    canI: Scalars['Boolean']['output'];
    cinema: Cinema;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    idx?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    svg?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type ScreenCanIArgs = {
  action: CanIAction;
};

export type Segment = BaseModelInterface &
  Node & {
    __typename?: 'Segment';
    canI: Scalars['Boolean']['output'];
    contactCount?: Maybe<Scalars['Int']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    operator?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type SegmentCanIArgs = {
  action: CanIAction;
};

export type SegmentClient = BaseModelInterface &
  Node & {
    __typename?: 'SegmentClient';
    canI: Scalars['Boolean']['output'];
    client: BusinessClient;
    createdAt: Scalars['ISO8601DateTime']['output'];
    data: Scalars['JSON']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    segment: SupplySegment;
    segmentedAt: Scalars['ISO8601Date']['output'];
    status: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type SegmentClientCanIArgs = {
  action: CanIAction;
};

export type SegmentClientConnection = {
  __typename?: 'SegmentClientConnection';
  edges: Array<SegmentClientEdge>;
  nodes: Array<SegmentClient>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type SegmentClientConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type SegmentClientEdge = {
  __typename?: 'SegmentClientEdge';
  cursor: Scalars['String']['output'];
  node: SegmentClient;
};

export type SegmentClientFilter = {
  client?: InputMaybe<BusinessClientFilter>;
  clientId?: InputMaybe<IdFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  segment?: InputMaybe<SupplySegmentFilter>;
  segmentId?: InputMaybe<IdFilter>;
  segmentedAt?: InputMaybe<DateFilter>;
  status?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type SegmentWhiteList = BaseModelInterface &
  Node & {
    __typename?: 'SegmentWhiteList';
    canI: Scalars['Boolean']['output'];
    company?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    email?: Maybe<Scalars['String']['output']>;
    entries: Array<WhiteListEntry>;
    entriesCount: Scalars['Int']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    lastEntryDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    mobile?: Maybe<Scalars['String']['output']>;
    referral?: Maybe<User>;
    registerNo: Scalars['String']['output'];
    segment: SupplySegment;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type SegmentWhiteListCanIArgs = {
  action: CanIAction;
};

export type SegmentWhiteListConnection = {
  __typename?: 'SegmentWhiteListConnection';
  edges: Array<SegmentWhiteListEdge>;
  nodes: Array<SegmentWhiteList>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type SegmentWhiteListConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type SegmentWhiteListEdge = {
  __typename?: 'SegmentWhiteListEdge';
  cursor: Scalars['String']['output'];
  node: SegmentWhiteList;
};

export type SegmentWhiteListFilter = {
  company?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  entries?: InputMaybe<WhiteListEntryFilter>;
  id?: InputMaybe<IdFilter>;
  mobile?: InputMaybe<StringFilter>;
  referral?: InputMaybe<UserFilter>;
  referralId?: InputMaybe<IdFilter>;
  registerNo?: InputMaybe<StringFilter>;
  segment?: InputMaybe<SupplySegmentFilter>;
  segmentId?: InputMaybe<IdFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type SegmentWhiteListReport = BaseModelInterface &
  Node & {
    __typename?: 'SegmentWhiteListReport';
    canI: Scalars['Boolean']['output'];
    created?: Maybe<Scalars['Int']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    createdBy?: Maybe<User>;
    createdById?: Maybe<Scalars['ID']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    skipped?: Maybe<Scalars['Int']['output']>;
    total?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type SegmentWhiteListReportCanIArgs = {
  action: CanIAction;
};

export type SendErpLoyaltyRequestInput = {
  address: Scalars['String']['input'];
  birthDate: Scalars['String']['input'];
  cardId: Scalars['String']['input'];
  cardPassword: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  customerName: Scalars['String']['input'];
  customerParentName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  maritalStatus: Scalars['String']['input'];
  mobilePhone: Scalars['String']['input'];
  note: Scalars['String']['input'];
  registerNumber: Scalars['String']['input'];
  workAddress: Scalars['String']['input'];
};

export type Series = BaseModelInterface &
  Node & {
    __typename?: 'Series';
    canI: Scalars['Boolean']['output'];
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    no?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendor?: Maybe<Vendor>;
  };

export type SeriesCanIArgs = {
  action: CanIAction;
};

export type Session = Node & {
  __typename?: 'Session';
  attributes?: Maybe<Array<Scalars['String']['output']>>;
  cinema: Cinema;
  date?: Maybe<Scalars['ISO8601Date']['output']>;
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  movie: Movie;
  screen: Screen;
  seatPlan?: Maybe<Scalars['JSON']['output']>;
  seatsAvailable?: Maybe<Scalars['Int']['output']>;
  tickets?: Maybe<Scalars['JSON']['output']>;
  time?: Maybe<Scalars['String']['output']>;
};

export type Shipment = BaseModelInterface &
  Node & {
    __typename?: 'Shipment';
    additionalTaxTotal?: Maybe<Scalars['Float']['output']>;
    address?: Maybe<Address>;
    adjustmentTotal?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    cargoCost?: Maybe<Scalars['Float']['output']>;
    cost?: Maybe<Scalars['Float']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    deliveryPhoto?: Maybe<Scalars['String']['output']>;
    deliveryPhoto1?: Maybe<Scalars['String']['output']>;
    digital: Scalars['Boolean']['output'];
    dueDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    includedTaxTotal: Scalars['Float']['output'];
    inventoryUnits: Array<InventoryUnit>;
    itemTotal: Scalars['Float']['output'];
    lineItemManifest: Array<ShipmentManifest>;
    manifest: Array<ShipmentManifest>;
    nonTaxableAdjustmentTotal?: Maybe<Scalars['Float']['output']>;
    number: Scalars['String']['output'];
    order?: Maybe<Order>;
    packedByEmail?: Maybe<Scalars['String']['output']>;
    pinCode?: Maybe<Scalars['String']['output']>;
    preTaxAmount: Scalars['Float']['output'];
    promoTotal?: Maybe<Scalars['Float']['output']>;
    selectedShippingRate?: Maybe<ShippingRate>;
    shippedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    shippedBy?: Maybe<User>;
    shipper?: Maybe<Shipper>;
    shippingMethods?: Maybe<Array<ShippingMethod>>;
    signature?: Maybe<Scalars['String']['output']>;
    state?: Maybe<Scalars['String']['output']>;
    step: Scalars['Int']['output'];
    stockLocation?: Maybe<StockLocation>;
    taxableAdjustmentTotal?: Maybe<Scalars['Float']['output']>;
    tracking?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    weight?: Maybe<Scalars['Float']['output']>;
  };

export type ShipmentCanIArgs = {
  action: CanIAction;
};

export type ShipmentConnection = {
  __typename?: 'ShipmentConnection';
  edges: Array<ShipmentEdge>;
  nodes: Array<Shipment>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type ShipmentConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type ShipmentEdge = {
  __typename?: 'ShipmentEdge';
  cursor: Scalars['String']['output'];
  node: Shipment;
};

export type ShipmentFilter = {
  address?: InputMaybe<AddressFilter>;
  cost?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  inventoryUnits?: InputMaybe<InventoryUnitFilter>;
  number?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderFilter>;
  shippedAt?: InputMaybe<DateFilter>;
  shippedBy?: InputMaybe<UserFilter>;
  shippedById?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  step?: InputMaybe<IntFilter>;
  stockLocations?: InputMaybe<StockLocationFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type ShipmentInventoryUnitStatusType = BaseModelInterface &
  Node & {
    __typename?: 'ShipmentInventoryUnitStatusType';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    quantity?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type ShipmentInventoryUnitStatusTypeCanIArgs = {
  action: CanIAction;
};

export type ShipmentLineItemStatusType = BaseModelInterface &
  Node & {
    __typename?: 'ShipmentLineItemStatusType';
    adjustmentTotal?: Maybe<Scalars['Int']['output']>;
    amount: Scalars['Int']['output'];
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    inventoryUnits: Array<ShipmentInventoryUnitStatusType>;
    price: Scalars['Int']['output'];
    productCat?: Maybe<Scalars['String']['output']>;
    quantity: Scalars['Int']['output'];
    sellingPrice: Scalars['Int']['output'];
    /** @deprecated Use shipment instead */
    shipper?: Maybe<Shipper>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variant: Variant;
  };

export type ShipmentLineItemStatusTypeCanIArgs = {
  action: CanIAction;
};

export type ShipmentManifest = Node & {
  __typename?: 'ShipmentManifest';
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  lineItem: LineItem;
  part?: Maybe<Scalars['Boolean']['output']>;
  product: Product;
  quantity: Scalars['Int']['output'];
  states: Scalars['JSON']['output'];
  total: Scalars['Float']['output'];
  units: Array<InventoryUnit>;
  variant: Variant;
};

export type ShipmentTracking = BaseModelInterface &
  Node & {
    __typename?: 'ShipmentTracking';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    order: Order;
    orderId: Scalars['ID']['output'];
    pending: Scalars['Boolean']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    refreshedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    target?: Maybe<TrackingTarget>;
    targetId?: Maybe<Scalars['ID']['output']>;
    targetType?: Maybe<Scalars['String']['output']>;
    trackingNumber?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type ShipmentTrackingCanIArgs = {
  action: CanIAction;
};

export type ShipmentTrackingConnection = {
  __typename?: 'ShipmentTrackingConnection';
  edges: Array<ShipmentTrackingEdge>;
  nodes: Array<ShipmentTracking>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type ShipmentTrackingConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type ShipmentTrackingEdge = {
  __typename?: 'ShipmentTrackingEdge';
  cursor: Scalars['String']['output'];
  node: ShipmentTracking;
};

export type ShipmentTrackingFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  order?: InputMaybe<OrderFilter>;
  trackingNumber?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export enum ShipmentTransfer {
  Location = 'location',
  Shipment = 'shipment',
}

export type Shipper = BaseModelInterface &
  Node & {
    __typename?: 'Shipper';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    logo?: Maybe<Scalars['String']['output']>;
    methodsCount: Scalars['Int']['output'];
    name?: Maybe<Scalars['String']['output']>;
    phoneNumber?: Maybe<Scalars['String']['output']>;
    shipments: ShipmentConnection;
    shippingMethods: ShippingMethodConnection;
    status?: Maybe<Scalars['String']['output']>;
    taxer: Scalars['Boolean']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendor?: Maybe<Vendor>;
    website: Website;
  };

export type ShipperCanIArgs = {
  action: CanIAction;
};

export type ShipperShipmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShipmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type ShipperShippingMethodsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShippingMethodFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type ShipperConnection = {
  __typename?: 'ShipperConnection';
  edges: Array<ShipperEdge>;
  nodes: Array<Shipper>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type ShipperConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type ShipperEdge = {
  __typename?: 'ShipperEdge';
  cursor: Scalars['String']['output'];
  node: Shipper;
};

export type ShipperManifest = BaseModelInterface &
  Node & {
    __typename?: 'ShipperManifest';
    canI: Scalars['Boolean']['output'];
    cost: Scalars['Float']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    logo?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    phoneNumber?: Maybe<Scalars['String']['output']>;
    shipments: Array<Shipment>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type ShipperManifestCanIArgs = {
  action: CanIAction;
};

export type ShippingCategory = BaseModelInterface &
  Node & {
    __typename?: 'ShippingCategory';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    shippingMethods: Array<ShippingMethod>;
    step: Scalars['Int']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type ShippingCategoryCanIArgs = {
  action: CanIAction;
};

export type ShippingCategoryFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  step?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type ShippingMethod = BaseModelInterface &
  Node & {
    __typename?: 'ShippingMethod';
    adminName?: Maybe<Scalars['String']['output']>;
    calculatorAttributes?: Maybe<Scalars['JSON']['output']>;
    calculatorType?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    channel?: Maybe<Scalars['String']['output']>;
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    displayOn?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    logo?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    shipper?: Maybe<Shipper>;
    shipperId?: Maybe<Scalars['ID']['output']>;
    shippingCategories: Array<ShippingCategory>;
    shippingCategoryIds: Array<Scalars['ID']['output']>;
    step: Scalars['Int']['output'];
    taxCategoryId?: Maybe<Scalars['ID']['output']>;
    trackingUrl?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
    zoneIds: Array<Scalars['ID']['output']>;
    zones: Array<Zone>;
  };

export type ShippingMethodCanIArgs = {
  action: CanIAction;
};

export type ShippingMethodConnection = {
  __typename?: 'ShippingMethodConnection';
  edges: Array<ShippingMethodEdge>;
  nodes: Array<ShippingMethod>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type ShippingMethodConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type ShippingMethodEdge = {
  __typename?: 'ShippingMethodEdge';
  cursor: Scalars['String']['output'];
  node: ShippingMethod;
};

export type ShippingMethodFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  shippingCategoriesId?: InputMaybe<IdFilter>;
  step?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type ShippingRate = BaseModelInterface &
  Node & {
    __typename?: 'ShippingRate';
    canI: Scalars['Boolean']['output'];
    cost?: Maybe<Scalars['Float']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    displayCost?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    selected?: Maybe<Scalars['Boolean']['output']>;
    shipment?: Maybe<Shipment>;
    shippingMethod?: Maybe<ShippingMethod>;
    taxRateId?: Maybe<Scalars['ID']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type ShippingRateCanIArgs = {
  action: CanIAction;
};

export type ShopifyAction = ActionInterface &
  Node & {
    __typename?: 'ShopifyAction';
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
  };

export type ShopifyRule = Node &
  RuleInterface & {
    __typename?: 'ShopifyRule';
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    productGroupId?: Maybe<Scalars['ID']['output']>;
    promotion: Promotion;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export enum ShopperCartItemAction {
  Collect = 'collect',
  Discard = 'discard',
  Partial = 'partial',
  PickVariant = 'pick_variant',
  SwapRequest = 'swap_request',
}

export type ShoppyCampaign = BaseModelInterface &
  Node & {
    __typename?: 'ShoppyCampaign';
    campaignListings: CampaignListingConnection;
    canI: Scalars['Boolean']['output'];
    cover?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    endsAt: Scalars['ISO8601DateTime']['output'];
    fulfillDate?: Maybe<Scalars['ISO8601Date']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    itemsCount: Scalars['Int']['output'];
    listingsCount: Scalars['Int']['output'];
    location?: Maybe<Scalars['String']['output']>;
    maxItemsCount: Scalars['Int']['output'];
    minItemsCount: Scalars['Int']['output'];
    startsAt: Scalars['ISO8601DateTime']['output'];
    status: Scalars['String']['output'];
    title: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variants: VariantConnection;
    vendor: Vendor;
    website: Website;
  };

export type ShoppyCampaignCampaignListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CampaignListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type ShoppyCampaignCanIArgs = {
  action: CanIAction;
};

export type ShoppyCampaignVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VariantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  permission?: InputMaybe<VariantsPermission>;
  sort?: InputMaybe<SortFilter>;
};

export type ShoppyCampaignConnection = {
  __typename?: 'ShoppyCampaignConnection';
  edges: Array<ShoppyCampaignEdge>;
  nodes: Array<ShoppyCampaign>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type ShoppyCampaignConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type ShoppyCampaignEdge = {
  __typename?: 'ShoppyCampaignEdge';
  cursor: Scalars['String']['output'];
  node: ShoppyCampaign;
};

export type ShoppyForm = BaseModelInterface &
  Node & {
    __typename?: 'ShoppyForm';
    active?: Maybe<Scalars['Boolean']['output']>;
    canI: Scalars['Boolean']['output'];
    cover?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    createdBy?: Maybe<User>;
    data?: Maybe<Scalars['JSON']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    entries: Array<ShoppyFormEntry>;
    fieldLabels?: Maybe<Array<Scalars['String']['output']>>;
    fields: Array<ShoppyFormField>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    permalink?: Maybe<Scalars['String']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type ShoppyFormCanIArgs = {
  action: CanIAction;
};

export type ShoppyFormEntriesArgs = {
  filter?: InputMaybe<FormEntryFilter>;
};

export type ShoppyFormAnswer = BaseModelInterface &
  Node & {
    __typename?: 'ShoppyFormAnswer';
    body?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    entry: ShoppyFormEntry;
    field: ShoppyFormField;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type ShoppyFormAnswerCanIArgs = {
  action: CanIAction;
};

export type ShoppyFormConnection = {
  __typename?: 'ShoppyFormConnection';
  edges: Array<ShoppyFormEdge>;
  nodes: Array<ShoppyForm>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type ShoppyFormConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type ShoppyFormEdge = {
  __typename?: 'ShoppyFormEdge';
  cursor: Scalars['String']['output'];
  node: ShoppyForm;
};

export type ShoppyFormEntry = BaseModelInterface &
  Node & {
    __typename?: 'ShoppyFormEntry';
    answers: Array<ShoppyFormAnswer>;
    availableFields?: Maybe<Scalars['JSON']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    form: ShoppyForm;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    note?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    website: Website;
  };

export type ShoppyFormEntryCanIArgs = {
  action: CanIAction;
};

export type ShoppyFormField = BaseModelInterface &
  Node & {
    __typename?: 'ShoppyFormField';
    active: Scalars['Boolean']['output'];
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    fieldType?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    label?: Maybe<Scalars['String']['output']>;
    position?: Maybe<Scalars['Int']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type ShoppyFormFieldCanIArgs = {
  action: CanIAction;
};

export type ShoppyImageFilter = {
  attachmentContentType?: InputMaybe<StringFilter>;
  attachmentFileName?: InputMaybe<StringFilter>;
  attachmentFileSize?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  vendor?: InputMaybe<VendorFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type ShoppyTrackableFilter = {
  acceptedOrderCount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  isAvailable?: InputMaybe<BoolFilter>;
  latitude?: InputMaybe<StringFilter>;
  longitude?: InputMaybe<StringFilter>;
  orderCount?: InputMaybe<IntFilter>;
  rejectedOrderCount?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type SimpleInAppInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'SimpleInAppInvoice';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceId?: Maybe<Scalars['String']['output']>;
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type SimpleInAppInvoiceCanIArgs = {
  action: CanIAction;
};

export type SimpleInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'SimpleInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceId?: Maybe<Scalars['String']['output']>;
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    qrLink?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type SimpleInvoiceCanIArgs = {
  action: CanIAction;
};

export type SizingGuide = BaseModelInterface &
  Node & {
    __typename?: 'SizingGuide';
    ageGroup?: Maybe<Scalars['String']['output']>;
    brand?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    csv?: Maybe<Scalars['JSON']['output']>;
    data?: Maybe<Scalars['String']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    gender?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    grouping?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    store?: Maybe<Brand>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendor?: Maybe<Vendor>;
  };

export type SizingGuideCanIArgs = {
  action: CanIAction;
};

export type SizingGuideConnection = {
  __typename?: 'SizingGuideConnection';
  edges: Array<SizingGuideEdge>;
  nodes: Array<SizingGuide>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type SizingGuideConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type SizingGuideEdge = {
  __typename?: 'SizingGuideEdge';
  cursor: Scalars['String']['output'];
  node: SizingGuide;
};

export type SizingGuideFilter = {
  ageGroup?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  gender?: InputMaybe<StringFilter>;
  grouping?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  store?: InputMaybe<BrandFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  vendor?: InputMaybe<VendorFilter>;
  withListing?: InputMaybe<StringFilter>;
};

export type Sms = BaseModelInterface &
  Node & {
    __typename?: 'Sms';
    canI: Scalars['Boolean']['output'];
    content?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    expireAfter?: Maybe<Scalars['Int']['output']>;
    from?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    operator?: Maybe<Scalars['String']['output']>;
    price?: Maybe<Scalars['Float']['output']>;
    sender?: Maybe<Scalars['String']['output']>;
    sentAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    sourceId?: Maybe<Scalars['ID']['output']>;
    sourceType?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    to?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type SmsCanIArgs = {
  action: CanIAction;
};

export type SmsConnection = {
  __typename?: 'SmsConnection';
  edges: Array<SmsEdge>;
  nodes: Array<Sms>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type SmsConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type SmsEdge = {
  __typename?: 'SmsEdge';
  cursor: Scalars['String']['output'];
  node: Sms;
};

export type SmsFilter = {
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  from?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  operator?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntFilter>;
  sender?: InputMaybe<StringFilter>;
  sentAt?: InputMaybe<DateFilter>;
  status?: InputMaybe<StringFilter>;
  to?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type SonoInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'SonoInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceId?: Maybe<Scalars['String']['output']>;
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    qrString?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type SonoInvoiceCanIArgs = {
  action: CanIAction;
};

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type SortFilter = {
  direction?: InputMaybe<SortDirection | `${SortDirection}`>;
  field: Scalars['String']['input'];
};

export type Source =
  | Bank
  | BankTransaction
  | Employee
  | GiftCard
  | InvitationAccept
  | LineItem
  | Order
  | Payment
  | PaymentMethod
  | Transaction
  | User
  | Website;

export type Stage = BaseModelInterface &
  Node & {
    __typename?: 'Stage';
    blocks?: Maybe<Array<Scalars['String']['output']>>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    locks?: Maybe<Array<Scalars['String']['output']>>;
    name?: Maybe<Scalars['String']['output']>;
    pending: Array<Scalars['String']['output']>;
    product?: Maybe<Product>;
    seats?: Maybe<Array<Scalars['String']['output']>>;
    sold: Array<Scalars['String']['output']>;
    svg?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variation?: Maybe<Scalars['JSON']['output']>;
    views?: Maybe<Scalars['JSON']['output']>;
  };

export type StageCanIArgs = {
  action: CanIAction;
};

export type StagePendingArgs = {
  cart?: InputMaybe<Scalars['Boolean']['input']>;
};

export type State = Node & {
  __typename?: 'State';
  abbr?: Maybe<Scalars['String']['output']>;
  children: Array<District>;
  country?: Maybe<Country>;
  districts: Array<District>;
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

export type StateChange = BaseModelInterface &
  Node & {
    __typename?: 'StateChange';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    nextState?: Maybe<Scalars['String']['output']>;
    previousState?: Maybe<Scalars['String']['output']>;
    statefulId?: Maybe<Scalars['ID']['output']>;
    statefulType?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
  };

export type StateChangeCanIArgs = {
  action: CanIAction;
};

export type StateConnection = {
  __typename?: 'StateConnection';
  edges: Array<StateEdge>;
  nodes: Array<State>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type StateConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type StateEdge = {
  __typename?: 'StateEdge';
  cursor: Scalars['String']['output'];
  node: State;
};

export type StateFilter = {
  countryId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type StaticRate = BaseModelInterface &
  CalculatorInterface &
  Node & {
    __typename?: 'StaticRate';
    calculableId?: Maybe<Scalars['Int']['output']>;
    calculableType?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredAmount: Scalars['Float']['output'];
    preferredCurrency: Scalars['String']['output'];
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type StaticRateCanIArgs = {
  action: CanIAction;
};

export type StockCountType = BaseModelInterface &
  Node & {
    __typename?: 'StockCountType';
    backorderable: Scalars['Boolean']['output'];
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    onHand: Scalars['Int']['output'];
    stockLocation?: Maybe<StockLocation>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type StockCountTypeCanIArgs = {
  action: CanIAction;
};

export type StockItem = BaseModelInterface &
  Node & {
    __typename?: 'StockItem';
    backorderable?: Maybe<Scalars['Boolean']['output']>;
    canI: Scalars['Boolean']['output'];
    countOnHand: Scalars['Int']['output'];
    /** @deprecated Will be removed in future */
    countOnStockLocation: Scalars['Int']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    stockLocation?: Maybe<StockLocation>;
    stockLocationId?: Maybe<Scalars['ID']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variant?: Maybe<Variant>;
  };

export type StockItemCanIArgs = {
  action: CanIAction;
};

export type StockItemConnection = {
  __typename?: 'StockItemConnection';
  edges: Array<StockItemEdge>;
  nodes: Array<StockItem>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type StockItemConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type StockItemEdge = {
  __typename?: 'StockItemEdge';
  cursor: Scalars['String']['output'];
  node: StockItem;
};

export type StockItemFilter = {
  address1?: InputMaybe<StringFilter>;
  adminName?: InputMaybe<StringFilter>;
  backorderable?: InputMaybe<BoolFilter>;
  countOnHand?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  stockLocation?: InputMaybe<StockLocationFilter>;
  storeLocation?: InputMaybe<StoreLocationFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  vendor?: InputMaybe<VendorFilter>;
};

export type StockLocation = BaseModelInterface &
  Node & {
    __typename?: 'StockLocation';
    active?: Maybe<Scalars['Boolean']['output']>;
    address1?: Maybe<Scalars['String']['output']>;
    address2?: Maybe<Scalars['String']['output']>;
    adminName?: Maybe<Scalars['String']['output']>;
    backorderableDefault?: Maybe<Scalars['Boolean']['output']>;
    canI: Scalars['Boolean']['output'];
    city?: Maybe<Scalars['String']['output']>;
    code?: Maybe<Scalars['String']['output']>;
    countryId?: Maybe<Scalars['ID']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    default: Scalars['Boolean']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    preferredAccountIban?: Maybe<Scalars['String']['output']>;
    preferredAccountName?: Maybe<Scalars['String']['output']>;
    preferredAccountNumber?: Maybe<Scalars['String']['output']>;
    propagateAllVariants?: Maybe<Scalars['Boolean']['output']>;
    stateId?: Maybe<Scalars['ID']['output']>;
    stateName?: Maybe<Scalars['String']['output']>;
    stockCount?: Maybe<StockCountType>;
    storeLocation?: Maybe<StoreLocation>;
    timeSheets?: Maybe<Scalars['JSON']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendor?: Maybe<Vendor>;
    zipcode?: Maybe<Scalars['String']['output']>;
  };

export type StockLocationCanIArgs = {
  action: CanIAction;
};

export type StockLocationStockCountArgs = {
  excludeOrderId?: InputMaybe<Scalars['ID']['input']>;
  variantId: Scalars['ID']['input'];
};

export type StockLocationConnection = {
  __typename?: 'StockLocationConnection';
  edges: Array<StockLocationEdge>;
  nodes: Array<StockLocation>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type StockLocationConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type StockLocationEdge = {
  __typename?: 'StockLocationEdge';
  cursor: Scalars['String']['output'];
  node: StockLocation;
};

export type StockLocationFilter = {
  active?: InputMaybe<BoolFilter>;
  address1?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  default?: InputMaybe<BoolFilter>;
  id?: InputMaybe<IdFilter>;
  listings?: InputMaybe<ListingFilter>;
  name?: InputMaybe<StringFilter>;
  nameOrAdminName?: InputMaybe<StringFilter>;
  storeLocation?: InputMaybe<StoreLocationFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  withProduct?: InputMaybe<StringFilter>;
};

export type StoreCredit = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'StoreCredit';
    amount?: Maybe<Scalars['Float']['output']>;
    amountUsed?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    category?: Maybe<StoreCreditCategory>;
    categoryId?: Maybe<Scalars['ID']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    currency?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    memo?: Maybe<Scalars['String']['output']>;
    originAmount?: Maybe<Scalars['JSON']['output']>;
    originText?: Maybe<Scalars['String']['output']>;
    originator?: Maybe<StoreCreditOriginator>;
    originatorId?: Maybe<Scalars['ID']['output']>;
    originatorType?: Maybe<Scalars['String']['output']>;
    payments: Array<Payment>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type StoreCreditCanIArgs = {
  action: CanIAction;
};

export type StoreCreditCategory = BaseModelInterface &
  Node & {
    __typename?: 'StoreCreditCategory';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    taxable: Scalars['Boolean']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type StoreCreditCategoryCanIArgs = {
  action: CanIAction;
};

export type StoreCreditConnection = {
  __typename?: 'StoreCreditConnection';
  edges: Array<StoreCreditEdge>;
  nodes: Array<StoreCredit>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type StoreCreditConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type StoreCreditEdge = {
  __typename?: 'StoreCreditEdge';
  cursor: Scalars['String']['output'];
  node: StoreCredit;
};

export type StoreCreditEvent = BaseModelInterface &
  Node & {
    __typename?: 'StoreCreditEvent';
    action: Scalars['String']['output'];
    amount: Scalars['Float']['output'];
    authorizationCode: Scalars['String']['output'];
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    order?: Maybe<Order>;
    originatorId?: Maybe<Scalars['ID']['output']>;
    originatorType?: Maybe<Scalars['String']['output']>;
    storeCredit: StoreCredit;
    storeCreditId: Scalars['ID']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userTotalAmount: Scalars['Float']['output'];
  };

export type StoreCreditEventCanIArgs = {
  action: CanIAction;
};

export type StoreCreditEventConnection = {
  __typename?: 'StoreCreditEventConnection';
  edges: Array<StoreCreditEventEdge>;
  nodes: Array<StoreCreditEvent>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type StoreCreditEventConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type StoreCreditEventEdge = {
  __typename?: 'StoreCreditEventEdge';
  cursor: Scalars['String']['output'];
  node: StoreCreditEvent;
};

export type StoreCreditEventFilter = {
  action?: InputMaybe<StringFilter>;
  amount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  storeCredit?: InputMaybe<StoreCreditFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userTotalAmount?: InputMaybe<IntFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type StoreCreditFilter = {
  amount?: InputMaybe<IntFilter>;
  amountAuthorized?: InputMaybe<StringFilter>;
  amountUsed?: InputMaybe<IntFilter>;
  categoryId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  memo?: InputMaybe<StringFilter>;
  originator?: InputMaybe<GiftCardFilter>;
  originatorId?: InputMaybe<IdFilter>;
  originatorType?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userEmailOrUserMobile?: InputMaybe<StringFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type StoreCreditOriginator = CorporateGateway | GiftCard | Order | User;

export type StoreCreditReport = BaseModelInterface &
  Node & {
    __typename?: 'StoreCreditReport';
    action?: Maybe<Scalars['String']['output']>;
    amount?: Maybe<Scalars['Float']['output']>;
    authorizationCode?: Maybe<Scalars['String']['output']>;
    byOriginUsedAmount?: Maybe<Scalars['JSON']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    number?: Maybe<Scalars['String']['output']>;
    storeCredit?: Maybe<StoreCredit>;
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userTotalAmount?: Maybe<Scalars['Float']['output']>;
  };

export type StoreCreditReportCanIArgs = {
  action: CanIAction;
};

export type StoreItem = {
  __typename?: 'StoreItem';
  countOnHand: Scalars['Int']['output'];
  storeLocation?: Maybe<StoreLocation>;
};

export type StoreListing = BaseModelInterface &
  Node & {
    __typename?: 'StoreListing';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    listing?: Maybe<Listing>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendor?: Maybe<Vendor>;
  };

export type StoreListingCanIArgs = {
  action: CanIAction;
};

export type StoreListingConnection = {
  __typename?: 'StoreListingConnection';
  edges: Array<StoreListingEdge>;
  nodes: Array<StoreListing>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type StoreListingConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type StoreListingEdge = {
  __typename?: 'StoreListingEdge';
  cursor: Scalars['String']['output'];
  node: StoreListing;
};

export type StoreListingFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  listing?: InputMaybe<ListingFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  vendor?: InputMaybe<VendorFilter>;
};

export type StoreListingInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  listingId: Scalars['ID']['input'];
  status: Scalars['String']['input'];
  vendorId: Scalars['ID']['input'];
};

export type StoreLocation = BaseModelInterface &
  Node & {
    __typename?: 'StoreLocation';
    address?: Maybe<Scalars['String']['output']>;
    audits: AuditConnection;
    brandNames?: Maybe<Scalars['String']['output']>;
    brands: BrandConnection;
    businessType?: Maybe<BusinessType>;
    canI: Scalars['Boolean']['output'];
    clientsStore?: Maybe<ClientsStore>;
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    departmentStore?: Maybe<DepartmentStore>;
    distance?: Maybe<Scalars['Float']['output']>;
    driverIds: Array<Scalars['ID']['output']>;
    drivers: Array<User>;
    employees?: Maybe<Array<AssetRole>>;
    externalStockLocationIds: Array<Scalars['ID']['output']>;
    floor?: Maybe<Scalars['Int']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    image?: Maybe<ImageVariation>;
    locationAddress?: Maybe<Address>;
    managerId?: Maybe<Scalars['ID']['output']>;
    map?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    photo?: Maybe<Scalars['String']['output']>;
    position?: Maybe<Scalars['Int']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    schedule?: Maybe<Scalars['JSON']['output']>;
    skips?: Maybe<Scalars['JSON']['output']>;
    stockLocationIds: Array<Scalars['ID']['output']>;
    stockLocations: StockLocationConnection;
    store?: Maybe<Brand>;
    timeSheets?: Maybe<Scalars['JSON']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendor?: Maybe<Vendor>;
    winterTimeSheets?: Maybe<Scalars['JSON']['output']>;
  };

export type StoreLocationAuditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type StoreLocationBrandsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BrandFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type StoreLocationCanIArgs = {
  action: CanIAction;
};

export type StoreLocationEmployeesArgs = {
  role?: InputMaybe<Scalars['String']['input']>;
};

export type StoreLocationStockLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StockLocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type StoreLocationConnection = {
  __typename?: 'StoreLocationConnection';
  edges: Array<StoreLocationEdge>;
  nodes: Array<StoreLocation>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type StoreLocationConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type StoreLocationEdge = {
  __typename?: 'StoreLocationEdge';
  cursor: Scalars['String']['output'];
  node: StoreLocation;
};

export type StoreLocationFilter = {
  address?: InputMaybe<StringFilter>;
  businessType?: InputMaybe<BusinessTypeFilter>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  departmentStore?: InputMaybe<DepartmentStoreFilter>;
  id?: InputMaybe<IdFilter>;
  locationAddress?: InputMaybe<AddressFilter>;
  phone?: InputMaybe<StringFilter>;
  store?: InputMaybe<BrandFilter>;
  stores?: InputMaybe<BrandFilter>;
  title?: InputMaybe<StringFilter>;
  titleOrVendorName?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  vendor?: InputMaybe<VendorFilter>;
  withStatus?: InputMaybe<StringFilter>;
};

export type StoreLocationInputType = {
  businessTypeId?: InputMaybe<Scalars['ID']['input']>;
  departmentStoreId?: InputMaybe<Scalars['ID']['input']>;
  floor?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locationAddressObject?: InputMaybe<AddressInput>;
  map?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['Upload']['input']>;
  schedule?: InputMaybe<Scalars['JSON']['input']>;
  storeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  timeSheets?: InputMaybe<Scalars['JSON']['input']>;
  title: Scalars['String']['input'];
  vendorId?: InputMaybe<Scalars['ID']['input']>;
  winterTimeSheets?: InputMaybe<Scalars['JSON']['input']>;
};

export type StorePayInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'StorePayInvoice';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceId?: Maybe<Scalars['String']['output']>;
    mobile?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type StorePayInvoiceCanIArgs = {
  action: CanIAction;
};

export type StringFilter = {
  blank?: InputMaybe<Scalars['Boolean']['input']>;
  cont?: InputMaybe<Scalars['String']['input']>;
  end?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  notEq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  businessClientUpdated?: Maybe<BusinessClient>;
  chatRoomUpdated?: Maybe<Room>;
  dispatchCall?: Maybe<DispatchCall>;
  inventorySwapRequested?: Maybe<Order>;
  jobUpdated?: Maybe<JobLog>;
  newChatMessage?: Maybe<Message>;
  newNotification?: Maybe<Notification>;
  notificationUpdated?: Maybe<Scalars['Int']['output']>;
  orderUpdated?: Maybe<Order>;
};

export type SubscriptionBusinessClientUpdatedArgs = {
  id: Scalars['ID']['input'];
};

export type SubscriptionInventorySwapRequestedArgs = {
  id: Scalars['ID']['input'];
};

export type SubscriptionJobUpdatedArgs = {
  id: Scalars['ID']['input'];
};

export type SubscriptionOrderUpdatedArgs = {
  id: Scalars['ID']['input'];
};

export type SubscriptionManifest = Node &
  ProductManifestInterface & {
    __typename?: 'SubscriptionManifest';
    brand?: Maybe<Brand>;
    canSupply?: Maybe<Scalars['Boolean']['output']>;
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    fulfillDuration?: Maybe<Scalars['Int']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    listings: Array<Listing>;
    maxQty?: Maybe<Scalars['Int']['output']>;
    merchants: Array<Merchant>;
    name: Scalars['String']['output'];
    optionsText?: Maybe<Scalars['String']['output']>;
    price: Scalars['Float']['output'];
    productCat?: Maybe<Scalars['String']['output']>;
    sku?: Maybe<Scalars['String']['output']>;
    slug: Scalars['String']['output'];
    subscriptionType: Scalars['String']['output'];
    totalOnHand?: Maybe<Scalars['Int']['output']>;
    vendor?: Maybe<Vendor>;
    weight?: Maybe<Scalars['Float']['output']>;
  };

export type SupplierCategory = BaseModelInterface &
  Node & {
    __typename?: 'SupplierCategory';
    active?: Maybe<Scalars['Boolean']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    merchants: MerchantConnection;
    name?: Maybe<Scalars['String']['output']>;
    position?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
    websiteId?: Maybe<Scalars['ID']['output']>;
  };

export type SupplierCategoryCanIArgs = {
  action: CanIAction;
};

export type SupplierCategoryMerchantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MerchantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type SupplierCategoryConnection = {
  __typename?: 'SupplierCategoryConnection';
  edges: Array<SupplierCategoryEdge>;
  nodes: Array<SupplierCategory>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type SupplierCategoryConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type SupplierCategoryEdge = {
  __typename?: 'SupplierCategoryEdge';
  cursor: Scalars['String']['output'];
  node: SupplierCategory;
};

export type SupplierCategoryFilter = {
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type SupplySegment = BaseModelInterface &
  Node & {
    __typename?: 'SupplySegment';
    active: Scalars['Boolean']['output'];
    businessUsers: EmployeeConnection;
    businessUsersSegmentIds: Array<Scalars['ID']['output']>;
    businessUsersSegments: BusinessUsersSegmentConnection;
    canI: Scalars['Boolean']['output'];
    clients: BusinessClientConnection;
    clientsCount: Scalars['Int']['output'];
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    createdBy?: Maybe<User>;
    createdById?: Maybe<Scalars['ID']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    originId?: Maybe<Scalars['ID']['output']>;
    preferences: Scalars['JSON']['output'];
    promotions: PromotionConnection;
    segmentClientIds: Array<Scalars['ID']['output']>;
    segmentClients: SegmentClientConnection;
    type?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userSegmentIds: Array<Scalars['ID']['output']>;
    userSegments: UserSegmentConnection;
    users: UserConnection;
    usersCount: Scalars['Int']['output'];
    vendor: Vendor;
    vendorId: Scalars['ID']['output'];
    websiteIds: Array<Scalars['ID']['output']>;
    websites: Array<Website>;
    whiteLists: SegmentWhiteListConnection;
  };

export type SupplySegmentBusinessUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BusinessUserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type SupplySegmentBusinessUsersSegmentIdsArgs = {
  filter?: InputMaybe<BusinessUsersSegmentFilter>;
};

export type SupplySegmentBusinessUsersSegmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BusinessUsersSegmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type SupplySegmentCanIArgs = {
  action: CanIAction;
};

export type SupplySegmentClientsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BusinessClientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type SupplySegmentPromotionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateType?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PromotionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type SupplySegmentSegmentClientIdsArgs = {
  filter?: InputMaybe<SegmentClientFilter>;
};

export type SupplySegmentSegmentClientsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SegmentClientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type SupplySegmentUserSegmentIdsArgs = {
  filter?: InputMaybe<UserSegmentFilter>;
};

export type SupplySegmentUserSegmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserSegmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type SupplySegmentUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type SupplySegmentWhiteListsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SegmentWhiteListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type SupplySegmentConnection = {
  __typename?: 'SupplySegmentConnection';
  edges: Array<SupplySegmentEdge>;
  nodes: Array<SupplySegment>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type SupplySegmentConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type SupplySegmentEdge = {
  __typename?: 'SupplySegmentEdge';
  cursor: Scalars['String']['output'];
  node: SupplySegment;
};

export type SupplySegmentFilter = {
  active?: InputMaybe<BoolFilter>;
  clientsCount?: InputMaybe<IntFilter>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  nameOrCode?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  usersCount?: InputMaybe<IntFilter>;
};

export enum SwapActionEnum {
  Discard = 'discard',
  Swap = 'swap',
}

export type SwapItemInput = {
  quantity: Scalars['Int']['input'];
  variantId: Scalars['ID']['input'];
};

export type Tag = Node & {
  __typename?: 'Tag';
  articlesCount?: Maybe<Scalars['Int']['output']>;
  authorsCount?: Maybe<Scalars['Int']['output']>;
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  impressionsCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  taggingsCount?: Maybe<Scalars['Int']['output']>;
};

export type TagConnection = {
  __typename?: 'TagConnection';
  edges: Array<TagEdge>;
  nodes: Array<Tag>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type TagConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type TagCount = Node & {
  __typename?: 'TagCount';
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  taggingsCount?: Maybe<Scalars['Int']['output']>;
};

export type TagEdge = {
  __typename?: 'TagEdge';
  cursor: Scalars['String']['output'];
  node: Tag;
};

export type TagFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Target = Order;

export type TaxCategory = BaseModelInterface &
  Node & {
    __typename?: 'TaxCategory';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isDefault?: Maybe<Scalars['Boolean']['output']>;
    name: Scalars['String']['output'];
    taxCode?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
    websiteId?: Maybe<Scalars['ID']['output']>;
  };

export type TaxCategoryCanIArgs = {
  action: CanIAction;
};

export type TaxCategoryConnection = {
  __typename?: 'TaxCategoryConnection';
  edges: Array<TaxCategoryEdge>;
  nodes: Array<TaxCategory>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type TaxCategoryConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type TaxCategoryEdge = {
  __typename?: 'TaxCategoryEdge';
  cursor: Scalars['String']['output'];
  node: TaxCategory;
};

export type TaxRate = BaseModelInterface &
  Node & {
    __typename?: 'TaxRate';
    amount: Scalars['Float']['output'];
    calculatorAttributes?: Maybe<Scalars['JSON']['output']>;
    calculatorType?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    includedInPrice: Scalars['Boolean']['output'];
    name: Scalars['String']['output'];
    showRateInLabel: Scalars['Boolean']['output'];
    taxCategory?: Maybe<TaxCategory>;
    taxCategoryId?: Maybe<Scalars['ID']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
    websiteId?: Maybe<Scalars['ID']['output']>;
    zone?: Maybe<Zone>;
    zoneId?: Maybe<Scalars['ID']['output']>;
  };

export type TaxRateCanIArgs = {
  action: CanIAction;
};

export type TaxRateConnection = {
  __typename?: 'TaxRateConnection';
  edges: Array<TaxRateEdge>;
  nodes: Array<TaxRate>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type TaxRateConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type TaxRateEdge = {
  __typename?: 'TaxRateEdge';
  cursor: Scalars['String']['output'];
  node: TaxRate;
};

export type Taxon = BaseModelInterface &
  Node & {
    __typename?: 'Taxon';
    absoluteTaxCode?: Maybe<Scalars['String']['output']>;
    bannerLink?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    children: Array<Taxon>;
    childrenCount: Scalars['Int']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    depth?: Maybe<Scalars['Int']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    expanded?: Maybe<Scalars['Boolean']['output']>;
    gid: Scalars['ID']['output'];
    hasChildren: Scalars['Boolean']['output'];
    icon?: Maybe<Scalars['String']['output']>;
    iconUpdatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    id: Scalars['ID']['output'];
    imeiCodesEnabled?: Maybe<Scalars['Boolean']['output']>;
    isAdult?: Maybe<Scalars['Boolean']['output']>;
    isDisabled?: Maybe<Scalars['Boolean']['output']>;
    keywords: Array<Keyword>;
    labelCodesEnabled?: Maybe<Scalars['Boolean']['output']>;
    lft?: Maybe<Scalars['Int']['output']>;
    listings: ListingConnection;
    listingsCount: Scalars['Int']['output'];
    metaDescription?: Maybe<Scalars['String']['output']>;
    metaKeywords?: Maybe<Scalars['String']['output']>;
    metaTitle?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    optionTypes: Array<OptionType>;
    parent?: Maybe<Taxon>;
    parentId?: Maybe<Scalars['ID']['output']>;
    permalink: Scalars['String']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    prettyName?: Maybe<Scalars['String']['output']>;
    properties: Array<Property>;
    propertyIds: Array<Scalars['ID']['output']>;
    prototypes: Array<Prototype>;
    queryString?: Maybe<Scalars['String']['output']>;
    rgt?: Maybe<Scalars['Int']['output']>;
    seoTitle?: Maybe<Scalars['String']['output']>;
    taxCode?: Maybe<Scalars['String']['output']>;
    translationEn?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type TaxonCanIArgs = {
  action: CanIAction;
};

export type TaxonListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type TaxonConnection = {
  __typename?: 'TaxonConnection';
  edges: Array<TaxonEdge>;
  nodes: Array<Taxon>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type TaxonConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type TaxonEdge = {
  __typename?: 'TaxonEdge';
  cursor: Scalars['String']['output'];
  node: Taxon;
};

export type TaxonFilter = {
  createdAt?: InputMaybe<DateFilter>;
  depth?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  listingsCount?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  parent?: InputMaybe<TaxonFilter>;
  parentId?: InputMaybe<IdFilter>;
  permalink?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  prettyName?: InputMaybe<StringFilter>;
  taxCode?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
  withListings?: InputMaybe<BoolFilter>;
};

export type TdbmLeaseSource = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'TdbmLeaseSource';
    acceptedMonths?: Maybe<Scalars['Int']['output']>;
    amount?: Maybe<Scalars['Float']['output']>;
    bankMessage?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    customerFee?: Maybe<Scalars['Float']['output']>;
    downPayment?: Maybe<Scalars['Float']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    incomeConfirm?: Maybe<Scalars['Boolean']['output']>;
    interest?: Maybe<Scalars['Float']['output']>;
    limit?: Maybe<Scalars['Float']['output']>;
    longMessage?: Maybe<Scalars['String']['output']>;
    merchantFee?: Maybe<Scalars['Float']['output']>;
    months?: Maybe<Scalars['Int']['output']>;
    paymentMethod: PaymentMethod;
    repaymentDay?: Maybe<Scalars['Int']['output']>;
    requirements?: Maybe<Scalars['String']['output']>;
    termsAccepted?: Maybe<Scalars['Boolean']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user: User;
  };

export type TdbmLeaseSourceCanIArgs = {
  action: CanIAction;
};

export type Template = BaseModelInterface &
  Node & {
    __typename?: 'Template';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    html?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    text?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
  };

export type TemplateCanIArgs = {
  action: CanIAction;
};

export enum TemplateOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
}

export type TicketTemplate = BaseModelInterface &
  Node & {
    __typename?: 'TicketTemplate';
    body?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    height?: Maybe<Scalars['Int']['output']>;
    id: Scalars['ID']['output'];
    pos?: Maybe<Scalars['Boolean']['output']>;
    sku?: Maybe<Scalars['String']['output']>;
    storeLocation?: Maybe<StoreLocation>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    vendor?: Maybe<Vendor>;
    website?: Maybe<Website>;
    width?: Maybe<Scalars['Int']['output']>;
  };

export type TicketTemplateCanIArgs = {
  action: CanIAction;
};

export type TicketTemplateConnection = {
  __typename?: 'TicketTemplateConnection';
  edges: Array<TicketTemplateEdge>;
  nodes: Array<TicketTemplate>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type TicketTemplateConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type TicketTemplateEdge = {
  __typename?: 'TicketTemplateEdge';
  cursor: Scalars['String']['output'];
  node: TicketTemplate;
};

export type TicketTemplateFilter = {
  createdAt?: InputMaybe<DateFilter>;
  height?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  pos?: InputMaybe<BoolFilter>;
  sku?: InputMaybe<StringFilter>;
  storeLocation?: InputMaybe<StoreLocationFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  vendor?: InputMaybe<VendorFilter>;
  website?: InputMaybe<WebsiteFilter>;
  width?: InputMaybe<IntFilter>;
};

export type TicketType = Node & {
  __typename?: 'TicketType';
  area?: Maybe<Scalars['String']['output']>;
  cinema: Cinema;
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  idx?: Maybe<Scalars['String']['output']>;
  isComplimentary?: Maybe<Scalars['Boolean']['output']>;
  isPackage?: Maybe<Scalars['Boolean']['output']>;
  isRedemption?: Maybe<Scalars['Boolean']['output']>;
  movieTickets: MovieTicket;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  session: Session;
  tax?: Maybe<Scalars['Int']['output']>;
};

export type TokiInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'TokiInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceId?: Maybe<Scalars['String']['output']>;
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    mobile?: Maybe<Scalars['String']['output']>;
    requestId?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type TokiInvoiceCanIArgs = {
  action: CanIAction;
};

export type TrackableType = BaseModelInterface &
  Node & {
    __typename?: 'TrackableType';
    acceptedOrderCount?: Maybe<Scalars['Int']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    distance?: Maybe<Scalars['Float']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isAvailable: Scalars['Boolean']['output'];
    lastTrackingDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    latitude?: Maybe<Scalars['String']['output']>;
    longitude?: Maybe<Scalars['String']['output']>;
    orderCount?: Maybe<Scalars['Int']['output']>;
    rejectedOrderCount?: Maybe<Scalars['Int']['output']>;
    trackings: TrackingTypeConnection;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    website?: Maybe<Website>;
  };

export type TrackableTypeCanIArgs = {
  action: CanIAction;
};

export type TrackableTypeTrackingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type TrackableTypeConnection = {
  __typename?: 'TrackableTypeConnection';
  edges: Array<TrackableTypeEdge>;
  nodes: Array<TrackableType>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type TrackableTypeConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type TrackableTypeEdge = {
  __typename?: 'TrackableTypeEdge';
  cursor: Scalars['String']['output'];
  node: TrackableType;
};

export type TrackingTarget = LineItem | Order;

export type TrackingType = BaseModelInterface &
  Node & {
    __typename?: 'TrackingType';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    latitude?: Maybe<Scalars['String']['output']>;
    longitude?: Maybe<Scalars['String']['output']>;
    trackable: TrackableType;
    updatedAt: Scalars['ISO8601DateTime']['output'];
  };

export type TrackingTypeCanIArgs = {
  action: CanIAction;
};

export type TrackingTypeConnection = {
  __typename?: 'TrackingTypeConnection';
  edges: Array<TrackingTypeEdge>;
  nodes: Array<TrackingType>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type TrackingTypeConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type TrackingTypeEdge = {
  __typename?: 'TrackingTypeEdge';
  cursor: Scalars['String']['output'];
  node: TrackingType;
};

export type Transaction = BaseModelInterface &
  Node & {
    __typename?: 'Transaction';
    action: Scalars['String']['output'];
    amount: Scalars['Float']['output'];
    amountLeft?: Maybe<Scalars['Float']['output']>;
    amountRepaid?: Maybe<Scalars['Float']['output']>;
    archived: Scalars['Boolean']['output'];
    audits: AuditConnection;
    authorizedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    authorizedBy?: Maybe<User>;
    authorizedById?: Maybe<Scalars['ID']['output']>;
    balance?: Maybe<Scalars['Float']['output']>;
    bonus: Scalars['Float']['output'];
    canI: Scalars['Boolean']['output'];
    cgw?: Maybe<CorporateGateway>;
    cgwId?: Maybe<Scalars['ID']['output']>;
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    currency: Scalars['String']['output'];
    description?: Maybe<Scalars['String']['output']>;
    dueDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isCredit: Scalars['Boolean']['output'];
    isDebit: Scalars['Boolean']['output'];
    isLoan: Scalars['Boolean']['output'];
    isRepaid?: Maybe<Scalars['Boolean']['output']>;
    loan?: Maybe<Transaction>;
    loanStatus: Scalars['String']['output'];
    number?: Maybe<Scalars['String']['output']>;
    relatedAccount?: Maybe<Scalars['String']['output']>;
    repayments: Array<Transaction>;
    source?: Maybe<Source>;
    status: Scalars['String']['output'];
    transactionAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    transactionDate?: Maybe<Scalars['ISO8601Date']['output']>;
    typeCode: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    verificationSentAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    wallet: Wallet;
    walletCode: Scalars['String']['output'];
    website: Website;
    xxoatTransactions: Array<Transaction>;
  };

export type TransactionAuditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuditFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type TransactionCanIArgs = {
  action: CanIAction;
};

export type TransactionConnection = {
  __typename?: 'TransactionConnection';
  edges: Array<TransactionEdge>;
  nodes: Array<Transaction>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type TransactionConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type TransactionEdge = {
  __typename?: 'TransactionEdge';
  cursor: Scalars['String']['output'];
  node: Transaction;
};

export type TransactionFilter = {
  action?: InputMaybe<EnumStringFilter>;
  amount?: InputMaybe<IntFilter>;
  archived?: InputMaybe<BoolFilter>;
  authorizedAt?: InputMaybe<DateFilter>;
  balance?: InputMaybe<IntFilter>;
  bonus?: InputMaybe<IntFilter>;
  cgwId?: InputMaybe<IdFilter>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  dueDate?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  loanStatus?: InputMaybe<EnumStringFilter>;
  number?: InputMaybe<StringFilter>;
  relatedAccount?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  transactionAt?: InputMaybe<DateFilter>;
  transactionDate?: InputMaybe<DateFilter>;
  typeCode?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  wallet?: InputMaybe<WalletFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type TranslationInput = {
  _destroy?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  locale: Scalars['String']['input'];
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaKeywords?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UPointCard = BaseModelInterface &
  Node & {
    __typename?: 'UPointCard';
    balance?: Maybe<Scalars['Float']['output']>;
    bonus?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    cardNumber?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    uPointCreatedAt?: Maybe<Scalars['String']['output']>;
    uPointId?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user: User;
    website: Website;
  };

export type UPointCardCanIArgs = {
  action: CanIAction;
};

export type UbcAddress = Node & {
  __typename?: 'UbcAddress';
  address?: Maybe<Addressable>;
  addressId?: Maybe<Scalars['ID']['output']>;
  addressType?: Maybe<Scalars['String']['output']>;
  gid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  source?: Maybe<Scalars['JSON']['output']>;
  ubcAddressId?: Maybe<Scalars['ID']['output']>;
};

export type User = BaseModelInterface &
  Node & {
    __typename?: 'User';
    accessToken?: Maybe<Scalars['String']['output']>;
    appsflyerAppId?: Maybe<Scalars['String']['output']>;
    appsflyerId?: Maybe<Scalars['String']['output']>;
    assetRoles: AssetRoleConnection;
    audits: AuditConnection;
    authenticationToken?: Maybe<Scalars['String']['output']>;
    avatar?: Maybe<Scalars['String']['output']>;
    averageRating: Scalars['Float']['output'];
    bankAccounts: Scalars['JSON']['output'];
    banks: Array<Bank>;
    billAddress?: Maybe<Address>;
    billAddressId?: Maybe<Scalars['ID']['output']>;
    birthday?: Maybe<Scalars['ISO8601Date']['output']>;
    businessEmployments: Array<Employee>;
    businessSuppliers?: Maybe<BusinessClientConnection>;
    canI: Scalars['Boolean']['output'];
    cancelledCommercesCount: Scalars['Int']['output'];
    cancelledPurchasesCount: Scalars['Int']['output'];
    cards: Array<Card>;
    claimedOrders: OrderConnection;
    clickGobozorMiniAppAcceptance?: Maybe<Scalars['Boolean']['output']>;
    clickMiniAppAcceptance?: Maybe<Scalars['Boolean']['output']>;
    commerceOrders: OrderConnection;
    confirmationSentAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    confirmedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    coupons: CouponConnection;
    createdAt: Scalars['ISO8601DateTime']['output'];
    currentEvent?: Maybe<Scalars['JSON']['output']>;
    currentOrder?: Maybe<Order>;
    currentSignInAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    currentSignInIp?: Maybe<Scalars['String']['output']>;
    currentWallet: Wallet;
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    devices: DeviceConnection;
    downloadables: PurchasedDownloadableConnection;
    eTicketCount: Scalars['Int']['output'];
    eTickets: ETicketConnection;
    eduDegree?: Maybe<Scalars['String']['output']>;
    education?: Maybe<UserEducation>;
    email?: Maybe<Scalars['String']['output']>;
    emergencyContacts: Array<EmergencyContact>;
    employment?: Maybe<UserEmployment>;
    failedAttempts: Scalars['Int']['output'];
    familyName?: Maybe<Scalars['String']['output']>;
    finance?: Maybe<UserFinance>;
    firstName?: Maybe<Scalars['String']['output']>;
    followers: FollowerConnection;
    gender?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    golomtCards: Array<GolomtCard>;
    id: Scalars['ID']['output'];
    isValidUserClearance?: Maybe<Scalars['Boolean']['output']>;
    kyc?: Maybe<KycInterface>;
    lastName?: Maybe<Scalars['String']['output']>;
    lastRequestAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    lastSignInAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    lastSignInIp?: Maybe<Scalars['String']['output']>;
    leasingInfo?: Maybe<LeasingInfo>;
    licenseCount: Scalars['Int']['output'];
    licenses: LicenseConnection;
    listings: ListingConnection;
    loanContracts: Array<Contract>;
    lockedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    login?: Maybe<Scalars['String']['output']>;
    lotteries: LotteryConnection;
    loyaltyCard?: Maybe<LoyaltyCard>;
    loyaltyCardTransactions: LoyaltyCardTransactionConnection;
    mailBounced?: Maybe<Scalars['Boolean']['output']>;
    mailComplained?: Maybe<Scalars['Boolean']['output']>;
    maritalStatus?: Maybe<Scalars['String']['output']>;
    merchants: MerchantConnection;
    mobile?: Maybe<Scalars['String']['output']>;
    mobileConfirmationSentAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    mobileConfirmedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    movieTicketCount: Scalars['Int']['output'];
    movieTickets: MovieTicketConnection;
    myReview?: Maybe<Review>;
    nationality?: Maybe<Scalars['String']['output']>;
    ndCode?: Maybe<Scalars['String']['output']>;
    ndCodeAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    orderCount: Scalars['Int']['output'];
    orderTemplates: OrderTemplateConnection;
    orders: OrderConnection;
    passport?: Maybe<Scalars['String']['output']>;
    passportBack?: Maybe<Scalars['String']['output']>;
    pendingCommercesCount: Scalars['Int']['output'];
    pendingPurchasesCount: Scalars['Int']['output'];
    perishableToken?: Maybe<Scalars['String']['output']>;
    persistenceToken?: Maybe<Scalars['String']['output']>;
    portrait?: Maybe<Scalars['String']['output']>;
    prescriptions: PrescriptionConnection;
    publishedListingsCount: Scalars['Int']['output'];
    purchaseCount: Scalars['Int']['output'];
    qPayCards: Array<QPayCard>;
    recentlyViewedListings: RecentlyViewedListingConnection;
    referralSource?: Maybe<Scalars['String']['output']>;
    registerNum?: Maybe<Scalars['String']['output']>;
    rememberCreatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    rememberToken?: Maybe<Scalars['String']['output']>;
    resetPasswordSentAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    resetPasswordToken?: Maybe<Scalars['String']['output']>;
    reviews: ReviewConnection;
    roleMatrix?: Maybe<Scalars['JSON']['output']>;
    roles: Array<Scalars['String']['output']>;
    savedArticles: UserArticleConnection;
    segmentIds: Array<Scalars['ID']['output']>;
    segments: Array<SupplySegment>;
    shipAddress?: Maybe<Address>;
    shippedCommercesCount: Scalars['Int']['output'];
    shippedCount: Scalars['Int']['output'];
    shippedPurchasesCount: Scalars['Int']['output'];
    shoppyHubEntryCount: Scalars['Int']['output'];
    shoppyTrackable?: Maybe<TrackableType>;
    signInCount: Scalars['Int']['output'];
    storeCreditBalance: Scalars['JSON']['output'];
    storeCreditEvents: StoreCreditEventConnection;
    storeLocationIds: Array<Scalars['ID']['output']>;
    subscribed?: Maybe<Scalars['Boolean']['output']>;
    takenCount: Scalars['Int']['output'];
    totalPurchase: Scalars['Float']['output'];
    totalReviews: Scalars['Int']['output'];
    totpEnabled: Scalars['Boolean']['output'];
    totpLink: Scalars['String']['output'];
    uPointCard?: Maybe<UPointCard>;
    unapprovedListingsCount: Scalars['Int']['output'];
    unconfirmedEmail?: Maybe<Scalars['String']['output']>;
    unconfirmedMobile?: Maybe<Scalars['String']['output']>;
    unlockToken?: Maybe<Scalars['String']['output']>;
    unpaidPurchasesCount: Scalars['Int']['output'];
    unpublishedListingsCount: Scalars['Int']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userAddresses: UserAddressConnection;
    userAuthentications: Array<UserAuthentication>;
    userInvitationCode?: Maybe<Scalars['String']['output']>;
    userSegments: Array<UserSegment>;
    validatedBirthday?: Maybe<Scalars['String']['output']>;
    validatedFirstName?: Maybe<Scalars['String']['output']>;
    validatedLastName?: Maybe<Scalars['String']['output']>;
    validatedMiddleName?: Maybe<Scalars['String']['output']>;
    validatedPassportNumber?: Maybe<Scalars['String']['output']>;
    validatedPinFl?: Maybe<Scalars['String']['output']>;
    vccRequest?: Maybe<VccRequest>;
    verifiedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    vouchers: PromotionConnection;
    wallet: Scalars['Float']['output'];
    wallets: Array<Wallet>;
    website?: Maybe<Website>;
    websiteAgreement?: Maybe<UserAgreement>;
    websiteAgreements?: Maybe<Array<UserAgreement>>;
    wishlist?: Maybe<Wishlist>;
    xpartnersClickId?: Maybe<Scalars['String']['output']>;
    xpartnersExpireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  };

export type UserAssetRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AssetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserAuditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuditFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserBusinessEmploymentsArgs = {
  merchantOnly?: InputMaybe<Scalars['Boolean']['input']>;
  vendorId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserBusinessSuppliersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BusinessClientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserCanIArgs = {
  action: CanIAction;
};

export type UserClaimedOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  status?: InputMaybe<OrderStatus>;
};

export type UserCommerceOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  status?: InputMaybe<OrderStatus>;
};

export type UserCouponsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CouponFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserCurrentEventArgs = {
  event?: InputMaybe<Scalars['String']['input']>;
};

export type UserCurrentOrderArgs = {
  currency?: InputMaybe<Scalars['String']['input']>;
  flag?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  orderToken?: InputMaybe<Scalars['String']['input']>;
};

export type UserCurrentWalletArgs = {
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserDevicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OneSignalDeviceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  segmentId?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserDownloadablesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DownloadableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserETicketsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ETicketFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserFollowersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FollowerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserKycArgs = {
  type: Scalars['String']['input'];
};

export type UserLicensesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LicenseFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserLotteriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LotteryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserLoyaltyCardTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoyaltyCardTransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserMerchantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MerchantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserMovieTicketsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MovieTicketFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserOrderTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderTemplateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  status?: InputMaybe<OrderStatus>;
};

export type UserPrescriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PrescriptionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserRecentlyViewedListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ReviewsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserSavedArticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserArticleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserSegmentIdsArgs = {
  byWebsiteVendor?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserShippedCountArgs = {
  from?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  to?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

export type UserStoreCreditEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StoreCreditEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserTakenCountArgs = {
  from?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  to?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

export type UserUserAddressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserAddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserVccRequestArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  requestId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserVouchersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateType?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PromotionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type UserWebsiteAgreementArgs = {
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserWishlistArgs = {
  accessHash?: InputMaybe<Scalars['String']['input']>;
};

export type UserAddress = BaseModelInterface &
  Node & {
    __typename?: 'UserAddress';
    address?: Maybe<Address>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
  };

export type UserAddressCanIArgs = {
  action: CanIAction;
};

export type UserAddressConnection = {
  __typename?: 'UserAddressConnection';
  edges: Array<UserAddressEdge>;
  nodes: Array<UserAddress>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type UserAddressConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type UserAddressEdge = {
  __typename?: 'UserAddressEdge';
  cursor: Scalars['String']['output'];
  node: UserAddress;
};

export type UserAddressFilter = {
  address?: InputMaybe<AddressFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type UserAgreement = BaseModelInterface &
  Node & {
    __typename?: 'UserAgreement';
    calculatedAt: Scalars['ISO8601Date']['output'];
    canI: Scalars['Boolean']['output'];
    cartState?: Maybe<Scalars['String']['output']>;
    cartTotal: Scalars['Float']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    currency?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    ordersCount: Scalars['Int']['output'];
    ordersTotal: Scalars['Float']['output'];
    storeLocation?: Maybe<StoreLocation>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user: User;
    website?: Maybe<Website>;
  };

export type UserAgreementCanIArgs = {
  action: CanIAction;
};

export type UserAgreementConnection = {
  __typename?: 'UserAgreementConnection';
  edges: Array<UserAgreementEdge>;
  nodes: Array<UserAgreement>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type UserAgreementConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type UserAgreementEdge = {
  __typename?: 'UserAgreementEdge';
  cursor: Scalars['String']['output'];
  node: UserAgreement;
};

export type UserAgreementFilter = {
  calculatedAt?: InputMaybe<DateFilter>;
  cartState?: InputMaybe<StringFilter>;
  cartTotal?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  ordersCount?: InputMaybe<IntFilter>;
  ordersTotal?: InputMaybe<IntFilter>;
  search?: InputMaybe<StringFilter>;
  storeLocation?: InputMaybe<StoreLocationFilter>;
  termsAccepted?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type UserArticle = BaseModelInterface &
  Node & {
    __typename?: 'UserArticle';
    article?: Maybe<Article>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    website?: Maybe<Website>;
  };

export type UserArticleCanIArgs = {
  action: CanIAction;
};

export type UserArticleConnection = {
  __typename?: 'UserArticleConnection';
  edges: Array<UserArticleEdge>;
  nodes: Array<UserArticle>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type UserArticleConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type UserArticleEdge = {
  __typename?: 'UserArticleEdge';
  cursor: Scalars['String']['output'];
  node: UserArticle;
};

export type UserArticleFilter = {
  article?: InputMaybe<ArticleFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type UserAuthentication = BaseModelInterface &
  Node & {
    __typename?: 'UserAuthentication';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    provider: Scalars['String']['output'];
    token?: Maybe<Scalars['String']['output']>;
    uid: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user: User;
  };

export type UserAuthenticationCanIArgs = {
  action: CanIAction;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  nodes: Array<User>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type UserConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserEducation = BaseModelInterface &
  Node & {
    __typename?: 'UserEducation';
    active?: Maybe<Scalars['Boolean']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    degree?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    profession?: Maybe<Scalars['String']['output']>;
    school?: Maybe<Scalars['String']['output']>;
    since?: Maybe<Scalars['ISO8601Date']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
  };

export type UserEducationCanIArgs = {
  action: CanIAction;
};

export type UserEmployment = BaseModelInterface &
  Node & {
    __typename?: 'UserEmployment';
    address?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    company?: Maybe<Scalars['String']['output']>;
    companyFullName?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    employeeCount?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    jobTitle?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    since?: Maybe<Scalars['ISO8601Date']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    years?: Maybe<Scalars['String']['output']>;
  };

export type UserEmploymentCanIArgs = {
  action: CanIAction;
};

export type UserEmploymentFilter = {
  company?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  jobTitle?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type UserFilter = {
  birthday?: InputMaybe<DateFilter>;
  createdAt?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  emailOrMobile?: InputMaybe<StringFilter>;
  emailOrMobileOrFirstName?: InputMaybe<StringFilter>;
  emailOrUnconfirmedEmail?: InputMaybe<StringFilter>;
  employment?: InputMaybe<UserEmploymentFilter>;
  firstName?: InputMaybe<StringFilter>;
  firstNameOrLastName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  lastName?: InputMaybe<StringFilter>;
  mobile?: InputMaybe<StringFilter>;
  mobileOrUnconfirmedMobile?: InputMaybe<StringFilter>;
  mobileOrUnconfirmedMobileOrEmailOrFirstName?: InputMaybe<StringFilter>;
  orderCount?: InputMaybe<IntFilter>;
  registerNum?: InputMaybe<StringFilter>;
  shoppyTrackable?: InputMaybe<ShoppyTrackableFilter>;
  storeLocations?: InputMaybe<StoreLocationFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  userVerifications?: InputMaybe<UserVerificationFilter>;
  website?: InputMaybe<WebsiteFilter>;
  websiteAgreements?: InputMaybe<UserAgreementFilter>;
};

export type UserFinance = BaseModelInterface &
  Node & {
    __typename?: 'UserFinance';
    businessIncome?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    creditLimit?: Maybe<Scalars['Float']['output']>;
    gid: Scalars['ID']['output'];
    groceryOutcome?: Maybe<Scalars['Float']['output']>;
    hasCreditcard?: Maybe<Scalars['Boolean']['output']>;
    hasLoan?: Maybe<Scalars['Boolean']['output']>;
    householdOutcome?: Maybe<Scalars['Float']['output']>;
    id: Scalars['ID']['output'];
    income?: Maybe<Scalars['Float']['output']>;
    loanExceed60?: Maybe<Scalars['Boolean']['output']>;
    loanpaymentAmoutMonthly?: Maybe<Scalars['Float']['output']>;
    otherIncome?: Maybe<Scalars['Float']['output']>;
    otherOutcome?: Maybe<Scalars['Float']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
  };

export type UserFinanceCanIArgs = {
  action: CanIAction;
};

export type UserInvitation = BaseModelInterface &
  Node & {
    __typename?: 'UserInvitation';
    acceptedCount: Scalars['Int']['output'];
    accepts: InvitationAcceptConnection;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    generatedAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invitation: Invitation;
    invitationId: Scalars['ID']['output'];
    number: Scalars['String']['output'];
    sharedCount: Scalars['Int']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user: User;
    userId: Scalars['ID']['output'];
    website: Website;
    websiteId: Scalars['ID']['output'];
  };

export type UserInvitationAcceptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserInvitationCanIArgs = {
  action: CanIAction;
};

export type UserInvitationConnection = {
  __typename?: 'UserInvitationConnection';
  edges: Array<UserInvitationEdge>;
  nodes: Array<UserInvitation>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type UserInvitationConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type UserInvitationEdge = {
  __typename?: 'UserInvitationEdge';
  cursor: Scalars['String']['output'];
  node: UserInvitation;
};

export type UserSegment = BaseModelInterface &
  Node & {
    __typename?: 'UserSegment';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    expiresAt: Scalars['ISO8601Date']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    segment: SupplySegment;
    segmentId: Scalars['ID']['output'];
    sourceId?: Maybe<Scalars['ID']['output']>;
    sourceType?: Maybe<Scalars['String']['output']>;
    status: Scalars['String']['output'];
    total?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    usedCount: Scalars['Int']['output'];
    user: User;
    userId: Scalars['ID']['output'];
    website: Website;
    websiteId: Scalars['ID']['output'];
  };

export type UserSegmentCanIArgs = {
  action: CanIAction;
};

export type UserSegmentConnection = {
  __typename?: 'UserSegmentConnection';
  edges: Array<UserSegmentEdge>;
  nodes: Array<UserSegment>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type UserSegmentConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type UserSegmentEdge = {
  __typename?: 'UserSegmentEdge';
  cursor: Scalars['String']['output'];
  node: UserSegment;
};

export type UserSegmentFilter = {
  createdAt?: InputMaybe<DateFilter>;
  expiresAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  segment?: InputMaybe<SupplySegmentFilter>;
  segmentId?: InputMaybe<IdFilter>;
  status?: InputMaybe<StringFilter>;
  total?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<IdFilter>;
  website?: InputMaybe<WebsiteFilter>;
  websiteId?: InputMaybe<IdFilter>;
};

export type UserSelectableGiftPromises = ActionInterface &
  Node & {
    __typename?: 'UserSelectableGiftPromises';
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredInterval?: Maybe<Scalars['Int']['output']>;
    preferredLimit?: Maybe<Scalars['Int']['output']>;
    preferredMatchPolicy: Scalars['String']['output'];
    preferredRule: Scalars['String']['output'];
    promotion: Promotion;
    promotionActionLineItems: Array<PromotionActionLineItem>;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
  };

export type UserSelectableItems = ActionInterface &
  Node & {
    __typename?: 'UserSelectableItems';
    calculator: CalculatorInterface;
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    preferredExcludeOnSale: Scalars['Boolean']['output'];
    preferredLimit?: Maybe<Scalars['Int']['output']>;
    promotion: Promotion;
    promotionActionLineItems: Array<PromotionActionLineItem>;
    promotionId: Scalars['ID']['output'];
    type?: Maybe<Scalars['String']['output']>;
  };

export type UserToken = BaseModelInterface &
  Node & {
    __typename?: 'UserToken';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    duration: Scalars['Int']['output'];
    generatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    number?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    usedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    usedBy?: Maybe<User>;
    user?: Maybe<User>;
    website?: Maybe<Website>;
  };

export type UserTokenCanIArgs = {
  action: CanIAction;
};

export type UserVerification = BaseModelInterface &
  Node & {
    __typename?: 'UserVerification';
    approvedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    message?: Maybe<Scalars['String']['output']>;
    passport?: Maybe<Scalars['String']['output']>;
    passportApprovedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    passportBack?: Maybe<Scalars['String']['output']>;
    passportBackApprovedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    passportBackRejectedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    passportRejectedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    rejectedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    requestedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    selfie?: Maybe<Scalars['String']['output']>;
    selfieApprovedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    selfieRejectedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user: User;
    userId: Scalars['ID']['output'];
    website: Website;
    websiteId: Scalars['ID']['output'];
  };

export type UserVerificationCanIArgs = {
  action: CanIAction;
};

export type UserVerificationFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  vendor?: InputMaybe<VendorFilter>;
};

export type UzumNasiyaSource = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'UzumNasiyaSource';
    buyerId?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    canceledAt?: Maybe<Scalars['ISO8601Date']['output']>;
    confirmedAt?: Maybe<Scalars['ISO8601Date']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    hasLimit: Scalars['Boolean']['output'];
    id: Scalars['ID']['output'];
    invoiceNo?: Maybe<Scalars['String']['output']>;
    mobile?: Maybe<Scalars['String']['output']>;
    orderNo?: Maybe<Scalars['String']['output']>;
    paymentMethod: PaymentMethod;
    paymentMethodId: Scalars['ID']['output'];
    period?: Maybe<Scalars['String']['output']>;
    periods?: Maybe<Scalars['JSON']['output']>;
    response?: Maybe<Scalars['JSON']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user: User;
    userId: Scalars['ID']['output'];
    webview?: Maybe<Scalars['String']['output']>;
  };

export type UzumNasiyaSourceCanIArgs = {
  action: CanIAction;
};

export type VccRequest = BaseModelInterface &
  Node & {
    __typename?: 'VCCRequest';
    amount?: Maybe<Scalars['Float']['output']>;
    branchId?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    chrgAmount?: Maybe<Scalars['Float']['output']>;
    confAmount?: Maybe<Scalars['Float']['output']>;
    confirmedDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    crnCode?: Maybe<Scalars['String']['output']>;
    disbChrgInt?: Maybe<Scalars['Float']['output']>;
    embossName?: Maybe<Scalars['String']['output']>;
    feePercent?: Maybe<Scalars['Float']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    instType?: Maybe<Scalars['String']['output']>;
    interest?: Maybe<Scalars['Float']['output']>;
    loanAccount?: Maybe<Scalars['String']['output']>;
    loanSubType?: Maybe<Scalars['String']['output']>;
    loanType?: Maybe<Scalars['String']['output']>;
    monthlyAmount?: Maybe<Scalars['Float']['output']>;
    payDay?: Maybe<Scalars['ISO8601DateTime']['output']>;
    period?: Maybe<Scalars['Int']['output']>;
    preferences?: Maybe<Scalars['JSON']['output']>;
    prepaidAmt?: Maybe<Scalars['Float']['output']>;
    prodCode?: Maybe<Scalars['String']['output']>;
    prodType?: Maybe<Scalars['String']['output']>;
    registerNum?: Maybe<Scalars['String']['output']>;
    requestId?: Maybe<Scalars['String']['output']>;
    scoringAmount?: Maybe<Scalars['Float']['output']>;
    scoringDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    scoringReason?: Maybe<Scalars['String']['output']>;
    staffInterest?: Maybe<Scalars['Float']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    topupFlg?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type VccRequestCanIArgs = {
  action: CanIAction;
};

export type Variant = BaseModelInterface &
  Node & {
    __typename?: 'Variant';
    associatedAudits: Array<Audit>;
    bPrices?: Maybe<Array<Price>>;
    backorderable?: Maybe<Scalars['Boolean']['output']>;
    barcode?: Maybe<Scalars['String']['output']>;
    bonusPoint?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    canSupply: Scalars['Boolean']['output'];
    costCurrency?: Maybe<Scalars['String']['output']>;
    costPrice?: Maybe<Scalars['Float']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    currency?: Maybe<Scalars['String']['output']>;
    defaultPrices: Array<Price>;
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    depth?: Maybe<Scalars['Float']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    discontinueOn?: Maybe<Scalars['ISO8601DateTime']['output']>;
    downloadableAttachments: Array<DownloadableAttachment>;
    eventEndDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    eventPrice?: Maybe<Scalars['Float']['output']>;
    fragile: Scalars['Boolean']['output'];
    gid: Scalars['ID']['output'];
    hasRules: Scalars['Boolean']['output'];
    height?: Maybe<Scalars['Float']['output']>;
    hsCode?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    imageLinks: Array<Scalars['String']['output']>;
    images: Array<ProductImage>;
    isBackorderable: Scalars['Boolean']['output'];
    isMaster: Scalars['Boolean']['output'];
    labelCode?: Maybe<Scalars['String']['output']>;
    listedWebsites: Array<Website>;
    manifestImage?: Maybe<Scalars['String']['output']>;
    manifestName: Scalars['String']['output'];
    manifestSlug: Scalars['String']['output'];
    merchantSku?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    netWeight?: Maybe<Scalars['Float']['output']>;
    nonReturnable: Scalars['Boolean']['output'];
    nutritionFact?: Maybe<NutritionFact>;
    optionValues: Array<OptionValue>;
    optionsText: Scalars['String']['output'];
    originalPrice?: Maybe<Scalars['Float']['output']>;
    packageCode?: Maybe<Scalars['String']['output']>;
    parent?: Maybe<Variant>;
    partsVariants: Array<AssemblyPart>;
    position?: Maybe<Scalars['Int']['output']>;
    price: Scalars['Float']['output'];
    prices: Array<SalePrice>;
    product: Product;
    purchasable: Scalars['Boolean']['output'];
    rules: Array<VariantRule>;
    sPrices?: Maybe<Array<SalePrice>>;
    saleEndDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    salePrice?: Maybe<Scalars['Float']['output']>;
    salePrices: Array<SalePrice>;
    saleStartDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    sellingPrice: Scalars['Float']['output'];
    series?: Maybe<Series>;
    sku: Scalars['String']['output'];
    slug: Scalars['String']['output'];
    stockCounts?: Maybe<Array<StockCountType>>;
    stockItems: Array<StockItem>;
    stockLocations?: Maybe<StockLocationConnection>;
    stockLocked?: Maybe<Scalars['Boolean']['output']>;
    storeItems: Array<StoreItem>;
    taxCode?: Maybe<Scalars['String']['output']>;
    /** @deprecated Will be removed in future */
    totalCountOnHand: Scalars['Float']['output'];
    /** @deprecated Will be removed in future */
    totalCountOnStockLocations: Scalars['Float']['output'];
    totalOnHand: Scalars['Float']['output'];
    trackInventory?: Maybe<Scalars['Boolean']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variantSeries: Array<Variant>;
    vendor?: Maybe<Vendor>;
    /** @deprecated Will be removed in future */
    websitePrices: Array<SalePrice>;
    weight?: Maybe<Scalars['Float']['output']>;
    width?: Maybe<Scalars['Float']['output']>;
  };

export type VariantBPricesArgs = {
  currency?: InputMaybe<Scalars['String']['input']>;
  stockLocationId?: InputMaybe<Scalars['ID']['input']>;
};

export type VariantCanIArgs = {
  action: CanIAction;
};

export type VariantImageArgs = {
  mirror?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<ProductImageSize>;
};

export type VariantPriceArgs = {
  currency?: InputMaybe<Scalars['String']['input']>;
  stockLocationId?: InputMaybe<Scalars['ID']['input']>;
};

export type VariantSPricesArgs = {
  currency?: InputMaybe<Scalars['String']['input']>;
  segmentId?: InputMaybe<Scalars['ID']['input']>;
  stockLocationId?: InputMaybe<Scalars['ID']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type VariantSalePriceArgs = {
  currency?: InputMaybe<Scalars['String']['input']>;
};

export type VariantSalePricesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
};

export type VariantSellingPriceArgs = {
  currency?: InputMaybe<Scalars['String']['input']>;
  stockLocationId?: InputMaybe<Scalars['ID']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type VariantStockCountsArgs = {
  excludeOrderId?: InputMaybe<Scalars['ID']['input']>;
  stockLocationId?: InputMaybe<Scalars['ID']['input']>;
};

export type VariantStockItemsArgs = {
  stockLocationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type VariantStockLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StockLocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VariantTotalCountOnStockLocationsArgs = {
  stockLocationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type VariantTotalOnHandArgs = {
  stockLocationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type VariantConnection = {
  __typename?: 'VariantConnection';
  edges: Array<VariantEdge>;
  nodes: Array<Variant>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type VariantConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type VariantEdge = {
  __typename?: 'VariantEdge';
  cursor: Scalars['String']['output'];
  node: Variant;
};

export type VariantFilter = {
  backorderable?: InputMaybe<StringFilter>;
  barcode?: InputMaybe<StringFilter>;
  canSupply?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  defaultPrices?: InputMaybe<PriceFilter>;
  fragile?: InputMaybe<BoolFilter>;
  hasStock?: InputMaybe<BoolFilter>;
  id?: InputMaybe<IdFilter>;
  labelCode?: InputMaybe<StringFilter>;
  merchantSku?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nameOrSku?: InputMaybe<StringFilter>;
  nonReturnable?: InputMaybe<BoolFilter>;
  optionsText?: InputMaybe<StringFilter>;
  packageCode?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntFilter>;
  product?: InputMaybe<ProductFilter>;
  salePrices?: InputMaybe<PriceFilter>;
  sellingPrice?: InputMaybe<IntFilter>;
  sku?: InputMaybe<StringFilter>;
  stockItems?: InputMaybe<StockItemFilter>;
  stockLocked?: InputMaybe<BoolFilter>;
  taxCode?: InputMaybe<StringFilter>;
  totalOnHand?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  weight?: InputMaybe<IntFilter>;
};

export type VariantInput = {
  _destroy?: InputMaybe<Scalars['Boolean']['input']>;
  barcode?: InputMaybe<Scalars['String']['input']>;
  bonusPoint?: InputMaybe<Scalars['Float']['input']>;
  costPrice?: InputMaybe<Scalars['Float']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  fragile?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  hsCode?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imageLinks?: InputMaybe<Array<Scalars['String']['input']>>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  labelCode?: InputMaybe<Scalars['String']['input']>;
  merchantSku?: InputMaybe<Scalars['String']['input']>;
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  nonReturnable?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  originalPrice?: InputMaybe<Scalars['Float']['input']>;
  packageCode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  priceCny?: InputMaybe<Scalars['Float']['input']>;
  priceJpy?: InputMaybe<Scalars['Float']['input']>;
  priceKrw?: InputMaybe<Scalars['Float']['input']>;
  priceMnt?: InputMaybe<Scalars['Float']['input']>;
  priceRub?: InputMaybe<Scalars['Float']['input']>;
  priceUsd?: InputMaybe<Scalars['Float']['input']>;
  priceUzs?: InputMaybe<Scalars['Float']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
  stockLocations?: InputMaybe<Scalars['JSON']['input']>;
  stockLocked?: InputMaybe<Scalars['Boolean']['input']>;
  taxCode?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type VariantRule = BaseModelInterface &
  Node & {
    __typename?: 'VariantRule';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    ratio: Scalars['Float']['output'];
    targetVariant: Variant;
    targetVariantId: Scalars['ID']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variant: Variant;
    variantId: Scalars['ID']['output'];
    website: Variant;
    websiteId: Scalars['ID']['output'];
  };

export type VariantRuleCanIArgs = {
  action: CanIAction;
};

export enum VariantsPermission {
  Display = 'display',
  Manage = 'manage',
}

export type Vendor = BaseModelInterface &
  Node & {
    __typename?: 'Vendor';
    address?: Maybe<Scalars['String']['output']>;
    averageRating: Scalars['Float']['output'];
    branches?: Maybe<BranchConnection>;
    businessClientAttachments?: Maybe<Array<BusinessVerificationAttachmentType>>;
    businessClients?: Maybe<BusinessClientConnection>;
    businessSupplier?: Maybe<BusinessClient>;
    businessSuppliers?: Maybe<BusinessClientConnection>;
    campaigns: ShoppyCampaignConnection;
    canI: Scalars['Boolean']['output'];
    category?: Maybe<Scalars['String']['output']>;
    cdq?: Maybe<Array<Scalars['ID']['output']>>;
    channel?: Maybe<Merchant>;
    channels?: Maybe<MerchantConnection>;
    clientsStoresRelay?: Maybe<ClientsStoreConnection>;
    country?: Maybe<Country>;
    coupons?: Maybe<CouponConnection>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    deliveryOrders: ShipmentConnection;
    description?: Maybe<Scalars['String']['output']>;
    district?: Maybe<District>;
    drivers?: Maybe<Array<Order>>;
    eTicketActivationMethods?: Maybe<ETicketActivationMethodConnection>;
    eTickets?: Maybe<ETicketConnection>;
    ebarimtType?: Maybe<Scalars['String']['output']>;
    elasticReport?: Maybe<Scalars['JSON']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    employees?: Maybe<EmployeeConnection>;
    erpIntegrations: Array<ErpIntegration>;
    exportTemplate?: Maybe<Scalars['String']['output']>;
    facebook?: Maybe<Scalars['String']['output']>;
    follow: Follow;
    follows: Array<Follow>;
    fulfillmentDashboard?: Maybe<Scalars['JSON']['output']>;
    fullAddress?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    hideInfo?: Maybe<Scalars['Boolean']['output']>;
    id: Scalars['ID']['output'];
    instagram?: Maybe<Scalars['String']['output']>;
    isBlocking: Scalars['Boolean']['output'];
    isCityTaxPayer?: Maybe<Scalars['Boolean']['output']>;
    isExcSelling: Scalars['Boolean']['output'];
    isIndividual?: Maybe<Scalars['Boolean']['output']>;
    isVerified?: Maybe<Scalars['Boolean']['output']>;
    latitude?: Maybe<Scalars['String']['output']>;
    lineItemReport?: Maybe<Array<LineItemReport>>;
    lineItems?: Maybe<LineItemConnection>;
    listings?: Maybe<ListingConnection>;
    logo?: Maybe<Scalars['String']['output']>;
    longitude?: Maybe<Scalars['String']['output']>;
    manager?: Maybe<Scalars['String']['output']>;
    myReview?: Maybe<Review>;
    name?: Maybe<Scalars['String']['output']>;
    nameEn?: Maybe<Scalars['String']['output']>;
    note1?: Maybe<Scalars['String']['output']>;
    note2?: Maybe<Scalars['String']['output']>;
    note3?: Maybe<Scalars['String']['output']>;
    note4?: Maybe<Scalars['String']['output']>;
    note5?: Maybe<Scalars['String']['output']>;
    note6?: Maybe<Scalars['String']['output']>;
    note7?: Maybe<Scalars['String']['output']>;
    note8?: Maybe<Scalars['String']['output']>;
    nutritionFacts?: Maybe<NutritionFactConnection>;
    orderReport?: Maybe<Array<OrderReport>>;
    orders?: Maybe<CommerceOrderConnection>;
    otherVendorsSelling?: Maybe<Scalars['Boolean']['output']>;
    personalNumber?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    pos?: Maybe<Scalars['Boolean']['output']>;
    posListings?: Maybe<PosListingConnection>;
    posOrdersData?: Maybe<Scalars['JSON']['output']>;
    preferredBusinessModels?: Maybe<Array<Scalars['String']['output']>>;
    preferredNameValidated?: Maybe<Scalars['Boolean']['output']>;
    preferredRegisterValidated?: Maybe<Scalars['Boolean']['output']>;
    preferredSeoAutoUpdate?: Maybe<Scalars['Boolean']['output']>;
    preferredVatValidated?: Maybe<Scalars['Boolean']['output']>;
    primaryTaxons: Array<Scalars['ID']['output']>;
    primaryTaxonsData?: Maybe<Scalars['JSON']['output']>;
    productReturns: ProductReturnConnection;
    products?: Maybe<ProductConnection>;
    productsCount?: Maybe<Scalars['Int']['output']>;
    promotions?: Maybe<PromotionConnection>;
    publishedListingsCount: Scalars['Int']['output'];
    quarter?: Maybe<Quarter>;
    register?: Maybe<Scalars['String']['output']>;
    reviews: ReviewConnection;
    salesCount: Scalars['Int']['output'];
    segmentClients: SegmentClientConnection;
    shipments?: Maybe<ShipmentConnection>;
    shoppyImages?: Maybe<ImageConnection>;
    sizingGuides?: Maybe<SizingGuideConnection>;
    sms: SmsConnection;
    smsReport?: Maybe<Scalars['JSON']['output']>;
    state?: Maybe<State>;
    stockItems?: Maybe<StockItemConnection>;
    stockLocations?: Maybe<StockLocationConnection>;
    storeCreditReport?: Maybe<Array<StoreCreditReport>>;
    storeCredits: StoreCreditConnection;
    storeListings: StoreListingConnection;
    storeLocation?: Maybe<StoreLocation>;
    storeLocations?: Maybe<StoreLocationConnection>;
    supplierCategories: SupplierCategoryConnection;
    supplySegment?: Maybe<SupplySegment>;
    supplySegments?: Maybe<SupplySegmentConnection>;
    taxNumber?: Maybe<Scalars['String']['output']>;
    token?: Maybe<Scalars['String']['output']>;
    totalReviews: Scalars['Int']['output'];
    unapprovedListingsCount: Scalars['Int']['output'];
    unpublishedListingsCount: Scalars['Int']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userSegments: UserSegmentConnection;
    variants?: Maybe<VariantConnection>;
    vat?: Maybe<Scalars['Boolean']['output']>;
    vendorIsSelling?: Maybe<Scalars['Boolean']['output']>;
    wallets?: Maybe<WalletConnection>;
    website?: Maybe<Scalars['String']['output']>;
    websites?: Maybe<WebsiteConnection>;
    whiteListEntries: WhiteListEntryConnection;
    whiteLists: SegmentWhiteListConnection;
    withSalesCount?: Maybe<Scalars['Int']['output']>;
  };

export type VendorBranchesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BranchFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorBusinessClientsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BusinessClientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorBusinessSuppliersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BusinessClientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorCampaignsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CampaignFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorCanIArgs = {
  action: CanIAction;
};

export type VendorChannelArgs = {
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type VendorChannelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MerchantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorClientsStoresRelayArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ClientsStoreFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorCouponsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CouponFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorDeliveryOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShipmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorDriversArgs = {
  filter?: InputMaybe<OrderFilter>;
  from: Scalars['ISO8601DateTime']['input'];
  to: Scalars['ISO8601DateTime']['input'];
};

export type VendorETicketActivationMethodsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  vendorId?: InputMaybe<Scalars['ID']['input']>;
};

export type VendorETicketsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ETicketFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorElasticReportArgs = {
  params?: InputMaybe<Scalars['JSON']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type VendorEmployeesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BusinessUserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorFollowArgs = {
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type VendorFulfillmentDashboardArgs = {
  filter?: InputMaybe<OrderFilter>;
};

export type VendorLineItemReportArgs = {
  coupon?: InputMaybe<Scalars['Boolean']['input']>;
  couponFrom?: InputMaybe<Scalars['String']['input']>;
  couponTo?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LineItemFilter>;
  flag?: InputMaybe<Scalars['JSON']['input']>;
  sort?: InputMaybe<SortFilter>;
  storeId?: InputMaybe<Scalars['ID']['input']>;
  vendorId?: InputMaybe<Scalars['ID']['input']>;
};

export type VendorLineItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludeBankPending?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<LineItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  ready?: InputMaybe<Scalars['Boolean']['input']>;
  reportType?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorNutritionFactsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NutritionFactFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorOrderReportArgs = {
  filter?: InputMaybe<OrderFilter>;
  from: Scalars['String']['input'];
  promotion?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  to: Scalars['String']['input'];
  vendorId?: InputMaybe<Scalars['ID']['input']>;
};

export type VendorOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorPosListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PosListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorPosOrdersDataArgs = {
  businessId: Scalars['ID']['input'];
  from: Scalars['ISO8601DateTime']['input'];
  to: Scalars['ISO8601DateTime']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
  websiteId: Scalars['ID']['input'];
};

export type VendorProductReturnsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductReturnFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type VendorPromotionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateType?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PromotionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type VendorReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ReviewsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorSegmentClientsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SegmentClientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorShipmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShipmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorShoppyImagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShoppyImageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorSizingGuidesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SizingGuideFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorSmsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SmsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorSmsReportArgs = {
  filter?: InputMaybe<SmsFilter>;
  interval?: InputMaybe<Scalars['String']['input']>;
};

export type VendorStockItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StockItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorStockLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StockLocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorStoreCreditReportArgs = {
  filter?: InputMaybe<StoreCreditEventFilter>;
  from?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<SortFilter>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type VendorStoreCreditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StoreCreditFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorStoreListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StoreListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorStoreLocationArgs = {
  id: Scalars['ID']['input'];
};

export type VendorStoreLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StoreLocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorSupplierCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SupplierCategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorSupplySegmentArgs = {
  id: Scalars['ID']['input'];
};

export type VendorSupplySegmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SupplySegmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorUserSegmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserSegmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VariantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  permission?: InputMaybe<VariantsPermission>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorWalletsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WalletFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorWebsitesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WebsiteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorWhiteListEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WhiteListEntryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorWhiteListsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SegmentWhiteListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type VendorConnection = {
  __typename?: 'VendorConnection';
  edges: Array<VendorEdge>;
  nodes: Array<Vendor>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type VendorConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type VendorEdge = {
  __typename?: 'VendorEdge';
  cursor: Scalars['String']['output'];
  node: Vendor;
};

export type VendorFilter = {
  channels?: InputMaybe<MerchantFilter>;
  createdAt?: InputMaybe<DateFilter>;
  ebarimtType?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isIndividual?: InputMaybe<BoolFilter>;
  listingVendor?: InputMaybe<ListingVendorFilter>;
  name?: InputMaybe<StringFilter>;
  nameEn?: InputMaybe<StringFilter>;
  nameOrRegister?: InputMaybe<StringFilter>;
  nameOrRegisterOrNameEn?: InputMaybe<StringFilter>;
  personalNumber?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  pos?: InputMaybe<BoolFilter>;
  products?: InputMaybe<ProductFilter>;
  register?: InputMaybe<StringFilter>;
  taxNumber?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type VendorListingFilter = {
  status: Scalars['String']['input'];
  vendorId: Scalars['ID']['input'];
};

export type VirtualManifest = Node &
  ProductManifestInterface & {
    __typename?: 'VirtualManifest';
    brand?: Maybe<Brand>;
    canSupply?: Maybe<Scalars['Boolean']['output']>;
    expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    fulfillDuration?: Maybe<Scalars['Int']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    maxQty?: Maybe<Scalars['Int']['output']>;
    name: Scalars['String']['output'];
    optionsText?: Maybe<Scalars['String']['output']>;
    price: Scalars['Float']['output'];
    productCat?: Maybe<Scalars['String']['output']>;
    sku?: Maybe<Scalars['String']['output']>;
    slug: Scalars['String']['output'];
    totalOnHand?: Maybe<Scalars['Int']['output']>;
    vendor?: Maybe<Vendor>;
    virtualProduct?: Maybe<VirtualProduct>;
    weight?: Maybe<Scalars['Float']['output']>;
  };

export type VirtualProduct = BaseModelInterface &
  Node & {
    __typename?: 'VirtualProduct';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    data?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    image?: Maybe<Scalars['String']['output']>;
    lineItem: LineItem;
    name?: Maybe<Scalars['String']['output']>;
    options?: Maybe<Scalars['String']['output']>;
    order: Order;
    price?: Maybe<Scalars['Float']['output']>;
    sku?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    userId: Scalars['ID']['output'];
    website: Website;
    websiteId: Scalars['ID']['output'];
  };

export type VirtualProductCanIArgs = {
  action: CanIAction;
};

export type Wallet = BaseModelInterface &
  Node & {
    __typename?: 'Wallet';
    availableAmount: Scalars['Float']['output'];
    balance: Scalars['Float']['output'];
    banks: Array<Bank>;
    bonus: Scalars['Float']['output'];
    canI: Scalars['Boolean']['output'];
    code: Scalars['String']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    creditProfile?: Maybe<CreditProfile>;
    currency: Scalars['String']['output'];
    dueDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    freezeAmount: Scalars['Float']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isVerified: Scalars['Boolean']['output'];
    lastTransactionDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    massRepayments: MassRepaymentConnection;
    name: Scalars['String']['output'];
    pinCodeStatus?: Maybe<Scalars['String']['output']>;
    pinCodeUpdatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    product: WalletProduct;
    status: Scalars['String']['output'];
    totalActivePaidAmount: Scalars['Float']['output'];
    totalActiveRepaidAmount: Scalars['Float']['output'];
    totalAllocatedAmount: Scalars['Float']['output'];
    totalAmountLeft: Scalars['Float']['output'];
    totalCashInAmount: Scalars['Float']['output'];
    totalCreditAmount: Scalars['Float']['output'];
    totalCreditUsedAmount: Scalars['Float']['output'];
    totalDebitAmount: Scalars['Float']['output'];
    totalPaymentAmount: Scalars['Float']['output'];
    totalPendingAmount: Scalars['Float']['output'];
    totalRepaidAmount: Scalars['Float']['output'];
    totalSurplusRepaidAmount: Scalars['Float']['output'];
    transactions?: Maybe<TransactionConnection>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    vendor?: Maybe<Vendor>;
    vendorId?: Maybe<Scalars['ID']['output']>;
    verifications: Array<UserVerification>;
    website: Website;
    withdrawalAmount: Scalars['Float']['output'];
  };

export type WalletCanIArgs = {
  action: CanIAction;
};

export type WalletMassRepaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MassRepaymentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WalletTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WalletConnection = {
  __typename?: 'WalletConnection';
  edges: Array<WalletEdge>;
  nodes: Array<Wallet>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type WalletConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type WalletEdge = {
  __typename?: 'WalletEdge';
  cursor: Scalars['String']['output'];
  node: Wallet;
};

export type WalletFilter = {
  availableAmount?: InputMaybe<IntFilter>;
  balance?: InputMaybe<IntFilter>;
  bonus?: InputMaybe<IntFilter>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  freezeAmount?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  isVerified?: InputMaybe<StringFilter>;
  lastTransactionDate?: InputMaybe<DateFilter>;
  name?: InputMaybe<StringFilter>;
  pinCodeStatus?: InputMaybe<StringFilter>;
  pinCodeUpdatedAt?: InputMaybe<DateFilter>;
  product?: InputMaybe<WalletProductFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userFirstNameOrUserMobileOrUserEmail?: InputMaybe<StringFilter>;
  vendor?: InputMaybe<VendorFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type WalletPaymentSourceType = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'WalletPaymentSourceType';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    paymentMethod: PaymentMethod;
    transactionId?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user: User;
    wallet: Wallet;
    walletTransaction?: Maybe<Transaction>;
  };

export type WalletPaymentSourceTypeCanIArgs = {
  action: CanIAction;
};

export type WalletProduct = BaseModelInterface &
  Node & {
    __typename?: 'WalletProduct';
    canI: Scalars['Boolean']['output'];
    code?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    currency?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    loanDays?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    wallets: WalletConnection;
  };

export type WalletProductCanIArgs = {
  action: CanIAction;
};

export type WalletProductWalletsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WalletFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WalletProductFilter = {
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type WalletRequest = BaseModelInterface &
  Node & {
    __typename?: 'WalletRequest';
    authorizedBy?: Maybe<User>;
    canI: Scalars['Boolean']['output'];
    certificateBack?: Maybe<Scalars['String']['output']>;
    certificateFront?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    reason?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user: User;
    vendor: Vendor;
    wallet: Wallet;
    website: Website;
  };

export type WalletRequestCanIArgs = {
  action: CanIAction;
};

export type WalletRequestConnection = {
  __typename?: 'WalletRequestConnection';
  edges: Array<WalletRequestEdge>;
  nodes: Array<WalletRequest>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type WalletRequestConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type WalletRequestEdge = {
  __typename?: 'WalletRequestEdge';
  cursor: Scalars['String']['output'];
  node: WalletRequest;
};

export type WalletRequestFilter = {
  authorizedBy?: InputMaybe<UserFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  reason?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  vendor?: InputMaybe<VendorFilter>;
  wallet?: InputMaybe<WalletFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type Warranty = BaseModelInterface &
  Node & {
    __typename?: 'Warranty';
    branch?: Maybe<Scalars['String']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    createdBy?: Maybe<User>;
    deletedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    duration?: Maybe<Scalars['Int']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    emailSentAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    expireDate?: Maybe<Scalars['ISO8601Date']['output']>;
    firstName?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isActive?: Maybe<Scalars['Boolean']['output']>;
    lastName?: Maybe<Scalars['String']['output']>;
    mobile?: Maybe<Scalars['String']['output']>;
    number?: Maybe<Scalars['String']['output']>;
    order?: Maybe<Order>;
    serialNumber?: Maybe<Scalars['String']['output']>;
    startDate?: Maybe<Scalars['ISO8601Date']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    usedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
    user?: Maybe<User>;
    variant?: Maybe<Variant>;
    vendor?: Maybe<Vendor>;
    website?: Maybe<Website>;
  };

export type WarrantyCanIArgs = {
  action: CanIAction;
};

export type Website = BaseModelInterface &
  Node & {
    __typename?: 'Website';
    activeLotteryEvent?: Maybe<LotteryEvent>;
    activeQuiz?: Maybe<Quiz>;
    address?: Maybe<Scalars['String']['output']>;
    agendaTags?: Maybe<Array<Tag>>;
    agendas: AgendaConnection;
    alternateDomain?: Maybe<Scalars['String']['output']>;
    articleTags?: Maybe<Array<Tag>>;
    articles: ArticleConnection;
    assetRoles: AssetRoleConnection;
    authors: AuthorConnection;
    autoAcceptBusinessClients?: Maybe<Scalars['Boolean']['output']>;
    autoAcceptMerchants?: Maybe<Scalars['Boolean']['output']>;
    availableTickets: ProductConnection;
    badge?: Maybe<Badge>;
    badges: BadgeConnection;
    bankAccountName: Scalars['String']['output'];
    black?: Maybe<Scalars['String']['output']>;
    bonus?: Maybe<Scalars['Float']['output']>;
    branches: BranchConnection;
    brands: BrandListingConnection;
    businessClients: BusinessClientConnection;
    businessTypes: BusinessTypeConnection;
    campaign: ShoppyCampaign;
    campaigns: ShoppyCampaignConnection;
    canI: Scalars['Boolean']['output'];
    cancelHour?: Maybe<Scalars['Int']['output']>;
    cancelReasons: CancelReasonConnection;
    candy?: Maybe<Scalars['Boolean']['output']>;
    categoryHeader?: Maybe<Scalars['String']['output']>;
    chatRooms: RoomConnection;
    clientsStore?: Maybe<ClientsStore>;
    clientsStores: ClientsStoreConnection;
    commission?: Maybe<Scalars['Float']['output']>;
    contactStats?: Maybe<Scalars['JSON']['output']>;
    copyrightText?: Maybe<Scalars['String']['output']>;
    coupon?: Maybe<Scalars['Boolean']['output']>;
    coupons: CouponConnection;
    createdAt: Scalars['ISO8601DateTime']['output'];
    creditCards: CreditCardConnection;
    currency?: Maybe<Scalars['String']['output']>;
    data?: Maybe<Scalars['JSON']['output']>;
    dataBooleanProperty?: Maybe<Scalars['Boolean']['output']>;
    deliveryUntil?: Maybe<Scalars['Int']['output']>;
    domain: Scalars['String']['output'];
    donations: DonationConnection;
    drivers: Array<Order>;
    eTickets: ETicketConnection;
    ebarimt?: Maybe<Scalars['Boolean']['output']>;
    elastic8Support: Scalars['Boolean']['output'];
    email?: Maybe<Scalars['String']['output']>;
    emailFrom?: Maybe<Scalars['String']['output']>;
    erpIntegrations: Array<ErpIntegration>;
    eventEntries?: Maybe<EventEntryConnection>;
    eventInvite: EventInvite;
    eventInvites: EventInviteConnection;
    facebookAppId?: Maybe<Scalars['String']['output']>;
    facebookChatId?: Maybe<Scalars['String']['output']>;
    features: Array<FeatureType>;
    feedbackTopics: FeedbackTopicConnection;
    feedbacks: FeedbackTypeConnection;
    forms: ShoppyFormConnection;
    fulfillmentDashboard?: Maybe<Scalars['JSON']['output']>;
    gamifications: GamificationConnection;
    gc?: Maybe<GiftCard>;
    gid: Scalars['ID']['output'];
    giftCard?: Maybe<Scalars['Boolean']['output']>;
    giftCards: GiftCardConnection;
    group?: Maybe<Scalars['Boolean']['output']>;
    groupIds: Array<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    index: Scalars['String']['output'];
    integrationReports?: Maybe<IntegrationReportConnection>;
    isActive?: Maybe<Scalars['Boolean']['output']>;
    language: Scalars['String']['output'];
    languages: Array<Scalars['String']['output']>;
    lastUsedPaymentMethods: Array<PaymentMethod>;
    leaseAccount?: Maybe<Scalars['String']['output']>;
    leaseName?: Maybe<Scalars['String']['output']>;
    leaseV3Sources: PaymentSourceConnection;
    leasing?: Maybe<Scalars['Boolean']['output']>;
    listingBonus?: Maybe<Scalars['Boolean']['output']>;
    listingDuration: Scalars['Int']['output'];
    listings: ListingConnection;
    logo?: Maybe<Scalars['String']['output']>;
    lookBooks: LookBookConnection;
    lotteries: LotteryConnection;
    lotteryEvents: LotteryEventConnection;
    loyaltyCardTransactions: LoyaltyCardTransactionConnection;
    main?: Maybe<Scalars['String']['output']>;
    massMessages: MassMessageConnection;
    maximumAmount: Scalars['Float']['output'];
    menu?: Maybe<DynamicMenu>;
    menus: Array<DynamicMenu>;
    merchant?: Maybe<Merchant>;
    merchants: MerchantConnection;
    minCartAmount?: Maybe<Scalars['Float']['output']>;
    movieTickets: MovieTicketConnection;
    name: Scalars['String']['output'];
    news?: Maybe<News>;
    newsTags?: Maybe<Array<Tag>>;
    newses: NewsConnection;
    notices: NoticeConnection;
    notifications: NotificationConnection;
    onesignalAppId?: Maybe<Scalars['String']['output']>;
    optionTypes: OptionTypeConnection;
    orderCancellationBase?: Maybe<Scalars['Float']['output']>;
    orderCancellationFee?: Maybe<Scalars['Float']['output']>;
    orderDashboard?: Maybe<Scalars['JSON']['output']>;
    orderNotes?: Maybe<OrderCommentConnection>;
    orderPaymentDashboard?: Maybe<Scalars['JSON']['output']>;
    orderTemplates: OrderTemplateConnection;
    orders: OrderConnection;
    page?: Maybe<DynamicPage>;
    pages: DynamicPageConnection;
    parent?: Maybe<Website>;
    paymentAccountData?: Maybe<Scalars['JSON']['output']>;
    paymentGuideText?: Maybe<Scalars['String']['output']>;
    paymentMethods: Array<PaymentMethod>;
    paymentReturnReasons: PaymentReturnReasonConnection;
    paymentReturnSources: PaymentReturnSourceConnection;
    paymentReturns: PaymentReturnConnection;
    payments: PaymentConnection;
    phone1?: Maybe<Scalars['String']['output']>;
    phone2?: Maybe<Scalars['String']['output']>;
    polls: PollConnection;
    prescription?: Maybe<Prescription>;
    prescriptions: PrescriptionConnection;
    printings: PrintingConnection;
    productReturns: ProductReturnConnection;
    promotions: PromotionConnection;
    prototypes: PrototypeConnection;
    pushTemplates: PushTemplateConnection;
    relatedProducts: RelationConnection;
    reportReasons: Array<ReportReason>;
    reports: ReportConnection;
    requireKycVerification?: Maybe<Scalars['Boolean']['output']>;
    reviews: ReviewConnection;
    salesManagerReport?: Maybe<Array<Scalars['JSON']['output']>>;
    searchSuggestion?: Maybe<Scalars['String']['output']>;
    shipmentHours?: Maybe<Scalars['Int']['output']>;
    shipmentTrackings: ShipmentTrackingConnection;
    shipments: ShipmentConnection;
    shippers: ShipperConnection;
    shippingCategories: Array<ShippingCategory>;
    shippingMethods: Array<ShippingMethod>;
    shoppyImages: ImageConnection;
    showUser?: Maybe<Scalars['Boolean']['output']>;
    signonBonus?: Maybe<Scalars['Float']['output']>;
    smsFee?: Maybe<Scalars['Int']['output']>;
    smsFrom?: Maybe<Scalars['String']['output']>;
    sslExpiresAt?: Maybe<Scalars['ISO8601Date']['output']>;
    storeCredits: StoreCreditConnection;
    storeLocation?: Maybe<StoreLocation>;
    storesAddresses: AddressConnection;
    supplierCategories: SupplierCategoryConnection;
    supplySegments: SupplySegmentConnection;
    tags: TagConnection;
    taxCategories: TaxCategoryConnection;
    taxRates: TaxRateConnection;
    taxons: TaxonConnection;
    ticket?: Maybe<Scalars['Boolean']['output']>;
    ticketTemplates?: Maybe<TicketTemplateConnection>;
    unreadNotifications: Scalars['Int']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    useAlternatePassword?: Maybe<Scalars['Boolean']['output']>;
    useCustomPrototypes?: Maybe<Scalars['Boolean']['output']>;
    useDeliveryCode: Scalars['Boolean']['output'];
    useWallet?: Maybe<Scalars['Boolean']['output']>;
    user?: Maybe<User>;
    userAgreements: UserAgreementConnection;
    users: UserConnection;
    vatSender: Scalars['String']['output'];
    vendor?: Maybe<Vendor>;
    vendors: VendorConnection;
    version?: Maybe<Scalars['String']['output']>;
    wallet?: Maybe<Scalars['Boolean']['output']>;
    walletRequests: WalletRequestConnection;
    wallets: WalletConnection;
    webListings: ListingConnection;
    white?: Maybe<Scalars['String']['output']>;
    wishedProducts: WishedProductConnection;
    wishlists: WishlistConnection;
    zones: Array<Zone>;
  };

export type WebsiteAgendaTagsArgs = {
  filter?: InputMaybe<TagFilter>;
};

export type WebsiteAgendasArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AgendaFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteArticleTagsArgs = {
  filter?: InputMaybe<TagFilter>;
};

export type WebsiteArticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ArticleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteAssetRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AssetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteAuthorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthorFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteAvailableTicketsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteBadgeArgs = {
  id: Scalars['ID']['input'];
};

export type WebsiteBadgesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BadgeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteBankAccountNameArgs = {
  bankAccount: B2bBusinessUserBankAccountInput;
};

export type WebsiteBranchesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BranchFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteBrandsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BrandListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteBusinessClientsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BusinessClientFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteBusinessTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BusinessTypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteCampaignArgs = {
  id: Scalars['ID']['input'];
};

export type WebsiteCampaignsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CampaignFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteCanIArgs = {
  action: CanIAction;
};

export type WebsiteCancelReasonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteChatRoomsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoomFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteClientsStoreArgs = {
  id: Scalars['ID']['input'];
};

export type WebsiteClientsStoresArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ClientsStoreFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteCouponsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CouponFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteCreditCardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CreditCardsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteDataBooleanPropertyArgs = {
  name: Scalars['String']['input'];
};

export type WebsiteDonationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DonationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteDriversArgs = {
  filter?: InputMaybe<OrderFilter>;
  from: Scalars['ISO8601DateTime']['input'];
  to: Scalars['ISO8601DateTime']['input'];
};

export type WebsiteETicketsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ETicketFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteErpIntegrationsArgs = {
  filter?: InputMaybe<ErpIntegrationFilter>;
};

export type WebsiteEventEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EventEntryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteEventInviteArgs = {
  id: Scalars['ID']['input'];
};

export type WebsiteEventInvitesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EventInviteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteFeedbackTopicsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FeedbackTopicFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteFeedbacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FeedbackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FormFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteFulfillmentDashboardArgs = {
  filter?: InputMaybe<OrderFilter>;
};

export type WebsiteGamificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteGcArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  redemptionCode?: InputMaybe<Scalars['String']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type WebsiteGiftCardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GiftCardFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteIntegrationReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IntegrationReportFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteLeaseV3SourcesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PaymentSourceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteLookBooksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LookBookFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteLotteriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LotteryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteLotteryEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LotteryEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteLoyaltyCardTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoyaltyCardTransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteMassMessagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MassMessageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteMenuArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type WebsiteMerchantArgs = {
  id: Scalars['ID']['input'];
};

export type WebsiteMerchantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MerchantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteMovieTicketsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MovieTicketFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteNewsArgs = {
  id: Scalars['ID']['input'];
};

export type WebsiteNewsTagsArgs = {
  filter?: InputMaybe<TagFilter>;
  websiteSpecific?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WebsiteNewsesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NewsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteNoticesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NoticeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NotificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteOptionTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OptionTypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteOrderDashboardArgs = {
  filter?: InputMaybe<OrderFilter>;
};

export type WebsiteOrderNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderCommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteOrderPaymentDashboardArgs = {
  filter?: InputMaybe<OrderFilter>;
};

export type WebsiteOrderTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderTemplateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  status?: InputMaybe<OrderStatus>;
};

export type WebsitePageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type WebsitePagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsitePaymentMethodsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  afterPay?: InputMaybe<Scalars['Boolean']['input']>;
  displayOn?: InputMaybe<Array<PmDisplayKind>>;
};

export type WebsitePaymentReturnReasonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PaymentReturnReasonFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsitePaymentReturnSourcesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PaymentReturnSourceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsitePaymentReturnsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PaymentReturnFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsitePaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PaymentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsitePollsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PollFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsitePrescriptionArgs = {
  id: Scalars['ID']['input'];
};

export type WebsitePrescriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PrescriptionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsitePrintingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PrintingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteProductReturnsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductReturnFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsitePromotionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateType?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PromotionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type WebsitePrototypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PrototypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsitePushTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PushTemplateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteRelatedProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RelationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ReportsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ReviewsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteSalesManagerReportArgs = {
  beginDate?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  msCode?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type WebsiteShipmentTrackingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShipmentTrackingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteShipmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShipmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteShippersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteShippingCategoriesArgs = {
  filter?: InputMaybe<ShippingCategoryFilter>;
};

export type WebsiteShippingMethodsArgs = {
  filter?: InputMaybe<ShippingMethodFilter>;
};

export type WebsiteShoppyImagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShoppyImageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteStoreCreditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StoreCreditFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteStoreLocationArgs = {
  id: Scalars['ID']['input'];
};

export type WebsiteStoresAddressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categoryIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  wid?: InputMaybe<Scalars['ID']['input']>;
};

export type WebsiteSupplierCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SupplierCategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteSupplySegmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SupplySegmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  websiteSpecific?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WebsiteTaxCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteTaxRatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteTaxonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TaxonFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteTicketTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TicketTemplateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteUserArgs = {
  id: Scalars['ID']['input'];
};

export type WebsiteUserAgreementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserAgreementFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteVendorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VendorFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteWalletRequestsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WalletRequestFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteWalletsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WalletFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteWebListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteWishedProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WishedProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteWishlistsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WishlistFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WebsiteConnection = {
  __typename?: 'WebsiteConnection';
  edges: Array<WebsiteEdge>;
  nodes: Array<Website>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type WebsiteConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type WebsiteEdge = {
  __typename?: 'WebsiteEdge';
  cursor: Scalars['String']['output'];
  node: Website;
};

export type WebsiteFilter = {
  createdAt?: InputMaybe<DateFilter>;
  currency?: InputMaybe<StringFilter>;
  domain?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  index?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  nameOrDomain?: InputMaybe<StringFilter>;
  sslExpiresAt?: InputMaybe<DateFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  vendor?: InputMaybe<VendorFilter>;
};

export type WhiteListEntry = BaseModelInterface &
  Node & {
    __typename?: 'WhiteListEntry';
    addedUser?: Maybe<User>;
    addedUserId?: Maybe<Scalars['ID']['output']>;
    canI: Scalars['Boolean']['output'];
    company?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    entryDate?: Maybe<Scalars['ISO8601Date']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    registerNo?: Maybe<Scalars['String']['output']>;
    segment?: Maybe<SupplySegment>;
    segmentId?: Maybe<Scalars['ID']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    used?: Maybe<Scalars['Boolean']['output']>;
    whiteList?: Maybe<SegmentWhiteList>;
  };

export type WhiteListEntryCanIArgs = {
  action: CanIAction;
};

export type WhiteListEntryConnection = {
  __typename?: 'WhiteListEntryConnection';
  edges: Array<WhiteListEntryEdge>;
  nodes: Array<WhiteListEntry>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type WhiteListEntryConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type WhiteListEntryEdge = {
  __typename?: 'WhiteListEntryEdge';
  cursor: Scalars['String']['output'];
  node: WhiteListEntry;
};

export type WhiteListEntryFilter = {
  addedUser?: InputMaybe<UserFilter>;
  company?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  entryDate?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  segment?: InputMaybe<SupplySegmentFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  used?: InputMaybe<BoolFilter>;
  user?: InputMaybe<UserFilter>;
  whiteList?: InputMaybe<SegmentWhiteListFilter>;
};

export type WishedProduct = BaseModelInterface &
  Node & {
    __typename?: 'WishedProduct';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    quantity?: Maybe<Scalars['Int']['output']>;
    remark?: Maybe<Scalars['String']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    total: Scalars['Int']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    variant: Variant;
    variantId: Scalars['ID']['output'];
    websiteTotal: Scalars['Int']['output'];
    wishlist: Wishlist;
  };

export type WishedProductCanIArgs = {
  action: CanIAction;
};

export type WishedProductConnection = {
  __typename?: 'WishedProductConnection';
  edges: Array<WishedProductEdge>;
  nodes: Array<WishedProduct>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type WishedProductConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type WishedProductEdge = {
  __typename?: 'WishedProductEdge';
  cursor: Scalars['String']['output'];
  node: WishedProduct;
};

export type WishedProductFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  quantity?: InputMaybe<IntFilter>;
  total?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<IdFilter>;
  variant?: InputMaybe<VariantFilter>;
  variantId?: InputMaybe<IdFilter>;
  website?: InputMaybe<WebsiteFilter>;
  websiteId?: InputMaybe<IdFilter>;
  websiteTotal?: InputMaybe<IntFilter>;
};

export type Wishlist = BaseModelInterface &
  Node & {
    __typename?: 'Wishlist';
    accessHash: Scalars['String']['output'];
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    isDefault: Scalars['Boolean']['output'];
    isPrivate: Scalars['Boolean']['output'];
    name: Scalars['String']['output'];
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user: User;
    website: Website;
    wishedProducts: Array<WishedProduct>;
    wishedVariantIds: Array<Scalars['ID']['output']>;
  };

export type WishlistCanIArgs = {
  action: CanIAction;
};

export type WishlistWishedProductsArgs = {
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type WishlistConnection = {
  __typename?: 'WishlistConnection';
  edges: Array<WishlistEdge>;
  nodes: Array<Wishlist>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type WishlistConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type WishlistEdge = {
  __typename?: 'WishlistEdge';
  cursor: Scalars['String']['output'];
  node: Wishlist;
};

export type WishlistFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<IdFilter>;
  website?: InputMaybe<WebsiteFilter>;
  websiteId?: InputMaybe<IdFilter>;
};

export type Zipcode = BaseModelInterface &
  Node & {
    __typename?: 'Zipcode';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    level?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    nameEn?: Maybe<Scalars['String']['output']>;
    parent?: Maybe<Zipcode>;
    point?: Maybe<Scalars['String']['output']>;
    polydataString?: Maybe<Scalars['String']['output']>;
    state?: Maybe<State>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    zipcode?: Maybe<Scalars['String']['output']>;
  };

export type ZipcodeCanIArgs = {
  action: CanIAction;
};

export type Zone = BaseModelInterface &
  Node & {
    __typename?: 'Zone';
    canI: Scalars['Boolean']['output'];
    countries: Array<Country>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    defaultTax?: Maybe<Scalars['Boolean']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    districts: Array<District>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    kind?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    pup: Scalars['Boolean']['output'];
    quarters: Array<Quarter>;
    states: Array<State>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
    zonableIds: Array<Scalars['ID']['output']>;
    zoneMembersCount?: Maybe<Scalars['Int']['output']>;
  };

export type ZoneCanIArgs = {
  action: CanIAction;
};

export type AcceptMassChatMessageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type AcceptPrescriptionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  reviewComment?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PrescriptionStatus | `${PrescriptionStatus}`>;
};

export type ActionCollectInput = {
  action: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  params?: InputMaybe<Scalars['JSON']['input']>;
};

export type ActivationETicketInput = {
  citizenId: Scalars['String']['input'];
  citizenship: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  lastName: Scalars['String']['input'];
  organization?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  phoneAdditional?: InputMaybe<Scalars['String']['input']>;
};

export type ActivationSyncETicketInput = {
  citizenId?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  nfcId: Scalars['String']['input'];
  number?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type AddBankAccountInput = {
  accountNo: Scalars['String']['input'];
  additionalDetails: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AddBankToWalletInput = {
  accountNo: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  walletId?: InputMaybe<Scalars['ID']['input']>;
};

export type AddBatchStoreListingsInput = {
  businessId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  sku: Scalars['String']['input'];
  status: Scalars['String']['input'];
  vendorId: Scalars['ID']['input'];
  websiteId: Scalars['ID']['input'];
};

export type AddBtobEmployeeBankAccountInput = {
  bankAccount: B2bBusinessUserBankAccountInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type AddCampaignListInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  listings: Array<CampaignListingInput>;
};

export type AddCommentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comment: Scalars['String']['input'];
  commentableId: Scalars['ID']['input'];
  commentableType: Scalars['String']['input'];
  data?: InputMaybe<Scalars['JSON']['input']>;
  mentions?: InputMaybe<Array<Scalars['ID']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AddEmployeeInput = {
  assets?: InputMaybe<Scalars['JSON']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  msCode?: InputMaybe<Scalars['String']['input']>;
  role: EmployeeRole | `${EmployeeRole}`;
  salesManagerBonus?: InputMaybe<Scalars['Float']['input']>;
  salesManagerIsVendor?: InputMaybe<Scalars['Boolean']['input']>;
  salesManagerTaxpayerNumber?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
  vendorId: Scalars['ID']['input'];
};

export type AddOrderNoteInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comment: Scalars['String']['input'];
  commentTypeId?: InputMaybe<Scalars['ID']['input']>;
  mentions?: InputMaybe<Array<Scalars['ID']['input']>>;
  orderId: Scalars['ID']['input'];
};

export type AddPrescriptionItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  drugName: Scalars['String']['input'];
  drugNumber?: InputMaybe<Scalars['String']['input']>;
  frequency?: InputMaybe<Scalars['Int']['input']>;
  prescriptionId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  variantIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type AddPromotionNoteInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comment: Scalars['String']['input'];
  commentTypeId?: InputMaybe<Scalars['ID']['input']>;
  mentions?: InputMaybe<Array<Scalars['ID']['input']>>;
  promotionId: Scalars['ID']['input'];
};

export type AddStockToLocationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  stockLocationId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};

export type AddToCartInput = {
  batch?: InputMaybe<Array<CartItemInput>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  params?: InputMaybe<Scalars['JSON']['input']>;
  single?: InputMaybe<CartItemInput>;
  takeLocationId?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type AddToWishInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  variantId: Scalars['ID']['input'];
  wishlistId?: InputMaybe<Scalars['ID']['input']>;
};

export type ApplyCouponInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  couponCode: Scalars['String']['input'];
  orderId: Scalars['ID']['input'];
};

export type ApproveOrdersInput = {
  action?: InputMaybe<ApproveAction | `${ApproveAction}`>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  clientsStoreId: Scalars['ID']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type AssignMassPromoInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  promotionId: Scalars['ID']['input'];
  users: Scalars['String']['input'];
};

export type AssignSalesManagerByMsCodeInput = {
  businessClientId?: InputMaybe<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  msCode: Scalars['String']['input'];
};

export type AuthChangePasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type AuthChangePasswordWithOldInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirm: Scalars['String']['input'];
};

export type AuthCheckLoginInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  login: Scalars['String']['input'];
  noToken?: InputMaybe<Scalars['Boolean']['input']>;
  otp?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AuthRegisterInput = {
  birthday?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  familyName?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender | `${Gender}`>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  login: Scalars['String']['input'];
  nationality?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  registerNum?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type AuthResetPasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  login: Scalars['String']['input'];
  redirectUri?: InputMaybe<Scalars['String']['input']>;
};

export type AuthValidateOtpInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  login: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type BatchUpdateVariantsInput = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  costPrice?: InputMaybe<Scalars['Float']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  fragile?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  hsCode?: InputMaybe<Scalars['String']['input']>;
  id: Array<Scalars['ID']['input']>;
  labelCode?: InputMaybe<Scalars['String']['input']>;
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  nonReturnable?: InputMaybe<Scalars['Boolean']['input']>;
  packageCode?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  priceCny?: InputMaybe<Scalars['Float']['input']>;
  priceJpy?: InputMaybe<Scalars['Float']['input']>;
  priceKrw?: InputMaybe<Scalars['Float']['input']>;
  priceMnt?: InputMaybe<Scalars['Float']['input']>;
  priceRub?: InputMaybe<Scalars['Float']['input']>;
  priceUsd?: InputMaybe<Scalars['Float']['input']>;
  priceUzs?: InputMaybe<Scalars['Float']['input']>;
  taxCode?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type BlackFridayPromotionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CancelOrderTemplateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type CancelPrescriptionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type ChangeItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  variantId: Scalars['ID']['input'];
};

export type ChangeLoyaltyCardPasswordInput = {
  cardId: Scalars['ID']['input'];
  cardPassword: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  otp: Scalars['String']['input'];
};

export type ChangeWalletPinInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  pinCode: Scalars['String']['input'];
  previousCode?: InputMaybe<Scalars['String']['input']>;
};

export type ChargeGiftCardInput = {
  amount: Scalars['Float']['input'];
  billAddress?: InputMaybe<AddressInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number: Scalars['String']['input'];
};

export type CheckAlifPayCardInput = {
  cardNum: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  paymentId: Scalars['ID']['input'];
};

export type CheckEntryToAirLotteryEventInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  ticketNumber: Scalars['String']['input'];
};

export type CheckGolomtCardPasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  golomtCardId: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type CheckIntendUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type CheckLoyaltyCardInfoInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
};

export type CheckMobileInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  mobile: Scalars['String']['input'];
};

export type CheckPaymentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type CheckPosStageTicketInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  quantity: Scalars['Int']['input'];
  variantId: Scalars['ID']['input'];
};

export type CheckSegmentWhiteListInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
};

export type ChristmasSlotPromotionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type ClaimGiftInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
  lineItemId?: InputMaybe<Scalars['ID']['input']>;
  orderId?: InputMaybe<Scalars['ID']['input']>;
  promiseId: Scalars['ID']['input'];
};

export type ClaimGiftItemsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  items: Array<GiftItemInput>;
  promiseId: Scalars['ID']['input'];
};

export type ClaimPromotionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type ClearViewTrackInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  datetime?: InputMaybe<Scalars['String']['input']>;
};

export type ClearWishInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  wishlistId: Scalars['ID']['input'];
};

export type ClickPaymentInvoice = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'clickPaymentInvoice';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    invoiceNumber?: Maybe<Scalars['String']['output']>;
    paymentMethod?: Maybe<PaymentMethod>;
    paymentMethodId?: Maybe<Scalars['ID']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type ClickPaymentInvoiceCanIArgs = {
  action: CanIAction;
};

export type CollectOrderInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
};

export type ConfirmAlifPayChargeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  otp: Scalars['String']['input'];
  paymentId: Scalars['ID']['input'];
};

export type ConfirmGolomtVccInput = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  requestId: Scalars['String']['input'];
};

export type ConfirmIntendInvoiceInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  paymentId: Scalars['ID']['input'];
};

export type ConfirmMerchantInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type ConfirmPosStageTicketInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderNumber: Scalars['String']['input'];
};

export type ConfirmPrescriptionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  shippingAddress?: InputMaybe<AddressInput>;
  shippingAddressId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateAddressInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  alternativePhone?: InputMaybe<Scalars['String']['input']>;
  cdq?: InputMaybe<Array<Scalars['ID']['input']>>;
  city?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['ID']['input']>;
  districtId?: InputMaybe<Scalars['ID']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  geoPoint?: InputMaybe<Scalars['String']['input']>;
  isCompany?: InputMaybe<Scalars['Boolean']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  mnQuarterId?: InputMaybe<Scalars['ID']['input']>;
  owningType?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  quarterId?: InputMaybe<Scalars['ID']['input']>;
  stateId?: InputMaybe<Scalars['ID']['input']>;
  what3words?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAssetRoleInput = {
  assetId: Scalars['ID']['input'];
  assetType: Scalars['String']['input'];
  businessId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  peopleId: Scalars['ID']['input'];
  roles: Array<Scalars['String']['input']>;
};

export type CreateBranchInput = {
  businessTypeId?: InputMaybe<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  phone1?: InputMaybe<Scalars['String']['input']>;
  supplySegmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  vendorId: Scalars['ID']['input'];
};

export type CreateBtobBusinessClientInput = {
  businessSupplierObject: BusinessClientInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCampaignInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endsAt: Scalars['ISO8601DateTime']['input'];
  fulfillDate: Scalars['ISO8601Date']['input'];
  listings: Array<CampaignListingInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxItemsCount: Scalars['Int']['input'];
  minItemsCount: Scalars['Int']['input'];
  startsAt: Scalars['ISO8601DateTime']['input'];
  title: Scalars['String']['input'];
  vendorId: Scalars['ID']['input'];
};

export type CreateCardInput = {
  cardHolder?: InputMaybe<Scalars['String']['input']>;
  cardNumber: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
  provider: Scalars['String']['input'];
};

export type CreateChatRoomInput = {
  aroundId: Scalars['ID']['input'];
  aroundType: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateClientsStoreInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  clientsStoreObject: ClientsStoreInputType;
};

export type CreateEMailContactInput = {
  additionalInfo: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateFormInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<FormFieldInput>>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  permalink: Scalars['String']['input'];
  title: Scalars['String']['input'];
  websiteId: Scalars['ID']['input'];
};

export type CreateLeaseInput = {
  address?: InputMaybe<AddressInput>;
  birthday?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eduDegree?: InputMaybe<Scalars['String']['input']>;
  education?: InputMaybe<EducationInput>;
  emergencyContracts: Array<EmergencyContactInput>;
  employment?: InputMaybe<EmploymentInput>;
  familyName?: InputMaybe<Scalars['String']['input']>;
  finance?: InputMaybe<FinanceInput>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  loanContracts?: InputMaybe<LoanContractInput>;
  maritalStatus?: InputMaybe<Scalars['String']['input']>;
  nameInvalid?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  ndCode?: InputMaybe<Scalars['String']['input']>;
  registerNum?: InputMaybe<Scalars['String']['input']>;
  repaymentDay?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateListingsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fulfillDuration?: InputMaybe<Scalars['Int']['input']>;
  maxQty?: InputMaybe<Scalars['Int']['input']>;
  minQty?: InputMaybe<Scalars['Int']['input']>;
  productIds: Array<Scalars['ID']['input']>;
  shippingCategoryId: Scalars['ID']['input'];
  stockLocationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  taxCategoryId?: InputMaybe<Scalars['ID']['input']>;
  websiteId: Scalars['ID']['input'];
};

export type CreateLoyaltyCardInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthDate?: InputMaybe<Scalars['String']['input']>;
  cardPassword: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  customerName?: InputMaybe<Scalars['String']['input']>;
  customerParentName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  homeAddress?: InputMaybe<AddressInput>;
  maritalStatus?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  otp?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  registerNumber?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMassRepaymentInput = {
  amountToRepay: Scalars['Float']['input'];
  asPreview?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<MassRepaymentItemInput>>;
  walletId: Scalars['ID']['input'];
};

export type CreateOptionValueImageInput = {
  attachment: Scalars['Upload']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  optionValueId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};

export type CreateOrUpdateStoreListingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  storeListings: Array<StoreListingInput>;
};

export type CreateOrderTemplateFromOrderInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  orderId: Scalars['ID']['input'];
};

export type CreateOrderTemplateInput = {
  billAddress?: InputMaybe<AddressInput>;
  branchId?: InputMaybe<Scalars['ID']['input']>;
  businessId?: InputMaybe<Scalars['ID']['input']>;
  businessTypeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dayOfWeek?: InputMaybe<Scalars['String']['input']>;
  extraData?: InputMaybe<Scalars['JSON']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<OrderTemplateItemInput>>;
  name: Scalars['String']['input'];
  nextDate: Scalars['ISO8601DateTime']['input'];
  rule?: InputMaybe<Scalars['String']['input']>;
  shipAddress?: InputMaybe<AddressInput>;
  storeLocationId?: InputMaybe<Scalars['ID']['input']>;
  time?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['ID']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  whenToShip?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

export type CreatePollInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  expireAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  question: Scalars['String']['input'];
  startAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  websiteId: Scalars['ID']['input'];
};

export type CreatePrescriptionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['Upload']['input'];
  image1?: InputMaybe<Scalars['Upload']['input']>;
};

export type CreateProductInput = {
  availableOn?: InputMaybe<Scalars['String']['input']>;
  barcode?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  cancelDuration?: InputMaybe<Scalars['Int']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  condition?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileImages?: InputMaybe<Array<Scalars['Upload']['input']>>;
  imageLinks?: InputMaybe<Array<Scalars['String']['input']>>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  info?: InputMaybe<Scalars['JSON']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  keywordId?: InputMaybe<Scalars['ID']['input']>;
  labelCode?: InputMaybe<Scalars['String']['input']>;
  listingOptions?: InputMaybe<Scalars['JSON']['input']>;
  merchantSku?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaKeywords?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  packageCode?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  productCat?: InputMaybe<ProductCat | `${ProductCat}`>;
  property?: InputMaybe<Scalars['JSON']['input']>;
  shippingCategoryId?: InputMaybe<Scalars['ID']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
  storeId?: InputMaybe<Scalars['ID']['input']>;
  taxCode?: InputMaybe<Scalars['String']['input']>;
  taxonIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  translations?: InputMaybe<Array<TranslationInput>>;
  variants?: InputMaybe<Array<VariantInput>>;
  vendor?: InputMaybe<Scalars['JSON']['input']>;
  vendorId: Scalars['ID']['input'];
  youtube?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePushTemplateInput = {
  appId?: InputMaybe<Scalars['ID']['input']>;
  appIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  body?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  deeplink?: InputMaybe<Scalars['String']['input']>;
  name: PushTemplateName | `${PushTemplateName}`;
  title: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
  websiteId: Scalars['ID']['input'];
};

export type CreateReportInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  reportReasonId?: InputMaybe<Scalars['ID']['input']>;
  targetId: Scalars['ID']['input'];
  targetType: Scalars['String']['input'];
};

export type CreateReportReasonInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position: Scalars['Int']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  websiteId: Scalars['ID']['input'];
};

export type CreateReviewInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['Upload']['input']>>;
  rating: Scalars['Float']['input'];
  reviewableId: Scalars['ID']['input'];
  reviewableType: Scalars['String']['input'];
};

export type CreateSalePriceInput = {
  amount: Scalars['Float']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  eventLabel?: InputMaybe<Scalars['Boolean']['input']>;
  expireAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  forceOthers?: InputMaybe<Scalars['Boolean']['input']>;
  isEvent?: InputMaybe<Scalars['Boolean']['input']>;
  qty?: InputMaybe<Scalars['Int']['input']>;
  segmentId?: InputMaybe<Scalars['ID']['input']>;
  startAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  updateAll?: InputMaybe<Scalars['Boolean']['input']>;
  variantId: Scalars['ID']['input'];
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateShipperInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['Upload']['input']>;
  name: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  taxer?: InputMaybe<Scalars['Boolean']['input']>;
  vendorId: Scalars['ID']['input'];
  websiteId: Scalars['ID']['input'];
};

export type CreateShoppyImageInput = {
  attachment: Scalars['Upload']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['ID']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateStockLocationInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address1?: InputMaybe<Scalars['String']['input']>;
  adminName: Scalars['String']['input'];
  backorderableDefault?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['ID']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  preferredAccountIban?: InputMaybe<Scalars['String']['input']>;
  preferredAccountName?: InputMaybe<Scalars['String']['input']>;
  preferredAccountNumber?: InputMaybe<Scalars['String']['input']>;
  propagateAllVariants?: InputMaybe<Scalars['Boolean']['input']>;
  stateId?: InputMaybe<Scalars['ID']['input']>;
  storeLocationId?: InputMaybe<Scalars['ID']['input']>;
  timeSheets?: InputMaybe<Scalars['JSON']['input']>;
  vendorId: Scalars['ID']['input'];
};

export type CreateTecAlliancePriceInput = {
  articleId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateTecAlliancePricesInput = {
  articles: Scalars['JSON']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTrackingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['String']['input'];
  longitude: Scalars['String']['input'];
};

export type CreateUPointCardInput = {
  cardNumber: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  mobile: Scalars['String']['input'];
  pinCode: Scalars['String']['input'];
};

export type CreateUserAddressInput = {
  address: AddressInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateUserArticleInput = {
  articleId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateVariantImageInput = {
  attachment: Scalars['Upload']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  variantId: Scalars['ID']['input'];
};

export type CreateVariantInput = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  costPrice?: InputMaybe<Scalars['Float']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  fragile?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  hsCode?: InputMaybe<Scalars['String']['input']>;
  labelCode?: InputMaybe<Scalars['String']['input']>;
  merchantSku?: InputMaybe<Scalars['String']['input']>;
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  nonReturnable?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  packageCode?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  priceCny?: InputMaybe<Scalars['Float']['input']>;
  priceJpy?: InputMaybe<Scalars['Float']['input']>;
  priceKrw?: InputMaybe<Scalars['Float']['input']>;
  priceMnt?: InputMaybe<Scalars['Float']['input']>;
  priceRub?: InputMaybe<Scalars['Float']['input']>;
  priceUsd?: InputMaybe<Scalars['Float']['input']>;
  priceUzs?: InputMaybe<Scalars['Float']['input']>;
  productId: Scalars['ID']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  taxCode?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateVendorInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  cdq?: InputMaybe<Array<Scalars['ID']['input']>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  districtId?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  facebook?: InputMaybe<Scalars['String']['input']>;
  hideInfo?: InputMaybe<Scalars['Boolean']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  isIndividual: Scalars['Boolean']['input'];
  latitude?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['Upload']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nameEn?: InputMaybe<Scalars['String']['input']>;
  personalNumber?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  primaryTaxons?: InputMaybe<Array<Scalars['ID']['input']>>;
  quarterId?: InputMaybe<Scalars['ID']['input']>;
  register?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['ID']['input']>;
  taxNumber?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type CreateWalletRequestInput = {
  certificateBack?: InputMaybe<Scalars['Upload']['input']>;
  certificateFront?: InputMaybe<Scalars['Upload']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  vendorId: Scalars['ID']['input'];
  walletId: Scalars['ID']['input'];
};

export type CreateWishlistInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type DeactivateCardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type DeactivateVoucherInput = {
  adjustmentId?: InputMaybe<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  params?: InputMaybe<Scalars['JSON']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteEntriesFromSegmentWhiteListInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DestroyAssetRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyBankAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
};

export type DestroyBatchVariantsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Array<Scalars['ID']['input']>;
};

export type DestroyBranchInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyDepartmentStoreInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyEmployeeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyFeedbackTopicInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyFormInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyLineItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyListingsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
  index?: InputMaybe<Scalars['String']['input']>;
};

export type DestroyMerchantInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyOrderTemplateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyPollInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyProductImageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};

export type DestroyProductOptionValueImageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  optionValueId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};

export type DestroyPushTemplateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyReviewInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyReviewsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
  restore?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DestroySalePriceInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroySavedCardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  kind: Scalars['String']['input'];
};

export type DestroyShipperInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyShoppyImageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyStockItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyStockLocationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyStoreListingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyUserAddressInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyUserArticleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyVariantInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DestroyWishInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  variantId?: InputMaybe<Scalars['ID']['input']>;
  wishlistId?: InputMaybe<Scalars['ID']['input']>;
};

export type DestroyWishlistInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DisableCurrentUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type DisableTotpInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  otp: Scalars['String']['input'];
};

export type EmptyCartInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number: Scalars['String']['input'];
  seller?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type EnableTotpInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  otp: Scalars['String']['input'];
};

export type EventBuyInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
};

export type EventEntry = BaseModelInterface &
  Node & {
    __typename?: 'eventEntry';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    entree?: Maybe<EventEntree>;
    entreeIdx?: Maybe<Scalars['String']['output']>;
    entryDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    number?: Maybe<Scalars['String']['output']>;
    score?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
    winning?: Maybe<EventWinning>;
    winningIdx?: Maybe<Scalars['String']['output']>;
    winnings: Array<EventEntryWinning>;
  };

export type EventEntryCanIArgs = {
  action: CanIAction;
};

export type EventEntryConnection = {
  __typename?: 'eventEntryConnection';
  edges: Array<EventEntryEdge>;
  nodes: Array<EventEntry>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type EventEntryConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type EventEntryEdge = {
  __typename?: 'eventEntryEdge';
  cursor: Scalars['String']['output'];
  node: EventEntry;
};

export type EventTry = BaseModelInterface &
  Node & {
    __typename?: 'eventTry';
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    quantity?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    website?: Maybe<Website>;
  };

export type EventTryCanIArgs = {
  action: CanIAction;
};

export type GenerateLoyaltyCardQrInput = {
  cardId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type GenerateUserTokenQrInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type GenerateVariantsInput = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  costPrice?: InputMaybe<Scalars['Float']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  fragile?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  hsCode?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  nonReturnable?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type GolomtOtpInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  otp?: InputMaybe<Scalars['String']['input']>;
  scope: Scalars['String']['input'];
  state: Scalars['String']['input'];
};

export type HalloweenPromotionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type ImageSearchInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['Upload']['input'];
};

export type ImportShoppyImagesInput = {
  attachments: Array<Scalars['Upload']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['ID']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type InviteBtobEmployeeInput = {
  assetRoles?: InputMaybe<Array<AssetRoleInput>>;
  businessClientId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<BusinessUserGroupInput>>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<BusinessUserProfileInput>;
  role?: InputMaybe<EmployeeRole | `${EmployeeRole}`>;
  status?: InputMaybe<B2bApprovalDecisionStatusEnum | `${B2bApprovalDecisionStatusEnum}`>;
};

export type InviteEmployeeInput = {
  assets?: InputMaybe<Scalars['JSON']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  role: EmployeeRole | `${EmployeeRole}`;
  vendorId: Scalars['ID']['input'];
};

export type InviteMerchantInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  vendorId: Scalars['ID']['input'];
  websiteId: Scalars['ID']['input'];
};

export type JoinBusinessInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  storeLocationId?: InputMaybe<Scalars['ID']['input']>;
  vendorId?: InputMaybe<Scalars['ID']['input']>;
};

export type LeaseAcceptTermInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};

export type LeaseCancelInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};

export type LeaseChangeNameInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  nameInvalid?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};

export type LeaseCompleteFixInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};

export type LeaseCompleteInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  leaseAmount?: InputMaybe<Scalars['Float']['input']>;
  months?: InputMaybe<Scalars['Int']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  repaymentDay?: InputMaybe<Scalars['Int']['input']>;
};

export type LeaseDeclineTermInput = {
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};

export type LeaseMakeNormalInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};

export type LeaseUpdateAddressInput = {
  address: AddressInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type LeaseUpdateEducationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  education: EducationInput;
};

export type LeaseUpdateEmergencyInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  emergencyContacts: Array<EmergencyContactInput>;
};

export type LeaseUpdateEmploymentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  employment: EmploymentInput;
};

export type LeaseUpdateFinanceInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  finance: FinanceInput;
  loanContracts?: InputMaybe<LoanContractInput>;
};

export type LeaseUploadPassportInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  passport?: InputMaybe<Scalars['Upload']['input']>;
  passportBack?: InputMaybe<Scalars['Upload']['input']>;
  selfie?: InputMaybe<Scalars['Upload']['input']>;
};

export type LeaveChatRoomInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type LinkDeviceInput = {
  adId?: InputMaybe<Scalars['String']['input']>;
  amountSpent?: InputMaybe<Scalars['Float']['input']>;
  badgeCount?: InputMaybe<Scalars['Float']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  deviceOs?: InputMaybe<Scalars['String']['input']>;
  deviceType?: InputMaybe<Scalars['Int']['input']>;
  gameVersion?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  playerId: Scalars['String']['input'];
  sessionCount?: InputMaybe<Scalars['Int']['input']>;
  subscribed: Scalars['Boolean']['input'];
  tags?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['Int']['input']>;
  webAuth?: InputMaybe<Scalars['String']['input']>;
  webP256?: InputMaybe<Scalars['String']['input']>;
};

export type LotteryEntry = BaseModelInterface &
  Node & {
    __typename?: 'lotteryEntry';
    answers?: Maybe<Array<LotteryEntryAnswer>>;
    canI: Scalars['Boolean']['output'];
    createdAt: Scalars['ISO8601DateTime']['output'];
    entree?: Maybe<LotteryEntree>;
    entryDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
    event?: Maybe<LotteryEvent>;
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    number?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    website?: Maybe<Website>;
    winning?: Maybe<LotteryWinning>;
  };

export type LotteryEntryCanIArgs = {
  action: CanIAction;
};

export type LotteryEntryConnection = {
  __typename?: 'lotteryEntryConnection';
  edges: Array<LotteryEntryEdge>;
  nodes: Array<LotteryEntry>;
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  tagCounts: Array<TagCount>;
  totalCount: Scalars['Int']['output'];
};

export type LotteryEntryConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type LotteryEntryEdge = {
  __typename?: 'lotteryEntryEdge';
  cursor: Scalars['String']['output'];
  node: LotteryEntry;
};

export type McsCheckRegisterInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  registerNum: Scalars['String']['input'];
};

export type McsRegisterInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  mobile: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type McsResetPasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  mobile: Scalars['String']['input'];
  registerNum: Scalars['String']['input'];
};

export type McsSignupInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  mobile: Scalars['String']['input'];
  registerNum: Scalars['String']['input'];
};

export type McsVerifyInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  mobile: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type OrderPayInput = {
  action: PaymentMethodKind | `${PaymentMethodKind}`;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number: Scalars['String']['input'];
  params?: InputMaybe<Scalars['JSON']['input']>;
};

export type PassCouponInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type PassETicketInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type PayCargoPriceInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number: Scalars['String']['input'];
};

export type PaymentActionInput = {
  action: PaymentMethodKind | `${PaymentMethodKind}`;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number: Scalars['String']['input'];
  params?: InputMaybe<Scalars['JSON']['input']>;
};

export type PaynetPaymentSource = BaseModelInterface &
  Node &
  PaymentSourceInterface & {
    __typename?: 'paynetPaymentSource';
    amount?: Maybe<Scalars['Float']['output']>;
    canI: Scalars['Boolean']['output'];
    cancelTime?: Maybe<Scalars['ISO8601DateTime']['output']>;
    createdAt: Scalars['ISO8601DateTime']['output'];
    fiscalSent: Scalars['Boolean']['output'];
    gid: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    paymentMethod?: Maybe<PaymentMethod>;
    paymentMethodId?: Maybe<Scalars['ID']['output']>;
    performTime?: Maybe<Scalars['ISO8601DateTime']['output']>;
    status?: Maybe<Scalars['Int']['output']>;
    transactionId?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['ISO8601DateTime']['output'];
    user?: Maybe<User>;
    userId?: Maybe<Scalars['ID']['output']>;
  };

export type PaynetPaymentSourceCanIArgs = {
  action: CanIAction;
};

export type PerformId1Input = {
  address?: InputMaybe<AddressInput>;
  birthday?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eduDegree?: InputMaybe<Scalars['String']['input']>;
  familyName?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  green?: InputMaybe<Scalars['Int']['input']>;
  incomeConfirm?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  maritalStatus?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  ndCode?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  registerNum?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Int']['input']>;
};

export type PerformLineItemActionInput = {
  action: LineItemAction | `${LineItemAction}`;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  params?: InputMaybe<Scalars['JSON']['input']>;
  shipmentId?: InputMaybe<Scalars['ID']['input']>;
};

export type PerformOrderActionInput = {
  action: OrderAction | `${OrderAction}`;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  params?: InputMaybe<Scalars['JSON']['input']>;
};

export type PlayCurrentEvent = {
  __typename?: 'playCurrentEvent';
  entry?: Maybe<EventEntry>;
  prize?: Maybe<EventPrize>;
};

export type PrintOrdersInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
  orientation?: InputMaybe<TemplateOrientation | `${TemplateOrientation}`>;
  templateName?: InputMaybe<Scalars['String']['input']>;
  websiteId: Scalars['ID']['input'];
};

export type QuickBuyInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  flag: Scalars['String']['input'];
  sku: Scalars['String']['input'];
};

export type ReadAllNotificationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type ReadNotificationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type ReadyShipmentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  deliveryPhoto?: InputMaybe<Scalars['Upload']['input']>;
  deliveryPhoto1?: InputMaybe<Scalars['Upload']['input']>;
  deliveryPhoto1Url?: InputMaybe<Scalars['String']['input']>;
  deliveryPhotoUrl?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type ReceivePreorderShipmentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type RefreshOrderTrackingsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type RegisterQPayCardInput = {
  callbackUrl: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  registerNum?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveBankFromWalletInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  walletId?: InputMaybe<Scalars['ID']['input']>;
};

export type RemoveBtobEmployeeBankAccountInput = {
  bankAccount: B2bBusinessUserBankAccountInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveCampaignListInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type RemoveChatMessageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type RemovePrescriptionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type RemovePrescriptionItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type RemoveViewTrackInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ReplaceNfcInput = {
  citizenId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eventSlug: Scalars['String']['input'];
  nfcId: Scalars['String']['input'];
};

export type RequestCardOtpInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type RequestGolomtVccInput = {
  callback?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type RequestListingOtpInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type RequestMerchantInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  domain: Scalars['String']['input'];
  vendorId: Scalars['ID']['input'];
};

export type RequestPaymentReturnInput = {
  accountBank?: InputMaybe<Scalars['String']['input']>;
  accountName?: InputMaybe<Scalars['String']['input']>;
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  reasonId: Scalars['ID']['input'];
};

export type ResendGiftCardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type ResendIntendSmsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  paymentId: Scalars['ID']['input'];
};

export type ResendShipmentTrackingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type ResolveOutOfStockInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type ReviewDriverInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  rating: Scalars['Float']['input'];
};

export type SearchAddressInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  filterId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lat?: InputMaybe<Scalars['String']['input']>;
  lon?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type SeenChatMessageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  roomId: Scalars['ID']['input'];
};

export type SelectPrescriptionItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  variantId: Scalars['ID']['input'];
};

export type SendChangeLoyaltyCardPasswordOtpInput = {
  cardId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type SendChatMessageInput = {
  attachment?: InputMaybe<Scalars['Upload']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  roomId: Scalars['ID']['input'];
};

export type SendCouponInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dateToSend?: InputMaybe<Scalars['ISO8601Date']['input']>;
  greeting?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  receiverEmail?: InputMaybe<Scalars['String']['input']>;
  receiverName?: InputMaybe<Scalars['String']['input']>;
  receiverPhone?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
};

export type SendCreateLoyaltyCardOtpInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type SendInvoiceInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type SendInvoiceNotificationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type SendJobApplicationEmailInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  award?: InputMaybe<Scalars['JSON']['input']>;
  birthday?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  birthplace?: InputMaybe<Scalars['String']['input']>;
  childrenCount?: InputMaybe<Scalars['Int']['input']>;
  clanName?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  drivingYears?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  facebook?: InputMaybe<Scalars['String']['input']>;
  familyMemberCount?: InputMaybe<Scalars['Int']['input']>;
  familyMembers?: InputMaybe<Scalars['JSON']['input']>;
  firstEmploymentDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hasPoliticalInsider?: InputMaybe<Scalars['Boolean']['input']>;
  hasServedMilitary?: InputMaybe<Scalars['Boolean']['input']>;
  hobby?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  intestedPosition?: InputMaybe<Scalars['String']['input']>;
  isMarried?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Scalars['JSON']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  married?: InputMaybe<Scalars['String']['input']>;
  medicalCondition?: InputMaybe<Scalars['String']['input']>;
  otherInterest?: InputMaybe<Scalars['String']['input']>;
  primaryPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  priorEducation?: InputMaybe<Scalars['JSON']['input']>;
  priorJobExperience?: InputMaybe<Scalars['JSON']['input']>;
  registerAddress?: InputMaybe<Scalars['String']['input']>;
  registerNum?: InputMaybe<Scalars['String']['input']>;
  salary?: InputMaybe<Scalars['String']['input']>;
  secondaryPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  sourceOfInformation?: InputMaybe<Scalars['String']['input']>;
  sportExperience?: InputMaybe<Scalars['JSON']['input']>;
  strength?: InputMaybe<Scalars['String']['input']>;
  training?: InputMaybe<Scalars['JSON']['input']>;
  vehicle?: InputMaybe<Scalars['String']['input']>;
  weakness?: InputMaybe<Scalars['String']['input']>;
};

export type SendNotificationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  invoiceId: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
};

export type SendUserTokenQrInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  number: Scalars['String']['input'];
};

export type SendWalletWithdrawTokenInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type SetAvailabilityInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  isAvailable: Scalars['Boolean']['input'];
};

export type SetGolomtCardPasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  golomtCardId: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type ShipShipmentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  pinCode?: InputMaybe<Scalars['String']['input']>;
  shipperId?: InputMaybe<Scalars['ID']['input']>;
  withoutSms?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ShoppyBoxInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  score: Scalars['Int']['input'];
};

export type ShoppyhubPromotionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type SubmitAnswerInput = {
  answerIds: Array<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type SubmitEntryToAirLotteryEventInput = {
  answers: Scalars['JSON']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['ID']['input'];
};

export type SubmitFormInput = {
  answers: Array<FormAnswerInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type SwapActionInput = {
  action: SwapActionEnum | `${SwapActionEnum}`;
  prioritizeMainVariant?: InputMaybe<Scalars['Boolean']['input']>;
  variants?: InputMaybe<Array<SwapItemInput>>;
};

export type SwapOrderDriverInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
};

export type SyncListingsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type SyncListingsSeoInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type SyncReportInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ToggleAdjustmentPromiseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  promiseId: Scalars['ID']['input'];
};

export type ToggleFollowInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  targetId: Scalars['ID']['input'];
  targetType: Scalars['String']['input'];
};

export type ToggleWishInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  variantId: Scalars['ID']['input'];
  wishlistId?: InputMaybe<Scalars['ID']['input']>;
};

export type TopUpGiftCardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
};

export type TransferShipmentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  targetId: Scalars['ID']['input'];
  targetType: ShipmentTransfer | `${ShipmentTransfer}`;
  variantId: Scalars['ID']['input'];
};

export type UnlockWalletPinInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  otp?: InputMaybe<Scalars['String']['input']>;
  pinCode?: InputMaybe<Scalars['String']['input']>;
  walletId: Scalars['ID']['input'];
};

export type UpdateAddressInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  alternativePhone?: InputMaybe<Scalars['String']['input']>;
  apartment?: InputMaybe<Scalars['String']['input']>;
  cdq?: InputMaybe<Array<Scalars['ID']['input']>>;
  city?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['ID']['input']>;
  districtId?: InputMaybe<Scalars['ID']['input']>;
  entrance?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  floor?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  geoPoint?: InputMaybe<Scalars['String']['input']>;
  house?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  intercom?: InputMaybe<Scalars['String']['input']>;
  isBillAddress?: InputMaybe<Scalars['Boolean']['input']>;
  isCompany?: InputMaybe<Scalars['Boolean']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  mnQuarterId?: InputMaybe<Scalars['ID']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  owningType?: InputMaybe<Scalars['String']['input']>;
  passportNumber?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  pinFl?: InputMaybe<Scalars['String']['input']>;
  quarterId?: InputMaybe<Scalars['ID']['input']>;
  stateId?: InputMaybe<Scalars['ID']['input']>;
  stateName?: InputMaybe<Scalars['String']['input']>;
  what3words?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAfterPayInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  status?: InputMaybe<AfterPay | `${AfterPay}`>;
  types?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateAssetRoleBatchInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  permissions: Array<AssetTargetRoleInput>;
};

export type UpdateAssetRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateAvatarInput = {
  avatar?: InputMaybe<Scalars['Upload']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBankAccountInput = {
  accountNo: Scalars['String']['input'];
  additionalDetails: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateBranchInput = {
  addressId?: InputMaybe<Scalars['ID']['input']>;
  businessTypeId?: InputMaybe<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone1?: InputMaybe<Scalars['String']['input']>;
  supplySegmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type UpdateBtobBusinessClientInput = {
  businessSupplierObject: BusinessClientInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBtobOrderTemplateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCampaignInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endsAt: Scalars['ISO8601DateTime']['input'];
  fulfillDate: Scalars['ISO8601Date']['input'];
  id: Scalars['ID']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  maxItemsCount: Scalars['Int']['input'];
  minItemsCount: Scalars['Int']['input'];
  startsAt: Scalars['ISO8601DateTime']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type UpdateCampaignListInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  price: Scalars['Float']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
  variantId: Scalars['ID']['input'];
};

export type UpdateCardInput = {
  cardHolder?: InputMaybe<Scalars['String']['input']>;
  cardNumber?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateChannelInput = {
  background?: InputMaybe<Scalars['Upload']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type UpdateCheckoutOrderInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  clientsStoreId?: InputMaybe<Scalars['ID']['input']>;
  forceComplete?: InputMaybe<Scalars['Boolean']['input']>;
  number: Scalars['String']['input'];
  params: Scalars['JSON']['input'];
  shippingAddress?: InputMaybe<AddressInput>;
  shippingAddressId?: InputMaybe<Scalars['ID']['input']>;
  shippingMethodId?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  whenToShip?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

export type UpdateClientsStoreInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  clientsStoreObject: ClientsStoreInputType;
};

export type UpdateCompleteOrderInput = {
  billAddress: AddressInput;
  channel?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  clientVendorId?: InputMaybe<Scalars['ID']['input']>;
  clientsStoreId?: InputMaybe<Scalars['ID']['input']>;
  couponCode?: InputMaybe<Scalars['String']['input']>;
  ebarimt?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  extraData?: InputMaybe<Scalars['JSON']['input']>;
  flag?: InputMaybe<Scalars['String']['input']>;
  isConfirmation?: InputMaybe<Scalars['Boolean']['input']>;
  lineItems?: InputMaybe<Array<LineItemInput>>;
  orderId: Scalars['ID']['input'];
  parcelDelivery?: InputMaybe<Scalars['Boolean']['input']>;
  paymentState?: InputMaybe<Scalars['Boolean']['input']>;
  payments?: InputMaybe<Array<Scalars['JSON']['input']>>;
  shipAddress?: InputMaybe<AddressInput>;
  useBilling?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['ID']['input'];
  websiteId: Scalars['ID']['input'];
  whenToShip?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

export type UpdateEmployeeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  msCode?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<EmployeeRole | `${EmployeeRole}`>;
  salesManagerBonus?: InputMaybe<Scalars['Float']['input']>;
  salesManagerIsVendor?: InputMaybe<Scalars['Boolean']['input']>;
  salesManagerTaxpayerNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFeedbackInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  status: Scalars['String']['input'];
};

export type UpdateFeedbackTopicInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  orderRequired?: InputMaybe<Scalars['Boolean']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  positive?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFormEntryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFormInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['Upload']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<FormFieldInput>>;
  id: Scalars['ID']['input'];
  permalink?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInvitedBtobEmployeeInput = {
  assetRoles?: InputMaybe<Array<AssetRoleInput>>;
  businessClientId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<BusinessUserGroupInput>>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<BusinessUserProfileInput>;
  role?: InputMaybe<EmployeeRole | `${EmployeeRole}`>;
  status?: InputMaybe<B2bApprovalDecisionStatusEnum | `${B2bApprovalDecisionStatusEnum}`>;
};

export type UpdateItemInput = {
  attachments?: InputMaybe<Array<Scalars['Upload']['input']>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  onUnavailable?: InputMaybe<SwapActionInput>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateKycGolomtInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  address3?: InputMaybe<Scalars['String']['input']>;
  apartment?: InputMaybe<Scalars['String']['input']>;
  appointment?: InputMaybe<Scalars['String']['input']>;
  branchId?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  creditLimit?: InputMaybe<Scalars['Int']['input']>;
  customerCheck?: InputMaybe<Scalars['Boolean']['input']>;
  degree?: InputMaybe<Scalars['String']['input']>;
  doorNo?: InputMaybe<Scalars['String']['input']>;
  embossName?: InputMaybe<Scalars['String']['input']>;
  enrollmentDate?: InputMaybe<Scalars['String']['input']>;
  entry?: InputMaybe<Scalars['String']['input']>;
  maritalStatus?: InputMaybe<Scalars['String']['input']>;
  schoolName?: InputMaybe<Scalars['String']['input']>;
  sector?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  streetName?: InputMaybe<Scalars['String']['input']>;
  subDistrict?: InputMaybe<Scalars['String']['input']>;
  subSector?: InputMaybe<Scalars['String']['input']>;
  town?: InputMaybe<Scalars['String']['input']>;
  yearsWork?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateKycInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ndCode?: InputMaybe<Scalars['String']['input']>;
  passport?: InputMaybe<Scalars['Upload']['input']>;
  passportBack?: InputMaybe<Scalars['Upload']['input']>;
  selfie?: InputMaybe<Scalars['Upload']['input']>;
};

export type UpdateListingBatchInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  extendActivation?: InputMaybe<Scalars['Boolean']['input']>;
  fulfillDuration?: InputMaybe<Scalars['Int']['input']>;
  hideOnSearch?: InputMaybe<Scalars['Boolean']['input']>;
  ids: Array<Scalars['ID']['input']>;
  maxQty?: InputMaybe<Scalars['Int']['input']>;
  minQty?: InputMaybe<Scalars['Int']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  seoDescription?: InputMaybe<Scalars['String']['input']>;
  seoKeywords?: InputMaybe<Scalars['String']['input']>;
  seoTitle?: InputMaybe<Scalars['String']['input']>;
  shippingCategoryId?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  taxCategoryId?: InputMaybe<Scalars['ID']['input']>;
  taxonIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type UpdateListingEsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  param: Scalars['JSON']['input'];
};

export type UpdateListingInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  badgeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  bonus?: InputMaybe<Scalars['Float']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fulfillDuration?: InputMaybe<Scalars['Int']['input']>;
  hideOnSearch?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  maxQty?: InputMaybe<Scalars['Int']['input']>;
  minQty?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<ProductInput>;
  property?: InputMaybe<Scalars['JSON']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  seoDescription?: InputMaybe<Scalars['String']['input']>;
  seoKeywords?: InputMaybe<Scalars['String']['input']>;
  seoTitle?: InputMaybe<Scalars['String']['input']>;
  shippingCategoryId?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stepQty?: InputMaybe<Scalars['Int']['input']>;
  stockLocationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  taxCategoryId?: InputMaybe<Scalars['ID']['input']>;
  taxonIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type UpdateListingOptionsInput = {
  canBuy: Scalars['Boolean']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  donation?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  otp?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLoginInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  login: Scalars['String']['input'];
  overwrite?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateMassChatMessageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  roomIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  sendAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

export type UpdateMerchantInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  allowCampaign?: InputMaybe<Scalars['Boolean']['input']>;
  autoApprove?: InputMaybe<Scalars['Boolean']['input']>;
  background?: InputMaybe<Scalars['Upload']['input']>;
  banks?: InputMaybe<Array<BankInput>>;
  cartAmount?: InputMaybe<Scalars['Float']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  ebarimtType?: InputMaybe<Ebarimt | `${Ebarimt}`>;
  email?: InputMaybe<Scalars['String']['input']>;
  facebook?: InputMaybe<Scalars['String']['input']>;
  featuredFrom?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  featuredTo?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  fulfillmentDays?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['String']['input']>;
  localId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  preferredAllowSelfBuy?: InputMaybe<Scalars['Boolean']['input']>;
  preferredDeliveryType?: InputMaybe<Scalars['String']['input']>;
  preferredMaxCartAmount?: InputMaybe<Scalars['Float']['input']>;
  preferredMinStock?: InputMaybe<Scalars['Int']['input']>;
  preferredShippingCategoryId?: InputMaybe<Scalars['ID']['input']>;
  preferredVatReceiverType?: InputMaybe<Scalars['String']['input']>;
  preferredVatRegister?: InputMaybe<Scalars['String']['input']>;
  receiveOrderNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  web?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderInput = {
  billAddress?: InputMaybe<AddressInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  driverId?: InputMaybe<Scalars['ID']['input']>;
  driverShippingAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  driverStatus?: InputMaybe<Scalars['String']['input']>;
  driverTakenAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  extraData?: InputMaybe<Scalars['JSON']['input']>;
  flag?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  leaseLeft?: InputMaybe<Scalars['Float']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  shipAddress?: InputMaybe<AddressInput>;
  whenToShip?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

export type UpdateOrderTemplateInput = {
  billAddress?: InputMaybe<AddressInput>;
  branchId?: InputMaybe<Scalars['ID']['input']>;
  businessId?: InputMaybe<Scalars['ID']['input']>;
  businessTypeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dayOfWeek?: InputMaybe<Scalars['String']['input']>;
  extraData?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<OrderTemplateItemInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  nextDate: Scalars['ISO8601DateTime']['input'];
  rule?: InputMaybe<Scalars['String']['input']>;
  shipAddress?: InputMaybe<AddressInput>;
  storeLocationId?: InputMaybe<Scalars['ID']['input']>;
  time?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['ID']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  whenToShip?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

export type UpdatePollInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  expireAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['Upload']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<Array<PollQuestionInput>>;
  startAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

export type UpdatePositionOptionValueImageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  optionValueId: Scalars['ID']['input'];
  positions: Array<Scalars['ID']['input']>;
  productId: Scalars['ID']['input'];
};

export type UpdatePositionSalePricesInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  positions: Array<Scalars['ID']['input']>;
  variantId: Scalars['ID']['input'];
};

export type UpdatePositionVariantImageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  positions: Array<Scalars['ID']['input']>;
  variantId: Scalars['ID']['input'];
};

export type UpdatePrescriptionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  diagnosis?: InputMaybe<Scalars['String']['input']>;
  doctorHospital?: InputMaybe<Scalars['String']['input']>;
  doctorName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  patientName?: InputMaybe<Scalars['String']['input']>;
  prescriptionDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
};

export type UpdatePrescriptionItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  drugName?: InputMaybe<Scalars['String']['input']>;
  drugNumber?: InputMaybe<Scalars['String']['input']>;
  frequency?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
  variantIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type UpdateProductInput = {
  availableOn?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  availableUntil?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  barcode?: InputMaybe<Scalars['String']['input']>;
  cancelDuration?: InputMaybe<Scalars['Int']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  condition?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileImages?: InputMaybe<Array<Scalars['Upload']['input']>>;
  fragile?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  imageLinks?: InputMaybe<Array<Scalars['String']['input']>>;
  images?: InputMaybe<Array<Scalars['ID']['input']>>;
  info?: InputMaybe<Scalars['JSON']['input']>;
  keywordId?: InputMaybe<Scalars['ID']['input']>;
  labelCode?: InputMaybe<Scalars['String']['input']>;
  listingOptions?: InputMaybe<Scalars['JSON']['input']>;
  masterImageId?: InputMaybe<Scalars['ID']['input']>;
  merchantSku?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaKeywords?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nonReturnable?: InputMaybe<Scalars['Boolean']['input']>;
  packageCode?: InputMaybe<Scalars['String']['input']>;
  preferredEticketActivationMethod?: InputMaybe<Scalars['String']['input']>;
  preferredEticketRequireActivation?: InputMaybe<Scalars['Boolean']['input']>;
  preferredLotteryRequireSubscription?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  productCat?: InputMaybe<ProductCat | `${ProductCat}`>;
  property?: InputMaybe<Scalars['JSON']['input']>;
  shippingCategoryId?: InputMaybe<Scalars['ID']['input']>;
  sizingGuideId?: InputMaybe<Scalars['ID']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
  storeId?: InputMaybe<Scalars['ID']['input']>;
  taxCode?: InputMaybe<Scalars['String']['input']>;
  taxonIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  translations?: InputMaybe<Array<TranslationInput>>;
  variants?: InputMaybe<Array<VariantInput>>;
  vendor?: InputMaybe<Scalars['JSON']['input']>;
  vendorId?: InputMaybe<Scalars['ID']['input']>;
  youtube?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePushTemplateInput = {
  appId?: InputMaybe<Scalars['ID']['input']>;
  appIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  body?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  deeplink?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: PushTemplateName | `${PushTemplateName}`;
  title: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReportReasonInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  position: Scalars['Int']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSaleListingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  items: Array<ListingSaleInput>;
};

export type UpdateSalePriceInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  eventLabel?: InputMaybe<Scalars['Boolean']['input']>;
  expireAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  forceOthers?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  isEvent?: InputMaybe<Scalars['Boolean']['input']>;
  qty?: InputMaybe<Scalars['Int']['input']>;
  segmentId?: InputMaybe<Scalars['ID']['input']>;
  startAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateShipmentTrackingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  deliveryCompany?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['ID']['input']>;
  number: Scalars['String']['input'];
  pending?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  statusDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  trackingNumber?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type UpdateShipperInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  logo?: InputMaybe<Scalars['Upload']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  taxer?: InputMaybe<Scalars['Boolean']['input']>;
  vendorId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateStockItemInput = {
  backorderable?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  countOnHand?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
};

export type UpdateStockLocationInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address1?: InputMaybe<Scalars['String']['input']>;
  adminName?: InputMaybe<Scalars['String']['input']>;
  backorderableDefault?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['ID']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  preferredAccountIban?: InputMaybe<Scalars['String']['input']>;
  preferredAccountName?: InputMaybe<Scalars['String']['input']>;
  preferredAccountNumber?: InputMaybe<Scalars['String']['input']>;
  propagateAllVariants?: InputMaybe<Scalars['Boolean']['input']>;
  stateId?: InputMaybe<Scalars['ID']['input']>;
  storeLocationId?: InputMaybe<Scalars['ID']['input']>;
  timeSheets?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateUserAddressInput = {
  address: AddressInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type UpdateUserClearanceInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isValidUserClearance?: InputMaybe<Scalars['Boolean']['input']>;
  validatedBirthday?: InputMaybe<Scalars['String']['input']>;
  validatedFirstName?: InputMaybe<Scalars['String']['input']>;
  validatedLastName?: InputMaybe<Scalars['String']['input']>;
  validatedMiddleName?: InputMaybe<Scalars['String']['input']>;
  validatedPassportNumber?: InputMaybe<Scalars['String']['input']>;
  validatedPinFl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserProfileInput = {
  appsflyerAppId?: InputMaybe<Scalars['String']['input']>;
  appsflyerId?: InputMaybe<Scalars['String']['input']>;
  billAddress?: InputMaybe<AddressInput>;
  birthday?: InputMaybe<Scalars['String']['input']>;
  clickGobozorMiniAppAcceptance?: InputMaybe<Scalars['Boolean']['input']>;
  clickMiniAppAcceptance?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eduDegree?: InputMaybe<Scalars['String']['input']>;
  education?: InputMaybe<EducationInput>;
  emergencyContacts?: InputMaybe<Array<EmergencyContactInput>>;
  employment?: InputMaybe<EmploymentInput>;
  familyName?: InputMaybe<Scalars['String']['input']>;
  finance?: InputMaybe<FinanceInput>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender | `${Gender}`>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isLease?: InputMaybe<Scalars['Boolean']['input']>;
  isValidUserClearance?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  maritalStatus?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  registerNum?: InputMaybe<Scalars['String']['input']>;
  storeLocationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  unconfirmedEmail?: InputMaybe<Scalars['String']['input']>;
  unconfirmedMobile?: InputMaybe<Scalars['String']['input']>;
  validatedBirthday?: InputMaybe<Scalars['String']['input']>;
  validatedFirstName?: InputMaybe<Scalars['String']['input']>;
  validatedLastName?: InputMaybe<Scalars['String']['input']>;
  validatedMiddleName?: InputMaybe<Scalars['String']['input']>;
  validatedPassportNumber?: InputMaybe<Scalars['String']['input']>;
  validatedPinFl?: InputMaybe<Scalars['String']['input']>;
  xpartnersClickId?: InputMaybe<Scalars['String']['input']>;
  xpartnersExpireAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};

export type UpdateVariantInput = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  costCurrency?: InputMaybe<Scalars['String']['input']>;
  costPrice?: InputMaybe<Scalars['Float']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  fragile?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  hsCode?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  labelCode?: InputMaybe<Scalars['String']['input']>;
  merchantSku?: InputMaybe<Scalars['String']['input']>;
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  nonReturnable?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  packageCode?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  priceCny?: InputMaybe<Scalars['Float']['input']>;
  priceJpy?: InputMaybe<Scalars['Float']['input']>;
  priceKrw?: InputMaybe<Scalars['Float']['input']>;
  priceMnt?: InputMaybe<Scalars['Float']['input']>;
  priceRub?: InputMaybe<Scalars['Float']['input']>;
  priceUsd?: InputMaybe<Scalars['Float']['input']>;
  priceUzs?: InputMaybe<Scalars['Float']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  stockLocked?: InputMaybe<Scalars['Boolean']['input']>;
  taxCode?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateVendorInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  cdq?: InputMaybe<Array<Scalars['ID']['input']>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['ID']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  districtId?: InputMaybe<Scalars['ID']['input']>;
  ebarimtType?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  facebook?: InputMaybe<Scalars['String']['input']>;
  hideInfo?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  instagram?: InputMaybe<Scalars['String']['input']>;
  isIndividual?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['Upload']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameEn?: InputMaybe<Scalars['String']['input']>;
  note1?: InputMaybe<Scalars['String']['input']>;
  note2?: InputMaybe<Scalars['String']['input']>;
  note3?: InputMaybe<Scalars['String']['input']>;
  note4?: InputMaybe<Scalars['String']['input']>;
  note5?: InputMaybe<Scalars['String']['input']>;
  note6?: InputMaybe<Scalars['String']['input']>;
  note7?: InputMaybe<Scalars['String']['input']>;
  note8?: InputMaybe<Scalars['String']['input']>;
  personalNumber?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  pos?: InputMaybe<Scalars['Boolean']['input']>;
  preferredBusinessModels?: InputMaybe<Array<Scalars['String']['input']>>;
  preferredNameValidated?: InputMaybe<Scalars['Boolean']['input']>;
  preferredRegisterValidated?: InputMaybe<Scalars['Boolean']['input']>;
  preferredSeoAutoUpdate?: InputMaybe<Scalars['Boolean']['input']>;
  preferredVatValidated?: InputMaybe<Scalars['Boolean']['input']>;
  primaryTaxons?: InputMaybe<Array<Scalars['ID']['input']>>;
  quarterId?: InputMaybe<Scalars['ID']['input']>;
  register?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['ID']['input']>;
  taxNumber?: InputMaybe<Scalars['String']['input']>;
  vat?: InputMaybe<Scalars['Boolean']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVendorLogoInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  logo: Scalars['Upload']['input'];
};

export type UpdateWishedProductInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  variantId: Scalars['ID']['input'];
};

export type UpdateWishlistInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type UploadSegmentWhiteListInput = {
  attachment?: InputMaybe<Scalars['Upload']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
};

export type UseCouponInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type UseGiftCardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  clientVendorId?: InputMaybe<Scalars['ID']['input']>;
  code: Scalars['String']['input'];
};

export type UseLoyaltyCardInput = {
  amount: Scalars['Float']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
};

export type UseStoreCreditByIdInput = {
  amount: Scalars['Float']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type UseStoreCreditInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type UseUPointCardInput = {
  amount: Scalars['Float']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
};

export type UseUserTokenQrInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type UseVoucherInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  number?: InputMaybe<Scalars['String']['input']>;
  params?: InputMaybe<Scalars['JSON']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type ValidateApplePayMerchantInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  merchantId: Scalars['String']['input'];
  validationUrl: Scalars['String']['input'];
};

export type VerifyCardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  otp: Scalars['String']['input'];
};

export type VerifyEMongoliaInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  services?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type VerifyLoginInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  login: Scalars['String']['input'];
  overwrite?: InputMaybe<Scalars['Boolean']['input']>;
  token: Scalars['String']['input'];
};

export type VerifyMnCitizenIdentityInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  type: PassportFile | `${PassportFile}`;
};

export type VerifyWalletInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  passport: Scalars['Upload']['input'];
  passportBack: Scalars['Upload']['input'];
  registerNum: Scalars['String']['input'];
  selfie: Scalars['Upload']['input'];
};

export type VerifyWalletWithdrawInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  pinCode?: InputMaybe<Scalars['String']['input']>;
  verificationCode?: InputMaybe<Scalars['String']['input']>;
};

export type ViewTrackInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  listingId?: InputMaybe<Scalars['ID']['input']>;
  productId?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type WalletWithdrawInput = {
  amount: Scalars['Float']['input'];
  bankId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  walletId?: InputMaybe<Scalars['ID']['input']>;
};
