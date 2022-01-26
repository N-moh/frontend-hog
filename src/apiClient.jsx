import axios from "axios";
const url = "http://localhost:3001/";




export class ApiClient {
  constructor(tokenProvider,newRole,newUsername,newPost,logoutHandler){
    this.role=newRole;
    this.post=newPost;
    this.username=newUsername;
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
  getProfileForm() {
    return this.authenticatedCall("get", url);
  }
  addParticipantForm(username,firstname,lastname,email,bio,linkedin,github,portfolio,picture,hired,course,date) {
    
    return this.authenticatedCall("post", `${url}participant`, {username,firstname,lastname,email,bio,linkedin,github,portfolio,picture,hired,course,date});
  }
  updateParticipantForm(id,username,firstname,lastname,email,bio,linkedin,github,portfolio,picture,hired,course,date) {
    return this.authenticatedCall("put", `${url}participant/${id}`, {username,firstname,lastname,email,bio,linkedin,github,portfolio,picture,hired,course,date});
  }
  addProfileForm(firstname,lastname,email,bio,linkedin,github,portfolio,admincomments,picture,hired,course,date) {
    
    return this.authenticatedCall("post", url, {firstname,lastname,email,bio,linkedin,github,portfolio,admincomments,picture,hired,course,date});
  }
  postImage(name,file){
    const formData = new FormData();
    formData.append('name',name);
    formData.append('myFile',file);
    return this.authenticatedCall("post",`${url}user/new`,formData)
  }
  removeProfileForm(id) {
    return this.authenticatedCall("delete", `${url}${id}`);
  }
  updateProfileForm(id,firstname,lastname,email,bio,linkedin,github,portfolio,admincomments,picture,hired,course,date) {
    return this.authenticatedCall("put", `${url}${id}`, { firstname,lastname,email,bio,linkedin,github,portfolio,admincomments, picture,hired,course,date});
  }
  queryResult(searchParams){
    return this.authenticatedCall("post", `${url}tda/search`, searchParams)
  }
}