import Navbar from '@/components/organisme/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style>

          {`
            /* Largeur de la barre de défilement */
            ::-webkit-scrollbar {
              width: 6px;
            }

            ::-webkit-scrollbar-button{
              background-color: #0066FF;
              border-radius: 0px;
            }

            
            /* Couleur de fond de la barre de défilement */
            ::-webkit-scrollbar-track {
              background-color: #f1f1f1;
            }
            
            /* Couleur du fond de la barre de défilement au survol */
            ::-webkit-scrollbar-thumb:hover {
              background-color: #555;
            }
            
            /* Couleur de la barre de défilement */
            ::-webkit-scrollbar-thumb {
              background-color: #0066FF;
              border-radius: 0px;
            }
            

            .arrow {
              position: relative;
              overflow: hidden;
              display: inline-block;
            }
            
            .arrow::before {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background-color: #fff;
              transition: transform 0.3s ease;
              transform: translateX(-100%);
            }
            
            .arrow:hover::before {
              transform: translateX(100%);
            }
            
            .arrow::after {
              content: '';
              position: absolute;
              width: 0;
              height: 0;
              top: 50%;
              right: 0;
              border-top: 10px solid transparent;
              border-bottom: 10px solid transparent;
              border-left: 10px solid #333;
              transform: translateY(-50%);
            }
          `}
        </style>
        <title>FindAJob</title>
        
      </Head>
      <div className='flex-1 min-h-screen bg-[#F1F4F8]'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  )
}
