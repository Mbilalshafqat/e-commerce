import {
    AppBar,
    Autocomplete,
    Box,
    Button,
    Container,
    InputBase,
    Stack,
    TextField,
    Toolbar,
    Typography,
    alpha,
    styled,
} from '@mui/material';
import { EmojiEmotions, Search } from '@mui/icons-material';
import { theme } from './../theme';

const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const SearchStyled = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
        },
    },
}));

const LeftItem = styled('div')({});

const RightItem = styled('div')({
    display: 'flex',
});

const HeroNav = styled('div')({
    display: 'flex',
});

const ButtonStyled = styled(Button)({
    color: theme.palette.common.white,
});

const ButtonLogin = styled(Button)({
    backgroundColor: theme.palette.common.white,
});

const Icons = styled(Box)(({ theme }) => ({
    backgroundColor: 'white',
}));

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <Container>
                <StyledToolBar>
                    <LeftItem>
                        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
                            RYAN
                        </Typography>
                        <EmojiEmotions sx={{ display: { xs: 'block', sm: 'none' } }} />
                    </LeftItem>
                    <HeroNav>
                        <ButtonStyled variant="text">Featured</ButtonStyled>
                        <ButtonStyled variant="text">Men</ButtonStyled>
                        <ButtonStyled variant="text">Women</ButtonStyled>
                        <ButtonStyled variant="text">Sales</ButtonStyled>
                    </HeroNav>
                    <RightItem>
                        <SearchStyled>
                            <SearchIconWrapper>
                                <Search />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                        </SearchStyled>
                        <ButtonLogin variant="contained">Sign In</ButtonLogin>
                    </RightItem>
                </StyledToolBar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
