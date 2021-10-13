import Head from 'next/head';
import Image from 'next/image';
import Searcher from '../components/Searcher';
import JobLayout from '../layouts/JobLayout';

export default function Home() {
  return (
    <JobLayout>
        <Searcher />
    </JobLayout>
  )
}
