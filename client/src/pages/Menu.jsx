import React from 'react';
import beauty1 from '../assets/images/beauty1.jpg';
import beauty2 from '../assets/images/beauty2.jpg';
import beauty3 from '../assets/images/beauty3.webp';
import { Link } from 'react-router-dom';

const Menu = () => {
     const posts = [
        { id: 1, 
          title: 'The Ultimate Guide to Skincare: Tips and Tricks for Healthy Skin',
           desc : 'Discover the secrets to achieving radiant and healthy skin with our comprehensive skincare guide. From cleansing routines to the best products, we cover it all.', 
           img: beauty1 
          },
        { id: 2, 
          title: 'The Ultimate Guide to Skincare: Tips and Tricks for Healthy Skin', 
          desc : 'Discover the secrets to achieving radiant and healthy skin with our comprehensive skincare guide. From cleansing routines to the best products, we cover it all.', 
          img: beauty2 
        },
        { id: 3, title: 'The Ultimate Guide to Skincare: Tips and Tricks for Healthy Skin', desc : 'Discover the secrets to achieving radiant and healthy skin with our comprehensive skincare guide. From cleansing routines to the best products, we cover it all.', img: beauty3 },
         { id: 4, 
          title: 'The Ultimate Guide to Skincare: Tips and Tricks for Healthy Skin', 
          desc : 'Discover the secrets to achieving radiant and healthy skin with our comprehensive skincare guide. From cleansing routines to the best products, we cover it all.', 
          img: beauty2 
        },]
  return (
    <div className="w-[420px] p-4">
      <h1 className='font-bold text-xl mb-4'>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt={post.title} className="w-full h-48 object-cover rounded-md mb-2" />
          <h2 className="font-bold text-lg mb-1">{post.title}</h2>
          <p className="text-gray-600 text-sm">{post.desc}</p>
        <Link to={`/post/${post.id}`}>
                          <button className="bg-pink-500 text-white px-2 py-1 rounded-md hover:bg-pink-600 transition-colors sm:w-auto my-2">
                            Read More
                          </button>
        </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;