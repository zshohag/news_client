import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";
import Link from "next/link";

const LatestNews = async () => {
  const { data } = await getAllNews();
  //console.log(data[0]);
  return (
    <Box className="my-5">
      <Link href="/categories/news?category=all-news">
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image
                src={data[0].thumbnail_url}
                width={800}
                height={500}
                alt="top news"
              />
            </CardMedia>
            <CardContent>
              <p
                className="
                      w-[100px]
                      bg-red-500
                      px-2
                      text-white
                      my-5
                      rounded
                      "
              >
                {data[0].category}
              </p>
              <Typography gutterBottom variant="h5" component="div">
                {data[0].title}
              </Typography>
              <Typography gutterBottom className="my-3">
                By {data[0].author.name} - {data[0].author.published_date}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {data[0].details.length > 200
                  ? data[0].details.slice(0, 200) + "..."
                  : data[0].details}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      {/*  */}
      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.slice(0, 4).map((news) => (
          <Grid key={news.id} item xs={6}>
            <Link
              key={news.id}
              href={`/${news.category.toLowerCase()}/${news._id}`}
            >
              <Card>
                <CardActionArea>
                  <CardMedia>
                    <Image
                      src={news.thumbnail_url}
                      width={800}
                      height={300}
                      alt="top news"
                    />
                  </CardMedia>
                  <CardContent>
                    <p
                      className="
                      w-[100px]
                      bg-red-500
                      px-2
                      text-white
                      my-5
                      rounded
                      "
                    >
                      {news.category}
                    </p>
                    <Typography gutterBottom>{news.title}</Typography>
                    <Typography gutterBottom className="my-3">
                      By Z Jun 08 2024
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout........
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNews;
