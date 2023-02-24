import React, { Component } from "react";
// eslint-disable-next-line 
import withSize from "react-sizeme";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import * as actions from "../store";
import { LooseObject } from "../store/annot/types";

interface StateProps {
  // These come from the stores.
  dimensions: LooseObject;
}

interface DispatchProps {
  // These come from the actions
  updateDimensions: typeof actions.updateDimensions;
}

interface ComponentProps extends StateProps, DispatchProps {
  // These come from the local functions
  children: React.ReactNode;
  size: { width: number; height: number };
  style?: React.CSSProperties;
  monitorHeight?: boolean;
  className: string;
  id?: string;
  refreshMode?: "throttle" | "debounce" | "leading-edge" | "none";
}

export class ResizableDiv extends Component<ComponentProps> {
  componentDidUpdate(prevProps: ComponentProps) {
    const { className, size, updateDimensions, dimensions } = this.props;
    const { width, height } = size;

    if (
      dimensions[className].width !== Math.round(width) ||
      dimensions[className].height !== Math.round(height)
    ) {
      updateDimensions({
        width: Math.round(width),
        height: Math.round(height),
        target: className,
      });
    }
  }

  render() {
    const { className, children } = this.props;
    return <div className={className || ""}>{children}</div>;
  }
}

const mapStateToProps = (state: actions.StateProps): StateProps => ({
  dimensions: state.system.dimensions,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  updateDimensions: bindActionCreators(actions.updateDimensions, dispatch),
});

export default withSize({
  monitorHeight: true,
  refreshMode: "debounce",
})(connect(mapStateToProps, mapDispatchToProps)(ResizableDiv));