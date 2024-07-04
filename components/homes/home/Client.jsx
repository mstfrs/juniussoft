import Image from 'next/image';

const Client = ({ client }) => {
  return (
    <div className="image py-3">
      {/* Container for the client's brand image */}
      <div className="max-w-[305px] min-w-[305px] max-h-[105px] h-[105px] py-6 px-12 rounded flex justify-center items-center shadow-md bg-white border-2 border-solid border-primary border-opacity-20">
        {/* CLIENT BRAND IMAGE */}
        <Image
          src={client?.clientImage}
          alt="Brand Image"
          className="object-cover max-h-20 w-fit"
          width={200}
          height={60}
          priority
        />
      </div>
    </div>
  );
};

export default Client; // Export the Client component
