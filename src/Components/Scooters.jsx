import Scooter from "./Scooter";


function Scooters({scooters, deleteScooter, modal}) {
    return (
        <div>
            {scooters.map(scooter => <Scooter key={scooter.id} scooter={scooter} modal={modal} deleteScooter={deleteScooter} ></Scooter>)}
        </div>
    );

}
export default Scooters;