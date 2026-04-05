import { useState } from "react";
import "./App.css";

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  function addJob() {
    if (title === "" || company === "" || location === "") {
      alert("Please fill all fields");
      return;
    }
    setJobs([...jobs, { id: Date.now(), title, company, location, applied: false }]);
    setTitle("");
    setCompany("");
    setLocation("");
  }

  function deleteJob(id) {
    setJobs(jobs.filter(job => job.id !== id));
  }

  function applyJob(id) {
    setJobs(jobs.map(job =>
      job.id === id ? { ...job, applied: true } : job
    ));
  }

  return (
    <div>
      <h1>JobFinder</h1>

      <input placeholder="Job Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} />
      <input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
      <button onClick={addJob}>Add Job</button>

      <h2>Total Jobs: {jobs.length}</h2>

      {jobs.map(job => (
        <div key={job.id} className="job-card">
          <h3>{job.title}</h3>
          <p>{job.company} - {job.location}</p>
          <button className="apply-btn" onClick={() => applyJob(job.id)} disabled={job.applied}>
            {job.applied ? "Applied" : "Apply"}
          </button>
          <button className="delete-btn" onClick={() => deleteJob(job.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
