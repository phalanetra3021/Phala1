import React from 'react';
import { Container, Typography, Paper, AppBar, Toolbar, Link, Button } from '@mui/material';
import Navbar from './Navbar';

const containerStyle = {
    paddingTop: 16,
    paddingBottom: 16,
};

const paperStyle = {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const AboutPage = () => { React.useEffect(() => {
    document.body.style.background =
      "url(https://wallpapers.com/images/high/food-background-lj7bs6hgdhgw4hha.webp) no-repeat";
      document.body.style.backgroundSize ="cover";
  }, []);
    return (
        <>
            <Navbar />
            <Container maxWidth="md" style={containerStyle} sx={{ mt: 5 }}>

                <Paper style={paperStyle} elevation={3}>
                    <Typography variant="h4" gutterBottom>
                        About Foddu
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Welcome to Foddu, where we are passionate about [describe your mission or what your startup does].
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Our journey began with a vision to [explain the inspiration behind starting the company].
                    </Typography>
                    <Typography variant="body1" paragraph>
                        At Foddu, we believe in [mention core values and principles]. Our team is dedicated to [highlight team strengths or expertise].
                    </Typography>
                    <Typography variant="body1" paragraph>
                        What sets Foddu apart is [unique selling points, key features, or achievements]. We strive to [mention future goals and aspirations].
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Join us on this exciting adventure as we [mention future plans or projects]. Together, we can [emphasize the positive impact your startup aims to make].
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Thank you for being a part of the Foddu community. Feel free to [mention how users can get in touch or engage with your company].
                    </Typography>
                </Paper>
            </Container>
        </>
    );
};

export default AboutPage;
