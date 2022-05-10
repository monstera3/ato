import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


export const Login=()=> {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    auth.googleLogin(() => {
      navigate("/", { replace: true })
    });
  }
  return(
    <div>
      <Button onClick={handleGoogleLogin}>Googleログイン</Button>
    </div>
  );
};
