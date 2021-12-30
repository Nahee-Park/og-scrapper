import React from 'react';
import { ContentsContext, contentsContextInterface } from '../Context/Provider';

function useContentsDatas() {
  return React.useContext(ContentsContext) as contentsContextInterface;
}

export default useContentsDatas;
