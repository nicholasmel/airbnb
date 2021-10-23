import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card.js';
import Header from './Header';

// ES7 react snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <h1>Explore nearby</h1>
            <div className='home__explore'>
                <img src="https://a0.muscache.com/im/pictures/4fab796b-116b-45f6-9bfc-a8ea366da870.jpg?im_q=medq&im_w=240" alt="" />
                <h1>Sand Diego</h1>
                <p>7 hour drive</p>
            </div>
            <div className='home__explore'>
                <img src="https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240" alt="" />
                <h1>Las Vegas</h1>
                <p>6 hour drive</p>
            </div>
            <div className='home__explore'>
                <img src="https://a0.muscache.com/im/pictures/087a8dff-a609-4084-86db-f45051c6f23a.jpg?im_q=medq&im_w=240" alt="" />
                <h1>Phoenix</h1>
                <p>45 minute drive</p>
            </div>
            <div className='home__explore'>
                <img src="https://a0.muscache.com/im/pictures/1eee1567-19ec-49c6-8e52-92fae9c2cfd5.jpg?im_q=medq&im_w=240" alt="" />
                <h1>Henderson</h1>
                <p>5.5 hour drive</p>
            </div>
            <div className='home__explore'>
                <img src="https://a0.muscache.com/im/pictures/24e04078-6c6d-4827-93bf-c2d246570199.jpg?im_q=medq&im_w=240" alt="" />
                <h1>Scottsdale</h1>
                <p>45 minute drive</p>
            </div>
            <div className='home__explore'>
                <img src="https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240" alt="" />
                <h1>Paradise</h1>
                <p>6 hour drive</p>
            </div>
            <div className='home__explore'>
                <img src="https://a0.muscache.com/im/pictures/08b33515-49eb-4b9b-8e60-f962fb7e700b.jpg?im_q=medq&im_w=240" alt="" />
                <h1>Palm Springs</h1>
                <p>5 hour drive</p>
            </div>
            <div className='home__explore'>
                <img src="https://a0.muscache.com/im/pictures/a7fe39da-3e57-44df-a744-9a73e482802d.jpg?im_q=medq&im_w=240" alt="" />
                <h1>Big Bear Lake</h1>
                <p>6.5 hour drive</p>
            </div>
            <h1>Live anywhere</h1>
            <div className='home__section'>
                <Card
                    src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480"
                    title="Outdoor getaways"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
                    title="Unique stays"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480"
                    title="Entire homes"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480"
                    title="Pets allowed"
                />
            </div>
            <h1>Discover things to do</h1>
            <div className='home__section'>
                <Card
                    src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=720"
                    title="Experiences"
                    description="Find unforgettable activites near you."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=720"
                    title="Online Experiences"
                    description="Find unforgettable activites near you."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/3c2676df-0874-45a3-a82f-bbf57ccde1cc.jpg?im_w=720"
                    title="Outdoor collection"
                    description="Find unforgettable activites near you."
                />
            </div>
        </div>
    )
}

export default Home
