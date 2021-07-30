import React from 'react';
import * as Material from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import Data from './Data.json';

function App() {
  return (
    <div
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
                position: "sticky"
              }}
              elevation={0}
            >
              <img
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  borderRadius: "10px"
                }}
                src={Data.Images.Portrait.Source}
                alt={Data.Images.Portrait.Alt}
              />
              <Material.Typography
                variant="h3"
                variantMapping={{ h3: "h1" }}
                style={{ fontWeight: "bold" }}
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
                style={{ fontWeight: "bold" }}
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
              <Material.Typography variant="h5">
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
                      maxWidth: "300px" 
                    }}
                  />
                </Material.Grid>
              </Material.Grid>
              <Material.Typography
                variant="h5"
                style={{ paddingTop: "20px" }}
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
                style={{ paddingTop: "20px" }}
              >
                {Data.Content.CertificationHeader}
              </Material.Typography>
              <ul>
                {Data.Content.Certifications.map(Certificate => 
                  <Material.Typography paragraph>
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
                style={{ fontWeight: "bold" }}
              >
                {Data.Content.ExperienceHeader}
              </Material.Typography>
              <Material.Typography>
                {Data.Content.ExperienceTagline}
              </Material.Typography>
            </Material.Paper>
          </Material.Grid>
        </Material.Grid>
      </Material.Container>
    </div>
  );
}

export default App;
