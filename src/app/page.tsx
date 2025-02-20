import Link from 'next/link';
import { Button, Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Cake Customizer
      </Typography>
      <Link href="/customize">
        <Button variant="contained" color="primary" size="large">
          Customize Your Cake
        </Button>
      </Link>
    </Container>
  );
}
