import * as Material from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import { useMediaQuery } from '@material-ui/core';
import Data from './Data.json';

function App() {
  const desktop = useMediaQuery("(min-width: 960px)");

  const headerStyle: React.CSSProperties = { 
    fontFamily: "Merriweather", 
    fontWeight: "bold",
    wordWrap: "break-word"
  };

  return (
    <Material.Box
    style={{ 
      backgroundImage: `url(${Data.Images.Background.Source})`,
      minHeight: "100vh"
    }}
    >
      <Material.Container 
        maxWidth="lg"
      >
        <Material.Grid
          container
          alignItems="flex-start"
          spacing={2}
          style={{ padding: "40px 0"}}
        >
          <Material.Grid
            item
            xs={12}
            md={5}
            lg={4}
          >
            <Material.Paper 
              style={{ 
                borderRadius: "20px",
                padding: "30px",
                textAlign: "center",
                position: desktop ? "fixed" : "relative"
              }}
              elevation={0}
            >
              <img
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  borderRadius: "10px",
                  marginBottom: "20px"
                }}
                src={Data.Images.Portrait.Source}
                alt={Data.Images.Portrait.Alt}
              />
              <Material.Typography
                variant="h3"
                variantMapping={{ h3: "h1" }}
                style={{
                  fontFamily: "Merriweather", 
                  fontSize: "42px",
                  fontWeight: "bold",
                  wordWrap: "break-word"
                }}
                paragraph
              >
                {Data.Content.Owner}
              </Material.Typography>
              <Material.Typography 
                variant="h6"
                style={{ color: "#888" }}
              >
                {Data.Content.Title}
              </Material.Typography>
              <Material.Divider 
                variant="middle" 
                style={{ margin: "20px 0" }}
              />
              <Material.Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={8}
              >
              <Material.Grid item>
                <Material.IconButton
                  href={Data.Links.LinkedIn}
                  target="_blank"
                  style={{ 
                    color: "white",
                    backgroundColor: "#0077b5" 
                  }}
                >
                  <Icon.LinkedIn fontSize="large" />
                </Material.IconButton>
              </Material.Grid>
                <Material.Grid item>
                  <Material.IconButton
                    href={Data.Links.Facebook}
                    target="_blank"
                    style={{ 
                      color: "white",
                      backgroundColor: "#4267b2" 
                    }}
                  >
                    <Icon.Facebook fontSize="large" />
                  </Material.IconButton>
                </Material.Grid>
              </Material.Grid>
            </Material.Paper>
          </Material.Grid>
          <Material.Grid
            item
            xs={12}
            md={7}
            lg={8}
          >
            <Material.Paper 
              style={{ 
                borderRadius: "20px",
                padding: "30px"
              }}
              elevation={0}
            >
              <Material.Typography
                variant="h4"
                variantMapping={{ h4: "h2" }}
                style={headerStyle}
                paragraph
              >
                {Data.Content.Header}
              </Material.Typography>
              {Data.Content.Tagline.split("\n").map(line =>
                <Material.Typography 
                  key={line.slice(0, 5)} 
                  paragraph
                >
                  {line}
                </Material.Typography>)}
              <Material.Typography
                variant="h5"
                style={headerStyle}
              >
                {Data.Content.MembershipHeader}
              </Material.Typography>
              <Material.Grid container>
                <Material.Grid
                  item
                  xs={12}
                  md={7}
                >
                  <ul>
                    {Data.Content.Memberships.map(membership =>
                      <Material.Typography 
                        paragraph
                        key={membership.slice(0, 15)}
                      >
                        <li>{membership}</li>
                      </Material.Typography>
                    )}
                  </ul>
                </Material.Grid>
                <Material.Grid
                  item
                  xs={12}
                  md={5}
                  style={{ textAlign: "center" }}
                >
                  <img
                    src={Data.Images.MembershipLogo.Source}
                    alt={Data.Images.MembershipLogo.Alt}
                    style={{ 
                      width: "100%",
                      maxWidth: "200px",
                      marginBottom: "20px"
                    }}
                  />
                </Material.Grid>
              </Material.Grid>
              <Material.Typography
                variant="h5"
                style={headerStyle}
              >
                {Data.Content.AwardHeader}
              </Material.Typography>
              <Material.List>
                {Data.Content.Awards.map(award =>
                  <Material.ListItem key={award.Label.slice(0, 15)}>
                    <Material.ListItemIcon>
                      <Material.Icon>
                        {award.Icon}
                      </Material.Icon>
                    </Material.ListItemIcon>
                    <Material.ListItemText>
                      {award.Label}
                    </Material.ListItemText>
                  </Material.ListItem>
                )}
              </Material.List>
              <Material.Typography
                variant="h5"
                style={headerStyle}
              >
                {Data.Content.CertificationHeader}
              </Material.Typography>
              <ul>
                {Data.Content.Certifications.map(Certificate => 
                  <Material.Typography 
                    paragraph
                    key={Certificate.slice(0, 10)}
                  >
                    <li>{Certificate}</li>
                  </Material.Typography>
                )}
              </ul>
              <Material.Divider 
                variant="middle"
                style={{ margin: "20px 0" }}
              />
              <Material.Typography
                paragraph
                variant="h4"
                variantMapping={{ h4: "h2" }}
                style={headerStyle}
              >
                {Data.Content.ExperienceHeader}
              </Material.Typography>
              <Material.Typography paragraph>
                {Data.Content.ExperienceTagline}
              </Material.Typography>
              <Material.Box>
              {Data.Content.Experiences.map(experience =>
                <Material.Accordion key={experience.Title}>
                  <Material.AccordionSummary
                    expandIcon={<Icon.ExpandMore />}
                    id={experience.Title.slice(0, 5) + "-accordion"}
                  >
                    <Material.Typography 
                      variant="h5"
                      style={{ fontSize: "18px" }}
                    >
                      {experience.Title}
                    </Material.Typography>
                  </Material.AccordionSummary>
                  <Material.AccordionDetails>
                    <Material.Grid container>
                      {experience.Content.map(item =>
                        <Material.Grid 
                          key={item.Header}
                          item
                          xs={12}
                          zeroMinWidth
                        >
                          <Material.Typography 
                            variant="h6"
                            style={headerStyle}
                          >
                            {item.Header}
                          </Material.Typography>
                          <Material.Typography 
                            paragraph
                            style={{ wordWrap: "break-word" }}
                          >
                            {item.Detail}
                          </Material.Typography>
                        </Material.Grid>
                      )}
                    </Material.Grid>
                  </Material.AccordionDetails>
                </Material.Accordion>
              )}
              </Material.Box>
              <Material.Divider 
                variant="middle"
                style={{ margin: "20px 0" }}
              />
              <footer style={{ textAlign: "center" }}>
                <Material.Typography 
                  paragraph
                  variant="caption"
                  style={{ color: "#666" }}
                >
                  {Data.Content.Footer.Text}
                </Material.Typography>
                <Material.Button
                  variant="contained"
                  disableElevation
                  size="small"
                  href={Data.Links.PageSource}
                >
                  {Data.Content.Footer.Button}
                </Material.Button>
              </footer>
            </Material.Paper>
          </Material.Grid>
        </Material.Grid>
      </Material.Container>
    </Material.Box>
  );
}

export default App;
