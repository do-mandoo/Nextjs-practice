import { QueryBuilder } from '@mui/icons-material';
import axios from 'axios';
import React from 'react';

export async function getServerSideProps({ params }) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/photos?albumId=1&id=${params.id}`
  );
  const datas = res.data;
  // history.pushState(`&id=${params.id}`);
  return {
    props: {
      datas,
    },
  };
}

const Details = ({ datas }) => {
  console.log(datas, 'detail datas');
  return <div>hihithis is detail</div>;
};

export default Details;
