'use client';

import Message from './Message';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { managementMessageData } from './managementMsgData';
import useLoader from '@/hooks/useLoader';
import Loader from '@/components/common/Loader';

const ManagementMessagePage = () => {
  const loading = useLoader();

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="managementMessage">
      <Breadcrumb title="Management Message" />
      <div className="py-16">
        <div className="container">
          <ul>
            {/* Map through management messages data and render Message components */}
            {managementMessageData.map((message, i) => (
              <Message
                key={message?.managementId}
                title={message?.managementTitle}
                image={message?.managementImage}
                desc={message?.managementDescription}
                name={message?.managementName}
                position={message?.managementPosition}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManagementMessagePage;
