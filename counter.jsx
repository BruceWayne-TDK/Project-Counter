import { useState } from "react";

function AllInOne() { 

          const [cars,setCars] = useState([]);
          const [carName, setCarName] = useState("");
           const [carModel, setCarModel] = useState("");
            const [carYear, setCarYear] = useState(new Date().getFullYear());

     function handleAddCar(){
               const newCar = {year: carYear , model: carModel , name: carName};
               setCars(c => [...c , newCar]);

          setCarModel("");
          setCarName("");
          setCarYear(new Date().getFullYear());
          

           }

     function handleRemoveCar(index){ 
          setCars(c => c.filter((_,i) => i !== index));
     }

     function handleYearChange(event){
          setCarYear(event.target.value);
     }

     function handleNameChange(event){
          setCarName(event.target.value);
     }

     function handleModelChange(event){
          setCarModel(event.target.value);
     }

     return(<>   <ul> 
               {cars.map((car,index) => 
            <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.model} {car.name}</li> )}
                </ul>
     <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Model"/> 
     <input type="text" value={carName} onChange={handleNameChange} placeholder="Enter Name"/> 
     <input type="number" value={carYear} onChange={handleYearChange} placeholder="Enter Year"/>
     <button onClick={handleAddCar}> ADD </button> 
                 
               </> )
                 
}
export default AllInOne