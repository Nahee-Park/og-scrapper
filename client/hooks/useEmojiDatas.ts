import React from 'react';
import { EmojiContext, emojiContextInterface } from '../Context/Provider';

function useEmojiDatas() {
  return React.useContext(EmojiContext) as emojiContextInterface;
}

export default useEmojiDatas;
