import React from 'react';
import { Link } from 'react-router-dom';
import beauty1 from '../assets/images/beauty1.jpg';
import beauty2 from '../assets/images/beauty2.jpg';
import beauty3 from '../assets/images/beauty3.webp';

const Home = () => {
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
    },
  ];

  return (
    <div className="home p-4"> 
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          /* 2. Map only returns the individual post card items */
          <div className="post flex flex-col h-full p-4 " key={post.id}>
            <div className="img w-full h-48 overflow-hidden rounded-md mb-4">
              {/* Note: changed w-100 h-100 to Tailwind classes w-full h-full */}
              <img src={post.img} className="w-full h-full object-cover" alt={post.title} />
            </div>
            <div className="content flex flex-col flex-grow justify-between">
              <div>
                <Link className="link hover:underline" to={`/post/${post.id}`}>
                  <h1 className="font-bold font-title text-lg mb-2">{post.title}</h1>
                </Link>
                <p className="font-title font-light text-gray-600 text-sm mb-4">{post.desc}</p>
              </div>
              <Link to={`/post/${post.id}`}>
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors w-full sm:w-auto">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
