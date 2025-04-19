import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/doctors?category=${category.name.toLowerCase()}`} className="block">
      <div 
        className="flex flex-col items-center justify-center p-4 rounded-xl" 
        style={{ backgroundColor: category.color || '#E2F4FF' }}
      >
        <div className="text-2xl mb-2">{category.icon}</div>
        <span className="text-sm font-medium text-gray-800">{category.name}</span>
      </div>
    </Link>
  );
};

export default CategoryCard;
