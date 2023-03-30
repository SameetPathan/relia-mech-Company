import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import Loader from './Loader';

function Home() {

  return (
    <>
    <Loader></Loader>
    <div className='container'>
    <div class="card text-center mt-5">
        <div class="card-header">
          Relia Mech 
        </div>
        <div class="card-body">
          <h5 class="card-title">Download the .exe file here</h5>
          <a href="https://drive.google.com/uc?export=download&id=[FILE_ID]" class="btn btn-primary">Download</a>
        </div>
        <div class="card-footer text-muted">
         Updated on 30/03/2023        </div>
      </div>
      </div>
    </>
  );
}

export default Home
