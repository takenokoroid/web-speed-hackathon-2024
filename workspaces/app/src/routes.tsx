import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';

import { Color, Space, Typography } from './foundation/styles/variables';
// import { SvgIcon } from './features/icons/components/SvgIcon';

const SvgIcon = lazy(() =>
  import('./features/icons/components/SvgIcon').then((module) => ({ default: module.SvgIcon })),
);
const Link = lazy(() => import('./foundation/components/Link').then((module) => ({ default: module.Link })));
const Text = lazy(() => import('./foundation/components/Text').then((module) => ({ default: module.Text })));
const ActionLayout = lazy(() =>
  import('./foundation/layouts/ActionLayout').then((module) => ({ default: module.ActionLayout })),
);
const CommonLayout = lazy(() =>
  import('./foundation/layouts/CommonLayout').then((module) => ({ default: module.CommonLayout })),
);
const AuthorDetailPage = lazy(() =>
  import('./pages/AuthorDetailPage').then((module) => ({ default: module.AuthorDetailPage })),
);
const BookDetailPage = lazy(() =>
  import('./pages/BookDetailPage').then((module) => ({ default: module.BookDetailPage })),
);
const EpisodeDetailPage = lazy(() =>
  import('./pages/EpisodeDetailPage').then((module) => ({ default: module.EpisodeDetailPage })),
);
const SearchPage = lazy(() => import('./pages/SearchPage').then((module) => ({ default: module.SearchPage })));
const TopPage = lazy(() => import('./pages/TopPage').then((module) => ({ default: module.TopPage })));

const _BackToTopButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${Space * 1}px;
  border: none;
  background-color: transparent;
`;

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route element={<CommonLayout />} path={'/'}>
        <Route element={<TopPage />} path={''} />
      </Route>
      <Route
        element={
          <ActionLayout
            leftContent={
              <_BackToTopButton href={'/'}>
                <SvgIcon color={Color.MONO_100} height={32} type="ArrowBack" width={32} />
                <Text color={Color.MONO_100} typography={Typography.NORMAL16} weight="bold">
                  トップへ戻る
                </Text>
              </_BackToTopButton>
            }
          />
        }
        path={'/'}
      >
        <Route element={<BookDetailPage />} path={'books/:bookId'} />
        <Route element={<EpisodeDetailPage />} path={'books/:bookId/episodes/:episodeId'} />
        <Route element={<AuthorDetailPage />} path={'authors/:authorId'} />
        <Route element={<SearchPage />} path={'search'} />
      </Route>
    </Routes>
  );
};
