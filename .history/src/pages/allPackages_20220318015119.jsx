import React from 'react';
import Package from '../components/package/package';

const AllPackages = ({ packageService, modifyable }) => (
  <Package packageService={packageService} modifyable={modifyable} />
);

export default AllPackages;
