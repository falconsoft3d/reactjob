import JobList from '../components/JobList';
import Searcher from '../components/Searcher';
import JobLayout from '../layouts/JobLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <JobLayout>
        <div className="container">
            <div className="row job-det">
                <div className="col-2">
                    <img class="card-img-top" src="/pic-company-logo.png" alt="Card image cap"/>
                </div>
                <div className="col-10">
                    <p><strong>React Developer</strong></p>
                    <Link href="/">TuSoluction</Link>
                    <p>España | 10-12-2021</p>
                </div>
            </div>
            <a className="btn btn-primary py-2 main-gray text-decoration-none m-2 button-primary" href="#">Aplicar</a>
            <div className="row job-text">
                <div className="col-12">
                    <p>Lorem Ipsum</p>
                </div>
            </div>
        </div>
    </JobLayout>
  )
}