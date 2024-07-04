import SingleAlbum from '@/components/single-album';

const SingleAlbumPage = ({ params }) => {
  const { albumId } = params;

  return (
    <>
      <SingleAlbum albumId={albumId} />
    </>
  );
};

export default SingleAlbumPage;
