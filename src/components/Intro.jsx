import { Typography, Box, Button, colors } from "@mui/material";

const Intro = () => {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <Typography variant="h1"
                    sx={{
                        fontWeight: 'bold',
                        color: '#E0F2FE'
                    }}>
                    Ammar Mehdi
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        color: '#E0F2FE'
                    }}>
                    ---Frontend Developer
                </Typography>
                <Typography variant="p" sx={{
                    color: '#64748B'
                }}>
                    I build beautiful, fast, and accessible web experiences — turning ideas<br />
                    into polished products with React, Redux, and Material UI.
                </Typography>
                <Box sx={{

                }}>
                    <ul style={{
                        display: 'flex',
                        gap: '20px',
                        // my: '20px',
                        color: '#64748B',
                        listStyle: 'none',
                        '&:hover': {
                            color: "#ffffff"
                        }
                    }}>
                        <Box sx={{
                            bgcolor: '#071128',
                            px: '20px',
                            py: '4px',
                            borderRadius: '20px',
                            '&:hover': {
                                color: '#3B81F4'
                            }
                        }}>
                            <li sx={{
                                '&:hover': {
                                    color: 'red'
                                }
                            }}>HTML5</li>
                        </Box>
                        <Box sx={{
                            bgcolor: '#071128',
                            px: '20px',
                            py: '4px',
                            borderRadius: '20px', '&:hover': {
                                color: '#3B81F4'
                            }
                        }}>
                            <li>CSS3</li>
                        </Box>
                        <Box sx={{
                            bgcolor: '#071128',
                            px: '20px',
                            py: '4px',
                            borderRadius: '20px', '&:hover': {
                                color: '#3B81F4'
                            }
                        }}>
                            <li>JavaScript</li>
                        </Box>
                        <Box sx={{
                            bgcolor: '#071128',
                            px: '20px',
                            py: '4px',
                            borderRadius: '20px', '&:hover': {
                                color: '#3B81F4'
                            }
                        }}>
                            <li>React 18</li>
                        </Box>
                        <Box sx={{
                            bgcolor: '#071128',
                            px: '20px',
                            py: '4px',
                            borderRadius: '20px', '&:hover': {
                                color: '#3B81F4'
                            }
                        }}>
                            <li>Redux</li>
                        </Box>
                        <Box sx={{
                            bgcolor: '#071128',
                            px: '20px',
                            py: '4px',
                            borderRadius: '20px', '&:hover': {
                                color: '#3B81F4'
                            }
                        }}>
                            <li>Material UI</li>
                        </Box>
                        <Box sx={{
                            bgcolor: '#071128',
                            px: '20px',
                            py: '4px',
                            borderRadius: '20px', '&:hover': {
                                color: '#3B81F4'
                            }
                        }}>
                            <li>Responsive Design</li>
                        </Box>
                    </ul>
                </Box>
                <Box sx={{

                }}>
                    <Button variant="contained" sx={{
                        bgcolor: '#3B82F6',
                        borderRadius: '10px',
                        mr: '10px'
                    }}>View Project</Button>
                    <Button variant="outlined"
                        sx={{
                            bgcolor: '#08142E',
                            color: '#FFFFFB',
                            fontWeight: 'bold',
                            borderRadius: '10px',
                            ml: '10px'
                        }}>Let,s Talk</Button>
                </Box>

            </Box>
            <Box></Box>
        </Box>
    )
}
export default Intro;