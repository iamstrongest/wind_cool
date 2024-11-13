export function storageFn(token, refresh_token, uuid) {
    if (token) {
      localStorage.setItem("token", token);
    }
    if (refresh_token) {
      localStorage.setItem("refresh_token", refresh_token);
    }
    if (uuid) {
      localStorage.setItem("uuid", uuid);
    }
}
export function clearStorageFn() {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("uuid");
}
