import React from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "components/hoc/withStyles";
import ErrorBoundary from "components/hoc/ErrorBoundary";
import { withStylesProps } from "components/config/types";
import styles, { StyleKeys } from "./styles";
import { IComponentProps, ITheme } from './types';
type Props = IComponentProps<StyleKeys>;

class Footer extends React.Component<Props, any> {
  static propTypes = {
    ...withStylesProps
  };

  render() {
    const { classes } = this.props;
    return (
      <ErrorBoundary>
        <footer className={classes.component}>
          <Grid container>
            <Grid item xs={12} sm={6} lg={3}>
              <div className={classes.block}>
                <div className={classes.title}>
                  <i className="fa fa-industry" />
                  COMPANY INFO
                </div>
                <div className={classes.items}>
                  <a
                    className={classes.itemLink}
                    href="https://kudoo.io/terms-of-service">
                    Terms of Service
                  </a>
                  <a
                    className={classes.itemLink}
                    href="https://kudoo.io/privacy-policy">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </Grid>
            {/* <Grid item xs={12} sm={6} lg={3}>
							<div className={classes.block}>
								<div className={classes.title}>
									<i className="fa fa-phone" />
									CONNECT
								</div>
								<div className={classes.items}>
									<a className={classes.itemLink} href="#support">
										Contact Us
									</a>
									<a className={classes.itemLink} href="#support">
										Support & Training
									</a>
								</div>
							</div>
						</Grid> */}
            {/* <Grid item xs={12} sm={6} lg={3}>
              <div className={classes.block}>
                <div className={classes.title}>
                  <i className="fa fa-phone" />
                  COMMUNITY
                </div>
                <div className={classes.items}>
                  <a className={classes.itemLink} href="https://blog.kudoo.io">
                    Blog
                  </a>
                  <a className={classes.itemLink} href="https://docs.kudoo.io">
                    Docs & Tutorials
                  </a>
                  <a
                    className={classes.itemLink}
                    href="https://community.kudoo.io">
                    Forum
                  </a>
                </div>
              </div>
            </Grid> */}
            <Grid item xs={12} sm={6} lg={3}>
              <div className={classes.block}>
                <div className={classes.title}>
                  <i className="fa fa-users" />
                  SOCIALISE
                </div>
                <div className={classes.socialIcons}>
                  <a
                    className={classes.socialIcon}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/kudoocloud/">
                    <i className="fa fa-facebook" />
                  </a>
                  <a
                    className={classes.socialIcon}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/kudoocloud">
                    <i className="fa fa-twitter" />
                  </a>
                  <a
                    className={classes.socialIcon}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/kudoocloud/">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a
                    className={classes.socialIcon}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/kudoo-cloud">
                    <i className="fa fa-github" />
                  </a>
                  <a
                    className={classes.socialIcon}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UC-uK_8X0F7sv3jeDjNmwczA">
                    <i className="fa fa-youtube" />
                  </a>
                </div>
              </div>
            </Grid>
          </Grid>
        </footer>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(Footer) as any; // TODO: Remove "as any" once we refactor withStyles to typescript
