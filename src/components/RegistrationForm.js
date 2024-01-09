import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Checkbox, FormControlLabel, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function RegistrationForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        age: '',
        weight: '',
        gender: 'Male',
        agreeToTerms: false,
    });

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                [id]: checked,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [id]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Registration Successful!\n${JSON.stringify(formData, null, 2)}`);
        setFormData({
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            age: '',
            weight: '',
            gender: 'Male',
            agreeToTerms: false,
        });
        navigate('/album');
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Registration Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="username"
                    label="Username"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.username}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.password}
                    onChange={handleChange}
                    margin="normal"
                />

                <TextField
                    id="firstName"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    margin="normal"
                />

                <TextField
                    id="lastName"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    id="age"
                    label="Age"
                    type="number"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.age}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    id="weight"
                    label="Weight (kg)"
                    type="number"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.weight}
                    onChange={handleChange}
                    margin="normal"
                />
                <FormControl fullWidth margin="normal" variant="outlined">
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                        id="gender"
                        label="Gender"
                        value={formData.gender}
                        onChange={handleChange}
                        labelId="gender-label"
                    >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                    </Select>
                </FormControl>
                <FormControlLabel
                    control={
                        <Checkbox
                            id="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                        />
                    }
                    label="I agree to the terms and conditions"
                />
                <Button type="submit" variant="contained" color="primary">
                    Register
                </Button>
            </form>
        </Container>
    );
}



export default RegistrationForm;