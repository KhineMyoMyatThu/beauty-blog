import React from 'react';
import { Delete, Edit, Trash } from 'lucide-react';
import beauty1 from '../assets/images/beauty1.jpg';
import beauty2 from '../assets/images/beauty2.jpg';
import profile from '../assets/images/profile.png';
import Menu from './Menu';

const Single = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex items-start gap-8">
        <div className="flex-1">
          <img src={beauty1} alt="Beauty" className="w-full h-[360px] object-cover bg-gray-200" />

          <div className="mt-6 flex items-center gap-3">
            <img src={profile} alt="Profile" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="text-lg font-medium text-gray-800">John</p>
              <p className="text-sm text-gray-500">Posted 2 days ago</p>
            </div>
            <div className="flex gap-2">
            <button
              className="flex items-center justify-center bg-green-500 p-2 text-white hover:bg-green-600 rounded-full transition duration-300">
              <Edit className="h-4 w-4" />
            </button>
            <button className="flex items-center justify-center bg-red-500 p-2 text-white hover:bg-red-600 rounded-full transition duration-300 ">
              <Trash className="h-4 w-4" />
            </button>
          </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-800">Beautiful Sunset</h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.
            </p>
          </div>
        </div>

       <Menu/>
       
      </div>
    </div>
  );
};

export default Single;