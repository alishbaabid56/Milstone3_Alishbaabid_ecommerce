const Reviews = () => {
  const reviews = [
    { 
      id: 1, 
      user: "Ali", 
      review: "Amazing quality products!", 
      productImage: "/post1.png" 
    },
    { 
      id: 2, 
      user: "Sara", 
      review: "Loved the lipstick shades!", 
      productImage: "/post2.png" 
    },
    { 
      id: 3, 
      user: "Ahmed", 
      review: "Fast delivery and great packaging.", 
      productImage: "/post6.png" 
    },
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">What Our Customer Say About Us!</h2>
      <ul className="space-y-6">
        {reviews.map((review) => (
          <li 
            key={review.id} 
            className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <img 
                src={review.productImage} 
                alt={`Product reviewed by ${review.user}`} 
                className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg shadow-lg" 
              />
              <div className="text-center md:text-left">
                <span className="text-lg md:text-xl font-semibold text-gray-800 block">{review.user}</span>
                <p className="text-gray-600 mt-2">{review.review}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;