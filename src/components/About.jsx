import { Box, Typography } from "@mui/material"
import { Fragment } from "react";
import { ArrowRight, MoveRight } from "lucide-react";

const About = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            p: 2,
            gap: 4,
        }}>
            {/* Left Column – Introduction */}
            <Box sx={{ flex: 1, maxWidth: { md: '50%' } }}>
                <Typography variant="h6" sx={{ color: '#3B80E8', mb: 1 }}>
                    ___01 - ABOUT ME
                </Typography>
                <Typography variant="h2" sx={{ color: '#E0F2FE', fontWeight: 'bold', mb: 2 }}>
                    Who I Am
                </Typography>
                <Typography variant="body1" sx={{ color: '#E0F2FE', mb: 2 }}>
                    I'm a passionate Frontend Web Developer who loves crafting visually stunning and technically solid web interfaces. My focus is on writing clean, maintainable code that delivers real results.
                </Typography>
                <Typography variant="body1" sx={{ color: '#E0F2FE' }}>
                    After completing an intensive frontend curriculum, I've mastered the full modern stack — from semantic HTML & CSS layouts to complex React + Redux applications and Material UI design systems.
                </Typography>
                <Box sx={{
                    bgcolor: '#061026',
                    mt: 3,
                    p: 2,
                    borderLeft: '4px solid #3B82F6',
                }}>
                     <Typography sx={{ color: '#E0F2FE' }}>
                         🎯 Currently seeking my first frontend developer role where I can contribute meaningfully and grow with the team.
                         <span style={{ color: '#64748B' }}>Committed • Ship Ready</span>
                     </Typography>
                </Box>
            </Box>
                {/* Right Column – Stats */}
                <Box sx={{ flex: 1, maxWidth: { md: '50%' }, display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ color: '#3B82F6', fontWeight: 'bold', fontSize: '48px' }}>6+</Typography>
                            <Typography sx={{ color: '#64748B' }}>Tech Mastered</Typography>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ color: '#3B82F6', fontWeight: 'bold', fontSize: '48px' }}>10+</Typography>
                            <Typography sx={{ color: '#64748B' }}>Projects Built</Typography>
                        </Box>
                    </Box>
                    
                </Box>
                
                {/* </Box> */}
            </Box>

    );
}

export default About;