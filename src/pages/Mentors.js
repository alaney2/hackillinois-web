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
    <div>
      <h1>Mentors</h1>
      <div>
        {mentors.map(mentor => 
          <Mentor 
            description={mentor.description}
            firstName={mentor.firstName}
            lastName={mentor.lastName}
            profile={mentor.profile}
          />
        )}
      </div>
    </div>
  )
}

export default Mentors;
