export type StyleKeys =
  | "component"
  | "block"
  | "title"
  | "items"
  | "itemLink"
  | "socialIcons"
  | "socialIcon";

export default (theme: ITheme) => ({
  component: {
    display: "flex",
    backgroundColor: "#232F3F",
    padding: [[50, 120]],
    minHeight: 170,
    [theme.breakpoints.down("sm")]: {
      padding: [[50, 30]]
    }
  },
  block: {
    margin: [[20, 30]],
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      alignItems: "center"
    }
  },
  title: {
    fontFamily: theme.typography.font.family2,
    margin: 10,
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
    color: "#2CCFA0",
    fontSize: 18,
    "& i": {
      marginRight: 10
    }
  },
  items: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
    [theme.breakpoints.down("md")]: {
      alignItems: "center"
    }
  },
  itemLink: {
    fontFamily: theme.typography.font.family2,
    marginBottom: 10,
    fontSize: 17,
    color: "#8492AA",
    textDecoration: "none"
  },
  socialIcons: {
    display: "flex",
    alignItems: "center"
  },
  socialIcon: {
    marginRight: 10,
    border: "2px solid #717F9A",
    minWidth: 40,
    height: 40,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      background:
        "linear-gradient(135deg, #2AC88F 0%, #29A9DB 49.19%, #6A2BB9 100%)"
    }
  }
});
