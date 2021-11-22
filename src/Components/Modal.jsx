import { useState } from "react";
import { useEffect } from "react";

function Modal({ showModal, hide, modalElement, edit, deleteScooter }) {


    const [inputs, setInputs] = useState({
        registration_code: '',
        is_busy: false,
        last_use_time: '',
        total_ride_kilometres: '',
        one_day_ride: ''
    })


    const control = (e, what) => {
        const inputsCopy = { ...inputs };
        inputsCopy[what] = e.target.value;
        if (what === 'is_busy') {
            inputsCopy[what] = !inputs.is_busy;
        }
        setInputs(inputsCopy);
    }


    useEffect(() => {
        setInputs({
            registration_code: modalElement.registration_code,
            is_busy: modalElement.is_busy,
            last_use_time: modalElement.last_use_time,
            total_ride_kilometres: modalElement.total_ride_kilometres,
            one_day_ride: modalElement.one_day_ride
        })
    }, [modalElement])

    const handleEdit = () => {
        edit({
            registration_code: inputs.registration_code,
            is_busy: inputs.is_busy,
            last_use_time: inputs.last_use_time,
            total_ride_kilometres: inputs.total_ride_kilometres,
            one_day_ride: inputs.one_day_ride
        }, modalElement.id)
    }

    return (
        <>

            <table className="table" style={{
                display: showModal ? 'block' : 'none', textAlign: 'center', backgroundColor: 'green', top: window.scrollY + 300 + 'px', position: "absolute"
            }}>
                <thead>
                    <tr>
                        <th scope="col" >Registracijos numeris:</th>
                        <th scope="col">Užimtumas (laisva/užimta)</th>
                        <th scope="col">Paskutinį kartą naudota::</th>
                        <th scope="col">Įvesti naują naudojimo datą:</th>
                        <th scope="col">Nuvažiuota iš viso: </th>
                        <th scope="col">Nuvažiuota per dieną:</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input className="form-control" readOnly type='text' onChange={(e) => control(e, "registration_code")} value={inputs.registration_code} style={{ width: '200px' }} />
                        </td>
                        <td>
                            <input className="form-control" type='checkbox' onChange={(e) => control(e, "is_busy")} value={inputs.is_busy} checked={inputs.is_busy} />
                        </td>
                        <td><input className="form-control" readOnly type="date" onChange={(e) => control(e, "last_use_time")} value={inputs.last_use_time} style={{ width: '200px' }} /> </td>
                        <td>
                            <input className="form-control" type="date" onChange={(e) => control(e, "last_use_time")} value={inputs.last_use_time} style={{ width: '200px' }} />
                        </td>
                        <td> <input className="form-control" readOnly type="number" onChange={(e) => control(e, "total_ride_kilometres")} value={inputs.total_ride_kilometres} style={{ width: '200px' }} /></td>
                        <td>  <input className="form-control" type="number" onChange={(e) => control(e, "one_day_ride")} value={inputs.one_day_ride} style={{ width: '200px' }} /></td>
                        <td><button type="button" className="btn btn-warning" style={{ width: '90px', borderRadius: "10px", color: "blue" }} onClick={handleEdit}>
                            Išsaugoti
                        </button></td>
                        <td><button type="button" className="btn btn-danger" style={{ width: '90px', borderRadius: "10px", color: "white" }} onClick={() => deleteScooter(modalElement.id)}>
                            Ištrinti
                        </button></td>
                        <td><button type="button" className="btn btn-warning" style={{ width: '90px', borderRadius: "10px", color: 'blue' }} onClick={hide}>
                            Grįžti
                        </button></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
export default Modal;