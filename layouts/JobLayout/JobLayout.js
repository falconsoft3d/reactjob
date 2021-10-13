import React from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

export default function JobLayout(props) {
    const { children } = props;
    return (
        <div className="bg-job">
            <Header/>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}
