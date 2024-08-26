import React, { useState } from 'react';
import styled from 'styled-components';
import OutlineButton from '../common/Button/OutlineButton';
import plus from '../../assets/images/icons/emoji_plus.png';
import { EmojiSelectContainer } from '../../containers/HeaderService/EmojiSelectContainer';

const Container = styled.div`
  position: relative;
`;

const EmojiBtnWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 6px 16px;
  color: var(--gray-900);
  font-size: 16px;
  font-weight: var(--font-medium);
`;

const EmojiWrap = styled.div`
  position: absolute;
  z-index: 2;
  top: 100%;
  right: 0;
  height: 100px;
`;

export const EmojiSelector = () => {
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const handleSelectEmoji = (emoji) => {
    setSelectedEmoji(emoji);
    setShowPicker(false); // 선택 후 picker 숨기기
  };

  return (
    <Container>
      <OutlineButton onClick={() => setShowPicker(!showPicker)}>
        <EmojiBtnWrap>
          <img src={plus} alt="emoji_plus" width="24px" />
          <p>추가</p>
        </EmojiBtnWrap>
      </OutlineButton>
      <EmojiWrap>
        <EmojiSelectContainer showPicker={showPicker} setShowPicker={setShowPicker} onSelectEmoji={handleSelectEmoji} />
      </EmojiWrap>
    </Container>
  );
};