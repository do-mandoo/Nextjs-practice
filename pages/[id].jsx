import { Box, ImageListItem, Typography } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
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
  console.log(datas[0], 'detail datas');

  return (
    <>
      <Box sx={{ width: '800px', height: '800px', margin: '0 auto', marginTop: '10px' }}>
        <Typography
          variant='h3'
          sx={{
            textTransform: 'uppercase',
            fontWeight: 600,
            color: 'skyblue',
            ':hover': { color: 'blue' },
          }}
        >
          <Link href='/album'>
            <a>← go to back</a>
          </Link>
        </Typography>
        {/* <Box>{datas[0].title}</Box> */}
        <ImageListItem
          sx={{
            width: '600px',
            height: '600px',
            border: '1px solid #000',
            padding: '40px',
            marginTop: '40px',
          }}
        >
          <Box sx={{ marginBottom: '10px', backgroundColor: '#eee' }}>
            <Typography sx={{ fontWeight: '600', textTransform: 'uppercase' }}>
              id&nbsp;:&nbsp;
              <Typography component='span' sx={{ textTransform: 'lowercase' }}>
                {datas[0].id}
              </Typography>
            </Typography>
            <Typography sx={{ fontWeight: '600', textTransform: 'uppercase' }}>
              title&nbsp;:&nbsp;
              <Typography component='span' sx={{ textTransform: 'lowercase' }}>
                {datas[0].title}
              </Typography>
            </Typography>
          </Box>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={datas[0].url} alt={datas[0].title} loading='lazy' />
          {/* 
            next/image의 Image태그를 사용하기 위해 'next.config.js'파일 수정을 함. error는 안나오지만 이미지 엑박이 뜬다.
            <Image src={datas[0].url} alt={datas[0].title} width={400} height={400} /> 
            해결 중...
          */}
        </ImageListItem>
      </Box>
    </>
  );
};

export default Details;
