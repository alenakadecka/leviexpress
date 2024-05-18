import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { ReservationPage } from '../../components/ReservationPage';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey ? <p>Nalezeno spojení s id: {journey.journeyId}</p> : ''}
      <ReservationPage />
    </main>
  );
};
