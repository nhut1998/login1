import React, { useState } from "react";
import Header from "layouts/Header";

const productArr = [
  {
    id: 1,
    img: "https://product.hstatic.net/1000075078/product/ca_phe_hoa_tan_d6746d7099af4805bafb20ac3067c4ea_large.jpg",
    name: "Cà phê sữa đá",
    price: 44,
  },
  {
    id: 2,
    img: "https://product.hstatic.net/1000075078/product/ca_phe_lon_the_coffee_hous_d0fb16a38de14dafbb3fb52ff91c9e20_large.jpg",
    name: "Combo 4 lon cà phê sữa đá",
    price: 56,
  },
  {
    id: 3,
    img: "https://product.hstatic.net/1000075078/product/ca_phe_goi_the_coffee_house_huong_thom_dinh_cao_peak_flavour_c545070f1d654cc7b3256ae145f184a7_large.jpg",
    name: "Cà phê big flavor - hương thơm đỉnh cao",
    price: 90,
  },
];

export default class TheCoffeeHouse extends React.Component {
  state = {
    products: productArr,
    cart: []
  }

  onBtnClick(prod) {
    const cartClone = [...this.state.cart]
    const idxFound = cartClone.findIndex(item => item.id === prod.id)
    if (~idxFound) {    
      cartClone[idxFound].quantity ++
    } else {
      cartClone.push({...prod, quantity: 1})
    }
    this.setState({ cart: cartClone })
  }

  onChangeQuantity(id, quantityChanged) {
    const cartClone = [...this.state.cart]
    const idxFound = cartClone.findIndex(item => item.id === id.id)
    if (~idxFound) {    
      cartClone[idxFound].quantity += quantityChanged
    }
    this.setState({ cart: cartClone })
  }

  deleteItem(delProd) {
    // const filteredArr = this.state.cart.filter(item => {
    //   return item.id !== delProd
    // })
    // this.setState({ cart: filteredArr })

    this.setState(prev => ({ cart: prev.cart.filter(item => (item.id !== delProd)) }))
  }

  calcSum() {
    return this.state.cart.reduce( (total, item) => {
      return (
        total += (item.price * item.quantity)
      )
    }, 0)
  }

  goToDetail(prod) {
   this.props.history.push(`${prod.id}/detail?productName=${prod.name}`)
  }

  render() {
    console.log(this.props)
    const { products, cart } = this.state
    
    return (
      <React.Fragment>
        <section className='container'>
          <div className='row my-3 text-center'>
            {
              products.map(product => {
                return (
                  <div className="card col-4" key={product.id} >
                  <img src={product.img} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.price.toFixed(3)}đ</p>
                    <button className='btn btn-success' onClick={() => {this.onBtnClick(product)}}>Mua ngay</button>
                    <button className='btn btn-info ms-5' onClick={() => {this.goToDetail(product)}}>Chi tiết</button>
                  </div>
                </div>
                )
              })
            }
          </div>
          <div>
            <table className="table">
              <thead>
                <tr className='text-center'>
                  <th>Hình ảnh sản phẩm</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                  <th>Tùy chỉnh</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map(item => {
                    return (
                      <tr className='text-center' key={item.id}>
                        <td><img src={item.img} width={80} height={80} /></td>
                        <td>{item.name}</td>
                        <td>{item.price.toFixed(3)}</td>
                        <td>
                          <button disabled={item.quantity === 1} className='btn-danger me-2' onClick={() => {this.onChangeQuantity(item, -1)}}>-</button>
                          {item.quantity}
                          <button className='btn-success ms-2' onClick={() => {this.onChangeQuantity(item, +1)}}>+</button>
                          </td>
                        <td>{(item.price * item.quantity).toFixed(3)}đ</td>
                        <td>
                          <button className='btn btn-danger' onClick={() => {this.deleteItem(item.id)}}>X</button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>Tổng cộng</h3>
              <h3>
                {this.calcSum()}
              </h3>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}