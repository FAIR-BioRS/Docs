/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import clsx from 'clsx';
import Lottie from 'react-lottie';
import styles from './HomepageFeatures.module.css';

import increaseAnimationData from './lotties/column1lottie.json';
import rewardAnimationData from './lotties/column2lottie.json';
import complyAnimationData from './lotties/column3lottie.json';

const FeatureList = [
  {
    title: 'Increase your software\'s impact',
    animationOptions: {
      loop: true,
      autoplay: true,
      animationData: increaseAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    description: (
      <> The guidelines are designed to make your software more findable and easily reusable by others</>
    ),
  },
  {
    title: 'Get rewarded for your effort',
    animationOptions: {
      loop: true,
      autoplay: true,
      animationData: rewardAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    description: <> By following the FAIR-BioRS guidelines your can allow others to cite your software, just like manuscripts </>,
  },
  {
    title: 'Comply with funding agencies',
    animationOptions: {
      loop: true,
      autoplay: true,
      animationData: complyAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    description: (
      <> Start complying with funding agencies such as the NIH that are progressively requiring all research outcomes to be FAIR</>
    ),
  },
];

// eslint-disable-next-line react/prop-types
function Feature({ animationOptions, title, description }) {
  if (title === 'Findable') {
    return (
      <div className={clsx('col col--3')}>
        <div className="flex justify-center py-4 mb-[2.1rem]">
          <Lottie options={animationOptions} height={265} width={350} />
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
        <Lottie options={animationOptions} height={300} width={300} />
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
