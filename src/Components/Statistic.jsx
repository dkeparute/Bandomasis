
function Statistic({ scootersKm, scootersCount, sort }) {
    return (
        <>
            <div className="statistic row col-lg-5 col-md-7 col-sm-10" >
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body" style={{ height: "200px", backgroundColor: 'lightblue'}}>
                            <h5 className="card-title">Statistika</h5>
                            <p className="card-text"><h6>Bendras paspirtukų skaičius</h6> {scootersCount}</p>
                            <p className="card-text"><h6>Bendras km</h6> {scootersKm}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body" style={{ height: "200px", backgroundColor: 'lightblue'}}>
                            <h5 className="card-title" style={{ marginBottom: "25px" }}>Rūšiuoti pagal:</h5>
                            <button type="button" class="btn btn-secondary m-1" onClick={() => sort("total_ride_kilometres")}>
                                Pagal pagal nuvažiuotų kilometrų kiekį
                            </button>
                            <button type="button" class="btn btn-secondary m-1" onClick={() => sort("last_use_time")}>
                                Pagal paskutinio naudojimo
                                datą
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statistic