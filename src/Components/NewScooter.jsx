import { useState } from "react";


function NewScooter({ create }) {


    const [inputs, setInputs] = useState({
        registration_code: '',
        is_busy: false,
        last_use_time: '',
        total_ride_kilometres: 0,
        one_day_ride: 0
    })


    const control = (e, what) => {
        const inputsCopy = { ...inputs };
        inputsCopy[what] = e.target.value;
        if (what === 'is_busy') {
            inputsCopy[what] = !inputs.is_busy;
        }
        setInputs(inputsCopy);
    }


    const insertNewScooter = () => {
        create(inputs);
        setInputs({
            registration_code: '',
            is_busy: false,
            last_use_time: '',
            total_ride_kilometres: 0,
            one_day_ride: 0
        })
    }



    return (
        <form>
            <h4 style={{ marginLeft: "120px", marginTop: '40px', fontSize:'50px'}}>Įvesti naują paspirtuką</h4>
            <div className="col-md-3" style={{ marginLeft: "100px" }}>
                <label style={{color: 'red'}}>Paspirtuko registracijos numeris</label>
                <input className="form-control" type='text' maxLength='8' onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }} onChange={(e) => control(e, "registration_code")} value={inputs.registration_code} placeholder="Paspirtuko registracijos numeris" required />
            </div>
            <div className="col-md-3" style={{ marginLeft: "100px" }}>
                <label style={{color: 'red'}}>Paskutinį kartą naudota:</label>
                <input className="form-control" type="date" onChange={(e) => control(e, "last_use_time")} value={inputs.last_use_time} placeholder="Pakutinis naudojimo laikas" required />
            </div>
            <div className="col-md-3" style={{ marginLeft: "100px" }}>
                <label style={{color: 'red'}}>Pravažiuoti kilometrai:</label>
                <input className="form-control" type="number" onChange={(e) => control(e, "total_ride_kilometres")} value={inputs.total_ride_kilometres} placeholder="Pravažiuoti kilometrai" required />
            </div>
            <div className="col-md-3" style={{ marginLeft: "100px" }}>
                <label style={{color: 'red'}}>Nuvažiuoti per dieną kilometrai:</label>
                <input className="form-control" readOnly type="number" onChange={(e) => control(e, "one_day_ride")} value={inputs.total_ride_kilometres} placeholder="Pravažiuoti kilometrai" required />
            </div>
            <button onClick={insertNewScooter} type="submit" className="btn btn-warning" style={{ marginLeft: "120px", width: "150px", marginTop: '30px', marginBottom: '30px', color:'blue'}}>Įvesti naują paspirtuką</button>
        </form>
    );
}
export default NewScooter;