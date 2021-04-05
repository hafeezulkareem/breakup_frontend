import Cookie from "js-cookie";

export const TOKEN = "token";

export function getCookie(key) {
   return Cookie.get(key);
}

function setCookie(key, value) {
   Cookie.set(key, value, {
      expires: 7,
      path: "/",
   });
}

export function getToken() {
   return getCookie(TOKEN);
}
export function setToken(token) {
   setCookie(TOKEN, token);
}

export function clearUserSession() {
   Cookie.remove(TOKEN, { path: "/" });
}
