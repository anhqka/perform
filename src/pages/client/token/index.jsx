import GoogleLogin from 'react-google-login';

const Token = () => {
  const responseGoogle = (response) => {
    console.log(response.profileObj.name,"response.profileObj.name");
  };

  return (
    <div>
      <GoogleLogin
        clientId="86087276805-1nglf1fprcsd4m77pm5og2kqafr1226s.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        uxMode="redirect"
        redirectUri="http://localhost:3000"
      />
    </div>
  );
};

export default Token;
