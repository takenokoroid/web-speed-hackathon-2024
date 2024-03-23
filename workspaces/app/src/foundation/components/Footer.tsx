import { useSetAtom } from 'jotai';
import React, { useEffect, useId, useState } from 'react';
import styled from 'styled-components';

import { DialogContentAtom } from '../atoms/DialogContentAtom';
import { Color, Space, Typography } from '../styles/variables';

import { Box } from './Box';
import { Button } from './Button';
import { Flex } from './Flex';
import { Spacer } from './Spacer';
import { Text } from './Text';

const _Button = styled(Button)`
  color: ${Color.MONO_A};
`;

const _Content = styled.section`
  white-space: pre-line;
`;


export const Footer: React.FC = () => {
  const [isClient, setIsClient] = React.useState(false);

  // const [text, setText] = useState('');

  // useEffect(() => {
  //   // useEffect内で非同期関数を定義します。
  //   const fetchText = async () => {
  //     try {
  //       const response = await fetch('/assets/constants/Company.txt');
  //       const txt = await response.text(); // レスポンスをテキストとして取得
  //       setText(txt); // 状態を更新
  //     } catch (error) {
  //       console.error('Error fetching text:', error);
  //       setText('Error loading the text.');
  //     }
  //   };

  //   fetchText(); // 定義した非同期関数を呼び出します。
  // }, []);

  const fetchTextData = async (path:string) => {
    try {
      const response = await fetch(path);
      const txt = await response.text();
      return txt; // 成功した場合、テキストデータを返します。
    } catch (error) {
      console.error('Error fetching text:', error);
      return 'Error loading the text.'; // エラーが発生した場合、エラーメッセージを返します。
    }
  };

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const termDialogA11yId = useId();
  const contactDialogA11yId = useId();
  const questionDialogA11yId = useId();
  const companyDialogA11yId = useId();
  const overviewDialogA11yId = useId();

  const updateDialogContent = useSetAtom(DialogContentAtom);

  const handleRequestToTermDialogOpen = async () => {
    const text = await fetchTextData('/assets/constants/Term.txt');
    updateDialogContent(
      <_Content aria-labelledby={termDialogA11yId} role="dialog">
        <Text as="h2" color={Color.MONO_100} id={termDialogA11yId} typography={Typography.NORMAL16}>
          利用規約
        </Text>
        <Spacer height={Space * 1} />
        <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
          {text ? text : 'Loading...'}
        </Text>
      </_Content>,
    );
  };

  const handleRequestToContactDialogOpen = async () => {
    const text = await fetchTextData('/assets/constants/Contact.txt');
    updateDialogContent(
      <_Content aria-labelledby={contactDialogA11yId} role="dialog">
        <Text as="h2" color={Color.MONO_100} id={contactDialogA11yId} typography={Typography.NORMAL16}>
          お問い合わせ
        </Text>
        <Spacer height={Space * 1} />
        <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
          {text ? text : 'Loading...'}
        </Text>
      </_Content>,
    );
  };

  const handleRequestToQuestionDialogOpen = async () => {
    const text = await fetchTextData('/assets/constants/Question.txt');
    updateDialogContent(
      <_Content aria-labelledby={questionDialogA11yId} role="dialog">
        <Text as="h2" color={Color.MONO_100} id={questionDialogA11yId} typography={Typography.NORMAL16}>
          Q&A
        </Text>
        <Spacer height={Space * 1} />
        <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
          {text ? text : 'Loading...'}
        </Text>
      </_Content>,
    );
  };

  const handleRequestToCompanyDialogOpen = async () => {
    const text = await fetchTextData('/assets/constants/Company.txt');
    updateDialogContent(
      <_Content aria-labelledby={companyDialogA11yId} role="dialog">
        <Text as="h2" color={Color.MONO_100} id={companyDialogA11yId} typography={Typography.NORMAL16}>
          運営会社
        </Text>
        <Spacer height={Space * 1} />
        <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
          {text ? text : 'Loading...'}
        </Text>
      </_Content>,
    );
  };

  const handleRequestToOverviewDialogOpen = async () => {
    const text = await fetchTextData('/assets/constants/Overview.txt');
    updateDialogContent(
      <_Content aria-labelledby={overviewDialogA11yId} role="dialog">
        <Text as="h2" color={Color.MONO_100} id={overviewDialogA11yId} typography={Typography.NORMAL16}>
          Cyber TOONとは
        </Text>
        <Spacer height={Space * 1} />
        <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
          {text ? text : 'Loading...'}
        </Text>
      </_Content>,
    );
  };

  return (
    <Box as="footer" backgroundColor={Color.Background} p={Space * 1}>
      <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-start">
        <img alt="Cyber TOON" src="/assets/cyber-toon.svg" />
        <Flex align="start" direction="row" gap={Space * 1.5} justify="center">
          <_Button disabled={!isClient} onClick={handleRequestToTermDialogOpen}>
            利用規約
          </_Button>
          <_Button disabled={!isClient} onClick={handleRequestToContactDialogOpen}>
            お問い合わせ
          </_Button>
          <_Button disabled={!isClient} onClick={handleRequestToQuestionDialogOpen}>
            Q&A
          </_Button>
          <_Button disabled={!isClient} onClick={handleRequestToCompanyDialogOpen}>
            運営会社
          </_Button>
          <_Button disabled={!isClient} onClick={handleRequestToOverviewDialogOpen}>
            Cyber TOONとは
          </_Button>
        </Flex>
      </Flex>
    </Box>
  );
};
