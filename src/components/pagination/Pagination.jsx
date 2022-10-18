import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles  from "../pagination/Pagination.module.scss"

export const Pagination = ({ info, pageNumber, updatePageNumber }) => {



  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  //  useEffect(() => {
  //     // Fetch items from another resources.
  //     const endOffset = itemOffset + itemsPerPage;
  //     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //     setCurrentItems(items.slice(itemOffset, endOffset));
  //     setPageCount(Math.ceil(items.length / itemsPerPage));
  //   }, [itemOffset, itemsPerPage]);

  return (
    <>
      {/* <Items currentItems={currentItems} /> */}
      <style jsx={true}>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        //------
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        marginPagesDisplayed={width < 675 ? 1 : 2}
        pageRangeDisplayed={width < 675 ? 1 :3}
        pageCount={info?.pages}
        onPageChange={pageChange}
      />
    </>
  );
};
