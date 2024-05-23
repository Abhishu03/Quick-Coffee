import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import './SuplimentryPageCSS/adminauth.css';

function AdminAuth() {
  const [Aid , setAid] = useState(''); 
  const [Apassword  , setApassword] = useState('');
  const navigate = useNavigate();

  const verifyAD = () => {
    if (Aid === '2020' && Apassword === '2020') {
      navigate('/AddproductsHolder');
    }
    else if (Aid === '1212' && Apassword === '1212') {
      navigate('/AddproductsHolder');
    }
    else{
      alert("Enter Correct ID & Password");
    }
  }

  return (
    <div>
      <form>
        <div className="verifyHead">Verify you are admin</div>
        <div className="admin-number-box">
          <label className="col-sm-lbn">Admin Number</label>
          <div className="col-sm-acc">
            <input type="text" className="form-control-an" onChange={(e) => setAid(e.target.value)}/>
          </div>
        </div>

        <div className="admin-password-box">
          <label className="col-sm-lbp">Admin Password</label>
          <div className="col-sm-acc">
            <input type="password" className="form-control" onChange={(e) => setApassword(e.target.value)}/>
          </div>
        </div>

        <div className="sucess-button-head">
          <label className="col-sm-lbb"></label>
          <div className="col-sm-acc-auth-button">
            <button type="button" onClick={verifyAD} className="btn-success-auth">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AdminAuth;
