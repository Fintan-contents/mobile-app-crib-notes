import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import {PageList} from '../components';
import styles from './styles.module.css';

const genericOverview = [
  {
    title: 'Reference',
    to: 'reference',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    summary: <>リファレンス</>,
  },
  {
    title: 'Distribution',
    to: 'distribution',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    summary: <>アプリケーションの配布</>,
  },
];

const reactNativeOverview = [
  {
    title: 'Learn React Native',
    to: 'react-native/learn',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    summary: <>学習用コンテンツ</>,
  },
  {
    title: 'Common Pitfalls',
    to: 'react-native/common-pitfalls',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    summary: <>ハマりがちな落とし穴</>,
  },
  {
    title: 'Example Application',
    to: 'react-native/santoku',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    summary: <>サンプルアプリケーション</>,
  },
];

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig} = context;
  return (
    <Layout>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig?.title || ''}</h1>
          <p className="hero__subtitle">{siteConfig?.tagline || ''}</p>
          {/*           <div className={styles.buttons}>
            <Link
              className={clsx('button button--secondary button--lg', styles.getStarted)}
              to={useBaseUrl('react-native/learn')}>
              Get Started
            </Link>
          </div> */}
        </div>
      </header>
      <main>
        <PageList overviews={genericOverview} colSize={4} />
        <PageList overviews={reactNativeOverview} colSize={4} />
      </main>
    </Layout>
  );
}

export default Home;
