import React from 'react';
import Package from '../components/package/package';

const AllPackages = ({ packageService, modifyable, goAddpackages }) => (
  <Package
    packageService={packageService}
    modifyable={modifyable}
    goAddpackages={goAddpackages}
  />
);

export default AllPackages;
