import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../services/auth-thunks";
function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const [ profile, setProfile ] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const save = async () => { await dispatch(updateUserThunk(profile)); };
  const save = async () => {
    const newProfile = { ...profile };
    await dispatch(updateUserThunk(newProfile));
  };

  useEffect(() => {
    const loadProfile = async () => {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        setProfile(JSON.parse(storedUser));
      } else {
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
      }
    };
    loadProfile();
  }, []);

  // useEffect( () => {
  //   const loadProfile = async () => {
  //     const { payload } = await dispatch(profileThunk());
  //     setProfile(payload);
  //   };
  //   loadProfile();
  // }, []);
  // if (profile === null) {
  //   return <div>Loading...</div>;
  // }
  return (
      <div>
        <h1>Profile Screen</h1>
        {Object.keys(profile).length > 0 && ( // Check if profile has data before rendering
            <div>
              <div>
                <label>First Name</label>
                <input type="text" value={profile.firstName}
                       onChange={(event) => {
                         const newProfile = {
                           ...profile, firstName: event.target.value,
                         };
                         setProfile(newProfile);
                       }}/>
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" value={profile.lastName}
                       onChange={(event) => {
                         const newProfile = {
                           ...profile, lastName: event.target.value,
                         };
                         setProfile(newProfile);
                       }}/>
              </div></div>
        )}
        <button
            onClick={() => {
              dispatch(logoutThunk());
              navigate("/login");
            }}>                   Logout</button>
        <button onClick={save}>Save  </button>
      </div>
  );
}
export default ProfileScreen;