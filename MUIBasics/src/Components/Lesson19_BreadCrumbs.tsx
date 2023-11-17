import { Breadcrumbs, Link, Box } from "@mui/material";

const Lesson19_BreadCrumbs = () => {
  return (
    <Box>
      <Breadcrumbs>
        <Link href="/" underline="hover">
          AnaSayfa
        </Link>
        <Link href="/" underline="hover">
          Blog
        </Link>
        <Link href="/" underline="none">
          Ekrem Lale
        </Link>
      </Breadcrumbs>
      <Breadcrumbs separator=">">
        <Link href="/" underline="hover">
          AnaSayfa
        </Link>
        <Link href="/" underline="hover">
          Blog
        </Link>
        <Link href="/" underline="none">
          Ekrem Lale
        </Link>
      </Breadcrumbs>
      <Breadcrumbs separator=">" maxItems={2}>
        <Link href="/" underline="hover">
          AnaSayfa
        </Link>
        <Link href="/" underline="hover">
          Blog
        </Link>
        <Link href="/" underline="none">
          Ekrem Lale
        </Link>
        <Link href="/" underline="none">
          Ekrem Lale
        </Link>
        <Link href="/" underline="none">
          Ekrem Lale
        </Link>
      </Breadcrumbs>
    </Box>
  );
};

export default Lesson19_BreadCrumbs;
