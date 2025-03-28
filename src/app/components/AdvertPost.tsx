// import React, {useState} from 'react';
// import {Box, Button, Stack, Typography, Divider, ButtonGroup, Chip} from '@mui/material';
// import {styled} from "@mui/system";
//
// // Custom styled ButtonGroup component
// const ToggleButtonGroup = styled(ButtonGroup)(({ theme }) => ({
//     borderRadius: '8px',
//     padding: '4px',
//     boxShadow: 'none',
//     border: '1px solid #e0e7ff',
//     maxHeight: "34px",
//     width: "90%",
// }));
//
// // Custom styled Button component
// const ToggleButton = styled(Button)(({ theme, selected }) => ({
//     padding: '10px 20px',
//     borderRadius: '4px !important',
//     border: 'none',
//     textTransform: 'none',
//     fontWeight: 500,
//     fontSize: '12px',
//     backgroundColor: selected ? '#035eff' : 'transparent',
//     color: selected ? 'white' : '#64748b',
//     '&:hover': {
//         backgroundColor: selected ? '#035eff' : '#1a83ff',
//         color: 'white',
//         border: 'none',
//     },
//     boxShadow: selected ? '0px 2px 4px rgba(59, 130, 246, 0.3)' : 'none',
//     margin: '0 4px',
//     width: '100%',
// }));
//
// // Custom styled Chip component
// const DiscountChip = styled(Chip)(({ theme }) => ({
//     backgroundColor: '#e0e7ff',
//     color: '#035eff',
//     fontWeight: 'bold',
//     borderRadius: '8px',
//     fontSize: '10px !important',
//     height: '24px',
//     marginLeft: '8px',
// }));
//
// const PricingToggle = () => {
//     const [billingCycle, setBillingCycle] = useState('monthly');
//
//     const handleToggle = (cycle) => {
//         setBillingCycle(cycle);
//     };
//
//     return (
//         <Box sx={{ display: 'flex', width: '100%', }}>
//             <ToggleButtonGroup size={"small"}>
//                 <ToggleButton
//                     selected={billingCycle === 'monthly'}
//                     onClick={() => handleToggle('monthly')}
//                 >
//                     Monthly
//                 </ToggleButton>
//                 <ToggleButton
//                     selected={billingCycle === 'annually'}
//                     onClick={() => handleToggle('annually')}
//                     sx={{ display: 'flex', alignItems: 'center' }}
//                 >
//                     Annually
//                     <DiscountChip label="-33%" size="small" />
//                 </ToggleButton>
//             </ToggleButtonGroup>
//         </Box>
//     );
// };
//
// const AdvertPost = () => {
//     return (
//         <Box sx={{paddingY: 10, backgroundColor: 'rgb(20, 20, 20)'}} display={"flex"} borderRadius={"20px"} flexDirection={"column"} alignItems={"center"} position={"relative"} overflow={"hidden"}>
//             <Box sx={{
//                 position: "absolute",
//                 top: "76px",
//                 left: "-210px"
//             }}>
//                 <img alt="round-tire" loading="lazy" width="394" height="452" decoding="async" data-nimg="1"
//                      src="round-tire.png"/>
//             </Box>
//             <Box sx={{
//                 position: "absolute",
//                 bottom: "67px",
//                 right: "-163px"
//             }}>
//                 <img alt="round-abstract" loading="lazy" width="323" height="371" decoding="async" data-nimg="1"
//                      src="round-abstract.webp"/>
//             </Box>
//
//             <Box maxWidth={440}>
//                 <Box content={"p"} color={"white"} marginBottom={4} fontWeight={600} fontSize={24} className="MuiTypography-root MuiTypography-body1 AdvertPost_tryCryptoText___3L9a css-1tg8x4k">Once you
//                     try Cryptonary, You’ll never go back to researching on your own</Box>ň
//
//                 <Box borderRadius={"12px"} backgroundColor={"white"} paddingX={3} paddingY={2}>
//                     <Typography variant={"body1"} className="AdvertPost_chosePathText__C131Z" fontSize={22} fontWeight={700} marginBottom={2}>Choose
//                         your path</Typography>
//                     <PricingToggle />
//
//                     <Stack direction={"row"} marginTop={3} justifyContent={"space-between"}>
//                         <Typography variant={"body1"} fontSize={16} fontWeight={400}>
//                             Subscription price
//                         </Typography>
//                         <Stack direction={"row"} alignItems={"center"}>
//                             <Typography fontSize={32} fontWeight={700}>
//                                 $0
//                             </Typography>
//                             <Typography fontSize={24} fontWeight={500} pl={1} color={"rgb(130, 150, 176)"} sx={{textDecoration: "line-through"}}>
//                                 $482
//                             </Typography>
//                         </Stack>
//                     </Stack>
//                 </Box>
//             </Box>
//         </Box>
//     );
// };
//
// export default AdvertPost;
