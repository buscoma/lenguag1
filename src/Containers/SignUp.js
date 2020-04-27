import React from "react";
import "../css/SignUp.css";
import {
  List,
  Grid,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Avatar,
  TextField,
  Button
} from "@material-ui/core";

export default class SignUp extends React.Component {
  render() {
    return (
      <div className="SignUp">
        <Dialog open={true}  aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            Juguemos a Lengua-Mática
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Por favor elegí un avatar y decinos tu nombre antes de empezar!
            </DialogContentText>
            <Grid item spacing={10} xs={12}>
              <Button onClickCapture>
                <Avatar
                  alt="Draw pencil addicted love"
                  src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/draw_pencil_addicted_love-512.png"
                />
              </Button>
              <Button>
                <Avatar
                  alt="Coffee zorro avatar cup"
                  src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/coffee_zorro_avatar_cup-512.png"
                />
              </Button>
              <Button>
                <Avatar
                  alt="cactus cacti avatar pirate"
                  src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/cactus_cacti_avatar_pirate-512.png"
                />
              </Button>
              <Button>
                <Avatar
                  alt="Ufo alien space avatar"
                  src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/ufo_alien_space_avatar-512.png"
                />
              </Button>
              <Button>
                <Avatar
                  alt="zombie avatar monster dead"
                  src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/zombie_avatar_monster_dead-512.png"
                />
              </Button>
              <Button>
                <Avatar
                  alt="Avocado scream avatar"
                  src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/avocado_scream_avatar_food-512.png"
                />
              </Button>
              <Button>
                <Avatar
                  alt="Sheep mutton animal avatar"
                  src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/sheep_mutton_animal_avatar-512.png"
                />
              </Button>
              <Button>
                <Avatar
                  alt="Sloth lazybones sluggard avatar"
                  src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/sloth_lazybones_sluggard_avatar-512.png"
                />
              </Button>
            </Grid>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button href="/" color="secondary">
              Volver
            </Button>
            <Button href="/landing_page" color="primary">
              Jugar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
