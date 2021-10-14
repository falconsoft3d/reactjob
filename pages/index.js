import JobList from '../components/JobList';
import Searcher from '../components/Searcher';
import JobLayout from '../layouts/JobLayout';
import Link from 'next/link';


export default function Home() {
  return (
    <JobLayout>
        <Searcher />
        <div className="container">
          <div className="row">
              <div className="col-4" >
                <div className="index-search rounded">
                  <div>
                    <h4>Ordenar ofertas por:</h4>
                    <div class="custom-control custom-radio">
                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" checked/>
                        <label class="custom-control-label" for="customRadio1" >Fecha</label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                        <label class="custom-control-label" for="customRadio2"> Nombre</label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                        <label class="custom-control-label" for="customRadio2"> Salario</label>
                      </div>
                  </div>
                 </div>     
              </div>
              <div className="col-8">
                  <div className="index-result rounded">
                      <JobList/>
                  </div>
              </div>
          </div>
        </div>
    </JobLayout>
  )
}
