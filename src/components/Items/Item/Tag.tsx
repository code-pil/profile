
const Tag = ({ category }: { category: number }) => {
  return <div className="absolute top-3 left-3 bg-red-600 text-white text-sm pr-3 pl-3 pt-1 pb-1 rounded-md">{" "}-{category} %</div>;
};

export default Tag;
