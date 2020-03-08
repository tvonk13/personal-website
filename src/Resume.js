import React, { Fragment } from "react";
import { makeStyles, Typography, Container, Grid, Box, List, ListItem, Divider } from "@material-ui/core";
import Section from './Resume/Section.js'
import JobContent from "./Resume/JobContent.js";
import KnowledgeItem from "./Resume/KnowledgeItem.js";
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ProfileSmall from './assets/profile-small.svg';

const useStyles = makeStyles(themeObject => ({
  spacer: themeObject.mixins.toolbar,
  resume: {
    paddingTop: 30,
    marginBottom: 50
  },
  name: {
    textAlign: 'center',
    fontFamily: 'Neucha'
  },
  profileSmall: {
    height: 100
  },
  location: {
    display: 'inline'
  },
  divider: {
    height: 125
  },
  blurb: {
    width: 500
  }
}));

function Resume() {
  const styles = useStyles();

  return (
    <Fragment>

      <Box className={styles.spacer}></Box>

      <Container maxWidth="md" className={styles.resume}>

        <Grid container justify="flex-start" direction="column" spacing={5}>

          {/* HEADER */}
          <Grid item>
            <Grid container direction="column" justify="flex-start" alignItems="center" spacing={1}>

              {/* NAME */}
              <Grid item>
                <Typography variant="h3" className={styles.name}>Taylor Vonk</Typography>
              </Grid>

              {/* DETAILS AND BLURB */}
              <Grid item>
                <Grid container direction="row" justify="center" alignItems="flex-start" wrap="nowrap" spacing={3}>

                  {/* DETAILS */}
                  <Grid item>
                    <Grid container direction="column" alignItems="center">
                        <Grid item>
                          <img src={ProfileSmall} className={styles.profileSmall}/>
                        </Grid>
                        <Grid item>
                          <LocationOnRoundedIcon fontSize="small"/>
                          <Typography className={styles.location}>San Francisco, CA</Typography>
                        </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Divider flexItem orientation="vertical" className={styles.divider}/>
                  </Grid>

                  {/* BLURB */}
                  <Grid item>
                    <Typography variant="body1" className={styles.blurb}>
                      <em>
                      Driven software engineer who is a great team player and is eager to grow in the field of computer science. 
                      Enjoys learning through hands-on projects and by working with fellow developers. Has experience using Java, 
                      JSP, JavaScript and web frameworks to build RESTful APIs and web applications.
                      </em>
                    </Typography>
                  </Grid>

                </Grid>
              </Grid>

            </Grid>
          </Grid>

          {/* EDUCATION */}
          <Grid item>
            <Section name="Education">
              <JobContent 
                date="Jul 2018" 
                title="Northeastern University" 
                subtitle="Bachelors degree in Computer Science and Cognitive Psychology"
                bullets={[
                  "Took classes in object oriented design, algorithms and data, computer systems, software development, web development, and artificial intelligence.",
                  "Received honors in psychology and was on the Dean's list for 3 semesters."
                ]} />
            </Section>
          </Grid>

          <Grid item>
            <Section name="Experience">
              <JobContent
                date="Aug 2018 - Present"
                title="Software Engineer"
                subtitle="Clinical Research IO, Boston, MA"
                bullets={[
                  "Architect and execute new features from start to finish while working closely with the UX team and product managers",
                  "Quickly and efficiently implement solutions for client issues through bug patches and data fixes",
                  "Help maintain the product by continually improving existing code, feature designs, and infrastructures"
                ]} />

              <JobContent
                date="Jul 2017 - Dec 2017"
                title="Software Engineering Intern"
                subtitle="Novartis Institute of Biomedical Research, Cambridge, MA"
                bullets={[
                  "Reduced redundancy and inefficiency in current and future tools for managing data by developing a RESTful middleware layer using JavaScript and AWS.",
                  "Communicated directly with end-users to come up with tailored solutions to fit their needs.",
                  "Continually integrated and improved on work by participating in an agile work-flow and by incorporating daily feedback from other developers."
                ]} />

              <JobContent
                date="Mar 2017 - Jul 2018"
                title="Student Supervisor"
                subtitle="Northeastern Information Technology Services, Boston, MA"
                bullets={[
                  "Oversaw other student employees and ensure that all roles were being filled properly.",
                  "Helped walk-up customers with troubleshooting technical issues.",
                  "Ensured that technical and printing services managed by the ITS department were functioning properly."
                ]} />

            </Section>
          </Grid>

          <Grid item>
            <Section name="Languages/Frameworks">
              <Grid container direction="row" justify="flex-start" spacing={10}>
                <Grid item>
                  <List>
                    <ListItem> <KnowledgeItem name="CSS" level={3} /> </ListItem>
                    <ListItem> <KnowledgeItem name="HTML" level={3} /> </ListItem>
                    <ListItem> <KnowledgeItem name="Java" level={4} /> </ListItem>
                    <ListItem> <KnowledgeItem name="JavaScript" level={3} /> </ListItem>
                  </List>
                </Grid>
                <Grid item>
                  <List>
                    <ListItem> <KnowledgeItem name="React" level={2} /> </ListItem>
                    <ListItem> <KnowledgeItem name="SQL" level={2} /> </ListItem>
                    <ListItem> <KnowledgeItem name="Struts" level={3} /> </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Section>
          </Grid>

          <Grid item>
            <Section name="Software/Tools">
            <Grid container direction="row" justify="flex-start" spacing={10}>
                <Grid item>
                  <List>
                    <ListItem> <KnowledgeItem name="IntelliJ" level={4} /> </ListItem>
                    <ListItem> <KnowledgeItem name="MySQL" level={3} /> </ListItem>
                    <ListItem> <KnowledgeItem name="Git" level={3} /> </ListItem>
                    <ListItem> <KnowledgeItem name="REST Architecture" level={3} /> </ListItem>
                  </List>
                </Grid>
                <Grid item>
                  <List>
                    <ListItem> <KnowledgeItem name="AWS" level={1} /> </ListItem>
                    <ListItem> <KnowledgeItem name="GCP" level={2} /> </ListItem>
                    <ListItem> <KnowledgeItem name="Struts" level={3} /> </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Section>
          </Grid>

          <Grid item>
            <Section name="Interests">
              <List>
                <ListItem><Typography>Rock climbing</Typography></ListItem>
                <ListItem><Typography>Reading sci-fi/fantasy adventure books and graphic novels</Typography></ListItem>
                <ListItem><Typography>Playing board and RPG games</Typography></ListItem>
                <ListItem><Typography>Drawing, painting, and illustrating</Typography></ListItem>
              </List>
            </Section>
          </Grid>

        </Grid>

      </Container>

    </Fragment>
  );
}

export default Resume;