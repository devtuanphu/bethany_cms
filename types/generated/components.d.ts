import type { Attribute, Schema } from '@strapi/strapi';

export interface ShareProject extends Schema.Component {
  collectionName: 'components_share_projects';
  info: {
    description: '';
    displayName: 'project';
  };
  attributes: {
    avatar: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    credits: Attribute.Text;
    description: Attribute.Text;
    groupMedia: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    isHeightSpecial: Attribute.Boolean & Attribute.DefaultTo<false>;
    position: Attribute.Integer;
    responsibilities: Attribute.Text;
    role: Attribute.Text;
    slug: Attribute.String & Attribute.Required;
    studio: Attribute.Text;
    subTitle1: Attribute.Text;
    subTitle2: Attribute.Text;
    subTitle3: Attribute.Text;
    subTitle4: Attribute.Text;
    title: Attribute.String & Attribute.Required;
    year: Attribute.Text;
  };
}

export interface ShareSeo extends Schema.Component {
  collectionName: 'components_share_seos';
  info: {
    displayName: 'seo';
    icon: 'alien';
  };
  attributes: {
    description: Attribute.Text;
    thumbnail: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'share.project': ShareProject;
      'share.seo': ShareSeo;
    }
  }
}
