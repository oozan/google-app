import Head from 'next/head';
import Header from '../components/Header';
import {API_KEY, CONTEXT_KEY} from '../keys';
function Search() {
    return (
        <div>
         <Head>
             <title>Search Result</title>
             <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        </div>
    )
}

export default Search;

export async function getServerSideProps(context) {
    const dummyData = false;

    const data = await fetch( 
        `https:/www.googleapis.com/custom-search/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}` 
    ).then((response) => response.json());
    
}