import { useRef, useState } from 'react';
import { Sheet, type SheetRef } from 'react-modal-sheet';
import { styled } from 'styled-components';

import { ExampleLayout } from './ExampleLayout';
import { Button } from './common';

export function CustomStyles() {
  return (
    <ExampleLayout
      title="Custom styles"
      description="Sheet that has non-traditional bottom sheet styles."
    >
      {({ isOpen, close }) => (
        <Sheet isOpen={isOpen} onClose={close} detent="content">
          <SheetContainer>
            <SheetWrapper>
              <Sheet.Header>
                <HeaderImage />
              </Sheet.Header>
              <SheetContent>
                <Title>Custom styles</Title>
                <Paragraph>
                  This sheet has totally custom styles and its height is dynamic
                  based on the size of its content.
                </Paragraph>
                <Buttons>
                  <CancelButton onPress={close}>Cancel</CancelButton>
                  <Button onPress={close}>Confirm</Button>
                </Buttons>
              </SheetContent>
            </SheetWrapper>
          </SheetContainer>
          <Sheet.Backdrop onTap={close} />
        </Sheet>
      )}
    </ExampleLayout>
  );
}

const SheetContainer = styled(Sheet.Container)`
  padding: 16px;
  background-color: transparent !important;
  box-shadow: none !important;
`;

const SheetWrapper = styled.div`
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.2),
    0 12px 20px rgba(0, 0, 0, 0.3);
  background-color: #fff;
`;

const SheetContent = styled(Sheet.Content)`
  padding: 0px 16px 16px 16px;
`;

const HeaderImage = styled.div`
  background-image: url('https://picsum.photos/id/16/600/300');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 150px;
  margin-bottom: 16px;
  background-color: #eee;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.4;
  margin-top: 8px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
`;

const CancelButton = styled(Button)`
  background-color: #eee;
  color: #000;
`;
