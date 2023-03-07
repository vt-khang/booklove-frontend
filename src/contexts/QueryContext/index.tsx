import { createContext } from 'react';
import { QueryContextProps } from './type';

const defaultQueryContext = {
  page: 0,
  limit: 12,
  q: '',
};
const QueryContext = createContext<QueryContextProps>(defaultQueryContext);

export const QueryProvider = QueryContext.Provider;
export const QueryConsumer = QueryContext.Consumer;
export default QueryContext;
