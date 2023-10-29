/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import clsx from 'clsx';
import Lottie from 'react-lottie';
import styles from './HomepageFeatures.module.css';

import scienceAnimationData from './lotties/column1lottie.json';
import focusAnimationData from './lotties/column2lottie.json';
import programmingAnimationData from './lotties/column3lottie.json';
import reusableAnimationData from './lotties/column4lottie.json';

const FeatureList = [
  {
    title: 'Findable',
    animationOptions: {
      loop: true,
      autoplay: true,
      animationData: scienceAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    description: (
      <>
        Findable data is the starting point for knowledge, like finding a light switch in the dark.
      </>
    ),
  },
  {
    title: 'Accessible',
    animationOptions: {
      loop: true,
      autoplay: true,
      animationData: focusAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    description: <>Accessible data opens doors to information, enabling discoveries for all.</>,
  },
  {
    title: 'Interoperable ',
    animationOptions: {
      loop: true,
      autoplay: true,
      animationData: programmingAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    description: (
      <>Interoperable systems speak the same language, uniting data for meaningful insights.</>
    ),
  },
  {
    title: 'Reusuable',
    animationOptions: {
      loop: true,
      autoplay: true,
      animationData: reusableAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    description: (
      <>Reusable data, like a well-crafted tool, fuels ongoing research and innovation.</>
    ),
  },
];

// eslint-disable-next-line react/prop-types
function Feature({ animationOptions, title, description }) {
  if (title === 'Findable') {
    return (
      <div className={clsx('col col--3 flex flex-col items-center justify-center')}>
        <div className="flex justify-center items-center py-4 mb-[2.1rem]">
          <Lottie options={animationOptions} height={165} width={200} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className={clsx('col col--3')}>
      <div className="flex justify-center py-4">
        <Lottie options={animationOptions} height={200} width={200} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row justify-evenly">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
