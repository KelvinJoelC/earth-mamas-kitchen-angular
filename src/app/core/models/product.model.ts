export interface ProductOptionSize {
  sizeInch?: number;
  shape?: string | 'Heart' | 'Round' | 'Square' | 'Rectangle';
  servings?: number;
  label?: string;
  pieces?: number;
}

export interface ProductPackage {
  name: string;
  serves: number;
  includes: string;
  approxPrice: number;
}

export interface ProductOptionsProp{
  bg?: string;
  h?: number;
  padding?: number;
}

export interface ProductOptions {
  cupcakeType?: string[];
  buttercreamStyle?: string[];
  quantities?: number[];
  colorPalettes?: string[];
  fillings?: string[];
  presentation?: string[];
  messageCard?: boolean;
  addOns?: string[];
  sponge?: string[];
  frostings?: string[];
  finishes?: string[];
  themes?: string[];
  inscriptions?: boolean;
  servingGuideIncluded?: boolean;
  arrangementType?: string[];
  container?: string[];
  noteOnTransport?: string;
  formats?: string[];
  minimumOrder?: Record<string, number>;
  allergens?: string[];
  flavorSets?: string[][];
  branding?: string[];
  service?: string[];
  packages?: ProductPackage[];
  sizes?: ProductOptionSize[];
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  img: string;
  price?: number;
  leadTimeDays?: number;
  options: ProductOptions;
  allergens?: string[];
  props?: ProductOptionsProp;
  priceFrom?: number;
}

export type ProductList = Product[];

export type OptionKey =
  | 'sizes' | 'sponge' | 'fillings' | 'frostings' | 'finishes' | 'themes'
  | 'cupcakeType' | 'buttercreamStyle' | 'flavors' | 'colorPalettes'
  | 'quantities' | 'arrangementType' | 'presentation' | 'container'
  | 'addOns' | 'minimumOrder' | 'flavorSets' | 'branding' | 'service'
  | 'packages' | 'messageCard' | 'inscriptions' | 'servingGuideIncluded'
  | 'noteOnTransport' | 'allergens' | 'notes' | 'formats';

export const OPTION_CONFIG: Record<OptionKey, FieldConfig> = {
  sizes: {
    label: 'Sizes & servings',
    type: 'select',
    visible: true
  },
  sponge: {
    label: 'Sponge',
    type: 'select',
    visible: true
  },
  fillings: {
    label: 'Fillings',
    type: 'select',
    visible: true
  },
  frostings: {
    label: 'Frostings',
    type: 'select',
    visible: true
  },
  finishes: {
    label: 'Finishes',
    type: 'select',
    visible: true
  },
  themes: {
    label: 'Themes',
    type: 'select',
    visible: true
  },
  cupcakeType: {
    label: 'Cupcake types',
    type: 'select',
    visible: true
  },
  buttercreamStyle: {
    label: 'Buttercream flowers',
    type: 'select',
    visible: true
  },
  flavors: {
    label: 'Flavors',
    type: 'select',
    visible: true
  },
  colorPalettes: {
    label: 'Color palettes',
    type: 'select',
    visible: true
  },
  quantities: {
    label: 'Bouquet sizes',
    type: 'select',
    visible: true
  },
  arrangementType: {
    label: 'Arrangement type',
    type: 'select',
    visible: true
  },
  presentation: {
    label: 'Presentation',
    type: 'select',
    visible: true
  },
  container: {
    label: 'Container',
    type: 'select',
    visible: true
  },
  addOns: {
    label: 'Add-ons',
    type: 'checkbox',
    visible: true
  },
  minimumOrder: {
    label: 'Minimum order',
    type: 'text',
    visible: false
  },
  flavorSets: {
    label: 'Flavor sets',
    type: 'checkbox',
    visible: true
  },
  branding: {
    label: 'Branding options',
    type: 'checkbox',
    visible: true
  },
  service: {
    label: 'Service',
    type: 'select',
    visible: true
  },
  packages: {
    label: 'Event packages',
    type: 'select',
    visible: true
  },
  messageCard: {
    label: 'Message card included',
    type: 'checkbox',
    visible: true
  },
  inscriptions: {
    label: 'Custom inscription',
    type: 'text',
    visible: true
  },
  servingGuideIncluded: {
    label: 'Serving guide included',
    type: 'checkbox',
    visible: false
  },
  noteOnTransport: {
    label: 'Transport note',
    type: 'text',
    visible: false
  },
  allergens: {
    label: 'Allergens',
    type: 'select',
    visible: false
  },
  notes: {
    label: 'Note',
    type: 'text',
    visible: true
  }, 
  formats: {
    label: 'Format',
    type: 'select',
    visible: true
  }
};

export type FieldType = 'select' | 'checkbox' | 'radio' | 'text';

export type OptionEntry = {
  key: keyof ProductOptions;
  values: string[];
  config: FieldConfig
};

export type FieldConfig = {
  label: string;
  type: FieldType;
  visible: boolean;
};
