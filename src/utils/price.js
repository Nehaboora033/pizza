export const parsePrice = (price) => {
  if (!price) return 0;
  return Number(price.toString().replace(/[^\d.-]/g, "")) || 0;
};