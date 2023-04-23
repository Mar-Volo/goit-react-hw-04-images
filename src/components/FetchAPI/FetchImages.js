import axios from 'axios';

export default async function FetchImages(value, page) {
  const url = 'https://pixabay.com/api/';
  const key = '35043953-23d752bfe4dffcea57d0f9bb5';
  const fetch = `${url}?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;
  return await axios.get(fetch).then(response => response.data);
}

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
//