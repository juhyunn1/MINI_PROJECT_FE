import React from 'react';
import Pagination from "react-js-pagination";

function Paging({page=1, total=0, setPage=() => console.log('함수 없음')}) {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={12}
      totalItemsCount={total}
      pageRangeDisplayed={5}
      prevPageText={''}
      nextPageText={''}
      onChange={setPage}
    />
  );
};

export default Paging;