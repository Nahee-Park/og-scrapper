import React, { Dispatch, SetStateAction, useState } from 'react';
import { contentsInterface } from '../components/Home/CardView';

export interface contentsContextInterface {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean | undefined>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean | undefined>>;
  setContentsData: Dispatch<SetStateAction<contentsInterface[] | undefined>>;
  contentsData: contentsInterface[];
}

export const ContentsContext = React.createContext<contentsContextInterface | null>(null);

function ContentsProvider({ children }: HTMLElement) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [contentsData, setContentsData] = useState<contentsInterface[]>();

  const providerValues = {
    isLoading,
    setIsLoading,
    isError,
    setIsError,
    contentsData,
    setContentsData,
  } as contentsContextInterface;

  return <ContentsContext.Provider value={providerValues}>{children}</ContentsContext.Provider>;
}

export default ContentsProvider;
