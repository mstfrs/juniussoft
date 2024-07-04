import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/common/ScrollAnimation';

const AlbumItem = ({ image }) => {
  return (
    <Link href={image?.singleAlbumImage} className="break-inside-avoid mb-4 block">
      <Reveal from={50}>
        <div className="w-full h-full">
          {/* ALBUM IMAG */}
          <Image
            src={image?.singleAlbumImage}
            alt="single-album"
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg bg-gray-50 max-h-[400px] object-cover"
          />
        </div>
      </Reveal>
    </Link>
  );
};

export default AlbumItem;
