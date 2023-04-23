import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchBar } from './SearchBar/SearchBar';
import { GalleryList } from './ImageGallery/ImageGallery';
import { LoadBtn } from '../components/Button/Button';
import { Loader } from './Loader/Loader';
import { Layout } from './Layout/Layout';
import { Container } from './Layout/Container';
import { GlobalStyle } from './GlobalStyle';
import FetchImages from './FetchAPI/FetchImages';

let page = 1;

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [totalHits, setTotalHits] = useState(0);
  const [hits, setHits] = useState([]);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async searchQuery => {
    page = 1;

    if (searchQuery.trim() === '') {
      toast('Enter some request', {
        position: 'top-right',
        autoClose: 1500,
        theme: 'dark',
      });
    } else {
      try {
        setStatus('pending');
        const { totalHits, hits } = await FetchImages(searchQuery, page);
        if (hits.length < 1) {
          setStatus('idle');
          toast('No images for your request', {
            position: 'top-right',
            autoClose: 1500,
            theme: 'dark',
          });
        } else {
          setSearchQuery(searchQuery);
          setTotalHits(totalHits);
          setHits(prevHits => [...prevHits, ...hits]);
          setStatus('resolved');
        }
      } catch (error) {
        setStatus('rejected');
        console.log(error.message);
      }
    }
  };

  const handleLoad = async () => {
    setStatus('pending');
    try {
      const { hits } = await FetchImages(searchQuery, (page += 1));
      setHits(prevHits => [...prevHits, ...hits]);
      setStatus('resolved');
    } catch (err) {
      setStatus('rejected');
      console.log(err.message);
    }
  };

  if (status === 'idle') {
    return (
      <Layout>
        <SearchBar submitForm={handleSubmit} />
        <main>
          <Container style={{ paddingRight: '34px' }} />
        </main>
        <GlobalStyle />
        <ToastContainer
          autoClose={2500}
          style={{ boxShadow: '0px -0px 3px whitesmoke', height: '70px' }}
        />
      </Layout>
    );
  } else if (status === 'pending') {
    return (
      <Layout>
        <SearchBar submitForm={handleSubmit} />
        <main>
          <Container style={{ paddingRight: '34px' }}>
            <Loader />
          </Container>
        </main>
        <GlobalStyle />
        <ToastContainer
          autoClose={2500}
          style={{
            boxShadow: '0px -0px 3px whitesmoke',
            height: '70px',
            zIndex: '50000',
          }}
        />
      </Layout>
    );
  } else if (status === 'resolved') {
    return (
      <Layout>
        <SearchBar submitForm={handleSubmit} />
        <main>
          <Container style={{ paddingRight: '34px' }}>
            <GalleryList items={hits} />
            {hits.length < totalHits && <LoadBtn onClick={handleLoad} />}
          </Container>
        </main>
        <GlobalStyle />
        <ToastContainer
          autoClose={2500}
          style={{ boxShadow: '0px -0px 3px whitesmoke', height: '70px' }}
        />
      </Layout>
    );
  } else if (status === 'rejected') {
    return (
      <Layout>
        <SearchBar submitForm={handleSubmit} />
        <main>
          <Container style={{ paddingRight: '34px' }} />
          {toast('Something went wrong', {
            position: 'top-right',
            autoClose: 1500,
            theme: 'dark',
          })}
          ;
        </main>
        <GlobalStyle />
        <ToastContainer
          autoClose={2500}
          style={{ boxShadow: '0px -0px 3px whitesmoke', height: '70px' }}
        />
      </Layout>
    );
  }
};
