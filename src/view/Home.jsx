import React from 'react';
import Navbar from '/workspace/Landing-Page-with-React/src/components/navbar.jsx';
import Jumbotron from '/workspace/Landing-Page-with-React/src/components/jumbotron.jsx';
import Card from '/workspace/Landing-Page-with-React/src/components/card.jsx';
import Footer from '/workspace/Landing-Page-with-React/src/components/footer.jsx';

const Home = () => {
	return (
        <div class="text-center">
            <Navbar />
            <Jumbotron/>
            <div class="row g-4 p-5 mb-4 row-cols-1 row-cols-md-2 row-cols-lg-3  row-cols-xl-4">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        <Footer/>
        </div>
	);
};

export default Home;