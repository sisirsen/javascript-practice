
function Props({username , role}) {

  
  return (
    
    <div className="bg-white m-2 shadow-lg rounded-xl p-6 w-72 text-center">
      <h2 className="text-xl font-bold mb-2">{username}</h2>
      <p className="text-gray-500 mb-4">{role}</p>

      <div className="text-sm text-gray-600 space-y-1">
        <p>📍 Kolkata</p>
        <p>💻 React Learner</p>
        <p>📈 Goal: 5 LPA Job</p>
      </div>

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        Visit Me
      </button>
    </div>
  );
}

export default Props