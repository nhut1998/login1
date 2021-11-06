import React from 'react'

export default class ProductDetail extends React.Component {
  render() {
    const query = new URLSearchParams(this.props.location.search)
    console.log("🚀 ~ file: ProductDetail.js ~ line 6 ~ ProductDetail ~ render ~ query", query.get('productName'))

    return (
      <div>
        Product detail {this.props.match.params.prodId}
        {new URLSearchParams(this.props.location.search).get('productName')}
      </div>
    )
  }
}
