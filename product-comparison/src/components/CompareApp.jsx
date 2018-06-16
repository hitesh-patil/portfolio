import ReactDOM from 'react-dom';
import ProductList from 'Components/ProductList';
import ProductComparison from 'Components/ProductComparison';
import { productsData } from 'Constants/constants';

class CompareApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compareItems: [],
      compareItemIds: [],
      products: [...productsData]
    };
    this.comparisonStatus = this.comparisonStatus.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  comparisonStatus(product) {
    // let itemIds = [...this.state.compareItemIds];
    let products = [...this.state.compareItems];
    let itemIndex = products.map( item => item.id ).indexOf(product.id);
    let temporaryStuff = [...this.state.products];
    let stuffIndex = temporaryStuff.map(item => item.id).indexOf(product.id);
    
    // itemIds.includes(product.id) ? itemIds.splice(itemIds.indexOf(product.id), 1) : itemIds.push(product.id);
    itemIndex !== -1 || itemIndex == product.id ? products.splice(itemIndex, 1) : products.push(temporaryStuff[stuffIndex]);
    
    this.setState({
      compareItems: products
    });
    // console.log("in comparision status",itemIndex,products,product.id)
  }

  updateTitle(updatedTitle, productId) {
    let something = this.state.products.map(item => {
      if (item.id == productId) {
        item.name = updatedTitle
      }
      return item;
    });
    this.setState({
      products: something
    });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center display-3 mb-5'>Product Comparison</h1>
        <ProductList products={this.state.products} compareCount={this.comparisonStatus} updateProductTitle={this.updateTitle} />
        <div>
          {
            this.state.compareItems.length == 2 &&
            <div>
              <h2 className='text-center mb-4'>Comparison</h2>
              <ProductComparison comparisonList={this.state.compareItems} />
            </div>
          }
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <CompareApp />,
  document.getElementById('compareApp')
);
