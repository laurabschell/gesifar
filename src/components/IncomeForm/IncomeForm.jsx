import { Checkbox, FormControl, TextField, Button } from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import React from 'react'

const IncomeForm = () => {
    return (
        <FormControl sx={{ m: '3rem' }}>
            <FormGroup sx={{ m: '1rem' }} row>
                <FormControlLabel
                    control={
                        <Checkbox />
                    }
                    label="Medicamento"
                />
                <FormControlLabel
                    control={
                        <Checkbox />
                    }
                    label="Insumo"
                />
            </FormGroup>
            <div>
                <TextField sx={{ m: '1rem' }} id="outlined-basic" label="Fecha" variant="outlined" />
                <TextField sx={{ m: '1rem' }} id="outlined-basic" label="Hora" variant="outlined" />
            </div>

            <div>
                <TextField sx={{ m: '1rem' }} id="outlined-basic" label="Producto ingresado" variant="outlined" />
                <TextField sx={{ m: '1rem' }} id="outlined-basic" label="Presentacion" variant="outlined" />
                <TextField sx={{ m: '1rem' }} id="outlined-basic" label="Lote" variant="outlined" />
                <TextField sx={{ m: '1rem' }} id="outlined-basic" label="Vencimiento" variant="outlined" />

            </div>
            <div>
                <TextField sx={{ m: '1rem' }} id="outlined-basic" label="Cantidad" variant="outlined" />
                <TextField sx={{ m: '1rem' }} id="outlined-basic" label="Proveedor" variant="outlined" />
            </div>

            <Button sx={{ m: '1rem', p: '.7rem 1rem', width: 'min-content' }} variant="contained" color="success">Registrar</Button>

        </FormControl >
    )
}

export default IncomeForm