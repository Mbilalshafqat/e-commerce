import { Button } from '@mui/material';
import { DeleteIcon } from '@mui/icons-material';

const Navbar = () => {
    return (
        <div>
            <Button variant="text">Text</Button>
            <Button startIcon={<DeleteIcon />} variant="contained">
                Container
            </Button>
            <Button variant="outline">Outline</Button>
        </div>
    );
};

export default Navbar;
