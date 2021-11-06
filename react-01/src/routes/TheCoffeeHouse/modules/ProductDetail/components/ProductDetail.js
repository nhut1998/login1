import React from 'react'

export default class ProductDetail extends React.Component {
    render() {
        const query = new URLSearchParams(this.props.location.search)

        return (
            <div>
                Product detail {this.props.match.params.id}
                {new URLSearchParams(this.props.location.search).get('productName')}
            </div>
        )
    }
}