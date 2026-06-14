import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsContactForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_forms';
  info: {
    displayName: 'contact-form';
  };
  attributes: {
    heading: Schema.Attribute.String;
    showMap: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subheading: Schema.Attribute.Text;
  };
}

export interface SectionsFeaturedProducts extends Struct.ComponentSchema {
  collectionName: 'components_sections_featured_products';
  info: {
    displayName: 'featured-products';
  };
  attributes: {
    heading: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    subheading: Schema.Attribute.Text;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    subheading: Schema.Attribute.String;
  };
}

export interface SectionsProjectsShowcase extends Struct.ComponentSchema {
  collectionName: 'components_sections_projects_showcases';
  info: {
    displayName: 'projects-showcase';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.Text;
  };
}

export interface SectionsRichText extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_texts';
  info: {
    displayName: 'rich-text';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface SectionsServicesOverview extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_overviews';
  info: {
    displayName: 'services-overview';
  };
  attributes: {
    heading: Schema.Attribute.String;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    subheading: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.contact-form': SectionsContactForm;
      'sections.featured-products': SectionsFeaturedProducts;
      'sections.hero': SectionsHero;
      'sections.projects-showcase': SectionsProjectsShowcase;
      'sections.rich-text': SectionsRichText;
      'sections.services-overview': SectionsServicesOverview;
    }
  }
}
