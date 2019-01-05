import mockData from './mockData'

// export interface ISessionResponse {
//   id: string;
//   title: string;
//   message: string[];
//   payload: {
//     orgWallpaper: string;
//     orgName: string;
//     orgLogo: string;
//     orgColor: string;
//     serverVersion: string;
//     session: {
//       lang: string;
//       langAltCode: string;
//       user: any;
//     };
//     applications: any[];
//     languages: any;
//   }
// }

const fetchSession = () => {
  const context = window.location.pathname.split('/')[1]
  return fetch(`/${context}/session`).then(response => {
    return response.json()
  })
}

const login = (login: string, pwd: string, saveauth: boolean) => {
  const params: any = { login, pwd, saveauth }
  const searchParams = Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
  }).join('&')

  const context = window.location.pathname.split('/')[1]
  return fetch(`/${context}/Login`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: searchParams
  }).then(response => response.json())
}

const logout = () => {
  const context = window.location.pathname.split('/')[1]
  return fetch(`/${context}/Logout`, {
    credentials: 'include',
    method: 'POST'
  })
  // return Promise.resolve(mockData.unAuthsession).then(response => {
  //   return response
  // })
}

export default {
  fetchSession,
  login,
  logout
}
