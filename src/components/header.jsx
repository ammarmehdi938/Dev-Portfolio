import { Box, Typography, Button } from "@mui/material";

const Header = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: 'space-between',
            // margin: "20px",
            alignItems: 'center'
        }}>
            <Box sx={{
            }}>
                <Typography sx={{
                    color: "#3b82f6"
                }}>
                    Ammar Mehdi
                </Typography>
            </Box>
            <ul style={{
                display: 'flex',
                listStyle: "none",
                color: '#64748b',
                fontWeight: 'bold'
            }}
            >
                <li>
                    ABOUT
                </li>
                <li>SKILLS</li>
                <li>PROJECTS</li>
                <li>JOURNEY</li>
                <li>CONTACT</li>
            </ul>
            <Box sx={{

            }}>
                <Button variant="contained" sx={{
                    borderRadius: '20px'
                }}>
                    <Typography>HIRE ME</Typography>
                </Button>
            </Box>
        </Box>
    )

}
export default Header;