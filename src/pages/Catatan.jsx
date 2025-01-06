import React from "react";
import { Link } from "react-router-dom";


function Catatan() {
    return (
      <div>
        <p className="text-center">Ini adalah halaman <Link to="/catatan/detail">Catatan</Link></p>
        <p className="text-center"><Link className="text-center" to="/catatan/buat">Buat catatan</Link></p>
      </div>
    );
  }
  
  export default Catatan;