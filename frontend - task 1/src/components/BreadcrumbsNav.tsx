import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const BreadcrumbsNav = () => {
  const router = useRouter();

  const handleClick = (path: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    router.push(path);
  };

  return (
    <Breadcrumbs
      separator={<ChevronRightIcon fontSize="small" sx={{ color: '#d99aa8' }} />}
      aria-label="breadcrumb"
      sx={{ my: 2, fontWeight: 'bold' }}
    >
      <Link underline="hover" color="inherit" href="/" onClick={handleClick('/')}>
        Recipes
      </Link>
      <Link underline="hover" color="inherit" href="/bread" onClick={handleClick('/bread')}>
        Bread
      </Link>
      <Typography fontWeight={'bold'} color="text.primary">Quick Bread</Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsNav;
