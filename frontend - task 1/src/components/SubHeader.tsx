import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const SubHeader = () => {
  return (
    <Box
      component="nav"
      sx={{
        height: '70px',
        backgroundColor: '#f8f4ed',
        position: 'relative',
        paddingY: 2,
        paddingX: 45
      }}
    >
      <Box
        component="img"
        src="/monkey.png"
        alt="Decorative Image"
        sx={{
          position: 'absolute',
          top: '0%',
          left: '270px',
          transform: 'translateY(-50%)',
          width: '100px',
          height: 'auto',
        }}
      />
      <Toolbar
        sx={{
          justifyContent: 'start',
          gap: 4,
          minHeight: 'auto !important',
          height: 'auto !important'
        }}
      >
        <Button
          color="inherit"
          component={Link}
          href="/"
          sx={{
            color: 'black',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: '0.875rem',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          CATEGORIES
        </Button>
        <Button
          color="inherit"
          component={Link}
          href="/about"
          sx={{
            color: 'black',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: '0.875rem',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          COLLECTIONS
        </Button>
        <Button
          color="inherit"
          component={Link}
          href="/service"
          sx={{
            color: 'black',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: '0.875rem',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          RESOURCES
        </Button>
      </Toolbar>
    </Box>
  );
};

export default SubHeader;
