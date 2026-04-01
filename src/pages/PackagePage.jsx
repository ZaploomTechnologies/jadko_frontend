import React from 'react';
import PackageHero from '../components/packages/PackageHero';
import PackageList from '../components/packages/PackageList';

const PackagePage = () => {
  return (
    <main>
      <PackageHero />
      <PackageList />
    </main>
  );
};

export default PackagePage;
