import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp';
import { Navigate, Route, Routes } from 'react-router-dom';
import SelectSkill from './JobApplicant/SelectSkill';
import ApplicantDashboard from './JobApplicant/ApplicantDashboard';
import ApplicantLogin from './JobApplicant/ApplicantLogin';
import EmployerDashboard from './Employer/EmployerDashboard';
import EmployerLogin from './Employer/EmployerLogin';
import PostJob from './Employer/PostJob';
import ApplyJob from './JobApplicant/ApplyJob';
import ManageJobs from './Employer/ManageJobs';
import EditPostedJob from './Employer/EditPostedJob';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/home' element={<Navigate to={"/"} />} />
        <Route path='/user/skills' element={<SelectSkill />} />
        <Route path='/applicantLogin' element={<ApplicantLogin />} />
        <Route path='/employerLogin' element={<EmployerLogin />} />
        <Route path='/applicantDashboard' element={<ApplicantDashboard />} />
        <Route path='/employerDashboard' element={<EmployerDashboard />} />
        <Route path='/postJob' element={<PostJob />} />
        <Route path='/applyJob' element={<ApplyJob />} />
        

        <Route path='/manage_jobs'>
          <Route index element={<ManageJobs />}></Route>
          <Route path='edit_job' element={<EditPostedJob />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
