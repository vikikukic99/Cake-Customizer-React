'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function OrderPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Your Cake Order
      </Typography>
      <Typography variant="h6">Color: {searchParams.get('color') ?? 'Not selected'}</Typography>
      <Typography variant="h6">Shape: {searchParams.get('shape') ?? 'Not selected'}</Typography>
      <Typography variant="h6">Size: {searchParams.get('size') ?? 'Not selected'}</Typography>
      <Typography variant="h6">Flavor: {searchParams.get('flavor') ?? 'Not selected'}</Typography>
      <Typography variant="h6">Decoration: {searchParams.get('decoration') ?? 'Not selected'}</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={() => router.push('/customize')}>
        Customize Again
      </Button>
    </Container>
  );
}
