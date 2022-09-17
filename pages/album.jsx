import {
  Box,
  Container,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';

export async function getServerSideProps() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10&albumId=1');
  const datas = res.data;
  return {
    // props:{datas:datas}
    props: { datas },
  };
}

const album = ({ datas }) => {
  console.log(datas, 'datas album?');
  return (
    <Container>
      <Link href='/'>
        <a>go to index</a>
      </Link>
      <Box>
        <Typography>hihihi</Typography>
      </Box>
      <Box>
        <ImageList sx={{ width: '80vw', height: '80vh' }}>
          {datas.map(data => (
            <ImageListItem key={data.id}>
              <Link href={`&id=${data.id}`} style={{ display: 'inline-block' }}>
                <a style={{ display: 'inline-block' }}>
                  {/* Image인 Image/next 태그 사용하면 에러 뜸. http가 붙은 src는 img태그에서는 동작.ㄴ */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${data.url}`} alt={data.title} loading='lazy' />
                </a>
              </Link>
              <ImageListItemBar
                title={data.title}
                actionIcon={
                  <IconButton>
                    <InfoIcon />
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
