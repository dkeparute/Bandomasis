function Scooter({ scooter, deleteScooter, modal }) {

    const showEdit = () => {
        modal(scooter);
    }

    // Datos generatorius
    const d = new Date(scooter.last_use_time);
    let month = "00" + (d.getMonth() + 1);
    month = month.substring(month.length - 2);
    let day = "00" + d.getDate();
    day = day.substring(day.length - 2);
    scooter.last_use_time = `${d.getFullYear()}-${month}-${day}`;

    const busy = (b) => {
        if (b === 1) {
            return 'užimta';
        } else {
            return 'laisva';
        }
    }


    return (
        <>
            <table className="table" style={{textAlign:'center', backgroundColor:'lightblue', fontWeight: 'bold'}}>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Registracijos numeris:</th>
                        <th scope="col">Užimtumas (laisva/užimta):</th>
                        <th scope="col">Paskutinį kartą naudota:</th>
                        <th scope="col">Nuvažiuota iš viso: </th>
                        <th scope="col">Nuvažiuota per dieną:</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{scooter.registration_code}</td>
                        <td>{busy(scooter.is_busy)} </td>
                        <td>{scooter.last_use_time} </td>
                        <td>{scooter.total_ride_kilometres} km</td>
                        <td>{scooter.one_day_ride}km</td>

                        <td><button type="button" className="btn btn-danger" style={{ width: '90px', borderRadius: "10px" }} onClick={() => deleteScooter(scooter.id)}>
                            Ištrinti
                        </button></td>
                        <td><button type="button" className="btn btn-warning" style={{ width: '90px', borderRadius: "10px", color: "blue" }} onClick={showEdit}>
                            Redaguoti
                        </button></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
export default Scooter;