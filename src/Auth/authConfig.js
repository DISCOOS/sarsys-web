export const IDENTITY_CONFIG = {
  authority: process.env.REACT_APP_AUTH_URL,
  client_id: process.env.REACT_APP_IDENTITY_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URL,
  login: process.env.REACT_APP_AUTH_URL + "/protocol/login",
  automaticSilentRenew: false,
  silentRequestTimeout: 5000,
  loadUserInfo: false,
  silent_redirect_uri: process.env.REACT_APP_SILENT_REDIRECT_URL,
  post_logout_redirect_uri: process.env.REACT_APP_LOGOFF_REDIRECT_URL,
  audience: "https://sarsys.no",
  response_type: "id_token token",
  grantType: "password",
  scope: "openid",
  webAuthResponseType: "id_token token"
};

export const METADATA_OIDC = {
  issuer: "https://id.discoos.io/auth/realms/DISCOOS",
  jwks_uri: process.env.REACT_APP_AUTH_URL + "/protocol/openid-connect/certs",
  authorization_endpoint:
    process.env.REACT_APP_AUTH_URL + "/protocol/openid-connect/auth",
  token_endpoint:
    process.env.REACT_APP_AUTH_URL + "/protocol/openid-connect/token",
  userinfo_endpoint:
    process.env.REACT_APP_AUTH_URL + "/protocol/openid-connect/userinfo",
  end_session_endpoint:
    process.env.REACT_APP_AUTH_URL + "/protocol/openid-connect/logout",
  check_session_iframe:
    process.env.REACT_APP_AUTH_URL +
    "/protocol/openid-connect/login-status-iframe.html",
  revocation_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/revocation",
  introspection_endpoint:
    process.env.REACT_APP_AUTH_URL + "/protocol/openid-connect/token/introspect"
};
