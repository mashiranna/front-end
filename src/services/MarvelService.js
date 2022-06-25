import { useHttp } from '../hooks/http.hook';
const useMarvelService = () => {
  const { loading, error, request, clearError } = useHttp();
  const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  const _apiKey = 'c60732a3c11ef854cc73634a8b9cc36f';
  const _baseOffset = 410;

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&apikey=${_apiKey}`
    );
    return res.data.results.map((item) => _transformCharacter(item));
  };
  const getCharacter = async (id) => {
    return await request(`${_apiBase}characters/${id}?apikey=${_apiKey}`).then(
      (res) => _transformCharacter(res.data.results[0])
    );
  };
  
  const _transformCharacter = (res) => {
    return {
      id: res.id,
      name: res.name,
      description: res.description,
      thumbnail: res.thumbnail.path + '.' + res.thumbnail.extension,
      homepage: res.urls[0].url,
      wiki: res.urls[1].url,
      comics: res.comics.items,
    };
  };
  return {
    getAllCharacters,
    getCharacter,
    loading,
    error,
    clearError,
  };
};

export default useMarvelService;
