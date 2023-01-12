import { addProduct, products } from './products/product.service';
import { faker } from '@faker-js/faker';

for (let i = 0; i < 50; i++) {
  addProduct({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    color: faker.color.rgb(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
  });
}

console.log(products);
