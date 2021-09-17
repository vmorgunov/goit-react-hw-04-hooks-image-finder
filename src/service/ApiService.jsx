const fetchImage = async (searchQuery, page) => {
  const API_KEY = '22738426-58af921ac2532cd8236517c49';
  const BASE_URL = 'https://pixabay.com/api/';
  const url = `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horisontal&per_page=12`;
  const result = await fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('Error'));
  });

  return result;
};

export default fetchImage;
