import React from 'react';
import Package from '../components/package/package';

const AllPackages = ({ packageService }) => (
  <Package packageService={packageService} modifyable={true} />
);

export default AllPackages;
