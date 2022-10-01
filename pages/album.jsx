import {
  Box,
  Container,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Tooltip,
  Typography,
} from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';

export async function getServerSideProps() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=40&albumId=1');
  const datas = res.data;
  return {
    // props:{datas:datas}
    props: { datas },
  };
}

const album = ({ datas }) => {
  console.log(datas, 'datas album?');
  return (
    <Container
      sx={{
        padding: '0px !important',
        maxWidth: 'unset !important',
        width: '90vw',
        height: '100vh',
        margin: '0 auto',
      }}
    >
      <Typography
        variant='h2'
        sx={{
          textTransform: 'Uppercase',
          fontWeight: 'bold',
          color: 'skyblue',
          ':hover': { color: 'blue' },
        }}
      >
        <Link href='/'>
          <a>← go to index</a>
        </Link>
      </Typography>
      <Typography sx={{ textTransform: 'uppercase', fontWeight: 500 }}>
        try to click color images
      </Typography>
      <Box>
        <ImageList
          // sx={{ backgroundColor: '#aaa' }}
          //                                           row-gap: 25px; column-gap: 23px;
          style={{ gridTemplateColumns: 'repeat(10,1fr)', gap: '25px 23px' }}
        >
          {datas.map(data => (
            <ImageListItem
              key={data.id}
              // style={{ height: '30vh' }}
              sx={{ width: '152px', border: '1px solid #000' }}
            >
              <Link href={`/album&id=${data.id}`} style={{ display: 'inline-block' }}>
                <a style={{ display: 'inline-block' }}>
                  {/* Image인 Image/next 태그 사용하면 에러 뜸. http가 붙은 src는 img태그에서는 동작.ㄴ */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${data.thumbnailUrl}`} alt={data.title} loading='lazy' />
                </a>
              </Link>
              <ImageListItemBar
                title={data.title}
                actionIcon={
                  <IconButton>
                    <Tooltip title='위의 색상 이미지를 클릭하면 상세 페이지로 이동합니다.'>
                      <InfoIcon />
                    </Tooltip>
                  </IconButton>
                }
              ></ImageListItemBar>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
};

export default album;
