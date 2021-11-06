import React from 'react'

const productArr = [
  {
    id: 1,
    img: 'https://product.hstatic.net/1000075078/product/ca_phe_hoa_tan_d6746d7099af4805bafb20ac3067c4ea_large.jpg',
    name: 'Cà phê sữa đá hoà tan',
    price: 44000
  },
  {
    id: 2,
    img: 'https://product.hstatic.net/1000075078/product/ca_phe_lon_the_coffee_hous_d0fb16a38de14dafbb3fb52ff91c9e20_large.jpg',
    name: 'Combo 4 lon cà phê sữa đá',
    price: 56000
  },
  {
    id: 3,
    img: 'https://product.hstatic.net/1000075078/product/ca_phe_goi_the_coffee_house_huong_thom_dinh_cao_peak_flavour_c545070f1d654cc7b3256ae145f184a7_large.jpg',
    name: 'Cà phê big flavor - hương thơm đỉnh cao',
    price: 90000
  },
]

export default class TheCoffeeHouse extends React.Component {
  state = {
    products: productArr,
    cart: [] // initial value = [], giá trị mặc định là mảng rỗng
  }

  onAddToCart(prod) {
    // cách 1:
    const cartClone = [...this.state.cart] // spread operator
    const idxFound = cartClone.findIndex(item => item.id === prod.id) // check xem sản phẩm mình vừa click chọn có tồn tại ở cart hay chưa?
    if (~idxFound) { // đã tồn tại
      cartClone[idxFound].quantity += 1
    } else { // sản phẩm được chọn chưa có trong giỏ hàng 
      cartClone.push({ ...prod, quantity: 1 })
    }
    this.setState({ cart: cartClone })

    // // cách 2:
    // this.setState({ cart: [...this.state.cart, { ...prod, quantity: 1 }] })

    // cách 3:
    // this.setState(previousState => {
    //   const cartClone = [...previousState.cart]
    //   const idxFound = cartClone.findIndex(item => item.id === prod.id)
    //   if(~idxFound) {
    //     cartClone[idxFound].quantity += 1
    //   } else {
    //     cartClone.push({ ...prod, quantity: 1 })
    //   }

    //   return {
    //     cart: cartClone
    //   }
    // }, () => console.log(this.state.cart))
    // console.log('outside', this.state.cart)
  }

  adjustQuantity(id, direction) {
    const cartClone = [...this.state.cart]
    const idxFound = cartClone.findIndex(item => item.id === id)
    if (~idxFound) {
      if (direction === -1 && cartClone[idxFound].quantity === 1) return
      cartClone[idxFound].quantity += direction
    }
    this.setState({ cart: cartClone })
  }

  deleteFromCart(id) {
    const { cart } = this.state

    // cách 1: dùng callback function trong hàm setState để nhận previous state.
    this.setState(prev => ({ cart: prev.cart.filter(item => item.id !== id) }))

    // this.setState(prev => { // viết rõ ràng
    //   return {
    //     cart: prev.cart.filter(item => {
    //       return item.id !== id
    //     })
    //   }
    // })

    // cách 2: dùng this.state.cart bên ngoài --> hết là pure function rồi.
    this.setState({ cart: cart.filter(item => item.id !== id) })

    // cách 3: dùng splice thì phải clone mảng cart ra.
    const cartClone = [...cart]
    const idxFound = cartClone.findIndex(item => item.id === id)
    if(~idxFound) cartClone.splice(idxFound, 1)
    this.setState({ cart: cartClone })
  }

  calcTotalPrice() {
    return this.state.cart.reduce((total, item) => total += (item.quantity * item.price), 0)
  }

  goToProdDetail(prod) {
    this.props.history.push(`${prod.id}/detail?productName=${prod.name}`)
  }

  render() {
    const { products, cart } = this.state

    return (
      <React.Fragment>
        <section className='container my-3'>
          <div className='row'>
            {
              products.map(prod => {
                return (
                  <div key={prod.id} className='col-4'>
                    <div className="card">
                      <img src={prod.img} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{prod.name}</h5>
                        <p className="card-text">{prod.price}</p>
                        <button className="btn btn-success" onClick={() => this.onAddToCart(prod)}>Mua ngay</button>
                        <button className="btn btn-info ms-2" onClick={() => this.goToProdDetail(prod)}>Chi tiết</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <table className='table'>
            <thead>
              <tr>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th>Cài đặt</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map(item => {
                  const { id, img, name, price, quantity } = item

                  return (
                    <tr key={id}>
                      <td><img width={60} height={60} src={img} alt={name} /></td>
                      <td>{name}</td>
                      <td>{price}</td>
                      <td>
                        <button disabled={quantity === 1} onClick={() => this.adjustQuantity(id, -1)}>-</button>
                        <span className='d-inline-block mx-2'>{quantity}</span>
                        <button onClick={() => this.adjustQuantity(id, +1)}>+</button>
                      </td>
                      <td>{price * quantity}</td>
                      <td>
                        <button className='btn btn-danger' onClick={() => this.deleteFromCart(id)}>Xoá</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

          <div className='display-4'>{this.calcTotalPrice()}</div>
        </section>
      </React.Fragment>
    )
  }
}
