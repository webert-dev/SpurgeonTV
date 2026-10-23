import storeProducts from '../data/store-products.json';

export function getStoreProducts() {
  return storeProducts.map(product => {
    const isFree = product.pricingType === 'free';
    const isComingSoon = !!product.isComingSoon;
    const pricingType = isFree ? 'free' : (isComingSoon ? 'waitlist' : 'paid');

    return {
      id: product.id,
      category: product.category,
      type: product.type,
      pricingType,
      platform: product.platform,
      badge: product.badge,
      isOwnProduct: !!product.isOwnProduct,
      isComingSoon: isComingSoon,
      image: product.image,
      externalUrl: product.externalUrl,
      title: product.title,
      author: product.author,
      shortDesc: product.shortDesc,
      fullDesc: product.fullDesc,
      highlights: product.highlights || [],
      targetAudience: product.targetAudience || null,
      specs: product.specs || {}
    };
  });
}
