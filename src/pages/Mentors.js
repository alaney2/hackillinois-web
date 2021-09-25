import { useState, useEffect } from 'react';
import Mentor from '../components/Mentor';

function Mentors() {
  const [mentors, setMentors] = useState([]);

  const fetchMentors = async () => {
    const url = 'https://api.hackillinois.org/upload/blobstore/mentors/';
    const data = await fetch(url);
    const jsonData = await data.json();
    setMentors(jsonData.data);
    console.log(mentors)
  }

  useEffect(() => {
    fetchMentors();
  }, [])
  
  return (
    <div className="pt-40 mx-8 md:ml-48 lg:ml-64 md:mr-16 lg:mr-32 xl:mr-48 2xl:mr-64">
      <h1 className="text-2xl ml-8 mb-4">MENTORS</h1>
      <div className="Mentors bg-white bg-opacity-10 rounded-3xl overflow-scroll overflow-x-hidden">
        {mentors.map(mentor => 
          <Mentor 
            description={mentor.description}
            firstName={mentor.firstName}
            lastName={mentor.lastName}
            profile={mentor.profile}
            key={`${mentor.firstName} ${mentor.lastName}`}
          />
        )}
      </div>
    </div>
  )
}

export default Mentors;
