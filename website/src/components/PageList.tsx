import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import React, {ComponentProps, ImgHTMLAttributes} from 'react';

import styles from './PageList.module.css';

interface OverviewsProps {
  overviews: ComponentProps<typeof PageOverview>[];
  colSize?: number;
}

type PageSummaryProps = {
  title: string;
  summary?: JSX.Element;
  imageUrl?: string;
  colSize?: number;
} & ComponentProps<typeof Link>;

const Container: React.FC<{colSize?: number} & ComponentProps<typeof Link>> = ({children, colSize = 4, ...props}) => {
  const toUrl = useBaseUrl(props.to);
  return (
    <div className={clsx('col', `col--${colSize}`, styles.pageOverviewContainer)}>
      <Link className={clsx('card', styles.pageOverviewLinkCard)} {...props} to={toUrl}>
        {children}
      </Link>
    </div>
  );
};

const Title: React.FC<{title: string}> = ({title}) => {
  return (
    <div className={clsx('card__header', styles.pageOverviewTitle)}>
      <h3>{title}</h3>
    </div>
  );
};

const Image: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({src, alt, ...props}) => {
  const imageUrl = useBaseUrl(src);
  return (
    <div className={clsx('card__image')}>
      <img className={styles.pageOverviewImage} {...props} alt={alt} src={imageUrl} />
    </div>
  );
};

const Summary: React.FC<{summary: JSX.Element}> = ({summary}) => {
  return (
    <div className={clsx('card__body', styles.pageOverviewSummary)}>
      <p>{summary}</p>
    </div>
  );
};

const PageOverview: React.FC<PageSummaryProps> = ({title, imageUrl, summary, ...props}) => {
  return (
    <Container {...props}>
      <Title title={`${title} »`} />
      {imageUrl && <Image src={imageUrl} alt={title} />}
      {summary && <Summary summary={summary} />}
    </Container>
  );
};

export const PageList: React.FC<OverviewsProps> = ({overviews, colSize}) => {
  return (
    <section className={clsx(styles.pageList)}>
      <div className={clsx('container')}>
        <div className={clsx('row', styles.pageListRow)}>
          {overviews.map((overview) => (
            <PageOverview key={overview.to} colSize={colSize} {...overview} />
          ))}
        </div>
      </div>
    </section>
  );
};
