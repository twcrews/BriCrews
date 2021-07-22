import React from 'react';
import * as Material from '@material-ui/core';
import * as Icon from '@material-ui/icons';

function App() {
  return (
    <Material.Container 
      disableGutters
      maxWidth="md"
    >
      <Material.Grid
        container
        alignItems="flex-start"
        spacing={2}
      >
        <Material.Grid
          item
          xs={12}
          sm={3}
        >
          <Material.Paper 
            style={{ borderRadius: "20px" }}
            elevation={0}
          >
            <Material.Typography>
              Test sidebar
            </Material.Typography>
          </Material.Paper>
        </Material.Grid>
        <Material.Grid
          item
          xs={12}
          sm={9}
        >
          <Material.Paper 
            style={{ borderRadius: "20px" }}
            elevation={0}
          >
            <Material.Typography>
              Test content
            </Material.Typography>
          </Material.Paper>
        </Material.Grid>
      </Material.Grid>
    </Material.Container>
  );
}

export default App;
