import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
    const responseGoogle = (response: any) => {
        console.log(response);
        // Lógica para tratar a resposta do login com o Google
    };

    return (
        <GoogleLogin
            clientId={responseGoogle.name}
            buttonText="Login com o Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
        />
    );
};

export default GoogleLoginButton;