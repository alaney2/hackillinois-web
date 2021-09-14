function Mentor({ description, firstName, lastName, profile }) {
  return (
    <div>
      <img src={profile} alt={`${firstName} ${lastName}`} className="w-8"/>
      <h2>{`${firstName} ${lastName}`}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Mentor;
