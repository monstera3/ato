import { useParams } from 'react-router-dom';
import { getMuseum } from '../../data';
import { MuseumCard } from '../model/MuseumCard';

export const MuseumDetail = () => {
  const params = useParams();
  const museum = getMuseum(parseInt(params.museumId ? params.museumId : '0', 10));
  return (
    <MuseumCard museum={museum} />
     )
}
