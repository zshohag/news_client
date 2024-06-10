import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CategoryList from "@/components/ui/CategoryList/CategoryList";

const CategoriesLayout = ({children}) => {
  return (
    <Box>
      <Container>
        <>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <CategoryList/>
            </Grid>
            <Grid item xs={8}>
             {children}
            </Grid>
          </Grid>
        </>
      </Container>
    </Box>
  );
};

export default CategoriesLayout;
