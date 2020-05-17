import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import brainImage from "../../assets/images/Neural-Network-2.svg";
import easylife from '../../assets/images/easylife.svg';
import Button from '@material-ui/core/Button';
import '../home/home.scss';
import $ from 'jquery';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link, animateScroll as scroll } from "react-scroll";

$(window).on("load", function () {
  function createRecruitmentProcess() {
    let path = document.querySelector(".ring-bg");
    let length = path || path.getTotalLength();
    let ring = $(path),
      noPoints = parseInt($(".recruitment-wrap").attr("data-points"), 10),
      currentPoint = 0,
      lastPoint = 0,
      plane = $(".plane-wrap"),
      animating = false,
      recruitmentText = $(".recruitment-text");


    function changeTextHeight(a) {
      var newHeight = $(".step:nth-child(" + (a + 1) + ")").outerHeight();
      recruitmentText.css("height", newHeight);
    }

    // Generate points
    for (var i = 0; i < noPoints; i++) {
      // Add points to DOM
      $(".point-wrap").append(
        '<div class="point"><div class="point-inner"><div class="point-transform"><span>' +
        (i + 1) +
        "</span></div></div></div>"
      );

      // Add dots to DOM
      $(".dots").append('<div class="dot"></div>');

      // Set point position
      $(".point:nth-child(" + (i + 1) + ")")
        .css({
          transform: "translateY(-50%) rotate(" + (360 / noPoints) * i + "deg)"
        })
        .find(".point-inner")
        .css({
          transform: "rotate(" + (-360 / noPoints) * i + "deg)"
        });
    }

    // Add default state
    $(".point:nth-child(1)").addClass("active");
    $(".dot:nth-child(1)").addClass("active");
    $(".step:nth-child(1)").addClass("active");

    // Set line animation to 0
    ring.css({
      "stroke-dasharray": length,
      "stroke-dashoffset": length
    });

    changeTextHeight(0);

    // Add animation to line
    setTimeout(function () {
      ring.addClass("animate");
    }, 10);

    // Change point. 'a' being chosen point
    function changePoint(a) {
      animating = true;

      setTimeout(function () {
        animating = false;
      }, 1000);

      // Change active point
      $(".point.active").removeClass("active");
      $(".point:nth-child(" + (a + 1) + ")").addClass("active");

      $(".dot.active").removeClass("active");
      $(".dot:nth-child(" + (a + 1) + ")").addClass("active");

      // Change Text
      var lastText = $(".step.active");

      lastText.addClass("next").removeClass("active");

      setTimeout(function () {
        lastText.removeClass("next");
      }, 800);

      setTimeout(function () {
        $(".step:nth-child(" + (a + 1) + ")").addClass("active");
      }, 100);

      changeTextHeight(a);

      // Reverse direction of plane
      if (lastPoint > currentPoint) {
        plane.addClass("reverse");
      } else {
        plane.removeClass("reverse");
      }

      // Get plane rotation
      var rotation = (360 / noPoints) * a;

      // Change position of plane's shadow based on rotation
      if (rotation > 90 && rotation < 270) {
        plane.addClass("shadow");
      } else {
        plane.removeClass("shadow");
      }

      // Work out animation duration
      var difference = lastPoint - a;

      if (difference < 0) {
        difference = difference * -1;
      }

      var animationDuration = 1000 + 300 * difference;

      // Rotate plane
      plane.css({
        transition:
          animationDuration + "ms all cubic-bezier(0.645, 0.045, 0.355, 1)",
        transform: "translateY(-50%) rotate(" + rotation + "deg)"
      });

      // Animate ring
      ring.css({
        transition:
          animationDuration + "ms all cubic-bezier(0.645, 0.045, 0.355, 1)",
        "stroke-dasharray": length,
        "stroke-dashoffset": length - (length / noPoints) * a
      });

      // Animate Center
      var frames = 24,
        counter = 0,
        center = $(".center-wipe");
      setTimeout(function () {
        var interval = setInterval(function () {
          counter++;
          center.css({
            "background-position": -counter * 100 + "%"
          });

          if (counter === frames / 2) {
            $(".center-img").removeClass("active");
            $(".center-img:nth-child(" + (a + 1) + ")").addClass("active");
          }

          if (counter > frames - 1) {
            clearInterval(interval);
            return;
          }
        }, (100 / 60) * 24);
      }, 300);
    }

    // Click interaction with point
    $(".recruitment-wrap").on("click", ".point", function () {
      if (animating) {
        return;
      }
      if ($(this).hasClass("active")) {
        return;
      }
      lastPoint = currentPoint;
      currentPoint = $(this).index();

      changePoint(currentPoint);
    });

    // Click Interaction with dot
    $(".recruitment-text").on("click", ".dot", function () {
      if (animating) {
        return;
      }
      if ($(this).hasClass("active")) {
        return;
      }
      lastPoint = currentPoint;
      currentPoint = $(this).index();

      changePoint(currentPoint);
    });

    // Click interaction with Arrow
    $(".arrow").on("click", function () {
      if (animating) {
        return;
      }
      var direction = parseInt($(this).attr("data-direction"), 10);
      lastPoint = currentPoint;

      currentPoint += direction;

      if (currentPoint > noPoints - 1) {
        currentPoint = 0;
      }

      if (currentPoint < 0) {
        currentPoint = noPoints - 1;
      }

      changePoint(currentPoint);
    });

    $(window).on("resize", function () {
      var resizeTimer;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        changeTextHeight(currentPoint);
      }, 250);
    });
  }
  createRecruitmentProcess();
});
const useStyles = (theme) => ({
  root: {
    paddingTop: '50px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  color: {
    display: 'flex',
    alignItems: 'center',
    '& div:first-of-type': {
      width: theme.spacing(6),
      height: theme.spacing(6),
      marginRight: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
    },
  },
  '@media screen and (max-width: 600px)': {
    display: 'block',
    marginRight: 50
  },
});
const features = [
  {
    image: require('../../assets/images/features/loanbyphone.svg'),
    title: 'Avail loan through smartphone',
    description: 'A mobile app-only service that puts personal loans just a few swipes away.',
  },
  {
    image: require('../../assets/images/features/flexiblepaymentplan.svg'),
    title: 'Flexible Payment Plan',
    description: 'Can’t meet a rigorous repayment schedule? Repay your loan, your way.',
  }, {
    image: require('../../assets/images/features/quickdisbursal.svg'),
    title: 'Quick Disbursal',
    description: 'Has your application been approved? Good news, your money’s speedily on its way!',
  }, {
    image: require('../../assets/images/features/lowinterest.svg'),
    title: 'Low Interest Rates',
    description: 'Our flat, low interest rates make personal loans affordable, accessible and easily repayable.',
  }, {
    image: require('../../assets/images/features/paperless.svg'),
    title: 'Paperless Approvals',
    description: 'Tired of piles of paperwork? We don’t need you to write anything on paper. Upload minimal documentation digitally.',
  }, {
    image: require('../../assets/images/features/advancesalary.svg'),
    title: 'Get up to 200% of your salary in advance',
    description: 'Our loans allow you to receive up to double your salary, and earlier than expected. Receive up to Rs. 40,000 at a time.',
  },
]
const factsContent = [
  {
    para: 'Well we’re not going to bore you with our history, the number of vacancy we have closed, or the awards we’ve won. What we do and why we do it are all you need to know.'
  },
  {
    para: 'Connecting best people to companies in need of their skills is at the very heart of what we do. That’s because in a world where nothing is permanent, job seekers and employers are continually trying to choose the best company and best talent.'
  },
  {
    para: 'The next thing in life and quest for advancement means careers are continually in motion. The next business strategy and journey for growth means employers are continually evaluating their workforce effectiveness. At Alita, we’re always thinking about what’s best for job seekers and employer.'
  },
  {
    para: "Our Team—those who work behind the scenes to make it all happen is unique in their understanding and commitment to helping others create better futures and helping companies compete, prosper, and grow. That’s because the work we do matters. Helping people transform their lives matters. Shaping the future of work matters."
  },
  {
    para: 'So for the workers and companies who are always in pursuit of what’s Best, we’re right there with you, writing the story of work together. Because what’s best is what matters. And what’s best is what we’re all about.'
  },
  {
    para: 'At Alita, we understand that your company’s most important driver of growth is your people. With a nationwide reach, a network of highly qualified candidates, extensive knowledge of local markets and industry-specific expertise, we pride ourselves on finding candidates who are the best fit for your business, and your long-term goals. So let the best people work for you and Find talent now.'
  }
]
const easyLifeContent = [
  {
    heading: 'Established network, extended reach',
    para1: 'Perhaps the number one reason to engage Alita recruiting and staffing support is the network that webring to bear. Because our recruiters specialize in a business sector and functional area, their web of talent is wide, multi-layered and sticky.',
    para2: 'In addition to access to fresh talent actively looking to make a job move, we also have the inside track to the most difficult to reach talent-the passive candidates. This pool of hidden talent is contentedly employed – often by your competitors– and may be ‘blind’ to job postings and ‘deaf’ to outreach from hiring managers. We have established relationships with these candidates and are often more effective in getting them to consider an opportunity.'
  },
  {
    heading: 'Singular focus, no distractions',
    para1: 'You’re probably a rock star at what you do for work. But is recruiting in your job description? And do you even have time for that? Last we checked, almost everyone is stretched pretty thin in today’s workplace. Your work hours should be spent delivering against your core competency and crushing your business objectives. Plus, remember, time is money. Alita have the recruiting and hiring process optimized for maximum efficiency and returns. This, along with their singular focus, will speed the time to hire.',
  },
  {
    heading: 'Sifting, screening, substantiating',
    para1: 'There’s no question that technology and the Internet continue to make life easier. That includes how simple it has become for applicants to respond to job openings on digital job boards or postings on your website. Imagine all those applications as seedlings in a wide open field – a few of those might be beautiful flowers, but the majority of those are going to be weeds. Do you have the time and expertise to discern between the two? A single posting could generate hundreds to thousands of resume submissions. Alita bring the systems, processes, expertise and bandwidth needed to weed out the candidates that are the best match – from a skill, personality and company culture perspective.',
  },
  {
    heading: 'Real world, real time guidance on job specs & offers',
    para1: 'Because we have our finger on the pulse of the job market, we are an endless source of the most up to date information on ways that jobs and skill sets are evolving, how employers are structuring job offer, and what might lure the most in-demand talent. Need help developing a job description? Want to benchmark salaries for open positions? Looking for Intel on what your biggest competitor includes in their benefits package? We are invaluable in helping scope out the most compelling employment proposition.',
  },
  {
    heading: 'Guarantees mitigate the risk of hiring',
    para1: 'A bad hire can be costly – in terms of money lost, time wasted, and team morale hurt. For recruiters, it can also mean not being paid on the placement, as we offer a guarantee on the search and hire. With skin in the game, this makes us highly motivated to make sure the candidates we present will be successful at your company. But, should you decide to recruit on your own, and the hire doesn’t work out, the breakdown falls on your shoulders. Ensure a great outcome and keep your reputation golden by wisely choosing an expert recruiter – Alita'
  }
]
const recruitmentProcess = [
  {
    heading: '1. Preparing the Job Description',
    para1: 'First and one of the most important aspects is a good JD to know exactly what you need in terms of knowledge, skills, experience, and to determine the duties and responsibilities of the job. Preparing a comprehensive job description (JD) will help us know what your potential employees must have in order to meet the demands of the role. More importantly, it provides your prospects with a checklist or a list that they can compare themselves to before applying. It is a tool to ensure that you get applications from the right candidates. We share the JD and double check with the client to make sure that there is no communication gap before starting the work.',
  },
  {
    heading: '2. Talent Search',
    para1: 'Identifying the right talent, attracting them and motivating them to apply are the most important aspects of Alita’s process. The job listing should be advertised internally to generate referrals as well as externally on popular social networking sites and preferred job boards. We use 4 different platforms to cast a wider network.',
  },
  {
    heading: '3. Screening, Interviewing',
    para1: 'This is where the recruitment process gets difficult and challenging. You can resolve this recruitment bottleneck by following these four steps:',
    para2: 'We screen applications on the basis of minimum qualifications and then sort resumes that have the preferred credentials by looking at their certifications, relevant experience, domain expertise, technical competencies and other specific skills that are required for the role. Then we shortlist candidates who have both the preferred credentials and the minimum qualifications and then finally, flag any concerns or queries in the resume so they can be clarified during the interview.',
  },
  {
    heading: '4. Telephonic /Video Interviewing/ 2nd level Interview',
    para1: 'This is a quick, easy and convenient way to screen candidates and their capabilities. The telephonic or video interview is also our first opportunity to leave a lasting first impression on your potential employees. So, we make sure to take the time to screen them against the knowledge, skills and experience mentioned in your job description, so we can eliminate the irrelevant profiles first. Then shortlisted candidate move to the 2nd level interview process where our experienced recruiter take their 2nd level interviews to make sure that the candidate we share with client are the Best.',
  },
  {
    heading: '5. Shortlisting and Offer of Employment',
    para1: 'This is a where you enters in the selection process because the information revealed from this assessment will help you know if your potential employees will perform and stay productive in the long haul. This screening is absolutely unbiased yet an important eliminator that efficiently identifies the right fit for any job. Psychometric tests can be your reference model for any given position because these tests specify the complete personality profile, behavior, flexibility, aptitude, creativity, communication and problem-solving skills that are required to perform in a given position.',
    para2: 'Personal interviews can last longer because this is the last step before the recruiter does a final evaluation and makes the job offer. Final interviews may be conducted by the top management and are typically extended to a very small pool of standout candidates. The final choice should be agreed upon at this stage along with a backup candidate selection.'
  }
]

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // open: false, value: 0,
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className="mainhome section padding-top-big padding-bottom over-hide" style={{ backgroundImage: "url(" +brainImage+ ")", backgroundColor: '#0058f2', backgroundPosition: 'center left', backgroundRepeat: 'no-repeat' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 section-title-wrap text-center parallax-fade-top">
                {/* <img src={backImage} alt="" srcset=""/> */}
                <h1><strong>welcome to<br />alita</strong></h1>
                <p className="text-white">hire great people to build a great company</p>
              </div>
              <div className="col-12 section-title-wrap text-center parallax-fade-top">
                <Button variant="contained" color="secondary" style={{ borderRadius:"20px", marginTop: '10px', borderColor: "#0058f2" }}>
                  Request Demo
                </Button>
                </div>
            </div>
          </div>
        </div>
        <div className="wrapper facts-content">
          <h1 className="wrapper-head">Facts Are Enough For Your Trust</h1>
          <div className="entry-content">
            {factsContent.map((item, index) =>
              <p dir="ltr">{item.para}</p>
            )}
          </div>
        </div>
        <div className="parent-feature-cards">
          <h1>Features</h1>
          <div className="feature-cards">
            {
              features.map((item, index) =>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={item.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2" display="block" noWrap={0}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                  </CardActions>
                </Card>
              )
            }
          </div>
        </div>
        <div className="container easier">
          <h1>How Alita Makes Your Life Easier</h1>
          <div className="row">
            <div className="col-sm-4">
              <img src={easylife} alt="startupimg" style={{ maxWidth: "100%" }} />
            </div>
            <div className="col-sm-8">
              {
                easyLifeContent.map((item, index) =>
                  <div>
                    <p><strong>{item.heading}</strong></p>
                    <p>{item.para1}</p>
                    <p>{item.para2}</p>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <section>

        </section>
        <section className="recruitment-process">
          <h1 className="wrapper-head">Recruitment Process</h1>
          <div className="grid">
          </div>
          <div className="grid">
            <div className="recruitment-wrap" data-points="5">
              <div className="plane">
                <div className="plane-wrap">
                  A
                </div>
              </div>

              <div className="center">
                <div className="center-wipe"></div>
                <div className="center-imgs">
                  <div className="center-img active"></div>
                  <div className="center-img"></div>
                  <div className="center-img"></div>
                  <div className="center-img"></div>
                  <div className="center-img"></div>
                </div>
              </div>
              <div className="ring" style={{ backgroundColor: "blue" }}>
                <svg>
                  <circle className="ring-bg" cx="50%" cy="50%" r="200" />
                  <circle className="dash" cx="50%" cy="50%" r="200" />
                </svg>
              </div>
              <div className="point-wrap">
              </div>
            </div>
            <div className="recruitment-text">
              <div className="recruitment-copy">
                {
                  recruitmentProcess.map((item) =>
                    <div className="step">
                      <h3>{item.heading}</h3>
                      <p>{item.para1}</p>
                      <p>{item.para2}</p>
                    </div>
                  )
                }
              </div>
              <div className="recruitment-controls">
                <div className="arrow prev" data-direction="-1"></div>
                <div className="dots"></div>
                <div className="arrow next" data-direction="1"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default withStyles(useStyles)(HomeComponent);