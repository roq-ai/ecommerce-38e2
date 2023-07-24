const mapping: Record<string, string> = {
  carts: 'cart',
  categories: 'category',
  organizations: 'organization',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
