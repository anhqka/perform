import GoogleLogin from 'react-google-login';

const HomePage = () => {
  // const responseGoogle = (response: any) => {
  //   console.log(response,"response.profileObj.name");
  // };

  return (
    <div>
      <GoogleLogin
        clientId="86087276805-1nglf1fprcsd4m77pm5og2kqafr1226s.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={(response) => {
          console.log(response);
          
        }}
        // onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        uxMode="redirect"
        redirectUri="http://localhost:3000"
      />
    </div>
  );
};

export default HomePage;
