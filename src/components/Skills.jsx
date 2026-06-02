import { Box, Typography } from "@mui/material"
import { Bold } from "lucide-react"

const Skills = () => {

    return (
        <Box sx={{
            bgcolor: '#030B1C',
            pt: '50px',
            // height:100,px
        }}>
            <Box sx={{ flex: 1, maxWidth: { md: '50%' } }}>
                <Typography variant="h6" sx={{ color: '#3B80E8', mb: 1 }} >
                    ___02 - SKILLS

                </Typography>
                <Typography variant="h2" sx={{
                    color: '#E0F2FE', mb: 2,

                    fontWeight: "bold"
                }}>
                    What I Work With
                </Typography>
                <Typography variant="p" sx={{
                    color: '#64748B'
                }}>
                    A complete modern frontend toolkit — from layouts and animations to state management and design systems.


                </Typography>

            </Box>
        </Box>
    )
}

export default Skills