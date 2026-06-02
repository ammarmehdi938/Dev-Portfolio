import { Box } from '@mui/material'
import Header from '../components/header'
import Intro from '../components/Intro'
import About from '../components/About'
import Skills from '../components/Skills'

const Page = () => {

    return (
        <Box sx={{ h: '100vh', m: 0, px: '20px', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Intro />
            <About />
            <Skills />
        </Box>
    )
}
export default Page
