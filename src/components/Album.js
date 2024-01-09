import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import ProgressBar from '../utilities/ProgressBar';
import FilterBar from '../utilities/FilterBar';
import FinishBtn from '../components/FinishBtn';
import axios from 'axios';
import logo from './logo.jpeg'; // Adjust the path if needed


function PhotoAlbum() {
    const [drinks, setDrinks] = useState([]);
    const [progress, setProgress] = useState(0);
    const [selectedLetter, setSelectedLetter] = useState('');
    const [filteredDrinks, setFilteredDrinks] = useState([]);
    const [showSortedNames, setShowSortedNames] = useState(true);

    useEffect(() => {
        axios
            .get('http://192.168.242.10:3000/drinks')
            .then((response) => {
                setDrinks(response.data.message);
            })
            .catch((error) => {
                console.error('Error fetching drinks:', error);
            });
    }, []);

    useEffect(() => {
        // Filter drinks that start with the selected letter when selectedLetter changes
        if (selectedLetter) {
            const filtered = drinks.filter((drink) =>
                drink.name && drink.name.toLowerCase().startsWith(selectedLetter.toLowerCase())
            );
            setFilteredDrinks(filtered);
            setShowSortedNames(false); // Hide sorted names list
        } else {
            setFilteredDrinks([]); // Clear filtered drinks if no letter is selected
            setShowSortedNames(true); // Show sorted names list
        }
    }, [selectedLetter, drinks]);

    const handleReload = () => {
        const userId = "6500aebecc02e3321e93f94a"; // Hardcoded userId
        axios.post('http://192.168.242.10:3000/refresh', {userId})
            .then((response) => {
                // Handle refresh success
                const newValue = progress - (Math.random() * progress) // Assuming the value is in the response
                setProgress(newValue);
            })
            .catch((error) => {
                console.error('Error refreshing:', error);
                const newValue = progress - (Math.random() * progress) // Assuming the value is in the response
                setProgress(newValue);
            });
    };

    function sortDrinksByName(drinks) {
        return drinks.slice().sort((a, b) => {
            const nameA = a.name ? a.name.toLowerCase() : '';
            const nameB = b.name ? b.name.toLowerCase() : '';
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
    }

    const sortedDrinks = sortDrinksByName(drinks);

    const handlePhotoClick = (drinkId2) => {
        const userId = "6500aebecc02e3321e93f94a"; // Hardcoded userId
        const drinkId = "650038b9679e5dc897e6ff87";
        axios.post('http://192.168.242.10:3000/consume', { userId, drinkId })
            .then((response) => {
                const newValue = Math.random() * 0.4 + progress;
                setProgress(newValue);
                console.log("New Value", newValue)
                console.log("Progress", progress)
            })
            .catch((error) => {
                console.error('Error updating progress:', error);
            });
    };


    const handleLetterClick = (letter) => {
        setSelectedLetter(letter);
    };

    return (
        <Container maxWidth="md" mt={5}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="h4" align="center" gutterBottom>
                            <img src={logo} alt="Drinks Logo" style={{ height: '50px' }} />
                            <span role="img" aria-label="reload" style={{ marginLeft: '0.5em', cursor: 'pointer' }} onClick={handleReload}>
                    🔄
                </span>
                        </Typography>
                        <FinishBtn />
                    </div>
                </Grid>
            </Grid>
            <ProgressBar progress={progress} />
            <Grid sx={{marginTop: 5}} container spacing={3}>
                {filteredDrinks.length > 0 &&
                    filteredDrinks.map((drink) => (
                        <Grid item xs={12} sm={6} md={4} key={drink._id}>
                            <Card onClick={handlePhotoClick} style={{ cursor: 'pointer' }}>
                                <CardMedia component="img" alt={drink.name} height="250" image={drink.url} />
                                <CardContent>
                                    <Typography align='center' variant="body2" color="textSecondary">
                                        {drink.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
            {showSortedNames && sortedDrinks.map((drink) => (
                <Grid item xs={12} sm={6} md={4} key={drink._id}>
                    <Card onClick={handlePhotoClick} style={{ cursor: 'pointer' }}>
                        <CardMedia component="img" alt={drink.name} height="250" image={drink.url} />
                        <CardContent>
                            <Typography align='center' variant="body2" color="textSecondary">
                                {drink.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            <FilterBar onLetterClick={handleLetterClick} />
        </Container>
    );
}

export default PhotoAlbum;


