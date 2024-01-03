import React from 'react';

function ImageCard({image}) {
    let text=image.tags;
    const mytag=text.split(",");
    return(
            <div className="max-w-sm shadow-lg overflow-hidden rounded">
                <img src={image.webformatURL} alt="Image" className='w-full'/>
                <div className="px-6 py-4">
                    <div className=" text-purple-600 font-semibold">Photo By {image.user}</div>
                    <div>
                        <ul>
                            <li><b>Views:</b>{image.views}</li>
                            <li><b>Downloads:</b>{image.downloads}</li>
                            <li><b>Likes:</b>{image.likes}</li>
                        </ul>
                    </div>
                </div>

                <div className="px-6 py-4">
                    {mytag.map((tag,index)=>(
                        <span key={index} className="inline-block px-2 py-1 font-semibold mr-2 text-sm rounded-full text-gray-700 bg-gray-200">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
    )
}
export default ImageCard;