import ProductItem from 'Components/ProductItem';

export default class ProductList extends React.Component {
  render() {
    return (
      <ul className='list-unstyled d-flex flex-wrap flex-md-nowrap justify-content-center mb-5'>
        {
          this.props.products.map(item => {
            return <ProductItem item={item} itemCompareStatus={this.props.compareCount} something={this.props.updateProductTitle} />
          })
        }
      </ul>
    );
  }
};