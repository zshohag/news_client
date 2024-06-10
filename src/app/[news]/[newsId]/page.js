import { getSingleNews } from "@/utils/getSingleNews";
import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const NewsDetailPage = async ({ params }) => {
  const { data: news } = await getSingleNews(params.newsId);
  // console.log(data);
  return (
    <Box className="my-5">
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Image
              src={news.thumbnail_url}
              width={800}
              height={500}
              alt="news"
            />
            <Grid container spacing={2} className="mt-2">
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  width={800}
                  height={500}
                  alt="news"
                />
              </Grid>
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  width={800}
                  height={500}
                  alt="news"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h5" component="h2">
              {news.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Avatar alt="author" src={news.author.img} />
              <Typography>{news.author.name}</Typography>
              <Typography>{news.author.published_date}</Typography>
            </Box>
            <Typography
              style={{
                textAlign: "justify",
                whiteSpace: "pre-line",
                margin: "10px 0px",
              }}
            >
              {news.details}
            </Typography>
            <Button className="text-black" variant="outlined">
              <Link href="/categories/news?category=all-news">Go Back</Link>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetailPage;
