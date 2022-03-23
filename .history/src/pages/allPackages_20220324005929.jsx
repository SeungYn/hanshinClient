import React from 'react';
import Package from '../components/package/package';

const AllPackages = ({ packageService, modifyable, goAddPackages, param }) => (
  <Package
    packageService={packageService}
    modifyable={modifyable}
    goAddPackages={goAddPackages}
    param={param}
  />
);

export default AllPackages;
