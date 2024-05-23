import React from 'react';
import { useLocation } from 'react-router-dom';

function BundleProductAdd() {
  const location = useLocation();
  const data = location.state?.data;

  console.log(data.datan);

  return (
    <div>
      {/* {data ? (
        <p>Name: {data.datan}</p>
      ) : (
        <p>No data available</p>
      )} */}
    </div>
  );
}

export default BundleProductAdd;
