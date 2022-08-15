import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import UploadForm from './components/UploadForm';
import BookDetail from './components/DetailsPage/BookDetail';
import DocumentList from './components/ListingPage/DocumentList';
import NewspaperList from './components/ListingPage/NewspaperList'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WebsiteList from './components/ListingPage/WebsitesList';
import DocumentDetail from './components/DetailsPage/DocumentDetail';
import NewsDetail from './components/DetailsPage/NewsDetail';
import WebsiteDetail from './components/DetailsPage/WebsiteDetail';
import Profile from './components/Profile/Profile';
import UploadFormNft from './components/UploadFormNft';
import StoryList from './components/ListingPage/StoryList';
import StoryDetail from './components/DetailsPage/StoryDetail';
import NftReadership from './components/NftReadership/NftReadershipList';
import NftReadershipDetail from './components/NftReadershipDetail/NftReadershipDetail';
function App() {
  return (
    <div className="App">
<Header />
<Routes>
<Route path="/" element= {<Home />}/>
  <Route path ="/upload-form" element = {<UploadForm />}/>
  
  <Route path="/book-detail/:id" element = { <BookDetail /> } />

  <Route path="/doc-detail/:id" element = { <DocumentDetail /> } />
  <Route path="/news-detail/:id" element = { <NewsDetail /> } />
  <Route path="/web-detail/:id" element = { <WebsiteDetail /> } />
  <Route path ="/storylist" element = { <StoryList />} />
  <Route path ="/storydetail" element = { <StoryDetail />} />
  <Route path ="/readership-nft" element = { <NftReadership />} />
  <Route path ="/readership-nft-detail" element = { <NftReadershipDetail />} />

<Route path="/documents-list" element = {<DocumentList />} />
<Route path = "/newspapers-list" element = { <NewspaperList /> } />
<Route path = "/websites-list" element = { <WebsiteList /> } />
<Route path = "/profile" element = { <Profile /> } />
<Route path = "/nft-upload" element = { <UploadFormNft /> } />


</Routes>
<Footer />
      {/* <BookDetail></BookDetail> */}
    </div>
  );
}

export default App;