import './App.css';
import React, {useState} from 'react';

function App() {

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [jobPosition, setJobPosition] = useState('');
  const [team, setTeam] = useState('');
  const [designation, setDesignation] = useState('');
  const [billableHours, setBillableHours] = useState('');
  const [isBillable, setIsBillable] = useState(false);

  return (
    <div className="Container">
      <h1>Employee Form</h1>
      <div className="form">
        <form>
          <table>
            <tr colspan='3'>
          <div className="row1">
            <td>
          <label>First Name</label><br></br>
          <input type="text" placeholder="Enter your First Name" value={firstName} 
          onChange={(e)=>setFirstName(e.targetvalue)} required></input></td>
          <td>
          <label>Middle Name</label><br></br>
          <input type="text" placeholder="Enter your Middle Name" required></input></td>
          <td>
          <label>Last Name</label><br></br>
          <input type="text" placeholder="Enter your Last Name" required></input></td>
          </div>
          </tr>


          <tr>
          <div className="row2">
            <td>
          <label>Birth Date</label><br></br>
          <input type="date" placeholder="Enter your DOB" required></input></td>
          <td>
          <label>Email</label><br></br>
          <input type="email" placeholder="Enter your email" required></input></td>
          <td>
          <label>Phone Number</label><br></br>
          <input type="text" placeholder="Enter your phone number" required></input></td>
          </div>
          </tr>


          <tr>
          <div className="row3">
            <td>
          <label>Select Gender</label><br></br>
          <select placeholder="Choose Select Gender">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          </td>
          <td>
          <label>Start Time</label><br></br>
          <input type="Time" placeholder="--:--" required></input></td>
          <td>
          <label>End TIme</label><br></br>
          <input type="Time" placeholder="--:--" required></input></td>
          </div>
          </tr>


          <tr>
          <div className="row4">
            <td>
          <label>Job Position</label><br></br>
          <input type="text" placeholder="Enter the job position" required></input></td>
          <td>
          <label>Select Teams</label><br></br>
          <select placeholder="Select...">
            <option>Solo</option>
            <option>Duo</option>
            <option>Squad</option>
          </select>          
          </td>
          <td>
          <label>Select Designation</label><br></br>
          <select placeholder="Select...">
            <option>IGL</option>
            <option>Assaulter</option>
            <option>Supporter</option>
          </select>
          </td>
          </div>
          </tr>


          <tr>
            <div className='row5'>
              <td>
                <label>Billable Hours</label><br></br>
                <input type="text" placeholder="Enter the billable hours"></input>
              </td>
              <td>
                <label>Is Billable</label>
                <input className="checkbox" type="checkbox"></input>
              </td>
              </div>
          </tr>

          <button>SUBMIT</button>

          
          </table>

        </form>

      </div>
    </div>
  );
}

export default App;
