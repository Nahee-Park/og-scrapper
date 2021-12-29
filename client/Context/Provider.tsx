import React, { useState, Dispatch } from 'react';

// emoji 데이터에 대한 타입 지정
interface emojiArrayType {
  imgUrl: string;
  rawText: string;
}
interface emojiDataProperties {
  emoji: Array<emojiArrayType>;
  keyword: string;
}

export interface emojiContextInterface {
  emojiData: emojiDataProperties[];
  setEmojiData: (emojiData: emojiDataProperties[]) => void;
}

export const EmojiContext = React.createContext<emojiContextInterface | null>(null);

function EmojiProvider({ children }: HTMLElement) {
  const [emojiData, setEmojiData] = useState<emojiDataProperties[]>([]);

  const providerValues = {
    emojiData,
    setEmojiData,
  };

  return <EmojiContext.Provider value={providerValues}>{children}</EmojiContext.Provider>;
}

export default EmojiProvider;
