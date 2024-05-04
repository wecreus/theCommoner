import { useState, useEffect } from "react";

function MainPageSelector(props) {
  const { totalPages, currentPage, handlePageChange } = props;
  /* dublicating state for tracking currentPage ensures that 
  we update this component right away instead of waiting 
  for the animation to finish*/
  const [internalCurrentPage, setInternalCurrentPage] = useState(currentPage);
  console.log("current state", currentPage, internalCurrentPage);
  const internalHandlePageChange = (i) => {
    setInternalCurrentPage(i);
    handlePageChange(i);
  };

  useEffect(() => {
    setInternalCurrentPage(currentPage);
  }, [currentPage]);
  return (
    <div className="page-selector__hidden">
      <div className="page-selector">
        {[...Array(totalPages)].map((e, i) => (
          <div
            key={i + `pageselector`}
            className={`page-selector__page ${
              internalCurrentPage === i ? "page-selector__page-selected" : ""
            }`}
            onClick={() => internalHandlePageChange(i)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default MainPageSelector;
