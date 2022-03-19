import React from 'react';
import Package from '../components/package/package';

const AllPackages = ({ packageService, modifyable, onAddpackages }) => (
  <Package
    packageService={packageService}
    modifyable={modifyable}
    onAddpackages={onAddpackages}
  />
);

export default AllPackages;
