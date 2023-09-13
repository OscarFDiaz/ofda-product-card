# ofda-Product-Card

Este es un paquete de puebas de despliegue de NPM

### Oscar Diaz

## Ejemplo

```js
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'ofda-product-card';
```

```js
<ProductCard
  product={product}
  className="bg-dark text-white"
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ reset, isMaxCountReached, increaseBy, count, maxCount }) => (
    <>
      <ProductImage className="custom-image" />
      <ProductTitle className="text-bold" />
      <ProductButtons className="custom-buttons" />

      <button onClick={reset}>Reset</button>
      <button onClick={() => increaseBy(-2)}>-2</button>
      {!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>}
      <span>
        {count} - {maxCount}
      </span>
    </>
  )}
</ProductCard>
```
