const BASE_URL = "https://www.linkedin.com/oauth/v2/authorization";

const client_id = "CLIENT";
const client_secret = "SECRET";
const response_type = "code";
const redirect_uri = "http://localhost:3000/auth/linkedin/callback";
const state = "DCEeFWf45A53sdfKef123";
const scope = "r_liteprofile%20r_emailaddress";

function useLinkedin() {
  const authorizationCodeUrl = `${BASE_URL}?response_type=${response_type}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}&state=${state}=${state}&scope=${scope}`;

  return { authorizationCodeUrl };
}

export default useLinkedin;
