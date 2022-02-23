import React from 'react'
import "./search.css"

function Search({searchField,handleChange,submitSearch}) {
  return (
    <div>
         <form onSubmit={submitSearch}>
    <div className="inline">
        <label>Log Id</label><br />
        <input type="text" value={searchField.logId} name='logId' className="form-control" onChange={handleChange} />
    </div>
    <div className="inline">
        <label>Action Type</label><br />
        <select className="form-select" name="actionType" onChange={handleChange} aria-label="Default select example">
        <option disabled selected value> -- select an option -- </option>
        <option value="DARI_REFRESH_TOKEN">DARI_REFRESH_TOKEN</option>
        <option value="DARI_APP_LOGIN">DARI_APP_LOGIN</option>
        <option value="INITIATE_APPLICATION">INITIATE_APPLICATION</option>
        <option value="SUBMIT_APPLICATION">SUBMIT_APPLICATION</option>
        <option value="ADD_EMPLOYEE">ADD_EMPLOYEE</option>
        </select>
    </div>
    <div className="inline">
        <label>Application Type</label><br />
        <select className="form-select" name="applicationType" onChange={handleChange} aria-label="Default select example">
        <option disabled selected value> -- select an option -- </option>
        <option value="ADD_COMPANY_EMPLOYEE">ADD_COMPANY_EMPLOYEE</option>
        <option value="LEASE_CLOSURE">LEASE_CLOSURE</option>
        <option value="CERT_PROP_OWNERSHIP">CERT_PROP_OWNERSHIP</option>
        <option value="ADD_COMPANY">ADD_COMPANY</option>
        <option value="ADD_POA">ADD_POA</option>
        <option value="CERT_TITLE_DEED_PLOT">CERT_TITLE_DEED_PLOT</option>
        <option value="LEASE_REGISTRATION">LEASE_REGISTRATION</option>
        </select>
    </div>
    <div className="inline">
        <label>From Date</label><br />
        <input type="date" value={searchField.fromDate} name='fromDate' className="form-control" onChange={handleChange}/>
    </div>
    <div className="inline">
        <label>To Date</label><br />
        <input type="date" name='toDate' value={searchField.toDate} className="form-control" onChange={handleChange}/>
    </div>
    <div className="inline">
        <label>Application ID</label><br />
        <input type="text" name='applicationId' value={searchField.applicationId} className="form-control" onChange={handleChange} />
    </div>
    <div className="inline">
        <button className='btn btn-primary' type='submit'>Search Logger</button>
    </div>
    </form>
    </div>
  )
}

export default Search