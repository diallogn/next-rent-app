import EmptyState from '../components/EmptyState';
import ClientOnly from '../components/clientOnly';

import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservations';
import PropertiesClient from './PropertiesClient';
import getListings from '../actions/getListing';

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unhauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subtitle="Looks like havent reserved any trips."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default PropertiesPage;
