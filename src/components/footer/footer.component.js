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
                {/* <div className="row">
                    <div className="col-md-12">
                        <footer className="section footer-classic context-dark bg-image" style={{ background: "#2d3246" }}>
                            <div className="container">
                                <div className="row row-30">
                                    <div className="col-md-4 col-xl-5">
                                        <div className="pr-xl-4">
                                            <p>We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.</p>
                                            <p className="rights"><span>©  </span><span className="copyright-year">2018</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <h5>Contacts</h5>
                                        <dl className="contact-list">
                                            <dt>Address:</dt>
                                            <dd>798 South Park Avenue, Jaipur, Raj</dd>
                                        </dl>
                                        <dl className="contact-list">
                                            <dt>email:</dt>
                                            <dd><a href="mailto:#">dkstudioin@gmail.com</a></dd>
                                        </dl>
                                        <dl className="contact-list">
                                            <dt>phones:</dt>
                                            <dd><a href="tel:#">https://karosearch.com</a> <span>or</span> <a href="tel:#">https://karosearch.com</a>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="col-md-4 col-xl-3">
                                        <h5>Links</h5>
                                        <ul className="nav-list">
                                            <li><a href="#About">About</a></li>
                                            <li><a href="#Project">Projects</a></li>
                                            <li><a href="#Blog">Blog</a></li>
                                            <li><a href="#Contact">Contacts</a></li>
                                            <li><a href="#Pricing">Pricing</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters social-container">
                                <div className="col"><a className="social-inner" href="#fb"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
                                <div className="col"><a className="social-inner" href="#insta"><span className="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
                                <div className="col"><a className="social-inner" href="#tweet"><span className="icon mdi mdi-twitter"></span><span>twitter</span></a></div>
                                <div className="col"><a className="social-inner" href="#google"><span className="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
                            </div>
                        </footer >
                    </div>
                </div> */}
            </div>
        )
    }
}
export default withStyles(useStyles)(FooterComponent);