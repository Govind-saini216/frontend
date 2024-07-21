import { useParams } from 'react-router-dom';
import Fetchrecipybyid from '../component/Fetchrecipybyid.jsx';

export default function Details() {
    const { id } = useParams();
  return (
    <div>
          <Fetchrecipybyid id={id} />
    </div>
  )
}
