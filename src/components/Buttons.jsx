import satData from "./satData";
import './styling.css';
//Pass the props created from the App() function
const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    //Update the first & second buttons
    <div className = "flex-container">
      {displaySats.map((sat, id) => {
        return(
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit 
          </button>
        );
      })}
        <button onClick={() => setSat(satData)}>
          All Orbits
        </button>
    </div>
  );
};


export default Buttons;