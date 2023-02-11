import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';
import RightArrow from '../icons/RightArrow';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <Head>
        <title>
          {siteConfig.title} - {siteConfig.tagline}
        </title>
      </Head>
      <HomepageHeader />
      <HomepageFeatures />
    </Layout>
  );
}

function HeaderIntroduce() {
  return (
    <>
      <Link
        to="/blog"
        className={clsx(
          'tw-font-medium',
          'tw-text-xs',
          'tw-px-2.5',
          'tw-py-1.5'
        )}
      >
        <span
          className={clsx('tw-text-left', 'tw-break-all', 'tw-line-clamp-1')}
        >
          <span className="">Build with Rust</span>
        </span>
      </Link>
      <h1
        className={clsx(
          'tw-relative',
          'tw-max-w-2xl',
          'tw-text-5xl',
          'tw-font-semibold',
          'tw-text-center',
          'sm:tw-text-left',
          'md:tw-text-6xl',
          'lg:tw-text-7xl',
          'tw-u-text-gray-900'
        )}
      >
        PEACE Development Framework
      </h1>
      <p
        className={clsx(
          'tw-max-w-lg',
          'tw-text-xl',
          'tw-text-center',
          'tw-text-gray-500',
          'sm:tw-w-3/5',
          'sm:tw-text-left',
          'dark:tw-text-gray-100',
          'tw-leading-8'
        )}
      >
        Makes it easier to create your unofficial osu! server. Explore more
        possibilities for the osu! community.
      </p>
    </>
  );
}

function HeaderActions() {
  return (
    <>
      <div
        className={clsx(
          'tw-flex',
          'tw-flex-col',
          'sm:tw-flex-row',
          'tw-items-center',
          'tw-justify-center',
          'tw-gap-6',
          'tw-z-[1]'
        )}
      >
        <Link
          to="/docs/guide"
          className={clsx(
            'tw-font-medium',
            'tw-text-sm',
            'tw-px-4',
            'tw-py-2',
            'tw-relative',
            'tw-text-white',
            'gradient-border-2',
            'border-gradient-br-gradient-gray-900',
            'hover:border-gradient-br-gradient-black',
            'before:tw-absolute',
            'before:tw-transition',
            'before:tw-duration-200',
            'before:tw-rounded-lg',
            'before:tw-opacity-0',
            'hover:before:tw-opacity-75',
            'before:-tw-inset-0.5',
            'before:tw-bg-gradient-to-r',
            'before:tw-from-green-400',
            'before:tw-via-teal-400',
            'before:tw-to-teal-600',
            'before:tw-blur-md',
            'before:tw-z-[-1]',
            'tw-inline-flex',
            'tw-items-center',
            'tw-rounded-lg'
          )}
        >
          <span
            className={clsx('tw-text-left', 'tw-break-all', 'tw-line-clamp-1')}
          >
            <span className="">Get started</span>
          </span>
        </Link>
        <a
          href="https://github.com/pure-peace/peace"
          rel="noopener noreferrer"
          target="_blank"
          className={clsx(
            'tw-font-medium',
            'tw-text-sm',
            'tw-px-4',
            'tw-py-2',
            'tw-inline-flex',
            'tw-items-center'
          )}
        >
          <span
            className={clsx('tw-text-left', 'tw-break-all', 'tw-line-clamp-1')}
          >
            Open on GitHub
          </span>
          <RightArrow
            className={clsx(
              'tw-flex-shrink-0',
              'tw-h-5',
              'tw-w-5',
              'tw-ml-1',
              '-tw-mr-1'
            )}
          />
        </a>
      </div>
    </>
  );
}

function HeaderBackgrounds() {
  return (
    <>
      <img
        src="/img/hero-gradient.svg"
        className={clsx(
          'tw-absolute',
          'tw-top-0',
          'tw-right-0',
          'tw-hidden',
          'tw-overflow-hidden',
          'tw-select-none',
          'lg:tw-block',
          'tw-blur-lg'
        )}
        alt=""
        width="1269"
        height="724"
      />
      <img
        src="/img/hero-gradient-tablet.svg"
        alt=""
        className={clsx(
          'tw-absolute',
          'tw-top-0',
          'tw-right-0',
          'tw-w-full',
          'tw-hidden',
          'tw-overflow-hidden',
          'tw-select-none',
          'sm:tw-block',
          'lg:tw-hidden',
          'tw-blur-md'
        )}
        width="924"
        height="653"
      />
      <img
        src="/img/hero-gradient-mobile.svg"
        className={clsx(
          'tw-absolute',
          'tw-inset-x-0',
          'tw-top-0',
          'tw-w-full',
          'tw-overflow-hidden',
          'tw-object-cover',
          'tw-select-none',
          'sm:tw-hidden',
          'tw-blur-md'
        )}
        alt=""
        width="375"
        height="494"
      />
    </>
  );
}

function HomepageHeader() {
  return (
    <div className={clsx('sm:tw-pb-20', 'tw-pt-12', 'md:tw-pt-28')}>
      <HeaderBackgrounds />
      <div
        className={clsx(
          'tw-mx-auto',
          'sm:tw-px-6',
          'lg:tw-px-8',
          'tw-px-4',
          'tw-max-w-7xl',
          'tw-relative',
          'tw-flex',
          'tw-flex-col',
          'tw-items-center',
          'sm:tw-items-start',
          'tw-gap-y-8'
        )}
      >
        <HeaderIntroduce />
        <HeaderActions />
      </div>
    </div>
  );
}
