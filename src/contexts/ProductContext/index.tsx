import { createContext } from 'react';
import { ProductContextProps } from './type';

const ProductContext = createContext<ProductContextProps>('');

export const ProductProvider = ProductContext.Provider;
export const ProductConsumer = ProductContext.Consumer;
export default ProductContext;
