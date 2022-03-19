import React from 'react';
import Package from '../components/package/package';

const AllPackages = ({ packageService, modifyable, goAddPackages }) => (
  <Package
    packageService={packageService}
    modifyable={modifyable}
    goAddPackages={goAddPackages}
  />
);

export default AllPackages;
