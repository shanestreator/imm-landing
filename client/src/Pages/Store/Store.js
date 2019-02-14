import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterStoreOption } from '../../Validation/Store'
import uuidv1 from 'uuid/v1'

// import { addItemToCart } from '../../Redux/Actions/cartActions'
import { getAllProducts } from '../../Redux/Actions/productActions'
import { packInfo } from '../../Utils/Utils'

// Components
// import StoreCartItem from '../../Components/Common/StoreCartItem'
import StoreProductItem from '../../Components/Common/StoreProductItem'

// CSS
import './Store.css'

class Options extends Component {
  state = {
    couplePack: '0',
    familyPack: '0',
    groupPack: '0',
    businessPack: '0',
    companyPack: '0',
    bigCompanyPack: '0'
  }

  filterName = name => {
    return [
      'couplePack',
      'familyPack',
      'groupPack',
      'businessPack',
      'companyPack',
      'bigCompanyPack'
    ].filter(el => el !== name)
  }

  onClickGoToCart = () => {
    this.props.history.push('/cart')
  }

  onChange = evt => {
    const { name, value } = evt.target

    const filteredName = this.filterName(name)
    // console.log('filteredName: ', filteredName)
    this.setState({
      [name]: value,
      [filteredName[0]]: '0',
      [filteredName[1]]: '0',
      [filteredName[2]]: '0',
      [filteredName[3]]: '0',
      [filteredName[4]]: '0'
    })
  }

  onSubmit = evt => {
    evt.preventDefault()
    // Expects an object with a single property (pack type) set equal to the quantity desired
    const pack = filterStoreOption(this.state)
    const packSelected = Object.keys(pack)[0]

    const item = {
      pack: packSelected,
      quantity: Number(pack[packSelected]),
      price: packInfo(packSelected).price
    }

    this.props.addItem(item)

    const itemData = {
      id: uuidv1(),
      pack: packSelected,
      quantity: Number(pack[packSelected]),
      created_At: Date()
    }

    this.props.addItemToCart(itemData)
  }

  render() {
    // console.log('state: ', this.state)
    return (
      <div
        id="container"
        className="container py-5 pb-3 bg-light d-flex justify-content-center"
      >
        <div className="row">
          <div className="pricing-header px-5 text-center">
            <h1 className="display-4">Pricing</h1>
            <p className="lead">
              Quickly build an effective pricing table for your potential
              customers with this Bootstrap example. It’s built with default
              Bootstrap components and utilities with little customization.
            </p>
          </div>

          <div className="container px-5 pt-3">
            <div className="card-deck mb-3 text-center">
              <div className="row">
                {/* -------------------- $5 -------------------- */}
                <StoreProductItem
                  title="Couple Pack"
                  name="couplePack"
                  imgUrl="/images/manuals/imm-2.png"
                  priceEach="5"
                  numManuals="2"
                  item={this.props.item}
                  statePack={this.state.couplePack}
                  onClickGoToCart={this.onClickGoToCart}
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                />
                {/* -------------------- $4.50 -------------------- */}
                <StoreProductItem
                  title="Family Pack"
                  name="familyPack"
                  imgUrl="/images/manuals/imm-10.png"
                  priceEach="4.50"
                  numManuals="10"
                  item={this.props.item}
                  statePack={this.state.familyPack}
                  onClickGoToCart={this.onClickGoToCart}
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                />
                {/* -------------------- $4 -------------------- */}
                <StoreProductItem
                  title="Group Pack"
                  name="groupPack"
                  imgUrl="/images/manuals/imm-25.png"
                  priceEach="4"
                  numManuals="25"
                  item={this.props.item}
                  statePack={this.state.groupPack}
                  onClickGoToCart={this.onClickGoToCart}
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                />
                {/* -------------------- $3.50 -------------------- */}
                <StoreProductItem
                  title="Business Pack"
                  name="businessPack"
                  imgUrl="/images/manuals/imm-100.png"
                  priceEach="3.50"
                  numManuals="100"
                  item={this.props.item}
                  statePack={this.state.businessPack}
                  onClickGoToCart={this.onClickGoToCart}
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                />
                {/* -------------------- $3 -------------------- */}
                <StoreProductItem
                  title="Company Pack"
                  name="companyPack"
                  imgUrl="/images/manuals/imm-1000.png"
                  priceEach="3.00"
                  numManuals="1,000"
                  item={this.props.item}
                  statePack={this.state.companyPack}
                  onClickGoToCart={this.onClickGoToCart}
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                />
                {/* -------------------- $2.50 -------------------- */}
                <StoreProductItem
                  title="Big-Company Pack"
                  name="bigCompanyPack"
                  imgUrl="/images/manuals/imm-5000.png"
                  priceEach="2.50"
                  numManuals="5,000"
                  item={this.props.item}
                  statePack={this.state.bigCompanyPack}
                  onClickGoToCart={this.onClickGoToCart}
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = ({ item }) => ({
  item
})

export default connect(
  mapState,
  { getAllProducts }
)(Options)
