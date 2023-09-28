export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "607d80440dmsh94bf5fde76cd109p1e1acfjsn25a66de84ebf",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

export const youtubeOptions = {
  method: 'GET',
  
 
  headers: {
    'X-RapidAPI-Key': '607d80440dmsh94bf5fde76cd109p1e1acfjsn25a66de84ebf',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};