import React from 'react'
import Layout from '../Layout/Layout'
import style from './RegistrarMaterialForm.module.scss'
import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material'

const RegistrarMaterialForm = () => {
    return (
        <Layout>
            <div className={style.title}>Gestion de Stock</div>
            <div className={style.subtext}>Complete los campos con los datos a registrar:</div>
            <div className={style.formContainer}>
                <div className={style.fieldContainer}>


                <FormControl fullWidth className={style.dropdown}>
                <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Tipo"
                // onChange={handleChange}
                >
                    <MenuItem value={1}>Tipo 1</MenuItem>
                    <MenuItem value={2}>Tipo 2</MenuItem>
                </Select>
                </FormControl>

                    {/*                    
                    <label for="Tipo">Tipo</label>
                    <input label="Tipo" id="tipo" variant="outlined" />                    
                    */}
                    <label for="Forma">Forma</label>
                    <input label="Forma" id="forma" variant="outlined" />
                    <label for="Presentacion">Presentacion</label>
                    <input label="Presentacion" id="presentacion" variant="outlined" />
                    <label for="Fecha_Venc">Fecha Vencimiento</label>
                    <input label="Fecha_Venc" id="fecha_venc" variant="outlined" />
                </div>

            </div>

            <button>Registrar</button>
        </Layout>
    )
}

export default RegistrarMaterialForm