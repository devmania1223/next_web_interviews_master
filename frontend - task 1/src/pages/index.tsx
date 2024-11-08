import { Typography, Box, Button } from '@mui/material';
import BreadcrumbsNav from '@/components/BreadcrumbsNav';
import SaveIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';

export default function Home() {
  return (
    <div>
      <Typography
        component="div"
        variant="h4"
        align="center"
        sx={{
          width: '80%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          gap: 10,
          ml: '15%',
          marginTop: '70px'
        }}
      >
        <Box
          sx={{
            flexBasis: '40%',
            textAlign: 'start',
          }}
        >
          <BreadcrumbsNav />
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Whole-Grain Banana Bread</Typography>
          <Typography variant="body1" color='#717171' sx={{ mt: '100px', fontSize: '21px', letterSpacing: '-0.1px'}}>
            This one-bowl banana bread-our&nbsp;
            <a href="" className="underline" target="_blank" rel="Recipe of the Year" style={{ color: '#717171', fontSize: '22px' }}>
              2018 Recipe of the Year
            </a> - uses the simplest ingredients, but is incredibly moist and flavorful.While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious - it's versatile.
          </Typography>
          <Box display="flex" alignItems="start" gap={2} mt={5}>
            <Box sx={{ flexBasis: '10%', display: 'flex', justifyContent: 'center' }}>
              <img
                src="/prep.png"
                alt="PREP"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Typography
              variant="body1"
              color="black"
              sx={{ flexBasis: '15%', textAlign: 'left' }}
            >
              <Typography variant="body2" className="text-base" component="p" sx={{ fontWeight: 'bold' }}>
                PREP
              </Typography>
              <Typography variant="h6" className="text-xl" component="p" sx={{ fontWeight: 'bold' }}>
                10 mins
              </Typography>
            </Typography>
            <Typography
              component={'div'}
              variant="body1"
              color="black"
              sx={{ flexBasis: '35%', textAlign: 'left' }}
            >
              <Typography variant="body2" className="text-base" component="p" sx={{ fontWeight: 'bold' }}>
                BAKE
              </Typography>
              <Typography variant="h6" className="text-xl" component="p" sx={{ fontWeight: 'bold' }}>
                1hr to 1hr 15 mins
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              color="black"
              sx={{ flexBasis: '40%', textAlign: 'left' }}
            >
              <Typography variant="body2" className="text-base" component="p" sx={{ fontWeight: 'bold' }}>
                TOTAL
              </Typography>
              <Typography variant="h6" className="text-xl" component="p" sx={{ fontWeight: 'bold' }}>
                1hr 10 mins
              </Typography>
            </Typography>
          </Box>
          <Typography
            component="div"
            align="center"
            sx={{
              marginTop: '30px',
              height: '2px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              mx: 'auto',
              background: '#f2f2f2'
            }}
          >
          </Typography>

          <Box display="flex" alignItems="start" gap={2} mt={5}>
            <Box sx={{ flexBasis: '10%', display: 'flex', justifyContent: 'center' }}>
              <img
                src="/yield.png"
                alt="PREP"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Typography
              variant="body1"
              color="black"
              sx={{ flexBasis: '35%', textAlign: 'left' }}
            >
              <Typography variant="body2" className="text-base" component="p" sx={{ fontWeight: 'bold' }}>
                YIELD
              </Typography>
              <Typography variant="h6" className="text-xl" component="p" sx={{ fontWeight: 'bold' }}>
                1 loaf, 12 generous servings
              </Typography>
            </Typography>
            <Button
              variant="outlined"
              startIcon={<SaveIcon />}
              sx={{
                flexBasis: '30%',
                color: 'black',
                borderColor: '#c68b92',
                textTransform: 'none',
                fontWeight: 'bold',
                padding: '8px 16px',
                '&:hover': {
                  borderColor: '#c68b92',
                },
              }}
            >
              SAVE RECIPE
            </Button>
            <Button
              variant="outlined"
              startIcon={<PrintIcon />}
              sx={{
                flexBasis: '25%',
                color: 'black',
                borderColor: '#c68b92',
                textTransform: 'none',
                fontWeight: 'bold',
                padding: '8px 16px',
                '&:hover': {
                  borderColor: '#c68b92',
                },
              }}
            >
              PRINT
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            flexBasis: '55%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start'
          }}
        >
          <img
            src="/demo.png"
            alt="Description of the image"
            style={{ width: '80%', height: 'auto' }}
          />
        </Box>
      </Typography>
    </div>
  );
}
