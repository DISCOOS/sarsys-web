const configuration = {
  client_id: "sarsys-web",
  redirect_uri: process.env.REACT_APP_URL + "/authentication/callback",
  response_type: "id_token token",
  post_logout_redirect_uri: process.env.REACT_APP_URL,
  scope: "openid roles offline_access",
  authority: "https://id.discoos.io/auth/realms/DISCOOS",
  silent_redirect_uri:
    process.env.REACT_APP_URL + "/authentication/silent_callback",
  automaticSilentRenew: true,
  loadUserInfo: true,
  triggerAuthFlow: true
};

export default configuration;
