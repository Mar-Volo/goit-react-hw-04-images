import { Component } from 'react';
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

export class App extends Component {
  state = {
    searchQuery: '',
    totalHits: 0,
    hits: [],
    status: 'idle',
  };

  handleSubmit = async searchQuery => {
    page = 1;

    if (searchQuery.trim() === '') {
      toast('Enter some request', {
        position: 'top-right',
        autoClose: 1500,
        theme: 'dark',
      });
      // this.setState({ status: 'idle', hits: [], totalHits: 0 }); в зависимости от концепции приложения.
    } else {
      try {
        this.setState({ status: 'pending' });
        const { totalHits, hits } = await FetchImages(searchQuery, page);
        if (hits.length < 1) {
          this.setState({ status: 'idle' });
          toast('No images for your request', {
            position: 'top-right',
            autoClose: 1500,
            theme: 'dark',
          });
        } else {
          this.setState({
            searchQuery,
            totalHits: totalHits,
            hits: hits,
            status: 'resolved',
          });
        }
      } catch (error) {
        this.setState({ status: 'rejected' });
        console.log(error.message);
      }
    }
  };

  handleLoad = async () => {
    const { searchQuery } = this.state;
    this.setState({ status: 'pending' });
    try {
      const { hits } = await FetchImages(searchQuery, (page += 1));
      this.setState(prevState => ({
        hits: [...prevState.hits, ...hits],
        status: 'resolved',
      }));
    } catch (err) {
      this.setState({ status: 'rejected' });
      console.log(err.message);
    }
  };

  render() {
    const { totalHits, hits, status } = this.state;
    if (status === 'idle') {
      return (
        <Layout>
          <SearchBar submitForm={this.handleSubmit} />
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
          <SearchBar submitForm={this.handleSubmit} />
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
          <SearchBar submitForm={this.handleSubmit} />
          <main>
            <Container style={{ paddingRight: '34px' }}>
              <GalleryList items={hits} />
              {hits.length < totalHits && <LoadBtn onClick={this.handleLoad} />}
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
          <SearchBar submitForm={this.handleSubmit} />
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
  }
}
