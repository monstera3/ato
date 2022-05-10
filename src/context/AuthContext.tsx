import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup,onAuthStateChanged } from 'firebase/auth';


type AuthContextType = {
  user: any;
  googleLogin: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>('');

  useEffect(() => {
    const auth = getAuth();
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.uid);
      }
    });
    return () => {
      unsubscribed();
    }
  }, []);

  const googleLogin = (callback: VoidFunction) => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log(user, token);
        setUser(user.uid);
        callback();
      }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      console.log(error, errorCode, email, errorMessage);
    });

  }




  const value = {
    user,
    googleLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
