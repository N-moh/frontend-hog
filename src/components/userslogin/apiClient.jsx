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
  signup(username,email,password) {
    return this.apiCall("post",url + "signup/",{username:username,email:email,password:password});
  }
  // Employer functions

  // Gets NEETs for Employers
  getEmployerForms() {
    return this.authenticatedCall("get", `${url}employer`)
  }

  // Participant functions

  // Add for Participants
  addParticipantForm(username,firstname,lastname,email,bio,linkedin,github,portfolio,picture,hired,course,skills,date,cv) { 
    return this.authenticatedCall("post", `${url}participant`, {username,firstname,lastname,email,bio,linkedin,github,portfolio,picture,hired,course,skills,date,cv});
  }
  // Update for participants
  updateParticipantForm(id,username,firstname,lastname,email,bio,linkedin,github,portfolio,picture,hired,course,skills,date,cv) {
    return this.authenticatedCall("put", `${url}participant/${id}`, {username,firstname,lastname,email,bio,linkedin,github,portfolio,picture,hired,course,skills,date,cv});
  }
  // Fetches card for participants
  getProfileForm(id) {
    return this.authenticatedCall("get", `${url}profile/${id}`);
  }
  // Uploads image for participants
  postImage(name,file){
    const formData = new FormData();
    formData.append('name',name);
    formData.append('myFile',file);
    return this.authenticatedCall("post",`${url}imageUpload`,formData)
  }
  // Uploads cv for participants
  postCv(name,file){
    const formData = new FormData();
    formData.append('name',name);
    formData.append('cvFile',file);
    return this.authenticatedCall("post",`${url}cvUpload`,formData)
  }

  // Admin functions

  // Fetches all participants
  getProfileForms() {
    return this.authenticatedCall("get", url);
  }
  // Add for Admins
  addProfileForm(firstname,lastname,email,bio,linkedin,github,portfolio,admincomments,hired,course,skills,date) {
    return this.authenticatedCall("post", url, {firstname,lastname,email,bio,linkedin,github,portfolio,admincomments,hired,course,skills,date});
  }
  // Remove posts for Admins
  removeProfileForm(id) {
    return this.authenticatedCall("delete", `${url}${id}`);
  }
  // Update for Admins
  updateProfileForm(id,firstname,lastname,email,bio,linkedin,github,portfolio,admincomments,hired,course,skills,date) {
    return this.authenticatedCall("put", `${url}${id}`, { firstname,lastname,email,bio,linkedin,github,portfolio,admincomments,hired,course,skills,date});
  }

  //Find functionality
  queryResult(searchParams){
    return this.authenticatedCall("post", `${url}tda/search`, searchParams)
  }
}