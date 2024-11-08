import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Header = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState(router.pathname); 
  const handleButtonClick = (path: string) => {
    setActiveButton(path);
    router.push(path);
  };

  const getButtonStyles = (path: string) => ({
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '1rem',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: activeButton === path ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)', // Activate only when the button is clicked
      width: '100%',
      height: '3px',
      backgroundColor: 'red',
      transition: 'transform 1s ease',
      transformOrigin: 'center',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  });


  return (
    <Box
      component="nav"
      sx={{
        height: '70px',
        position: 'relative',
        paddingY: 2,
        paddingX: 45
      }}
    >
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
          onClick={() => handleButtonClick('/')}
          sx={getButtonStyles('/')}
        >
          SHOP
        </Button>
        <Button
          color="inherit"
          onClick={() => handleButtonClick('/recipes')}
          sx={getButtonStyles('/recipes')}
        >
          RECIPES
        </Button>
        <Button
          color="inherit"
          onClick={() => handleButtonClick('/learn')}
          sx={getButtonStyles('/learn')}
        >
          LEARN
        </Button>
        <Button
          color="inherit"
          onClick={() => handleButtonClick('/about')}
          sx={getButtonStyles('/about')}
        >
          ABOUT
        </Button>
        <Button
          color="inherit"
          onClick={() => handleButtonClick('/blog')}
          sx={getButtonStyles('/blog')}
        >
          BLOG
        </Button>
      </Toolbar>
    </Box>
  );
};

export default Header;
