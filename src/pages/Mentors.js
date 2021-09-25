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
    <div className="py-40 mx-64">
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
