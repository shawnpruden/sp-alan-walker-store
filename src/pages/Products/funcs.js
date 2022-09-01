export const sortProducts = (products, condition) => {
  switch (condition) {
    case 'price-asc':
      return products.sort(
        (productA, productB) => productA.price.raw - productB.price.raw
      );

    case 'price-desc':
      return products.sort(
        (productA, productB) => productB.price.raw - productA.price.raw
      );

    case 'newest':
      return products.reverse();

    default:
      return products;
  }
};

export const filterProducts = (products, category) => {
  switch (category) {
    case 'tops':
      return products.filter(
        (product) => product.variant_groups[1].options[0].name === 'tops'
      );
    case 'bottoms':
      return products.filter(
        (product) => product.variant_groups[1].options[0].name === 'bottoms'
      );

    case 'hats':
      return products.filter(
        (product) => product.variant_groups[1].options[0].name === 'hats'
      );

    case 'masks':
      return products.filter(
        (product) => product.variant_groups[1].options[0].name === 'masks'
      );

    case 'accessories':
      return products.filter(
        (product) => product.variant_groups[1].options[0].name === 'accessories'
      );
    default:
      return products;
  }
};
