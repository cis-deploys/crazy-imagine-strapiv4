import type { Schema, Attribute } from "@strapi/strapi"

export interface SectionsHero extends Schema.Component {
  collectionName: "components_sections_heroes"
  info: {
    displayName: "Hero"
  }
  attributes: {
    title: Attribute.String
  }
}

export interface SharedMoreDetails extends Schema.Component {
  collectionName: "components_shared_more_details"
  info: {
    displayName: "MoreDetails"
  }
  attributes: {
    title: Attribute.String
    description: Attribute.Text
  }
}

export interface SharedSeo extends Schema.Component {
  collectionName: "components_shared_seos"
  info: {
    displayName: "seo"
    description: ""
  }
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 70
      }>
    metaDescription: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 300
      }>
    sharedImage: Attribute.Media
    keywords: Attribute.String & Attribute.Required
  }
}

export interface SharedSkill extends Schema.Component {
  collectionName: "components_shared_skills"
  info: {
    displayName: "skill"
  }
  attributes: {
    name: Attribute.String
    percentage: Attribute.String
  }
}

export interface SharedTitle extends Schema.Component {
  collectionName: "components_shared_titles"
  info: {
    displayName: "Title"
  }
  attributes: {
    title: Attribute.String
    description: Attribute.Text
  }
}

declare module "@strapi/strapi" {
  export module Shared {
    export interface Components {
      "sections.hero": SectionsHero
      "shared.more-details": SharedMoreDetails
      "shared.seo": SharedSeo
      "shared.skill": SharedSkill
      "shared.title": SharedTitle
    }
  }
}
