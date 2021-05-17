import Head from 'next/head';
import Avatar from '../components/Avatar';

export default function Home () {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/*Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* Icon */}
          {/* Avatar */}
          <Avatar url="https://cdn.icon-icons.com/icons2/1302/PNG/512/messengeruseravatar_85815.png" />
        </div>
      </header>
      {/* Body */}
      {/* Footer */}
      <h1 className="p-10">GOOGLE APP</h1>
    </div>
  );
}
