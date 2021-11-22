import axios from "axios";
import './App.css';
import { useEffect, useState } from "react";
import Scooters from "./Components/Scooters";
import NewScooter from "./Components/NewScooter";
import Modal from "./Components/Modal";
import Statistic from "./Components/Statistic";


function App() {

  // Testas
  useEffect(() => {
    axios.get('http://localhost:3003/test')
      .then(res => {
        console.log(res.data);
      })
  }, [])

  const [scooters, setScooters] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  // Read Node
  useEffect(() => {
    axios.get('http://localhost:3003/scooters')
      .then(res => {
        setScooters(res.data);
        console.log(res.data);
      })
  }, [lastUpdate])

  // Delete Node
  const deleteScooter = (id) => {
    // setShowModal(false);
    axios.delete('http://localhost:3003/scooters/' + id)
      .then(res => {
        setLastUpdate(Date.now())
        console.log(res.data);
      })
  }

  //Create Node:
  const create = (scooter) => {
    axios.post('http://localhost:3003/scooters', scooter)
      .then(res => {
        setLastUpdate(Date.now())
        console.log(res.data);
      })
  }

  // Modal:
  const [showModal, setShowModal] = useState(false);
  const [modalElement, setModalElement] = useState({
    registration_code: '',
    is_busy: false,
    last_use_time: '',
    total_ride_kilometres: '',
    one_day_ride: ''
  });

  const hide = () => {
    setShowModal(false);
  }

  const modal = (scooter) => {
    setShowModal(true);
    setModalElement(scooter);
  }

  // Edit/Update Node:
  const edit = (scooter, id) => {
    setShowModal(false);
    axios.put('http://localhost:3003/scooters/' + id, scooter)
      .then(res => {
        setLastUpdate(Date.now())
        console.log(res.data);
      })
  }

  // Scooters count
  const [scootersCount, setScootersCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3003/scooters/count')
      .then(res => {
        setScootersCount(res.data[0].scootersCount);
      })
  }, [lastUpdate])


  // Count km
  const [scootersKm, setScootersKm] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3003/scooters/km')
      .then(res => {
        setScootersKm(res.data[0].scootersKm);
      })
  }, [lastUpdate])

  // SORT

  const sort = by => {
    const scootersCopy = scooters.slice();
    if ('last_use_time' === by) {
      scootersCopy.sort((a, b) => {
        if (a.last_use_time > b.last_use_time) {
          return 1
        }
        if (a.last_use_time < b.last_use_time) {
          return -1
        }
        return 0
      })
      setScooters(scootersCopy)
    }
    if ('total_ride_kilometres' === by) {
      scootersCopy.sort((a, b) => a.total_ride_kilometres - b.total_ride_kilometres)
      setScooters(scootersCopy)
    }
  }

  return (
    <div>
      <h1 style={{ marginTop: "10px", marginBottom: "50px", fontSize: "100px", textAlign: "center", textTransform: 'capitalize' }}>Kolt paspirtukai</h1>
      <Statistic scootersKm={scootersKm} scootersCount={scootersCount} sort={sort}/>
      <Modal showModal={showModal} hide={hide} modalElement={modalElement} edit={edit} deleteScooter={deleteScooter} />
      <NewScooter create={create} />
      <Scooters scooters={scooters} modal={modal} deleteScooter={deleteScooter} />
    </div>
  );
}

export default App;
