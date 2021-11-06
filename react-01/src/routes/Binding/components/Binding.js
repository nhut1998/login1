import React from 'react';

export default class Binding extends React.Component {
    content = 'Content Data'

    render() {
        const title = 'ReactJS - Binding Data'

        return (
            <div>
                {title}
                <div>{this.content}</div>
            </div>
        )
    }
}