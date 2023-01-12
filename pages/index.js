import Head from 'next/head'
import Mates from '../components/Mates';
import CreateMates from '../components/CreateMates';

export default function Home() {



  const mates = [
    {
      photo: '/mates/1.png',
      name: 'Simeone Clapoti',
      note: '*****'
    },
    {
      photo: '/mates/2.png',
      name: 'Pascal felux',
      note: '***'
    },
    {
      photo: '/mates/3.png',
      name: 'Linda Ostak',
      note: '*****'
    },
    {
      photo: '/mates/4.png',
      name: 'Bolah Crhistian',
      note: '*****'
    },
    {
      photo: '/mates/5.png',
      name: 'Vanessa Milan',
      note: '****'
    },
  ]
  return (
    <>

      <Head>
        <title>Saferent</title>
        <meta name="description" content="Pic the mate you'd love to live with" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Mates mates={mates}/>
        <CreateMates/>
      </main>

    </>
  )
}
