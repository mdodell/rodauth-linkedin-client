const BASE_URL = "https://www.linkedin.com/oauth/v2/authorization";

const client_id = "YOUR_CLIENT_ID";
const response_type = "code";
const redirect_uri = "http://localhost:3000/auth/linkedin/callback";
const scope = "r_liteprofile%20r_emailaddress";

function makeId(length: number) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function useLinkedin() {
  const authorizationCodeUrl = `${BASE_URL}?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${makeId(
    20
  )}&scope=${scope}`;

  return { authorizationCodeUrl };
}

export default useLinkedin;
