import MyLibrary from '../../../component/page/MyLibrary';
import Home from '../../../component/page/Home';
import Header from '../../../component/organism/Header';
import BookInfo from '../../../component/page/BookInfo';
import Footer from '../../../component/organism/Footer';
import {Box, Container} from '@mui/material';
import Explore from '../../../component/organism/Explore';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes, Link, NavLink} from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import theme from '../../../theme/mainTheme'
import Blank from '../../../component/atom/Blank';
const TemplateComponent = () => {
    const [exploreOption, setExploreOption] = useState<boolean>(false);
    const [blankStatus, setBlankStatus] = useState<boolean>(false);
    const handleExploreMenu = () => {
        setExploreOption(!exploreOption);
        setBlankStatus(!exploreOption);
    };
    const [books, setBooks] = useState<any>(null);
    const [data, setData] = useState<any>(null);
    const [library, setLibrary] = useState<any>(null);
    useEffect(() => {
        const processor = async () => {
            let response = await fetch('http://localhost:3004/extra');
            let data = await response.json();
            setData(data); 
            response = await fetch('http://localhost:3004/library');
            let library = await response.json();
            setLibrary(library);
            response = await fetch('http://localhost:3004/books');
            let books = await response.json();
            setBooks(books);
        };
        processor();
    }, []);

    return (
        (!data || !library || !books) 
        ?
        <Container sx={{display: 'flex', justifyContent:'center', alignItems: 'center', height: '100vh'}}>
        <CircularProgress /> 
        </Container>
        :
        <Box sx={{position: 'relative', height: '100vh'}}>
            <Router>
                <Header 
                    url= '/assets/logo.png'
                    name= 'Blinkist'
                    handleExploreMenu={handleExploreMenu}
                    exploreOption={exploreOption}
                    books={books}
                    blankStatus={blankStatus}
                    setBlankStatus={setBlankStatus}
                />
                <Box sx={{position: 'absolute', top: '93px', width: '100%'}}>
                    <Routes>
                        <Route path="/library" element={<MyLibrary books={books} setBooks={setBooks} library={library} setLibrary={setLibrary}/>} />
                        <Route path="book-info/:bookId" element={<BookInfo library={library} setLibrary={setLibrary}/>} />
                        <Route path="/" element={ <Home books={books} setBooks={setBooks} data={data} setData={setData} library={library} setLibrary={setLibrary} /> }/>
                        <Route
                            path="*"
                            element={
                                <div style={{ padding: "1rem" }}>
                                    <p>There's nothing here!</p>
                                </div>
                            }
                        />
                    </Routes>
                    <Footer sx={{
                        height:'367px',
                        width:'100%', 
                        backgroundColor: '#F1F6F4',
                        display: 'flex',
                        position: 'sticky',
                        top: '100vh',
                        padding: '24px 0px',
                        marginTop: '24px'
                    }} />
                    {exploreOption ? <Explore /> : ''}
                    
                </Box>
            </Router>
            {blankStatus ? <Blank /> : '' }
        </Box>
    )
}

export default TemplateComponent;