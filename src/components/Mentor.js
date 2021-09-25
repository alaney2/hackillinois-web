function Mentor({ description, firstName, lastName, profile }) {
  return (
    <div className="flex-col md:flex px-12 pt-12">
      <img src={profile} alt={`${firstName} ${lastName}`} className="w-36 rounded-full h-36 mr-6"/>
      <div className="flex-col">
        <h2 className="font-medium text-lg mb-2">{`${firstName} ${lastName}`}</h2>
        <p className="font-light text-gray-100">{description}</p>
      </div>
    </div>
  )
}

export default Mentor;
