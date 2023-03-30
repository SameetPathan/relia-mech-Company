import React,{useState} from 'react';
import Loader from './Loader';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { register } from '../firebaseConfig';
import { getDatabase, ref, get } from "firebase/database";

function Navbarcomponent(props) {


  const [password, setpassword] = useState('');
  const [phone, setphone] = useState('');

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const logout=async()=>{
		try {
			props.setCurrentAccount(false);
      <Loader></Loader>
		  } catch (err) {
			console.log(err);
		  }
	  }

    const loginhandle= async()=>{

      const db = getDatabase();
      const userRef = ref(db, 'users/' + phone);
      const userSnapshot = await get(userRef);
      const userData = userSnapshot.val();

      if (!userData) {
        alert("Login Failed ")
      }
      else{
        if(userData.password===password){
          if(userData.useraccess===true){
            setShowModal1(false);
            props.setCurrentAccount(userData.useraccess);
          }else{
            setShowModal1(false);
            alert("Login Failed ! You Dont Have Access to the System")
          }
        }
        else{
          setShowModal1(false);
          alert("Login Failed ! Incorrect Details")
        }
      }  
  }

    function registerhandle(){
      if(phone && password ){
        register(phone,password);
        setShowModal2(false)
      }else{
        alert("Enter All Fields")
      }
    }

   
  return (
    <>
  <Loader></Loader>
  <div className='sticky-top'>

      <nav className="navbar navbar-expand-lg navbar-dark bgd">
      
        <div className="logo-holder logo-3 mr-3">
          <a>
            <h3>Relia Mech</h3>
            <p>A better Way to Visualize</p>
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse mr-3"
          id="navbarSupportedContent"
        >

      <ul className="navbar-nav mr-auto">

      </ul>

            {props.currentAccount ? <> 
        <Link class="nav-link btn btn-outline-info mr-2" to="/">Home </Link>
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={logout} >Logout</button></>
            :
            <div className="form-inline">
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => setShowModal1(true)} data-toggle="modal" data-target="#register
                "  >Request Access</button>
                <button className="btn btn-outline-success my-2 my-sm-0 ml-3" onClick={() => setShowModal2(true)} data-toggle="modal" data-target="#login"
                  >Login</button>
                  
            </div>}

        </div>
      </nav>
    </div>


<div className={`modal fade ${showModal2 ? 'show' : ''}`} id="register" tabindex="-1" aria-labelledby="exampleModalLabel"  aria-hidden={!showModal2}>
    <div className="modal-dialog">
      <div className="modal-content">

   

        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Register</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <form className="needs-validation" id="myForm" noValidate >


          
          <div className="form-group">
            <label for="phone" className="col-form-label">Phone Number :</label>
            <input type="text" value={phone} onChange={(e) => setphone(e.target.value)} className="form-control" id="phone" required />
          </div>
          
        
          <div className="form-group">
            <label for="password" className="col-form-label">Password :</label>
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)}  className="form-control" id="password" required />
          </div>
     
        </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" onClick={registerhandle} data-dismiss="modal" className="btn btn-primary">Request Access</button>
        </div>
      </div>
    </div>
  </div>

  <div className={`modal fade ${showModal1 ? 'show' : ''}`} id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!showModal1} >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Login</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <form className="needs-validation" id="myForm" noValidate>
    
          <div className="form-group">
            <label for="aadhar" className="col-form-label">Phone Number :</label>
            <input type="text" value={phone} onChange={(e) => setphone(e.target.value)}  className="form-control" id="phone"/>
          </div>
          <div className="form-group">
            <label for="password" className="col-form-label">Password :</label>
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)}  className="form-control" id="password"/>
          </div>
     
        </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" onClick={()=>loginhandle()} data-dismiss="modal" className="btn btn-primary">Login</button>
      
        </div>
      </div>
    </div>
  </div>


  
    </>
  );
}

export default Navbarcomponent