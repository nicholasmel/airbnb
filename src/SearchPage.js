import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import Home from './Home';
import Banner from './Banner';
import HeaderSearch from './HeaderSearch';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <HeaderSearch />
            </div>
            <div className='searchPage__info'>
                <p>300+ stays</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Free cancellation</Button>
                <Button variant="outlined">Entire place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Instant Book</Button>
                <Button variant="outlined">More filters</Button>
                <h5>Review COVID-19 travel restrictions before you book.</h5>
            </div>
            <SearchResult
                img="https://a0.muscache.com/im/pictures/5713e6d9-e172-4edf-a5bb-06bac435d8e4.jpg?im_w=960"
                location="Tiny house in Joshua Tree"
                title="Area 55 Futuro House"
                description="4 guest · Studio · 2 bed · 1 bath"
                star={4.73}
                price="$289 / night"
                review="(267 reviews)"
            />

            <SearchResult
                img="https://a0.muscache.com/im/pictures/miso/Hosting-51885043/original/da3ca2ec-4ca3-4551-aeca-2267f1f8aae8.jpeg?im_w=960"
                location="Dome hosuse in Twentynine Palms"
                title="Stargazing oasis buble with pool"
                description="2 guest · 1 bedroom · 1 bed · 1 bath"
                star={5.0}
                review="(15 reviews)"
                price="$349 / night"
            />

            <SearchResult
                img="https://a0.muscache.com/im/pictures/9d912ed6-f442-40b9-9f30-8e7183f60a22.jpg?im_w=960"
                location="Dome house in Williams"
                title="Grand Canyon Desert Dome #2"
                description="4 guest · Studio · 3 bed · 1 bath"
                star={4.95}
                review="(85 reviews)"
                price="$196 / night"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/miso/Hosting-42228604/original/6727b625-8980-4076-b05a-db196f977322.jpeg?im_w=960"
                location="Tiny house in Lakeside"
                title="Mountaintop Pool Retreat"
                description="4 guest · 2 bedrooms · 2 beds · 1.5 baths"
                star={4.78}
                review="(23 reviews)"
                price="$279 / night"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/miso/Hosting-48511845/original/5c547673-29e9-4993-b469-137c3b834313.jpeg?im_w=960"
                location="Tiny house in Aguanga"
                title="Off-grid Desert Retreat: Casa Rosada"
                description="4 guest · 1 bedroom · 3 beds · 1 bath"
                star={4.95}
                review="(21 reviews)"
                price="$169 / night"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/c2d3b5a5-26c6-41af-b000-8873b2b635fb.jpg?im_w=960"
                location="Camper/RV in Joshua Tree"
                title="Airstream Oasis in Joshua Tree"
                description="4 guest · 1 bedroom · 1 bed · 1 bath"
                star={4.86}
                review="(36 reviews)"
                price="$157 / night"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/miso/Hosting-40037019/original/7639b3ce-5c89-4d3f-8059-478f46388c37.jpeg?im_w=960"
                location="Tiny house in Joshua Tree"
                title="The Litte Dipper: Off-Grid Tiny Home"
                description="3 guest · Studio · 2 beds · 1 bath"
                star={4.98}
                review="(251 reviews)"
                price="$228 / night"
            />
        </div>
    )
}

export default SearchPage