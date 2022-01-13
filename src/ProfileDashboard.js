import React, { useState, useEffect } from "react";
import Add from "./Add";
import Button from 'react-bootstrap/Button';
import Profilecard from './Profilecard';


//mport Table from 'react-bootstrap/Table';
function ProfileDashboard(props) {
  const [profileForms, cProfileForms] = useState([]);
  const [current, cCurrent] = useState(undefined);

  const refreshList = () => {
    props.client.getProfileForms().then((response) => cProfileForms(response.data));
  };
  const removeProfileForm = (id) => {
    props.client.removeProfileForm(id).then(() => refreshList());
  };
  const updateProfileForm= (id) => {
    let e=profileForms.filter((profileForm)=>{return profileForm._id == id});
   if(e.length>0){
    cCurrent(e[0])
   }
  };

  useEffect(() => {
    refreshList();
  }, []);
  
  function buildcards() {
    return profileForms.map((current) => {
      return (
        <>

          <Profilecard id={current._id} fullname={current.fullname} email={current.email} bio={current.bio} removeProfileForm={removeProfileForm} updateProfileForm={updateProfileForm}></Profilecard>

        </>


      );
    });
  }
    return (
      <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
    <br/>
      <h3>Dashboard
      </h3>
      </div>
      <div style={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
      <Button  onClick={props.logout}>
          {" "}
          Logout{" "}
        </Button>
      </div>
        Profiles
        <br />
        <div class="row row-cols-1 row-cols-md-3 g-4">
       {buildcards()}
        </div>
      

      <Add
        client={props.client}
        refreshList={() => {
          refreshList();
          cCurrent(undefined);
        }}
        currentProfileForm={current}
        logout={props.logout}
      />
     {/*<Showevents/>*/}
    </>
  );
  
}
export default ProfileDashboard;