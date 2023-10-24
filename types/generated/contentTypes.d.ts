import type { Schema, Attribute } from "@strapi/strapi"

export interface AdminPermission extends Schema.CollectionType {
  collectionName: "admin_permissions"
  info: {
    name: "Permission"
    description: ""
    singularName: "permission"
    pluralName: "permissions"
    displayName: "Permission"
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    properties: Attribute.JSON & Attribute.DefaultTo<{}>
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>
    role: Attribute.Relation<"admin::permission", "manyToOne", "admin::role">
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "admin::permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "admin::permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: "admin_users"
  info: {
    name: "User"
    description: ""
    singularName: "user"
    pluralName: "users"
    displayName: "User"
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    username: Attribute.String
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: Attribute.String & Attribute.Private
    registrationToken: Attribute.String & Attribute.Private
    isActive: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    roles: Attribute.Relation<"admin::user", "manyToMany", "admin::role"> &
      Attribute.Private
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    preferedLanguage: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<"admin::user", "oneToOne", "admin::user"> &
      Attribute.Private
    updatedBy: Attribute.Relation<"admin::user", "oneToOne", "admin::user"> &
      Attribute.Private
  }
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: "admin_roles"
  info: {
    name: "Role"
    description: ""
    singularName: "role"
    pluralName: "roles"
    displayName: "Role"
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    description: Attribute.String
    users: Attribute.Relation<"admin::role", "manyToMany", "admin::user">
    permissions: Attribute.Relation<
      "admin::role",
      "oneToMany",
      "admin::permission"
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<"admin::role", "oneToOne", "admin::user"> &
      Attribute.Private
    updatedBy: Attribute.Relation<"admin::role", "oneToOne", "admin::user"> &
      Attribute.Private
  }
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: "strapi_api_tokens"
  info: {
    name: "Api Token"
    singularName: "api-token"
    pluralName: "api-tokens"
    displayName: "Api Token"
    description: ""
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }> &
      Attribute.DefaultTo<"">
    type: Attribute.Enumeration<["read-only", "full-access", "custom"]> &
      Attribute.Required &
      Attribute.DefaultTo<"read-only">
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    lastUsedAt: Attribute.DateTime
    permissions: Attribute.Relation<
      "admin::api-token",
      "oneToMany",
      "admin::api-token-permission"
    >
    expiresAt: Attribute.DateTime
    lifespan: Attribute.BigInteger
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "admin::api-token",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "admin::api-token",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: "strapi_api_token_permissions"
  info: {
    name: "API Token Permission"
    description: ""
    singularName: "api-token-permission"
    pluralName: "api-token-permissions"
    displayName: "API Token Permission"
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    token: Attribute.Relation<
      "admin::api-token-permission",
      "manyToOne",
      "admin::api-token"
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "admin::api-token-permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "admin::api-token-permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: "strapi_transfer_tokens"
  info: {
    name: "Transfer Token"
    singularName: "transfer-token"
    pluralName: "transfer-tokens"
    displayName: "Transfer Token"
    description: ""
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }> &
      Attribute.DefaultTo<"">
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    lastUsedAt: Attribute.DateTime
    permissions: Attribute.Relation<
      "admin::transfer-token",
      "oneToMany",
      "admin::transfer-token-permission"
    >
    expiresAt: Attribute.DateTime
    lifespan: Attribute.BigInteger
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "admin::transfer-token",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "admin::transfer-token",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: "strapi_transfer_token_permissions"
  info: {
    name: "Transfer Token Permission"
    description: ""
    singularName: "transfer-token-permission"
    pluralName: "transfer-token-permissions"
    displayName: "Transfer Token Permission"
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    token: Attribute.Relation<
      "admin::transfer-token-permission",
      "manyToOne",
      "admin::transfer-token"
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "admin::transfer-token-permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "admin::transfer-token-permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: "files"
  info: {
    singularName: "file"
    pluralName: "files"
    displayName: "File"
    description: ""
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String & Attribute.Required
    alternativeText: Attribute.String
    caption: Attribute.String
    width: Attribute.Integer
    height: Attribute.Integer
    formats: Attribute.JSON
    hash: Attribute.String & Attribute.Required
    ext: Attribute.String
    mime: Attribute.String & Attribute.Required
    size: Attribute.Decimal & Attribute.Required
    url: Attribute.String & Attribute.Required
    previewUrl: Attribute.String
    provider: Attribute.String & Attribute.Required
    provider_metadata: Attribute.JSON
    related: Attribute.Relation<"plugin::upload.file", "morphToMany">
    folder: Attribute.Relation<
      "plugin::upload.file",
      "manyToOne",
      "plugin::upload.folder"
    > &
      Attribute.Private
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "plugin::upload.file",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "plugin::upload.file",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: "upload_folders"
  info: {
    singularName: "folder"
    pluralName: "folders"
    displayName: "Folder"
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1
      }>
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique
    parent: Attribute.Relation<
      "plugin::upload.folder",
      "manyToOne",
      "plugin::upload.folder"
    >
    children: Attribute.Relation<
      "plugin::upload.folder",
      "oneToMany",
      "plugin::upload.folder"
    >
    files: Attribute.Relation<
      "plugin::upload.folder",
      "oneToMany",
      "plugin::upload.file"
    >
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "plugin::upload.folder",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "plugin::upload.folder",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: "i18n_locale"
  info: {
    singularName: "locale"
    pluralName: "locales"
    collectionName: "locales"
    displayName: "Locale"
    description: ""
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1
        max: 50
      }>
    code: Attribute.String & Attribute.Unique
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "plugin::i18n.locale",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "plugin::i18n.locale",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: "up_permissions"
  info: {
    name: "permission"
    description: ""
    singularName: "permission"
    pluralName: "permissions"
    displayName: "Permission"
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String & Attribute.Required
    role: Attribute.Relation<
      "plugin::users-permissions.permission",
      "manyToOne",
      "plugin::users-permissions.role"
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "plugin::users-permissions.permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "plugin::users-permissions.permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: "up_roles"
  info: {
    name: "role"
    description: ""
    singularName: "role"
    pluralName: "roles"
    displayName: "Role"
  }
  pluginOptions: {
    "content-manager": {
      visible: false
    }
    "content-type-builder": {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3
      }>
    description: Attribute.String
    type: Attribute.String & Attribute.Unique
    permissions: Attribute.Relation<
      "plugin::users-permissions.role",
      "oneToMany",
      "plugin::users-permissions.permission"
    >
    users: Attribute.Relation<
      "plugin::users-permissions.role",
      "oneToMany",
      "plugin::users-permissions.user"
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "plugin::users-permissions.role",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "plugin::users-permissions.role",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: "up_users"
  info: {
    name: "user"
    description: ""
    singularName: "user"
    pluralName: "users"
    displayName: "User"
  }
  options: {
    draftAndPublish: false
    timestamps: true
  }
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3
      }>
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    provider: Attribute.String
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: Attribute.String & Attribute.Private
    confirmationToken: Attribute.String & Attribute.Private
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>
    role: Attribute.Relation<
      "plugin::users-permissions.user",
      "manyToOne",
      "plugin::users-permissions.role"
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "plugin::users-permissions.user",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "plugin::users-permissions.user",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface ApiAboutPageAboutPage extends Schema.SingleType {
  collectionName: "about_pages"
  info: {
    singularName: "about-page"
    pluralName: "about-pages"
    displayName: "AboutPage"
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    images: Attribute.Media
    title: Attribute.String
    seo: Attribute.Component<"shared.seo">
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "api::about-page.about-page",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "api::about-page.about-page",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface ApiArticleArticle extends Schema.CollectionType {
  collectionName: "articles"
  info: {
    singularName: "article"
    pluralName: "articles"
    displayName: "Article"
    description: ""
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    publishedat: Attribute.DateTime &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    status: Attribute.Enumeration<["draft ", "published"]> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    slug: Attribute.UID<"api::article.article", "title"> & Attribute.Required
    image: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    Key: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    category: Attribute.Relation<
      "api::article.article",
      "oneToOne",
      "api::category.category"
    >
    author: Attribute.Relation<
      "api::article.article",
      "oneToOne",
      "api::write.write"
    >
    seo: Attribute.Component<"shared.seo"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "api::article.article",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "api::article.article",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    localizations: Attribute.Relation<
      "api::article.article",
      "oneToMany",
      "api::article.article"
    >
    locale: Attribute.String
  }
}

export interface ApiBlogBlog extends Schema.SingleType {
  collectionName: "blogs"
  info: {
    singularName: "blog"
    pluralName: "blogs"
    displayName: "Blog"
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    title: Attribute.String
    Images: Attribute.Media
    seo: Attribute.Component<"shared.seo">
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<"api::blog.blog", "oneToOne", "admin::user"> &
      Attribute.Private
    updatedBy: Attribute.Relation<"api::blog.blog", "oneToOne", "admin::user"> &
      Attribute.Private
  }
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: "categories"
  info: {
    singularName: "category"
    pluralName: "categories"
    displayName: "Category"
    description: ""
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    name: Attribute.String & Attribute.Required
    slug: Attribute.UID<"api::category.category", "name"> & Attribute.Required
    articles: Attribute.Relation<
      "api::category.category",
      "oneToOne",
      "api::article.article"
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "api::category.category",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "api::category.category",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface ApiContactPageContactPage extends Schema.SingleType {
  collectionName: "contact_pages"
  info: {
    singularName: "contact-page"
    pluralName: "contact-pages"
    displayName: "ContactPage"
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    title: Attribute.String
    images: Attribute.Media
    seo: Attribute.Component<"shared.seo">
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "api::contact-page.contact-page",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "api::contact-page.contact-page",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface ApiCurriculumCurriculum extends Schema.CollectionType {
  collectionName: "curriculums"
  info: {
    singularName: "curriculum"
    pluralName: "curriculums"
    displayName: "Curriculums"
    description: ""
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    firstName: Attribute.String
    email: Attribute.String
    phone: Attribute.String
    website: Attribute.String
    curriculum: Attribute.Media
    lastName: Attribute.String
    reference: Attribute.String
    linkedin: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "api::curriculum.curriculum",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "api::curriculum.curriculum",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface ApiGlobalGlobal extends Schema.SingleType {
  collectionName: "globals"
  info: {
    singularName: "global"
    pluralName: "globals"
    displayName: "Global"
    description: ""
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    favicon: Attribute.Media
    siteName: Attribute.String & Attribute.Required
    seo: Attribute.Component<"shared.seo">
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "api::global.global",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "api::global.global",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface ApiHomePageHomePage extends Schema.SingleType {
  collectionName: "home_pages"
  info: {
    singularName: "home-page"
    pluralName: "home-pages"
    displayName: "HomePage"
    description: ""
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    seo: Attribute.Component<"shared.seo">
    hero: Attribute.Component<"sections.hero">
    clientsImage: Attribute.Media
    teamImages: Attribute.Media
    projectsImage: Attribute.Media
    teamPage: Attribute.Media
    Test: Attribute.Media
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "api::home-page.home-page",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "api::home-page.home-page",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface ApiMemberMember extends Schema.CollectionType {
  collectionName: "members"
  info: {
    singularName: "member"
    pluralName: "members"
    displayName: "Members"
    description: ""
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    name: Attribute.String
    description: Attribute.Text
    avatar: Attribute.Media
    cardDescription: Attribute.Text
    technologies: Attribute.String
    email: Attribute.Email
    role: Attribute.String
    positions: Attribute.String
    lastName: Attribute.String
    skill: Attribute.Component<"shared.skill", true>
    Portafolio: Attribute.Text
    slug: Attribute.UID<"api::member.member", "name">
    seo: Attribute.Component<"shared.seo">
    avatarHover: Attribute.Media
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "api::member.member",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "api::member.member",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface ApiMemberpageMemberpage extends Schema.SingleType {
  collectionName: "memberpages"
  info: {
    singularName: "memberpage"
    pluralName: "memberpages"
    displayName: "Memberpage"
    description: ""
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    Background: Attribute.Media
    moreDetails: Attribute.Component<"shared.more-details", true>
    seo: Attribute.Component<"shared.seo">
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "api::memberpage.memberpage",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "api::memberpage.memberpage",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: "products"
  info: {
    singularName: "product"
    pluralName: "products"
    displayName: "Product"
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    title: Attribute.String
    subTitle: Attribute.String
    description: Attribute.Text
    price: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "api::product.product",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "api::product.product",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface ApiProjectProject extends Schema.CollectionType {
  collectionName: "projects"
  info: {
    singularName: "project"
    pluralName: "projects"
    displayName: "Project"
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    images: Attribute.Media
    title: Attribute.String
    description: Attribute.Text
    details: Attribute.Text
    moreAbout: Attribute.Text
    slug: Attribute.UID<"api::project.project", "title">
    galleryImages: Attribute.Media
    seo: Attribute.Component<"shared.seo">
    Key: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "api::project.project",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "api::project.project",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface ApiProjectspageProjectspage extends Schema.SingleType {
  collectionName: "projectspages"
  info: {
    singularName: "projectspage"
    pluralName: "projectspages"
    displayName: "Projectspage"
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    mainTitle: Attribute.String
    image: Attribute.Media
    ourProjectsTitle: Attribute.String
    outProjectsDescription: Attribute.Text
    ourProjectsImage: Attribute.Media
    imageTitle: Attribute.Media
    projectContactImg: Attribute.Media
    imgContact: Attribute.Media
    seo: Attribute.Component<"shared.seo">
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "api::projectspage.projectspage",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "api::projectspage.projectspage",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface ApiReviewReview extends Schema.CollectionType {
  collectionName: "reviews"
  info: {
    singularName: "review"
    pluralName: "reviews"
    displayName: "Review"
    description: ""
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    name: Attribute.String
    ocupation: Attribute.Text
    review: Attribute.String
    avatar: Attribute.Media
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "api::review.review",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "api::review.review",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface ApiServiceService extends Schema.CollectionType {
  collectionName: "services"
  info: {
    singularName: "service"
    pluralName: "services"
    displayName: "Service"
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    title: Attribute.String
    subTitle: Attribute.String
    price: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "api::service.service",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "api::service.service",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface ApiTeampageTeampage extends Schema.SingleType {
  collectionName: "teampages"
  info: {
    singularName: "teampage"
    pluralName: "teampages"
    displayName: "Teampage"
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    title: Attribute.String
    author: Attribute.String
    image: Attribute.Media
    seo: Attribute.Component<"shared.seo">
    workFormImage: Attribute.Media
    benefitsImage: Attribute.Media
    gallery: Attribute.Media
    heroSectionImages: Attribute.Media
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "api::teampage.teampage",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "api::teampage.teampage",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface ApiWorkWithUsPageWorkWithUsPage extends Schema.SingleType {
  collectionName: "work_with_us_pages"
  info: {
    singularName: "work-with-us-page"
    pluralName: "work-with-us-pages"
    displayName: "WorkWithUsPage"
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    images: Attribute.Media
    title: Attribute.String
    seo: Attribute.Component<"shared.seo">
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "api::work-with-us-page.work-with-us-page",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "api::work-with-us-page.work-with-us-page",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

export interface ApiWriteWrite extends Schema.CollectionType {
  collectionName: "writes"
  info: {
    singularName: "write"
    pluralName: "writes"
    displayName: "Write"
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    name: Attribute.String
    picture: Attribute.Media
    article: Attribute.Relation<
      "api::write.write",
      "oneToOne",
      "api::article.article"
    >
    email: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      "api::write.write",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      "api::write.write",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private
  }
}

declare module "@strapi/strapi" {
  export module Shared {
    export interface ContentTypes {
      "admin::permission": AdminPermission
      "admin::user": AdminUser
      "admin::role": AdminRole
      "admin::api-token": AdminApiToken
      "admin::api-token-permission": AdminApiTokenPermission
      "admin::transfer-token": AdminTransferToken
      "admin::transfer-token-permission": AdminTransferTokenPermission
      "plugin::upload.file": PluginUploadFile
      "plugin::upload.folder": PluginUploadFolder
      "plugin::i18n.locale": PluginI18NLocale
      "plugin::users-permissions.permission": PluginUsersPermissionsPermission
      "plugin::users-permissions.role": PluginUsersPermissionsRole
      "plugin::users-permissions.user": PluginUsersPermissionsUser
      "api::about-page.about-page": ApiAboutPageAboutPage
      "api::article.article": ApiArticleArticle
      "api::blog.blog": ApiBlogBlog
      "api::category.category": ApiCategoryCategory
      "api::contact-page.contact-page": ApiContactPageContactPage
      "api::curriculum.curriculum": ApiCurriculumCurriculum
      "api::global.global": ApiGlobalGlobal
      "api::home-page.home-page": ApiHomePageHomePage
      "api::member.member": ApiMemberMember
      "api::memberpage.memberpage": ApiMemberpageMemberpage
      "api::product.product": ApiProductProduct
      "api::project.project": ApiProjectProject
      "api::projectspage.projectspage": ApiProjectspageProjectspage
      "api::review.review": ApiReviewReview
      "api::service.service": ApiServiceService
      "api::teampage.teampage": ApiTeampageTeampage
      "api::work-with-us-page.work-with-us-page": ApiWorkWithUsPageWorkWithUsPage
      "api::write.write": ApiWriteWrite
    }
  }
}
