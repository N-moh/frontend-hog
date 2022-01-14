import axios from "axios";
const url = "http://localhost:3001/";


export class ApiClient {
  constructor(tokenProvider,logoutHandler){
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }
  authenticatedCall(method,url,data){
    return axios({
      method,
      url,
      headers: {
        authorization: this.tokenProvider
      },
      data,
    }).catch((error) => {
      if(error.response.status === 403) {
        this.logoutHandler();
        return Promise.reject()
      } else {
      throw error;
    }
    });
  }
  apiCall(method, url, data) {
    return axios({
      method,
      url,
      data,
    }).catch((error) => {
      throw error;
    });
  }
  login(username,password) {
    return this.apiCall("post",url + "auth/",{username: username, password:password});
  }
  getProfileForms() {
    return this.authenticatedCall("get", url);
  }
  addProfileForm(fullname,email,bio,linkedin,github,portfolio,hired) {
    return this.authenticatedCall("post", url, {fullname,email,bio,linkedin,github,portfolio,hired});
  }
  removeProfileForm(id) {
    return this.authenticatedCall("delete", `${url}${id}`);
  }
  updateProfileForm(id,fullname,email,bio,linkedin,github,portfolio,hired) {
    return this.authenticatedCall("put", `${url}${id}`, { fullname,email,bio,linkedin,github,portfolio,hired});
  }
  queryResult(searchParams){
    return this.authenticatedCall("post", `${url}tda/search`, searchParams)
  }

}