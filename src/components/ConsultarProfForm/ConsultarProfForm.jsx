import React from 'react'
import Layout from '../Layout/Layout'
import style from "./ConsultarProfForm.module.scss"
import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'

const ConsultarProfForm = () => {
    return (
        <Layout>
            <div className={style.title}>Gestion de Profesionales Solicitantes</div>
            <div className={style.subtext}>Complete uno de los campos para consultar los datos:</div>
            <div className={style.formContainer}>
                <div className={style.fieldContainer}>
                    <label for="DNI">DNI</label>
                    <input label="DNI" id="DNI" variant="outlined" />
                    <label for="Nombre">Nombre</label>
                    <input label="Nombre" id="Nombre" variant="outlined" />
                    <label for="Apellido">Apellido</label>
                    <input label="Apellido" id="Apellido" variant="outlined" />
                </div>

                <FormControl className={style.radioButtons}>
                    <FormLabel id="demo-radio-buttons-group-label">Profesion</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Enfermero/a" />
                        <FormControlLabel value="male" control={<Radio />} label="Medico/a" />
                        <FormControlLabel value="other" control={<Radio />} label="Otro" />
                    </RadioGroup>
                </FormControl>

            </div>

            <FormControl fullWidth className={style.dropdown}>
                <InputLabel id="demo-simple-select-label">Area</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Age"
                // onChange={handleChange}
                >
                    <MenuItem value={10}>Laboratorio</MenuItem>
                    <MenuItem value={20}>Cirugia General</MenuItem>
                    <MenuItem value={30}>Odontologia</MenuItem>
                </Select>
            </FormControl>

            <button>Consultar</button>
        </Layout>
    )
}

export default ConsultarProfForm