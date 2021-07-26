import React from 'react';
import * as Material from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import Data from './Data.json'

function App() {
  return (
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
              textAlign: "center"
            }}
            elevation={0}
          >
            <img
              style={{
                width: "100%",
                maxWidth: "300px",
                borderRadius: "10px"
              }}
              src={Data.Images.Portrait}
              alt="Professional portrait"
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
            <hr style={{ 
              width: "182px",
              margin: "30px auto",
              border: "1px solid #ccc"
            }} />
            <Material.Grid
              container
              alignItems="center"
              justifyContent="center"
              spacing={4}
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
            >
              {Data.Content.Header}
            </Material.Typography>
          </Material.Paper>
        </Material.Grid>
      </Material.Grid>
    </Material.Container>
  );
}

export default App;
