export const ProductCategory = {
  BURGERS: 'burgers',
  BEBIDAS: 'bebidas',
  PORCOES: 'porcoes'
} as const;

export type ProductCategory = typeof ProductCategory[keyof typeof ProductCategory];

export const CategoryLabels: Record<ProductCategory, string> = {
  [ProductCategory.BURGERS]: 'Burgers',
  [ProductCategory.BEBIDAS]: 'Bebidas',
  [ProductCategory.PORCOES]: 'Porções'
};

export const getAllCategories = (): ProductCategory[] => {
  return Object.values(ProductCategory);
};

export const getCategoryLabel = (category: ProductCategory): string => {
  return CategoryLabels[category];
};