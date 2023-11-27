import React from 'react';
import { Container, Grid, Typography, Paper, Card, CardContent, CardMedia, Button } from '@mui/material';
import '../components/FoodEnterprise.css';
import Navbar from "./Navbar"

const sections = [
  {
    title: 'Vegetarian Options',
    image: "https://imgmedia.lbb.in/media/2022/05/628d02abb244e5600088c718_1653408427183.jpg",
    description: 'Explore our delicious range of vegetarian dishes made with fresh and high-quality ingredients. From salads to hearty main courses, our vegetarian options cater to every palate.',
  },
  {
    title: 'Non-Vegetarian Options',
    image: "https://assets.thehansindia.com/h-upload/2020/03/14/953945-food.webp",
    description: 'Indulge in our savory non-vegetarian dishes crafted with the finest meats and spices. From grilled delights to exotic meat curries, our non-vegetarian menu promises a culinary journey.',
  },
];

const FoodEnterprisePage = () => {
  return (
    <Container maxWidth="md" style={{ paddingTop: 16, paddingBottom: 16 }}>
      <Navbar />
      <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
        Welcome to Our Food Enterprise

      </Typography>
      <Grid container spacing={3}>
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }} elevation={3}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              <Card style={{ width: '100%', marginBottom: 16 }}>
                <CardMedia
                  component="img"
                  alt={section.title}
                  height="140"
                  image={section.image}
                />
                <CardContent>
                  <Typography variant="body1" paragraph>
                    {section.description}
                  </Typography>
                </CardContent>
                <Button variant="contained" color="primary">
                  Order Now
                </Button>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FoodEnterprisePage;
