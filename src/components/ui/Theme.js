import {createMuiTheme} from '@material-ui/core/styles';

const arcBlue = '#0B72B9'
const arcOrange = '#ffba60'

export default createMuiTheme({
    palette: {
        common: {
            arcBlue: `${arcBlue}`,
            arcOrange: `${arcOrange}`,
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`,
        }
    },
    typography : {
        h3 : {
            fontWeight: 400,
        },
        tab : {
            fontFamily : "Raleway",
            textTransform:'none',
            fontWeight : 700,
            fontSize :'1 rem',
        },
        estimate : {
            fontFamily : 'Pacifico',
            textTransform : 'none',
            fontSize : '1rem',
        }
    }
});