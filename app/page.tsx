import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Home = () => {
  return (
    <Container maxWidth="sm" className="my-10">
      <article className="bg-white rounded-2xl shadow-2xl border border-gray-900 border-b-8 border-r-8 w-[350px] p-6 mx-auto">
        <header>
          <Image
            className="rounded-xl"
            width={700}
            height={475}
            src="/assets/images/illustration-article.svg"
            alt="Article illustration"
          />
        </header>

        <a
          className="mt-6 inline-block px-3 py-1 text-sm font-semibold bg-yellow-300 text-black rounded"
          href="#"
        >
          Learning
        </a>

        <Typography variant="body2" className="text-gray-600 pt-4">
          Published 21 Dec 2023
        </Typography>

        <a href="#" className="block mt-4 text-xl font-bold text-black hover:text-yellow-500">
          HTML & CSS foundations
        </a>

        <Typography variant="body2" className="text-gray-500 mt-3">
          These languages are the backbone of every website, defining structure, content, and presentation.
        </Typography>

        <Box className="flex items-center mt-6">
          <Image
            src="/assets/images/image-avatar.webp"
            alt="Greg Hooper avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <Typography className="pl-2 font-bold text-black">Greg Hooper</Typography>
        </Box>
      </article>
    </Container>
  );
};

export default Home;
