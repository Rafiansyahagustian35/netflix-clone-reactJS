import * as React from 'react';
import './style.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Nav';

export default function App() {
  return (
    <div>
      
      <Navbar />

      <Banner />

      <Row title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginal} 
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Actions Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  );
}
