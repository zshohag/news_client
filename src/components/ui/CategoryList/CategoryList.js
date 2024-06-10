import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
  const { data: allCategories } = await getAllCategories();
  //   console.log(allCategories);

  return (
    <Box className="mt-5 text-center bg-gray-100 px-4 py-3">
      <Typography variant="h6">Categories</Typography>
      <Divider />
      <Stack rowGap={1} sx={{ mt: 2.5 }}>
        {allCategories.map((category) => (
          <Button className='text-black' variant="outlined" key={category.id}>
            <Link
              href={`/categories/news?category=${category.title.toLowerCase()}`}
            >
              {category.title}
            </Link>
          </Button>
        ))} 
      </Stack>
    </Box>
  );
};

export default CategoryList;
