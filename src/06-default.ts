export const createProduct = (
  id: String | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id,
    stock,
    isNew,
  };
};

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(1, false, 0);
console.log(p2);
