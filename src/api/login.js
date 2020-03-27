export function login(username, password) {
  return fetch(
    `${
      process.env.BASE_API
    }/user/login?username=${username}&password=${password}`
  )
}
