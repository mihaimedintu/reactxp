/*
* SvgRect.tsx
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the cross-platform abstraction for
* SVG Rect elements.
*/

import React = require('react');

import SvgTypes = require('../common/Types');

export class SvgRect extends React.Component<SvgTypes.SvgRectProps, {}> {
    render() {
        return (
            <rect
                x={ this.props.x }
                y={ this.props.y }
                rx={ this.props.rx }
                ry={ this.props.ry }
                width={ this.props.width }
                height={ this.props.height }

                fill={ this.props.fillColor }
                fillOpacity={ this.props.fillOpacity }
                fillRule={ this.props.fillRule }

                stroke={ this.props.strokeColor }
                strokeWidth={ this.props.strokeWidth }
                strokeOpacity={ this.props.strokeOpacity }
                // strokeDasharray={ this.props.strokeDasharray }
                strokeDashoffset={ this.props.strokeDashoffset }
                strokeLinecap={ this.props.strokeLinecap }
                strokeLinejoin={ this.props.strokeLinejoin } 
                strokeMiterlimit={ this.props.strokeMiterlimit }
            />
        );
    }
}

export default SvgRect;