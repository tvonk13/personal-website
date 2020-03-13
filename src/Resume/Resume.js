import React, { useState, useEffect } from "react";
import { makeStyles, Typography, Container, Grid, List, ListItem, Fade } from "@material-ui/core";
import Section from './Section'
import JobContent from "./JobContent";
import KnowledgeItem from "./KnowledgeItem";
import Header from "./ResumeHeader";

const useStyles = makeStyles(themeObject => ({
  resume: {
    paddingTop: 30,
    marginBottom: 50,
    flexGrow: 1
  },
  skillColumn: {
    flexGrow: 1
  },
}));

function Resume() {
  const styles = useStyles();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])

  return (
    <Fade in={loaded} timeout={1500}>
      <Container maxWidth="md" className={styles.resume}>

        <Grid container justify="flex-start" direction="column" spacing={5}>

          {/* HEADER */}
          <Grid item>
            <Header />
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
              <Grid container direction="row" justify="flex-start">
                <Grid item className={styles.skillColumn}>
                  <List>
                    <ListItem> <KnowledgeItem name="CSS" level={3} /> </ListItem>
                    <ListItem> <KnowledgeItem name="HTML" level={3} /> </ListItem>
                    <ListItem> <KnowledgeItem name="Java" level={4} /> </ListItem>
                    <ListItem> <KnowledgeItem name="JavaScript" level={3} /> </ListItem>
                  </List>
                </Grid>
                <Grid item className={styles.skillColumn}>
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
            <Grid container direction="row" justify="space-between">
                <Grid item className={styles.skillColumn}>
                  <List>
                    <ListItem> <KnowledgeItem name="IntelliJ" level={4} /> </ListItem>
                    <ListItem> <KnowledgeItem name="MySQL" level={3} /> </ListItem>
                    <ListItem> <KnowledgeItem name="Git" level={3} /> </ListItem>
                    <ListItem> <KnowledgeItem name="REST Architecture" level={3} /> </ListItem>
                  </List>
                </Grid>
                <Grid item className={styles.skillColumn}>
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
    </Fade>
  );
}

export default Resume;