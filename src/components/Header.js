import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import search from "../images/search.svg";
import {Link} from 'react-router-dom';


const Header= () => {
    return (
        <header >
            <div className='container-fluid mt-5'>
            <div className='row align-items-center justify-content-between'>
                <div className='col-md-3 col-sm-6 col-1 '>
                   
                    <h1 className='fs-sm-1 fs-1'>  MELOBIT</h1>
                </div>
                <div className='col-md-2 col-sm-2 col-2 row align-items-center justify-content-between'>
                    <nav>
                        <ul className='justify-content-between'>
                            <li className=' row justify-content-between'>
                              < Link to="/" className='text-decoration-none'><h1 className='justify-content-between'> HOME</h1> </Link>
                            </li>
                     
                        </ul>

                    </nav>
                </div>
                <div className='col-md-2 col-sm-6 col-6 text-end order-md-3 order-sm-4 order-4' dir='rtl'>
                  <Link to="/search"className='text-decoration-none '><div id='searchDiv' className='d-flex align-items-center justify-content-between' ><img src={search} alt="search icon" /> <span dir='ltr'></span> </div> </Link>  
                  </div>
               


            </div>
            </div>

        </header>
    );
}

export default Header;