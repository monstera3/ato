import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Dialog,
  DialogTitle, DialogContent, DialogContentText, DialogActions
} from '@mui/material';
import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import GoogleIcon from '@mui/icons-material/Google';


export const Login=()=> {

  const [loginDialogOpen, setLoginDialogOpen] = React.useState(false);

  const handleClickOpen = () => {
    setLoginDialogOpen(true);
  };

  const handleClose = () => {
    setLoginDialogOpen(false);
  };

  const auth = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    auth.googleLogin(() => {
      navigate("/", { replace: true })
    });
  }
  return(
    <div>
      <Card sx={{ minWidth: 275 ,maxWidth:500,m:'auto',backgroundColor:'#F0EFE0'}}>
        <Typography
          sx={{ fontSize: 14 ,textAlign:'right',mr:3,mt:3}} color="text.secondary" gutterBottom>
          <a href="http://localhost:3001/login"><ClearIcon /></a>️
        </Typography>
        <CardContent sx={{ textAlign:'center'}}>

          <Typography variant="h5" component="div">
            Ato LOGO
          </Typography>

          <Typography sx={{ my: 1.5}} variant="body1">
            Artはアート情報共有プラットフォームです。
            <br />
            展示や美術館の感想をシェアしましょう。
          </Typography>
          <Typography sx={{ my: 1.5 }} variant="body2" color="text.secondary">
            利用規約、プライバシーポリシーに同意したうえでログインしてください。
          </Typography>
        </CardContent>
        <CardActions >
          <Button onClick={handleGoogleLogin}
                  sx={{ m:'auto',backgroundColor: '#f5f5f5'}}
                  variant="outlined" startIcon={<GoogleIcon />}>
            Login with Google</Button>
        </CardActions>
      </Card>
      {/*TODO: 右上のログインをクリックしたらDialogが出てくるようにしたい*/}
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          loginボタン
        </Button>
        <Dialog
          open={loginDialogOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <Typography
            sx={{ fontSize: 14 ,textAlign:'right',mr:1,mt:2}} color="text.secondary" gutterBottom>
            <Button onClick={handleClose}><ClearIcon /></Button>️
          </Typography>
          <DialogTitle id="alert-dialog-title" sx={{ textAlign:'center'}}>
            {"Ato LOGO"}
          </DialogTitle>
          <DialogContent sx={{ textAlign:'center'}}>
            <DialogContentText id="alert-dialog-description">
              Artはアート情報共有プラットフォームです。
              <br />
              展示や美術館の感想をシェアしましょう。
            </DialogContentText>
            <DialogContentText
              sx={{ my: 1.5 }} variant="body2" color="text.secondary"
              id="alert-dialog-description">
              利用規約、プライバシーポリシーに同意したうえでログインしてください。
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleGoogleLogin}
                    sx={{ m:'auto',backgroundColor: '#f5f5f5'}}
                    variant="outlined" startIcon={<GoogleIcon />}>
              Login with Google</Button>
          </DialogActions>
        </Dialog>
      </div>


    </div>
  );
}
