// import {
//   Box,
//   ButtonBase,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Grid,
//   Paper,
//   Typography,
// } from "@mui/material";
// import sideBarImage from "@/assets/side-top-news.png";
// import Image from "next/image";

// const SideBar = () => {
//   return (
//     <Box className="my-5 ">
//       <Card className="mb-6">
//         <CardActionArea>
//           <CardMedia>
//             <Image src={sideBarImage} width={700} height={500} alt="top news" />
//           </CardMedia>
//           <CardContent>
//             <p
//               className="
//                         w-[100px]
//                         bg-red-500
//                         px-2 py-1
//                         text-white
//                         my-2
//                         rounded
//                         "
//             >
//               Technology
//             </p>
//             <Typography gutterBottom variant="h6" component="div">
//               Lorem ipsum dolor sit amet
//             </Typography>
//             <Typography gutterBottom className="my-3">
//               By Z
//             </Typography>

//             <Typography variant="body2" color="text.secondary">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
//               inventore doloribus, quibusdam perferendis vel iusto tempore? Nisi
//               tempore molestiae ea incidunt quo, voluptate omnis eaque quae
//               tempora ullam inventore, consequatur veniam reiciendis soluta
//               explicabo similique? Quos fuga a maiores iure nobis eligendi quod
//               numquam, placeat asperiores magni. Repellendus, provident culpa.
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>

//       {/*  */}

//       <Paper
//         sx={{
//           p: 2,
//           margin: "auto",
//           maxWidth: 500,
//           flexGrow: 1,
//         }}
//       >
//         <Grid container spacing={1}>
//           <Grid item>
//             <ButtonBase sx={{ width: 128, height: 128 }}>
//               <Image src={sideBarImage} alt="top news" />
//             </ButtonBase>
//           </Grid>
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column">
//               <Grid item xs>
//                 <Typography gutterBottom variant="body2" color="text.secondary">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
//                   laudantium culpa consectetur, quo possimus repellendus
//                   pariatur autem similique. Vel vitae voluptatem iusto odit
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Paper>

//       <Paper
//         sx={{
//           p: 2,
//           margin: "auto",
//           maxWidth: 500,
//           flexGrow: 1,
//         }}
//       >
//         <Grid container spacing={1}>
//           <Grid item>
//             <ButtonBase sx={{ width: 128, height: 128 }}>
//               <Image src={sideBarImage} alt="top news" />
//             </ButtonBase>
//           </Grid>
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column">
//               <Grid item xs>
//                 <Typography gutterBottom variant="body2" color="text.secondary">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
//                   laudantium culpa consectetur, quo possimus repellendus
//                   pariatur autem similique. Vel vitae voluptatem iusto odit
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Paper>

//       <Paper
//         sx={{
//           p: 2,
//           margin: "auto",
//           maxWidth: 500,
//           flexGrow: 1,
//         }}
//       >
//         <Grid container spacing={1}>
//           <Grid item>
//             <ButtonBase sx={{ width: 128, height: 128 }}>
//               <Image src={sideBarImage} alt="top news" />
//             </ButtonBase>
//           </Grid>
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column">
//               <Grid item xs>
//                 <Typography gutterBottom variant="body2" color="text.secondary">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
//                   laudantium culpa consectetur, quo possimus repellendus
//                   pariatur autem similique. Vel vitae voluptatem iusto odit
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Paper>

//     </Box>
//   );
// };

// export default SideBar;

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import Image from "next/image";
import sideBarNews from "@/assets/side-top-news.png";
import sideBottomNews from "@/assets/side-bottom-img.png";
import SidebarNewsCard from "./SideBarNewsCard";

const SideBar = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sideBarNews} width={800} alt="top news" />
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
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom className="my-3">
              By Z - Jun 08 2024
            </Typography>

            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Divider />

      <Stack my={3} columnGap={2}>
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
      </Stack>

      <Box>
        <Image
          src={sideBottomNews}
          height={400}
          width={350}
          alt="rectangle world image"
        />
      </Box>
    </Box>
  );
};

export default SideBar;
