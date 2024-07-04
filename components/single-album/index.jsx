'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';

import { Breadcrumb } from '@/components/common/Breadcrumb';

import AlbumItem from './AlbumItem';
import { galleryData } from '@/data/galleryData';
import useLoader from '@/hooks/useLoader';
import Loader from '@/components/common/Loader';

const SingleAlbum = ({ albumId }) => {
  const loading = useLoader();
  const [album, setAlbum] = useState({});

  useEffect(() => {
    const getAlbum = () => {
      const data = galleryData?.find(
        (item) => item?.galleryTitle?.toLowerCase() === albumId?.split('-')?.join(' ')
      );

      return setAlbum(data);
    };

    getAlbum();
  }, [album, albumId]);

  if (loading) {
    return <Loader />;
  }

  if (!album) {
    return notFound();
  }

  return (
    <div>
      <Breadcrumb title={albumId?.split('-')?.join(' ')} />

      <div className="py-20">
        <div className="container">
          <div className="space-y-8 max-w-4xl mx-auto text-center">
            {/* TITLE AND DESCRIPTION */}
            <h2 className="md:text-5xl text-3xl font-bold text-center">{album?.galleryTitle}</h2>
            <p className="md:text-lg">{album?.singleAlbumDescription}</p>
          </div>

          {/* ALBUMS */}
          <div className="md:columns-3 columns-2 gap-x-4 py-12">
            {album?.singleAlbumImages?.map((image, i) => (
              <AlbumItem image={image} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAlbum;
