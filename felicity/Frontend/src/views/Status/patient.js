import React from "react"
import Header from '../../Components/Header/Header';
import {Mostouter,Cat,List,Directory,User} from './layout';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

import DoctorList from "../../Components/DoctorList";


function StatusPatient() {
    return (

      <Mostouter>

      <Cat>
        <Header />
      </Cat>
      <Directory>
        <Path />
      </Directory>

      <User>
          <Login />
      </User>

      <List>
        <DoctorList />
      </List>

      </Mostouter>


    );
  }

export default StatusPatient;