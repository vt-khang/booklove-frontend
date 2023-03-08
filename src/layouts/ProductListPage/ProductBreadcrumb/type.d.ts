export type ProductBreadcrumbItemProps = {
  name?: string;
  link?: Url;
}

export type ProductBreadcrumbProps = {
  category?: ProductBreadcrumbItemProps;
  product?: ProductBreadcrumbItemProps;
}