const configuration = {
  client_id: "sarsys-web",
  redirect_uri: "http://localhost:3000/authentication/callback",
  response_type: "id_token token",
  post_logout_redirect_uri: "http://localhost:3000/",
  scope: "openid roles",
  authority: "https://id.discoos.io/auth/realms/DISCOOS",
  silent_redirect_uri: "http://localhost:3000/authentication/silent_callback",
  automaticSilentRenew: true,
  loadUserInfo: true,
  triggerAuthFlow: true
};

export default configuration;
