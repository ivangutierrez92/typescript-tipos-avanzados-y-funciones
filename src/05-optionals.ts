export const createProduct = (
  id: String | number,
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(1, false, 0);
console.log(p2);
