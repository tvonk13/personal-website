import React, { useState, useEffect } from "react";
import { makeStyles, Container, Grid, List, ListItem, Fade, Box } from "@material-ui/core";
import Section from './Section'
import JobContent from "./JobContent";
import KnowledgeItem from "./KnowledgeItem";
import ResumeHeader from "./ResumeHeader";

const useStyles = makeStyles(theme => ({
    resumeContainer: {
        [theme.breakpoints.down('xs')]: {
          marginTop: theme.spacing(5),
        },
        minHeight: `calc(100vh - ${theme.spacing(28)}px)`,
    },
    resume: {
        margin: theme.spacing(6, 0, 10, 0),
        flexGrow: 1,
    },
    resumeItem: {
        marginBottom: theme.spacing(4),
    },
    skillColumn: {
        flexGrow: 1
    },
}));

function Resume() {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])

  return (
      <Fade in={loaded} timeout={500}>
          <Container maxWidth="md" className={classes.resumeContainer}>
              <Grid container direction="column" className={classes.resume}>
                  {/* HEADER */}
                  <Grid item className={classes.resumeItem}>
                      <ResumeHeader />
                  </Grid>

                  {/* EDUCATION */}
                  <Grid item className={classes.resumeItem}>
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

                  <Grid item className={classes.resumeItem}>
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

                  <Grid item className={classes.resumeItem}>
                      <Section name="Languages/Frameworks*">
                          <Grid container direction="row" justify="flex-start">
                              <Grid item className={classes.skillColumn}>
                                  <List>
                                      <ListItem> <KnowledgeItem name="JavaScript" level={5} /> </ListItem>
                                      <ListItem> <KnowledgeItem name="React" level={4} /> </ListItem>
                                      <ListItem> <KnowledgeItem name="Java" level={5} /> </ListItem>
                                      <ListItem> <KnowledgeItem name="HTML" level={4} /> </ListItem>
                                  </List>
                              </Grid>
                              <Grid item className={classes.skillColumn}>
                                  <List>
                                      <ListItem> <KnowledgeItem name="CSS" level={4} /> </ListItem>
                                      <ListItem> <KnowledgeItem name="Struts" level={3} /> </ListItem>
                                      <ListItem> <KnowledgeItem name="JSP" level={3} /> </ListItem>
                                      <ListItem> <KnowledgeItem name="SQL" level={2} /> </ListItem>
                                  </List>
                              </Grid>
                          </Grid>
                      </Section>
                  </Grid>

                  <Grid item className={classes.resumeItem}>
                      <Section name="Software/Tools*">
                          <Grid container direction="row" justify="space-between">
                              <Grid item className={classes.skillColumn}>
                                  <List>
                                      <ListItem> <KnowledgeItem name="IntelliJ" level={4} /> </ListItem>
                                      <ListItem> <KnowledgeItem name="Git" level={3} /> </ListItem>
                                      <ListItem> <KnowledgeItem name="MySQL" level={2} /> </ListItem>
                                  </List>
                              </Grid>
                              <Grid item className={classes.skillColumn}>
                                  <List>
                                      <ListItem> <KnowledgeItem name="Figma" level={3} /> </ListItem>
                                      <ListItem> <KnowledgeItem name="Affinity Designer" level={3} /> </ListItem>
                                      <ListItem> <KnowledgeItem name="AWS" level={2} /> </ListItem>
                                  </List>
                              </Grid>
                          </Grid>
                    </Section>
                  </Grid>

                  <Grid item className={classes.resumeItem}>
                      <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight">*Ratings are relative to my own skills</Box>
                  </Grid>

                  <Grid item className={classes.resumeItem}>
                      <Section name="Interests">
                          <List>
                              <ListItem><Box fontSize={16} color="primary.main" fontWeight="fontWeightLight">Rock climbing, hiking, and camping</Box></ListItem>
                              <ListItem><Box fontSize={16} color="primary.main" fontWeight="fontWeightLight">Reading sci-fi/fantasy adventure books and graphic novels</Box></ListItem>
                              <ListItem><Box fontSize={16} color="primary.main" fontWeight="fontWeightLight">Playing board and RPG games</Box></ListItem>
                              <ListItem><Box fontSize={16} color="primary.main" fontWeight="fontWeightLight">Drawing, painting, and illustrating</Box></ListItem>
                              <ListItem><Box fontSize={16} color="primary.main" fontWeight="fontWeightLight">Learning UX design</Box></ListItem>
                          </List>
                    </Section>
                  </Grid>

                </Grid>

          </Container>
      </Fade>
  );
}

export default Resume;