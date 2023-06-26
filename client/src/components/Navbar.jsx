import { AppBar, Autocomplete, Box, Stack, TextField, Toolbar, Typography, styled } from '@mui/material';
import { EmojiEmotions } from '@mui/icons-material';
import { theme } from './../theme';

const avActress = ['yui hatano', 'karen kaede', 'kanako lioda'];

const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const StyledSearch = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box)(({ theme }) => ({
    backgroundColor: 'white',
}));

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolBar>
                <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
                    RYAN
                </Typography>
                <EmojiEmotions sx={{ display: { xs: 'block', sm: 'none' } }} />
                <StyledSearch>Search </StyledSearch>
                <Icons>Icons</Icons>
            </StyledToolBar>
        </AppBar>
    );
};

export default Navbar;
