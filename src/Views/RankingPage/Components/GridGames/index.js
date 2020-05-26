// Librerias
import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";

// Componentes internos
import {useStyles} from "./Styles";
import {Abc} from "./Assets";

const tileData = [
  {
    img: Abc,
    title: "Image2",
    author: "author",
    href: "",
  },
  {
    img: Abc,
    title: "Image2",
    author: "author",
    href: "",
  },
  {
    img: Abc,
    title: "Image2",
    author: "author",
    href: "",
  },
];

export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} spacing={10} cols={3}>
        {tileData.map((tile) => (
          <GridListTile hover key={tile.img} style={{ minWidth: "200px" }}>
            <a href={tile.href}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title="Click para jugar"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${tile.title}`}>
                    <VideogameAssetIcon className={classes.title} />
                  </IconButton>
                }
              />
            </a>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
