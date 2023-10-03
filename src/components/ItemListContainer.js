import React from 'react';



const items = [
  {
    id: 1,
    name: 'iPhone 12',
    description: 'Description of iPhone 12',
    price: 799.99,
    category: 'iPhone',
  },
  {
    id: 2,
    name: 'iPhone SE',
    description: 'Description of iPhone SE',
    price: 399.99,
    category: 'iPhone',
  },
  {
    id: 3,
    name: 'iPhone 11 Pro',
    description: 'Description of iPhone 11 Pro',
    price: 999.99,
    category: 'iPhone',
  },
  {
    id: 4,
    name: 'MacBook Air',
    description: 'Description of MacBook Air',
    price: 1099.99,
    category: 'Mac',
  },
  {
    id: 5,
    name: 'MacBook Pro',
    description: 'Description of MacBook Pro',
    price: 1299.99,
    category: 'Mac',
  },
  {
    id: 6,
    name: 'iMac',
    description: 'Description of iMac',
    price: 1499.99,
    category: 'Mac',
  },
  {
    id: 7,
    name: 'Headphones',
    description: 'Description of Headphones',
    price: 99.99,
    category: 'Accessories',
  },
  {
    id: 8,
    name: 'Phone Case',
    description: 'Description of Phone Case',
    price: 19.99,
    category: 'Accessories',
  },
  {
    id: 9,
    name: 'Wireless Mouse',
    description: 'Description of Wireless Mouse',
    price: 29.99,
    category: 'Accessories',
  },
];

function ItemListContainer() {
  const categorizedItems = items.reduce((acc, item) => {
    acc[item.category] = [...(acc[item.category] || []), item];
    return acc;
  }, {});

  return (
    <div className='container-fluid'>
      <div className='row'>
        {categorizedItems['iPhone'].map((item) => (
          <div key={item.id} className='col-4'>
            <div className='card'>
              <img
                src={`https://via.placeholder.com/150x150?text=${item.name}`}
                alt={item.name}
                className='card-img-top'
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <p className='card-text'>{item.description}</p>
                <p className='card-text'>Price: ${item.price.toFixed(2)}</p>
                <button className='btn btn-primary'>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='row'>
        {categorizedItems['Mac'].map((item) => (
          <div key={item.id} className='col-4'>
            <div className='card'>
              <img
                src={`https://via.placeholder.com/150x150?text=${item.name}`}
                alt={item.name}
                className='card-img-top'
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <p className='card-text'>{item.description}</p>
                <p className='card-text'>Price: ${item.price.toFixed(2)}</p>
                <button className='btn btn-primary'>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='row'>
        {categorizedItems['Accessories'].map((item) => (
          <div key={item.id} className='col-4'>
            <div className='card'>
              <img
                src={`https://via.placeholder.com/150x150?text=${item.name}`}
                alt={item.name}
                className='card-img-top'
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <p className='card-text'>{item.description}</p>
                <p className='card-text'>Price: ${item.price.toFixed(2)}</p>
                <button className='btn btn-primary'>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;