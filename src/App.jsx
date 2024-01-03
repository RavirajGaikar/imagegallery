import React,{useState , useEffect} from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

export default function App() {

  const [images,setImages] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [term,setTerm] = useState('');

  useEffect(()=> {
    fetch(`https://pixabay.com/api/?key=41459818-5184da151d07fb6ecf1317863&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
        setImages(data.hits);
        setIsLoading(false);
    })
    .catch(err => console.log(err))
  },[term]);

  return (
    <div className='container mx-auto'>
      <ImageSearch onSearch={(text)=>setTerm(text)}/>

      {!isLoading && images.length===0 && <h1 className='mt-[32px] mx-auto text-5xl text-center'>No Images Found</h1>}
      {isLoading ? <h1 className='mt-[32px] mx-auto text-6xl text-center'>Loading..</h1>:<div className='grid grid-cols-3 gap-4'>
        {images.map(image => (
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>}
    
    </div>
  );
}