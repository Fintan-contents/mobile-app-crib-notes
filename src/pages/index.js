import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Reference',
    to: 'reference',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        リファレンス
      </>
    ),
  },
  {
    title: 'Use React Native',
    to: 'react-native/guide',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        開発ガイド
      </>
    ),
  },
  {
    title: 'Learn React Native',
    to: 'react-native/learn',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        学習用コンテンツ
      </>
    ),
  },
];

function Feature({to, imageUrl, title, description}) {
  const toUrl = useBaseUrl(to);
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <Link className={clsx('card', styles.featureCard)} to={toUrl}>
        <div className={clsx('card__header')}>
          <h3>{title}</h3>
        </div>
        {imgUrl && (
          <div className={clsx("card__image", styles.featureCardImageContainer)}>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <div className={clsx('card__body')}>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      // title="Home"
      // description="Description will go into a meta tag in <head />"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('react-native/learn')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
