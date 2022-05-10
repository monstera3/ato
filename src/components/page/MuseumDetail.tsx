import { useParams } from 'react-router-dom';
import { getMuseum } from '../../data';
import { Museum } from '../model/Museum';

export const MuseumDetail = () => {
  const params = useParams();
  const museum = getMuseum(parseInt(params.museumId ? params.museumId : '0', 10));
  return (
    <Museum museum={museum} />
     )
}
