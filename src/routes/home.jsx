import { Container, Typography } from "@mui/material";

export default function Home() {
    return (
      <Container maxWidth="md">
        <Container maxWidth="sm" className="card">
          <Typography variant="h6">
            Hey there, thanks for visiting my work-in-progress website. My name is Blake and I'm going to (hopefully) be filling this site with DM tools. Currently I'm developing tools just for Dungeons and Dragon's 5th Edition, but I'll likely expand into other TTRPG's if I follow through with this project.
          </Typography>
          <br />
          <Typography variant="h6">
            <ul>Currently the roadmap is:
              <li>Humanoid monster statblocks determined by level of gear/wealth</li>
              <li>Intelligent enemy tactic traits generator</li>
              <li>Battlefield passive effects (high gravity, holy ground, cursed ground, etc)</li>
              <li>Maybe a homebrew subclass if I get real caffeinated</li>
            </ul>
          </Typography>
        </Container>
      </Container>
    );
  }
