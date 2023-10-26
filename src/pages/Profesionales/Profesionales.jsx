import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import style from "./Profesionales.module.scss"
import axios from 'axios'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from '../../functions';

export const Profesionales = () => {
    const url = 'http://gesifar-api.test/profesionalesController.php';
    const [professionals, setProfessionals] = useState([]);
    const [id, setId] = useState('');
    const [dni, setDni] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [profesion, setProfesion] = useState('');
    const [area, setArea] = useState('');
    const [operation, setOperation] = useState(1);
    const [title, setTitle] = useState('');

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const respuesta = await axios.get(url);
        setProfessionals(respuesta.data);
    }
    const openModal = (op, id, dni, name, lastname, profesion, area) => {
        setId('');
        setDni('');
        setName('');
        setLastname('');
        setProfesion('');
        setArea('');
        setOperation(op);
        if (op === 1) {
            setTitle('Registrar Profesional');
        }
        else if (op === 2) {
            setTitle('Editar Datos');
            setId(id);
            setDni(dni);
            setName(name);
            setLastname(lastname);
            setProfesion(profesion);
            setArea(area);
        }
        window.setTimeout(function () {
            document.getElementById('nombre').focus();
        }, 500);
    }
    const validar = () => {
        var parametros;
        var metodo;
        if (dni.trim() === '') {
            show_alerta('Escribe el DNI del profesional', 'warning');
        }
        else if (name.trim() === '') {
            show_alerta('Escribe el nombre del profesional', 'warning');
        }
        else if (lastname.trim() === '') {
            show_alerta('Escribe el apellido del profesional', 'warning');
        }
        else if (profesion.trim() === '') {
            show_alerta('Escribe la profesion del profesional', 'warning');
        }
        else if (area === '') {
            show_alerta('Escribe el area del profesional', 'warning');
        }
        else {
            if (operation === 1) {
                parametros = { dni: dni.trim(), name: name.trim(), lastname: lastname.trim(), profesion: profesion.trim(), area: area.trim() };
                metodo = 'POST';
            }
            else {
                parametros = { id: id, dni: dni.trim(), name: name.trim(), lastname: lastname.trim(), profesion: profesion.trim(), area: area.trim() };
                metodo = 'PUT';
            }
            envarSolicitud(metodo, parametros);
        }
    }
    const envarSolicitud = async (metodo, parametros) => {
        await axios({ method: metodo, url: url, data: parametros }).then(function (respuesta) {
            var tipo = respuesta.data[0];
            var msj = respuesta.data[1];
            show_alerta(msj, tipo);
            if (tipo === 'success') {
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
            title: '¿Seguro de eliminar el profesional ' + name + ' ?',
            icon: 'question', text: 'No se podrá dar marcha atrás',
            showCancelButton: true, confirmButtonText: 'Si, eliminar', cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setId(id);
                envarSolicitud('DELETE', { id: id });
            }
            else {
                show_alerta('Los datos del profesional NO fueron eliminados', 'info');
            }
        });
    }


    return (
        <Layout>
            <div className={style.title}>Gestion de Profesionales Solicitantes</div>
            <div className='container-fluid'>
                <div className='row mt-4'>
                    <div className='col-md-4 offset-md-9'>
                        <div className='d-grid mx-auto'>
                            <button onClick={() => openModal(1)} className='btn btn-lg btn-dark' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                <i className='fa-solid fa-circle-plus'></i> Añadir nuevo profesional
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
                                        <th>DNI</th>
                                        <th>NOMBRE</th>
                                        <th>APELLIDO</th>
                                        <th>PROFESION</th>
                                        <th>AREA</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className='table-group-divider'>
                                    {professionals.map((professional, i) => (
                                        <tr key={professional.id}>
                                            {/* <td>{(i + 1)}</td> */}
                                            <td>{professional.dni}</td>
                                            <td>{professional.name}</td>
                                            <td>{professional.lastname}</td>
                                            <td>{professional.profesion}</td>
                                            <td>{professional.area}</td>
                                            <td>
                                                <div className="btn-group" role="group">

                                                    <button onClick={() => openModal(2, professional.id, professional.dni, professional.name, professional.lastname, professional.profesion, professional.area)}
                                                        className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                                        <i className='fa-solid fa-edit'></i> Editar
                                                    </button>
                                                    <button onClick={() => deleteProduct(professional.id, professional.name)} className='btn btn-danger'>
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
                                <span className='input-group-text'>DNI</span>
                                <input type='text' id='dni' className='form-control' placeholder='DNI' value={dni}
                                    onChange={(e) => setDni(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'>Nombre</span>
                                <input type='text' id='nombre' className='form-control' placeholder='Nombre' value={name}
                                    onChange={(e) => setName(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'>Apellido</span>
                                <input type='text' id='apellido' className='form-control' placeholder='Apellido' value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'>Profesion</span>
                                <input type='text' id='profesion' className='form-control' placeholder='Profesion' value={profesion}
                                    onChange={(e) => setProfesion(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'>Area</span>
                                <input type='text' id='area' className='form-control' placeholder='Area' value={area}
                                    onChange={(e) => setArea(e.target.value)}></input>
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