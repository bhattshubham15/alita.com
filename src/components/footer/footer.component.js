import React, { Component } from 'react'
import './footer.css';
import Button from '@material-ui/core/Button';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = (theme) => ({
    root: {
        // maxWidth: 600,
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
        marginTop: '20px',
      },
})
const action = (
    <div>
    <CopyrightIcon color="secondary" />
    <Button color="secondary" size="small">
      Alita 2020
    </Button>        
    </div>

  );
class FooterComponent extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <SnackbarContent className="footer"
                    message={
                        'Email: alita@gmail.com'
                    }
                action={action}
                />
            </div>
        )
    }
}
export default withStyles(useStyles)(FooterComponent);