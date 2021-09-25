function Mentor({ description, firstName, lastName, profile }) {
  return (
    <div className="flex px-12 pt-12">
      <img src={profile} alt={`${firstName} ${lastName}`} className="w-36 rounded-full h-36 mr-4"/>
      <div className="flex-col">
        <h2 className="font-medium text-lg">{`${firstName} ${lastName}`}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Mentor;
