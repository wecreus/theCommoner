function MainPageSelector(props) {
  const { totalPages, currentPage, handlePageChange } = props;

  return (
    <div className="page-selector__hidden">
      <div className="page-selector">
        {[...Array(totalPages)].map((e, i) => (
          <div
            key={i + `pageselector`}
            className={`page-selector__page ${
                currentPage === i ? "page-selector__page-selected" : ""
            }`}
            onClick={() => handlePageChange(i)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default MainPageSelector;
