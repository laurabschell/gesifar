import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import style from "./Materiales.module.scss"
import axios from 'axios'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from '../../functions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import moment from 'moment';
import moment from 'moment-timezone';


export const Materiales = () => { 

    const url = 'http://gesifar-api.test/materialesController.php';
    const [materiales, setMateriales] = useState([]);
    const [id, setId] = useState('');
    const [tipo, setTipo] = useState('');
    const [forma, setForma] = useState('');
    const [presentacion, setPresentacion] = useState('');
    //const [fecha_venc, setFecha_venc] = useState('');
    //const [fecha_venc, setFecha_venc] = useState(null);
    const [fecha_venc, setFecha_venc] = useState(new Date());

    const [operation, setOperation] = useState(1);
    const [title, setTitle] = useState('');

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const respuesta = await axios.get(url);
        setMateriales(respuesta.data);
    }
    const openModal = (op, id, tipo, forma, presentacion, fecha_venc) => {
       

        console.log('openmodal:',op);

        setId('');
        setTipo('');
        setForma('');
        setPresentacion('');
        setFecha_venc(null);
        setOperation(op);
        if (op === 1) {

            //let d = new Date();
            let d = new Date(new Date().toDateString());
            
            console.log('d.getMinutes()', d.getMinutes())
            console.log('d.getTimezoneOffset()', d.getTimezoneOffset())          
   
            console.log('adjusted d:',d)
            setFecha_venc(new Date());            
            console.log('**fecha_venc:', fecha_venc)
            console.log( JSON.stringify(fecha_venc) );
            
            setTitle('Registrar Material');
        }
        else if (op === 2) {


            console.log('tipo:', tipo)
            
            setTitle('Editar Datos');
            setId(id);
            setTipo(tipo);
            setForma(forma);
            setPresentacion(presentacion);
            
            console.log('**tipo:', tipo)


            let d = new Date(fecha_venc);
            //console.log('d.getMinutes()', d.getMinutes())
            //console.log('d.getTimezoneOffset()', d.getTimezoneOffset())


            d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
            //console.log('adjusted d:',d)           
            setFecha_venc(d);
            //console.log('** fecha_venc:', fecha_venc);

        }
        window.setTimeout(function () {
            document.getElementById('tipo').focus();
        }, 500);
    }
    const validar = () => {
        var parametros;
        var metodo;

        if (forma.trim() === '') {
            show_alerta('Escriba la Forma Farmaceutica', 'warning');
        }
        else if (presentacion.trim() === '') {
            show_alerta('Escriba la Presentacion', 'warning');
        }
        else {
            if (operation === 1) {
                let x = moment(fecha_venc).format('YYYY-MM-DD');
                console.log('----x:',x);
                
                parametros = { tipo: tipo, forma: forma.trim(), presentacion: presentacion.trim(), fecha_venc: x };
                metodo = 'POST';
            }
            else {
                
                let d = new Date(fecha_venc);   
                d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
                //
                
                console.log('adjusted d:', d)           
                setFecha_venc(d);
                let x = moment(fecha_venc).format('YYYY-MM-DD');
                console.log('----x:',x);

                parametros = { id: id, tipo: tipo.trim(), forma: forma.trim(), presentacion: presentacion.trim(), fecha_venc: x };
                metodo = 'PUT';
            }
            enviarSolicitud(metodo, parametros);
        }
    }
    const enviarSolicitud = async (metodo, parametros) => {
        
        console.log(parametros)
        await axios({ method: metodo, url: url, data: parametros }).then(function (respuesta) {
            
            var status = respuesta.data[0];
            var msj = respuesta.data[1];
            show_alerta(msj, tipo);
            if (status === 'success') {
                document.getElementById('btnCerrar').click();
                getProducts();
            }
        })
            .catch(function (error) {
                show_alerta('Error en la solicitud', 'error');
                console.log(error);
            });
    }

    const deleteProduct = (id, name) => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: '¿Seguro de eliminar el material ?',
            icon: 'question', text: 'No se podrá dar marcha atrás',
            showCancelButton: true, confirmButtonText: 'Si, eliminar', cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setId(id);
                enviarSolicitud('DELETE', { id: id });
            }
            else {
                show_alerta('Los datos del Material NO fueron eliminados', 'info');
            }
        });
    }


    return (
        <Layout>
            <div className={style.title}>Gestion de Materiales</div>
            <div className='container-fluid'>
                <div className='row mt-4'>
                    <div className='col-md-4 offset-md-9'>
                        <div className='d-grid mx-auto'>
                            <button onClick={() => openModal(1)} className='btn btn-lg btn-dark' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                <i className='fa-solid fa-circle-plus'></i> Añadir nuevo Material
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12 col-lg-12 offset-0'>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        {/* <th>id</th> */}
                                        <th>TIPO</th>
                                        <th>FORMA</th>
                                        <th>PRESENTACION</th>
                                        <th>FECHA VENC</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className='table-group-divider'>
                                    {materiales.map((material, i) => (
                                        <tr key={material.id}>
                                            {/* <td>{(i + 1)}</td> */}
                                            <td>{material.tipo}</td>
                                            <td>{material.forma}</td>
                                            <td>{material.presentacion}</td>
                                            <td>{material.fecha_venc}</td>
                                            <td>
                                            <div className="btn-group" role="group">

                                            <button onClick={() => openModal(2,
                                                material.id,
                                                material.tipo,
                                                material.forma,
                                                material.presentacion,
                                                material.fecha_venc)}
                                                className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                                        <i className='fa-solid fa-edit'></i> Editar
                                                    </button>
                                                    <button onClick={() => deleteProduct(material.id)} className='btn btn-danger'>
                                                    <i className='fa-solid fa-trash'></i>
                                                </button>
                                            </div>
                                            </td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div id='modalProducts' className='modal fade' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <label className='h5'>{title}</label>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-body'>
                            <input type='hidden' id='id'></input>
                            <div className='input-group mb-3'>

                                <span className='input-group-text'>Tipo</span>                      

                                <select id='tipo' value={tipo}
                                    onChange={(e) =>{
                                        
                                        console.log('e:',e)
                                        console.log('e.target.value:', e.target.value)
                                        setTipo(e.target.value)
                                        console.log('tipo:', tipo)
                                        //setTipo('coco')
                                        //console.log('tipo:', tipo)
                                        
                                    
                                    }
                                    }>
                                    <option value="-">Seleccione</option>
                                    <option value="Medicamento">Medicamento</option>
                                    <option value="Insumo">Insumo</option>
                                </select>
                            </div>
                       
                            <div className='input-group mb-3'>
                                <span className='input-group-text'>Forma</span>
                                <input type='text' id='forma' className='form-control' placeholder='Forma' value={forma}
                                    onChange={(e) => setForma(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'>Presentacion</span>
                                <input type='text' id='presentacion' className='form-control' placeholder='Presentacion' value={presentacion}
                                    onChange={(e) => setPresentacion(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'>Fecha Venc</span>
                                <DatePicker                                                   
                                    dateFormat="yyyy-MM-dd"
                                    selected={fecha_venc}                                  
                                    onChange={(date) => setFecha_venc(date)}                                  
                                />
                            </div>

                            <div className='d-grid col-6 mx-auto'>
                                <button onClick={() => validar()} className='btn btn-success'>
                                    <i className='fa-solid fa-floppy-disk'></i> Guardar
                                </button>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' id='btnCerrar' className='btn btn-secondary' data-bs-dismiss='modal'>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

//export default Profesionales