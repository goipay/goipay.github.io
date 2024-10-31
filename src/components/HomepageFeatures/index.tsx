import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Bitcoin, Cloud, Cpu, LucideProps, Users, Wallet } from 'lucide-react';
import React from 'react';

type FeatureItem = {
  title: string;
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Self-hosted',
    Icon: Cloud,
    description: (
      <>
        Run it on your own infrastructure with complete control over your deployment
      </>
    ),
  },
  {
    title: 'Lightweight',
    Icon: Cpu,
    description: (
      <>
        Minimal resource requirements without relying on wallet RPC
      </>
    ),
  },
  {
    title: 'Multi-currency',
    Icon: Wallet,
    description: (
      <>
        Support for multiple cryptocurrencies (coming soon) 
      </>
    ),
  },
  {
    title: 'Multi-user',
    Icon: Users,
    description: (
      <>
        Built-in support for multiple users
      </>
    ),
  },
];

function Feature({title, Icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
