import { useState } from "react";
import CommonBanner from "../shared/CommonBanner";
import { useEffect } from "react";
import AllJobs from "../components/AppliedJobs/AllJobs";


export default function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    fetch("/data/jobs.json")
      .then(response => response.json())
      .then(appliedJobsData => setAppliedJobs(appliedJobsData))
  }, [])
  return (
    <>
      <CommonBanner>Applied Jobs</CommonBanner>
      <AllJobs appliedJobs={appliedJobs}/>
    </>
  )
}
