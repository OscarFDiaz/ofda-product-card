import React, { useContext, useCallback } from 'react';

import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  // maxCount
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [
    counter,
    maxCount,
  ]);

  // isMaxReached = useCallback, [counter, maxCount] => true si el count == maxcount, false si no lo es
  return (
    <div className={`${styles.buttonsContainer}  ${className}`} style={style}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={`${styles.countLabel} `}>{counter}</div>
      <button
        onClick={() => increaseBy(+1)}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
      >
        +
      </button>
    </div>
  );
};
