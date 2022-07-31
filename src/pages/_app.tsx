import { UserProvider } from '@auth0/nextjs-auth0';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ChakraProvider theme={theme}>
        <div className='flex flex-col min-h-screen'>
          <div className='flex-1'>
            <Component {...pageProps} />
          </div>

          <div className='p-4'>
            <p className='text-xs text-gray-600 mt-4 inline-block'>
              <a href='https://www.tronic247.com/?utm_source=stackflex&utm_medium=referral&utm_campaign=poweredby'>
                Tronic247
              </a>
            </p>

            <p className='inline-block ml-4 text-xs'>
              Created for the{' '}
              <a
                href='https://hashnode.com/?source=planetscale_hackathon_announcement'
                className='text-blue-200 hover:text-blue-500'
              >
                Hashnode
              </a>{' '}
              x{' '}
              <a
                href='https://planetscale.com/?utm_source=hashnode&utm_medium=hackathon&utm_campaign=announcement_article'
                className='text-blue-200 hover:text-blue-500'
              >
                PlanetScale
              </a>{' '}
              hackathon.
            </p>
          </div>
        </div>
      </ChakraProvider>
    </UserProvider>
  );
}

export default MyApp;
