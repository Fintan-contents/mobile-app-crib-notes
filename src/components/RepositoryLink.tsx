import {DocusaurusContext} from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, {ComponentProps, PropsWithChildren} from 'react';

export type RepositoryLinkProps = {
  path?: string;
};

export const RepositoryLink: React.FC<PropsWithChildren<RepositoryLinkProps & ComponentProps<'a'>>> = ({
  path,
  children,
  ...anchorProps
}) => {
  const {siteConfig} = useDocusaurusContext() as DocusaurusContext;
  const href = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}${path ?? ''}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...anchorProps}>
      {children}
    </a>
  );
};
