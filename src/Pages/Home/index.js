import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// import Container from "@mui/material/Container";
// import { experimentalStyled as styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// import { StepContent } from '@mui/material';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
import Coin from "./Component/Coin";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));


// const useStyles = makeStyles({
//   boxwidth: {
//     width: "450px",
//   },
//   boxmargin: {
//     marginTop: "45px !important",
//   },
 
// });


// function getSteps() {
//   return [<b style={{color:'purple'}}>'Enter Personal Details'</b>, 
//   <b style={{color:'purple'}}>'Enter Education Details'</b>, 
//   <b style={{color:'purple'}}>'Enter Address'</b>];
// }


// function getStepContent(step,data,inputnow,classes,handleNext) {

//   switch (step) {
//     case 0:
    
//     return (
//       <Container fixed>
//         <Box sx={{ flexGrow: 1 }}>
//           <Grid container spacing={45}>
//             <Grid item xs={4} sm={4} md={4} className={classes.boxmargin}>
//               <h3>First</h3>
              
//               <TextField
//                 id="outlined-basic"
//                 label="Outlined"
//                 name="firstName"
//                 value={data.firstName}
//                 onChange={(e) => inputnow(e)}
//                 variant="outlined"
//                 className={classes.boxwidth}
//               />
//             </Grid>
//             <Grid item xs={4} sm={4} md={4} className={classes.boxmargin}>
//               <h3> Middle</h3>
//               <TextField
//                 id="outlined-basic"
//                 label="Outlined"
//                 name="middleName"
//                 value={data.middleName}
//                 onChange={(e) => inputnow(e)}
//                 variant="outlined"
//                 className={classes.boxwidth}
//               />
//             </Grid>
//           </Grid>
//           <Grid container spacing={45}>
//             <Grid item xs={4} sm={4} md={4} className={classes.boxmargin}>
//               <h3> Last </h3>
//               <TextField
//                 id="outlined #f73378"
//                 label="Outlined  "
//                 name="lastName"
//                 value={data.lastName}
//                 onChange={(e) => inputnow(e)}
//                 variant="outlined"
//                 className={classes.boxwidth}
//               />
//             </Grid>
//             <Grid item xs={4} sm={4} md={4} className={classes.boxmargin}>
//               <h3> City </h3>
//               <TextField
//                 id="outlined-basic"
//                 label="Outlined"
//                 name="cityName"
//                 value={data.cityName}
//                 onChange={(e) => inputnow(e)}
//                 variant="outlined"
//                 className={classes.boxwidth}
//               />
//             </Grid>
//           </Grid>
//           <Grid container spacing={45}>
//             <Grid item xs={4} sm={4} md={4} className={classes.boxmargin}>
//               <h3> Email id</h3>
//               <TextField
//                 id="outlined-basic"
//                 label="Outlined"
//                 name="emailId"
//                 value={data.emailId}
//                 onChange={(e) => inputnow(e)}
//                 variant="outlined"
//                 className={classes.boxwidth}
//               />
//             </Grid>
//             <Grid item xs={4} sm={4} md={4} className={classes.boxmargin}>
//               <h3> Mobile</h3>
//               <TextField
//                 id="outlined-basic"
//                 label="Outlined"
//                 floatingLabelText="mobileNumber"
//                 name="mobileNumnber"
//                 value={data.mobileNumnber}
//                 onChange={(e) => inputnow(e)}
//                 variant="outlined"
//                 className={classes.boxwidth}
//               />
//             </Grid>
//           </Grid>
//         </Box>
//         {/* <Grid item xs={12} sm={4} md={4} className={classes.boxmargin}>
//           <Button
//             variant="contained"
//             onClick={() => savedata()}
//             endIcon={<SendIcon />}
//           >
//             Next
//           </Button>
//         </Grid> */}
//       </Container>
//     );
//     case 1:
//     return (
//       <Container fixed>
//         <Box sx={{ flexGrow: 1 }}>
//           <Grid container spacing={45}>
//             <Grid item xs={4} sm={4} md={4} className={classes.boxmargin}>
//               <h3>College</h3>
              
//               <TextField
//                 id="outlined-basic"
//                 label="Outlined"
//                 name="College"
//                 value={data.College}
//                 onChange={(e) => inputnow(e)}
//                 variant="outlined"
//                 className={classes.boxwidth}
//               />
//             </Grid>
//             <Grid item xs={4} sm={4} md={4} className={classes.boxmargin}>
//               <h3> Univercity</h3>
//               <TextField
//                 id="outlined-basic"
//                 label="Outlined"
//                 name="Univercity"
//                 value={data.Univercity}
//                 onChange={(e) => inputnow(e)}
//                 variant="outlined"
//                 className={classes.boxwidth}
//               />
//             </Grid>
//           </Grid>
//           <Grid container spacing={45}>
//             <Grid item xs={4} sm={4} md={4} className={classes.boxmargin}>
//               <h3>Branch</h3>
//               <TextField
//                 id="outlined #f73378"
//                 label="Outlined  "
//                 name="Branch"
//                 value={data.Branch}
//                 onChange={(e) => inputnow(e)}
//                 variant="outlined"
//                 className={classes.boxwidth}
//               />
//             </Grid>
//             <Grid item xs={4} sm={4} md={4} className={classes.boxmargin}>
//               <h3>Percentage</h3>
//               <TextField
//                 id="outlined-basic"
//                 label="Outlined"
//                 name="Percentage"
//                 value={data.Percentage}
//                 onChange={(e) => inputnow(e)}
//                 variant="outlined"
//                 className={classes.boxwidth}
//               />
//             </Grid>
//           </Grid>
//           <Grid container spacing={45}>
//             <Grid item xs={4} sm={4} md={4} className={classes.boxmargin}>
//               <h3>Experiance</h3>
//               <TextField
//                 id="outlined-basic"
//                 label="Outlined"
//                 name="Experiance"
//                 value={data.Experiance}
//                 onChange={(e) => inputnow(e)}
//                 variant="outlined"
//                 className={classes.boxwidth}
//               />
//             </Grid>
//             <Grid item xs={4} sm={4} md={4} className={classes.boxmargin}>
//               <h3>City</h3>
//               <TextField
//                 id="outlined-basic"
//                 label="Outlined"
//                 floatingLabelText="mobileNumber"
//                 name="City"
//                 value={data.City}
//                 onChange={(e) => inputnow(e)}
//                 variant="outlined"
//                 className={classes.boxwidth}
//               />
//             </Grid>
//           </Grid>
//         </Box>
//         {/* <Grid item xs={12} sm={4} md={4} className={classes.boxmargin}>
//           <Button
//             variant="contained"
//             onClick={() => savedata()}
//             endIcon={<SendIcon />}
//           >
//             Next
//           </Button>
//         </Grid> */}
//       </Container>
//     );
//     case 2:
//     return (
//       <Container fixed>
//       <Box sx={{ flexGrow: 1 }}>
//         <Grid container spacing={45}>
//           <Grid item xs={4} sm={4} md={4} className={classes.boxmargin}>
//             <h3>Block</h3>
            
//             <TextField
//               id="outlined-basic"
//               label="Outlined"
//               name="Block"
//               value={data.Block}
//               onChange={(e) => inputnow(e)}
//               variant="outlined"
//               className={classes.boxwidth}
//             />
//           </Grid>
//           <Grid item xs={4} sm={4} md={4} className={classes.boxmargin}>
//             <h3>Society</h3>
//             <TextField
//               id="outlined-basic"
//               label="Outlined"
//               name="Society"
//               value={data.Society}
//               onChange={(e) => inputnow(e)}
//               variant="outlined"
//               className={classes.boxwidth}
//             />
//           </Grid>
//         </Grid>
//         <Grid container spacing={45}>
//           <Grid item xs={4} sm={4} md={4} className={classes.boxmargin}>
//             <h3>LandMark</h3>
//             <TextField
//               id="outlined #f73378"
//               label="Outlined  "
//               name="LandMark"
//               value={data.LandMark}
//               onChange={(e) => inputnow(e)}
//               variant="outlined"
//               className={classes.boxwidth}
//             />
//           </Grid>
//           <Grid item xs={4} sm={4} md={4} className={classes.boxmargin}>
//             <h3>Pincode</h3>
//             <TextField
//               id="outlined-basic"
//               label="Outlined"
//               name="Pincode"
//               value={data.Pincode}
//               onChange={(e) => inputnow(e)}
//               variant="outlined"
//               className={classes.boxwidth}
//             />
//           </Grid>
//         </Grid>
//         <Grid container spacing={45}>
//           <Grid item xs={4} sm={4} md={4} className={classes.boxmargin}>
//             <h3>City</h3>
//             <TextField
//               id="outlined-basic"
//               label="Outlined"
//               name="City"
//               value={data.City}
//               onChange={(e) => inputnow(e)}
//               variant="outlined"
//               className={classes.boxwidth}
//             />
//           </Grid>
//           <Grid item xs={4} sm={4} md={4} className={classes.boxmargin}>
//             <h3>State</h3>
//             <TextField
//               id="outlined-basic"
//               label="Outlined"
//               floatingLabelText="mobileNumber"
//               name="State"
//               value={data.State}
//               onChange={(e) => inputnow(e)}
//               variant="outlined"
//               className={classes.boxwidth}
//             />
//           </Grid>
//         </Grid>
//       </Box>
//       {/* <Grid item xs={12} sm={4} md={4} className={classes.boxmargin}>
//         <Button
//           variant="contained"
//           onClick={() => savedata()}
//           endIcon={<SendIcon />}
//         >
//           Next
//         </Button>
//       </Grid> */}
//     </Container>
//     );
//     default:
//     return 'Unknown step';
//   }
//   }

const Home = () => {
  return(
<Coin/>
  );
}
//   const classes = useStyles();
//   const [auth, setAuth] = React.useState(true);
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const [activeStep, setActiveStep] = React.useState(0);
// const steps = getSteps();


// const handleBack = () => {
// 	setActiveStep((prevActiveStep) => prevActiveStep - 1);
// };

// const handleReset = () => {
// 	setActiveStep(0);
// };
//   const [data, setData] = useState({});
//   const [store, setStore] = useState([]);
//   const [index, setIndex] = useState("");
//   const inputnow = (event) => {
//     setData({ ...data, [event.target.name]: event.target.value })
//   }
//   console.log(data);
//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1); 
//     // localStorage.setItem("availabeldata", JSON.stringify(data));
//     localStorage.setItem(`$(prevActiveStep + 1)`, JSON.stringify(data));
// //  localStorage.clear();
//     // setIndex("");
// // setData({
// //     firstName:"",
// //     middleName:"",
// //     lastName:"",
// //     cityName:"",
// //     emailId:"",
// //     mobileNumnber:""
// // })
//   }
 
//   const handleChange = (event) => {
//     setAuth(event.target.checked);
//   };
//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   }));

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

 
//   return (
//     <>
//       <Container fixed>
//         <Box sx={{ flexGrow: 1 }}>
//           <AppBar position="static">
//             <Toolbar>
//               <IconButton
//                 size="large"
//                 edge="start"
//                 color="inherit"
//                 aria-label="menu"
//                 sx={{ mr: 2 }}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                 <h3>Personal Detail</h3>
//               </Typography>
//               {auth && (
//                 <div>
//                   <IconButton
//                     size="large"
//                     aria-label="account of current user"
//                     aria-controls="menu-appbar"
//                     aria-haspopup="true"
//                     onClick={handleMenu}
//                     color="inherit"
//                   >
//                     <AccountCircle />
//                   </IconButton>
//                   <Menu
//                     id="menu-appbar"
//                     anchorEl={anchorEl}
//                     anchorOrigin={{
//                       vertical: "top",
//                       horizontal: "right",
//                     }}
//                     keepMounted
//                     transformOrigin={{
//                       vertical: "top",
//                       horizontal: "right",
//                     }}
//                     open={Boolean(anchorEl)}
//                     onClose={handleClose}
//                   >
//                     <MenuItem onClick={handleClose}>Profile</MenuItem>
//                     <MenuItem onClick={handleClose}>My account</MenuItem>
//                   </Menu>
//                 </div>
//               )}
//             </Toolbar>
//           </AppBar>
//         </Box>
//       </Container>



//       {/* //-------------personal Detail------------------// */}
      
//      <div className={classes.root}>
// 	<Container fixed>
// 	<Stepper activeStep={activeStep} orientation="vertical">
// 		{steps.map((label, index) => (
// 		<Step key={label}>
// 			<StepLabel>{label}</StepLabel>
// 			<StepContent>
// 			<Typography>{getStepContent(index, data, inputnow, classes)}</Typography>
// 			<div className={classes.actionsContainer}>
// 				<div>
// 				<Button
// 					disabled={activeStep === 0}
// 					onClick={handleBack}
// 					className={classes.button}
// 				>
// 					Back
// 				</Button>
       
// 				<Button 
// 					variant="contained"
// 					color="primary"
// 					onClick={handleNext}
// 					className={classes.button}
// 				>
// 					{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
// 				</Button>
// 				</div>
// 			</div>
// 			</StepContent>
// 		</Step>
// 		))}
// 	</Stepper>
// function counter(ar) {
//   var counter = [0, 0, 0];
//   ar.forEach(function (a) {
//     if (a < 0) counter[0]++;
//     else if (a > 0) counter[2]++;
//     else counter[1]++;
//   });
//   return counter;
// }

// var result = counter(ar);
// alert("No of Negative: " + result);

//   </Container>
// 	{activeStep === steps.length && (
// 		<Paper square elevation={0} className={classes.resetContainer}>
// 		<Typography>Form is submitted</Typography>
// 		<Button onClick={handleReset} className={classes.button}>
// 			Reset
// 		</Button>
// 		</Paper>
// 	)}
// 	</div>
//     </>
//   );
// }
export default Home;
