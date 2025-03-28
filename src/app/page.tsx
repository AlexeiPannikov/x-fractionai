"use client"

import React from 'react';
import {Container, Typography} from "@mui/material";
import Top from "@/app/components/Top";
import {Box, Stack} from "@mui/system";
import Main from "@/app/components/Main";

const Page = () => {
    return <Container sx={{py: '32px', px: "0px !important", maxWidth: '812px !important'}}>
        <Stack
            sx={{
                px: { xs: "32px", lg: "0px" },
            }}
        >
            <Top />

            <Box id="how-did-this-scammer-steal-millions-of-dollars?-undefined" mt={'0px'}
                 className={"singlearticlepost advertarticlepost"}>
                <Main />
            </Box>
        </Stack>
    </Container>
};

export default Page;
