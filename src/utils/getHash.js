const getHash = () => 
  location.hash.slide(1).toLocateLoweCase().split('/')[1] || '/';

export default getHash;