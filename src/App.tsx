import React from 'react';
import * as Material from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import Data from './Data.json'

function App() {
  return (
    <Material.Container 
      disableGutters
      maxWidth="lg"
    >
      <Material.Grid
        container
        alignItems="flex-start"
        spacing={2}
        style={{ padding: "40px 20px"}}
      >
        <Material.Grid
          item
          xs={12}
          md={4}
          lg={3}
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
            >
              {Data.Content.Owner}
            </Material.Typography>
          </Material.Paper>
        </Material.Grid>
        <Material.Grid
          item
          xs={12}
          md={8}
          lg={9}
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
